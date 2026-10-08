# Walkthrough: Bob Dylan, explored

**In one sentence:** you can open the site on a phone, swipe through eleven eras of Dylan's life, each in its own look with a real credited photograph, tap into any of 39 albums and 255 songs, play a song on the page, and follow its connections as cards or on a map.

Built from `4e93bb6` (the approved plan).

## Choices made while building

| id | step | chose | instead of | why | where to check |
|---|---|---|---|---|---|
| A1 | 1 | The site's base path is `/` (it lives at a domain's root) [close] | `/dylan-site/` for a GitHub Pages project page | the host is not chosen yet; every address goes through `import.meta.env.BASE_URL` (changed after the code check: before, links were written from `/` and a new base would have broken them), so `base` in `astro.config.mjs`, or `astro build --base /dylan-site/`, moves the whole site | `astro.config.mjs`, `src/lib/data.ts` (`at`, `url`) |
| A2 | 2 | The parts of the dataset are written as `data/parts/*.json` and merged by `tools/merge-data.mjs` into the seven files | writing the seven files by hand | several writers worked in parallel by era; the merge drops duplicate songs by id | `tools/merge-data.mjs` |
| A3 | 6 | The phone check drives the Chrome already on the machine (`CHROME_PATH`, else the HyperFrames cache) | downloading a Chrome with `puppeteer` | `puppeteer-core` installs no browser; one less 150 MB download | `tools/check-phone.mjs` |
| A4 | 5 | The map's layout is d3-force, run in the browser | a precomputed layout, or Cytoscape | about 30 KB, and it settles the dots around whichever song you open | `src/islands/map.ts` |
| D1 | 2 | Every song's `excerpt` is empty: the field, its two-line limit, its credit and its place on the song page are built, but no lyric lines are written [deviation, visible] (kept after review: short credited quotation is common, and may well be fair use; the limit is the AI's output, which a filter stopped every time it wrote lyric lines. Lines added by hand to `data/sources/excerpts.json` show, credited; a script that copies lyrics from another site would get round that filter, so the build does not use one) | two-line credited excerpts on landmark songs, as the plan allows | the writers were stopped by a content filter when quoting lyrics, so the build quotes none; an excerpt can be added to `data/songs.json` by hand and the page shows it | `data/songs.json`, `src/pages/song/[id].astro` |
| A5 | 3 | Each era's theme uses fonts already on the phone (system serif, condensed and typewriter stacks) [visible, close] (changed after review: "it should evoke the creativity of bob dylan" — each era now has its own art direction: its own free typeface from `@fontsource` (Alfa Slab One, Courier Prime, Bebas Neue, Rye, DM Serif Display, Abril Fatface, Monoton with Oswald, IM Fell English, Oswald Light, Limelight, Cinzel), palette, CSS texture and a gesture on its panel and pages: a taped flyer and rubber stamp for the Village, a Dont Look Back cue card for Going Electric, a woodtype frame for Basement and Country, a revival handbill for Gospel, neon tubes for the '80s, a 78 label for Back to the Roots, film frames for the Late Renaissance, a deco frame for the Standards, brass for Rough and Rowdy; the chips, buttons and cards became era objects) | loading web fonts per era | no font downloads and no flash of unstyled text; the look varies a little by phone | `src/themes/*.css` |
| A6 | 2 | 49 connections, each one a fact the writers were sure of [visible] (changed after review: 135 connections. The first writers worked one era at a time and could only link songs inside their own era, so almost nothing crossed eras; a pass over the whole catalogue added 86: 46 same-theme pairs across eras, 30 famous covers, 9 source tunes, 1 rewrite) | about 140, as the plan estimated | a wrong connection is worse than a missing one; more can be added to `data/parts/*.json` and merged | `data/links.json` |
| A7 | 5 | The threads are built by `tools/make-threads.mjs`: one per theme plus "Borrowed tunes" and "Songs others made famous", each card's sentence the song's note or the connection's why [visible, close] | twelve threads each written card by card | the writing is the dataset's own, checked once; a hand-written thread can replace any of them in `data/threads.json` | `tools/make-threads.mjs`, `data/threads.json` |
| A8 | 6 | Spotify track ids come from MusicBrainz's Spotify album links and Spotify's own album pages, kept only when Spotify's title for the track matches the song (177 of 181 album songs) [visible] (changed after review: 181 of 181. Spotify spells two titles differently, "Fourth Time Around" and "Love Minus Zero"; the match now drops subtitles and reads 4th as fourth, still by title) | ids typed in by hand | a wrong id plays the wrong song; four songs whose titles did not match have no player | `tools/fetch-spotify.mjs`, `data/sources/spotify.json` |
| A9 | 6 | Two YouTube clips, both posted by Bob Dylan's official channel: "Subterranean Homesick Blues" (the Dont Look Back cue-card film) and the "Things Have Changed" video on the 2001 Oscar moment [visible, close] (changed after review, question 4 answered B: 166 album songs have a clip from Bob Dylan's official channel, and 13 moments have footage, some posted by others, each kept only when its title names the event; `npm run check:clips` fails on any clip taken down) | clips for Newport 1965 and live songs | no official upload of the Newport footage turned up; unofficial uploads come and go; "official audio" uploads would only repeat Spotify | `tools/find-youtube.mjs`, `data/sources/youtube.json` |
| A10 | 1 | A mistyped address lands on the 404 page, which sends you on to search with the address's last part as the words (`/album/blonde-on-blond/` → search "blonde on blond") [visible] | showing results on the 404 page itself | one search page to keep working; the step it adds is a redirect, not a tap | `src/pages/404.astro` |
| A11 | 4 | "Lyrics on bobdylan.com ↗" opens in a new tab [visible, close] | opening in the same tab | you keep your place in the site | `src/pages/song/[id].astro` |
| A12 | 6 | The phone check does not size-check links inside running text or the map's dots, and answers outside requests (covers, players) with an empty reply, so it sees the drawn covers [close] | holding every link to 44 px, and loading real covers during the check | a link inside a sentence is read, not aimed at; the dots are a picture you drag; the check needs no network. The site's own files must all load: a failed load of one fails the check (changed after the code check: before, every failed load was ignored) | `tools/check-phone.mjs` |
| A13 | 3 | Each era page (`/era/<id>/`) is the whole timeline, opened at that era | one timeline page that reads the era from the address | a shared era link opens on its panel with no script, and the back button returns to it | `src/pages/era/[id].astro` |

