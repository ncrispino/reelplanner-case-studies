// Find each album song's Spotify track id (D-005), checked by title:
//   MusicBrainz release group → a release with a Spotify album link → the album page's track links →
//   Spotify oEmbed gives each track's title → kept only where it matches the song's title.
// node tools/fetch-spotify.mjs  ->  data/sources/spotify.json  { "<song id>": "<track id>" }
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const dataUrl = (n) => new URL(`../data/${n}`, import.meta.url);
const songs = JSON.parse(readFileSync(dataUrl("songs.json"), "utf8"));
const albums = JSON.parse(readFileSync(dataUrl("albums.json"), "utf8"));
const outUrl = dataUrl("sources/spotify.json");
const out = existsSync(outUrl) ? JSON.parse(readFileSync(outUrl, "utf8")) : {};
const ALIAS = { "talking-world-war-iii-blues": "Talkin' World War III Blues", "motorpsycho-nitemare": "Motorpsycho Nightmare",
  "what-ill-do": "What'll I Do" };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
  .replace(/\s*[-–(].*(remaster|mono|stereo|version|edit|live|take).*$/i, "").replace(/[’'"]/g, "").replace(/&/g, "and").replace(/[^a-z0-9]+/g, " ").trim();

async function get(url, json = true, headers = {}) {
  for (let i = 0; i < 4; i++) {
    const res = await fetch(url, { headers: { "User-Agent": "dylan-site-build/0.1", ...headers } });
    if (res.ok) return json ? res.json() : res.text();
    if (res.status === 404) return null;
    await sleep(2000 * (i + 1));
  }
  return null;
}

for (const a of albums) {
  const mine = songs.filter((s) => s.album === a.id);
  if (mine.every((s) => out[s.id])) continue;
  const rels = await get(`https://musicbrainz.org/ws/2/release?release-group=${a.cover}&inc=url-rels&fmt=json&limit=50`, true, { Accept: "application/json" });
  await sleep(1100);
  const albumIds = [...new Set((rels?.releases || []).flatMap((r) => (r.relations || []).map((x) => x.url?.resource))
    .filter((u) => u && /open\.spotify\.com\/album\//.test(u)).map((u) => u.split("/album/")[1].split(/[?/]/)[0]))];
  let found = 0;
  for (const sp of albumIds) {
    const html = await get(`https://open.spotify.com/album/${sp}`, false, { "User-Agent": "Mozilla/5.0 (X11; Linux x86_64)" });
    const tracks = [...(html || "").matchAll(/music:song" content="https:\/\/open\.spotify\.com\/track\/([A-Za-z0-9]+)"/g)].map((m) => m[1]);
    for (const t of tracks) {
      const o = await get(`https://open.spotify.com/oembed?url=https://open.spotify.com/track/${t}`);
      await sleep(150);
      const title = o?.title && norm(o.title);
      // titles differ in punctuation and subtitles ("Love Minus Zero/No Limit", "(Has Anybody Seen My Love)"):
      // match on the title with slashes as spaces and anything in brackets dropped, or one being the start of the other
      // and Spotify may spell a number out ("Fourth Time Around") or drop a subtitle ("Love Minus Zero")
      const loose = (x) => norm(x.replace(/\//g, " ").replace(/\([^)]*\)/g, "")).replace(/\b4th\b/g, "fourth").replace(/\b1st\b/g, "first");
      const starts = (a, b) => a.startsWith(b) && b.length >= 8;
      // a song may go by other titles: its takes ("Alberta #1"), or the spelling Spotify uses (ALIAS)
      const names = (s) => [s.title, ...(s.takes ?? []), ...(ALIAS[s.id] ? [ALIAS[s.id]] : [])];
      const s = mine.find((s) => !out[s.id] && names(s).some((n) => norm(n) === title || loose(n) === loose(o.title)
        || starts(loose(o.title), loose(n)) || starts(loose(n), loose(o.title))));
      if (s) { out[s.id] = t; found++; }
    }
    if (mine.every((s) => out[s.id])) break;
  }
  console.log(`${a.id}: ${mine.filter((s) => out[s.id]).length}/${mine.length} songs (${albumIds.length} Spotify album link(s))`);
  writeFileSync(outUrl, JSON.stringify(out, null, 2) + "\n");
}
console.log(`done: ${Object.keys(out).length} of ${songs.filter((s) => s.album).length} album songs have a Spotify id`);
