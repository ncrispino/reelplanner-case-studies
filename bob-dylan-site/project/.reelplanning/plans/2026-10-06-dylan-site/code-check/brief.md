# Code check brief: 2026-10-06-dylan-site

You are checking that an implementation follows its plan. You did not write it. Answer three questions,
every answer tied to a file (and a line where you can), and write them to `.reelplanning/plans/2026-10-06-dylan-site/code-check/findings.md`.

1. **Steps.** Does every plan step have a change that carries it out?
2. **Decisions.** Does every decision below hold in the code?
3. **Unexplained.** Is there anything in the diff the autonomy log does not explain? A change counts as
   explained when a step asks for it, a decision requires it, or an autonomy row names it. A choice a
   reviewer could reasonably have made the other way (a default, an error code, a library, a data
   shape, deleting instead of flagging, behaviour someone can see) needs a row; renames, file layout
   and the order of edits do not.

Report what you find, never fix it. Say "✗" only for something a reviewer would want to know; say why
in one sentence.

## The shape of findings.md (keep it exactly)

```
# Code check: 2026-10-06-dylan-site

## Steps
- Step 1 — ✓ carried by `path/to/file`, `other/file`
- Step 2 — ✗ nothing in the diff carries "<the part of the step>"; closest is `file`

## Decisions
- D-004 — ✓ holds: `path/file.mjs` (the summary frame is written in resumeAt)
- D-005 — ✗ broken: `path/file.js:120` counts a record jump as a rewind

## Unexplained
- `path/file.js` — ✗ changes the default speed from 1× to 1.25×; no step, decision or autonomy row covers it. Suggest: autonomy row "default speed 1.25×, instead of 1×".
```

Write "- none" under a section with nothing to report. Every ✗ line must start with its key: `Step N`,
a decision id, or a backticked path.

## Commits (4e93bb6..HEAD, limited to :!package-lock.json)

```
ef9cb16 dylan-site: search handles swapped letters; walkthrough written
ea6d9ca dylan-site: 26 free-licensed era photos from Wikimedia Commons; caption fix
e3ec349 Build dylan-site: Astro shell, dataset, timeline, pages, threads, map, search, checks
```

## The plan, as implemented

Read `.reelplanning/plans/2026-10-06-dylan-site/plan.md` in full. Its title is "Bob Dylan, explored: a phone-first site of eras, albums, songs and how they connect", with 6 steps.

## The decisions that apply

- **D-001** (step 1) How should the site be built? → **which can produce a sophisticated website that is graceful and visually appealing, while fully featured? can you detail more visually the deferences?**
- **D-002** (step 2) How much of the catalogue should go in? → **All 39 albums, 16 in full**
- **D-003** (step 4) How should album covers look? → **The real covers**
- **D-005** (step 6) How should someone listen? → **An embedded Spotify player**
- **D-006** (step 3) Where should the era photographs come from? → **Wikimedia Commons, free-licensed**
  - note: but note that we can ue other images and shiould still make it completely visually full , even if we cant find licenses... like no photographs and just text will be bad
- **D-007** (step 4) What should a song page show beside its lyrics link? → **The link and a preview in our words**

## Earlier calls this diff changes

- none

## The autonomy log (the implementer's own calls)

