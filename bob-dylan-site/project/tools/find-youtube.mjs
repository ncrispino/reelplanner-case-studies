// Find YouTube clips (step 6, question 4 answered B in the walkthrough review: official uploads, plus well-known
// unofficial ones). A clip is kept only when YouTube's oEmbed answers for it (it exists and can be embedded) and its
// title names what it should:
//   - every Dylan album song: an upload from Bob Dylan's official channel ("Bob Dylan" or "BobDylanVEVO") whose
//     title contains the song's title;
//   - the moments below: the first search result whose title contains every word listed for it (any channel).
// node tools/find-youtube.mjs  ->  data/sources/youtube.json  { "<song or moment id>": "<video id>" }
import { readFileSync, writeFileSync } from "node:fs";

const songs = JSON.parse(readFileSync(new URL("../data/songs.json", import.meta.url), "utf8"));
const OFFICIAL = new Set(["Bob Dylan", "BobDylanVEVO"]);
const MOMENTS = [
  ["newport-1963", "Bob Dylan Newport Folk Festival 1963", ["newport", "1963"]],
  ["march-on-washington", "Bob Dylan March on Washington 1963 Only a Pawn", ["washington"]],
  ["dont-look-back-tour-1965", "Bob Dylan Dont Look Back 1965 trailer", ["look back"]],
  ["newport-1965", "Bob Dylan Newport 1965 Maggie's Farm electric", ["newport", "1965"]],
  ["judas-manchester-1966", "Bob Dylan Judas Manchester 1966 Like a Rolling Stone", ["judas"]],
  ["isle-of-wight-1969", "Bob Dylan Isle of Wight 1969", ["isle of wight"]],
  ["rolling-thunder-revue-1975", "Rolling Thunder Revue Bob Dylan 1975", ["rolling thunder"]],
  ["snl-1979", "Bob Dylan SNL 1979", ["dylan", "1979"], /\bsnl\b|saturday night live/],
  ["live-aid-1985", "Bob Dylan Live Aid 1985", ["live aid"]],
  ["traveling-wilburys-1988", "Traveling Wilburys Handle with Care official video", ["handle with care"]],
  ["bobfest-1992", "Bob Dylan 30th Anniversary Concert 1992 My Back Pages", ["my back pages"]],
  ["oscar-things-have-changed", "Bob Dylan Things Have Changed official video", ["things have changed"]],
  ["nobel-lecture-2017", "Bob Dylan Nobel Lecture in Literature 2017", ["nobel", "lecture"]],
  ["shadow-kingdom-2021", "Bob Dylan Shadow Kingdom official", ["shadow kingdom"]],
];
const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[’'"]/g, "").replace(/&/g, "and").replace(/[^a-z0-9]+/g, " ").trim();
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function search(q) {
  // the consent cookie skips YouTube's consent page; a failed or redirected search is retried after a pause
  for (let i = 0; i < 4; i++) {
    try {
      const res = await fetch(`https://www.youtube.com/results?search_query=${encodeURIComponent(q)}&hl=en`, {
        headers: { "User-Agent": "Mozilla/5.0 (X11; Linux x86_64)", "Accept-Language": "en", Cookie: "CONSENT=YES+cb; SOCS=CAI" } });
      const html = await res.text();
      return [...new Set([...html.matchAll(/"videoId":"([A-Za-z0-9_-]{11})"/g)].map((m) => m[1]))].slice(0, 8);
    } catch { await sleep(5000 * (i + 1)); }
  }
  return [];
}
async function oembed(v) {
  try {
    const r = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${v}&format=json`);
    return r.ok ? r.json() : null;
  } catch { return null; }
}

// clips found on earlier runs are kept; only songs with none are searched again
const outUrl = new URL("../data/sources/youtube.json", import.meta.url);
const out = JSON.parse(readFileSync(outUrl, "utf8"));
// --moments: look for the moments' clips only
for (const s of songs.filter((s) => s.album && !out[s.id] && !process.argv.includes("--moments"))) {
  const want = norm(s.title.replace(/\([^)]*\)/g, ""));
  for (const v of await search(`Bob Dylan ${s.title} official`)) {
    const o = await oembed(v);
    if (o && OFFICIAL.has(o.author_name) && norm(o.title).includes(want)) { out[s.id] = v; break; }
  }
  await sleep(1000);
}
const albumSongs = songs.filter((s) => s.album);
console.log(`songs: ${albumSongs.filter((s) => out[s.id]).length} of ${albumSongs.length} album songs have an official clip`);
// (the 1979 Saturday Night Live clip, dropped by the first build, is back: the every-song walkthrough review flagged
// keeping it out)
const DROPPED = new Set();
for (const [id, q, words, must] of MOMENTS.filter(([id]) => !out[id] && !DROPPED.has(id))) {
  for (const v of await search(q)) {
    const o = await oembed(v);
    if (o && words.every((w) => norm(o.title).includes(norm(w))) && (!must || must.test(o.title.toLowerCase()))) { out[id] = v; console.log(`✓ ${id}: "${o.title}" (${o.author_name})`); break; }
  }
  if (!out[id]) console.log(`· ${id}: no clip whose title names it`);
  await sleep(300);
}
writeFileSync(new URL("../data/sources/youtube.json", import.meta.url), JSON.stringify(out, null, 2) + "\n");
console.log(`done: ${Object.keys(out).length} clips`);
