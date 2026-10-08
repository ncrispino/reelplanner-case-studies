// The desktop check (plan 2026-10-07-desktop, step 6): open the phone check's 12 views at 1440 × 900 and 1100 × 800 in
// headless Chrome, save a screenshot of each to checks/desktop/, and fail when a page looks or works like a phone page
// on a computer: a sideways scroll; the bottom bar, or a control that does nothing at that width (the Cards | Map
// toggle), showing; an era page whose window background is not the era's; content narrower than 60 % of the window on
// a page meant to be wide; a map dot that, clicked, neither opens a song nor selects it; ‹ › that move nothing; any error.
// It also checks the fuller site's new parts on every era, album and moment page (plan 2026-10-07-fuller, step 6; see
// the end of this file).
// node tools/check-desktop.mjs [--shots <dir>]   (after `astro build`; serves dist/ itself)
//   --shots <dir>  also writes the 1440 × 900 screenshots, and the map page with a dot selected, into <dir>
import { createServer } from "node:http";
import { readFileSync, existsSync, statSync, mkdirSync, readdirSync } from "node:fs";
import { join, extname, resolve } from "node:path";
import { homedir } from "node:os";
import puppeteer from "puppeteer-core";

const DIST = new URL("../dist/", import.meta.url).pathname;
// the same views as tools/check-phone.mjs
const VIEWS = [
  ["timeline", "/"], ["era", "/era/electric/"], ["album", "/album/blonde-on-blonde/"], ["song", "/song/like-a-rolling-stone/"],
  ["moment", "/moment/newport-1965/"], ["long-title", "/song/subterranean-homesick-blues/"], ["threads", "/threads/"], ["thread", "/thread/borrowed-tunes/"],
  ["map", "/map/masters-of-war/"], ["search", "/search/?q=1966"], ["about", "/about/"], ["not-found", "/album/blonde-on-blond/"],
];
const SIZES = [[1440, 900], [1100, 800]];
// pages whose window must wear their era's background, and pages meant to use the width
const ERA_VIEWS = new Set(["timeline", "era", "album", "song", "moment", "long-title"]);
const NARROW_OK = new Set(["not-found"]);
const TYPES = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".webp": "image/webp", ".jpg": "image/jpeg", ".svg": "image/svg+xml" };

const shotsArg = process.argv.indexOf("--shots");
const SHOTS = shotsArg > 0 ? resolve(process.argv[shotsArg + 1]) : null;

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
const OUT = new URL("../checks/desktop/", import.meta.url).pathname;
mkdirSync(OUT, { recursive: true });
if (SHOTS) mkdirSync(SHOTS, { recursive: true });

const browser = await puppeteer.launch({ executablePath: chromePath(), headless: true, args: ["--no-sandbox"] });
const problems = [];
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

async function open(name, path, w, h, errors) {
  const page = await browser.newPage();
  await page.setViewport({ width: w, height: h, deviceScaleFactor: 1 });
  page.on("pageerror", (e) => errors.push(e.message));
  // the site's own files must all load; a failed load of an outside file (stubbed below) is not the site's fault
  page.on("console", (m) => { if (m.type() === "error" && !/Failed to load resource/.test(m.text())) errors.push(m.text()); });
  page.on("response", (res) => {
    const u = res.url();
    if (u.startsWith(origin) && res.status() >= 400 && !(name === "not-found" && res.request().isNavigationRequest()))
      errors.push(`${res.status()} for ${u.slice(origin.length)}`);
  });
  // outside requests (covers, players) are answered empty so the run needs no network
  await page.setRequestInterception(true);
  page.on("request", (r) => (r.url().startsWith(origin) ? r.continue() : r.respond({ status: 404, body: "" })));
  await page.goto(origin + path, { waitUntil: "networkidle0" });
  await wait(400);
  return page;
}

/** A dot on the map other than the opened song, whose middle a click actually reaches. */
const findDot = () => {
  const svg = document.querySelector(".map svg");
  if (!svg) return null;
  svg.scrollIntoView({ block: "center", behavior: "instant" });
  const box = svg.getBoundingClientRect();
  for (const a of svg.querySelectorAll("a")) {
    const d = a.querySelector(".dot"); if (!d || d.classList.contains("focus")) continue;
    const b = d.getBoundingClientRect(), x = b.left + b.width / 2, y = b.top + b.height / 2;
    if (x < box.left + 30 || x > box.right - 70 || y < box.top + 30 || y > box.bottom - 30) continue;
    if (document.elementFromPoint(x, y)?.closest("a") !== a) continue;
    return { x, y, id: (a.getAttribute("href") ?? "").split("/").filter(Boolean).pop() };
  }
  return null;
};