| id | step | chose | instead of | why | check |
|---|---|---|---|---|---|
| A1 | 1 | The site's base path is `/` (it lives at a domain's root) [close] | `/dylan-site/` for a GitHub Pages project page | the host is not chosen yet; one line in `astro.config.mjs` changes it | `astro.config.mjs` |
| A2 | 2 | The parts of the dataset are written as `data/parts/*.json` and merged by `tools/merge-data.mjs` into the seven files | writing the seven files by hand | several writers worked in parallel by era; the merge drops duplicate songs by id | `tools/merge-data.mjs` |
| A3 | 6 | The phone check drives the Chrome already on the machine (`CHROME_PATH`, else the HyperFrames cache) | downloading a Chrome with `puppeteer` | `puppeteer-core` installs no browser; one less 150 MB download | `tools/check-phone.mjs` |
| A4 | 5 | The map's layout is d3-force, run in the browser | a precomputed layout, or Cytoscape | about 30 KB, and it settles the dots around whichever song you open | `src/islands/map.ts` |
| D1 | 2 | Every song's `excerpt` is empty: the field, its two-line limit, its credit and its place on the song page are built, but no lyric lines are written [deviation, visible] | two-line credited excerpts on landmark songs, as the plan allows | the writers were stopped by a content filter when quoting lyrics, so the build quotes none; an excerpt can be added to `data/songs.json` by hand and the page shows it | `data/songs.json`, `src/pages/song/[id].astro` |
| A5 | 3 | Each era's theme uses fonts already on the phone (system serif, condensed and typewriter stacks) [visible, close] | loading web fonts per era | no font downloads and no flash of unstyled text; the look varies a little by phone | `src/themes/*.css` |
| A6 | 2 | 49 connections, each one a fact the writers were sure of [visible] | about 140, as the plan estimated | a wrong connection is worse than a missing one; more can be added to `data/parts/*.json` and merged | `data/links.json` |
| A7 | 5 | The threads are built by `tools/make-threads.mjs`: one per theme plus "Borrowed tunes" and "Songs others made famous", each card's sentence the song's note or the connection's why [visible, close] | twelve threads each written card by card | the writing is the dataset's own, checked once; a hand-written thread can replace any of them in `data/threads.json` | `tools/make-threads.mjs`, `data/threads.json` |
| A8 | 6 | Spotify track ids come from MusicBrainz's Spotify album links and Spotify's own album pages, kept only when Spotify's title for the track matches the song (177 of 181 album songs) [visible] | ids typed in by hand | a wrong id plays the wrong song; four songs whose titles did not match have no player | `tools/fetch-spotify.mjs`, `data/sources/spotify.json` |
| A9 | 6 | Two YouTube clips, both posted by Bob Dylan's official channel: "Subterranean Homesick Blues" (the Dont Look Back cue-card film) and the "Things Have Changed" video on the 2001 Oscar moment [visible, close] | clips for Newport 1965 and live songs | no official upload of the Newport footage turned up; unofficial uploads come and go; "official audio" uploads would only repeat Spotify | `tools/find-youtube.mjs`, `data/sources/youtube.json` |
| A10 | 1 | A mistyped address lands on the 404 page, which sends you on to search with the address's last part as the words (`/album/blonde-on-blond/` → search "blonde on blond") [visible] | showing results on the 404 page itself | one search page to keep working; the step it adds is a redirect, not a tap | `src/pages/404.astro` |
| A11 | 4 | "Lyrics on bobdylan.com ↗" opens in a new tab [visible, close] | opening in the same tab | you keep your place in the site | `src/pages/song/[id].astro` |
| A12 | 6 | The phone check does not size-check links inside running text or the map's dots [close] | holding every link to 44 px | a link inside a sentence is read, not aimed at; the dots are a picture you drag, with their songs a tap away on the cards | `tools/check-phone.mjs` |
| A13 | 3 | Each era page (`/era/<id>/`) is the whole timeline, opened at that era | one timeline page that reads the era from the address | a shared era link opens on its panel with no script, and the back button returns to it | `src/pages/era/[id].astro` |

## The diff

Read it yourself: `git diff 4e93bb6..HEAD -- :!package-lock.json` (from the repository root). The files it touches:

