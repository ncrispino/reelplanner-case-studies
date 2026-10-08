// Fetch each studio album's release group id (for its Cover Art Archive cover) and its track list from
// MusicBrainz, so the dataset's albums and track orders come from a source, not from memory.
// node tools/fetch-musicbrainz.mjs  ->  data/sources/musicbrainz.json   (about one request a second, as MusicBrainz asks)
import { writeFileSync, mkdirSync, existsSync, readFileSync } from "node:fs";

const ALBUMS = [
  ["bob-dylan", "Bob Dylan", 1962], ["freewheelin", "The Freewheelin' Bob Dylan", 1963], ["times-they-are-a-changin", "The Times They Are a-Changin'", 1964],
  ["another-side", "Another Side of Bob Dylan", 1964], ["bringing-it-all-back-home", "Bringing It All Back Home", 1965], ["highway-61-revisited", "Highway 61 Revisited", 1965],
  ["blonde-on-blonde", "Blonde on Blonde", 1966], ["john-wesley-harding", "John Wesley Harding", 1967], ["nashville-skyline", "Nashville Skyline", 1969],
  ["self-portrait", "Self Portrait", 1970], ["new-morning", "New Morning", 1970], ["pat-garrett", "Pat Garrett & Billy the Kid", 1973],
  ["dylan-1973", "Dylan", 1973], ["planet-waves", "Planet Waves", 1974], ["blood-on-the-tracks", "Blood on the Tracks", 1975],
  ["the-basement-tapes", "The Basement Tapes", 1975], ["desire", "Desire", 1976], ["street-legal", "Street-Legal", 1978],
  ["slow-train-coming", "Slow Train Coming", 1979], ["saved", "Saved", 1980], ["shot-of-love", "Shot of Love", 1981],
  ["infidels", "Infidels", 1983], ["empire-burlesque", "Empire Burlesque", 1985], ["knocked-out-loaded", "Knocked Out Loaded", 1986],
  ["down-in-the-groove", "Down in the Groove", 1988], ["oh-mercy", "Oh Mercy", 1989], ["under-the-red-sky", "Under the Red Sky", 1990],
  ["good-as-i-been-to-you", "Good as I Been to You", 1992], ["world-gone-wrong", "World Gone Wrong", 1993], ["time-out-of-mind", "Time Out of Mind", 1997],
  ["love-and-theft", "\"Love and Theft\"", 2001], ["modern-times", "Modern Times", 2006], ["together-through-life", "Together Through Life", 2009],
  ["christmas-in-the-heart", "Christmas in the Heart", 2009], ["tempest", "Tempest", 2012], ["shadows-in-the-night", "Shadows in the Night", 2015],
  ["fallen-angels", "Fallen Angels", 2016], ["triplicate", "Triplicate", 2017], ["rough-and-rowdy-ways", "Rough and Rowdy Ways", 2020],
];
const UA = "dylan-site-build/0.1 (https://github.com/)";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function mb(path) {
  for (let tries = 0; tries < 4; tries++) {
    const res = await fetch(`https://musicbrainz.org/ws/2/${path}`, { headers: { "User-Agent": UA, Accept: "application/json" } });
    await sleep(1100);
    if (res.ok) return res.json();
    if (res.status !== 503) throw new Error(`${res.status} ${path}`);
  }
  throw new Error(`gave up: ${path}`);
}
const norm = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

const outFile = new URL("../data/sources/musicbrainz.json", import.meta.url);
mkdirSync(new URL("../data/sources/", import.meta.url), { recursive: true });
const out = existsSync(outFile) ? JSON.parse(readFileSync(outFile, "utf8")) : {};

for (const [id, title, year] of ALBUMS) {
  if (out[id]?.tracks?.length) continue;
  const q = encodeURIComponent(`artist:"Bob Dylan" AND releasegroup:"${title.replace(/"/g, "")}" AND primarytype:album`);
  const rgs = (await mb(`release-group/?query=${q}&fmt=json&limit=10`))["release-groups"] || [];
  const rg = rgs.find((r) => norm(r.title) === norm(title) && (r["first-release-date"] || "").startsWith(String(year)))
    || rgs.find((r) => norm(r.title) === norm(title));
  if (!rg) { console.log(`✗ ${id}: no release group for "${title}"`); continue; }
  // the earliest official release of the group carries the original track list
  const rels = (await mb(`release?release-group=${rg.id}&status=official&inc=recordings&fmt=json&limit=25`)).releases || [];
  rels.sort((a, b) => (a.date || "9999").localeCompare(b.date || "9999"));
  const rel = rels.find((r) => (r.media || []).length) || rels[0];
  const tracks = (rel?.media || []).flatMap((m) => (m.tracks || []).map((t) => ({ title: t.title, recording: t.recording?.id, length: t.length })));
  out[id] = { title, year, releaseGroup: rg.id, release: rel?.id, tracks };
  console.log(`✓ ${id}: ${rg.id} · ${tracks.length} tracks`);
  writeFileSync(outFile, JSON.stringify(out, null, 2) + "\n");
}
writeFileSync(outFile, JSON.stringify(out, null, 2) + "\n");
console.log(`done: ${Object.keys(out).length} of ${ALBUMS.length} albums`);
