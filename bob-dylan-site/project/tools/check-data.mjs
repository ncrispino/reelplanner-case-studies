// The data check: every record points at something that exists, and every photo and excerpt is credited.
// node tools/check-data.mjs  ->  ✓ one line of counts, or ✗ one line per problem and exit 1.
import { readFileSync, existsSync } from "node:fs";

const dir = new URL("../data/", import.meta.url);
const load = (name, fallback) => {
  const url = new URL(`${name}.json`, dir);
  return existsSync(url) ? JSON.parse(readFileSync(url, "utf8")) : fallback;
};
const eras = load("eras", []);
const moments = load("moments", []);
const albums = load("albums", []);
const songs = load("songs", []);
const links = load("links", []);
const threads = load("threads", []);
const photos = load("photos", []);

const KINDS = new Set(["borrowed-tune", "answer", "rewrite", "covered-by", "re-recorded", "same-theme"]);
const THEMES = new Set(["protest", "love", "loss", "the road", "faith", "death", "America", "time", "freedom", "war"]);
const problems = [];
const bad = (file, i, msg) => problems.push(`✗ ${file}.json #${i + 1}: ${msg}`);

function index(rows, file) {
  const map = new Map();
  rows.forEach((r, i) => {
    if (!r.id) bad(file, i, "has no id");
    else if (map.has(r.id)) bad(file, i, `"${r.id}" is used twice`);
    else map.set(r.id, r);
  });
  return map;
}
const E = index(eras, "eras"), M = index(moments, "moments"), A = index(albums, "albums");
const S = index(songs, "songs"), T = index(threads, "threads"), P = index(photos, "photos");

eras.forEach((e, i) => {
  if (!Array.isArray(e.years) || e.years.length !== 2) bad("eras", i, `"${e.id}" needs years [from, to]`);
  for (const a of e.albums || []) if (!A.has(a)) bad("eras", i, `"${e.id}" lists album "${a}", which does not exist`);
  for (const m of e.moments || []) if (!M.has(m)) bad("eras", i, `"${e.id}" lists moment "${m}", which does not exist`);
  for (const p of e.photos || []) if (!P.has(p)) bad("eras", i, `"${e.id}" lists photo "${p}", which does not exist`);
});

const inEra = (era, year) => {
  const [from, to] = era.years || [];
  return year >= from && (to == null || year <= to);
};

albums.forEach((a, i) => {
  const era = E.get(a.era);
  if (!era) bad("albums", i, `"${a.id}" names era "${a.era}", which does not exist`);
  else {
    if (!inEra(era, a.year)) bad("albums", i, `"${a.id}" (${a.year}) is outside its era "${era.id}" (${era.years.join("–")})`);
    if (!(era.albums || []).includes(a.id)) bad("albums", i, `"${a.id}" is not listed by its era "${era.id}"`);
  }
  for (const s of a.songs || []) {
    const song = S.get(s);
    if (!song) bad("albums", i, `"${a.id}" lists song "${s}", which does not exist`);
    else if (song.album !== a.id) bad("albums", i, `"${a.id}" lists "${s}", whose album is "${song.album}"`);
  }
});

