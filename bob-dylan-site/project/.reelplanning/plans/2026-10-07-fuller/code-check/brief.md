# Code check brief: 2026-10-07-fuller

You are checking that an implementation follows its plan. You did not write it. Answer three questions,
every answer tied to a file (and a line where you can), and write them to `.reelplanning/plans/2026-10-07-fuller/code-check/findings.md`.

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
# Code check: 2026-10-07-fuller

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

## Commits (8cd2446..HEAD)

```
77595ec fuller site: era stories, moment stories and album essays; 38 more Commons photos; album player, track rows, era bands, context rail; links out
```

## The plan, as implemented

Read `.reelplanning/plans/2026-10-07-fuller/plan.md` in full. Its title is "A fuller site: more to read, more to see, more to do on every page", with 6 steps.

## The decisions that apply

- **D-001** (step 1) How should the site be built? → **which can produce a sophisticated website that is graceful and visually appealing, while fully featured? can you detail more visually the deferences?**
- **D-003** (step 4) How should album covers look? → **The real covers**
- **D-005** (step 6) How should someone listen? → **An embedded Spotify player**
- **D-006** (step 3) Where should the era photographs come from? → **Wikimedia Commons, free-licensed**
  - note: but note that we can ue other images and shiould still make it completely visually full , even if we cant find licenses... like no photographs and just text will be bad
- **D-007** (step 4) What should a song page show beside its lyrics link? → **The link and a preview in our words**
- **D-034** (step 1) Which tracks get a page? → **All 277**
- **D-035** (step 1) How much is written for a song by another writer? → **The same page as his own songs**
- **D-036** (step 2) How wide should the content go on a computer? → **Up to 1200 px, two columns**
- **D-037** (step 3) On a computer, does the home page give one era at a time, or all of them at once? → **One era fills the screen**
  - note: actually maybe mixing this with scroll is good. i like how this is presented but if we scroll down, it should get us to the next era with a clean transition through scrolling, wihtout needing to click the arrow
- **D-038** (step 5) On a computer, what should clicking a dot on the map do? → **Select it, and show its panel**
- **D-052** (step 5) q4 → **Add "A thread from this song ›" to the map page**
- **D-083** (step 5) q1 → **A context rail from 1440 px, the content kept at 1200 px**
- **D-084** (step 6) q2 → **Wikipedia and MusicBrainz, where MusicBrainz lists them**
- **D-085** (step 1) q3 → **An era about 250 words, a moment about 120, an album about 150**

## Earlier calls this diff changes

