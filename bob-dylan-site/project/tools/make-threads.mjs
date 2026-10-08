// Build data/threads.json: one thread per theme, plus "Borrowed tunes" and "Songs others made famous" from the
// connections. Each step's sentence is the connection's why, or the song's own note. Time order, older first.
import { readFileSync, writeFileSync } from "node:fs";
// Since the every-song plan (D3 of its walkthrough), data/threads.json is kept by hand: new songs were placed into
// threads where they belong, and a theme can run past ten steps. Rerunning this would pick a different ten per theme
// and drop them, so it only writes with --force.
if (!process.argv.includes("--force")) {
  console.error("✗ data/threads.json is kept by hand now; rerun with --force to regenerate it from scratch (the hand-placed songs are lost)");
  process.exit(1);
}
const load = (n) => JSON.parse(readFileSync(new URL(`../data/${n}.json`, import.meta.url), "utf8"));
const songs = load("songs"), links = load("links"), albums = load("albums");
const album = new Map(albums.map((a) => [a.id, a]));
const song = new Map(songs.map((s) => [s.id, s]));
const yr = (s) => (s.year == null ? -1 : s.year);
const byYear = (a, b) => yr(a.s) - yr(b.s) || a.s.title.localeCompare(b.s.title);
const threads = [];

const fromLinks = (id, title, intro, kind, pick) => {
  const steps = links.filter((l) => l.kind === kind).flatMap((l) => pick(l)).filter((x) => x.s).sort(byYear);
  const seen = new Set();
  threads.push({ id, title, intro, steps: steps.filter((x) => !seen.has(x.s.id) && seen.add(x.s.id)).slice(0, 12).map((x) => ({ song: x.s.id, why: x.why })) });
};
fromLinks("borrowed-tunes", "Borrowed tunes", "Old melodies he made new: each song and the tune it came from.", "borrowed-tune",
  (l) => [{ s: song.get(l.to), why: `The source: ${song.get(l.to)?.note ?? ""}`.trim() }, { s: song.get(l.from), why: l.why }]);
fromLinks("others-made-famous", "Songs others made famous", "His songs in other hands, from the Byrds to Adele.", "covered-by",
  (l) => [{ s: song.get(l.to), why: l.why }]);

const THEMES = [
  ["protest", "Protest and after", "From the civil-rights songs to the ones that came later."],
  ["love", "Love songs", "Love found, love lost, love remembered."],
  ["loss", "Love gone wrong", "Partings, regrets, and songs written after the door closed."],
  ["faith", "Faith", "From early hymn-shaped songs to the gospel years and after."],
  ["the road", "The road", "Songs of leaving, travelling and never quite arriving."],
  ["death", "Songs about death", "Mortality, from murder ballads to late reckonings."],
  ["America", "America", "The country as he sang it: its history, its myths, its outlaws."],
  ["time", "Time passing", "Songs that watch the clock, the years and the changes."],
  ["freedom", "Freedom", "Songs that ask who gets to be free, and how."],
  ["war", "War", "Songs written against war, or in its shadow."],
];
for (const [theme, title, intro] of THEMES) {
  const own = songs.filter((s) => s.album && s.themes.includes(theme)).map((s) => ({ s }));
  // landmark albums first when a theme has too many songs, then back into time order
  own.sort((a, b) => Number(album.get(b.s.album)?.landmark) - Number(album.get(a.s.album)?.landmark));
  const steps = own.slice(0, 10).sort(byYear).map(({ s }) => ({ song: s.id, why: s.note }));
  if (steps.length >= 3) threads.push({ id: theme.replace(/\s+/g, "-").toLowerCase(), title, intro, steps });
}
writeFileSync(new URL("../data/threads.json", import.meta.url), JSON.stringify(threads, null, 2) + "\n");
console.log(threads.map((t) => `${t.id}: ${t.steps.length}`).join(" · "));
