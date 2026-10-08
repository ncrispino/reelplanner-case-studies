# Code check brief: 2026-10-07-every-song

You are checking that an implementation follows its plan. You did not write it. Answer three questions,
every answer tied to a file (and a line where you can), and write them to `.reelplanning/plans/2026-10-07-every-song/code-check/findings.md`.

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
# Code check: 2026-10-07-every-song

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

## Commits (40447f2..HEAD, limited to data tools src/lib src/pages/album src/pages/song src/components/Words.astro)

```
d993106 walkthroughs for every-song and desktop; desktop question 4 (step 5)
03bd77d every-song step 2: official clips for 364 of 452 album songs (snl-1979 kept dropped); clip check and npm test runs
1b32857 desktop plan, all six steps: map clicks reach their dots; header and era look across the window from 1100 px; one era per screen with scroll snapping; two-column song, album and moment pages; threads along the years with the map below; map page panel and era filter; three-column search; desktop check (also carries every-song's album rows and song takes / words-by lines on the reworked pages)
cadf678 every-song steps 1-3: every album track mapped to a song (271 new, written and summarised), Spotify for all 452, bobdylan.com links, 30 new connections, threads extended
```

## The plan, as implemented

Read `.reelplanning/plans/2026-10-07-every-song/plan.md` in full. Its title is "Every track a page: the 277 album tracks with no page of their own", with 4 steps.

## The decisions that apply

- **D-001** (step 1) How should the site be built? → **which can produce a sophisticated website that is graceful and visually appealing, while fully featured? can you detail more visually the deferences?**
- **D-003** (step 4) How should album covers look? → **The real covers**
- **D-005** (step 6) How should someone listen? → **An embedded Spotify player**
- **D-006** (step 3) Where should the era photographs come from? → **Wikimedia Commons, free-licensed**
  - note: but note that we can ue other images and shiould still make it completely visually full , even if we cant find licenses... like no photographs and just text will be bad
- **D-007** (step 4) What should a song page show beside its lyrics link? → **The link and a preview in our words**
- **D-034** (step 1) Which tracks get a page? → **All 277**
- **D-035** (step 1) How much is written for a song by another writer? → **The same page as his own songs**

## Earlier calls this diff changes

