// The phone check: open every kind of page at 375 × 812 in headless Chrome, save a screenshot of each to checks/,
// and fail on a sideways scroll, a tap target under 44 px, or a console error.
// node tools/check-phone.mjs   (after `astro build`; serves dist/ itself)
import { createServer } from "node:http";
import { readFileSync, existsSync, statSync, mkdirSync, readdirSync } from "node:fs";
import { join, extname } from "node:path";
import { homedir } from "node:os";
import puppeteer from "puppeteer-core";

const DIST = new URL("../dist/", import.meta.url).pathname;
const VIEWS = [
  ["timeline", "/"], ["era", "/era/electric/"], ["album", "/album/blonde-on-blonde/"], ["song", "/song/like-a-rolling-stone/"],
  ["moment", "/moment/newport-1965/"], ["long-title", "/song/subterranean-homesick-blues/"], ["threads", "/threads/"], ["thread", "/thread/borrowed-tunes/"],
  ["map", "/map/masters-of-war/"], ["search", "/search/?q=1966"], ["about", "/about/"], ["not-found", "/album/blonde-on-blond/"],
];
const TYPES = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".webp": "image/webp", ".jpg": "image/jpeg", ".svg": "image/svg+xml" };

function chromePath() {
  if (process.env.CHROME_PATH) return process.env.CHROME_PATH;
  // the HyperFrames cache keeps chrome-headless-shell/<version>/<platform>/chrome-headless-shell
  const base = join(homedir(), ".cache/hyperframes/chrome/chrome-headless-shell");
  for (const v of existsSync(base) ? readdirSync(base).sort().reverse() : []) {
    for (const dir of readdirSync(join(base, v))) {
      const p = join(base, v, dir, "chrome-headless-shell");
      if (existsSync(p)) return p;
    }
  }
  throw new Error("no Chrome found: set CHROME_PATH");
}

const server = createServer((req, res) => {
  const path = decodeURIComponent(new URL(req.url, "http://x").pathname);
  let file = join(DIST, path);
  if (existsSync(file) && statSync(file).isDirectory()) file = join(file, "index.html");
  if (!existsSync(file)) { res.writeHead(404, { "Content-Type": "text/html" }); res.end(readFileSync(join(DIST, "404.html"))); return; }
  res.writeHead(200, { "Content-Type": TYPES[extname(file)] ?? "application/octet-stream" });
  res.end(readFileSync(file));
}).listen(0);
const origin = `http://127.0.0.1:${server.address().port}`;
mkdirSync(new URL("../checks/", import.meta.url), { recursive: true });

