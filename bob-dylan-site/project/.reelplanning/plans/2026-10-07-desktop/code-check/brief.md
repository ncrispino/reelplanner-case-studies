# Code check brief: 2026-10-07-desktop

You are checking that an implementation follows its plan. You did not write it. Answer three questions,
every answer tied to a file (and a line where you can), and write them to `.reelplanning/plans/2026-10-07-desktop/code-check/findings.md`.

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
# Code check: 2026-10-07-desktop

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

## Commits (63dbee5..HEAD, limited to src tools/check-desktop.mjs tools/check-phone.mjs package.json)

```
1b32857 desktop plan, all six steps: map clicks reach their dots; header and era look across the window from 1100 px; one era per screen with scroll snapping; two-column song, album and moment pages; threads along the years with the map below; map page panel and era filter; three-column search; desktop check (also carries every-song's album rows and song takes / words-by lines on the reworked pages)
cadf678 every-song steps 1-3: every album track mapped to a song (271 new, written and summarised), Spotify for all 452, bobdylan.com links, 30 new connections, threads extended
```

## The plan, as implemented

Read `.reelplanning/plans/2026-10-07-desktop/plan.md` in full. Its title is "The Dylan site on a computer: full-window eras, two-column pages, and a map you can click", with 6 steps.

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
| A1 | 1 | each dot's invisible hit ring is 28 map units across (r 14) [close] | a ring 14 px across | read "a ring 14 px across around it" as 7 px each side of the 14 px dot; that is what gives the plan's 44 px at a phone's zoom (about 1.6) | src/islands/map.ts |
| A2 | 1 | the + / − buttons show from 768 px, not on phones [visible] | on phones too | a phone pinches, and the brief keeps phones looking as today | src/components/MapView.astro |
| A3 | 1 | the phone check tries a touch tap and a pointer press-release on a dot, both must open the song [close] | a tap only | headless Chrome routes a synthetic tap past pointer capture, so a tap alone passed against the old bug; the press fails on it | tools/check-phone.mjs |
| A4 | 1 | the hover label replaces the dot's SVG <title> tooltip; each dot gets an aria-label instead [visible] | keep the native tooltip too | two tooltips at once on a computer | src/islands/map.ts |
| A5 | 2 | the header is sticky (stays at the top as you scroll), 64 px, on the era's paper [visible] | a header that scrolls away | search "always at hand", as the plan puts it | src/styles/site.css (.masthead) |
| A6 | 2 | the header search is a plain GET form to /search/?q=… (works without script); "/" focuses it only when the header shows (from 1100 px) [close] | a scripted field | the Enter case needs nothing more, and Astro's router already handles GET forms | src/layouts/Shell.astro |
| A7 | 2 | the tablet band keeps today's 672→720 px column with 48 px side margins (max-width 816 px) [visible] | widening the column itself | the plan says "today's layout with wider margins" | src/styles/site.css |
| A8 | 2 | map pages light "Map" in the header but still "Threads" in the phone's bottom bar (it has no Map tab) [close] | adding a Map tab to the bottom bar | phones stay as they are | src/layouts/Shell.astro |
| A9 | 3 | the desktop spread is the same markup as the phone panel (new EraSpread.astro used at every width), laid out by CSS grid from 1100 px [hard-to-undo] | a second, desktop-only set of era sections | one DOM: no duplicated photos or text, and the phone panel is unchanged | src/components/EraSpread.astro |
| A10 | 3 | scrolling keeps replaceState for the address (/era/<id>/), as today; ‹ ›, keys and the timeline do the same [close] | pushState per era, so Back steps through eras | a scroll would otherwise fill the history with eleven entries; a shared link and a reload still open that era | src/components/Timeline.astro |
| A11 | 3 | the crossfade is the header and window colour fading (0.5 s) plus the leaving era's text dimming to 25 % [visible] | a full-screen fade between eras | a fade on top of a scroll-snap reads as a flash | src/components/EraSpread.astro |
| A12 | 3 | timeline names are clipped with an ellipsis on short eras (each stretch at least 64 px); the current era's name is written out in full over its neighbours [visible] | names under every stretch in full | Back to the Roots (2 years) is about 30 px wide at 1440 px | src/components/Timeline.astro |
| A13 | 4 | the song page's words card is rendered twice (Words.astro): once in the phone position, once in the right column, each hidden at the other width [hard-to-undo] | moving the players with script, or a grid without the sticky column | the phone order puts the words before the players while the desktop puts the players on the left; this keeps the phone exactly as today with no script | src/pages/song/[id].astro, src/components/Words.astro |
| A14 | 4 | the song page's left column holds the cover at 150 px beside the title and scrolls on its own if taller than the window [visible] | the cover across the whole left column | a 380 px cover plus two players is taller than a 900 px window, and a sticky column that tall hides its players | src/pages/song/[id].astro |
| A15 | 4 | the small map on a song page is the right column's full width × 300 px, under the connections [close] | 360 × 300 | a 360 px box alone in a 780 px column left a hole | src/components/MapView.astro (.m-small) |
| A16 | 4 | the album page's left column is not sticky [close] | sticky like the song page's | a 480 px cover plus "why it matters" is taller than the window | src/pages/album/[id].astro |
| D1 | 4 | a moment's "songs it is tied to" are the Dylan songs its story names by title, plus the era's records from that year [deviation] | the songs it is tied to | the data has no moment-to-song links; this shows only ties that are really there, and nothing when none is | src/pages/moment/[id].astro |
| A17 | 5 | the line of years puts each card's year on the line and writes the gap to the next card on the line between them ("2 yrs →"); the cards are evenly spaced [visible] | spacing cards in proportion to the years between them | four cards on screen at once need equal widths; a 40-year gap would push the next card off the row | src/components/ThreadCards.astro |
| A18 | 5 | from 1100 px a thread's map opens on its first song's neighbourhood (as a phone's does), and hovering a card lights its dot and glides the map to it when it is out of view; a song's map pages and small map also open on the neighbourhood; /map/ shows everything [visible] | every map fitted to all its songs, as on a tablet | the layout is about 3,000 map units across: fitted to a thread's songs, a 1200 × 520 map was at 0.18 zoom with 5 px labels; labels also keep at least 12.5 px on screen from 1100 px | src/islands/map.ts (show), src/components/ThreadCards.astro |
| A19 | 5 | the era filter is the legend turned into buttons by script from 1100 px (role=button, 44 px tall, one era at a time, click again to clear) [close] | real buttons at every width, or several eras at once | the phone legend stays as it is (and is not a filter there); "click an era to dim the others" names one | src/components/MapView.astro |
| A20 | 5 | on /map/<song>/ the panel opens already showing that song; /map/ opens on "Click a dot…" [visible] | an empty panel until you click | the page is about that song, and its dot is already lit | src/components/MapView.astro |
| D2 | 5 | The tablet band (768–1099 px) also hides the map's own Cards / Map toggle beside a thread's cards [deviation] | the tablet exactly as today | the plan's own leftover-toggle bug showed there too: the thread's toggle was hidden, the map's was not | `src/components/ThreadCards.astro` |
| D3 | 5 | the threads list shows its covers from all of a thread's songs' albums, first four distinct; two threads (Borrowed tunes, Songs others made famous) have none and show no covers [deviation] | the covers of its first songs | their first songs are traditional or other artists' recordings with no album cover | src/pages/threads/index.astro |
| A21 | 6 | search's three columns are placed by CSS on group sections (Eras and Moments stacked in the first column); on a phone the groups keep today's order, best match first [close] | re-rendering the results in a fixed column order | one renderer for both widths, phone output unchanged | src/islands/search.ts, src/pages/search/index.astro |
| A22 | 6 | "content narrower than 60 %" is measured as the horizontal span of everything showing inside <main>; the 404 page is exempt; the era-background test reads the colour behind the window's right edge, 85 % down (clear of the ‹ › buttons), against the body era's --paper [close] | measuring .page's width, or sampling the left edge | .page is 1200 px even when its content sits in a 720 px column; the home page's left half is a photograph | tools/check-desktop.mjs |
| A23 | 6 | the desktop check also fails when the phone's bottom bar or no header shows, when › beside an era or › beside a thread's cards moves nothing, and it presses ← to come back [visible] | only the plan's list | the same "a control showing that does nothing" rule, applied to the controls this plan adds | tools/check-desktop.mjs |
| A24 | 6 | `npm test` runs the data check, the build, the phone check and the desktop check; `npm run check:desktop` runs the last alone; `--shots <dir>` also writes the 1440 × 900 screenshots there [close] | a separate script per size | the plan's npm test order; the shots flag gives the review folder its pictures | package.json, tools/check-desktop.mjs |

## The diff

Read it yourself: `git diff 63dbee5..HEAD -- src tools/check-desktop.mjs tools/check-phone.mjs package.json` (from the repository root). The files it touches:

```
package.json                     |   3 +-
 src/components/Cover.astro       |   8 +-
 src/components/EraSpread.astro   |  81 +++++++++++++++++
 src/components/MapPanel.astro    |  49 ++++++++++
 src/components/MapView.astro     | 170 +++++++++++++++++++++++++++++------
 src/components/PhotoPanel.astro  |   5 +-
 src/components/ThreadCards.astro |  60 +++++++++++--
 src/components/Timeline.astro    | 145 +++++++++++++++++++-----------
 src/components/Words.astro       |  31 +++++++
 src/islands/map.ts               | 165 ++++++++++++++++++++++++++++++----
 src/islands/search.ts            |   5 +-
 src/layouts/Shell.astro          |  48 +++++++++-
 src/lib/data.ts                  |   2 +-
 src/pages/about.astro            |  13 +++
 src/pages/album/[id].astro       |  43 +++++++--
 src/pages/era/[id].astro         |   2 +-
 src/pages/index.astro            |   2 +-
 src/pages/map-panel.json.ts      |  17 ++++
 src/pages/map/[id].astro         |   2 +-
 src/pages/map/index.astro        |   2 +-
 src/pages/moment/[id].astro      |  53 +++++++++--
 src/pages/search/index.astro     |  10 +++
 src/pages/song/[id].astro        |  64 ++++++++-----
 src/pages/threads/index.astro    |  25 ++++--
 src/styles/site.css              |  48 +++++++++-
 tools/check-desktop.mjs          | 188 +++++++++++++++++++++++++++++++++++++++
 tools/check-phone.mjs            |  39 +++++++-
 27 files changed, 1126 insertions(+), 154 deletions(-)
```