Calls an earlier walkthrough accepted, whose lines (written by that plan's commits) this diff changes. They are history, not rules: give each a line under Decisions, ✓ if it still holds, ✗ if the diff undoes it and no step, decision or autonomy row says so.

- **D-010** the dylan-site plan's call A18: “Each photo names its era and kind (`dylan` or `place`) in `photos.json`, and the panel picks a Dylan photo first; `eras.json`'s `photos` lists stay empty”, instead of “each era listing its photo ids, as the plan's interface shows” (9 line(s) in `data/photos.json`, 2 line(s) in `src/components/PhotoPanel.astro`)
- **D-011** the dylan-site plan's call A11: “"Lyrics on bobdylan.com ↗" opens in a new tab”, instead of “opening in the same tab” (2 line(s) in `src/pages/song/[id].astro`)
- **D-012** the dylan-site plan's call A16: “Song pages step to the album's previous and next song”, instead of “no stepping between songs” (2 line(s) in `src/pages/song/[id].astro`)
- **D-014** the dylan-site plan's call A14: “Search forgives a typo or two (one edit at 4–5 letters, two from 6; a swapped pair counts as one) and takes `theme:<name>`, which the theme chips on song pages use”, instead of “plain matching” (2 line(s) in `src/pages/song/[id].astro`)
- **D-029** the dylan-site plan's call A17: “The album page lists the dataset's songs, headed "Selected songs · 7 of 14" when they are fewer than the album's tracks [visible] (changed after review: the album page shows the full track list from MusicBrainz, numbered; the songs with their own page are marked "its story ›", and a line says how many)”, instead of “the full track list, or an unlabelled selection” (5 line(s) in `src/pages/album/[id].astro`)
- **D-046** the every-song plan's call A9: “A song page names its live takes on other albums: "Also on Self Portrait: She Belongs to Me (live)"”, instead of “the album row linking there, with nothing on the song's page” (1 line(s) in `src/pages/song/[id].astro`)
- **D-057** the desktop plan's call A9: “the desktop spread is the same markup as the phone panel (new EraSpread.astro used at every width), laid out by CSS grid from 1100 px”, instead of “a second, desktop-only set of era sections” (8 line(s) in `src/components/EraSpread.astro`)
- **D-058** the desktop plan's call A11: “the crossfade is the header and window colour fading (0.5 s) plus the leaving era's text dimming to 25 %”, instead of “a full-screen fade between eras” (8 line(s) in `src/components/EraSpread.astro`)
- **D-059** the desktop plan's call A12: “timeline names are clipped with an ellipsis on short eras (each stretch at least 64 px); the current era's name is written out in full over its neighbours”, instead of “names under every stretch in full” (3 line(s) in `src/components/Timeline.astro`)
- **D-060** the desktop plan's call A14: “the song page's left column holds the cover at 150 px above the title (changed in `66db1e0`: beside a 150 px cover, "Stardust" broke mid-word at 1440 px), and scrolls on its own if taller than the window”, instead of “the cover across the whole left column” (1 line(s) in `src/pages/song/[id].astro`)
- **D-061** the desktop plan's call A13: “the song page's words card is rendered twice (Words.astro): once in the phone position, once in the right column, each hidden at the other width”, instead of “moving the players with script, or a grid without the sticky column” (1 line(s) in `src/pages/song/[id].astro`)
- **D-062** the desktop plan's call D1: “a moment's "songs it is tied to" are the Dylan songs its story names by title, plus the era's records from that year”, instead of “the songs it is tied to” (35 line(s) in `src/pages/moment/[id].astro`)
- **D-067** the desktop plan's call A23: “the desktop check also fails when the phone's bottom bar or no header shows, when › beside an era or › beside a thread's cards moves nothing, and it presses ← to come back”, instead of “only the plan's list” (1 line(s) in `tools/check-desktop.mjs`)

## The autonomy log (the implementer's own calls)

| id | step | chose | instead of | why | check |
|---|---|---|---|---|---|
| A1 | 3 | every era on the timeline gets its bands, under its own spread, inside a new wrapper (`article.eb`) that a phone swipes and a computer snaps to; the home page's timeline gets them too [visible] [hard-to-undo] | bands only for the era in the address, after the whole timeline | /era/&lt;id&gt;/ is the whole timeline, and › and ← → move between eras, so each era needs its bands under its own spread | src/components/EraSpread.astro, src/components/Timeline.astro |
| A2 | 3 | on a phone the swiped row is as tall as the era in view (a ResizeObserver follows it) [close] | every era as tall as the tallest era's bands | a short era would end in a screen or more of blank space | src/components/Timeline.astro |
| A3 | 3 | the "records and moments" band shows only from 1100 px; phones and tablets get the story and gallery, songs to start with, threads and Read on, stacked [visible] | the same band on a phone | the phone's era panel just above already lists the same albums and moments | src/components/EraStory.astro |
| A4 | 3 | a moment page shows its clip first, its own photo under it when it has both; with neither, the era's lead photo, headed "The era's photograph · &lt;era&gt;"; "Around it" is the two moments either side; "His songs from &lt;year&gt;" up to 8, the most connected first [visible] | only the clip or only one photo | a full page at every width, and the era's photo honestly labelled | src/pages/moment/[id].astro |
| A5 | 4 | album page: the cover and the Spotify album player on the left; Why it matters with the essay, the track list and "Where its songs lead" on the right; previous and next album under both [visible] | the essay in the left column | the left column is already a 480 px cover; the essay reads better at the right column's measure | src/pages/album/[id].astro |
| A6 | 4 | a track row's title stays a link to its song; a separate ▾ button opens the row in place (preview, themes, its Spotify player, "Its page ›"), and the player loads the first time the row opens [close] | the whole row as the toggle | links keep working as before, on phones too; 30 players loading with the album would be heavy | src/pages/album/[id].astro |
| A7 | 4 | "Where its songs lead": at most six connections to songs off the album, covers, borrowed tunes, answers and rewrites before shared themes [visible] | all of them | Blonde on Blonde alone has dozens; six reads as a band, not a wall | src/pages/album/[id].astro |
| D1 | 4 | removed the desktop-only "Also in this era" row; the previous and next album of the era, with covers, replace it at every width [deviation] | keeping both | two bands of the same era's covers is the clutter the brief asked to avoid | src/pages/album/[id].astro |
| A8 | 5 | the rail is on album, song and moment pages only [visible] | a rail on every page | the era page is full-bleed and already shows the eras; threads, the map, search and About have no single era | src/layouts/Shell.astro |
| A9 | 5 | from 1440 px the content starts under the header's left edge, up to 1200 px, with the rail (240 px and a 48 px gap) in the right margin: the content is 984 px at 1440, the full 1200 from about 1900 [visible] | the content centred with the rail outside it | 1200 px plus the rail cannot be centred below about 1830 px; lining up with the header keeps the page calm | src/styles/site.css |
| A10 | 5 | the rail: the era badge and years, the eras as a list of bars sized by their years with this one lit and a pin at the page's year, and quick links (the era, the album, a thread, the map) [close] | a small horizontal ribbon | a 240 px column reads better as a list with names | src/components/Rail.astro |
| A11 | 6 | "Read on: Wikipedia ↗ · MusicBrainz ↗" at the end of album and song pages and of each era's bands, in a new tab, and nothing when there are no links [visible] | near the title | it is where reading carries on, and it keeps the top of the page clear | src/components/ReadOn.astro |
| A12 | 6 | each new desktop-check rule reads the built pages (the essay block, the album player's address, the moment's own photo or a clip) and only fails once its data exists [close] | checking only the data | it checks that the pages actually show the parts | tools/check-desktop.mjs |
| A13 | 6 | eras link only to Wikipedia, an article picked by hand for what the era is most about (Hibbing, Greenwich Village, the Electric Dylan controversy, The Basement Tapes, the Rolling Thunder Revue, the Traveling Wilburys, the 2016 Nobel Prize in Literature), each kept only when it answers; Gospel, Back to the Roots, the Standards and Rough and Rowdy have none [visible] | no era links | an era is not a MusicBrainz entity, so the finder found none; the plan says each era links out | tools/find-links-out.mjs (ERA_WIKI) |
| A14 | 2 | an era's gallery is up to five photographs of its own; a photo marked as a moment's belongs to that moment, and tops up a gallery with fewer than three (Basement and Blood on the Tracks: 2 of their own and 1 from a moment) [visible] | a moment's photo counted in every gallery, or never | the moment's photo leads its own page; a gallery of two looked thin | src/lib/data.ts (photosOfEra) |
| A15 | 2 | six of the first 26 photographs are now marked as a moment's, since each already shows it (the March on Washington, Isle of Wight 1969, Chicago 1974, Ginsberg on the Rolling Thunder Revue, Rotterdam 1978, the American Reunion of 1993) [close] | leaving them as era photos only | those moments get their photo without a new search | data/photos.json |
| A16 | 2 | a moment's photograph is often its place or its people, and the caption says so: Big Pink for the Basement sessions, the Warfield for the gospel shows, Roy Orbison for the Wilburys [visible] | a photo only of the event itself | Commons has few free photos of the events; a place, captioned, is honest and still shows it | data/photos.json |
| A17 | 2, 6 | the desktop check names eight gaps the photo search could not fill and does not fail on them: Back to the Roots (2 photos) and seven moments with no photo or clip (the Shelton review, marrying Sara Lownds, the motorcycle accident, Pat Garrett, the 1980 retrospective shows, Chronicles, The Philosophy of Modern Song); any other gap fails [visible] | the check failing until they are filled | Commons has no free photograph that fits; these pages show the era's photograph, labelled | tools/check-desktop.mjs (KNOWN_GAPS) |
| A18 | 1 | the data check compares quoted titles loosely (curly and straight apostrophes, hyphens, a bracketed subtitle) and accepts seven real songs on none of the site's albums ("Dignity", "Blind Willie McTell", "Series of Dreams", "Things Have Changed", "I Shall Be Released", "This Wheel's on Fire", "Handle with Care") [close] | quoting only titles on the site | the stories name these songs; they are titles, not lyrics | tools/check-data.mjs (OTHER_TITLES) |
| A19 | 3 | the gallery is a grid (the first photo wide, then two a row) with one line naming the photographers; each photo's credit and licence show when it opens large [visible] | a sideways row, or a credit under every thumbnail | a sideways scroller inside the phone's sideways swipe fights it; credits under every thumbnail crowd it | src/components/Gallery.astro |
| A20 | 4 | a song page's "The same year" lists up to 8 of his own songs from his records that year, the most connected first, leaving out covers and other artists' songs [close] | every song from that year on the site | it is about what he was writing then | src/pages/song/[id].astro |

## The diff

Read it yourself: `git diff 8cd2446..HEAD` (from the repository root). The files it touches:

```
.../2026-10-07-fuller/runs/find-links-out.txt      |  543 ++++
 .../plans/2026-10-07-fuller/runs/find-photos.txt   |  116 +
 .../2026-10-07-fuller/runs/find-spotify-albums.txt |   42 +
 .../plans/2026-10-07-fuller/runs/npm-test.txt      | 1795 +++++++++++++
 .../runs/shots/album-track-open-1440x900.png       |  Bin 0 -> 210032 bytes
 .../runs/shots/album-track-open-1920x1080.png      |  Bin 0 -> 294090 bytes
 .../runs/shots/era-bands-1440x900.png              |  Bin 0 -> 407048 bytes
 .../runs/shots/era-bands-1920x1080.png             |  Bin 0 -> 445477 bytes
 .../runs/shots/moment-1440x900.png                 |  Bin 0 -> 381270 bytes
 .../runs/shots/moment-1920x1080.png                |  Bin 0 -> 477048 bytes
 .../2026-10-07-fuller/runs/shots/song-1440x900.png |  Bin 0 -> 455701 bytes
 .../runs/shots/song-1920x1080.png                  |  Bin 0 -> 554086 bytes
 .../plans/2026-10-07-fuller/runs/ui-build.txt      | 1613 ++++++++++++
 .../2026-10-07-fuller/runs/ui-check-desktop.txt    |    5 +
 .../2026-10-07-fuller/runs/ui-check-phone.txt      |    3 +
 data/albums.json                                   |  312 ++-
 data/eras.json                                     |  102 +-
 data/moments.json                                  |  123 +-
 data/photos.json                                   |  465 +++-
 data/songs.json                                    | 2727 ++++++++++++++++----
 data/sources/links-out.json                        | 1750 +++++++++++++
 data/sources/spotify-albums.json                   |   40 +
 data/sources/stories.json                          |  143 +
 src/assets/photos/basement-big-pink-2006.jpg       |  Bin 0 -> 498912 bytes
 src/assets/photos/basement-nassau-hall-2012.jpg    |  Bin 0 -> 881130 bytes
 src/assets/photos/basement-the-band-1969.jpg       |  Bin 0 -> 1017793 bytes
 .../photos/eighties-concord-pavilion-2008.jpg      |  Bin 0 -> 522866 bytes
 src/assets/photos/eighties-live-aid-1985.jpg       |  Bin 0 -> 442389 bytes
 src/assets/photos/eighties-roy-orbison-1976.jpg    |  Bin 0 -> 281850 bytes
 .../photos/eighties-waldorf-astoria-2013.jpg       |  Bin 0 -> 876436 bytes
 src/assets/photos/electric-bloomfield-1969.jpg     |  Bin 0 -> 171902 bytes
 .../photos/electric-free-trade-hall-2008.jpg       |  Bin 0 -> 651578 bytes
 .../photos/electric-newport-stratocaster.jpg       |  Bin 0 -> 1221881 bytes
 .../photos/electric-press-conference-1965.jpg      |  Bin 0 -> 113374 bytes
 .../photos/electric-royal-albert-hall-2016.jpg     |  Bin 0 -> 977738 bytes
 src/assets/photos/gospel-30-rock-2024.jpg          |  Bin 0 -> 876142 bytes
 src/assets/photos/gospel-muscle-shoals-2007.jpg    |  Bin 0 -> 177671 bytes
 .../photos/gospel-shrine-auditorium-2004.jpg       |  Bin 0 -> 788434 bytes
 src/assets/photos/gospel-toronto-stage-1980.jpg    |  Bin 0 -> 22784 bytes
 src/assets/photos/gospel-warfield-2008.jpg         |  Bin 0 -> 1255822 bytes
 src/assets/photos/hibbing-dinkytown-2006.jpg       |  Bin 0 -> 283870 bytes
 src/assets/photos/hibbing-downtown-2020.jpg        |  Bin 0 -> 600756 bytes
 src/assets/photos/hibbing-duluth-home-2016.jpg     |  Bin 0 -> 904057 bytes
 src/assets/photos/hibbing-dylan-drive-2022.jpg     |  Bin 0 -> 467998 bytes
 src/assets/photos/hibbing-high-school-2009.jpg     |  Bin 0 -> 1069397 bytes
 src/assets/photos/renaissance-bologna-2005.jpg     |  Bin 0 -> 747359 bytes
 .../photos/renaissance-finsbury-park-2011.jpg      |  Bin 0 -> 512670 bytes
 .../photos/renaissance-medal-of-freedom-2012.jpg   |  Bin 0 -> 73811 bytes
 src/assets/photos/renaissance-radio-city-2021.jpg  |  Bin 0 -> 1412161 bytes
 src/assets/photos/renaissance-white-house-2010.jpg |  Bin 0 -> 386964 bytes
 .../photos/roots-madison-square-garden-2011.jpg    |  Bin 0 -> 95829 bytes
 src/assets/photos/rough-dealey-plaza-2003.jpg      |  Bin 0 -> 1094023 bytes
 src/assets/photos/rough-umpg-2012.jpg              |  Bin 0 -> 693473 bytes
 src/assets/photos/standards-borshuset-2015.jpg     |  Bin 0 -> 541583 bytes
 .../photos/standards-la-convention-center-2008.jpg |  Bin 0 -> 718722 bytes
 .../photos/standards-nobel-announcement-2016.jpg   |  Bin 0 -> 221650 bytes
 src/assets/photos/tracks-band-1974.jpg             |  Bin 0 -> 150267 bytes
 src/assets/photos/tracks-hard-rain-1976.jpg        |  Bin 0 -> 135968 bytes
 src/assets/photos/village-cafe-wha-2019.jpg        |  Bin 0 -> 1008638 bytes
 src/assets/photos/village-van-ronk-1968.jpg        |  Bin 0 -> 167920 bytes
 src/assets/photos/village-woody-guthrie-1943.jpg   |  Bin 0 -> 620247 bytes
 src/components/EraSpread.astro                     |   15 +-
 src/components/EraStory.astro                      |  149 ++
 src/components/Gallery.astro                       |  108 +
 src/components/PhotoPanel.astro                    |    5 +-
 src/components/Rail.astro                          |   71 +
 src/components/ReadOn.astro                        |   22 +
 src/components/Timeline.astro                      |   16 +-
 src/layouts/Shell.astro                            |   13 +-
 src/lib/data.ts                                    |   39 +-
 src/pages/album/[id].astro                         |  140 +-
 src/pages/moment/[id].astro                        |  153 +-
 src/pages/song/[id].astro                          |   33 +-
 src/styles/site.css                                |   11 +
 tools/check-data.mjs                               |   18 +
 tools/check-desktop.mjs                            |   43 +
 tools/find-links-out.mjs                           |  157 ++
 tools/find-photos.mjs                              |  280 ++
 tools/find-spotify-albums.mjs                      |   22 +
 tools/merge-data.mjs                               |    9 +
 80 files changed, 10366 insertions(+), 717 deletions(-)
```