songs.forEach((s, i) => {
  if (s.album && !A.has(s.album)) bad("songs", i, `"${s.id}" names album "${s.album}", which does not exist`);
  if (s.album && !(A.get(s.album).songs || []).includes(s.id)) bad("songs", i, `"${s.id}" is not listed by its album "${s.album}"`);
  if (!s.album && !s.by) bad("songs", i, `"${s.id}" has neither an album nor "by"`);
  for (const t of s.themes || []) if (!THEMES.has(t)) bad("songs", i, `"${s.id}" has an unknown theme "${t}"`);
  if (s.excerpt) {
    const lines = s.excerpt.lines || [];
    if (lines.length > 2) bad("songs", i, `"${s.id}" excerpt runs past two lines (${lines.length})`);
    if (!s.excerpt.credit) bad("songs", i, `"${s.id}" excerpt has no credit`);
  }
  // a summary is in our own words (D-033): every album song has one, of 45 to 90 words, quoting nothing but titles
  if (s.album && !s.summary) bad("songs", i, `"${s.id}" has no summary`);
  if (s.summary) {
    const words = s.summary.split(/\s+/).length;
    if (words < 45 || words > 90) bad("songs", i, `"${s.id}" summary is ${words} words, not 45 to 90`);
    const titles = new Set([...songs.map((x) => x.title), ...albums.map((x) => x.title)].map((t) => t.toLowerCase()));
    for (const [, q] of s.summary.matchAll(/["“]([^"”]+)["”]/g))
      if (!titles.has(q.replace(/[.,]$/, "").toLowerCase())) bad("songs", i, `"${s.id}" summary quotes "${q}", which is not a title`);
  }
});

// every album track has a song (plan every-song, step 4): data/sources/track-map.json from tools/add-tracks.mjs
const mbAll = existsSync(new URL("../data/sources/musicbrainz.json", import.meta.url)) ? JSON.parse(readFileSync(new URL("../data/sources/musicbrainz.json", import.meta.url), "utf8")) : {};
const trackMap = existsSync(new URL("../data/sources/track-map.json", import.meta.url)) ? JSON.parse(readFileSync(new URL("../data/sources/track-map.json", import.meta.url), "utf8")) : {};
const onTracks = new Set(Object.values(trackMap).flat());
albums.forEach((a, i) => {
  (mbAll[a.id]?.tracks ?? []).forEach((t, n) => {
    const id = trackMap[a.id]?.[n];
    if (!id) bad("albums", i, `"${a.id}" track ${n + 1} "${t.title}" has no song`);
    else if (!S.has(id)) bad("albums", i, `"${a.id}" track ${n + 1} "${t.title}" maps to "${id}", which does not exist`);
  });
});
songs.forEach((s, i) => { if (s.album && !onTracks.has(s.id)) bad("songs", i, `"${s.id}" is on no track of "${s.album}"`); });

// the fuller site's longer writing (plan 2026-10-07-fuller, step 1): each text, where written, in its length and
// quoting nothing but titles (D-033)
// titles compare loosely: apostrophes and hyphens alike, outer quotes and a bracketed subtitle dropped
const tkey = (t) => t.toLowerCase().replace(/[’‘]/g, "'").replace(/[“”"]/g, "").replace(/-/g, " ").replace(/\s*\(.*\)$/, "").replace(/[.,]$/, "").trim();
// real songs a story names that are on none of the site's albums (outtakes, soundtrack singles, other bands)
const OTHER_TITLES = ["Blind Willie McTell", "Dignity", "Series of Dreams", "Things Have Changed", "I Shall Be Released",
  "This Wheel's on Fire", "Handle with Care"];
const allTitles = new Set([...songs.map((x) => x.title), ...albums.map((x) => x.title), ...OTHER_TITLES].map(tkey));
const holdText = (file, i, id, label, text, lo, hi) => {
  const n = text.split(/\s+/).length;
  if (n < lo || n > hi) bad(file, i, `"${id}" ${label} is ${n} words, not ${lo} to ${hi}`);
  for (const [, q] of text.matchAll(/["“]([^"”]+)["”]/g))
    if (!allTitles.has(tkey(q))) bad(file, i, `"${id}" ${label} quotes "${q}", which is not a title`);
};
eras.forEach((e, i) => { if (e.story) for (const k of ["happened", "music", "ledTo"]) holdText("eras", i, e.id, `story.${k}`, e.story[k] ?? "", 60, 110); });
moments.forEach((m, i) => { if (m.long) holdText("moments", i, m.id, "long", m.long, 80, 150); });
albums.forEach((a, i) => { if (a.essay) holdText("albums", i, a.id, "essay", a.essay, 100, 180); });

links.forEach((l, i) => {
  if (!S.has(l.from)) bad("links", i, `"${l.from}" is not a song id`);
  if (!S.has(l.to)) bad("links", i, `"${l.to}" is not a song id`);
  if (!KINDS.has(l.kind)) bad("links", i, `unknown kind "${l.kind}"`);
  if (!l.why) bad("links", i, `"${l.from}" → "${l.to}" has no why`);
});

moments.forEach((m, i) => {
  const era = E.get(m.era);
  if (!era) bad("moments", i, `"${m.id}" names era "${m.era}", which does not exist`);
});

threads.forEach((t, i) => {
  (t.steps || []).forEach((st, j) => {
    if (!S.has(st.song)) bad("threads", i, `"${t.id}" step ${j + 1} names song "${st.song}", which does not exist`);
  });
});

photos.forEach((p, i) => {
  if (!p.licence) bad("photos", i, `"${p.id}" has no licence`);
  if (!p.photographer) bad("photos", i, `"${p.id}" has no credit`);
  if (!p.source) bad("photos", i, `"${p.id}" has no source`);
  if (!E.has(p.era)) bad("photos", i, `"${p.id}" names era "${p.era}", which does not exist`);
  if (!existsSync(new URL(`../src/assets/photos/${p.file}`, import.meta.url))) bad("photos", i, `"${p.id}" file ${p.file} is missing`);
});

if (problems.length) {
  for (const p of problems) console.log(p);
  process.exit(1);
}
console.log(`✓ ${eras.length} eras, ${albums.length} albums, ${songs.length} songs, ${links.length} connections, ${threads.length} threads, ${photos.length} photos`);