```
.gitignore                                         |    4 +
 .../plans/2026-10-06-dylan-site/runs/build.txt     |    8 +
 .../runs/check-data-broken.txt                     |    4 +
 .../2026-10-06-dylan-site/runs/check-data.txt      |    3 +
 .../2026-10-06-dylan-site/runs/check-phone.txt     |    3 +
 .../plans/2026-10-06-dylan-site/runs/search.txt    |   29 +
 .../plans/2026-10-06-dylan-site/walkthrough.md     |  179 +
 astro.config.mjs                                   |   10 +
 data/albums.json                                   |  612 ++++
 data/eras.json                                     |  246 ++
 data/links.json                                    |  296 ++
 data/moments.json                                  |  330 ++
 data/parts/BRIEF.md                                |   62 +
 data/parts/basement.json                           |  504 +++
 data/parts/cross.json                              |    8 +
 data/parts/eighties-roots.json                     |  858 +++++
 data/parts/electric.json                           |  654 ++++
 data/parts/gospel.json                             |  395 +++
 data/parts/renaissance.json                        |  781 +++++
 data/parts/standards-rough.json                    |  468 +++
 data/parts/tracks.json                             |  704 ++++
 data/parts/village.json                            |  776 +++++
 data/photos.json                                   |  288 ++
 data/songs.json                                    | 3582 ++++++++++++++++++++
 data/sources/musicbrainz.json                      | 2604 ++++++++++++++
 data/sources/spotify.json                          |  179 +
 data/sources/youtube.json                          |    4 +
 data/threads.json                                  |  570 ++++
 package.json                                       |   21 +
 .../photos/basement-isle-of-wight-camp-1969.jpg    |  Bin 0 -> 362825 bytes
 .../photos/basement-isle-of-wight-crowd-1969.jpg   |  Bin 0 -> 268989 bytes
 src/assets/photos/eighties-barcelona-1984.jpg      |  Bin 0 -> 40177 bytes
 src/assets/photos/eighties-hamburg-1984.jpg        |  Bin 0 -> 756730 bytes
 src/assets/photos/eighties-rotterdam-1984.jpg      |  Bin 0 -> 202218 bytes
 src/assets/photos/electric-arlanda-1966.jpg        |  Bin 0 -> 344275 bytes
 src/assets/photos/electric-byrds-1965.jpg          |  Bin 0 -> 187067 bytes
 src/assets/photos/electric-kramer-1965.jpg         |  Bin 0 -> 240556 bytes
 src/assets/photos/gospel-toronto-1980.jpg          |  Bin 0 -> 180172 bytes
 src/assets/photos/hibbing-drugstore-1941.jpg       |  Bin 0 -> 105715 bytes
 src/assets/photos/hibbing-mahoning-mine-1941.jpg   |  Bin 0 -> 922797 bytes
 src/assets/photos/renaissance-azkena-2010.jpg      |  Bin 0 -> 266630 bytes
 src/assets/photos/renaissance-opiniao-1998.jpg     |  Bin 0 -> 1531360 bytes
 src/assets/photos/roots-american-reunion-1993.jpg  |  Bin 0 -> 575641 bytes
 src/assets/photos/rough-bethel-2024.jpg            |  Bin 0 -> 624983 bytes
 src/assets/photos/rough-milwaukee-2021.jpg         |  Bin 0 -> 372377 bytes
 src/assets/photos/rough-palladium-2022.jpg         |  Bin 0 -> 329310 bytes
 src/assets/photos/standards-2015.jpg               |  Bin 0 -> 1540151 bytes
 src/assets/photos/standards-desert-trip-2016.jpg   |  Bin 0 -> 504339 bytes
 src/assets/photos/standards-palladium-2017.jpg     |  Bin 0 -> 411549 bytes
 src/assets/photos/tracks-chicago-1974.jpg          |  Bin 0 -> 637659 bytes
 src/assets/photos/tracks-ginsberg-1975.jpg         |  Bin 0 -> 331866 bytes
 src/assets/photos/tracks-rotterdam-1978.jpg        |  Bin 0 -> 363748 bytes
 src/assets/photos/village-hunstein-1963.jpg        |  Bin 0 -> 776696 bytes
 src/assets/photos/village-march-on-washington.jpg  |  Bin 0 -> 369201 bytes
 src/assets/photos/village-st-lawrence-1963.jpg     |  Bin 0 -> 2644221 bytes
 src/components/ConnectionCard.astro                |   17 +
 src/components/Cover.astro                         |   25 +
 src/components/MapView.astro                       |   43 +
 src/components/PhotoPanel.astro                    |   52 +
 src/components/Player.astro                        |   42 +
 src/components/ThreadCards.astro                   |   63 +
 src/components/Timeline.astro                      |  105 +
 src/islands/map.ts                                 |   81 +
 src/islands/search.ts                              |   53 +
 src/layouts/Shell.astro                            |   34 +
 src/lib/data.ts                                    |   88 +
 src/pages/404.astro                                |   14 +
 src/pages/about.astro                              |   19 +
 src/pages/album/[id].astro                         |   31 +
 src/pages/era/[id].astro                           |    8 +
 src/pages/index.astro                              |    6 +
 src/pages/map/[id].astro                           |    8 +
 src/pages/map/index.astro                          |    5 +
 src/pages/moment/[id].astro                        |   15 +
 src/pages/search-index.json.ts                     |   12 +
 src/pages/search/index.astro                       |   30 +
 src/pages/song/[id].astro                          |   67 +
 src/pages/thread/[id].astro                        |    9 +
 src/pages/thread/from/[id].astro                   |   16 +
 src/pages/threads/index.astro                      |   19 +
 src/styles/site.css                                |   43 +
 src/themes/base.css                                |    4 +
 src/themes/basement.css                            |    2 +
 src/themes/eighties.css                            |    3 +
 src/themes/electric.css                            |    3 +
 src/themes/gospel.css                              |    3 +
 src/themes/hibbing.css                             |    2 +
 src/themes/renaissance.css                         |    3 +
 src/themes/roots.css                               |    2 +
 src/themes/rough.css                               |    3 +
 src/themes/standards.css                           |    3 +
 src/themes/tracks.css                              |    2 +
 src/themes/village.css                             |    3 +
 tools/check-data.mjs                               |  103 +
 tools/check-phone.mjs                              |   77 +
 tools/fetch-musicbrainz.mjs                        |   55 +
 tools/fetch-spotify.mjs                            |   49 +
 tools/find-youtube.mjs                             |   26 +
 tools/make-threads.mjs                             |   42 +
 tools/merge-data.mjs                               |   44 +
 tools/try-search.mjs                               |   26 +
 tsconfig.json                                      |    6 +
 102 files changed, 15548 insertions(+)
```
