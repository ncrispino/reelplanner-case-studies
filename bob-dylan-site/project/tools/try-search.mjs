// Type into the built site's search at phone size and print what it finds: node tools/try-search.mjs "<words>" …
import { createServer } from "node:http";
import { readFileSync, existsSync, statSync, readdirSync } from "node:fs";
import { join, extname } from "node:path";
import { homedir } from "node:os";
import puppeteer from "puppeteer-core";
const DIST = new URL("../dist/", import.meta.url).pathname;
const server = createServer((req, res) => {
  let f = join(DIST, decodeURIComponent(new URL(req.url, "http://x").pathname));
  if (existsSync(f) && statSync(f).isDirectory()) f = join(f, "index.html");
  if (!existsSync(f)) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { "Content-Type": { ".html": "text/html", ".js": "text/javascript", ".json": "application/json", ".css": "text/css" }[extname(f)] ?? "application/octet-stream" });
  res.end(readFileSync(f));
}).listen(0);
const base = join(homedir(), ".cache/hyperframes/chrome/chrome-headless-shell");
const v = readdirSync(base).sort().reverse()[0];
const exe = process.env.CHROME_PATH ?? join(base, v, readdirSync(join(base, v))[0], "chrome-headless-shell");
const browser = await puppeteer.launch({ executablePath: exe, args: ["--no-sandbox"] });
const page = await browser.newPage();
await page.setViewport({ width: 375, height: 812, isMobile: true });
for (const q of process.argv.slice(2)) {
  await page.goto(`http://127.0.0.1:${server.address().port}/search/?q=${encodeURIComponent(q)}`, { waitUntil: "networkidle0" });
  const lines = await page.$$eval("#results h2, #results li", (els) => els.slice(0, 9).map((e) => (e.tagName === "H2" ? `${e.textContent}:` : `  ${e.innerText.replace(/\s*\n\s*/g, " · ")}`)));
  console.log(`search "${q}"`); for (const l of lines) console.log(l);
}
await browser.close(); server.close();
