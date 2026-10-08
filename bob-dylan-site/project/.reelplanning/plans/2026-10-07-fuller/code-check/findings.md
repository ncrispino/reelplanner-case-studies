# Code check: 2026-10-07-fuller

## Steps
- Step 1 — ✓ carried by `data/sources/stories.json`, `tools/merge-data.mjs` (story / long / essay merged), `tools/check-data.mjs:95-111` (length and quotation checks); eras 240–255 words in three sections, moments 116–137, albums 141–158
- Step 2 — ✓ carried by `tools/find-photos.mjs`, `data/photos.json` (64 photos, `moment` field), `src/assets/photos/*`, `src/lib/data.ts` (photosOfEra, photoOfMoment); licence and credit check already in `tools/check-data.mjs:131-136`
- Step 3 — ✓ carried by `src/components/EraStory.astro`, `src/components/Gallery.astro`, `src/components/EraSpread.astro`, `src/components/Timeline.astro`, `src/pages/moment/[id].astro`
- Step 4 — ✓ carried by `src/pages/album/[id].astro` (album player, essay, track rows that open in place, "Where its songs lead", previous / next with covers), `src/pages/song/[id].astro` ("In threads", "The same year"), `tools/find-spotify-albums.mjs`, `data/sources/spotify-albums.json`
- Step 5 — ✓ carried by `src/components/Rail.astro`, `src/layouts/Shell.astro`, `src/styles/site.css:1047-1056`
- Step 6 — ✓ carried by `tools/find-links-out.mjs`, `data/sources/links-out.json`, `src/components/ReadOn.astro`, `tools/check-desktop.mjs:190-229`

## Decisions
- D-001 — ✓ holds: every new part is an Astro component (`src/components/EraStory.astro`, `Gallery.astro`, `Rail.astro`, `ReadOn.astro`) with small inline scripts
- D-003 — ✓ holds: `src/pages/album/[id].astro` previous / next and `src/components/EraStory.astro` records use `Cover`, the real covers
- D-005 — ✓ holds: `src/pages/album/[id].astro` embeds `open.spotify.com/embed/album/<id>`; track rows embed Spotify track players
- D-006 — ✓ holds: `tools/find-photos.mjs:38-48` keeps only PD / CC0 / CC BY / CC BY-SA with a known author; all 64 photos have licence, photographer and source
- D-007 — ✓ holds: `src/pages/album/[id].astro` open track row shows the song's preview (its note when it has none); song pages keep the lyrics link and preview in `Words.astro`
- D-034 — ✓ holds: `src/pages/album/[id].astro` every track row tied to a song page gets the ▾ open-in-place button
- D-035 — ✓ holds: `src/pages/song/[id].astro` "In threads" and "The same year" render for every song regardless of writer
- D-036 — ✓ holds: `src/styles/site.css:83` `--page-max: 1200px` kept; the railed grid keeps content at most `--page-max`
- D-037 — ✓ holds: `src/components/EraSpread.astro` the spread still fills the screen; the bands sit below it inside the snapped `.eb` wrapper, so scrolling carries on to the next era
- D-038 — ✓ holds: `src/components/MapView.astro` and the map page are not in the diff
- D-052 — ✓ holds: `src/components/Rail.astro:358` quick links include "A thread · From <song>" to `url.threadFrom`; the map page is unchanged
- D-083 — ✓ holds: `src/components/Rail.astro` (display only from 1440 px, sticky) and `src/styles/site.css:1051-1056` (content up to 1200 px, rail beside it)
- D-084 — ✓ holds: `tools/find-links-out.mjs` takes Wikipedia from MusicBrainz's url relations (or Wikidata), kept only on a 200; `ReadOn.astro` shows only the links that exist
- D-085 — ✓ holds: data lengths are about 250 / 120 / 150 (see Step 1)
- D-010 — ✓ holds: `data/photos.json` photos still name `era` and `kind`; every `eras.json` `photos` list is still empty; `src/components/PhotoPanel.astro:334` picks via photosOfEra, Dylan photos first
- D-011 — ✓ holds: `src/components/Words.astro:18` the lyrics link still has `target="_blank"`
- D-012 — ✓ holds: `src/pages/song/[id].astro:91-95` previous / next song on the album kept
- D-014 — ✓ holds: `src/pages/song/[id].astro:48` theme chips still link to `theme:<name>` search
- D-029 — ✓ holds: `src/pages/album/[id].astro` still shows the full numbered MusicBrainz track list with songs that have a page as links; the › marker is replaced by the ▾ button (A6)
- D-046 — ✓ holds: `src/pages/song/[id].astro:52` "Also on <album>: <title>" kept
- D-057 — ✓ holds: `src/components/EraSpread.astro` is still the one markup at every width; the new `.eb` wrapper and bands are shared too
- D-058 — ✓ holds: `src/components/EraSpread.astro:85-86` the leaving era's text still dims to .25; the header colour fade in `Timeline.astro` is untouched
- D-059 — ✓ holds: `src/components/Timeline.astro:135-141` min-width 64 px and the ellipsis kept
- D-060 — ✓ holds: `src/pages/song/[id].astro:115` the cover at 150 px above the title kept
- D-061 — ✓ holds: `src/pages/song/[id].astro:53,57` Words rendered twice, hidden at the other width
- D-062 — ✓ holds: `src/pages/moment/[id].astro:801-803` songs named by title (now also in the long story) plus the year's records; the records are now every album of that year, not only the era's, which step 3 ("the songs and records from that year") asks for
- D-067 — ✓ holds: `tools/check-desktop.mjs` only appends rules after the existing ones; the bottom-bar, header, › and ← checks are unchanged

## Unexplained
- `tools/check-data.mjs:107-109` — ✗ sets the length bands the check enforces (each era section 60–110 words, a moment 80–150, an album 100–180) where the plan says only "about"; no row names the tolerance. Suggest: autonomy row "lengths held to 60–110 per era section, 80–150 per moment, 100–180 per album, instead of a tighter or looser band".
- `tools/find-links-out.mjs:139` — ✗ a song's "MusicBrainz ↗" opens the work (the composition) page, not the recording the plan names; no row covers it. Suggest: autonomy row "song links go to the MusicBrainz work, instead of the recording".
- `tools/find-links-out.mjs:100-103` — ✗ only album songs are looked up, so the 86 songs on no album get no "Read on" at all, though the plan says each song links out; no row covers it. Suggest: autonomy row "links out for album songs only (452 of 538), instead of every song".
- `data/albums.json` — ✗ fallen-angels has no `spotifyAlbum`, so its page has no album player, while the plan expects all 39 to have one; the check lets it off silently. Suggest: autonomy row "Fallen Angels has no album player (no Spotify album matched its title), instead of all 39".
- `src/pages/song/[id].astro:992-999` — ✗ "In threads" also lists the song's own generated thread ("From <title> · its own thread ›") and shows for a song in no curated thread, beyond the plan's "the threads it is in"; visible, no row. Suggest: autonomy row "In threads includes the thread made from the song, instead of curated threads only".
- `src/components/EraStory.astro:78-82` — ✗ "Threads through it" shows at most six of the 12 threads, the most songs-in-era first, where the plan says "the threads that pass through it"; visible, no row. Suggest: autonomy row "at most six threads per era, instead of all that pass through it".
(written by the orchestrating session from the checker's reply: the checker, a fresh agent, could not write files)
