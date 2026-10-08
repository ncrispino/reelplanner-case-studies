// Each album's Spotify album id (plan 2026-10-07-fuller, step 4: the album player), from the Spotify album links
// MusicBrainz lists for its release group; kept only when Spotify's oEmbed answers with the album's title.
// node tools/find-spotify-albums.mjs  ->  data/sources/spotify-albums.json  { "<album id>": "<spotify album id>" }
import { readFileSync, writeFileSync } from "node:fs";
const albums = JSON.parse(readFileSync(new URL("../data/albums.json", import.meta.url), "utf8"));
const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[’'"]/g, "").replace(/&/g, "and").replace(/[^a-z0-9]+/g, " ").trim();
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const get = async (u) => { const r = await fetch(u, { headers: { "User-Agent": "dylan-site-build/0.1", Accept: "application/json" } }); return r.ok ? r.json() : null; };
const out = {};
for (const a of albums) {
  const rels = await get(`https://musicbrainz.org/ws/2/release?release-group=${a.cover}&inc=url-rels&fmt=json&limit=50`); await sleep(1100);
  const ids = [...new Set((rels?.releases || []).flatMap((r) => (r.relations || []).map((x) => x.url?.resource))
    .filter((u) => u && /open\.spotify\.com\/album\//.test(u)).map((u) => u.split("/album/")[1].split(/[?/]/)[0]))];
  for (const id of ids) {
    const o = await get(`https://open.spotify.com/oembed?url=https://open.spotify.com/album/${id}`); await sleep(200);
    const t = norm(o?.title ?? "");
    if (t && (t.startsWith(norm(a.title)) || norm(a.title).startsWith(t))) { out[a.id] = id; break; }
  }
  console.log(`${out[a.id] ? "✓" : "·"} ${a.id}${out[a.id] ? ": " + out[a.id] : ": no Spotify album whose title matches"}`);
}
writeFileSync(new URL("../data/sources/spotify-albums.json", import.meta.url), JSON.stringify(out, null, 2) + "\n");
console.log(`done: ${Object.keys(out).length} of ${albums.length} albums have a Spotify album id`);
