# Decisions

Append-only ledger. `reel record` adds entries from a plan review; a plan that changes one adds a superseding entry and says why. `reel check` enforces this.

| id | date | plan | step | question | chosen | status |
|---|---|---|---|---|---|---|
| D-001 | 2026-10-06 | 2026-10-06-dylan-site | 1 | How should the site be built? | **which can produce a sophisticated website that is graceful and visually appealing, while fully featured? can you detail more visually the deferences?** (not the recommendation) | active |
| D-002 | 2026-10-06 | 2026-10-06-dylan-site | 2 | How much of the catalogue should go in? | **All 39 albums, 16 in full** | superseded by D-034 |
| D-003 | 2026-10-06 | 2026-10-06-dylan-site | 4 | How should album covers look? | **The real covers** (not the recommendation) | active |
| D-004 | 2026-10-06 | 2026-10-06-dylan-site | 5 | How should connections be explored? | **Threads, plus a map on wide screens** (not the recommendation) | superseded by the plan 2026-10-06-dylan-site |
| D-005 | 2026-10-06 | 2026-10-06-dylan-site | 6 | How should someone listen? | **An embedded Spotify player** (not the recommendation) | active |
| D-006 | 2026-10-07 | 2026-10-06-dylan-site | 3 | Where should the era photographs come from? | **Wikimedia Commons, free-licensed** | active |
| D-007 | 2026-10-07 | 2026-10-06-dylan-site | 4 | What should a song page show beside its lyrics link? | **The link and a preview in our words** | active |
| D-008 | 2026-10-07 | 2026-10-06-dylan-site | 1 | A mistyped address lands on the 404 page, which sends you on to search with the address's last part as the words (`/album/blonde-on-blond/` → search "blonde on blond"), or showing results on the 404 page itself? (the agent's own call A10, accepted in the walkthrough) | **A mistyped address lands on the 404 page, which sends you on to search with the address's last part as the words (`/album/blonde-on-blond/` → search "blonde on blond")** [visible] | active |
| D-009 | 2026-10-07 | 2026-10-06-dylan-site | 1 | From 768 px the tab bar sits at the top of the screen, or the bottom bar on every width? (the agent's own call A15, accepted in the walkthrough) | **From 768 px the tab bar sits at the top of the screen** [visible, close] | active |
| D-010 | 2026-10-07 | 2026-10-06-dylan-site | 2 | Each photo names its era and kind (`dylan` or `place`) in `photos.json`, and the panel picks a Dylan photo first; `eras.json`'s `photos` lists stay empty, or each era listing its photo ids, as the plan's interface shows? (the agent's own call A18, accepted in the walkthrough) | **Each photo names its era and kind (`dylan` or `place`) in `photos.json`, and the panel picks a Dylan photo first; `eras.json`'s `photos` lists stay empty** [hard-to-undo] | active |
| D-011 | 2026-10-07 | 2026-10-06-dylan-site | 4 | "Lyrics on bobdylan.com ↗" opens in a new tab, or opening in the same tab? (the agent's own call A11, accepted in the walkthrough) | **"Lyrics on bobdylan.com ↗" opens in a new tab** [visible, close] | active |
| D-012 | 2026-10-07 | 2026-10-06-dylan-site | 4 | Song pages step to the album's previous and next song, or no stepping between songs? (the agent's own call A16, accepted in the walkthrough) | **Song pages step to the album's previous and next song** [visible] | active |
| D-013 | 2026-10-07 | 2026-10-06-dylan-site | 5 | The threads are built by `tools/make-threads.mjs`: one per theme plus "Borrowed tunes" and "Songs others made famous", each card's sentence the song's note or the connection's why, or twelve threads each written card by card? (the agent's own call A7, accepted in the walkthrough) | **The threads are built by `tools/make-threads.mjs`: one per theme plus "Borrowed tunes" and "Songs others made famous", each card's sentence the song's note or the connection's why** [visible, close] | active |
| D-014 | 2026-10-07 | 2026-10-06-dylan-site | 6 | Search forgives a typo or two (one edit at 4–5 letters, two from 6; a swapped pair counts as one) and takes `theme:<name>`, which the theme chips on song pages use, or plain matching? (the agent's own call A14, accepted in the walkthrough) | **Search forgives a typo or two (one edit at 4–5 letters, two from 6; a swapped pair counts as one) and takes `theme:<name>`, which the theme chips on song pages use** [visible] | active |
| D-015 | 2026-10-07 | 2026-10-06-dylan-site | 1 | The site's base path is `/` (it lives at a domain's root), or `/dylan-site/` for a GitHub Pages project page? (the agent's own call A1, listed, not judged, in the walkthrough) | **The site's base path is `/` (it lives at a domain's root)** [close] | listed |
| D-016 | 2026-10-07 | 2026-10-06-dylan-site | 2 | The parts of the dataset are written as `data/parts/*.json` and merged by `tools/merge-data.mjs` into the seven files, or writing the seven files by hand? (the agent's own call A2, listed, not judged, in the walkthrough) | **The parts of the dataset are written as `data/parts/*.json` and merged by `tools/merge-data.mjs` into the seven files** | listed |
| D-017 | 2026-10-07 | 2026-10-06-dylan-site | 3 | Each era page (`/era/<id>/`) is the whole timeline, opened at that era, or one timeline page that reads the era from the address? (the agent's own call A13, listed, not judged, in the walkthrough) | **Each era page (`/era/<id>/`) is the whole timeline, opened at that era** | listed |
| D-018 | 2026-10-07 | 2026-10-06-dylan-site | 5 | The map's layout is d3-force, run in the browser, or a precomputed layout, or Cytoscape? (the agent's own call A4, listed, not judged, in the walkthrough) | **The map's layout is d3-force, run in the browser** | listed |
| D-019 | 2026-10-07 | 2026-10-06-dylan-site | 6 | The phone check drives the Chrome already on the machine (`CHROME_PATH`, else the HyperFrames cache), or downloading a Chrome with `puppeteer`? (the agent's own call A3, listed, not judged, in the walkthrough) | **The phone check drives the Chrome already on the machine (`CHROME_PATH`, else the HyperFrames cache)** | listed |
| D-020 | 2026-10-07 | 2026-10-06-dylan-site | 6 | The phone check does not size-check links inside running text or the map's dots, and answers outside requests (covers, players) with an empty reply, so it sees the drawn covers, or holding every link to 44 px, and loading real covers during the check? (the agent's own call A12, listed, not judged, in the walkthrough) | **The phone check does not size-check links inside running text or the map's dots, and answers outside requests (covers, players) with an empty reply, so it sees the drawn covers** [close] | listed |
| D-021 | 2026-10-07 | 2026-10-06-dylan-site | 2 | 49 connections, each one a fact the writers were sure of, or about 140, as the plan estimated? (the agent's own call A6, answered in the reviewer's own words in the walkthrough) | **49 connections, each one a fact the writers were sure of** [visible] | own |
| D-022 | 2026-10-07 | 2026-10-06-dylan-site | 2 | Every song's `excerpt` is empty: the field, its two-line limit, its credit and its place on the song page are built, but no lyric lines are written, or two-line credited excerpts on landmark songs, as the plan allows? (the agent's own call D1, answered in the reviewer's own words in the walkthrough) | **Every song's `excerpt` is empty: the field, its two-line limit, its credit and its place on the song page are built, but no lyric lines are written** [deviation, visible] | own |
| D-023 | 2026-10-07 | 2026-10-06-dylan-site | 3 | Each era's theme uses fonts already on the phone (system serif, condensed and typewriter stacks), or loading web fonts per era? (the agent's own call A5, answered in the reviewer's own words in the walkthrough) | **Each era's theme uses fonts already on the phone (system serif, condensed and typewriter stacks)** [visible, close] | own |
| D-024 | 2026-10-07 | 2026-10-06-dylan-site | 4 | The album page lists the dataset's songs, headed "Selected songs · 7 of 14" when they are fewer than the album's tracks, or the full track list, or an unlabelled selection? (the agent's own call A17, answered in the reviewer's own words in the walkthrough) | **The album page lists the dataset's songs, headed "Selected songs · 7 of 14" when they are fewer than the album's tracks** [visible] | own |
| D-025 | 2026-10-07 | 2026-10-06-dylan-site | 6 | Two YouTube clips, both posted by Bob Dylan's official channel: "Subterranean Homesick Blues" (the Dont Look Back cue-card film) and the "Things Have Changed" video on the 2001 Oscar moment, or clips for Newport 1965 and live songs? (the agent's own call A9, answered in the reviewer's own words in the walkthrough) | **Two YouTube clips, both posted by Bob Dylan's official channel: "Subterranean Homesick Blues" (the Dont Look Back cue-card film) and the "Things Have Changed" video on the 2001 Oscar moment** [visible, close] | own |
| D-026 | 2026-10-07 | 2026-10-06-dylan-site | 6 | Spotify track ids come from MusicBrainz's Spotify album links and Spotify's own album pages, kept only when Spotify's title for the track matches the song (177 of 181 album songs), or ids typed in by hand? (the agent's own call A8, answered in the reviewer's own words in the walkthrough) | **Spotify track ids come from MusicBrainz's Spotify album links and Spotify's own album pages, kept only when Spotify's title for the track matches the song (177 of 181 album songs)** [visible] | own |
| D-027 | 2026-10-07 | 2026-10-06-dylan-site | 3 | Each era's theme uses fonts already on the phone (system serif, condensed and typewriter stacks) [visible, close] (changed after review: "it should evoke the creativity of bob dylan" — each era now has its own art direction: its own free typeface from `@fontsource` (Alfa Slab One, Courier Prime, Bebas Neue, Rye, DM Serif Display, Abril Fatface, Monoton with Oswald, IM Fell English, Oswald Light, Limelight, Cinzel), palette, CSS texture and a gesture on its panel and pages: a taped flyer and rubber stamp for the Village, a Dont Look Back cue card for Going Electric, a woodtype frame for Basement and Country, a revival handbill for Gospel, neon tubes for the '80s, a 78 label for Back to the Roots, film frames for the Late Renaissance, a deco frame for the Standards, brass for Rough and Rowdy; the chips, buttons and cards became era objects), or loading web fonts per era? (the agent's own call A5, accepted in the walkthrough) | **Each era's theme uses fonts already on the phone (system serif, condensed and typewriter stacks) [visible, close] (changed after review: "it should evoke the creativity of bob dylan" — each era now has its own art direction: its own free typeface from `@fontsource` (Alfa Slab One, Courier Prime, Bebas Neue, Rye, DM Serif Display, Abril Fatface, Monoton with Oswald, IM Fell English, Oswald Light, Limelight, Cinzel), palette, CSS texture and a gesture on its panel and pages: a taped flyer and rubber stamp for the Village, a Dont Look Back cue card for Going Electric, a woodtype frame for Basement and Country, a revival handbill for Gospel, neon tubes for the '80s, a 78 label for Back to the Roots, film frames for the Late Renaissance, a deco frame for the Standards, brass for Rough and Rowdy; the chips, buttons and cards became era objects)** | active |
| D-028 | 2026-10-07 | 2026-10-06-dylan-site | 2 | 49 connections, each one a fact the writers were sure of [visible] (changed after review: 135 connections. The first writers worked one era at a time and could only link songs inside their own era, so almost nothing crossed eras; a pass over the whole catalogue added 86: 46 same-theme pairs across eras, 30 famous covers, 9 source tunes, 1 rewrite), or about 140, as the plan estimated? (the agent's own call A6, accepted in the walkthrough) | **49 connections, each one a fact the writers were sure of [visible] (changed after review: 135 connections. The first writers worked one era at a time and could only link songs inside their own era, so almost nothing crossed eras; a pass over the whole catalogue added 86: 46 same-theme pairs across eras, 30 famous covers, 9 source tunes, 1 rewrite)** | active |
| D-029 | 2026-10-07 | 2026-10-06-dylan-site | 4 | The album page lists the dataset's songs, headed "Selected songs · 7 of 14" when they are fewer than the album's tracks [visible] (changed after review: the album page shows the full track list from MusicBrainz, numbered; the songs with their own page are marked "its story ›", and a line says how many), or the full track list, or an unlabelled selection? (the agent's own call A17, accepted in the walkthrough) | **The album page lists the dataset's songs, headed "Selected songs · 7 of 14" when they are fewer than the album's tracks [visible] (changed after review: the album page shows the full track list from MusicBrainz, numbered; the songs with their own page are marked "its story ›", and a line says how many)** | active |
| D-030 | 2026-10-07 | 2026-10-06-dylan-site | 6 | Spotify track ids come from MusicBrainz's Spotify album links and Spotify's own album pages, kept only when Spotify's title for the track matches the song (177 of 181 album songs) [visible] (changed after review: 181 of 181. Spotify spells two titles differently, "Fourth Time Around" and "Love Minus Zero"; the match now drops subtitles and reads 4th as fourth, still by title), or ids typed in by hand? (the agent's own call A8, accepted in the walkthrough) | **Spotify track ids come from MusicBrainz's Spotify album links and Spotify's own album pages, kept only when Spotify's title for the track matches the song (177 of 181 album songs) [visible] (changed after review: 181 of 181. Spotify spells two titles differently, "Fourth Time Around" and "Love Minus Zero"; the match now drops subtitles and reads 4th as fourth, still by title)** | active |
| D-031 | 2026-10-07 | 2026-10-06-dylan-site | 6 | Two YouTube clips, both posted by Bob Dylan's official channel: "Subterranean Homesick Blues" (the Dont Look Back cue-card film) and the "Things Have Changed" video on the 2001 Oscar moment [visible, close] (changed after review, question 4 answered B: 166 album songs have a clip from Bob Dylan's official channel, and 13 moments have footage, some posted by others, each kept only when its title names the event; `npm run check:clips` fails on any clip taken down), or clips for Newport 1965 and live songs? (the agent's own call A9, accepted in the walkthrough) | **Two YouTube clips, both posted by Bob Dylan's official channel: "Subterranean Homesick Blues" (the Dont Look Back cue-card film) and the "Things Have Changed" video on the 2001 Oscar moment [visible, close] (changed after review, question 4 answered B: 166 album songs have a clip from Bob Dylan's official channel, and 13 moments have footage, some posted by others, each kept only when its title names the event; `npm run check:clips` fails on any clip taken down)** | active |
| D-032 | 2026-10-07 | 2026-10-06-dylan-site | 2 | Every song's `excerpt` is empty: the field, its two-line limit, its credit and its place on the song page are built, but no lyric lines are written [deviation, visible] (kept after review: short credited quotation is common, and may well be fair use; the limit is the AI's output, which a filter stopped every time it wrote lyric lines. Lines added by hand to `excerpt` in `data/songs.json` show, credited; a script that copies lyrics from another site would get round that filter, so the build does not use one), or two-line credited excerpts on landmark songs, as the plan allows? (the agent's own call D1, answered in the reviewer's own words in the walkthrough) | **Every song's `excerpt` is empty: the field, its two-line limit, its credit and its place on the song page are built, but no lyric lines are written [deviation, visible] (kept after review: short credited quotation is common, and may well be fair use; the limit is the AI's output, which a filter stopped every time it wrote lyric lines. Lines added by hand to `excerpt` in `data/songs.json` show, credited; a script that copies lyrics from another site would get round that filter, so the build does not use one)** [deviation] | superseded |
| D-033 | 2026-10-07 | 2026-10-06-dylan-site | 2 | Lyrics are summarised, not quoted: every album song carries a summary of three or four sentences in our own words (`summary`, from `data/sources/summaries.json`) beside its one-sentence preview and the link to its lyrics on bobdylan.com; no excerpts are written, and `data/sources/excerpts.json` stays for a line added by hand, or two-line credited excerpts on landmark songs, or excerpts left empty with only the one-sentence preview? (the owner's answer in conversation after the second walkthrough review) | **Lyrics are summarised, not quoted: every album song carries a summary of three or four sentences in our own words (`summary`, from `data/sources/summaries.json`) beside its one-sentence preview and the link to its lyrics on bobdylan.com; no excerpts are written, and `data/sources/excerpts.json` stays for a line added by hand** | in force, supersedes D-032 |
| D-034 | 2026-10-07 | 2026-10-07-every-song | 1 | Which tracks get a page? | **All 277** | active, supersedes D-002 |
| D-035 | 2026-10-07 | 2026-10-07-every-song | 1 | How much is written for a song by another writer? | **The same page as his own songs** | active |
| D-036 | 2026-10-07 | 2026-10-07-desktop | 2 | How wide should the content go on a computer? | **Up to 1200 px, two columns** | active |
| D-037 | 2026-10-07 | 2026-10-07-desktop | 3 | On a computer, does the home page give one era at a time, or all of them at once? | **One era fills the screen** | active |
| D-038 | 2026-10-07 | 2026-10-07-desktop | 5 | On a computer, what should clicking a dot on the map do? | **Select it, and show its panel** | active |
| D-039 | 2026-10-07 | 2026-10-07-every-song | 1 | Every album track is mapped to its song once, by `tools/add-tracks.mjs`, into `data/sources/track-map.json` (`{ album: [song id per track] }`); album pages and the data check read that map, or matching track titles to songs when each page is built, as before? (the agent's own call A1, accepted in the walkthrough) | **Every album track is mapped to its song once, by `tools/add-tracks.mjs`, into `data/sources/track-map.json` (`{ album: [song id per track] }`); album pages and the data check read that map** [hard-to-undo] | active |
| D-040 | 2026-10-07 | 2026-10-07-every-song | 1 | Takes on one album that have no song between them become one song under the shared title: "Alberta #1" and "Alberta #2" are the song "Alberta"; "Forever Young (continued)" on Planet Waves maps to "Forever Young", or a song per take? (the agent's own call A2, accepted in the walkthrough) | **Takes on one album that have no song between them become one song under the shared title: "Alberta #1" and "Alberta #2" are the song "Alberta"; "Forever Young (continued)" on Planet Waves maps to "Forever Young"** [visible] | active |
| D-041 | 2026-10-07 | 2026-10-07-every-song | 1 | A live take whose song had no page anywhere becomes a song under its plain title, with the live take as its track: "The Mighty Quinn (Quinn the Eskimo)" and "Minstrel Boy", both on Self Portrait, or a song titled "… (live)"? (the agent's own call A3, accepted in the walkthrough) | **A live take whose song had no page anywhere becomes a song under its plain title, with the live take as its track: "The Mighty Quinn (Quinn the Eskimo)" and "Minstrel Boy", both on Self Portrait** [visible] | active |
| D-042 | 2026-10-07 | 2026-10-07-every-song | 1 | The new songs' records are in `data/parts/album-tracks.json`, or `data/parts/tracks.json`, as the plan's interface named it? (the agent's own call D1, accepted in the walkthrough) | **The new songs' records are in `data/parts/album-tracks.json`** [deviation] | active |
| D-043 | 2026-10-07 | 2026-10-07-every-song | 2 | A traditional song's words card says "A traditional song", or "Words by traditional", or no line? (the agent's own call A8, accepted in the walkthrough) | **A traditional song's words card says "A traditional song"** [visible] | active |
| D-044 | 2026-10-07 | 2026-10-07-every-song | 2 | An instrumental keeps its bobdylan.com page as its link (9 songs, such as "Turkey Chase"), as "Nashville Skyline Rag" had from the first build, or no lyrics link, as step 1's case table says? (the agent's own call D4, accepted in the walkthrough) | **An instrumental keeps its bobdylan.com page as its link (9 songs, such as "Turkey Chase"), as "Nashville Skyline Rag" had from the first build** [deviation, close] | active |
| D-045 | 2026-10-07 | 2026-10-07-every-song | 3 | `data/threads.json` is kept by hand from now on: the 26 new songs were placed into it, and `tools/make-threads.mjs` refuses to overwrite it without `--force`, or regenerating the threads with the tool? (the agent's own call D3, accepted in the walkthrough) | **`data/threads.json` is kept by hand from now on: the 26 new songs were placed into it, and `tools/make-threads.mjs` refuses to overwrite it without `--force`** [deviation] | active |
| D-046 | 2026-10-07 | 2026-10-07-every-song | 4 | A song page names its live takes on other albums: "Also on Self Portrait: She Belongs to Me (live)", or the album row linking there, with nothing on the song's page? (the agent's own call A9, accepted in the walkthrough) | **A song page names its live takes on other albums: "Also on Self Portrait: She Belongs to Me (live)"** [visible] | active |
| D-047 | 2026-10-07 | 2026-10-07-every-song | 2 | The three fetchers now keep what earlier runs found (`lyrics.json` was rewritten from scratch each run, which would have dropped 8 links found in the first build) and know a few other spellings (Talkin' World War III Blues, Motorpsycho Nightmare, What'll I Do, Quinn the Eskimo), or rerunning them as they were? (the agent's own call A5, listed, not judged, in the walkthrough) | **The three fetchers now keep what earlier runs found (`lyrics.json` was rewritten from scratch each run, which would have dropped 8 links found in the first build) and know a few other spellings (Talkin' World War III Blues, Motorpsycho Nightmare, What'll I Do, Quinn the Eskimo)** | listed |
| D-048 | 2026-10-07 | 2026-10-07-every-song | 3 | Covers others made famous are added as their own version songs (12, such as Manfred Mann's "Mighty Quinn"), as the first build's connections were, and are not added to the "Songs others made famous" thread, or adding them to that thread too? (the agent's own call A7, listed, not judged, in the walkthrough) | **Covers others made famous are added as their own version songs (12, such as Manfred Mann's "Mighty Quinn"), as the first build's connections were, and are not added to the "Songs others made famous" thread** | listed |
| D-049 | 2026-10-07 | 2026-10-07-every-song | 1 | Where Dylan co-wrote the words (with Robert Hunter, Jacques Levy, Tom Petty, Carole Bayer Sager), the song counts as his own: no "Words by" line, the co-writer named in the note, or a "Words by Bob Dylan and …" line? (the agent's own call A4, answered in the reviewer's own words in the walkthrough) | **Where Dylan co-wrote the words (with Robert Hunter, Jacques Levy, Tom Petty, Carole Bayer Sager), the song counts as his own: no "Words by" line, the co-writer named in the note** [visible, close] | own |
| D-050 | 2026-10-07 | 2026-10-07-every-song | 2 | No Genius links: another writer's song shows "Words by …" alone, or "Lyrics on Genius ↗" where Genius has the song, as the plan review asked? (the agent's own call D2, answered in the reviewer's own words in the walkthrough) | **No Genius links: another writer's song shows "Words by …" alone** [deviation, visible] | own |
| D-051 | 2026-10-07 | 2026-10-07-every-song | 2 | The 1979 Saturday Night Live moment stays without a clip: the YouTube finder found the same unofficial upload the first build dropped, and now skips it, or adding it back? (the agent's own call A6, flagged in the walkthrough) | **The 1979 Saturday Night Live moment stays without a clip: the YouTube finder found the same unofficial upload the first build dropped, and now skips it** | flagged |
| D-052 | 2026-10-07 | 2026-10-07-desktop | 5 | q4 | **Add "A thread from this song ›" to the map page** | active |
| D-053 | 2026-10-07 | 2026-10-07-desktop | 1 | the + / − buttons show from 768 px, not on phones, or on phones too? (the agent's own call A2, accepted in the walkthrough) | **the + / − buttons show from 768 px, not on phones** [visible] | active |
| D-054 | 2026-10-07 | 2026-10-07-desktop | 1 | the hover label replaces the dot's SVG <title> tooltip; each dot gets an aria-label instead, or keep the native tooltip too? (the agent's own call A4, accepted in the walkthrough) | **the hover label replaces the dot's SVG <title> tooltip; each dot gets an aria-label instead** [visible] | active |
| D-055 | 2026-10-07 | 2026-10-07-desktop | 2 | the tablet band keeps today's 672→720 px column with 48 px side margins (max-width 816 px), or widening the column itself? (the agent's own call A7, accepted in the walkthrough) | **the tablet band keeps today's 672→720 px column with 48 px side margins (max-width 816 px)** [visible] | active |
| D-056 | 2026-10-07 | 2026-10-07-desktop | 2 | the header is sticky (stays at the top as you scroll), 64 px, on the era's paper, or a header that scrolls away? (the agent's own call A5, accepted in the walkthrough) | **the header is sticky (stays at the top as you scroll), 64 px, on the era's paper** [visible] | active |
| D-057 | 2026-10-07 | 2026-10-07-desktop | 3 | the desktop spread is the same markup as the phone panel (new EraSpread.astro used at every width), laid out by CSS grid from 1100 px, or a second, desktop-only set of era sections? (the agent's own call A9, accepted in the walkthrough) | **the desktop spread is the same markup as the phone panel (new EraSpread.astro used at every width), laid out by CSS grid from 1100 px** [hard-to-undo] | active |
| D-058 | 2026-10-07 | 2026-10-07-desktop | 3 | the crossfade is the header and window colour fading (0.5 s) plus the leaving era's text dimming to 25 %, or a full-screen fade between eras? (the agent's own call A11, accepted in the walkthrough) | **the crossfade is the header and window colour fading (0.5 s) plus the leaving era's text dimming to 25 %** [visible] | active |
| D-059 | 2026-10-07 | 2026-10-07-desktop | 3 | timeline names are clipped with an ellipsis on short eras (each stretch at least 64 px); the current era's name is written out in full over its neighbours, or names under every stretch in full? (the agent's own call A12, accepted in the walkthrough) | **timeline names are clipped with an ellipsis on short eras (each stretch at least 64 px); the current era's name is written out in full over its neighbours** [visible] | active |
| D-060 | 2026-10-07 | 2026-10-07-desktop | 4 | the song page's left column holds the cover at 150 px above the title (changed in `66db1e0`: beside a 150 px cover, "Stardust" broke mid-word at 1440 px), and scrolls on its own if taller than the window, or the cover across the whole left column? (the agent's own call A14, accepted in the walkthrough) | **the song page's left column holds the cover at 150 px above the title (changed in `66db1e0`: beside a 150 px cover, "Stardust" broke mid-word at 1440 px), and scrolls on its own if taller than the window** [visible] | active |
| D-061 | 2026-10-07 | 2026-10-07-desktop | 4 | the song page's words card is rendered twice (Words.astro): once in the phone position, once in the right column, each hidden at the other width, or moving the players with script, or a grid without the sticky column? (the agent's own call A13, accepted in the walkthrough) | **the song page's words card is rendered twice (Words.astro): once in the phone position, once in the right column, each hidden at the other width** [hard-to-undo] | active |
| D-062 | 2026-10-07 | 2026-10-07-desktop | 4 | a moment's "songs it is tied to" are the Dylan songs its story names by title, plus the era's records from that year, or the songs it is tied to? (the agent's own call D1, accepted in the walkthrough) | **a moment's "songs it is tied to" are the Dylan songs its story names by title, plus the era's records from that year** [deviation] | active |
| D-063 | 2026-10-07 | 2026-10-07-desktop | 5 | on /map/<song>/ the panel opens already showing that song; /map/ opens on "Click a dot…", or an empty panel until you click? (the agent's own call A20, accepted in the walkthrough) | **on /map/<song>/ the panel opens already showing that song; /map/ opens on "Click a dot…"** [visible] | active |
| D-064 | 2026-10-07 | 2026-10-07-desktop | 5 | from 1100 px a thread's map opens on its first song's neighbourhood (as a phone's does), and hovering a card lights its dot and glides the map to it when it is out of view; a song's map pages and small map also open on the neighbourhood; /map/ shows everything, or every map fitted to all its songs, as on a tablet? (the agent's own call A18, accepted in the walkthrough) | **from 1100 px a thread's map opens on its first song's neighbourhood (as a phone's does), and hovering a card lights its dot and glides the map to it when it is out of view; a song's map pages and small map also open on the neighbourhood; /map/ shows everything** [visible] | active |
| D-065 | 2026-10-07 | 2026-10-07-desktop | 5 | the line of years puts each card's year on the line and writes the gap to the next card on the line between them ("2 yrs →"); the cards are evenly spaced, or spacing cards in proportion to the years between them? (the agent's own call A17, accepted in the walkthrough) | **the line of years puts each card's year on the line and writes the gap to the next card on the line between them ("2 yrs →"); the cards are evenly spaced** [visible] | active |
| D-066 | 2026-10-07 | 2026-10-07-desktop | 5 | The tablet band (768–1099 px) also hides the map's own Cards / Map toggle beside a thread's cards, or the tablet exactly as today? (the agent's own call D2, accepted in the walkthrough) | **The tablet band (768–1099 px) also hides the map's own Cards / Map toggle beside a thread's cards** [deviation] | active |
| D-067 | 2026-10-07 | 2026-10-07-desktop | 6 | the desktop check also fails when the phone's bottom bar or no header shows, when › beside an era or › beside a thread's cards moves nothing, and it presses ← to come back, or only the plan's list? (the agent's own call A23, accepted in the walkthrough) | **the desktop check also fails when the phone's bottom bar or no header shows, when › beside an era or › beside a thread's cards moves nothing, and it presses ← to come back** [visible] | active |
| D-068 | 2026-10-07 | 2026-10-07-desktop | 1 | each dot's invisible hit ring is 28 map units across (r 14), or a ring 14 px across? (the agent's own call A1, listed, not judged, in the walkthrough) | **each dot's invisible hit ring is 28 map units across (r 14)** [close] | listed |
| D-069 | 2026-10-07 | 2026-10-07-desktop | 1 | the phone check tries a touch tap and a pointer press-release on a dot, both must open the song, or a tap only? (the agent's own call A3, listed, not judged, in the walkthrough) | **the phone check tries a touch tap and a pointer press-release on a dot, both must open the song** [close] | listed |
| D-070 | 2026-10-07 | 2026-10-07-desktop | 2 | the header search is a plain GET form to /search/?q=… (works without script); "/" focuses it only when the header shows (from 1100 px), or a scripted field? (the agent's own call A6, listed, not judged, in the walkthrough) | **the header search is a plain GET form to /search/?q=… (works without script); "/" focuses it only when the header shows (from 1100 px)** [close] | listed |
| D-071 | 2026-10-07 | 2026-10-07-desktop | 2 | map pages light "Map" in the header but still "Threads" in the phone's bottom bar (it has no Map tab), or adding a Map tab to the bottom bar? (the agent's own call A8, listed, not judged, in the walkthrough) | **map pages light "Map" in the header but still "Threads" in the phone's bottom bar (it has no Map tab)** [close] | listed |
| D-072 | 2026-10-07 | 2026-10-07-desktop | 3 | scrolling keeps replaceState for the address (/era/<id>/), as today; ‹ ›, keys and the timeline do the same, or pushState per era, so Back steps through eras? (the agent's own call A10, listed, not judged, in the walkthrough) | **scrolling keeps replaceState for the address (/era/<id>/), as today; ‹ ›, keys and the timeline do the same** [close] | listed |
| D-073 | 2026-10-07 | 2026-10-07-desktop | 4 | the small map on a song page is the right column's full width × 300 px, under the connections, or 360 × 300? (the agent's own call A15, listed, not judged, in the walkthrough) | **the small map on a song page is the right column's full width × 300 px, under the connections** [close] | listed |
| D-074 | 2026-10-07 | 2026-10-07-desktop | 5 | The map panel's rows are one built file, `/map-panel.json`, fetched on the first click, and a song with no preview shows its note, or the panel's data written into every map page? (the agent's own call A25, listed, not judged, in the walkthrough) | **The map panel's rows are one built file, `/map-panel.json`, fetched on the first click, and a song with no preview shows its note** [close] | listed |
| D-075 | 2026-10-07 | 2026-10-07-desktop | 5 | the era filter is the legend turned into buttons by script from 1100 px (role=button, 44 px tall, one era at a time, click again to clear), or real buttons at every width, or several eras at once? (the agent's own call A19, listed, not judged, in the walkthrough) | **the era filter is the legend turned into buttons by script from 1100 px (role=button, 44 px tall, one era at a time, click again to clear)** [close] | listed |
| D-076 | 2026-10-07 | 2026-10-07-desktop | 6 | search's three columns are placed by CSS on group sections (Eras and Moments stacked in the first column); on a phone the groups keep today's order, best match first, or re-rendering the results in a fixed column order? (the agent's own call A21, listed, not judged, in the walkthrough) | **search's three columns are placed by CSS on group sections (Eras and Moments stacked in the first column); on a phone the groups keep today's order, best match first** [close] | listed |
| D-077 | 2026-10-07 | 2026-10-07-desktop | 6 | "content narrower than 60 %" is measured as the horizontal span of everything showing inside <main>; the 404 page is exempt; the era-background test reads the colour behind the window's right edge, 85 % down (clear of the ‹ › buttons), against the body era's --paper, or measuring .page's width, or sampling the left edge? (the agent's own call A22, listed, not judged, in the walkthrough) | **"content narrower than 60 %" is measured as the horizontal span of everything showing inside <main>; the 404 page is exempt; the era-background test reads the colour behind the window's right edge, 85 % down (clear of the ‹ › buttons), against the body era's --paper** [close] | listed |
| D-078 | 2026-10-07 | 2026-10-07-desktop | 6 | `npm test` runs the data check, the build, the phone check and the desktop check; `npm run check:desktop` runs the last alone; `--shots <dir>` also writes the 1440 × 900 screenshots there, or a separate script per size? (the agent's own call A24, listed, not judged, in the walkthrough) | **`npm test` runs the data check, the build, the phone check and the desktop check; `npm run check:desktop` runs the last alone; `--shots <dir>` also writes the 1440 × 900 screenshots there** [close] | listed |
| D-079 | 2026-10-07 | 2026-10-07-desktop | 5 | the threads list shows its covers from all of a thread's songs' albums, first four distinct; two threads (Borrowed tunes, Songs others made famous) have none and show no covers, or the covers of its first songs? (the agent's own call D3, answered in the reviewer's own words in the walkthrough) | **the threads list shows its covers from all of a thread's songs' albums, first four distinct; two threads (Borrowed tunes, Songs others made famous) have none and show no covers** [deviation] | own |
| D-080 | 2026-10-07 | 2026-10-07-desktop | 4 | the album page's left column is not sticky, or sticky like the song page's? (the agent's own call A16, flagged in the walkthrough) | **the album page's left column is not sticky** [close] | flagged |
| D-081 | 2026-10-07 | 2026-10-07-desktop | 5 | the threads list shows its covers from all of a thread's songs' albums, first four distinct; two threads (Borrowed tunes, Songs others made famous) have none and show no covers [deviation] (changed after review, "i would like to give some visuals for these as well": a step not on his albums, an old tune or another artist's version, now shows the cover of the Dylan song it is connected to, so every thread has four covers), or the covers of its first songs? (the agent's own call D3, accepted in the walkthrough) | **the threads list shows its covers from all of a thread's songs' albums, first four distinct; two threads (Borrowed tunes, Songs others made famous) have none and show no covers [deviation] (changed after review, "i would like to give some visuals for these as well": a step not on his albums, an old tune or another artist's version, now shows the cover of the Dylan song it is connected to, so every thread has four covers)** [deviation] | active |
| D-082 | 2026-10-07 | 2026-10-07-desktop | 4 | the album page's left column is not sticky, or sticky like the song page's? (the agent's own call A16, listed, not judged, in the walkthrough) | **the album page's left column is not sticky** [close] | listed |
| D-083 | 2026-10-07 | 2026-10-07-fuller | 5 | q1 | **A context rail from 1440 px, the content kept at 1200 px** | active |
| D-084 | 2026-10-07 | 2026-10-07-fuller | 6 | q2 | **Wikipedia and MusicBrainz, where MusicBrainz lists them** | active |
| D-085 | 2026-10-07 | 2026-10-07-fuller | 1 | q3 | **An era about 250 words, a moment about 120, an album about 150** | active |
| D-086 | 2026-10-08 | 2026-10-07-fuller | 3 | q5 | **Yes, as built: every era's bands on the home page too** | active |
| D-087 | 2026-10-08 | 2026-10-07-fuller | 4 | q4 | **A line: Find Fallen Angels on Spotify ↗** | active |
| D-088 | 2026-10-08 | 2026-10-07-fuller | 2 | an era's gallery is up to five photographs of its own; a photo marked as a moment's belongs to that moment, and tops up a gallery with fewer than three (Basement and Blood on the Tracks: 2 of their own and 1 from a moment), or a moment's photo counted in every gallery, or never? (the agent's own call A14, accepted in the walkthrough) | **an era's gallery is up to five photographs of its own; a photo marked as a moment's belongs to that moment, and tops up a gallery with fewer than three (Basement and Blood on the Tracks: 2 of their own and 1 from a moment)** [visible] | active |
| D-089 | 2026-10-08 | 2026-10-07-fuller | 2 | a moment's photograph is often its place or its people, and the caption says so: Big Pink for the Basement sessions, the Warfield for the gospel shows, Roy Orbison for the Wilburys, or a photo only of the event itself? (the agent's own call A16, accepted in the walkthrough) | **a moment's photograph is often its place or its people, and the caption says so: Big Pink for the Basement sessions, the Warfield for the gospel shows, Roy Orbison for the Wilburys** [visible] | active |
| D-090 | 2026-10-08 | 2026-10-07-fuller | 3 | (question 5) every era on the timeline gets its bands, under its own spread, inside a new wrapper (`article.eb`) that a phone swipes and a computer snaps to; the home page's timeline gets them too, or bands only for the era in the address, after the whole timeline? (the agent's own call A1, accepted in the walkthrough) | **(question 5) every era on the timeline gets its bands, under its own spread, inside a new wrapper (`article.eb`) that a phone swipes and a computer snaps to; the home page's timeline gets them too** [hard-to-undo] | active |
| D-091 | 2026-10-08 | 2026-10-07-fuller | 3 | the "records and moments" band shows only from 1100 px; phones and tablets get the story and gallery, songs to start with, threads and Read on, stacked, or the same band on a phone? (the agent's own call A3, accepted in the walkthrough) | **the "records and moments" band shows only from 1100 px; phones and tablets get the story and gallery, songs to start with, threads and Read on, stacked** [visible] | active |
| D-092 | 2026-10-08 | 2026-10-07-fuller | 3 | a moment page shows its clip first, its own photo under it when it has both; with neither, the era's lead photo, headed "The era's photograph · &lt;era&gt;"; "Around it" is the two moments either side; "His songs from &lt;year&gt;" up to 8, the most connected first, or only the clip or only one photo? (the agent's own call A4, accepted in the walkthrough) | **a moment page shows its clip first, its own photo under it when it has both; with neither, the era's lead photo, headed "The era's photograph · &lt;era&gt;"; "Around it" is the two moments either side; "His songs from &lt;year&gt;" up to 8, the most connected first** [visible] | active |
| D-093 | 2026-10-08 | 2026-10-07-fuller | 3 | the gallery is a grid (the first photo wide, then two a row) with one line naming the photographers; each photo's credit and licence show when it opens large, or a sideways row, or a credit under every thumbnail? (the agent's own call A19, accepted in the walkthrough) | **the gallery is a grid (the first photo wide, then two a row) with one line naming the photographers; each photo's credit and licence show when it opens large** [visible] | active |
| D-094 | 2026-10-08 | 2026-10-07-fuller | 3 | an era's "Threads through it" shows at most six threads, those with the most of the era's songs first, or every thread that passes through it? (the agent's own call A26, accepted in the walkthrough) | **an era's "Threads through it" shows at most six threads, those with the most of the era's songs first** [visible] | active |
| D-095 | 2026-10-08 | 2026-10-07-fuller | 4 | (question 4) Fallen Angels has no album player: MusicBrainz lists no Spotify album whose title matches it, and the desktop check only asks for a player where an album has a Spotify id, or all 39 with a player? (the agent's own call A24, accepted in the walkthrough) | **(question 4) Fallen Angels has no album player: MusicBrainz lists no Spotify album whose title matches it, and the desktop check only asks for a player where an album has a Spotify id** [visible] | active |
| D-096 | 2026-10-08 | 2026-10-07-fuller | 4 | a song page's "In threads" also lists the thread made from the song ("From &lt;song&gt;"), so a song in no curated thread still has one, or the curated threads only? (the agent's own call A25, accepted in the walkthrough) | **a song page's "In threads" also lists the thread made from the song ("From &lt;song&gt;"), so a song in no curated thread still has one** [visible] | active |
| D-097 | 2026-10-08 | 2026-10-07-fuller | 4 | "Where its songs lead": at most six connections to songs off the album, covers, borrowed tunes, answers and rewrites before shared themes, or all of them? (the agent's own call A7, accepted in the walkthrough) | **"Where its songs lead": at most six connections to songs off the album, covers, borrowed tunes, answers and rewrites before shared themes** [visible] | active |
| D-098 | 2026-10-08 | 2026-10-07-fuller | 4 | album page: the cover and the Spotify album player on the left; Why it matters with the essay, the track list and "Where its songs lead" on the right; previous and next album under both, or the essay in the left column? (the agent's own call A5, accepted in the walkthrough) | **album page: the cover and the Spotify album player on the left; Why it matters with the essay, the track list and "Where its songs lead" on the right; previous and next album under both** [visible] | active |
| D-099 | 2026-10-08 | 2026-10-07-fuller | 4 | removed the desktop-only "Also in this era" row; the previous and next album of the era, with covers, replace it at every width, or keeping both? (the agent's own call D1, accepted in the walkthrough) | **removed the desktop-only "Also in this era" row; the previous and next album of the era, with covers, replace it at every width** [deviation] | active |
| D-100 | 2026-10-08 | 2026-10-07-fuller | 5 | from 1440 px the content starts under the header's left edge, up to 1200 px, with the rail (240 px and a 48 px gap) in the right margin: the content is 984 px at 1440, the full 1200 from about 1900, or the content centred with the rail outside it? (the agent's own call A9, accepted in the walkthrough) | **from 1440 px the content starts under the header's left edge, up to 1200 px, with the rail (240 px and a 48 px gap) in the right margin: the content is 984 px at 1440, the full 1200 from about 1900** [visible] | active |
| D-101 | 2026-10-08 | 2026-10-07-fuller | 5 | the rail is on album, song and moment pages only, or a rail on every page? (the agent's own call A8, accepted in the walkthrough) | **the rail is on album, song and moment pages only** [visible] | active |
| D-102 | 2026-10-08 | 2026-10-07-fuller | 6 | "Read on: Wikipedia ↗ · MusicBrainz ↗" at the end of album and song pages and of each era's bands, in a new tab, and nothing when there are no links, or near the title? (the agent's own call A11, accepted in the walkthrough) | **"Read on: Wikipedia ↗ · MusicBrainz ↗" at the end of album and song pages and of each era's bands, in a new tab, and nothing when there are no links** [visible] | active |
| D-103 | 2026-10-08 | 2026-10-07-fuller | 6 | links out for the 452 album songs only; the 86 songs on no album of his (old tunes, other artists' versions) have none, or every song? (the agent's own call A23, accepted in the walkthrough) | **links out for the 452 album songs only; the 86 songs on no album of his (old tunes, other artists' versions) have none** [visible] | active |
| D-104 | 2026-10-08 | 2026-10-07-fuller | 1 | the data check compares quoted titles loosely (curly and straight apostrophes, hyphens, a bracketed subtitle) and accepts seven real songs on none of the site's albums ("Dignity", "Blind Willie McTell", "Series of Dreams", "Things Have Changed", "I Shall Be Released", "This Wheel's on Fire", "Handle with Care"), or quoting only titles on the site? (the agent's own call A18, listed, not judged, in the walkthrough) | **the data check compares quoted titles loosely (curly and straight apostrophes, hyphens, a bracketed subtitle) and accepts seven real songs on none of the site's albums ("Dignity", "Blind Willie McTell", "Series of Dreams", "Things Have Changed", "I Shall Be Released", "This Wheel's on Fire", "Handle with Care")** [close] | listed |
| D-105 | 2026-10-08 | 2026-10-07-fuller | 1 | the data check holds each era section to 60–110 words, a moment to 80–150 and an album essay to 100–180, or an exact length, or no bound? (the agent's own call A21, listed, not judged, in the walkthrough) | **the data check holds each era section to 60–110 words, a moment to 80–150 and an album essay to 100–180** [close] | listed |
| D-106 | 2026-10-08 | 2026-10-07-fuller | 2 | six of the first 26 photographs are now marked as a moment's, since each already shows it (the March on Washington, Isle of Wight 1969, Chicago 1974, Ginsberg on the Rolling Thunder Revue, Rotterdam 1978, the American Reunion of 1993), or leaving them as era photos only? (the agent's own call A15, listed, not judged, in the walkthrough) | **six of the first 26 photographs are now marked as a moment's, since each already shows it (the March on Washington, Isle of Wight 1969, Chicago 1974, Ginsberg on the Rolling Thunder Revue, Rotterdam 1978, the American Reunion of 1993)** [close] | listed |
| D-107 | 2026-10-08 | 2026-10-07-fuller | 3 | on a phone the swiped row is as tall as the era in view (a ResizeObserver follows it), or every era as tall as the tallest era's bands? (the agent's own call A2, listed, not judged, in the walkthrough) | **on a phone the swiped row is as tall as the era in view (a ResizeObserver follows it)** [close] | listed |
| D-108 | 2026-10-08 | 2026-10-07-fuller | 4 | a track row's title stays a link to its song; a separate ▾ button opens the row in place (preview, themes, its Spotify player, "Its page ›"), and the player loads the first time the row opens, or the whole row as the toggle? (the agent's own call A6, listed, not judged, in the walkthrough) | **a track row's title stays a link to its song; a separate ▾ button opens the row in place (preview, themes, its Spotify player, "Its page ›"), and the player loads the first time the row opens** [close] | listed |
| D-109 | 2026-10-08 | 2026-10-07-fuller | 4 | a song page's "The same year" lists up to 8 of his own songs from his records that year, the most connected first, leaving out covers and other artists' songs, or every song from that year on the site? (the agent's own call A20, listed, not judged, in the walkthrough) | **a song page's "The same year" lists up to 8 of his own songs from his records that year, the most connected first, leaving out covers and other artists' songs** [close] | listed |
| D-110 | 2026-10-08 | 2026-10-07-fuller | 5 | the rail: the era badge and years, the eras as a list of bars sized by their years with this one lit and a pin at the page's year, and quick links (the era, the album, a thread, the map), or a small horizontal ribbon? (the agent's own call A10, listed, not judged, in the walkthrough) | **the rail: the era badge and years, the eras as a list of bars sized by their years with this one lit and a pin at the page's year, and quick links (the era, the album, a thread, the map)** [close] | listed |
| D-111 | 2026-10-08 | 2026-10-07-fuller | 6 | each new desktop-check rule reads the built pages (the essay block, the album player's address, the moment's own photo or a clip) and only fails once its data exists, or checking only the data? (the agent's own call A12, listed, not judged, in the walkthrough) | **each new desktop-check rule reads the built pages (the essay block, the album player's address, the moment's own photo or a clip) and only fails once its data exists** [close] | listed |
| D-112 | 2026-10-08 | 2026-10-07-fuller | 6 | a song's "MusicBrainz ↗" opens the work (the song as written), or the recording on the album? (the agent's own call A22, listed, not judged, in the walkthrough) | **a song's "MusicBrainz ↗" opens the work (the song as written)** [close] | listed |
| D-113 | 2026-10-08 | 2026-10-07-fuller | 6 | eras link only to Wikipedia, an article picked by hand for what the era is most about (Hibbing, Greenwich Village, the Electric Dylan controversy, The Basement Tapes, the Rolling Thunder Revue, the Traveling Wilburys, the 2016 Nobel Prize in Literature), each kept only when it answers; Gospel, Back to the Roots, the Standards and Rough and Rowdy have none, or no era links? (the agent's own call A13, answered in the reviewer's own words in the walkthrough) | **eras link only to Wikipedia, an article picked by hand for what the era is most about (Hibbing, Greenwich Village, the Electric Dylan controversy, The Basement Tapes, the Rolling Thunder Revue, the Traveling Wilburys, the 2016 Nobel Prize in Literature), each kept only when it answers; Gospel, Back to the Roots, the Standards and Rough and Rowdy have none** [visible] | own |
| D-114 | 2026-10-08 | 2026-10-07-fuller | 6 | the desktop check names eight gaps the photo search could not fill and does not fail on them: Back to the Roots (2 photos) and seven moments with no photo or clip (the Shelton review, marrying Sara Lownds, the motorcycle accident, Pat Garrett, the 1980 retrospective shows, Chronicles, The Philosophy of Modern Song); any other gap fails, or the check failing until they are filled? (the agent's own call A17, answered in the reviewer's own words in the walkthrough) | **the desktop check names eight gaps the photo search could not fill and does not fail on them: Back to the Roots (2 photos) and seven moments with no photo or clip (the Shelton review, marrying Sara Lownds, the motorcycle accident, Pat Garrett, the 1980 retrospective shows, Chronicles, The Philosophy of Modern Song); any other gap fails** [visible] | own |

### D-001 — How should the site be built?

- **Chosen:** which can produce a sophisticated website that is graceful and visually appealing, while fully featured? can you detail more visually the deferences?
- **Not chosen:** Plain files, no build step (The folder is the site: nothing to install to run it, and the data check covers what types would.); Vite with TypeScript (Types catch a wrong field early, but a build runs before anyone sees a page.); Astro, a page per song (Each album and song is a real page that search engines index, at the cost of a framework.)
- **Where:** 2026-10-06-dylan-site, step 1 (The app shell: a static site, laid out for a phone (question 1)); components: shell, dataset, timeline, pages, threads, search
- **Status:** active

### D-002 — How much of the catalogue should go in?

- **Chosen:** All 39 albums, 16 in full — The timeline has no holes, and the writing goes where people will tap.
- **Not chosen:** The 16 landmark albums only (About 110 songs, faster to write, but albums like Oh Mercy and Tempest are missing.); Every song on every album (About 450 songs, complete, but most song pages hold only a title.)
- **Where:** 2026-10-06-dylan-site, step 2 (The dataset: eras, moments, albums, songs, connections (question 2)); components: dataset, data-check, pages
- **Status:** superseded, superseded by D-034 on 2026-10-07

### D-003 — How should album covers look?

- **Chosen:** The real covers — Recognisable at a glance, but copyrighted images loaded from the Cover Art Archive.
- **Not chosen:** Drawn in the page (Title and year in the era's colour: nothing to license, nothing loaded from elsewhere.); No covers (Titles only; the timeline's album row becomes plain text.)
- **Where:** 2026-10-06-dylan-site, step 4 (Album and song pages (question 3)); components: timeline, pages, search
- **Status:** active

### D-004 — How should connections be explored?

- **Chosen:** Threads, plus a map on wide screens — Both, at the cost of a graph library of about 90 KB and a second view to keep working.
- **Not chosen:** Threads only (Cards you swipe through, one song at a time; works with a thumb.); A connection map (Every song a dot and every connection a line; striking on a laptop, too small to tap on a phone.)
- **Where:** 2026-10-06-dylan-site, step 5 (Threads: follow a connection from song to song (question 4)); components: threads
- **Status:** superseded, superseded by the plan 2026-10-06-dylan-site as a whole on 2026-10-07

### D-005 — How should someone listen?

- **Chosen:** An embedded Spotify player — You hear it without leaving, but it needs a Spotify id per song, cookies, and previews when not logged in.
- **Not chosen:** Links out (Spotify, Apple Music and YouTube links per song; nothing loads until tapped.); No listening (The most natural next tap goes nowhere.)
- **Where:** 2026-10-06-dylan-site, step 6 (Search, listening links, and checking it on a phone (question 5)); components: dataset, data-check, search, phone-check
- **Status:** active

### D-006 — Where should the era photographs come from?

- **Chosen:** Wikimedia Commons, free-licensed — Free to use with credit shown; coverage is uneven, and some eras get one photo or none.
- **Not chosen:** Licensed press photographs (Every era covered, but a fee per image, often yearly, and a licence that may not allow a public site.); No photographs (Each era's theme alone, with the covers; the plainer look the review asked to avoid.)
- **Note:** but note that we can ue other images and shiould still make it completely visually full , even if we cant find licenses... like no photographs and just text will be bad
- **Where:** 2026-10-06-dylan-site, step 3 (The era timeline: each era with its own look (question 2)); components: timeline
- **Status:** active

### D-007 — What should a song page show beside its lyrics link?

- **Chosen:** The link and a preview in our words — A one-sentence preview written for the site; no lyric is quoted.
- **Not chosen:** The link only (Nothing quoted; the official page has the words.); The link and the first line (A real taste of the song, but quoting a lyric needs the publisher's permission.)
- **Where:** 2026-10-06-dylan-site, step 4 (Album and song pages: covers, lyrics links, and connections (question 3)); components: pages
- **Status:** active

### D-008 — A mistyped address lands on the 404 page, which sends you on to search with the address's last part as the words (`/album/blonde-on-blond/` → search "blonde on blond"), or showing results on the 404 page itself? (the agent's own call A10, accepted in the walkthrough)

- **Chosen:** A mistyped address lands on the 404 page, which sends you on to search with the address's last part as the words (`/album/blonde-on-blond/` → search "blonde on blond") — one search page to keep working; the step it adds is a redirect, not a tap
- **Not chosen:** showing results on the 404 page itself
- **Where:** 2026-10-06-dylan-site, step 1 (The app shell: an Astro site for a phone, a real page per album and song); components: shell, timeline, pages, threads, search
- **Status:** active

### D-009 — From 768 px the tab bar sits at the top of the screen, or the bottom bar on every width? (the agent's own call A15, accepted in the walkthrough)

- **Chosen:** From 768 px the tab bar sits at the top of the screen — on a laptop a top bar is where a reader looks; on a phone it stays at the bottom, as the plan says
- **Not chosen:** the bottom bar on every width
- **Where:** 2026-10-06-dylan-site, step 1 (The app shell: an Astro site for a phone, a real page per album and song); components: shell, timeline, pages, threads, search
- **Status:** active

### D-010 — Each photo names its era and kind (`dylan` or `place`) in `photos.json`, and the panel picks a Dylan photo first; `eras.json`'s `photos` lists stay empty, or each era listing its photo ids, as the plan's interface shows? (the agent's own call A18, accepted in the walkthrough)

- **Chosen:** Each photo names its era and kind (`dylan` or `place`) in `photos.json`, and the panel picks a Dylan photo first; `eras.json`'s `photos` lists stay empty — the photo search worked era by era, and the order rule (Dylan, then place) lives in one place
- **Not chosen:** each era listing its photo ids, as the plan's interface shows
- **Where:** 2026-10-06-dylan-site, step 2 (The dataset: what is in it, and what each record points to); components: dataset, data-check, threads
- **Status:** active

### D-011 — "Lyrics on bobdylan.com ↗" opens in a new tab, or opening in the same tab? (the agent's own call A11, accepted in the walkthrough)

- **Chosen:** "Lyrics on bobdylan.com ↗" opens in a new tab — you keep your place in the site
- **Not chosen:** opening in the same tab
- **Where:** 2026-10-06-dylan-site, step 4 (Album and song pages: covers, lyrics links, and connections (question 3)); components: pages
- **Status:** active

### D-012 — Song pages step to the album's previous and next song, or no stepping between songs? (the agent's own call A16, accepted in the walkthrough)

- **Chosen:** Song pages step to the album's previous and next song — reading through an album without going back to it each time
- **Not chosen:** no stepping between songs
- **Where:** 2026-10-06-dylan-site, step 4 (Album and song pages: covers, lyrics links, and connections (question 3)); components: pages
- **Status:** active

### D-013 — The threads are built by `tools/make-threads.mjs`: one per theme plus "Borrowed tunes" and "Songs others made famous", each card's sentence the song's note or the connection's why, or twelve threads each written card by card? (the agent's own call A7, accepted in the walkthrough)

- **Chosen:** The threads are built by `tools/make-threads.mjs`: one per theme plus "Borrowed tunes" and "Songs others made famous", each card's sentence the song's note or the connection's why — the writing is the dataset's own, checked once; a hand-written thread can replace any of them in `data/threads.json`
- **Not chosen:** twelve threads each written card by card
- **Where:** 2026-10-06-dylan-site, step 5 (Threads and the map: follow connections as cards, or see them all); components: threads
- **Status:** active

### D-014 — Search forgives a typo or two (one edit at 4–5 letters, two from 6; a swapped pair counts as one) and takes `theme:<name>`, which the theme chips on song pages use, or plain matching? (the agent's own call A14, accepted in the walkthrough)

- **Chosen:** Search forgives a typo or two (one edit at 4–5 letters, two from 6; a swapped pair counts as one) and takes `theme:<name>`, which the theme chips on song pages use — a mistyped title still finds its song ("rolling stoen", `runs/search.txt`), and a theme chip needs a way to search by theme
- **Not chosen:** plain matching
- **Where:** 2026-10-06-dylan-site, step 6 (Search, listening and watching, and checking it on a phone); components: data-check, search, phone-check
- **Status:** active

### D-015 — The site's base path is `/` (it lives at a domain's root), or `/dylan-site/` for a GitHub Pages project page? (the agent's own call A1, listed, not judged, in the walkthrough)

- **Chosen:** The site's base path is `/` (it lives at a domain's root) — the host is not chosen yet; every address goes through `import.meta.env.BASE_URL` (changed after the code check: before, links were written from `/` and a new base would have broken them), so `base` in `astro.config.mjs`, or `astro build --base /dylan-site/`, moves the whole site
- **Not chosen:** `/dylan-site/` for a GitHub Pages project page
- **Where:** 2026-10-06-dylan-site, step 1 (The app shell: an Astro site for a phone, a real page per album and song); components: shell, timeline, pages, threads, search
- **Status:** listed

### D-016 — The parts of the dataset are written as `data/parts/*.json` and merged by `tools/merge-data.mjs` into the seven files, or writing the seven files by hand? (the agent's own call A2, listed, not judged, in the walkthrough)

- **Chosen:** The parts of the dataset are written as `data/parts/*.json` and merged by `tools/merge-data.mjs` into the seven files — several writers worked in parallel by era; the merge drops duplicate songs by id
- **Not chosen:** writing the seven files by hand
- **Where:** 2026-10-06-dylan-site, step 2 (The dataset: what is in it, and what each record points to); components: dataset, data-check, threads
- **Status:** listed

### D-017 — Each era page (`/era/<id>/`) is the whole timeline, opened at that era, or one timeline page that reads the era from the address? (the agent's own call A13, listed, not judged, in the walkthrough)

- **Chosen:** Each era page (`/era/<id>/`) is the whole timeline, opened at that era — a shared era link opens on its panel with no script, and the back button returns to it
- **Not chosen:** one timeline page that reads the era from the address
- **Where:** 2026-10-06-dylan-site, step 3 (The era timeline: each era with its own look (question 2)); components: timeline
- **Status:** listed

### D-018 — The map's layout is d3-force, run in the browser, or a precomputed layout, or Cytoscape? (the agent's own call A4, listed, not judged, in the walkthrough)

- **Chosen:** The map's layout is d3-force, run in the browser — about 30 KB, and it settles the dots around whichever song you open
- **Not chosen:** a precomputed layout, or Cytoscape
- **Where:** 2026-10-06-dylan-site, step 5 (Threads and the map: follow connections as cards, or see them all); components: threads
- **Status:** listed

### D-019 — The phone check drives the Chrome already on the machine (`CHROME_PATH`, else the HyperFrames cache), or downloading a Chrome with `puppeteer`? (the agent's own call A3, listed, not judged, in the walkthrough)

- **Chosen:** The phone check drives the Chrome already on the machine (`CHROME_PATH`, else the HyperFrames cache) — `puppeteer-core` installs no browser; one less 150 MB download
- **Not chosen:** downloading a Chrome with `puppeteer`
- **Where:** 2026-10-06-dylan-site, step 6 (Search, listening and watching, and checking it on a phone); components: data-check, search, phone-check
- **Status:** listed

### D-020 — The phone check does not size-check links inside running text or the map's dots, and answers outside requests (covers, players) with an empty reply, so it sees the drawn covers, or holding every link to 44 px, and loading real covers during the check? (the agent's own call A12, listed, not judged, in the walkthrough)

- **Chosen:** The phone check does not size-check links inside running text or the map's dots, and answers outside requests (covers, players) with an empty reply, so it sees the drawn covers — a link inside a sentence is read, not aimed at; the dots are a picture you drag; the check needs no network. The site's own files must all load: a failed load of one fails the check (changed after the code check: before, every failed load was ignored)
- **Not chosen:** holding every link to 44 px, and loading real covers during the check
- **Where:** 2026-10-06-dylan-site, step 6 (Search, listening and watching, and checking it on a phone); components: data-check, search, phone-check
- **Status:** listed

### D-021 — 49 connections, each one a fact the writers were sure of, or about 140, as the plan estimated? (the agent's own call A6, answered in the reviewer's own words in the walkthrough)

- **Chosen:** 49 connections, each one a fact the writers were sure of — a wrong connection is worse than a missing one; more can be added to `data/parts/*.json` and merged
- **Not chosen:** about 140, as the plan estimated
- **The reviewer's words:** can you explore more why we didnt fully fill the connections here?
- **Where:** 2026-10-06-dylan-site, step 2 (The dataset: what is in it, and what each record points to); components: dataset, data-check, threads
- **Status:** own

### D-022 — Every song's `excerpt` is empty: the field, its two-line limit, its credit and its place on the song page are built, but no lyric lines are written, or two-line credited excerpts on landmark songs, as the plan allows? (the agent's own call D1, answered in the reviewer's own words in the walkthrough)

- **Chosen:** Every song's `excerpt` is empty: the field, its two-line limit, its credit and its place on the song page are built, but no lyric lines are written — the writers were stopped by a content filter when quoting lyrics, so the build quotes none; an excerpt can be added to `data/songs.json` by hand and the page shows it
- **Not chosen:** two-line credited excerpts on landmark songs, as the plan allows
- **The reviewer's words:** its fine if this is the only possibility but arfe you sure we dcant just quote some small parts? i dont undersand why we wouldnt be able to, this is common to cite a line from a song, even in popular culture
- **Where:** 2026-10-06-dylan-site, step 2 (The dataset: what is in it, and what each record points to); components: dataset, data-check, threads
- **Status:** own

### D-023 — Each era's theme uses fonts already on the phone (system serif, condensed and typewriter stacks), or loading web fonts per era? (the agent's own call A5, answered in the reviewer's own words in the walkthrough)

- **Chosen:** Each era's theme uses fonts already on the phone (system serif, condensed and typewriter stacks) — no font downloads and no flash of unstyled text; the look varies a little by phone
- **Not chosen:** loading web fonts per era
- **The reviewer's words:** i think the fonts and styling can be much better, more individualistic; it's kind of boring and stock right now. each era should mean something and visually be represented by that via the page. it shouldnt be standardized, it should evoke the creativity of bob dylan
- **Where:** 2026-10-06-dylan-site, step 3 (The era timeline: each era with its own look (question 2)); components: timeline
- **Status:** own

### D-024 — The album page lists the dataset's songs, headed "Selected songs · 7 of 14" when they are fewer than the album's tracks, or the full track list, or an unlabelled selection? (the agent's own call A17, answered in the reviewer's own words in the walkthrough)

- **Chosen:** The album page lists the dataset's songs, headed "Selected songs · 7 of 14" when they are fewer than the album's tracks — the dataset writes 7–8 songs per landmark and 2–3 per other album (D-002); the label says so (added after the code check)
- **Not chosen:** the full track list, or an unlabelled selection
- **The reviewer's words:** is this missing some songs do you mean?
- **Where:** 2026-10-06-dylan-site, step 4 (Album and song pages: covers, lyrics links, and connections (question 3)); components: pages
- **Status:** own

### D-025 — Two YouTube clips, both posted by Bob Dylan's official channel: "Subterranean Homesick Blues" (the Dont Look Back cue-card film) and the "Things Have Changed" video on the 2001 Oscar moment, or clips for Newport 1965 and live songs? (the agent's own call A9, answered in the reviewer's own words in the walkthrough)

- **Chosen:** Two YouTube clips, both posted by Bob Dylan's official channel: "Subterranean Homesick Blues" (the Dont Look Back cue-card film) and the "Things Have Changed" video on the 2001 Oscar moment — no official upload of the Newport footage turned up; unofficial uploads come and go; "official audio" uploads would only repeat Spotify
- **Not chosen:** clips for Newport 1965 and live songs
- **The reviewer's words:** we should be able to view other videos here too i mean there should be a lot we can view and probably on more than two
- **Where:** 2026-10-06-dylan-site, step 6 (Search, listening and watching, and checking it on a phone); components: data-check, search, phone-check
- **Status:** own

### D-026 — Spotify track ids come from MusicBrainz's Spotify album links and Spotify's own album pages, kept only when Spotify's title for the track matches the song (177 of 181 album songs), or ids typed in by hand? (the agent's own call A8, answered in the reviewer's own words in the walkthrough)

- **Chosen:** Spotify track ids come from MusicBrainz's Spotify album links and Spotify's own album pages, kept only when Spotify's title for the track matches the song (177 of 181 album songs) — a wrong id plays the wrong song; four songs whose titles did not match have no player
- **Not chosen:** ids typed in by hand
- **The reviewer's words:** for the 4 that werent found we must find a replacement for it; can't leave dry
- **Where:** 2026-10-06-dylan-site, step 6 (Search, listening and watching, and checking it on a phone); components: data-check, search, phone-check
- **Status:** own

### D-027 — Each era's theme uses fonts already on the phone (system serif, condensed and typewriter stacks) [visible, close] (changed after review: "it should evoke the creativity of bob dylan" — each era now has its own art direction: its own free typeface from `@fontsource` (Alfa Slab One, Courier Prime, Bebas Neue, Rye, DM Serif Display, Abril Fatface, Monoton with Oswald, IM Fell English, Oswald Light, Limelight, Cinzel), palette, CSS texture and a gesture on its panel and pages: a taped flyer and rubber stamp for the Village, a Dont Look Back cue card for Going Electric, a woodtype frame for Basement and Country, a revival handbill for Gospel, neon tubes for the '80s, a 78 label for Back to the Roots, film frames for the Late Renaissance, a deco frame for the Standards, brass for Rough and Rowdy; the chips, buttons and cards became era objects), or loading web fonts per era? (the agent's own call A5, accepted in the walkthrough)

- **Chosen:** Each era's theme uses fonts already on the phone (system serif, condensed and typewriter stacks) [visible, close] (changed after review: "it should evoke the creativity of bob dylan" — each era now has its own art direction: its own free typeface from `@fontsource` (Alfa Slab One, Courier Prime, Bebas Neue, Rye, DM Serif Display, Abril Fatface, Monoton with Oswald, IM Fell English, Oswald Light, Limelight, Cinzel), palette, CSS texture and a gesture on its panel and pages: a taped flyer and rubber stamp for the Village, a Dont Look Back cue card for Going Electric, a woodtype frame for Basement and Country, a revival handbill for Gospel, neon tubes for the '80s, a 78 label for Back to the Roots, film frames for the Late Renaissance, a deco frame for the Standards, brass for Rough and Rowdy; the chips, buttons and cards became era objects) — no font downloads and no flash of unstyled text; the look varies a little by phone
- **Not chosen:** loading web fonts per era
- **Where:** 2026-10-06-dylan-site, step 3 (The era timeline: each era with its own look (question 2)); components: timeline
- **Status:** active

### D-028 — 49 connections, each one a fact the writers were sure of [visible] (changed after review: 135 connections. The first writers worked one era at a time and could only link songs inside their own era, so almost nothing crossed eras; a pass over the whole catalogue added 86: 46 same-theme pairs across eras, 30 famous covers, 9 source tunes, 1 rewrite), or about 140, as the plan estimated? (the agent's own call A6, accepted in the walkthrough)

- **Chosen:** 49 connections, each one a fact the writers were sure of [visible] (changed after review: 135 connections. The first writers worked one era at a time and could only link songs inside their own era, so almost nothing crossed eras; a pass over the whole catalogue added 86: 46 same-theme pairs across eras, 30 famous covers, 9 source tunes, 1 rewrite) — a wrong connection is worse than a missing one; more can be added to `data/parts/*.json` and merged
- **Not chosen:** about 140, as the plan estimated
- **Where:** 2026-10-06-dylan-site, step 2 (The dataset: what is in it, and what each record points to); components: dataset, data-check, threads
- **Status:** active

### D-029 — The album page lists the dataset's songs, headed "Selected songs · 7 of 14" when they are fewer than the album's tracks [visible] (changed after review: the album page shows the full track list from MusicBrainz, numbered; the songs with their own page are marked "its story ›", and a line says how many), or the full track list, or an unlabelled selection? (the agent's own call A17, accepted in the walkthrough)

- **Chosen:** The album page lists the dataset's songs, headed "Selected songs · 7 of 14" when they are fewer than the album's tracks [visible] (changed after review: the album page shows the full track list from MusicBrainz, numbered; the songs with their own page are marked "its story ›", and a line says how many) — the dataset writes 7–8 songs per landmark and 2–3 per other album (D-002); the label says so (added after the code check)
- **Not chosen:** the full track list, or an unlabelled selection
- **Where:** 2026-10-06-dylan-site, step 4 (Album and song pages: covers, lyrics links, and connections (question 3)); components: pages
- **Status:** active

### D-030 — Spotify track ids come from MusicBrainz's Spotify album links and Spotify's own album pages, kept only when Spotify's title for the track matches the song (177 of 181 album songs) [visible] (changed after review: 181 of 181. Spotify spells two titles differently, "Fourth Time Around" and "Love Minus Zero"; the match now drops subtitles and reads 4th as fourth, still by title), or ids typed in by hand? (the agent's own call A8, accepted in the walkthrough)

- **Chosen:** Spotify track ids come from MusicBrainz's Spotify album links and Spotify's own album pages, kept only when Spotify's title for the track matches the song (177 of 181 album songs) [visible] (changed after review: 181 of 181. Spotify spells two titles differently, "Fourth Time Around" and "Love Minus Zero"; the match now drops subtitles and reads 4th as fourth, still by title) — a wrong id plays the wrong song; four songs whose titles did not match have no player
- **Not chosen:** ids typed in by hand
- **Where:** 2026-10-06-dylan-site, step 6 (Search, listening and watching, and checking it on a phone); components: data-check, search, phone-check
- **Status:** active

### D-031 — Two YouTube clips, both posted by Bob Dylan's official channel: "Subterranean Homesick Blues" (the Dont Look Back cue-card film) and the "Things Have Changed" video on the 2001 Oscar moment [visible, close] (changed after review, question 4 answered B: 166 album songs have a clip from Bob Dylan's official channel, and 13 moments have footage, some posted by others, each kept only when its title names the event; `npm run check:clips` fails on any clip taken down), or clips for Newport 1965 and live songs? (the agent's own call A9, accepted in the walkthrough)

- **Chosen:** Two YouTube clips, both posted by Bob Dylan's official channel: "Subterranean Homesick Blues" (the Dont Look Back cue-card film) and the "Things Have Changed" video on the 2001 Oscar moment [visible, close] (changed after review, question 4 answered B: 166 album songs have a clip from Bob Dylan's official channel, and 13 moments have footage, some posted by others, each kept only when its title names the event; `npm run check:clips` fails on any clip taken down) — no official upload of the Newport footage turned up; unofficial uploads come and go; "official audio" uploads would only repeat Spotify
- **Not chosen:** clips for Newport 1965 and live songs
- **Where:** 2026-10-06-dylan-site, step 6 (Search, listening and watching, and checking it on a phone); components: data-check, search, phone-check
- **Status:** active

### D-032 — Every song's `excerpt` is empty: the field, its two-line limit, its credit and its place on the song page are built, but no lyric lines are written [deviation, visible] (kept after review: short credited quotation is common, and may well be fair use; the limit is the AI's output, which a filter stopped every time it wrote lyric lines. Lines added by hand to `excerpt` in `data/songs.json` show, credited; a script that copies lyrics from another site would get round that filter, so the build does not use one), or two-line credited excerpts on landmark songs, as the plan allows? (the agent's own call D1, answered in the reviewer's own words in the walkthrough)

- **Chosen:** Every song's `excerpt` is empty: the field, its two-line limit, its credit and its place on the song page are built, but no lyric lines are written [deviation, visible] (kept after review: short credited quotation is common, and may well be fair use; the limit is the AI's output, which a filter stopped every time it wrote lyric lines. Lines added by hand to `excerpt` in `data/songs.json` show, credited; a script that copies lyrics from another site would get round that filter, so the build does not use one) — the writers were stopped by a content filter when quoting lyrics, so the build quotes none; an excerpt can be added to `data/songs.json` by hand and the page shows it
- **Not chosen:** two-line credited excerpts on landmark songs, as the plan allows
- **Note:** superseded by D-033
- **The reviewer's words:** So are you saying it is empty right now? that is what im concerned about
- **Where:** 2026-10-06-dylan-site, step 2 (The dataset: what is in it, and what each record points to); components: dataset, data-check, threads
- **Status:** superseded

### D-033 — Lyrics are summarised, not quoted: every album song carries a summary of three or four sentences in our own words (`summary`, from `data/sources/summaries.json`) beside its one-sentence preview and the link to its lyrics on bobdylan.com; no excerpts are written, and `data/sources/excerpts.json` stays for a line added by hand, or two-line credited excerpts on landmark songs, or excerpts left empty with only the one-sentence preview? (the owner's answer in conversation after the second walkthrough review)

- **Chosen:** Lyrics are summarised, not quoted: every album song carries a summary of three or four sentences in our own words (`summary`, from `data/sources/summaries.json`) beside its one-sentence preview and the link to its lyrics on bobdylan.com; no excerpts are written, and `data/sources/excerpts.json` stays for a line added by hand — the AI cannot write lyric lines, and the owner is fine with an AI-written summary in their place
- **Not chosen:** two-line credited excerpts on landmark songs, or excerpts left empty with only the one-sentence preview
- **The reviewer's words:** ok i think its fine to just have AI fill in the lyrics summary? · yes do both
- **Where:** 2026-10-06-dylan-site, step 2 (The dataset: what is in it, and what each record points to); components: dataset, data-check
- **Status:** in force; supersedes D-032

### D-034 — Which tracks get a page?

- **Chosen:** All 277 — Every row of every album opens a page; about 600 new pages.
- **Not chosen:** The 54 missing from the 16 landmarks (Makes "16 in full" true; about 120 new pages. Triplicate keeps 27 dead rows.); None (The track lists stay as they are.)
- **Where:** 2026-10-07-every-song, step 1 (Every track becomes a song: its record and its writing (questions 1 and 2)); components: pages
- **Status:** active; supersedes D-002

### D-035 — How much is written for a song by another writer?

- **Chosen:** The same page as his own songs — A note, a summary of the song and his recording, the player, who wrote the words.
- **Not chosen:** A shorter page: the note and the player (One sentence and the player; thinner than his own songs.); No page: the writer's name on the row (Not a link; Triplicate stays mostly dead rows.)
- **Where:** 2026-10-07-every-song, step 1 (Every track becomes a song: its record and its writing (questions 1 and 2)); components: pages
- **Status:** active

### D-036 — How wide should the content go on a computer?

- **Chosen:** Up to 1200 px, two columns — Cover and players left, words and connections right; the era's look either side.
- **Not chosen:** Up to 1600 px, three columns where there is room (A third column, the song's map, on a wide monitor; harder to read in order.); Keep the 720 px column, paint the margins (The cheapest; a song page stays 2,500 px tall.)
- **Where:** 2026-10-07-desktop, step 2 (The app shell on a wide screen: a header, the era's look across the window, room for two columns (question 1)); components: shell, pages, threads, search
- **Status:** active

### D-037 — On a computer, does the home page give one era at a time, or all of them at once?

- **Chosen:** One era fills the screen — Photo left, story right, albums under; arrows, keys and the timeline move on.
- **Not chosen:** All eleven down one long page (Scroll from Hibbing to Rough and Rowdy; the look changes under you.); An overview of eleven columns first (One more click to an era; each column is about 120 px wide.)
- **Note:** actually maybe mixing this with scroll is good. i like how this is presented but if we scroll down, it should get us to the next era with a clean transition through scrolling, wihtout needing to click the arrow
- **Where:** 2026-10-07-desktop, step 3 (The era timeline on a computer: one era fills the screen (question 2)); components: timeline
- **Status:** active

### D-038 — On a computer, what should clicking a dot on the map do?

- **Chosen:** Select it, and show its panel — You stay on the map; Open the song › or a double click opens it.
- **Not chosen:** Open its song at once (As on a phone; every click leaves the map.)
- **Where:** 2026-10-07-desktop, step 5 (Threads and the map on a computer: cards along the years, the map below, a panel for the song you click (question 3)); components: pages, threads
- **Status:** active

### D-039 — Every album track is mapped to its song once, by `tools/add-tracks.mjs`, into `data/sources/track-map.json` (`{ album: [song id per track] }`); album pages and the data check read that map, or matching track titles to songs when each page is built, as before? (the agent's own call A1, accepted in the walkthrough)

- **Chosen:** Every album track is mapped to its song once, by `tools/add-tracks.mjs`, into `data/sources/track-map.json` (`{ album: [song id per track] }`); album pages and the data check read that map — a take or a live take maps to a song with a different title; one map, checked, is simpler than the same fuzzy match in three places
- **Not chosen:** matching track titles to songs when each page is built, as before
- **Where:** 2026-10-07-every-song, step 1 (Every track becomes a song: its record and its writing (questions 1 and 2)); components: pages
- **Status:** active

### D-040 — Takes on one album that have no song between them become one song under the shared title: "Alberta #1" and "Alberta #2" are the song "Alberta"; "Forever Young (continued)" on Planet Waves maps to "Forever Young", or a song per take? (the agent's own call A2, accepted in the walkthrough)

- **Chosen:** Takes on one album that have no song between them become one song under the shared title: "Alberta #1" and "Alberta #2" are the song "Alberta"; "Forever Young (continued)" on Planet Waves maps to "Forever Young" — the plan folds takes into the song they are takes of; with no existing song, the title without the take number is that song
- **Not chosen:** a song per take
- **Where:** 2026-10-07-every-song, step 1 (Every track becomes a song: its record and its writing (questions 1 and 2)); components: pages
- **Status:** active

### D-041 — A live take whose song had no page anywhere becomes a song under its plain title, with the live take as its track: "The Mighty Quinn (Quinn the Eskimo)" and "Minstrel Boy", both on Self Portrait, or a song titled "… (live)"? (the agent's own call A3, accepted in the walkthrough)

- **Chosen:** A live take whose song had no page anywhere becomes a song under its plain title, with the live take as its track: "The Mighty Quinn (Quinn the Eskimo)" and "Minstrel Boy", both on Self Portrait — the page is about the song; the album row still shows the track as MusicBrainz names it
- **Not chosen:** a song titled "… (live)"
- **Where:** 2026-10-07-every-song, step 1 (Every track becomes a song: its record and its writing (questions 1 and 2)); components: pages
- **Status:** active

### D-042 — The new songs' records are in `data/parts/album-tracks.json`, or `data/parts/tracks.json`, as the plan's interface named it? (the agent's own call D1, accepted in the walkthrough)

- **Chosen:** The new songs' records are in `data/parts/album-tracks.json` — that file already exists: it is the "Blood on the Tracks" era's part
- **Not chosen:** `data/parts/tracks.json`, as the plan's interface named it
- **Where:** 2026-10-07-every-song, step 1 (Every track becomes a song: its record and its writing (questions 1 and 2)); components: pages
- **Status:** active

### D-043 — A traditional song's words card says "A traditional song", or "Words by traditional", or no line? (the agent's own call A8, accepted in the walkthrough)

- **Chosen:** A traditional song's words card says "A traditional song" — "Words by" names a writer; a traditional song has none (25 songs)
- **Not chosen:** "Words by traditional", or no line
- **Where:** 2026-10-07-every-song, step 2 (Players, clips and lyrics links for the new songs); components: pages, search
- **Status:** active

### D-044 — An instrumental keeps its bobdylan.com page as its link (9 songs, such as "Turkey Chase"), as "Nashville Skyline Rag" had from the first build, or no lyrics link, as step 1's case table says? (the agent's own call D4, accepted in the walkthrough)

- **Chosen:** An instrumental keeps its bobdylan.com page as its link (9 songs, such as "Turkey Chase"), as "Nashville Skyline Rag" had from the first build — bobdylan.com keeps a page for each; the button still reads "Lyrics on bobdylan.com", which there means the song's page, not words
- **Not chosen:** no lyrics link, as step 1's case table says
- **Where:** 2026-10-07-every-song, step 2 (Players, clips and lyrics links for the new songs); components: pages, search
- **Status:** active

### D-045 — `data/threads.json` is kept by hand from now on: the 26 new songs were placed into it, and `tools/make-threads.mjs` refuses to overwrite it without `--force`, or regenerating the threads with the tool? (the agent's own call D3, accepted in the walkthrough)

- **Chosen:** `data/threads.json` is kept by hand from now on: the 26 new songs were placed into it, and `tools/make-threads.mjs` refuses to overwrite it without `--force` — the tool keeps ten songs per theme, landmark albums first; with 452 album songs it would pick a different ten and drop the placed songs
- **Not chosen:** regenerating the threads with the tool
- **Where:** 2026-10-07-every-song, step 3 (Connections and threads reach the new songs); components: data-check, pages, threads
- **Status:** active

### D-046 — A song page names its live takes on other albums: "Also on Self Portrait: She Belongs to Me (live)", or the album row linking there, with nothing on the song's page? (the agent's own call A9, accepted in the walkthrough)

- **Chosen:** A song page names its live takes on other albums: "Also on Self Portrait: She Belongs to Me (live)" — a reader on the song page would not know the live take exists; the map gives it for free
- **Not chosen:** the album row linking there, with nothing on the song's page
- **Where:** 2026-10-07-every-song, step 4 (Album pages, search and the map with every track; the data check holds it); components: data-check, pages, search
- **Status:** active

### D-047 — The three fetchers now keep what earlier runs found (`lyrics.json` was rewritten from scratch each run, which would have dropped 8 links found in the first build) and know a few other spellings (Talkin' World War III Blues, Motorpsycho Nightmare, What'll I Do, Quinn the Eskimo), or rerunning them as they were? (the agent's own call A5, listed, not judged, in the walkthrough)

- **Chosen:** The three fetchers now keep what earlier runs found (`lyrics.json` was rewritten from scratch each run, which would have dropped 8 links found in the first build) and know a few other spellings (Talkin' World War III Blues, Motorpsycho Nightmare, What'll I Do, Quinn the Eskimo) — a rerun must only add; without the spellings, 4 of Dylan's songs had no lyrics link and 3 no player
- **Not chosen:** rerunning them as they were
- **Where:** 2026-10-07-every-song, step 2 (Players, clips and lyrics links for the new songs); components: pages, search
- **Status:** listed

### D-048 — Covers others made famous are added as their own version songs (12, such as Manfred Mann's "Mighty Quinn"), as the first build's connections were, and are not added to the "Songs others made famous" thread, or adding them to that thread too? (the agent's own call A7, listed, not judged, in the walkthrough)

- **Chosen:** Covers others made famous are added as their own version songs (12, such as Manfred Mann's "Mighty Quinn"), as the first build's connections were, and are not added to the "Songs others made famous" thread — the writers were asked for new songs in threads; a thread change is the owner's to see
- **Not chosen:** adding them to that thread too
- **Where:** 2026-10-07-every-song, step 3 (Connections and threads reach the new songs); components: data-check, pages, threads
- **Status:** listed

### D-049 — Where Dylan co-wrote the words (with Robert Hunter, Jacques Levy, Tom Petty, Carole Bayer Sager), the song counts as his own: no "Words by" line, the co-writer named in the note, or a "Words by Bob Dylan and …" line? (the agent's own call A4, answered in the reviewer's own words in the walkthrough)

- **Chosen:** Where Dylan co-wrote the words (with Robert Hunter, Jacques Levy, Tom Petty, Carole Bayer Sager), the song counts as his own: no "Words by" line, the co-writer named in the note — the line is for songs whose words he did not write; the writers had handled it two ways and two songs were changed to match
- **Not chosen:** a "Words by Bob Dylan and …" line
- **The reviewer's words:** probably want to give each writer credit
- **Where:** 2026-10-07-every-song, step 1 (Every track becomes a song: its record and its writing (questions 1 and 2)); components: pages
- **Status:** own

### D-050 — No Genius links: another writer's song shows "Words by …" alone, or "Lyrics on Genius ↗" where Genius has the song, as the plan review asked? (the agent's own call D2, answered in the reviewer's own words in the walkthrough)

- **Chosen:** No Genius links: another writer's song shows "Words by …" alone — Genius answers this machine with 403, and the search engines that could find its pages answer with a bot check, so no link could be found or checked; an unchecked address could be a dead link
- **Not chosen:** "Lyrics on Genius ↗" where Genius has the song, as the plan review asked
- **The reviewer's words:** are there other lyrics providers not blocked?
- **Where:** 2026-10-07-every-song, step 2 (Players, clips and lyrics links for the new songs); components: pages, search
- **Status:** own

### D-051 — The 1979 Saturday Night Live moment stays without a clip: the YouTube finder found the same unofficial upload the first build dropped, and now skips it, or adding it back? (the agent's own call A6, flagged in the walkthrough)

- **Chosen:** The 1979 Saturday Night Live moment stays without a clip: the YouTube finder found the same unofficial upload the first build dropped, and now skips it — the first walkthrough's clip count (179, which the review accepted) did not include it
- **Not chosen:** adding it back
- **Where:** 2026-10-07-every-song, step 2 (Players, clips and lyrics links for the new songs); components: pages, search
- **Status:** flagged

### D-052 — q4

- **Chosen:** Add "A thread from this song ›" to the map page
- **Not chosen:** —
- **Where:** 2026-10-07-desktop, step 5 (Threads and the map on a computer: cards along the years, the map below, a panel for the song you click (question 3)); components: pages, threads
- **Status:** active

### D-053 — the + / − buttons show from 768 px, not on phones, or on phones too? (the agent's own call A2, accepted in the walkthrough)

- **Chosen:** the + / − buttons show from 768 px, not on phones — a phone pinches, and the brief keeps phones looking as today
- **Not chosen:** on phones too
- **Where:** 2026-10-07-desktop, step 1 (The map: every dot opens its song, on a computer and a phone); components: shell, timeline, pages, threads, search, phone-check, desktop-check
- **Status:** active

### D-054 — the hover label replaces the dot's SVG <title> tooltip; each dot gets an aria-label instead, or keep the native tooltip too? (the agent's own call A4, accepted in the walkthrough)

- **Chosen:** the hover label replaces the dot's SVG <title> tooltip; each dot gets an aria-label instead — two tooltips at once on a computer
- **Not chosen:** keep the native tooltip too
- **Where:** 2026-10-07-desktop, step 1 (The map: every dot opens its song, on a computer and a phone); components: shell, timeline, pages, threads, search, phone-check, desktop-check
- **Status:** active

### D-055 — the tablet band keeps today's 672→720 px column with 48 px side margins (max-width 816 px), or widening the column itself? (the agent's own call A7, accepted in the walkthrough)

- **Chosen:** the tablet band keeps today's 672→720 px column with 48 px side margins (max-width 816 px) — the plan says "today's layout with wider margins"
- **Not chosen:** widening the column itself
- **Where:** 2026-10-07-desktop, step 2 (The app shell on a wide screen: a header, the era's look across the window, room for two columns (question 1)); components: shell, pages, threads, search
- **Status:** active

### D-056 — the header is sticky (stays at the top as you scroll), 64 px, on the era's paper, or a header that scrolls away? (the agent's own call A5, accepted in the walkthrough)

- **Chosen:** the header is sticky (stays at the top as you scroll), 64 px, on the era's paper — search "always at hand", as the plan puts it
- **Not chosen:** a header that scrolls away
- **Where:** 2026-10-07-desktop, step 2 (The app shell on a wide screen: a header, the era's look across the window, room for two columns (question 1)); components: shell, pages, threads, search
- **Status:** active

### D-057 — the desktop spread is the same markup as the phone panel (new EraSpread.astro used at every width), laid out by CSS grid from 1100 px, or a second, desktop-only set of era sections? (the agent's own call A9, accepted in the walkthrough)

- **Chosen:** the desktop spread is the same markup as the phone panel (new EraSpread.astro used at every width), laid out by CSS grid from 1100 px — one DOM: no duplicated photos or text, and the phone panel is unchanged
- **Not chosen:** a second, desktop-only set of era sections
- **Where:** 2026-10-07-desktop, step 3 (The era timeline on a computer: one era fills the screen (question 2)); components: timeline
- **Status:** active

### D-058 — the crossfade is the header and window colour fading (0.5 s) plus the leaving era's text dimming to 25 %, or a full-screen fade between eras? (the agent's own call A11, accepted in the walkthrough)

- **Chosen:** the crossfade is the header and window colour fading (0.5 s) plus the leaving era's text dimming to 25 % — a fade on top of a scroll-snap reads as a flash
- **Not chosen:** a full-screen fade between eras
- **Where:** 2026-10-07-desktop, step 3 (The era timeline on a computer: one era fills the screen (question 2)); components: timeline
- **Status:** active

### D-059 — timeline names are clipped with an ellipsis on short eras (each stretch at least 64 px); the current era's name is written out in full over its neighbours, or names under every stretch in full? (the agent's own call A12, accepted in the walkthrough)

- **Chosen:** timeline names are clipped with an ellipsis on short eras (each stretch at least 64 px); the current era's name is written out in full over its neighbours — Back to the Roots (2 years) is about 30 px wide at 1440 px
- **Not chosen:** names under every stretch in full
- **Where:** 2026-10-07-desktop, step 3 (The era timeline on a computer: one era fills the screen (question 2)); components: timeline
- **Status:** active

### D-060 — the song page's left column holds the cover at 150 px above the title (changed in `66db1e0`: beside a 150 px cover, "Stardust" broke mid-word at 1440 px), and scrolls on its own if taller than the window, or the cover across the whole left column? (the agent's own call A14, accepted in the walkthrough)

- **Chosen:** the song page's left column holds the cover at 150 px above the title (changed in `66db1e0`: beside a 150 px cover, "Stardust" broke mid-word at 1440 px), and scrolls on its own if taller than the window — a 380 px cover plus two players is taller than a 900 px window, and a sticky column that tall hides its players
- **Not chosen:** the cover across the whole left column
- **Where:** 2026-10-07-desktop, step 4 (Album, song and moment pages in two columns); components: pages
- **Status:** active

### D-061 — the song page's words card is rendered twice (Words.astro): once in the phone position, once in the right column, each hidden at the other width, or moving the players with script, or a grid without the sticky column? (the agent's own call A13, accepted in the walkthrough)

- **Chosen:** the song page's words card is rendered twice (Words.astro): once in the phone position, once in the right column, each hidden at the other width — the phone order puts the words before the players while the desktop puts the players on the left; this keeps the phone exactly as today with no script
- **Not chosen:** moving the players with script, or a grid without the sticky column
- **Where:** 2026-10-07-desktop, step 4 (Album, song and moment pages in two columns); components: pages
- **Status:** active

### D-062 — a moment's "songs it is tied to" are the Dylan songs its story names by title, plus the era's records from that year, or the songs it is tied to? (the agent's own call D1, accepted in the walkthrough)

- **Chosen:** a moment's "songs it is tied to" are the Dylan songs its story names by title, plus the era's records from that year — the data has no moment-to-song links; this shows only ties that are really there, and nothing when none is
- **Not chosen:** the songs it is tied to
- **Where:** 2026-10-07-desktop, step 4 (Album, song and moment pages in two columns); components: pages
- **Status:** active

### D-063 — on /map/<song>/ the panel opens already showing that song; /map/ opens on "Click a dot…", or an empty panel until you click? (the agent's own call A20, accepted in the walkthrough)

- **Chosen:** on /map/<song>/ the panel opens already showing that song; /map/ opens on "Click a dot…" — the page is about that song, and its dot is already lit
- **Not chosen:** an empty panel until you click
- **Where:** 2026-10-07-desktop, step 5 (Threads and the map on a computer: cards along the years, the map below, a panel for the song you click (question 3)); components: pages, threads
- **Status:** active

### D-064 — from 1100 px a thread's map opens on its first song's neighbourhood (as a phone's does), and hovering a card lights its dot and glides the map to it when it is out of view; a song's map pages and small map also open on the neighbourhood; /map/ shows everything, or every map fitted to all its songs, as on a tablet? (the agent's own call A18, accepted in the walkthrough)

- **Chosen:** from 1100 px a thread's map opens on its first song's neighbourhood (as a phone's does), and hovering a card lights its dot and glides the map to it when it is out of view; a song's map pages and small map also open on the neighbourhood; /map/ shows everything — the layout is about 3,000 map units across: fitted to a thread's songs, a 1200 × 520 map was at 0.18 zoom with 5 px labels; labels also keep at least 12.5 px on screen from 1100 px
- **Not chosen:** every map fitted to all its songs, as on a tablet
- **Where:** 2026-10-07-desktop, step 5 (Threads and the map on a computer: cards along the years, the map below, a panel for the song you click (question 3)); components: pages, threads
- **Status:** active

### D-065 — the line of years puts each card's year on the line and writes the gap to the next card on the line between them ("2 yrs →"); the cards are evenly spaced, or spacing cards in proportion to the years between them? (the agent's own call A17, accepted in the walkthrough)

- **Chosen:** the line of years puts each card's year on the line and writes the gap to the next card on the line between them ("2 yrs →"); the cards are evenly spaced — four cards on screen at once need equal widths; a 40-year gap would push the next card off the row
- **Not chosen:** spacing cards in proportion to the years between them
- **Where:** 2026-10-07-desktop, step 5 (Threads and the map on a computer: cards along the years, the map below, a panel for the song you click (question 3)); components: pages, threads
- **Status:** active

### D-066 — The tablet band (768–1099 px) also hides the map's own Cards / Map toggle beside a thread's cards, or the tablet exactly as today? (the agent's own call D2, accepted in the walkthrough)

- **Chosen:** The tablet band (768–1099 px) also hides the map's own Cards / Map toggle beside a thread's cards — the plan's own leftover-toggle bug showed there too: the thread's toggle was hidden, the map's was not
- **Not chosen:** the tablet exactly as today
- **Where:** 2026-10-07-desktop, step 5 (Threads and the map on a computer: cards along the years, the map below, a panel for the song you click (question 3)); components: pages, threads
- **Status:** active

### D-067 — the desktop check also fails when the phone's bottom bar or no header shows, when › beside an era or › beside a thread's cards moves nothing, and it presses ← to come back, or only the plan's list? (the agent's own call A23, accepted in the walkthrough)

- **Chosen:** the desktop check also fails when the phone's bottom bar or no header shows, when › beside an era or › beside a thread's cards moves nothing, and it presses ← to come back — the same "a control showing that does nothing" rule, applied to the controls this plan adds
- **Not chosen:** only the plan's list
- **Where:** 2026-10-07-desktop, step 6 (Search and About on a computer, and a desktop check); components: data-check, pages, search, phone-check, desktop-check
- **Status:** active

### D-068 — each dot's invisible hit ring is 28 map units across (r 14), or a ring 14 px across? (the agent's own call A1, listed, not judged, in the walkthrough)

- **Chosen:** each dot's invisible hit ring is 28 map units across (r 14) — read "a ring 14 px across around it" as 7 px each side of the 14 px dot; that is what gives the plan's 44 px at a phone's zoom (about 1.6)
- **Not chosen:** a ring 14 px across
- **Where:** 2026-10-07-desktop, step 1 (The map: every dot opens its song, on a computer and a phone); components: shell, timeline, pages, threads, search, phone-check, desktop-check
- **Status:** listed

### D-069 — the phone check tries a touch tap and a pointer press-release on a dot, both must open the song, or a tap only? (the agent's own call A3, listed, not judged, in the walkthrough)

- **Chosen:** the phone check tries a touch tap and a pointer press-release on a dot, both must open the song — headless Chrome routes a synthetic tap past pointer capture, so a tap alone passed against the old bug; the press fails on it
- **Not chosen:** a tap only
- **Where:** 2026-10-07-desktop, step 1 (The map: every dot opens its song, on a computer and a phone); components: shell, timeline, pages, threads, search, phone-check, desktop-check
- **Status:** listed

### D-070 — the header search is a plain GET form to /search/?q=… (works without script); "/" focuses it only when the header shows (from 1100 px), or a scripted field? (the agent's own call A6, listed, not judged, in the walkthrough)

- **Chosen:** the header search is a plain GET form to /search/?q=… (works without script); "/" focuses it only when the header shows (from 1100 px) — the Enter case needs nothing more, and Astro's router already handles GET forms
- **Not chosen:** a scripted field
- **Where:** 2026-10-07-desktop, step 2 (The app shell on a wide screen: a header, the era's look across the window, room for two columns (question 1)); components: shell, pages, threads, search
- **Status:** listed

### D-071 — map pages light "Map" in the header but still "Threads" in the phone's bottom bar (it has no Map tab), or adding a Map tab to the bottom bar? (the agent's own call A8, listed, not judged, in the walkthrough)

- **Chosen:** map pages light "Map" in the header but still "Threads" in the phone's bottom bar (it has no Map tab) — phones stay as they are
- **Not chosen:** adding a Map tab to the bottom bar
- **Where:** 2026-10-07-desktop, step 2 (The app shell on a wide screen: a header, the era's look across the window, room for two columns (question 1)); components: shell, pages, threads, search
- **Status:** listed

### D-072 — scrolling keeps replaceState for the address (/era/<id>/), as today; ‹ ›, keys and the timeline do the same, or pushState per era, so Back steps through eras? (the agent's own call A10, listed, not judged, in the walkthrough)

- **Chosen:** scrolling keeps replaceState for the address (/era/<id>/), as today; ‹ ›, keys and the timeline do the same — a scroll would otherwise fill the history with eleven entries; a shared link and a reload still open that era
- **Not chosen:** pushState per era, so Back steps through eras
- **Where:** 2026-10-07-desktop, step 3 (The era timeline on a computer: one era fills the screen (question 2)); components: timeline
- **Status:** listed

### D-073 — the small map on a song page is the right column's full width × 300 px, under the connections, or 360 × 300? (the agent's own call A15, listed, not judged, in the walkthrough)

- **Chosen:** the small map on a song page is the right column's full width × 300 px, under the connections — a 360 px box alone in a 780 px column left a hole
- **Not chosen:** 360 × 300
- **Where:** 2026-10-07-desktop, step 4 (Album, song and moment pages in two columns); components: pages
- **Status:** listed

### D-074 — The map panel's rows are one built file, `/map-panel.json`, fetched on the first click, and a song with no preview shows its note, or the panel's data written into every map page? (the agent's own call A25, listed, not judged, in the walkthrough)

- **Chosen:** The map panel's rows are one built file, `/map-panel.json`, fetched on the first click, and a song with no preview shows its note — 230 songs' rows in each of the 230 map pages would make each page much heavier; one file is cached after the first click
- **Not chosen:** the panel's data written into every map page
- **Where:** 2026-10-07-desktop, step 5 (Threads and the map on a computer: cards along the years, the map below, a panel for the song you click (question 3)); components: pages, threads
- **Status:** listed

### D-075 — the era filter is the legend turned into buttons by script from 1100 px (role=button, 44 px tall, one era at a time, click again to clear), or real buttons at every width, or several eras at once? (the agent's own call A19, listed, not judged, in the walkthrough)

- **Chosen:** the era filter is the legend turned into buttons by script from 1100 px (role=button, 44 px tall, one era at a time, click again to clear) — the phone legend stays as it is (and is not a filter there); "click an era to dim the others" names one
- **Not chosen:** real buttons at every width, or several eras at once
- **Where:** 2026-10-07-desktop, step 5 (Threads and the map on a computer: cards along the years, the map below, a panel for the song you click (question 3)); components: pages, threads
- **Status:** listed

### D-076 — search's three columns are placed by CSS on group sections (Eras and Moments stacked in the first column); on a phone the groups keep today's order, best match first, or re-rendering the results in a fixed column order? (the agent's own call A21, listed, not judged, in the walkthrough)

- **Chosen:** search's three columns are placed by CSS on group sections (Eras and Moments stacked in the first column); on a phone the groups keep today's order, best match first — one renderer for both widths, phone output unchanged
- **Not chosen:** re-rendering the results in a fixed column order
- **Where:** 2026-10-07-desktop, step 6 (Search and About on a computer, and a desktop check); components: data-check, pages, search, phone-check, desktop-check
- **Status:** listed

### D-077 — "content narrower than 60 %" is measured as the horizontal span of everything showing inside <main>; the 404 page is exempt; the era-background test reads the colour behind the window's right edge, 85 % down (clear of the ‹ › buttons), against the body era's --paper, or measuring .page's width, or sampling the left edge? (the agent's own call A22, listed, not judged, in the walkthrough)

- **Chosen:** "content narrower than 60 %" is measured as the horizontal span of everything showing inside <main>; the 404 page is exempt; the era-background test reads the colour behind the window's right edge, 85 % down (clear of the ‹ › buttons), against the body era's --paper — .page is 1200 px even when its content sits in a 720 px column; the home page's left half is a photograph
- **Not chosen:** measuring .page's width, or sampling the left edge
- **Where:** 2026-10-07-desktop, step 6 (Search and About on a computer, and a desktop check); components: data-check, pages, search, phone-check, desktop-check
- **Status:** listed

### D-078 — `npm test` runs the data check, the build, the phone check and the desktop check; `npm run check:desktop` runs the last alone; `--shots <dir>` also writes the 1440 × 900 screenshots there, or a separate script per size? (the agent's own call A24, listed, not judged, in the walkthrough)

- **Chosen:** `npm test` runs the data check, the build, the phone check and the desktop check; `npm run check:desktop` runs the last alone; `--shots <dir>` also writes the 1440 × 900 screenshots there — the plan's npm test order; the shots flag gives the review folder its pictures
- **Not chosen:** a separate script per size
- **Where:** 2026-10-07-desktop, step 6 (Search and About on a computer, and a desktop check); components: data-check, pages, search, phone-check, desktop-check
- **Status:** listed

### D-079 — the threads list shows its covers from all of a thread's songs' albums, first four distinct; two threads (Borrowed tunes, Songs others made famous) have none and show no covers, or the covers of its first songs? (the agent's own call D3, answered in the reviewer's own words in the walkthrough)

- **Chosen:** the threads list shows its covers from all of a thread's songs' albums, first four distinct; two threads (Borrowed tunes, Songs others made famous) have none and show no covers — their first songs are traditional or other artists' recordings with no album cover
- **Not chosen:** the covers of its first songs
- **The reviewer's words:** i would like to give some visuals for these as well
- **Where:** 2026-10-07-desktop, step 5 (Threads and the map on a computer: cards along the years, the map below, a panel for the song you click (question 3)); components: pages, threads
- **Status:** own

### D-080 — the album page's left column is not sticky, or sticky like the song page's? (the agent's own call A16, flagged in the walkthrough)

- **Chosen:** the album page's left column is not sticky — a 480 px cover plus "why it matters" is taller than the window
- **Not chosen:** sticky like the song page's
- **Where:** 2026-10-07-desktop, step 4 (Album, song and moment pages in two columns); components: pages
- **Status:** flagged

### D-081 — the threads list shows its covers from all of a thread's songs' albums, first four distinct; two threads (Borrowed tunes, Songs others made famous) have none and show no covers [deviation] (changed after review, "i would like to give some visuals for these as well": a step not on his albums, an old tune or another artist's version, now shows the cover of the Dylan song it is connected to, so every thread has four covers), or the covers of its first songs? (the agent's own call D3, accepted in the walkthrough)

- **Chosen:** the threads list shows its covers from all of a thread's songs' albums, first four distinct; two threads (Borrowed tunes, Songs others made famous) have none and show no covers [deviation] (changed after review, "i would like to give some visuals for these as well": a step not on his albums, an old tune or another artist's version, now shows the cover of the Dylan song it is connected to, so every thread has four covers) — their first songs are traditional or other artists' recordings with no album cover
- **Not chosen:** the covers of its first songs
- **Where:** 2026-10-07-desktop, step 5 (Threads and the map on a computer: cards along the years, the map below, a panel for the song you click (question 3)); components: pages, threads
- **Status:** active

### D-082 — the album page's left column is not sticky, or sticky like the song page's? (the agent's own call A16, listed, not judged, in the walkthrough)

- **Chosen:** the album page's left column is not sticky — a 480 px cover plus "why it matters" is taller than the window
- **Not chosen:** sticky like the song page's
- **Where:** 2026-10-07-desktop, step 4 (Album, song and moment pages in two columns); components: pages
- **Status:** listed

### D-083 — q1

- **Chosen:** A context rail from 1440 px, the content kept at 1200 px
- **Not chosen:** —
- **Where:** 2026-10-07-fuller, step 5 (The sides of a wide window (question 1)); components: timeline
- **Status:** active

### D-084 — q2

- **Chosen:** Wikipedia and MusicBrainz, where MusicBrainz lists them
- **Not chosen:** —
- **Where:** 2026-10-07-fuller, step 6 (Links out, and checks that hold it); components: desktop-check
- **Status:** active

### D-085 — q3

- **Chosen:** An era about 250 words, a moment about 120, an album about 150
- **Not chosen:** —
- **Where:** 2026-10-07-fuller, step 1 (Longer writing for eras, moments and albums (question 3)); components: data-check, pages
- **Status:** active

### D-086 — q5

- **Chosen:** Yes, as built: every era's bands on the home page too
- **Not chosen:** —
- **Where:** 2026-10-07-fuller, step 3 (Era and moment pages built around their story); components: timeline, pages, threads
- **Status:** active

### D-087 — q4

- **Chosen:** A line: Find Fallen Angels on Spotify ↗
- **Not chosen:** —
- **Where:** 2026-10-07-fuller, step 4 (Album and song pages: the album's player, its essay, a track list that opens in place); components: pages, threads
- **Status:** active

### D-088 — an era's gallery is up to five photographs of its own; a photo marked as a moment's belongs to that moment, and tops up a gallery with fewer than three (Basement and Blood on the Tracks: 2 of their own and 1 from a moment), or a moment's photo counted in every gallery, or never? (the agent's own call A14, accepted in the walkthrough)

- **Chosen:** an era's gallery is up to five photographs of its own; a photo marked as a moment's belongs to that moment, and tops up a gallery with fewer than three (Basement and Blood on the Tracks: 2 of their own and 1 from a moment) — the moment's photo leads its own page; a gallery of two looked thin
- **Not chosen:** a moment's photo counted in every gallery, or never
- **Where:** 2026-10-07-fuller, step 2 (More photographs for eras and moments); components: timeline, search
- **Status:** active

### D-089 — a moment's photograph is often its place or its people, and the caption says so: Big Pink for the Basement sessions, the Warfield for the gospel shows, Roy Orbison for the Wilburys, or a photo only of the event itself? (the agent's own call A16, accepted in the walkthrough)

- **Chosen:** a moment's photograph is often its place or its people, and the caption says so: Big Pink for the Basement sessions, the Warfield for the gospel shows, Roy Orbison for the Wilburys — Commons has few free photos of the events; a place, captioned, is honest and still shows it
- **Not chosen:** a photo only of the event itself
- **Where:** 2026-10-07-fuller, step 2 (More photographs for eras and moments); components: timeline, search
- **Status:** active

### D-090 — (question 5) every era on the timeline gets its bands, under its own spread, inside a new wrapper (`article.eb`) that a phone swipes and a computer snaps to; the home page's timeline gets them too, or bands only for the era in the address, after the whole timeline? (the agent's own call A1, accepted in the walkthrough)

- **Chosen:** (question 5) every era on the timeline gets its bands, under its own spread, inside a new wrapper (`article.eb`) that a phone swipes and a computer snaps to; the home page's timeline gets them too — /era/&lt;id&gt;/ is the whole timeline, and › and ← → move between eras, so each era needs its bands under its own spread
- **Not chosen:** bands only for the era in the address, after the whole timeline
- **Where:** 2026-10-07-fuller, step 3 (Era and moment pages built around their story); components: timeline, pages, threads
- **Status:** active

### D-091 — the "records and moments" band shows only from 1100 px; phones and tablets get the story and gallery, songs to start with, threads and Read on, stacked, or the same band on a phone? (the agent's own call A3, accepted in the walkthrough)

- **Chosen:** the "records and moments" band shows only from 1100 px; phones and tablets get the story and gallery, songs to start with, threads and Read on, stacked — the phone's era panel just above already lists the same albums and moments
- **Not chosen:** the same band on a phone
- **Where:** 2026-10-07-fuller, step 3 (Era and moment pages built around their story); components: timeline, pages, threads
- **Status:** active

### D-092 — a moment page shows its clip first, its own photo under it when it has both; with neither, the era's lead photo, headed "The era's photograph · &lt;era&gt;"; "Around it" is the two moments either side; "His songs from &lt;year&gt;" up to 8, the most connected first, or only the clip or only one photo? (the agent's own call A4, accepted in the walkthrough)

- **Chosen:** a moment page shows its clip first, its own photo under it when it has both; with neither, the era's lead photo, headed "The era's photograph · &lt;era&gt;"; "Around it" is the two moments either side; "His songs from &lt;year&gt;" up to 8, the most connected first — a full page at every width, and the era's photo honestly labelled
- **Not chosen:** only the clip or only one photo
- **Where:** 2026-10-07-fuller, step 3 (Era and moment pages built around their story); components: timeline, pages, threads
- **Status:** active

### D-093 — the gallery is a grid (the first photo wide, then two a row) with one line naming the photographers; each photo's credit and licence show when it opens large, or a sideways row, or a credit under every thumbnail? (the agent's own call A19, accepted in the walkthrough)

- **Chosen:** the gallery is a grid (the first photo wide, then two a row) with one line naming the photographers; each photo's credit and licence show when it opens large — a sideways scroller inside the phone's sideways swipe fights it; credits under every thumbnail crowd it
- **Not chosen:** a sideways row, or a credit under every thumbnail
- **Where:** 2026-10-07-fuller, step 3 (Era and moment pages built around their story); components: timeline, pages, threads
- **Status:** active

### D-094 — an era's "Threads through it" shows at most six threads, those with the most of the era's songs first, or every thread that passes through it? (the agent's own call A26, accepted in the walkthrough)

- **Chosen:** an era's "Threads through it" shows at most six threads, those with the most of the era's songs first — the twelve threads pass through most eras; six reads as a band
- **Not chosen:** every thread that passes through it
- **Where:** 2026-10-07-fuller, step 3 (Era and moment pages built around their story); components: timeline, pages, threads
- **Status:** active

### D-095 — (question 4) Fallen Angels has no album player: MusicBrainz lists no Spotify album whose title matches it, and the desktop check only asks for a player where an album has a Spotify id, or all 39 with a player? (the agent's own call A24, accepted in the walkthrough)

- **Chosen:** (question 4) Fallen Angels has no album player: MusicBrainz lists no Spotify album whose title matches it, and the desktop check only asks for a player where an album has a Spotify id — a guessed album id could play the wrong record; its songs still have their own players
- **Not chosen:** all 39 with a player
- **Where:** 2026-10-07-fuller, step 4 (Album and song pages: the album's player, its essay, a track list that opens in place); components: pages, threads
- **Status:** active

### D-096 — a song page's "In threads" also lists the thread made from the song ("From &lt;song&gt;"), so a song in no curated thread still has one, or the curated threads only? (the agent's own call A25, accepted in the walkthrough)

- **Chosen:** a song page's "In threads" also lists the thread made from the song ("From &lt;song&gt;"), so a song in no curated thread still has one — every connected song has its own thread (D-052's link), and the band would otherwise be empty for most songs
- **Not chosen:** the curated threads only
- **Where:** 2026-10-07-fuller, step 4 (Album and song pages: the album's player, its essay, a track list that opens in place); components: pages, threads
- **Status:** active

### D-097 — "Where its songs lead": at most six connections to songs off the album, covers, borrowed tunes, answers and rewrites before shared themes, or all of them? (the agent's own call A7, accepted in the walkthrough)

- **Chosen:** "Where its songs lead": at most six connections to songs off the album, covers, borrowed tunes, answers and rewrites before shared themes — Blonde on Blonde alone has dozens; six reads as a band, not a wall
- **Not chosen:** all of them
- **Where:** 2026-10-07-fuller, step 4 (Album and song pages: the album's player, its essay, a track list that opens in place); components: pages, threads
- **Status:** active

### D-098 — album page: the cover and the Spotify album player on the left; Why it matters with the essay, the track list and "Where its songs lead" on the right; previous and next album under both, or the essay in the left column? (the agent's own call A5, accepted in the walkthrough)

- **Chosen:** album page: the cover and the Spotify album player on the left; Why it matters with the essay, the track list and "Where its songs lead" on the right; previous and next album under both — the left column is already a 480 px cover; the essay reads better at the right column's measure
- **Not chosen:** the essay in the left column
- **Where:** 2026-10-07-fuller, step 4 (Album and song pages: the album's player, its essay, a track list that opens in place); components: pages, threads
- **Status:** active

### D-099 — removed the desktop-only "Also in this era" row; the previous and next album of the era, with covers, replace it at every width, or keeping both? (the agent's own call D1, accepted in the walkthrough)

- **Chosen:** removed the desktop-only "Also in this era" row; the previous and next album of the era, with covers, replace it at every width — two bands of the same era's covers is the clutter the brief asked to avoid
- **Not chosen:** keeping both
- **Where:** 2026-10-07-fuller, step 4 (Album and song pages: the album's player, its essay, a track list that opens in place); components: pages, threads
- **Status:** active

### D-100 — from 1440 px the content starts under the header's left edge, up to 1200 px, with the rail (240 px and a 48 px gap) in the right margin: the content is 984 px at 1440, the full 1200 from about 1900, or the content centred with the rail outside it? (the agent's own call A9, accepted in the walkthrough)

- **Chosen:** from 1440 px the content starts under the header's left edge, up to 1200 px, with the rail (240 px and a 48 px gap) in the right margin: the content is 984 px at 1440, the full 1200 from about 1900 — 1200 px plus the rail cannot be centred below about 1830 px; lining up with the header keeps the page calm
- **Not chosen:** the content centred with the rail outside it
- **Where:** 2026-10-07-fuller, step 5 (The sides of a wide window (question 1)); components: timeline
- **Status:** active

### D-101 — the rail is on album, song and moment pages only, or a rail on every page? (the agent's own call A8, accepted in the walkthrough)

- **Chosen:** the rail is on album, song and moment pages only — the era page is full-bleed and already shows the eras; threads, the map, search and About have no single era
- **Not chosen:** a rail on every page
- **Where:** 2026-10-07-fuller, step 5 (The sides of a wide window (question 1)); components: timeline
- **Status:** active

### D-102 — "Read on: Wikipedia ↗ · MusicBrainz ↗" at the end of album and song pages and of each era's bands, in a new tab, and nothing when there are no links, or near the title? (the agent's own call A11, accepted in the walkthrough)

- **Chosen:** "Read on: Wikipedia ↗ · MusicBrainz ↗" at the end of album and song pages and of each era's bands, in a new tab, and nothing when there are no links — it is where reading carries on, and it keeps the top of the page clear
- **Not chosen:** near the title
- **Where:** 2026-10-07-fuller, step 6 (Links out, and checks that hold it); components: desktop-check
- **Status:** active

### D-103 — links out for the 452 album songs only; the 86 songs on no album of his (old tunes, other artists' versions) have none, or every song? (the agent's own call A23, accepted in the walkthrough)

- **Chosen:** links out for the 452 album songs only; the 86 songs on no album of his (old tunes, other artists' versions) have none — those are other artists' recordings, with no MusicBrainz release in the site's data to start from
- **Not chosen:** every song
- **Where:** 2026-10-07-fuller, step 6 (Links out, and checks that hold it); components: desktop-check
- **Status:** active

### D-104 — the data check compares quoted titles loosely (curly and straight apostrophes, hyphens, a bracketed subtitle) and accepts seven real songs on none of the site's albums ("Dignity", "Blind Willie McTell", "Series of Dreams", "Things Have Changed", "I Shall Be Released", "This Wheel's on Fire", "Handle with Care"), or quoting only titles on the site? (the agent's own call A18, listed, not judged, in the walkthrough)

- **Chosen:** the data check compares quoted titles loosely (curly and straight apostrophes, hyphens, a bracketed subtitle) and accepts seven real songs on none of the site's albums ("Dignity", "Blind Willie McTell", "Series of Dreams", "Things Have Changed", "I Shall Be Released", "This Wheel's on Fire", "Handle with Care") — the stories name these songs; they are titles, not lyrics
- **Not chosen:** quoting only titles on the site
- **Where:** 2026-10-07-fuller, step 1 (Longer writing for eras, moments and albums (question 3)); components: data-check, pages
- **Status:** listed

### D-105 — the data check holds each era section to 60–110 words, a moment to 80–150 and an album essay to 100–180, or an exact length, or no bound? (the agent's own call A21, listed, not judged, in the walkthrough)

- **Chosen:** the data check holds each era section to 60–110 words, a moment to 80–150 and an album essay to 100–180 — the plan says "about" (D-085); the band catches a text that is cut off or runs on, not one a few words over
- **Not chosen:** an exact length, or no bound
- **Where:** 2026-10-07-fuller, step 1 (Longer writing for eras, moments and albums (question 3)); components: data-check, pages
- **Status:** listed

### D-106 — six of the first 26 photographs are now marked as a moment's, since each already shows it (the March on Washington, Isle of Wight 1969, Chicago 1974, Ginsberg on the Rolling Thunder Revue, Rotterdam 1978, the American Reunion of 1993), or leaving them as era photos only? (the agent's own call A15, listed, not judged, in the walkthrough)

- **Chosen:** six of the first 26 photographs are now marked as a moment's, since each already shows it (the March on Washington, Isle of Wight 1969, Chicago 1974, Ginsberg on the Rolling Thunder Revue, Rotterdam 1978, the American Reunion of 1993) — those moments get their photo without a new search
- **Not chosen:** leaving them as era photos only
- **Where:** 2026-10-07-fuller, step 2 (More photographs for eras and moments); components: timeline, search
- **Status:** listed

### D-107 — on a phone the swiped row is as tall as the era in view (a ResizeObserver follows it), or every era as tall as the tallest era's bands? (the agent's own call A2, listed, not judged, in the walkthrough)

- **Chosen:** on a phone the swiped row is as tall as the era in view (a ResizeObserver follows it) — a short era would end in a screen or more of blank space
- **Not chosen:** every era as tall as the tallest era's bands
- **Where:** 2026-10-07-fuller, step 3 (Era and moment pages built around their story); components: timeline, pages, threads
- **Status:** listed

### D-108 — a track row's title stays a link to its song; a separate ▾ button opens the row in place (preview, themes, its Spotify player, "Its page ›"), and the player loads the first time the row opens, or the whole row as the toggle? (the agent's own call A6, listed, not judged, in the walkthrough)

- **Chosen:** a track row's title stays a link to its song; a separate ▾ button opens the row in place (preview, themes, its Spotify player, "Its page ›"), and the player loads the first time the row opens — links keep working as before, on phones too; 30 players loading with the album would be heavy
- **Not chosen:** the whole row as the toggle
- **Where:** 2026-10-07-fuller, step 4 (Album and song pages: the album's player, its essay, a track list that opens in place); components: pages, threads
- **Status:** listed

### D-109 — a song page's "The same year" lists up to 8 of his own songs from his records that year, the most connected first, leaving out covers and other artists' songs, or every song from that year on the site? (the agent's own call A20, listed, not judged, in the walkthrough)

- **Chosen:** a song page's "The same year" lists up to 8 of his own songs from his records that year, the most connected first, leaving out covers and other artists' songs — it is about what he was writing then
- **Not chosen:** every song from that year on the site
- **Where:** 2026-10-07-fuller, step 4 (Album and song pages: the album's player, its essay, a track list that opens in place); components: pages, threads
- **Status:** listed

### D-110 — the rail: the era badge and years, the eras as a list of bars sized by their years with this one lit and a pin at the page's year, and quick links (the era, the album, a thread, the map), or a small horizontal ribbon? (the agent's own call A10, listed, not judged, in the walkthrough)

- **Chosen:** the rail: the era badge and years, the eras as a list of bars sized by their years with this one lit and a pin at the page's year, and quick links (the era, the album, a thread, the map) — a 240 px column reads better as a list with names
- **Not chosen:** a small horizontal ribbon
- **Where:** 2026-10-07-fuller, step 5 (The sides of a wide window (question 1)); components: timeline
- **Status:** listed

### D-111 — each new desktop-check rule reads the built pages (the essay block, the album player's address, the moment's own photo or a clip) and only fails once its data exists, or checking only the data? (the agent's own call A12, listed, not judged, in the walkthrough)

- **Chosen:** each new desktop-check rule reads the built pages (the essay block, the album player's address, the moment's own photo or a clip) and only fails once its data exists — it checks that the pages actually show the parts
- **Not chosen:** checking only the data
- **Where:** 2026-10-07-fuller, step 6 (Links out, and checks that hold it); components: desktop-check
- **Status:** listed

### D-112 — a song's "MusicBrainz ↗" opens the work (the song as written), or the recording on the album? (the agent's own call A22, listed, not judged, in the walkthrough)

- **Chosen:** a song's "MusicBrainz ↗" opens the work (the song as written) — the work is where MusicBrainz keeps the Wikipedia link and every recording of the song
- **Not chosen:** the recording on the album
- **Where:** 2026-10-07-fuller, step 6 (Links out, and checks that hold it); components: desktop-check
- **Status:** listed

### D-113 — eras link only to Wikipedia, an article picked by hand for what the era is most about (Hibbing, Greenwich Village, the Electric Dylan controversy, The Basement Tapes, the Rolling Thunder Revue, the Traveling Wilburys, the 2016 Nobel Prize in Literature), each kept only when it answers; Gospel, Back to the Roots, the Standards and Rough and Rowdy have none, or no era links? (the agent's own call A13, answered in the reviewer's own words in the walkthrough)

- **Chosen:** eras link only to Wikipedia, an article picked by hand for what the era is most about (Hibbing, Greenwich Village, the Electric Dylan controversy, The Basement Tapes, the Rolling Thunder Revue, the Traveling Wilburys, the 2016 Nobel Prize in Literature), each kept only when it answers; Gospel, Back to the Roots, the Standards and Rough and Rowdy have none — an era is not a MusicBrainz entity, so the finder found none; the plan says each era links out
- **Not chosen:** no era links
- **The reviewer's words:** maybe every era should have something it links to, for consistency
- **Where:** 2026-10-07-fuller, step 6 (Links out, and checks that hold it); components: desktop-check
- **Status:** own

### D-114 — the desktop check names eight gaps the photo search could not fill and does not fail on them: Back to the Roots (2 photos) and seven moments with no photo or clip (the Shelton review, marrying Sara Lownds, the motorcycle accident, Pat Garrett, the 1980 retrospective shows, Chronicles, The Philosophy of Modern Song); any other gap fails, or the check failing until they are filled? (the agent's own call A17, answered in the reviewer's own words in the walkthrough)

- **Chosen:** the desktop check names eight gaps the photo search could not fill and does not fail on them: Back to the Roots (2 photos) and seven moments with no photo or clip (the Shelton review, marrying Sara Lownds, the motorcycle accident, Pat Garrett, the 1980 retrospective shows, Chronicles, The Philosophy of Modern Song); any other gap fails — Commons has no free photograph that fits; these pages show the era's photograph, labelled
- **Not chosen:** the check failing until they are filled
- **The reviewer's words:** is there something else we can put here? be creative but also consistent
- **Where:** 2026-10-07-fuller, step 6 (Links out, and checks that hold it); components: desktop-check
- **Status:** own