for (const [w, h] of SIZES) {
  const size = `${w} × ${h}`;
  for (const [name, path] of VIEWS) {
    const errors = [];
    const page = await open(name, path, w, h, errors);
    const bad = (what) => problems.push(`✗ ${name} at ${size}: ${what}`);
    const r = await page.evaluate((eraView) => {
      const shows = (el) => { if (!el) return false; const b = el.getBoundingClientRect(); const st = getComputedStyle(el);
        return b.width > 0 && b.height > 0 && st.visibility !== "hidden" && st.display !== "none" && !!el.offsetParent; };
      const out = { wide: document.documentElement.scrollWidth, inner: document.documentElement.clientWidth };
      out.toggle = [...document.querySelectorAll(".toggle")].some(shows);
      out.tabbar = shows(document.querySelector(".tabbar"));
      out.header = shows(document.querySelector(".masthead"));
      // the window's background at its right edge, against the era's own paper colour
      if (eraView) {
        const probe = document.createElement("div"); probe.style.cssText = "position:absolute;width:1px;height:1px;background:var(--paper)";
        document.body.append(probe); const paper = getComputedStyle(probe).backgroundColor; probe.remove();
        // (low on the window, clear of the ‹ › buttons at its middle)
        let el = document.elementFromPoint(innerWidth - 3, Math.round(innerHeight * 0.85));
        let bg = "rgba(0, 0, 0, 0)";
        while (el) { const c = getComputedStyle(el).backgroundColor; if (c !== "rgba(0, 0, 0, 0)" && c !== "transparent") { bg = c; break; } el = el.parentElement; }
        if (bg === "rgba(0, 0, 0, 0)") bg = getComputedStyle(document.body).backgroundColor;
        out.era = { era: document.body.dataset.era, paper, bg, at: el ? el.tagName.toLowerCase() + (el.className && typeof el.className === "string" ? "." + el.className.split(" ")[0] : "") : "body" };
      }
      // how much of the window the content spans: every element showing inside main
      let l = Infinity, rgt = -Infinity;
      for (const el of document.querySelectorAll("main *")) {
        const b = el.getBoundingClientRect();
        if (b.width < 2 || b.height < 2 || getComputedStyle(el).visibility === "hidden") continue;
        l = Math.min(l, Math.max(0, b.left)); rgt = Math.max(rgt, Math.min(innerWidth, b.right));
      }
      out.span = rgt > l ? rgt - l : 0;
      return out;
    }, ERA_VIEWS.has(name));
    if (r.wide > r.inner) bad(`page is ${r.wide} px wide, it scrolls sideways`);
    if (r.toggle) bad(`"Cards | Map" shows while both views do`);
    if (r.tabbar) bad(`the phone's bottom bar shows`);
    if (!r.header) bad(`no header`);
    if (r.era && r.era.bg !== r.era.paper) bad(`window background ${r.era.bg} (${r.era.at}) is not the ${r.era.era} era's ${r.era.paper}`);
    if (!NARROW_OK.has(name) && r.span < 0.6 * w) bad(`content spans ${Math.round(r.span)} px, ${Math.round((100 * r.span) / w)} % of the window (want 60 % or more)`);
    const shot = `${name}-${w}x${h}.png`;
    await page.screenshot({ path: join(OUT, shot) });
    if (SHOTS && w === 1440) await page.screenshot({ path: join(SHOTS, `${name}.png`) });

    // controls that must do something at this width
    if (name === "timeline" || name === "era") {
      const before = new URL(page.url()).pathname;
      const btn = await page.$(".timeline .step.next");
      if (!btn || !(await btn.boundingBox())) bad(`no › button beside the era`);
      else {
        await btn.click(); await wait(1200);
        if (new URL(page.url()).pathname === before) bad(`› did not move to the next era (still ${before})`);
        await page.keyboard.press("ArrowLeft"); await wait(1200);
        if (new URL(page.url()).pathname !== before) bad(`← did not move back to ${before} (on ${new URL(page.url()).pathname})`);
      }
    }
    if (name === "thread") {
      const moved = await page.evaluate(async () => {
        const row = document.querySelector(".thread .cards"); const b = document.querySelector(".thread .pg[data-d='1']");
        if (!row || !b || !b.offsetParent) return "no › beside the cards";
        if (row.scrollWidth <= row.clientWidth + 1) return null;
        const x = row.scrollLeft; b.click(); await new Promise((r) => setTimeout(r, 900));
        return row.scrollLeft > x ? null : "› did not move the cards";
      });
      if (moved) bad(moved);
    }
    // a map dot, clicked, opens its song or (the map page from 1100 px) selects it
    if (await page.$(".map svg")) {
      const t = await page.evaluate(findDot);
      if (!t) bad(`no dot to click on the map`);
      else {
        await page.mouse.click(t.x, t.y);
        const want = `/song/${t.id}/`;
        let ok = false;
        for (let i = 0; i < 30 && !ok; i++) {
          await wait(100);
          ok = page.url().endsWith(want) || (await page.evaluate((id) => document.querySelector(".mappanel")?.dataset.selected === id && !document.querySelector(".mappanel .sel")?.hidden, t.id).catch(() => false));
        }
        if (!ok) bad(`a click on the dot "${t.id}" neither opened its song nor selected it (on ${new URL(page.url()).pathname})`);
        else if (name === "map" && !page.url().endsWith(want)) {
          await wait(300);
          await page.screenshot({ path: join(OUT, `map-selected-${w}x${h}.png`) });
          if (SHOTS && w === 1440) await page.screenshot({ path: join(SHOTS, `map-selected.png`) });
        }
      }
    }
    for (const e of errors) bad(`error: ${e}`);
    await page.close();
  }
}
await browser.close();
server.close();

