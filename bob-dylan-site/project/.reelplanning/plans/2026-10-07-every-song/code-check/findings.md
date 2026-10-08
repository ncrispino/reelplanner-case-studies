# Code check: 2026-10-07-every-song

## Steps
- Step 1 — ✓ carried by `tools/add-tracks.mjs`, `tools/lib/tracks.mjs`, `data/sources/track-map.json`, `data/parts/album-tracks.json` (271 records, each with a note, themes, preview and summary in `data/songs.json`), `data/sources/summaries.json`, `data/BRIEF-songs.md`, `src/pages/song/[id].astro:152-154,185` (takes listed from the track map)
- Step 2 — ✓ carried by `tools/fetch-spotify.mjs`, `tools/find-youtube.mjs`, `tools/find-lyrics-links.mjs`, `data/sources/spotify.json` (all 452 album songs have an id), `data/sources/youtube.json`, `data/sources/lyrics.json`, `src/components/Words.astro:23` (the "Words by" line); the Genius link is dropped under autonomy row D2
- Step 3 — ✓ carried by `data/parts/connections-2.json` (30 links), `data/threads.json` ("If You See Her, Say Hello" joins "Love gone wrong")
- Step 4 — ✓ carried by `src/pages/album/[id].astro:74-75,98-102` (every row from the track map, no "its story", no count line), `tools/check-data.mjs:356-367`, `tools/merge-data.mjs:480-486`, `src/pages/search-index.json.ts` (indexes every song, so the new ones with no change)

## Decisions
- D-001 — ✓ holds: `src/pages/song/[id].astro:13` (each new song is one more static Astro page from `songs`)
- D-003 — ✓ holds: `src/pages/song/[id].astro:166` (a new song's page shows its album's real cover via `Cover.astro`)
- D-005 — ✓ holds: `data/sources/spotify.json` (all 452 album songs carry a Spotify id; `Player` unchanged)
- D-006 — ✓ holds: no photograph is added or changed in this diff (`data/photos.json` untouched)
- D-007 — ✓ holds: `src/components/Words.astro:18,24` (every one of the 271 new songs has a preview; the lyrics link shows where one was found)
- D-034 — ✓ holds: `tools/check-data.mjs:360-366` passes with every one of the 39 albums' tracks mapped to one of 452 album songs
- D-035 — ✓ holds: `data/songs.json` (the 108 songs with `wordsBy` have note, themes, preview and summary, averaging 68 summary words against 69 for his own)
- D-009 — ✓ holds: `src/styles/site.css:70-76` (768–1099 px still puts the tab bar at the top; from 1100 px the desktop plan's header replaces it)
- D-010 — ✓ holds: `src/components/PhotoPanel.astro:10` (still picks the era's `dylan` photo first)
- D-011 — ✓ holds: `src/components/Words.astro:24` (the lyrics link keeps `target="_blank"`)
- D-012 — ✓ holds: `src/pages/song/[id].astro:148-150,209` (previous and next song on the album, now in track order)
- D-013 — ✗ broken: `data/threads.json` was edited by hand (theme threads now run to 11–13 steps), so it no longer matches what `tools/make-threads.mjs` writes (capped at 10 per theme), and rerunning the tool would drop the new songs from the threads; no step, decision or autonomy row says the threads stopped being generated.
- D-014 — ✓ holds: `src/islands/search.ts:48-50` only wraps each group in a section; typo matching and `theme:` are unchanged, and the chips still link to `theme:` (`src/pages/song/[id].astro:171`)
- D-029 — ✓ holds: `src/pages/album/[id].astro:95-102` (the full numbered MusicBrainz track list; step 4 removes the "its story" mark and count line)
- D-030 — ✓ holds: `tools/fetch-spotify.mjs:392-394` (still matched by title; the extra names, takes and ALIAS spellings, are covered by A5)

## Unexplained
- `src/components/Words.astro` — ✗ line 23 shows "A traditional song" for `wordsBy: "traditional"` (25 songs), a visible wording the plan does not give (it gives only "Words by …"); the walkthrough mentions it, but no step, decision or autonomy row does. Suggest: autonomy row "a traditional song reads 'A traditional song', instead of 'Words by traditional' or no line".
- `src/pages/song/[id].astro` — ✗ lines 155 and 186 add an "Also on <album>: <track>" line to a song page for each live take on another album; the step only asks that the row link to the page, and no row names this visible addition. Suggest: autonomy row "a song's page names its live takes on other albums ('Also on Self Portrait: …'), instead of the album row linking there alone".
- `data/sources/lyrics.json` — ✗ instrumentals get a "Lyrics on bobdylan.com ↗" link (`turkey-chase`, `wigwam`, `nashville-skyline-rag`, `bunkhouse-theme`, `river-theme`, `final-theme`, `main-title-theme-billy`, `woogie-boogie`, `cantina-theme-workin-for-the-law`), though step 1's case table says an instrumental gets "no lyrics link"; no autonomy row explains keeping them. Suggest: autonomy row "an instrumental keeps its bobdylan.com song page as its link, instead of no lyrics link".
