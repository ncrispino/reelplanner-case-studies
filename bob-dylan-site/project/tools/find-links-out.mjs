// Links out for the fuller site (plan 2026-10-07-fuller, step 6; question 2: A): each album's and each album song's
// MusicBrainz page, and its English Wikipedia article where MusicBrainz lists one (directly, or through Wikidata),
// kept only when the article answers 200.
// node tools/find-links-out.mjs  ->  data/sources/links-out.json
//   { "eras": {}, "albums": { "<id>": { musicbrainz?, wikipedia? } }, "songs": { "<id>": { musicbrainz?, wikipedia? } } }
// Albums: the release group from data/sources/musicbrainz.json and its url relations.
// Songs (album songs only): the album's release, its track matched by title, the work that track's recording performs,
// and that work's url relations. MusicBrainz is asked about one request a second, as it asks.
import { writeFileSync, readFileSync } from "node:fs";
import { norm, loose } from "./lib/tracks.mjs";

const UA = "dylan-site-build/0.1 ( https://github.com/ )";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const readJson = (p) => JSON.parse(readFileSync(new URL(p, import.meta.url), "utf8"));

let lastMb = 0;
async function mb(path) {
  for (let tries = 0; tries < 5; tries++) {
    const wait = lastMb + 1100 - Date.now();
    if (wait > 0) await sleep(wait);
    lastMb = Date.now();
    const res = await fetch(`https://musicbrainz.org/ws/2/${path}`, { headers: { "User-Agent": UA, Accept: "application/json" } });
    if (res.ok) return res.json();
    if (res.status !== 503 && res.status !== 429) throw new Error(`${res.status} ${path}`);
    await sleep(2000 * (tries + 1));
  }
  throw new Error(`gave up: ${path}`);
}
async function get(url, json) {
  for (let tries = 0; tries < 3; tries++) {
    await sleep(150);
    try {
      const res = await fetch(url, { headers: { "User-Agent": UA, ...(json ? { Accept: "application/json" } : {}) }, redirect: "follow" });
      if (res.status === 429 || res.status >= 500) { await sleep(2000 * (tries + 1)); continue; }
      return { status: res.status, body: json && res.ok ? await res.json() : (await res.arrayBuffer(), null) };
    } catch (e) { if (tries === 2) return { status: `error ${e.message}`, body: null }; await sleep(1000); }
  }
  return { status: "gave up", body: null };
}

