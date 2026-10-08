# Walkthrough: the Dylan site on a computer

**In one sentence:** on a laptop or desktop the site now looks and works like a site made for one: every map dot opens
or selects its song, each era fills the window in its own look and scrolling moves era to era, song, album and moment
pages have two columns, a thread runs along the years with the map under it, and a desktop check fails the build
when a page looks or works like a phone page on a computer; phones look exactly as before.

Built from `63dbee5` (the approved plan, with the review's comments folded in).

## Choices made while building

| id | step | chose | instead of | why | where to check |
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
| A14 | 4 | the song page's left column holds the cover at 150 px above the title (changed in `66db1e0`: beside a 150 px cover, "Stardust" broke mid-word at 1440 px), and scrolls on its own if taller than the window [visible] | the cover across the whole left column | a 380 px cover plus two players is taller than a 900 px window, and a sticky column that tall hides its players | src/pages/song/[id].astro |
| A15 | 4 | the small map on a song page is the right column's full width × 300 px, under the connections [close] | 360 × 300 | a 360 px box alone in a 780 px column left a hole | src/components/MapView.astro (.m-small) |
| A16 | 4 | the album page's left column is not sticky [close] | sticky like the song page's | a 480 px cover plus "why it matters" is taller than the window | src/pages/album/[id].astro |
| A25 | 5 | The map panel's rows are one built file, `/map-panel.json`, fetched on the first click, and a song with no preview shows its note [close] | the panel's data written into every map page | 230 songs' rows in each of the 230 map pages would make each page much heavier; one file is cached after the first click | `src/pages/map-panel.json.ts` |
| D1 | 4 | a moment's "songs it is tied to" are the Dylan songs its story names by title, plus the era's records from that year [deviation] | the songs it is tied to | the data has no moment-to-song links; this shows only ties that are really there, and nothing when none is | src/pages/moment/[id].astro |
| A17 | 5 | the line of years puts each card's year on the line and writes the gap to the next card on the line between them ("2 yrs →"); the cards are evenly spaced [visible] | spacing cards in proportion to the years between them | four cards on screen at once need equal widths; a 40-year gap would push the next card off the row | src/components/ThreadCards.astro |
| A18 | 5 | from 1100 px a thread's map opens on its first song's neighbourhood (as a phone's does), and hovering a card lights its dot and glides the map to it when it is out of view; a song's map pages and small map also open on the neighbourhood; /map/ shows everything [visible] | every map fitted to all its songs, as on a tablet | the layout is about 3,000 map units across: fitted to a thread's songs, a 1200 × 520 map was at 0.18 zoom with 5 px labels; labels also keep at least 12.5 px on screen from 1100 px | src/islands/map.ts (show), src/components/ThreadCards.astro |
| A19 | 5 | the era filter is the legend turned into buttons by script from 1100 px (role=button, 44 px tall, one era at a time, click again to clear) [close] | real buttons at every width, or several eras at once | the phone legend stays as it is (and is not a filter there); "click an era to dim the others" names one | src/components/MapView.astro |
| A20 | 5 | on /map/<song>/ the panel opens already showing that song; /map/ opens on "Click a dot…" [visible] | an empty panel until you click | the page is about that song, and its dot is already lit | src/components/MapView.astro |
| D2 | 5 | The tablet band (768–1099 px) also hides the map's own Cards / Map toggle beside a thread's cards [deviation] | the tablet exactly as today | the plan's own leftover-toggle bug showed there too: the thread's toggle was hidden, the map's was not | `src/components/ThreadCards.astro` |
| D3 | 5 | the threads list shows its covers from all of a thread's songs' albums, first four distinct; two threads (Borrowed tunes, Songs others made famous) have none and show no covers [deviation] (changed after review, "i would like to give some visuals for these as well": a step not on his albums, an old tune or another artist's version, now shows the cover of the Dylan song it is connected to, so every thread has four covers) | the covers of its first songs | their first songs are traditional or other artists' recordings with no album cover | src/pages/threads/index.astro |
| A21 | 6 | search's three columns are placed by CSS on group sections (Eras and Moments stacked in the first column); on a phone the groups keep today's order, best match first [close] | re-rendering the results in a fixed column order | one renderer for both widths, phone output unchanged | src/islands/search.ts, src/pages/search/index.astro |
| A22 | 6 | "content narrower than 60 %" is measured as the horizontal span of everything showing inside <main>; the 404 page is exempt; the era-background test reads the colour behind the window's right edge, 85 % down (clear of the ‹ › buttons), against the body era's --paper [close] | measuring .page's width, or sampling the left edge | .page is 1200 px even when its content sits in a 720 px column; the home page's left half is a photograph | tools/check-desktop.mjs |
| A23 | 6 | the desktop check also fails when the phone's bottom bar or no header shows, when › beside an era or › beside a thread's cards moves nothing, and it presses ← to come back [visible] | only the plan's list | the same "a control showing that does nothing" rule, applied to the controls this plan adds | tools/check-desktop.mjs |
| A24 | 6 | `npm test` runs the data check, the build, the phone check and the desktop check; `npm run check:desktop` runs the last alone; `--shots <dir>` also writes the 1440 × 900 screenshots there [close] | a separate script per size | the plan's npm test order; the shots flag gives the review folder its pictures | package.json, tools/check-desktop.mjs |

## What landed, step by step

### Step 1 — The map: every dot opens its song, on a computer and a phone

**You can now:** click or tap any dot and open its song; scroll past the map; zoom with Ctrl or + / −; see a dot's name by hovering.

The map takes the pointer only after it moves more than 4 px, so a press and release is a click on the dot; each dot
has an invisible hit ring (A1). The wheel scrolls the page; Ctrl or ⌘ with the wheel zooms, as do the + and − buttons
(from 768 px, A2). Hovering a dot shows "title · album or artist · year" and lights its lines (A4). The phone check
now taps a dot and also presses and releases one, and fails unless a song page opens (A3): `runs/check-phone.txt`.

**Commits:** `1b32857`.

```diagram
state: A pointer on the map
[*] -> pressed: you press on a dot | nothing is taken yet
pressed -> opened: you release without moving | the dot opens its song (on a computer's full map, it selects it)
pressed -> dragging: you move more than 4 px | the map takes the pointer
dragging -> [*]: you release | the map stays; nothing opens
```

#### Worked examples

##### A tap on a dot
- **Input:** `node tools/check-phone.mjs`
- **What happens:** it taps a dot on `/map/masters-of-war/` and presses and releases one; both open a song page.
- **Output:** `runs/check-phone.txt`
- **Edge cases:** headless Chrome's synthetic tap got past the old bug, so the press and release is the test that catches it (A3).

#### Why it works this way
Taking the pointer only once a drag starts leaves a plain click to the dot's link.

#### What else was considered
Opening the song on pointerup by hand; the link already does it.

#### What breaks it
A pointer that jitters more than 4 px while pressing starts a drag.

#### Limits
The hover label needs a mouse; the checks' headless Chrome has none, so it was tried separately with mouse emulation.

#### Files and commands
`src/islands/map.ts`, `src/components/MapView.astro`, `tools/check-phone.mjs`.

### Step 2 — The app shell on a wide screen

**You can now:** use the site on a computer with a header and search always at hand, the era's look across the whole window, and content up to 1200 px wide.

From 1100 px a sticky header (A5) holds the site's name, Eras · Threads · Map · About and a search field; Enter
searches and `/` focuses it (A6). The era's look paints the whole window. The content is up to 1200 px (D-036), in a
two-column grid where a page has two columns, text kept to a readable measure. From 768 to 1099 px the tablet keeps
today's column with 48 px margins and the bottom bar (A7); below 768 px nothing changed: 18 phone pages compared pixel
by pixel against the build before were identical.

**Commits:** `1b32857`.

```diagram
flow: Which layout a window gets
width -> phone = up to 767 px: today's layout | unchanged, pixel for pixel
width -> tablet = 768–1099 px: today's column, wider margins, bottom bar
width -> desktop = 1100 px and up: header, era look across the window, up to 1200 px
```

#### Worked examples

##### A 1440 × 900 window
- **Input:** `node tools/check-desktop.mjs --shots runs/shots`
- **What happens:** every view has the header, no bottom bar, and the era's look to the window's edge.
- **Output:** `runs/check-desktop.txt`
- **Edge cases:** at 1100 × 800, the same.

#### Why it works this way
A breakpoint at 1100 px keeps tablets on the layout they already work with.

#### What else was considered
A header that scrolls away (A5).

#### What breaks it
A page that sets its own max-width: the desktop check fails it as a phone-width column.

#### Limits
Above 1200 px the content stays 1200 px wide, centred, with the era's look either side.

#### Files and commands
`src/layouts/Shell.astro`, `src/styles/site.css`, `src/themes/*.css`.

### Step 3 — The era timeline on a computer: one era fills the screen

**You can now:** move through Dylan's life on a computer one era at a time, by scrolling, the arrows, the keys or the timeline.

Each era fills the screen (D-037): its photograph on the left half, edge to edge, its years, title, story, albums
and moments on the right (`EraSpread.astro`, the same markup as the phone panel, A9). As the review asked, scrolling
snaps to the next or the previous era, and the header and window colour crossfade (A11); the ‹ › buttons, the ← →
keys and a full-width timeline with each era's name (A12) move too, and the address follows without filling the
history (A10). Photos are served up to 2000 px wide.

**Commits:** `1b32857`.

```diagram
flow: Moving through the eras on a computer
era = one era, full screen -> next = the next era: scroll down, ›, → or the timeline | the look crossfades
era -> prev = the era before: scroll up, ‹ or ←
era -> album = an album page: a cover in its row
```

#### Worked examples

##### The home page
- **Input:** open `/` at 1440 × 900
- **What happens:** Duluth and Hibbing fills the screen, the Iron Range photo on the left.
- **Output:** `runs/check-desktop.txt`
- **Edge cases:** an era with no photograph of him shows a place (Back to the Roots, the Lincoln Memorial stage).

#### Why it works this way
Scroll snapping gives the review's "clean transition through scrolling" with no script deciding when a scroll ends.

#### What else was considered
A history entry per era (A10); a full-screen fade (A11).

#### What breaks it
A browser without scroll snapping still scrolls, without the snap.

#### Limits
Short eras' names are cut with an ellipsis on the timeline; the current one is written in full (A12).

#### Files and commands
`src/components/EraSpread.astro`, `src/components/Timeline.astro`, `src/components/PhotoPanel.astro`.

### Step 4 — Album, song and moment pages in two columns

**You can now:** see a song's cover, players and words at a glance, with its connections and a small map beside them.

A song page has a left column that stays in place (cover, title, note, themes, its takes and other albums, players,
A14) and a right column with the words card (`Words.astro`, A13), the connections two across, and a small live map
(A15). An album page has its cover at 480 px with "why it matters", the full track list beside it, and "Also in this
era" (A16). A moment has its clip (or the era's photograph) beside its story, and the songs its story names (D1).

**Commits:** `1b32857`.

```diagram
compare: A song page at 1440 px
before: one 720 px column, 2,500 px tall
after: two columns: cover, note and players on the left; words, connections and a small map on the right
```

#### Worked examples

##### Like a Rolling Stone
- **Input:** open `/song/like-a-rolling-stone/` at 1440 × 900
- **What happens:** the cover, note, themes, "Also on Self Portrait" and players on the left; the words and four connections on the right.
- **Output:** `runs/check-desktop.txt`
- **Edge cases:** a song with no connection has the words alone on the right.

#### Why it works this way
The phone puts the words before the players and the computer puts them side by side; rendering the words card twice keeps the phone page as it was with no script (A13).

#### What else was considered
Moving the players with script.

#### What breaks it
Two copies of the words card must stay the same component (`Words.astro`).

#### Limits
The album page's left column scrolls with the page (A16).

#### Files and commands
`src/pages/song/[id].astro`, `src/pages/album/[id].astro`, `src/pages/moment/[id].astro`, `src/components/Words.astro`.

### Step 5 — Threads and the map on a computer

**You can now:** see a thread's cards along a line of years with the map under it, and explore the full map with the song you clicked described beside it.

A thread shows four cards at a time along a line of years with the gap between them written on it (A17), ‹ › to move
along, and the map under it; hovering a card lights its dot and moves the map to it (A18). The Cards | Map toggle is
gone from 1100 px, and from the tablet band too (D2). On the map page a click selects a dot and fills the side panel
(D-038, `MapPanel.astro`): era, cover, preview, connections and "Open the song ›"; a double click opens it. The legend
is a filter (A19), and `/map/<song>/` opens with that song in the panel (A20). The threads list is a grid three across
with covers (D3). A fifth choice was not made: whether the full map should lead to the thread cards. It became question 4
in `plan.md`, answered A in the walkthrough review: the map page now has "A thread from <song> ›" under its title
(`src/components/MapView.astro`).

**Commits:** `1b32857`.

```diagram
sequence: Clicking a dot on the map page
you -> map: click a dot
map -> panel: its era, cover, preview, connections
you -> panel: Open the song ›
panel -> song page: open it
```

#### Worked examples

##### A dot selected
- **Input:** open `/map/masters-of-war/` at 1440 × 900 and click "Talking World War III Blues"
- **What happens:** the panel shows Greenwich Village · 1963, its preview, 1 connection, Open the song ›.
- **Output:** `runs/check-desktop.txt`
- **Edge cases:** a double click opens the song; on a phone a tap opens it.

#### Why it works this way
A click that keeps you on the map lets you look at several songs in turn (D-038).

#### What else was considered
Cards spaced by their years (A17); every map fitted to all its songs (A18).

#### What breaks it
A thread's map below the fold on a 900 px-tall window: its dot lights out of view until you scroll.

#### Limits
The map page leads to a thread from its song only from 1100 px; below that the Cards | Map toggle does it.

#### Files and commands
`src/components/ThreadCards.astro`, `src/components/MapView.astro`, `src/components/MapPanel.astro`, `src/pages/map-panel.json.ts`, `src/islands/map.ts`.

### Step 6 — Search and About on a computer, and a desktop check

**You can now:** see search results side by side, and trust `npm test` to fail when a page looks or works like a phone page on a computer.

Search shows three columns, Eras and Moments, Albums, Songs (A21); About shows two. `tools/check-desktop.mjs` opens
the 12 views at 1440 × 900 and 1100 × 800 and fails, naming the view, the size and the problem, on a sideways scroll,
a control showing that does nothing (the Cards | Map toggle, an era's or a thread's ‹ › that moves nothing), the
phone's bottom bar or a missing header, an era's look that stops short of the window, a phone-width column, a map dot
that neither opens nor selects, or an error (A22, A23). `npm test` runs the data check, the build, the phone check and
the desktop check (A24).

**Commits:** `1b32857`.

```diagram
flow: What npm test runs
npm test -> data = the data check
data -> build = the build: 1,415 pages
build -> phone = the phone check: 12 views at 375 × 812
phone -> desktop = the desktop check: 24 views | fails on a phone page on a computer
```

#### Worked examples

##### The whole suite
- **Input:** `npm test`
- **What happens:** four checks, all passing.
- **Output:** `runs/npm-test.txt`
- **Edge cases:** the desktop check was also run against the build from before this plan, where it failed as it should; that run was not saved.

#### Why it works this way
Only a check at computer sizes can see a computer-only problem; the phone check never opens one.

#### What else was considered
A separate script per size (A24).

#### What breaks it
A new control the check does not know: it is tested only by the general rules.

#### Limits
The hover label is not covered by the check (no mouse in headless Chrome).

#### Files and commands
`tools/check-desktop.mjs`, `package.json`, `src/islands/search.ts`, `src/pages/search/index.astro`, `src/pages/about.astro`.

## Tests run

- `npm test`: the data check, the build (1,415 pages), the phone check and the desktop check, all pass (`runs/npm-test.txt`).
- `node tools/check-desktop.mjs --shots runs/shots`: 24 views (`runs/check-desktop.txt`, `runs/shots/`).
- The 375 px pages: 18 pages compared pixel by pixel against the build before this plan, all identical (by the implementer; the comparison was not saved as a run).

## Not done

- **Question 4:** answered A in the walkthrough review and built: the map page links to a thread from its song.
- **The hover label in the check:** tried only by hand, with mouse emulation.
- **A thread's map on a short window:** it falls below the first screen.

## Categories of change

- **Map interaction** {map} (`src/islands/map.ts`, `src/components/MapView.astro`, `src/components/MapPanel.astro`, `src/pages/map-panel.json.ts`) (steps 1, 5): clicks reach dots, zoom with Ctrl or + / −, hover labels, the side panel and era filter.
  Runs: `runs/check-phone.txt`, `runs/check-desktop.txt`
- **The wide shell** {shell} (`src/layouts/Shell.astro`, `src/styles/site.css`) (step 2): the header, the 1100 px desktop band and the tablet band.
  Runs: `runs/check-desktop.txt`
- **Eras full screen** {eras} (`src/components/EraSpread.astro`, `src/components/Timeline.astro`, `src/components/PhotoPanel.astro`) (step 3): one era a screen with scroll snapping, arrows, keys and the timeline.
  Runs: `runs/check-desktop.txt`
- **Two-column pages** {pages} (`src/pages/song/[id].astro`, `src/pages/album/[id].astro`, `src/pages/moment/[id].astro`, `src/components/Words.astro`) (step 4): song, album and moment pages on a computer.
  Runs: `runs/check-desktop.txt`
- **Threads on a computer** {threads} (`src/components/ThreadCards.astro`, `src/pages/threads/index.astro`) (step 5): cards along the years, the map under them, the list as a grid.
  Runs: `runs/check-desktop.txt`
- **Search and the desktop check** {check} (`src/islands/search.ts`, `src/pages/search/index.astro`, `src/pages/about.astro`, `tools/check-desktop.mjs`, `package.json`) (step 6): three-column search, two-column About, and the check.
  Runs: `runs/npm-test.txt`

## Decisions kept

- **D-001** "Astro, a page per song": the wide layout is CSS and the same islands (`src/styles/site.css`).
- **D-002** "All 39 albums, 16 in full": the same albums, laid out wider (`src/pages/album/[id].astro`).
- **D-003** "The real covers": the album page's cover at 480 px, the drawn cover still standing in (`src/components/Cover.astro`).
- **D-005** "An embedded Spotify player": in the song page's left column (`src/pages/song/[id].astro`).
- **D-006** "Wikimedia Commons, free-licensed": the same photographs, served larger (`src/components/PhotoPanel.astro`).
- **D-007** "The link and a preview in our words": in the words card (`src/components/Words.astro`).
- **D-033** "Lyrics are summarised, not quoted": the summary in the words card (`src/components/Words.astro`).
- **D-034** "All 277" and **D-035** "The same page as his own songs": every track's song gets the two-column page (`src/pages/song/[id].astro`).
- **D-036** "Up to 1200 px, two columns", **D-037** "One era fills the screen" (with scrolling), **D-038** "Select it, and show its panel": as built in steps 2, 3 and 5 (`src/styles/site.css`, `src/components/EraSpread.astro`, `src/components/MapView.astro`).
- Earlier accepted calls whose lines this changed (`reel check --base 63dbee5`): photos by kind (the first build's A18), lyrics opening in a new tab (A11), previous and next song (A16), the threads (A7), search's typo forgiveness (A14), the full track list (A17) and Spotify by title (A8) are all kept as they were; their lines moved into the new layouts.

## Code check

Findings: `code-check/findings.md` (6 steps ✓, 18 decisions ✓, 2 unexplained ✗).

- **`src/pages/song/[id].astro`** ("Takes on the album", "Also on …"): ✗ not this plan's: they are the every-song plan's (its A9 and step 4), built in the same commit `1b32857` because both plans changed the song page; this plan kept them in the new layout.
- **`src/pages/map-panel.json.ts`** (the panel's data shape): ✗ answered by A25. Step 5 already had its question for the reviewer (question 4).