// the new parts of the fuller site (plan 2026-10-07-fuller, step 6), page by page from the data and the built pages:
// an era with fewer than three photographs, an album with no essay or no player (an album with no Spotify album id is
// let off the player), a moment with neither its own photo nor a clip. A rule fails the run only once its data has
// landed for that kind of page at all (the new photo search has run: some era has a fourth photo or some photo is a
// moment's; some album has an essay; some album has a Spotify album id); until then what it finds is printed as a note.
const data = (n) => JSON.parse(readFileSync(new URL(`../data/${n}.json`, import.meta.url), "utf8"));
const built = (path) => { const f = join(DIST, path, "index.html"); return existsSync(f) ? readFileSync(f, "utf8") : ""; };
const [eraRows, albumRows, momentRows, photoRows] = ["eras", "albums", "moments", "photos"].map(data);
// today's photos give an era at most three; a fourth, or a photo marked as a moment's, is the new photo search's
const photoSearchLanded = photoRows.some((p) => p.moment) || eraRows.some((e) => photoRows.filter((p) => p.era === e.id && !p.moment).length > 3);
const rules = [
  { live: photoSearchLanded, what: "era photographs", find: () => eraRows.flatMap((e) => {
    // the pictures an era's gallery shows: its photographs, and the record covers that top up a thin one
    const html = built(`era/${e.id}/`), at = html.indexOf(`id="bands-${e.id}"`);
    const band = at < 0 ? "" : html.slice(at, (html.indexOf('id="bands-', at + 10) + 1 || html.length + 1) - 1);
    const n = (band.match(/class="gthumb/g) || []).length + ((band.match(/class="gtc[\s\S]*?<\/ul>/) || [""])[0].match(/<li/g) || []).length;
    return n < 3 ? [`era "${e.id}": ${n} picture${n === 1 ? "" : "s"}, want 3`] : [];
  }) },
  { live: albumRows.some((a) => a.essay), what: "album essays", find: () => albumRows.flatMap((a) =>
    a.essay && built(`album/${a.id}/`).includes('class="essay') ? [] : [`album "${a.id}": no essay`]) },
  { live: albumRows.some((a) => a.spotifyAlbum), what: "album players", find: () => albumRows.flatMap((a) =>
    (a.spotifyAlbum ? built(`album/${a.id}/`).includes(`open.spotify.com/embed/album/${a.spotifyAlbum}`) : built(`album/${a.id}/`).includes('class="button spsearch'))
      ? [] : [`album "${a.id}": no player or Spotify search`]) },
  { live: photoRows.some((p) => p.moment), what: "moment photos", find: () => momentRows.flatMap((m) => {
    const html = built(`moment/${m.id}/`);
    return html.includes('class="photo own') || html.includes("youtube-nocookie.com/embed/") || html.includes('class="mcard') ? [] : [`moment "${m.id}": no photo, clip or card`];
  }) },
];
const notes = [];
for (const r of rules) {
  const found = r.find();
  if (r.live) problems.push(...found.map((f) => `✗ ${f}`));
  else if (found.length) notes.push(`· note (${r.what} not landed yet, not failing): ${found.length} page${found.length === 1 ? "" : "s"}, e.g. ${found.slice(0, 3).join("; ")}`);
}
for (const n of notes) console.log(n);

if (problems.length) { for (const p of problems) console.log(p); process.exit(1); }
console.log(`✓ ${VIEWS.length * SIZES.length} views at ${SIZES.map(([w, h]) => `${w} × ${h}`).join(" and ")}, screenshots in checks/desktop/`);