// English Wikipedia from a set of MusicBrainz relations: a wikipedia relation directly, else Wikidata's enwiki sitelink
const wikidataCache = new Map();
async function wikipediaFrom(relations) {
  const urls = (relations || []).filter((r) => r["target-type"] === "url" && r.url?.resource);
  const direct = urls.find((r) => r.type === "wikipedia" && /^https?:\/\/en\.wikipedia\.org\/wiki\//.test(r.url.resource));
  if (direct) return { url: direct.url.resource.replace(/^http:/, "https:"), via: "wikipedia" };
  const wd = urls.find((r) => r.type === "wikidata");
  if (!wd) return { url: null, via: urls.some((r) => r.type === "wikipedia") ? "wikipedia (not English)" : "none listed" };
  const q = wd.url.resource.match(/(Q\d+)/)?.[1];
  if (!q) return { url: null, via: `wikidata ${wd.url.resource}?` };
  if (!wikidataCache.has(q)) {
    const r = await get(`https://www.wikidata.org/wiki/Special:EntityData/${q}.json`, true);
    const ent = r.body ? Object.values(r.body.entities || {})[0] : null;
    wikidataCache.set(q, ent ? (ent.sitelinks?.enwiki?.url ?? null) : `wikidata ${r.status}`);
  }
  const link = wikidataCache.get(q);
  if (!link) return { url: null, via: `wikidata ${q}, no English article` };
  if (link.startsWith("wikidata ")) return { url: null, via: `${link} for ${q}` };
  return { url: link, via: `wikidata ${q}` };
}
const answerCache = new Map();
async function answers(url) {
  if (!answerCache.has(url)) answerCache.set(url, (await get(url, false)).status);
  return answerCache.get(url);
}
async function wikipediaKept(relations) {
  const w = await wikipediaFrom(relations);
  if (!w.url) return { wikipedia: null, note: w.via };
  const st = await answers(w.url);
  return st === 200 ? { wikipedia: w.url, note: w.via } : { wikipedia: null, note: `${w.via}: ${w.url} answered ${st}` };
}

const mbAll = readJson("../data/sources/musicbrainz.json");
const trackMap = readJson("../data/sources/track-map.json");
const albums = readJson("../data/albums.json");
const songs = readJson("../data/songs.json");
const out = { eras: {}, albums: {}, songs: {} };
const odd = [];

// an era is no MusicBrainz entity. Every era links to its own section of Wikipedia's "Bob Dylan" article, kept only when
// the article has that section (the walkthrough review: "maybe every era should have something it links to, for
// consistency"); seven also link to an article on what the era is most about, picked by hand, kept only when it answers
const ERA_SECTION = {
  hibbing: "Early_life_and_education", village: "1960–1962:_Move_to_New_York_and_stardom",
  electric: "1965–1969:_Going_electric_and_motorcycle_accident", basement: "1965–1969:_Going_electric_and_motorcycle_accident",
  tracks: "1970–1979:_Return_to_touring_and_Christian_music", gospel: "1970–1979:_Return_to_touring_and_Christian_music",
  eighties: "1980–1989:_Career_fluctuations", roots: "1990–1999:_Return_to_folk_music_and_resurgence",
  renaissance: "2000–2009:_Oscar_win,_memoir,_and_Modern_Times", standards: "2010–2019:_Tempest_and_continued_recordings",
  rough: "2020–present:_Rough_and_Rowdy_Ways",
};
const ERA_WIKI = {
  hibbing: "Hibbing,_Minnesota", village: "Greenwich_Village", electric: "Electric_Dylan_controversy",
  basement: "The_Basement_Tapes", tracks: "Rolling_Thunder_Revue", eighties: "Traveling_Wilburys",
  renaissance: "2016_Nobel_Prize_in_Literature",
};
const article = await (await fetch("https://en.wikipedia.org/wiki/Bob_Dylan", { headers: { "User-Agent": UA } })).text();
const ids = new Set([...article.matchAll(/ id="([^"]+)"/g)].map((m) => m[1]));
for (const [id, sec] of Object.entries(ERA_SECTION)) {
  const ok = ids.has(sec), e = {};
  if (ok) e.wikipedia = `https://en.wikipedia.org/wiki/Bob_Dylan#${encodeURIComponent(sec)}`;
  console.log(`${ok ? "✓" : "✗"} era ${id}: Bob Dylan § ${sec.replace(/_/g, " ")}`);
  if (ERA_WIKI[id]) {
    const url = `https://en.wikipedia.org/wiki/${ERA_WIKI[id]}`, st = await answers(url);
    if (st === 200) e.more = [{ label: decodeURIComponent(ERA_WIKI[id]).replace(/_/g, " "), href: url }];
    console.log(`  ${st === 200 ? "✓" : "✗"} also ${url} (${st})`);
  }
  if (Object.keys(e).length) out.eras[id] = e;
}
if (process.argv.includes("--eras")) {
  // only the eras: keep the albums' and songs' links as they are (a full run takes about ten minutes)
  const prev = JSON.parse(readFileSync(new URL("../data/sources/links-out.json", import.meta.url), "utf8"));
  writeFileSync(new URL("../data/sources/links-out.json", import.meta.url), JSON.stringify({ ...prev, eras: out.eras }, null, 2) + "\n");
  console.log(`eras only: ${Object.keys(out.eras).length} of ${Object.keys(ERA_SECTION).length} written`);
  process.exit(0);
}

for (const a of albums) {
  const src = mbAll[a.id];
  if (!src?.releaseGroup) { odd.push(`album ${a.id}: no release group in musicbrainz.json`); console.log(`✗ album ${a.id}: no release group`); continue; }
  if (a.cover && a.cover !== src.releaseGroup) odd.push(`album ${a.id}: cover ${a.cover} differs from releaseGroup ${src.releaseGroup}`);
  const rg = await mb(`release-group/${src.releaseGroup}?inc=url-rels&fmt=json`);
  const w = await wikipediaKept(rg.relations);
  out.albums[a.id] = { musicbrainz: `https://musicbrainz.org/release-group/${src.releaseGroup}`, ...(w.wikipedia ? { wikipedia: w.wikipedia } : {}) };
  console.log(`${w.wikipedia ? "✓" : "·"} album ${a.id}: MusicBrainz ✓ · Wikipedia ${w.wikipedia ? `✓ ${w.wikipedia}` : "✗"} (${w.note})`);
}

const bySong = new Map();
for (const s of songs) if (s.album) bySong.set(s.id, s);
for (const a of albums) {
  const src = mbAll[a.id];
  const own = songs.filter((s) => s.album === a.id);
  if (!own.length) continue;
  if (!src?.release) { for (const s of own) odd.push(`song ${s.id}: album ${a.id} has no release`); continue; }
  const rel = await mb(`release/${src.release}?inc=recordings+work-rels+recording-level-rels+work-level-rels+url-rels&fmt=json`);
  const tracks = (rel.media || []).flatMap((m) => m.tracks || []);
  console.log(`— ${a.id}: release ${src.release}, ${tracks.length} tracks, ${own.length} songs`);
  const map = trackMap[a.id] || [];
  for (const s of own) {
    // match by title; when several tracks share it, the one at this song's place in the track map
    const place = map.indexOf(s.id);
    let cands = tracks.filter((t) => norm(t.title) === norm(s.title));
    if (!cands.length) cands = tracks.filter((t) => loose(t.title) === loose(s.title));
    let track = cands.length === 1 ? cands[0] : cands.find((t) => tracks.indexOf(t) === place) || cands[0];
    let how = cands.length ? "title" : null;
    if (!track && place >= 0 && tracks[place]) {
      // the track map (tools/add-tracks.mjs) already ties this song to a track; same release, same order
      track = tracks[place];
      how = `track ${place + 1}, "${track.title}"`;
      odd.push(`song ${s.id} ("${s.title}"): no track by title on ${a.id}; matched by the track map to "${track.title}"`);
    }
    if (!track) { odd.push(`song ${s.id} ("${s.title}"): no track on ${a.id}`); console.log(`✗ song ${s.id}: no track`); continue; }
    // a recording can list the same work twice (once marked "cover"); distinct works are real (a song and its
    // traditional source): take the first whose English Wikipedia article answers, else the first
    const perf = [...new Map((track.recording?.relations || [])
      .filter((r) => r["target-type"] === "work" && r.type === "performance" && r.work).map((r) => [r.work.id, r.work])).values()];
    if (!perf.length) { odd.push(`song ${s.id}: track "${track.title}" has no work in MusicBrainz`); console.log(`✗ song ${s.id}: no work (${how})`); continue; }
    let work = perf[0], w = await wikipediaKept(work.relations);
    for (const other of perf.slice(1)) {
      if (w.wikipedia) break;
      const ow = await wikipediaKept(other.relations);
      if (ow.wikipedia) { work = other; w = ow; }
    }
    if (perf.length > 1) odd.push(`song ${s.id}: track "${track.title}" performs ${perf.length} works (${perf.map((x) => `${x.title}${x.disambiguation ? ` [${x.disambiguation}]` : ""} ${x.id}`).join(" / ")}); took ${work.id}`);
    out.songs[s.id] = { musicbrainz: `https://musicbrainz.org/work/${work.id}`, ...(w.wikipedia ? { wikipedia: w.wikipedia } : {}) };
    console.log(`${w.wikipedia ? "✓" : "·"} song ${s.id}: work "${work.title}" (${how}) · Wikipedia ${w.wikipedia ? `✓ ${w.wikipedia}` : "✗"} (${w.note})`);
  }
}

// the same Wikipedia article for more than one song is worth a look (a song and an album, or a medley)
const seen = new Map();
for (const [id, l] of Object.entries(out.songs)) if (l.wikipedia) seen.set(l.wikipedia, [...(seen.get(l.wikipedia) || []), id]);
for (const [url, ids] of seen) if (ids.length > 1) odd.push(`one article for ${ids.length} songs: ${url} (${ids.join(", ")})`);
const albumWiki = new Set(Object.values(out.albums).map((l) => l.wikipedia).filter(Boolean));
for (const [id, l] of Object.entries(out.songs)) if (albumWiki.has(l.wikipedia)) odd.push(`song ${id}: its Wikipedia link is an album's article (${l.wikipedia})`);

writeFileSync(new URL("../data/sources/links-out.json", import.meta.url), JSON.stringify(out, null, 2) + "\n");
const n = (o, k) => Object.values(o).filter((l) => l[k]).length;
console.log(`\nodd (${odd.length}):`);
for (const o of odd) console.log(`  ${o}`);
console.log(`\nalbums: ${Object.keys(out.albums).length} of ${albums.length} · MusicBrainz ${n(out.albums, "musicbrainz")} · Wikipedia ${n(out.albums, "wikipedia")}`);
console.log(`songs: ${Object.keys(out.songs).length} of ${bySong.size} album songs · MusicBrainz ${n(out.songs, "musicbrainz")} · Wikipedia ${n(out.songs, "wikipedia")}`);
