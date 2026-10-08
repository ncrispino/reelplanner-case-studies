// The clip check (question 4, answer B: unofficial clips are taken down often): ask YouTube's oEmbed for every clip
// in the dataset and fail on any that no longer exists or can no longer be embedded.
// node tools/check-clips.mjs   (needs the network, so it is not part of `npm test`; run it before a release)
import { readFileSync } from "node:fs";
const load = (n) => JSON.parse(readFileSync(new URL(`../data/${n}.json`, import.meta.url), "utf8"));
const clips = [...load("songs"), ...load("moments")].filter((r) => r.youtube).flatMap((r) => [].concat(r.youtube).map((v) => [r.id, v]));
const dead = [];
for (const [id, v] of clips) {
  const r = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${v}&format=json`).catch(() => null);
  if (!r?.ok) dead.push(`✗ ${id}: clip ${v} answered ${r ? r.status : "no response"}`);
}
for (const d of dead) console.log(d);
if (dead.length) process.exit(1);
console.log(`✓ ${clips.length} clips still play`);
