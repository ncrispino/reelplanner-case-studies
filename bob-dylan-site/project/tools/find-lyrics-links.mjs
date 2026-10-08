// Fill each album song's missing lyrics link from bobdylan.com's own song index, matched by title and kept only
// when the page answers 200. node tools/find-lyrics-links.mjs  ->  data/sources/lyrics.json  { "<song id>": "<url>" }
import { readFileSync, writeFileSync } from "node:fs";
const songs = JSON.parse(readFileSync(new URL("../data/songs.json", import.meta.url), "utf8"));
const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/&amp;/g, "and").replace(/&/g, "and")
  .replace(/[’'"]/g, "").replace(/\(.*?\)/g, "").replace(/[^a-z0-9]+/g, " ").trim();
const html = await (await fetch("https://www.bobdylan.com/songs/", { headers: { "User-Agent": "dylan-site-build/0.1" } })).text();
const index = new Map();
// the index writes apostrophes and accents as HTML entities (&#8217;, &rsquo;): decode them before matching
const decode = (s) => s.replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n)).replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
  .replace(/&rsquo;|&lsquo;/g, "'").replace(/&quot;/g, '"');
for (const m of html.matchAll(/<a[^>]+href="(https:\/\/www\.bobdylan\.com\/songs\/[^"]+\/)"[^>]*>([^<]+)<\/a>/g)) index.set(norm(decode(m[2])), m[1]);
// links found on earlier runs are kept (a song whose link came from here has it in songs.json too, so it is skipped)
const outUrl = new URL("../data/sources/lyrics.json", import.meta.url);
const out = JSON.parse(readFileSync(outUrl, "utf8"));
// titles the index spells otherwise than MusicBrainz
const ALIAS = { "talking-world-war-iii-blues": "Talkin' World War III Blues", "motorpsycho-nitemare": "Motorpsycho Nightmare",
  "most-likely-you-go-your-way-and-ill-go-mine": "Most Likely You Go Your Way", "the-mighty-quinn-quinn-the-eskimo": "Quinn the Eskimo" };
for (const s of songs.filter((s) => s.album && !s.lyrics && !out[s.id])) {
  const url = index.get(norm(ALIAS[s.id] ?? s.title));
  if (!url) { console.log(`· ${s.id}: not in the index`); continue; }
  const r = await fetch(url, { headers: { "User-Agent": "dylan-site-build/0.1" }, redirect: "manual" });
  if (r.status === 200) { out[s.id] = url; console.log(`✓ ${s.id}: ${url}`); } else console.log(`· ${s.id}: ${url} answered ${r.status}`);
}
// A song bobdylan.com does not have (another writer's song, a traditional one) links to its words on Lyrics.com,
// whose lyrics are licensed from LyricFind (the walkthrough review asked for a lyrics site that answers; Genius does
// not, D2): its Bob Dylan index, matched by title, and kept only when the page answers 200 and names the song.
const UA = { "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36" };
const lc = await (await fetch("https://www.lyrics.com/artist/Bob-Dylan", { headers: UA })).text();
const lcIndex = new Map();
for (const m of lc.matchAll(/href="(\/lyric\/\d+\/Bob\+Dylan\/[^"]+)"[^>]*>([^<]+)</g)) {
  const k = norm(decode(m[2])); if (!lcIndex.has(k)) lcIndex.set(k, "https://www.lyrics.com" + m[1]);
}
for (const s of songs.filter((s) => s.album && !s.lyrics && !out[s.id])) {
  const url = lcIndex.get(norm(s.title));
  if (!url) { console.log(`· ${s.id}: not on Lyrics.com either`); continue; }
  let r = await fetch(url, { headers: UA });
  if (r.status === 202) { await new Promise((w) => setTimeout(w, 8000)); r = await fetch(url, { headers: UA }); } // Lyrics.com answers 202 when asked too fast
  const page = r.status === 200 ? await r.text() : "";
  if (r.status === 200 && norm(decode(page.match(/<title>([^<]*)/)?.[1] ?? "")).includes(norm(s.title))) { out[s.id] = url; console.log(`✓ ${s.id}: ${url}`); }
  else console.log(`· ${s.id}: ${url} answered ${r.status}`);
  await new Promise((r) => setTimeout(r, 2500));
}
writeFileSync(new URL("../data/sources/lyrics.json", import.meta.url), JSON.stringify(out, null, 2) + "\n");