const browser = await puppeteer.launch({ executablePath: chromePath(), headless: true, args: ["--no-sandbox"] });
const problems = [];
for (const [name, path] of VIEWS) {
  const page = await browser.newPage();
  await page.setViewport({ width: 375, height: 812, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  // the site's own files must all load; a failed load of an outside file (stubbed below) is not the site's fault
  page.on("console", (m) => { if (m.type() === "error" && !/Failed to load resource/.test(m.text())) errors.push(m.text()); });
  page.on("response", (res) => {
    const u = res.url();
    if (u.startsWith(origin) && res.status() >= 400 && !(name === "not-found" && res.request().isNavigationRequest()))
      errors.push(`${res.status()} for ${u.slice(origin.length)}`);
  });
  // outside requests (covers, players) are not part of the check: answer them empty so the run needs no network;
  // the covers then show their drawn fallback, which is what the check sees
  await page.setRequestInterception(true);
  page.on("request", (r) => (r.url().startsWith(origin) ? r.continue() : r.respond({ status: 404, body: "" })));
  await page.goto(origin + path, { waitUntil: "networkidle0" });
  await new Promise((r) => setTimeout(r, 300));
  const r = await page.evaluate(() => {
    const wide = document.documentElement.scrollWidth;
    const small = [];
    for (const el of document.querySelectorAll("a[href], button, input, [role=tab]")) {
      // a link inside running text is read, not tapped as a target; SVG dots on the map are skipped
      if (el.closest("p, figcaption, li .soft, svg")) continue;
      const b = el.getBoundingClientRect();
      if (!b.width || !b.height || getComputedStyle(el).visibility === "hidden") continue;
      if (b.height < 44 && b.width < 44) small.push(`${el.tagName.toLowerCase()} "${(el.textContent || el.getAttribute("aria-label") || "").trim().slice(0, 30)}" ${Math.round(b.width)}×${Math.round(b.height)}`);
      else if (b.height < 44) small.push(`${el.tagName.toLowerCase()} "${(el.textContent || el.getAttribute("aria-label") || "").trim().slice(0, 30)}" ${Math.round(b.height)} px tall`);
    }
    // a swipe panel (a child of a snapping scroller) must fit its scroller, or its right side is cut off
    const cut = [];
    for (const sc of document.querySelectorAll("*")) {
      const st = getComputedStyle(sc);
      if (!/(auto|scroll)/.test(st.overflowX) || st.scrollSnapType === "none") continue;
      for (const ch of sc.children) {
        const w = ch.getBoundingClientRect().width;
        if (w > sc.clientWidth + 1) cut.push(`${ch.id || ch.className} is ${Math.round(w)} px in a ${sc.clientWidth} px scroller`);
      }
    }
    // a heading whose words run past the screen's edge (a long title in a big condensed face)
    for (const h of document.querySelectorAll("h1, h2")) {
      if (h.scrollWidth > h.clientWidth + 1) cut.push(`heading "${h.textContent.trim().slice(0, 30)}" runs past its box`);
    }
    return { wide, small, cut };
  });
  await page.screenshot({ path: new URL(`../checks/${name}.png`, import.meta.url).pathname });
  if (r.wide > 375) problems.push(`✗ ${path}: page is ${r.wide} px wide`);
  for (const c of r.cut.slice(0, 5)) problems.push(`✗ ${path}: cut off: ${c}`);
  for (const s of r.small.slice(0, 5)) problems.push(`✗ ${path}: tap target under 44 px: ${s}`);
  for (const e of errors) problems.push(`✗ ${path}: error: ${e}`);
  await page.close();
}

// a tap on a dot opens its song (step 1 of the plan 2026-10-07-desktop: the map used to take the pointer as soon as
// it went down, so the click after it landed on the map, not on the dot's link). Tried twice: a touch tap, and a press
// and release of a pointer (headless Chrome routes a synthetic tap past pointer capture; a press does not).
for (const how of ["tap", "press"]) {
  const path = "/map/masters-of-war/";
  const page = await browser.newPage();
  await page.setViewport({ width: 375, height: 812, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  await page.setRequestInterception(true);
  page.on("request", (r) => (r.url().startsWith(origin) ? r.continue() : r.respond({ status: 404, body: "" })));
  await page.goto(origin + path, { waitUntil: "networkidle0" });
  await new Promise((r) => setTimeout(r, 300));
  const target = await page.evaluate(() => {
    const map = document.querySelector(".map svg");
    if (!map) return null;
    map.scrollIntoView({ block: "center" });
    const box = map.getBoundingClientRect();
    // a dot other than the opened song, inside the map, that a finger at its middle actually reaches
    for (const a of map.querySelectorAll("a")) {
      const d = a.querySelector(".dot"); if (!d || d.classList.contains("focus")) continue;
      const b = d.getBoundingClientRect(), x = b.left + b.width / 2, y = b.top + b.height / 2;
      if (x < box.left + 20 || x > box.right - 20 || y < box.top + 20 || y > box.bottom - 20) continue;
      if (document.elementFromPoint(x, y)?.closest("a") !== a) continue;
      return { x, y, id: (a.getAttribute("href") ?? "").split("/").filter(Boolean).pop() };
    }
    return null;
  });
  if (!target) problems.push(`✗ ${path}: no dot to tap on the map`);
  else {
    if (how === "tap") await page.touchscreen.tap(target.x, target.y);
    else await page.mouse.click(target.x, target.y);
    const want = `/song/${target.id}/`;
    for (let i = 0; i < 40 && !page.url().endsWith(want); i++) await new Promise((r) => setTimeout(r, 100));
    if (!page.url().endsWith(want)) problems.push(`✗ ${path}: a ${how} on the dot "${target.id}" did not open its song (still on ${page.url().slice(origin.length)})`);
  }
  await page.close();
}
await browser.close();
server.close();
if (problems.length) { for (const p of problems) console.log(p); process.exit(1); }
console.log(`✓ ${VIEWS.length} views at 375×812, screenshots in checks/; a tap on a map dot opens its song`);