Calls an earlier walkthrough accepted, whose lines (written by that plan's commits) this diff changes. They are history, not rules: give each a line under Decisions, ✓ if it still holds, ✗ if the diff undoes it and no step, decision or autonomy row says so.

- **D-009** the dylan-site plan's call A15: “From 768 px the tab bar sits at the top of the screen”, instead of “the bottom bar on every width” (1 line(s) in `src/styles/site.css`)
- **D-010** the dylan-site plan's call A18: “Each photo names its era and kind (`dylan` or `place`) in `photos.json`, and the panel picks a Dylan photo first; `eras.json`'s `photos` lists stay empty”, instead of “each era listing its photo ids, as the plan's interface shows” (1 line(s) in `src/components/PhotoPanel.astro`)
- **D-011** the dylan-site plan's call A11: “"Lyrics on bobdylan.com ↗" opens in a new tab”, instead of “opening in the same tab” (16 line(s) in `src/pages/song/[id].astro`)
- **D-012** the dylan-site plan's call A16: “Song pages step to the album's previous and next song”, instead of “no stepping between songs” (16 line(s) in `src/pages/song/[id].astro`)
- **D-013** the dylan-site plan's call A7: “The threads are built by `tools/make-threads.mjs`: one per theme plus "Borrowed tunes" and "Songs others made famous", each card's sentence the song's note or the connection's why”, instead of “twelve threads each written card by card” (22 line(s) in `data/threads.json`)
- **D-014** the dylan-site plan's call A14: “Search forgives a typo or two (one edit at 4–5 letters, two from 6; a swapped pair counts as one) and takes `theme:<name>`, which the theme chips on song pages use”, instead of “plain matching” (2 line(s) in `src/islands/search.ts`, 16 line(s) in `src/pages/song/[id].astro`)
- **D-029** the dylan-site plan's call A17: “The album page lists the dataset's songs, headed "Selected songs · 7 of 14" when they are fewer than the album's tracks [visible] (changed after review: the album page shows the full track list from MusicBrainz, numbered; the songs with their own page are marked "its story ›", and a line says how many)”, instead of “the full track list, or an unlabelled selection” (3 line(s) in `src/pages/album/[id].astro`)
- **D-030** the dylan-site plan's call A8: “Spotify track ids come from MusicBrainz's Spotify album links and Spotify's own album pages, kept only when Spotify's title for the track matches the song (177 of 181 album songs) [visible] (changed after review: 181 of 181. Spotify spells two titles differently, "Fourth Time Around" and "Love Minus Zero"; the match now drops subtitles and reads 4th as fourth, still by title)”, instead of “ids typed in by hand” (1 line(s) in `tools/fetch-spotify.mjs`)

## The autonomy log (the implementer's own calls)

| id | step | chose | instead of | why | check |
|---|---|---|---|---|---|
| A1 | 1 | Every album track is mapped to its song once, by `tools/add-tracks.mjs`, into `data/sources/track-map.json` (`{ album: [song id per track] }`); album pages and the data check read that map [hard-to-undo] | matching track titles to songs when each page is built, as before | a take or a live take maps to a song with a different title; one map, checked, is simpler than the same fuzzy match in three places | `data/sources/track-map.json`, `src/pages/album/[id].astro` |
| A2 | 1 | Takes on one album that have no song between them become one song under the shared title: "Alberta #1" and "Alberta #2" are the song "Alberta"; "Forever Young (continued)" on Planet Waves maps to "Forever Young" [visible] | a song per take | the plan folds takes into the song they are takes of; with no existing song, the title without the take number is that song | `runs/add-tracks.txt`, `/song/alberta/` |
| A3 | 1 | A live take whose song had no page anywhere becomes a song under its plain title, with the live take as its track: "The Mighty Quinn (Quinn the Eskimo)" and "Minstrel Boy", both on Self Portrait [visible] | a song titled "… (live)" | the page is about the song; the album row still shows the track as MusicBrainz names it | `runs/add-tracks.txt`, `/song/minstrel-boy/` |
| A4 | 1 | Where Dylan co-wrote the words (with Robert Hunter, Jacques Levy, Tom Petty, Carole Bayer Sager), the song counts as his own: no "Words by" line, the co-writer named in the note [visible, close] | a "Words by Bob Dylan and …" line | the line is for songs whose words he did not write; the writers had handled it two ways and two songs were changed to match | `data/parts/album-tracks.json` (`got-my-mind-made-up`, `under-your-spell`) |
| A5 | 2 | The three fetchers now keep what earlier runs found (`lyrics.json` was rewritten from scratch each run, which would have dropped 8 links found in the first build) and know a few other spellings (Talkin' World War III Blues, Motorpsycho Nightmare, What'll I Do, Quinn the Eskimo) | rerunning them as they were | a rerun must only add; without the spellings, 4 of Dylan's songs had no lyrics link and 3 no player | `tools/find-lyrics-links.mjs`, `tools/fetch-spotify.mjs`, `tools/find-youtube.mjs` |
| A6 | 2 | The 1979 Saturday Night Live moment stays without a clip: the YouTube finder found the same unofficial upload the first build dropped, and now skips it | adding it back | the first walkthrough's clip count (179, which the review accepted) did not include it | `tools/find-youtube.mjs` (`DROPPED`) |
| A7 | 3 | Covers others made famous are added as their own version songs (12, such as Manfred Mann's "Mighty Quinn"), as the first build's connections were, and are not added to the "Songs others made famous" thread | adding them to that thread too | the writers were asked for new songs in threads; a thread change is the owner's to see | `data/parts/connections-2.json` |
| D1 | 1 | The new songs' records are in `data/parts/album-tracks.json` [deviation] | `data/parts/tracks.json`, as the plan's interface named it | that file already exists: it is the "Blood on the Tracks" era's part | `data/parts/album-tracks.json` |
| D2 | 2 | No Genius links: another writer's song shows "Words by …" alone [deviation, visible] | "Lyrics on Genius ↗" where Genius has the song, as the plan review asked | Genius answers this machine with 403, and the search engines that could find its pages answer with a bot check, so no link could be found or checked; an unchecked address could be a dead link | `runs/genius-blocked.txt` |

## The diff

Read it yourself: `git diff 40447f2..HEAD -- data tools src/lib src/pages/album src/pages/song src/components/Words.astro` (from the repository root). The files it touches:

```
data/BRIEF-songs.md           |   43 +
 data/albums.json              |  301 ++-
 data/links.json               |  180 ++
 data/parts/album-tracks.json  | 4861 +++++++++++++++++++++++++++++++++++++
 data/parts/connections-2.json |  386 +++
 data/songs.json               | 5358 ++++++++++++++++++++++++++++++++++++++++-
 data/sources/lyrics.json      |  254 +-
 data/sources/spotify.json     |  273 ++-
 data/sources/summaries.json   |  273 ++-
 data/sources/track-map.json   |  538 +++++
 data/sources/youtube.json     |  187 +-
 data/threads.json             |  104 +
 src/components/Words.astro    |   31 +
 src/lib/data.ts               |    2 +-
 src/pages/album/[id].astro    |   43 +-
 src/pages/song/[id].astro     |   64 +-
 tools/add-tracks.mjs          |  101 +
 tools/check-data.mjs          |   13 +
 tools/check-desktop.mjs       |  188 ++
 tools/check-phone.mjs         |   39 +-
 tools/fetch-spotify.mjs       |    8 +-
 tools/find-lyrics-links.mjs   |   16 +-
 tools/find-youtube.mjs        |   13 +-
 tools/lib/tracks.mjs          |   10 +
 tools/merge-data.mjs          |    7 +
 25 files changed, 13226 insertions(+), 67 deletions(-)
```
