// Merge data/parts/*.json into the seven dataset files (eras, moments, albums, songs, links).
// threads.json and photos.json are written on their own and left alone.
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";

const dir = new URL("../data/", import.meta.url);
const parts = readdirSync(new URL("parts/", dir)).filter((f) => f.endsWith(".json")).sort();
const out = { eras: [], moments: [], albums: [], songs: [], links: [] };
const seen = { eras: new Map(), moments: new Map(), albums: new Map(), songs: new Map() };

for (const f of parts) {
  const part = JSON.parse(readFileSync(new URL(`parts/${f}`, dir), "utf8"));
  for (const key of Object.keys(out)) {
    for (const rec of part[key] || []) {
      if (key === "links") { out.links.push(rec); continue; }
      const prev = seen[key].get(rec.id);
      if (!prev) { seen[key].set(rec.id, rec); out[key].push(rec); continue; }
      // the same song from two parts (an outside song both linked to): keep the fuller record
      if (key === "songs" && !prev.album && rec.album) Object.assign(prev, rec);
    }
  }
}

// each album's cover comes from its MusicBrainz release group (Cover Art Archive), fetched by tools/fetch-musicbrainz.mjs
const mbUrl = new URL("sources/musicbrainz.json", dir);
const mb = existsSync(mbUrl) ? JSON.parse(readFileSync(mbUrl, "utf8")) : {};
for (const a of out.albums) if (!a.cover && mb[a.id]?.releaseGroup) a.cover = mb[a.id].releaseGroup;

// Spotify track ids (checked by title, tools/fetch-spotify.mjs) and official YouTube clips (tools/find-youtube.mjs)
const read = (n) => { const u = new URL(`sources/${n}.json`, dir); return existsSync(u) ? JSON.parse(readFileSync(u, "utf8")) : {}; };
// excerpts are added by hand (D-032): data/sources/excerpts.json, { "<song id>": { "lines": [...], "credit": "..." } }
const spotify = read("spotify"), youtube = read("youtube"), lyrics = read("lyrics"), excerpts = read("excerpts");
// each song's summary of what it says (D-033): data/sources/summaries.json, { "<song id>": "<three or four sentences>" }
const summaries = read("summaries");
// who wrote a song's words when it is not Dylan alone, including his co-writes (the every-song walkthrough review:
// "give each writer credit"): data/sources/words-by.json, { "<song id>": "Bob Dylan and Jacques Levy" }
const wordsBy = read("words-by");
for (const s of out.songs) { if (!s.spotify && spotify[s.id]) s.spotify = spotify[s.id]; if (youtube[s.id]) s.youtube = youtube[s.id]; if (!s.lyrics && lyrics[s.id]) s.lyrics = lyrics[s.id]; if (excerpts[s.id]) s.excerpt = excerpts[s.id]; s.summary = summaries[s.id] ?? null; if (wordsBy[s.id]) s.wordsBy = wordsBy[s.id]; }
for (const m of out.moments) if (youtube[m.id]) m.youtube = youtube[m.id];
// the fuller site (plan 2026-10-07-fuller): longer writing, data/sources/stories.json
//   { eras: { id: { happened, music, ledTo } }, moments: { id: "…" }, albums: { id: "…" } }
// and links out, data/sources/links-out.json { albums|songs|eras: { id: { wikipedia?, musicbrainz? } } }
const stories = read("stories"), linksOut = read("links-out");
for (const e of out.eras) { e.story = stories.eras?.[e.id] ?? null; e.out = linksOut.eras?.[e.id] ?? null; }
for (const m of out.moments) m.long = stories.moments?.[m.id] ?? null;
const spotifyAlbums = read("spotify-albums");
for (const a of out.albums) { a.essay = stories.albums?.[a.id] ?? null; a.out = linksOut.albums?.[a.id] ?? null; a.spotifyAlbum = spotifyAlbums[a.id] ?? null; }
for (const s of out.songs) s.out = linksOut.songs?.[s.id] ?? null;

const eraOrder = ["hibbing", "village", "electric", "basement", "tracks", "gospel", "eighties", "roots", "renaissance", "standards", "rough"];
out.eras.sort((a, b) => eraOrder.indexOf(a.id) - eraOrder.indexOf(b.id));
out.albums.sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));
// every track has a song (tools/add-tracks.mjs): an album lists its own songs in track order
const trackMap = read("track-map");
for (const a of out.albums) {
  const own = new Set(out.songs.filter((s) => s.album === a.id).map((s) => s.id));
  const inOrder = [...new Set((trackMap[a.id] ?? []).filter((id) => own.has(id)))];
  a.songs = [...inOrder, ...a.songs.filter((id) => !inOrder.includes(id))];
}
out.moments.sort((a, b) => a.year - b.year);
const key = (l) => `${l.from}>${l.to}>${l.kind}`;
out.links = [...new Map(out.links.map((l) => [key(l), l])).values()];

for (const [name, rows] of Object.entries(out)) {
  writeFileSync(new URL(`${name}.json`, dir), JSON.stringify(rows, null, 2) + "\n");
}
console.log(`merged ${parts.length} part(s): ${Object.entries(out).map(([k, v]) => `${v.length} ${k}`).join(", ")}`);
