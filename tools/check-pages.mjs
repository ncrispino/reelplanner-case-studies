#!/usr/bin/env node
// The check for the published pages (plan 2026-10-08-case-study-page, step 5). It serves docs/ at its Pages path,
// opens the front page, the study page, the watch page with each video and the site's first pages at 390 × 844 and
// 1440 × 900, and fails on a console error, a link that does not resolve inside docs/, a page wider than the window,
// an event with no source, or a quote its source does not hold word for word.
//
//   node tools/check-pages.mjs     # ✓ 24 views … · 70 events, each with its source
//
// It uses the puppeteer-core that reelplanning installs and the headless Chrome HyperFrames keeps in its cache.
import { createServer } from "node:http";
import { readFileSync, existsSync, statSync, readdirSync } from "node:fs";
import { join, extname, dirname } from "node:path";
import { execFileSync } from "node:child_process";
import { execSync } from "node:child_process";
import { createRequire } from "node:module";
import { homedir } from "node:os";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DOCS = join(ROOT, "docs"), BASE = "/reelplanning-case-studies/";
// every study: a folder at the root with a study.json
const STUDIES = readdirSync(ROOT).filter((d) => existsSync(join(ROOT, d, "study.json"))).map((d) => ({ dir: join(ROOT, d), ...JSON.parse(readFileSync(join(ROOT, d, "study.json"), "utf8")) }));
const problems = [];
let eventCount = 0;
for (const STUDYCFG of STUDIES) {
const STUDY = STUDYCFG.dir;

// --- the timeline: every event has a source, and every quote is in it word for word
const T = JSON.parse(readFileSync(join(STUDY, "timeline.json"), "utf8"));
const transcript = execFileSync("unzip", ["-p", join(STUDY, "transcript.zip"), "transcript.jsonl"], { maxBuffer: 1 << 30 }).toString("utf8").split("\n");
const commits = readFileSync(join(STUDY, "commits.txt"), "utf8");
const textOf = (line) => {
  const c = JSON.parse(line).message?.content;
  return Array.isArray(c) ? c.filter((x) => x.type === "text").map((x) => x.text).join(" ") : c || "";
};
const strings = (o, acc = []) => { if (typeof o === "string") acc.push(o); else if (o && typeof o === "object") for (const v of Object.values(o)) strings(v, acc); return acc; };
const has = (hay, quote) => quote.split("…").map((s) => s.trim()).filter(Boolean).every((part) => hay.includes(part));
for (const e of T.events) {
  if (!e.source) { problems.push(`✗ event "${e.id}" has no source`); continue; }
  const [kind, ref] = e.source.startsWith("transcript:") ? ["t", +e.source.split(":")[1]] : e.source.startsWith("commit:") ? ["c", e.source.slice(7)] : ["f", e.source];
  if (kind === "t") {
    const line = transcript[ref - 1];
    if (!line) { problems.push(`✗ event "${e.id}": ${e.source} is not a line of the transcript`); continue; }
    if (e.words && !has(textOf(line), e.words)) problems.push(`✗ event "${e.id}": quote not found word for word in ${e.source}`);
  } else if (kind === "c") {
    if (!commits.includes(ref)) problems.push(`✗ event "${e.id}": commit ${ref} is not in commits.txt`);
    else if (e.title && !commits.split("\n").find((l) => l.startsWith(ref))?.includes(e.title)) problems.push(`✗ event "${e.id}": its line is not commit ${ref}'s subject`);
  } else {
    const f = join(STUDY, ref.replace(/^project\//, "project/"));
    if (!existsSync(f)) { problems.push(`✗ event "${e.id}": ${ref} does not exist`); continue; }
    const all = strings(JSON.parse(readFileSync(f, "utf8"))).join("\n");
    for (const q of [e.words, ...(e.comments ?? []).map((c) => c.words), ...(e.answers ?? []).map((a) => a.answer)].filter(Boolean))
      if (!has(all, q)) problems.push(`✗ event "${e.id}": quote "${q.slice(0, 40)}…" not found word for word in ${ref.split("/").pop()}`);
  }
}

eventCount += T.events.length;
}

// --- a static server for docs/, at its Pages path
const TYPES = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".jpg": "image/jpeg", ".png": "image/png",
  ".svg": "image/svg+xml", ".mp4": "video/mp4", ".mp3": "audio/mpeg", ".woff2": "font/woff2", ".webp": "image/webp", ".txt": "text/plain" };
const resolve = (url) => {
  const p = decodeURIComponent(new URL(url, "http://x").pathname);
  if (!p.startsWith(BASE)) return null;
  let f = join(DOCS, p.slice(BASE.length));
  if (existsSync(f) && statSync(f).isDirectory()) f = join(f, "index.html");
  return existsSync(f) ? f : null;
};
const server = createServer((req, res) => {
  const f = resolve(req.url);
  if (!f) { res.writeHead(404); res.end(); return; }
  res.writeHead(200, { "content-type": TYPES[extname(f)] || "application/octet-stream" }); res.end(readFileSync(f));
}).listen(0, "127.0.0.1");
await new Promise((r) => server.on("listening", r));
const ORIGIN = `http://127.0.0.1:${server.address().port}`;

// --- the browser
const req = createRequire(join(execSync("npm root -g").toString().trim(), "reelplanning", "package.json"));
const puppeteer = req("puppeteer-core");
const cache = join(homedir(), ".cache/hyperframes/chrome/chrome-headless-shell"); let exe;
for (const v of existsSync(cache) ? readdirSync(cache).sort().reverse() : []) for (const d of readdirSync(join(cache, v))) { const p = join(cache, v, d, "chrome-headless-shell"); if (existsSync(p) && !exe) exe = p; }
if (!exe) { console.error("✗ no headless Chrome: run `reelplanning setup`"); process.exit(2); }
const browser = await puppeteer.launch({ executablePath: exe, headless: true, args: ["--no-sandbox"] });

const PAGES = [""], allVideos = [];
for (const st of STUDIES) {
  const { videos } = JSON.parse(readFileSync(join(DOCS, st.slug, "watch/videos.json"), "utf8"));
  for (const v of videos) allVideos.push({ ...v, study: st.slug });
  PAGES.push(`${st.slug}/`, `${st.slug}/watch/`, ...videos.map((v) => `${st.slug}/watch/?v=${v.slug}`), ...(st.pages ?? []).map((p) => `${st.slug}/${p}`));
}
const SIZES = [[390, 844], [1440, 900]];
const links = new Set();
let views = 0;
for (const [w, h] of SIZES) for (const p of PAGES) {
  const pg = await browser.newPage(); await pg.setViewport({ width: w, height: h });
  const bad = [];
  pg.on("pageerror", (e) => bad.push(`error: ${String(e.message || e).slice(0, 100)}`));
  pg.on("console", (m) => { if (m.type() === "error" && !/youtube|spotify|coverartarchive|Failed to load resource/i.test(m.text())) bad.push(`console: ${m.text().slice(0, 100)}`); });
  pg.on("response", (r) => { if (r.url().startsWith(ORIGIN) && r.status() >= 400) bad.push(`${r.status()} ${r.url().slice(ORIGIN.length)}`); });
  await pg.setRequestInterception(true);
  pg.on("request", (r) => (r.url().startsWith(ORIGIN) || r.url().startsWith("data:") || r.url().startsWith("blob:") ? r.continue() : r.respond({ status: 204, body: "" })));
  await pg.goto(ORIGIN + BASE + p, { waitUntil: "networkidle0", timeout: 60000 }).catch((e) => bad.push(`load: ${e.message}`));
  const wide = await pg.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1);
  if (wide) bad.push(`wider than the window (${w} px)`);
  for (const href of await pg.evaluate(() => [...document.querySelectorAll("a[href]")].map((a) => a.href))) if (href.startsWith(ORIGIN)) links.add(href.split("#")[0]);
  for (const b of bad) problems.push(`✗ ${w}×${h} /${p}: ${b}`);
  views++; await pg.close();
}
await browser.close();
// every link inside docs/ resolves (a watch page link: its video exists too)
for (const href of links) {
  if (!resolve(href)) problems.push(`✗ a broken link: ${href.slice(ORIGIN.length)}`);
  const v = new URL(href).searchParams.get("v");
  if (v && !allVideos.some((x) => x.slug === v)) problems.push(`✗ a broken link: ${href.slice(ORIGIN.length)} names no video`);
}
for (const v of allVideos) if (!existsSync(join(DOCS, v.study, "watch", v.src))) problems.push(`✗ video "${v.slug}": ${v.src} is missing`);
server.close();

if (problems.length) { for (const p of problems) console.log(p); process.exit(1); }
console.log(`✓ ${views} views at ${SIZES.map(([a, b]) => `${a} × ${b}`).join(" and ")} · ${links.size} links inside docs/ · ${STUDIES.length} stud${STUDIES.length === 1 ? "y" : "ies"}, ${eventCount} events, each with its source, every quote word for word`);
