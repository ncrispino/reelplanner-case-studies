// Every album track gets a song (plan 2026-10-07-every-song, step 1).
// Reads each album's MusicBrainz track list (data/sources/musicbrainz.json) and the dataset's songs, and writes:
//   data/sources/track-map.json   { "<album id>": ["<song id for track 1>", "<… track 2>", …] }  (every track, in order)
//   data/parts/album-tracks.json  a song record for every track that had none: id, title, album, year, by, takes;
//                                 its text (note, themes, preview, summary) is written afterwards, by the writers.
// A track is matched, in this order, to: a song of its own album with the same title; a take of a song on the same
// album ("Billy 4" → "Billy 1"); a live take of a song anywhere ("Like a Rolling Stone (live)" → like-a-rolling-stone);
// otherwise a new song. Records already in album-tracks.json keep their text: running it again only adds.
// node tools/add-tracks.mjs
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { norm, loose, liveBase, takeBase } from "./lib/tracks.mjs";

const dir = new URL("../data/", import.meta.url);
const read = (p, d) => (existsSync(new URL(p, dir)) ? JSON.parse(readFileSync(new URL(p, dir), "utf8")) : d);
const mb = read("sources/musicbrainz.json", {});
const albums = read("albums.json", []);
const partUrl = new URL("parts/album-tracks.json", dir);
const part = existsSync(partUrl) ? JSON.parse(readFileSync(partUrl, "utf8")) : { songs: [] };
const kept = new Map(part.songs.map((s) => [s.id, s]));
// the songs written by the era parts (album-tracks.json's own records are rebuilt below, keeping their text)
const songs = read("songs.json", []).filter((s) => !kept.has(s.id));
const ids = new Set([...songs.map((s) => s.id)]);
const byLoose = new Map();
for (const s of songs) if (!s.by && !byLoose.has(loose(s.title))) byLoose.set(loose(s.title), s.id);

const slug = (t) => norm(t).replace(/ /g, "-");
const out = [], map = {}, report = { matched: 0, takes: [], live: [], created: 0, unplaced: [] };
const albumOrder = [...albums].sort((a, b) => a.year - b.year);
// pass 1: each album's own songs and takes, then new songs; live takes are placed in pass 2, once every song exists
const pending = [];
for (const a of albumOrder) {
  const tracks = mb[a.id]?.tracks ?? [];
  const own = songs.filter((s) => s.album === a.id);
  const ownByTitle = new Map(own.map((s) => [loose(s.title), s.id]));
  const used = new Set();
  map[a.id] = tracks.map(() => null);
  tracks.forEach((t, i) => {
    const id = ownByTitle.get(loose(t.title));
    if (id) { map[a.id][i] = id; used.add(id); report.matched++; }
  });
  for (const s of own) if (!used.has(s.id)) report.unplaced.push(`${a.id}: "${s.title}" matches no track`);
  // takes: tracks on one album sharing a base title with a song there, or with each other
  const groups = new Map();
  tracks.forEach((t, i) => { if (map[a.id][i]) return; const b = takeBase(t.title); if (b) (groups.get(b) ?? groups.set(b, []).get(b)).push(i); });
  for (const [b, idxs] of groups) {
    const ownTake = own.find((s) => takeBase(s.title) === b);
    if (!ownTake && idxs.length < 2) continue;
    const host = ownTake?.id ?? null;
    for (const i of idxs) pending.push({ a, i, take: b, host });
  }
  tracks.forEach((t, i) => {
    if (map[a.id][i] || pending.some((p) => p.a === a && p.i === i)) return;
    if (liveBase(t.title) !== null) { pending.push({ a, i, live: liveBase(t.title) }); return; }
    pending.push({ a, i });
  });
}
const newSong = (a, title, i) => {
  let id = slug(title);
  if (ids.has(id)) id = `${id}-${a.id}`;
  ids.add(id);
  const old = kept.get(id);
  const rec = { id, title: old?.title ?? title, year: a.year, album: a.id, by: old?.by ?? null, note: old?.note ?? "", themes: old?.themes ?? [],
    spotify: null, youtube: null, lyrics: null, preview: old?.preview ?? null, excerpt: null, wordsBy: old?.wordsBy ?? null, takes: [] };
  out.push(rec); byLoose.set(loose(title), id); report.created++;
  return rec;
};
const takeHosts = new Map();
// new songs and takes first, so a live take can find a song made in this run ("She Belongs to Me")
for (const p of pending.filter((p) => !("live" in p))) {
  const t = mb[p.a.id].tracks[p.i];
  if (p.take) {
    const key = `${p.a.id}|${p.take}`;
    let host = p.host ?? takeHosts.get(key);
    if (!host) host = newSong(p.a, t.title.replace(/\s+#?\d{1,2}$/, ""), p.i).id;
    takeHosts.set(key, host);
    map[p.a.id][p.i] = host;
    const rec = out.find((s) => s.id === host);
    report.takes.push(`${p.a.id}: "${t.title}" → ${host}`);
    if (rec && !rec.takes.includes(t.title)) rec.takes.push(t.title);
  } else map[p.a.id][p.i] = newSong(p.a, t.title, p.i).id;
}
for (const p of pending.filter((p) => "live" in p)) {
  const t = mb[p.a.id].tracks[p.i];
  const host = byLoose.get(loose(p.live));
  if (host) { map[p.a.id][p.i] = host; report.live.push(`${p.a.id}: "${t.title}" → ${host}`); }
  else { const rec = newSong(p.a, p.live, p.i); map[p.a.id][p.i] = rec.id; rec.takes.push(t.title); report.live.push(`${p.a.id}: "${t.title}" → ${rec.id} (new)`); }
}
// a song holding takes lists them all, its own title first
for (const rec of out) if (rec.takes.length && !rec.takes.includes(rec.title)) rec.takes.unshift(rec.title);
for (const rec of out) if (!rec.takes.length) delete rec.takes;

writeFileSync(partUrl, JSON.stringify({ songs: out }, null, 2) + "\n");
writeFileSync(new URL("sources/track-map.json", dir), JSON.stringify(map, null, 2) + "\n");
const total = Object.values(map).reduce((n, t) => n + t.length, 0);
console.log(`✓ ${total} tracks on ${albums.length} albums: ${report.matched} already songs, ${report.created} new songs, ` +
  `${report.takes.length} takes folded into their songs, ${report.live.filter((l) => !l.endsWith("(new)")).length} live takes linked to existing ` +
  `pages, ${report.live.filter((l) => l.endsWith("(new)")).length} live takes made songs of their own`);
for (const l of report.takes) console.log(`  take: ${l}`);
for (const l of report.live) console.log(`  live: ${l}`);
for (const l of report.unplaced) console.log(`  ✗ ${l}`);
if (report.unplaced.length) process.exitCode = 1;