| A14 | 6 | Search forgives a typo or two (one edit at 4–5 letters, two from 6; a swapped pair counts as one) and takes `theme:<name>`, which the theme chips on song pages use [visible] | plain matching | a mistyped title still finds its song ("rolling stoen", `runs/search.txt`), and a theme chip needs a way to search by theme | `src/islands/search.ts`, `src/pages/song/[id].astro` |
| A15 | 1 | From 768 px the tab bar sits at the top of the screen [visible, close] | the bottom bar on every width | on a laptop a top bar is where a reader looks; on a phone it stays at the bottom, as the plan says | `src/styles/site.css` |
| A16 | 4 | Song pages step to the album's previous and next song [visible] | no stepping between songs | reading through an album without going back to it each time | `src/pages/song/[id].astro` |
| A17 | 4 | The album page lists the dataset's songs, headed "Selected songs · 7 of 14" when they are fewer than the album's tracks [visible] (changed after review: the album page shows the full track list from MusicBrainz, numbered; the songs with their own page are marked "its story ›", and a line says how many) | the full track list, or an unlabelled selection | the dataset writes 7–8 songs per landmark and 2–3 per other album (D-002); the label says so (added after the code check) | `src/pages/album/[id].astro` |
| A18 | 2 | Each photo names its era and kind (`dylan` or `place`) in `photos.json`, and the panel picks a Dylan photo first; `eras.json`'s `photos` lists stay empty [hard-to-undo] | each era listing its photo ids, as the plan's interface shows | the photo search worked era by era, and the order rule (Dylan, then place) lives in one place | `data/photos.json`, `src/components/PhotoPanel.astro` |
**Commits:** `e3ec349` (the site, the dataset, the checks), `ea6d9ca` (photos), `ef9cb16` (search fix, this file), `ce1eda4` (the code check's fixes), `2b26d5a` (map labels), `68c7925` (panel width, search order).

## What landed, step by step

### Step 1 — The app shell: an Astro site for a phone, a real page per album and song

**You can now:** open any era, album, song, moment, thread or map at its own address, move with the bottom bar and the back button, and see a tapped cover grow into the album page's header.

Landed in `astro.config.mjs`, `src/layouts/Shell.astro`, `src/styles/site.css` and `src/pages/`. The shell carries the bottom bar (a top bar from 768 px), the era theme on `<html data-era>`, and Astro's `ClientRouter` for View Transitions; covers carry `transition:name="cover-<id>"` on the timeline, the album page and the song page. Reduced motion turns the grow into a short fade (`site.css`). `npm run build` writes 802 pages to `dist/` (`runs/build.txt`): 11 eras, 39 albums, 255 songs, 41 moments, 12 threads, a map page per song, the thread made from each connected song, search, About and 404. The plan estimated about 260: the extra pages are the map and "thread from here" pages, one per song.

```diagram
flow: How a page is reached and shown
you open a link -> page = the host serves its page: it exists | one HTML page per era, album and song, built ahead
you open a link --> notfound = 404, then search: no such page | the address's last part becomes the search words
page -> island = scripts start: swipe, map, players, search | only on pages that have one
page -> transition = a view transition: you tap a cover | the cover grows into the album page's header
```

#### Worked examples

##### A build
- **Input:** `npm run build`
- **What happens:** Astro builds every page from `data/*.json`, and each era photo in three sizes plus a 24 px placeholder.
- **Output:** `runs/build.txt`
- **Edge cases:** a record whose id is missing from the dataset fails the build before any page is written (`getStaticPaths` reads only what exists).

#### Why it works this way
Astro was your answer to question 1 (review of 2026-10-07); with a real page per song, a shared link needs no script to open, and search engines can find each song.

#### Limits
The site's base path is `/` (A1): on a GitHub Pages project page it needs `base: "/dylan-site/"`.

#### Files and commands
`astro.config.mjs`, `src/layouts/Shell.astro`, `src/pages/**`, `npm run dev`, `npm run build`.

### Step 2 — The dataset: what is in it, and what each record points to

**You can now:** trust that every era, song, connection and photo the site shows comes from one checked place, with its source.

Landed in `data/*.json` (11 eras, 41 moments, 39 albums, 255 songs, 135 connections, 12 threads, 26 photos; 216 songs and 49 connections before the walkthrough review), merged from `data/parts/*.json` by `tools/merge-data.mjs` (A2). Album ids, cover ids and track lists come from MusicBrainz (`tools/fetch-musicbrainz.mjs`, `data/sources/musicbrainz.json`), so titles and track order are a source's, not memory's. Every lyrics link was checked to answer 200 on bobdylan.com before it was kept. **Off-plan (D1):** no lyric excerpts are written; the field and its rules are built. **Connections (A6):** 49 at first, 135 after the walkthrough review.

The data check (`tools/check-data.mjs`) checks ids, eras' years, albums' track lists, connections, threads, photos' licence and credit, and excerpts' two-line limit and credit.

```diagram
flow: Where the dataset comes from
parts = data/parts/*.json -> merge = tools/merge-data.mjs: written per era
mb = MusicBrainz -> merge: cover ids, track lists
spotify = Spotify, by title -> merge: track ids
merge -> data = data/*.json
data -> check = tools/check-data.mjs: before every commit
check -x stop: a missing id, a photo with no licence | names the file and the record
```

#### Worked examples

##### The dataset as it is
- **Input:** `node tools/check-data.mjs`
- **What happens:** every record is looked up against the others.
- **Output:** `runs/check-data.txt`
- **Edge cases:** a traditional song has `year: null` and no album; the check asks only for `by`.

##### Two faults caught
- **Input:** a scratch copy where a connection points at `blowin-in-the-wnd` and a photo has no licence
- **What happens:** both are named, and the check exits with 1.
- **Output:** `runs/check-data-broken.txt`
- **Predict:** with both faults present, how many lines does the check print before `exit 1`?

#### What else was considered
Writing the whole dataset in one pass: the writers were stopped by a content filter when long, encyclopedia-like text came out, so each era was written on its own, from MusicBrainz's track lists, in short sentences.

#### What breaks it
A part that reuses another part's song id for a different song: the merge keeps the first and the check passes. Ids are written from titles, so this needs two songs with one title (the Cash duet is `girl-from-the-north-country-with-johnny-cash` for that reason).

#### Files and commands
`data/parts/*.json`, `tools/merge-data.mjs`, `tools/fetch-musicbrainz.mjs`, `tools/check-data.mjs`, `node tools/merge-data.mjs`.

### Step 3 — The era timeline: each era with its own look

**You can now:** swipe through eleven eras, each in its own colours and type, each opening on a real, credited photograph or, with none, the era's covers.

Landed in `src/components/Timeline.astro`, `src/components/PhotoPanel.astro` and `src/themes/*.css` (A5: system fonts). 26 photos from Wikimedia Commons (D-006), each with caption, photographer and licence under it; eight eras have a photo of Dylan, and Hibbing (an iron mine, 1941), Basement and Country (the Isle of Wight festival, 1969) and Back to the Roots (the 1993 inaugural stage) have a photo of the place or event. The fallbacks after that (covers as a collage, then a drawn poster) are built but no era needs them now. Each photo is served in three sizes behind a blurred 24 px placeholder that sharpens as it loads. The strip's segments are full-height tap targets (the phone check caught them at 10 px). While taking the walkthrough's screenshots, four era panels (Basement and Country, Blood on the Tracks, the '80s, Late Renaissance) turned out wider than the phone, their right side cut off: a long caption or album row stopped the panel shrinking. Fixed (`min-width: 0`), and the phone check now fails any swipe panel wider than its scroller.

```diagram
flow: What an era panel opens on
panel -> dylan = a photo of Dylan from the era: there is one | 8 eras
panel --> place = a photo of the place or event: none of Dylan | Hibbing, Basement and Country, Back to the Roots
panel --> collage = the era's covers: no photo at all
panel --> poster = a poster in the era's theme: no covers either
```

#### Limits
The illustration filler is a typographic poster in the era's theme, not a drawn picture; no era reaches it with the photos found.

#### Files and commands
`src/components/Timeline.astro`, `src/components/PhotoPanel.astro`, `src/themes/`, `data/photos.json`, `src/assets/photos/`.

### Step 4 — Album and song pages: covers, lyrics links, and connections

**You can now:** see each album's real cover and why it matters, and on a song page read its note and a one-line preview, open its lyrics, play it, and follow its connections.

Landed in `src/pages/album/[id].astro`, `src/pages/song/[id].astro`, `src/components/Cover.astro`, `src/components/ConnectionCard.astro`. Covers load from the Cover Art Archive by MusicBrainz release group (D-003); each has a typographic cover in the era's theme underneath, shown when the image fails. A connection shows on both of its songs, in words for its direction ("Borrowed the tune of" / "Lent its tune to"). The walkthrough's fresh eyes found long titles in a condensed era face ("Subterranean Homesick Blues") running off a phone: fixed, each title is sized to keep its longest word on one line, and the phone check now fails a heading wider than its box (`runs/check-phone.txt`, the `long-title` view).

#### Worked examples

##### A song page with a connection
- **Input:** open `/song/like-a-rolling-stone/` at phone size
- **What happens:** the note, theme chips, the preview and lyrics link, the Spotify button, and a "Covered by" card for the Rolling Stones' 1995 version.
- **Output:** the screenshot `checks/song.png` from `runs/check-phone.txt`
- **Edge cases:** a song with no connections shows no "Start a thread" button.

### Step 5 — Threads and the map: follow connections as cards, or see them all

**You can now:** follow twelve threads as cards, start one from any connected song, and switch to a map of how songs connect, on a phone or beside the cards on a laptop.

Landed in `src/components/ThreadCards.astro`, `src/components/MapView.astro`, `src/islands/map.ts` (A4: d3-force), `tools/make-threads.mjs` (A7). Changed after review ("visually this needs much enhancement"): each thread card wears its song's era, with its year large, the gap since the card before and a ruler of the years; the map is a night chart with dots coloured by era, a legend, a halo on the opened song, covers labelled by their artist, and labels that never overlap or run off the edge. The Map tab follows the card in view; on a phone the map opens on that song and the songs two connections out; on a wide screen the thread page shows cards and map side by side.

### Step 6 — Search, listening and watching, and checking it on a phone

**You can now:** find an era, moment, album or song by typing, even with a typo, play a song on its page, watch two official clips, and know every kind of page was checked at phone width.

Landed in `src/islands/search.ts`, `src/pages/search/index.astro`, `src/pages/search-index.json.ts`, `src/components/Player.astro`, `tools/check-phone.mjs` (A3, A12). 177 of 181 album songs have a Spotify id checked by title (A8); two YouTube clips from Bob Dylan's official channel (A9). Both players load only after a tap (changed after review: "these should be loaded already" — the players are now embedded as the page loads, each fetched as it nears the screen). While writing this walkthrough, the search run showed "rolling stoen" finding nothing: a swapped pair of letters counted as two edits. Fixed: a swap is one edit, and equal results sort oldest first. The screenshots also showed "blonde on blond" (the 404's search) listing the Blood on the Tracks era above the album: the group holding the best match now comes first.

#### Worked examples

##### Searching
- **Input:** `node tools/try-search.mjs 1966 "rolling stoen" tangled theme:faith`
- **What happens:** each query is typed into the built search page at phone size.
- **Output:** `runs/search.txt`
- **Edge cases:** a year matches eras whose years contain it, and moments, albums and songs from that year.

##### The phone check
- **Input:** `node tools/check-phone.mjs` (after `npm run build`)
- **What happens:** eleven views at 375 × 812; outside requests (covers, players) are answered empty so the run needs no network.
- **Output:** `runs/check-phone.txt`

## Tests run

`node tools/check-data.mjs` (`runs/check-data.txt`), the same in a scratch copy with two faults (`runs/check-data-broken.txt`), `npm run build` (`runs/build.txt`), `node tools/check-phone.mjs` (`runs/check-phone.txt`), `node tools/try-search.mjs` (`runs/search.txt`). **Ran in a scratch repo:** `runs/check-data-broken.txt` — a copy of `tools/`, `data/` and the photos, with one connection and one photo broken by hand.

## Not done

- **Lyric excerpts:** none, by the owner's choice after the second walkthrough review (D-033, which supersedes D1/D-032): lyrics are summarised, not quoted. Every album song now has a summary of three or four sentences (45–90 words) in our own words, from `data/sources/summaries.json`, merged by `tools/merge-data.mjs`, under its one-sentence preview on the song page; the data check fails on an album song with no summary, one outside 45–90 words, or a quotation in it that is not a title. `data/sources/excerpts.json` stays for a line added by hand (two lines at most, credited, checked). Before this, lines typed into `data/songs.json` would have been wiped by the next merge.
- **Hosting:** not deployed; the base path assumes a domain root (A1).
- **Covers in the checks:** the phone check blocks outside requests, so it sees the drawn covers, not the real ones; the real covers were not checked for each album.
- **Connections:** 135, a little under the plan's estimate of about 140 (A6).

## Categories of change

- **The site** {site} (`src/`, `astro.config.mjs`) (steps 1, 3, 4, 5, 6): the Astro pages, layout, themes and islands.
  Runs: `runs/build.txt`
- **The dataset** {data} (`data/`, `data/parts/`, `data/sources/`) (step 2): the records and where they came from.
  Runs: `runs/check-data.txt`
- **The tools** {tools} (`tools/`) (steps 2, 6): merge, fetchers, the two checks, the search runner.
  Runs: `runs/check-data-broken.txt`, `runs/check-phone.txt`, `runs/search.txt`

## Decisions kept

- **D-001**, question 1, asked again and answered in the review of 2026-10-07: Astro, a page per song. The code holds to it: an Astro static build, one page per era, album and song (`astro.config.mjs`, `src/pages/`). (The ledger's D-001 row still carries the first review's comment; the answer is in `plan.md` under Supersedes.)
- **D-002** "All 39 albums, 16 in full": held. 39 albums in `data/albums.json`; the 16 landmarks have 7–8 songs each, the rest 2–3 (`data/albums.json`, `landmark: true`).
- **D-003** "The real covers": held. Each album's cover loads from the Cover Art Archive by its MusicBrainz release group, with a drawn cover underneath (`src/components/Cover.astro`, `data/albums.json` `cover`).
- **D-005** "An embedded Spotify player": held, embedded on each song page (`src/components/Player.astro`; after a tap until the walkthrough review); all 181 album songs have a checked track id (A8).
- **D-006** "Wikimedia Commons, free-licensed": held. 26 photos, all public domain, CC0, CC BY or CC BY-SA, credited under each (`data/photos.json`, `src/components/PhotoPanel.astro`).
- **D-007** "The link and a preview in our words": held. All 181 album songs carry a one-sentence preview beside the link (other artists' songs have none) (`src/pages/song/[id].astro`, `data/songs.json` `preview`); the widened two-line excerpt is built but empty (D1).

## Code check

The code check (a fresh agent, `code-check/findings.md`) found two plan parts not carried and eight things no row named. Each answered:

- **Step 5** ✗ (dragging the phone's map never brings more songs in): fixed. The map lays out every connected song, opens zoomed on the song and its neighbours two connections out (the rest faded), and dragging or pinching brings the others into view (`src/islands/map.ts`).
- **D-007** ✗ (11 album songs had no lyrics link): fixed for 8. `tools/find-lyrics-links.mjs` matches titles against bobdylan.com's own song index and keeps a link only when it answers 200 (`data/sources/lyrics.json`): "Tangled Up in Blue", "Shelter From the Storm", "One More Cup of Coffee" and five more now link. Three stay without one because bobdylan.com has no page for them: "September of My Years" and "As Time Goes By" (standards by other writers) and "This Wheel's on Fire". The preview in our words is on all 181 album songs.
- **`src/lib/data.ts:84-87`** ✗ (addresses written from `/`): fixed, A1 corrected. Every address goes through the base path; a build with `--base /dylan-site/` carries the prefix on every link and on the search index.
- **`tools/check-phone.mjs:49-52`** ✗ (failed loads ignored): fixed, row A12 updated. A failed load of the site's own files now fails the check; outside requests are still answered empty, by choice.
- **`src/components/MapView.astro:14`** ✗ (Cards went to a new thread): fixed. The thread's Map tab now carries `?thread=<id>`, and the map's Cards returns to that thread; opened on its own, Cards opens the thread made from that song.
- **`src/islands/search.ts:5-32`** ✗ (typos and `theme:`): row A14. It is step 6's fifth choice, so step 6's biggest open choice, which clips to show, is now a question in `plan.md`.
- **`src/styles/site.css:36`** ✗ (top bar from 768 px): row A15.
- **`src/pages/song/[id].astro:49-54`** ✗ (previous and next): row A16.
- **`src/pages/album/[id].astro:22-24`** ✗ (a selection that reads as the full list): row A17, and the label added.
- **`data/eras.json`** ✗ (photos by era and kind): row A18.
