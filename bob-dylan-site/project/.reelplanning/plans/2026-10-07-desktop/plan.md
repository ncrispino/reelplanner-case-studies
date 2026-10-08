# The Dylan site on a computer: full-window eras, two-column pages, and a map you can click

**In one sentence:** on a laptop or desktop, each era fills the whole window in its own look, album and song pages
use the width for a second column of covers, players and connections, threads and the map sit together without a
toggle, and every dot on the map opens its song, on a computer and on a phone.

## The problem

The owner, after opening the built site on a computer:

> "we need a new plan to make this work better on a computer. right now there is poor formatting (e.g., themes not
> going on full page, the side by side threads and map) and functionality (e.g., can't press a dot on the thread
> map, still a button to change cards that can be clicked), as a lot was meant for a phone. we need to fill in more
> and fix it so it looks great on a computer too"

### What we have

The site from the plan `2026-10-06-dylan-site`: 802 pages, built for a phone first. On a 1440 × 900 window,
every page is that phone layout in a column 720 px wide in the middle (`.page { max-width: 720px }`), with half
the window empty:

- **The home page:** the era's look (its colours, texture and photo frame) stops at the column's edges; the rest
  of the window is a plain paper colour. You move between eras by clicking the thin strip at the top or with the
  arrow keys, which only work once the panel has focus.
- **A thread:** the cards and the map sit side by side, each about 330 px wide. The map is a tall, thin strip
  whose labels are too small to read, and the **Cards | Map** toggle is still there although both are showing.
- **The map:** clicking a dot does nothing. Tried on 2026-10-07 at 1440 × 900 and at phone size: the address stays
  on the map. The map takes the pointer as soon as it is pressed (so that dragging works), and the click then lands
  on the map instead of the dot's link. This is broken on phones too. The mouse wheel over the map zooms it, so the
  page stops scrolling while the pointer is over it.
- **Album, song and moment pages:** one column; the players, the words and the connections come one under another,
  so a song page is 2,500 px tall on a screen with room for two columns.

## What changes

Three changes, in six steps.

1. **The map works** (step 1): a click or a tap on a dot opens its song, the wheel scrolls the page unless you
   ask it to zoom, and hovering a dot names it. This is a fix; it stands alone and lands first.
2. **A layout for wide screens** (steps 2 to 4): from 1100 px wide the shell gets a header with a search field,
   the era's look fills the whole window, the home page shows one era per screen, and album, song and moment pages
   have two columns. Phones keep today's layout, unchanged.
3. **Threads, the map, search and a check for computers** (steps 5 and 6): a thread's cards run along a row of
   years with the map below them, the map page gets a side panel for the song you clicked, search shows its groups
   side by side, and a new desktop check fails the build when a page looks or works like a phone page on a computer.

Step 1 stands alone. Steps 3 to 6 need step 2's wide layout; they stand alone from each other.

## Steps

### Step 1 — The map: every dot opens its song, on a computer and a phone

*Stands alone.*

**It lets you:** click or tap any dot on the map, on the thread page or the map page, and land on that song's page;
scroll past the map without it zooming; and see a dot's name and era by hovering over it.

Today the map calls `setPointerCapture` the moment a pointer goes down on it, so that a drag keeps working when the
pointer leaves the map. That also sends the click that follows to the map instead of to the dot under the pointer,
and the dot's link never opens. The fix takes the pointer only once it has moved more than 4 px, so a press and
release without moving is a plain click on the dot. The click opens the song on a phone and on the small maps of a
thread or a song page; on a computer's full map page, what it does is question 3. Each dot also gets an invisible ring 14 px across around it,
so a dot is easy to hit on a phone (44 px with the map's zoom on a phone) and with a mouse.

The mouse wheel scrolls the page, as it does everywhere else. The map zooms with the wheel only while Ctrl or ⌘ is
held (as a trackpad pinch sends it), or with **+** and **−** buttons in its corner. On a computer, hovering a dot
shows its title, artist or album, and year in a small label beside it, and lights its lines.

#### Cases

| Case | Example | What happens | Trace |
|---|---|---|---|
| Click a dot | "Nottamun Town" on `/map/masters-of-war/` | its song page opens | you click: the dot; map: no drag, so the link opens; you see: `/song/nottamun-town/` |
| Tap a dot on a phone | the same dot at 375 px | its song page opens | you tap: the dot; you see: its page |
| Drag | press, move 30 px, release | the map moves; no page opens | you drag; map: takes the pointer past 4 px; you see: the map moved |
| Wheel over the map | scroll down with the pointer on the map | the page scrolls past the map | you scroll; map: lets it through; you see: the page move |
| Zoom | Ctrl + wheel, or **+** | the map zooms around the pointer | you press: +; you see: bigger dots and labels |
| Hover | the pointer on "Lord Randal" | "Lord Randal · traditional" beside it, its line lit | you hover; you see: the label |

#### Interface

```
src/islands/map.ts        # the map island
  pointerdown             # remembers where; takes no pointer yet
  pointermove > 4 px      # starts a drag and takes the pointer
  click                   # follows the dot's link unless a drag happened
  wheel                   # zooms only with Ctrl or ⌘; otherwise the page scrolls
  .zoom + / −             # two buttons in the map's corner, 44 px each
  hover label             # title · album or artist · year, on screens with a mouse
tools/check-phone.mjs     # also taps a dot on /map/masters-of-war/ and fails unless a song page opens
```

#### Example

On `/thread/faith/` you click "Gotta Serve Somebody" on the map. Its page, `/song/gotta-serve-somebody/`, opens.
Back on the thread, you scroll down with the pointer over the map and the page scrolls past it. You hold Ctrl and
scroll up; the map zooms in around the pointer.

```diagram
state: A pointer on the map
[*] -> pressed: you press on a dot | nothing is taken yet
pressed -> opened: you release without moving | the dot's link opens its song
pressed -> dragging: you move more than 4 px | the map takes the pointer
dragging -> [*]: you release | the map stays where you left it; no page opens
```

### Step 2 — The app shell on a wide screen: a header, the era's look across the window, room for two columns (question 1)

*Stands alone. Steps 3 to 6 build on it.*

**It lets you:** use the site on a computer as a site made for one: the era's look across the whole window, a
header with search always at hand, and pages that use the width instead of a phone column.

Three widths, decided by the window: a **phone** up to 767 px (today's layout, unchanged), a **tablet** from 768
to 1099 px (today's layout with wider margins), and a **desktop** from 1100 px. Everything below is for the
desktop width. Said plainly (from the plan review): the layout follows the window's width, not the device. A window
900 px wide, a small laptop window or a tablet held sideways, is in the middle band, so it gets the tablet layout:
today's single column and bottom bar, with more room at the sides. Only a window 1100 px or wider gets the header
and two columns.

- **A header** across the top replaces the centred tabs: the site's name on the left, **Eras**, **Threads**,
  **Map** and **About** in the middle, and a search field on the right. Typing in it and pressing Enter opens
  `/search/?q=…`; pressing `/` anywhere puts the cursor in it.
- **The era's look fills the window.** The era's background colour, texture and accent paint the whole page,
  header included, not only the column. On pages with no era (threads, search, about) the site's paper look fills
  it, as today.
- **A grid for the content**, as wide as question 1 decides (recommended: up to 1200 px), with a main column and a
  side column. Running text keeps a readable line of about 70 characters, whatever the width.

#### Cases

| Case | Example | What happens | Trace |
|---|---|---|---|
| A song page at 1440 px | `/song/like-a-rolling-stone/` | Going Electric's op-art black and white across the whole window, the header on it | you open: the page; shell: the era's theme on the page; you see: no plain margins |
| Search from anywhere | type "judas" in the header, Enter | the search page with the Manchester 1966 moment first | you type; shell: opens `/search/?q=judas`; you see: results |
| The `/` key | on any page | the cursor is in the header's search field | you press `/`; you see: the field focused |
| A tablet | 900 px wide | today's layout, with 48 px margins | you open: a page; you see: one column |
| A phone | 375 px | today's layout and bottom bar, unchanged | you open: a page; you see: what you see today |

#### Interface

```
src/layouts/Shell.astro     # the header from 1100 px; the bottom bar below 768 px
src/styles/site.css         # the shared styles: the widths below
  --page-max                # the content's widest width: question 1
  .wide                     # a two-column grid: main and side (side 320–380 px)
  .measure                  # running text, about 70 characters a line
  @media (min-width: 1100px)  # the desktop layout; nothing below it changes
src/themes/*.css            # each era's look moves from the column onto the whole page
```

#### Example

You open `/album/blonde-on-blonde/` at 1440 × 900. The whole window is Going Electric's black with its op-art
rings; the header across the top is on it, with "Search" at the right. The album's cover and the track list sit
side by side in the middle 1200 px. You press `/`, type "visions" and press Enter: the search page opens with
"Visions of Johanna" first.

```diagram
flow: Which layout a window gets
window width -> phone = phone, up to 767 px: bottom bar, one column | today's layout, unchanged
window width -> tablet = tablet, 768–1099 px: one wider column | today's layout with more margin
window width -> desktop = desktop, 1100 px and up: header, era look across the window, two columns | the new layout in steps 2 to 6
```

### Step 3 — The era timeline on a computer: one era fills the screen (question 2)

*Needs step 2.*

**It lets you:** move through Dylan's life on a computer one era at a time, each era filling the screen with its
photograph, its story, its albums and its moments, and step to the next era with an arrow, a key or the timeline.

On a desktop, the home page shows one era per screen (question 2, recommended A). Its photograph takes the left
half of the window, edge to edge, in the era's frame; its years, title and story take the right half. Below them, a
row of the era's album covers (each opens its album) and a short list of its moments with their years. The thin
strip at the top becomes a timeline across the whole width, 1941 to today, with each era's name under its stretch
and the current one lit.

Scrolling moves between eras too (the owner's note on question 2: "if we scroll down, it should get us to the next
era with a clean transition through scrolling, without needing to click the arrow"). The eras sit one under another,
each one screen tall, and the page snaps to the next era as you scroll down a screen and to the previous one as you
scroll up, so a scroll never stops halfway between two eras; the look crossfades as one era gives way to the next.
Large **‹** and **›** buttons at the window's sides, the ← and → keys (on the page, no focus needed) and the
timeline also move to the previous or next era. Said plainly: one era fills the screen at a time, and scrolling,
the arrows, the keys and the timeline all go to the era before or after it. The look crossfades as you move, and the address becomes
`/era/<id>/` so back and a shared link work. Photos are served at up to 2000 px wide for this layout (Wikimedia
or the original's own width when it is smaller).

#### Cases

| Case | Example | What happens | Trace |
|---|---|---|---|
| Open the home page | `/` at 1440 × 900 | Duluth and Hibbing: the Iron Range photo on the left, the story on the right | you open: `/`; you see: one era, full window |
| Next era | press → | Greenwich Village slides in, its typed-flyer look crossfades in | you press: →; timeline: next; you see: `/era/village/` |
| Jump with the timeline | click "Gospel" on the timeline | the Gospel era, its revival-handbill look | you click: Gospel; you see: `/era/gospel/` |
| An album on the era | click *Slow Train Coming* in the row | the album page | you click: the cover; you see: `/album/slow-train-coming/` |
| An era with no photo of Dylan | Back to the Roots | the place photo or the covers collage fills the left half, as on a phone (D-006) | you see: no empty half |

#### Interface

```
src/components/Timeline.astro   # from 1100 px: one era per screen, ‹ › buttons, a full-width timeline
src/components/EraSpread.astro  # new: one era's photo, story, album row and moments, for the desktop
src/islands/timeline.ts         # ← → on the page; the address follows the era
src/components/PhotoPanel.astro  # photo sizes 480, 800, 1200, 2000 px
```

#### Example

At 1440 × 900 you open the site. Duluth and Hibbing fills the screen in its rust and slate. You press → twice:
Going Electric arrives, the window turns black with its op-art rings, Daniel Kramer's 1965 photo on the left and
"In 1965 Dylan traded solo acoustic folk for a rock band…" on the right, with *Bringing It All Back Home*,
*Highway 61 Revisited* and *Blonde on Blonde* in a row under it.

```diagram
flow: Moving through the eras on a computer
era = one era, full window -> next = the next era: → or › | the look crossfades; the address changes
era -> jump = any era: click its name on the timeline
era -> album = an album page: click a cover in the row
era -> moment = a moment: click it in the list
```

### Step 4 — Album, song and moment pages in two columns

*Needs step 2.*

**It lets you:** see a song's cover, players and words at a glance on a computer, with its connections and its
place on the map beside them instead of a long scroll; and see an album or a moment the same way.

- **A song page** has a left column that stays in place as you scroll: the cover, the title, the note, the themes
  and the players (Spotify and YouTube, D-005). The right column has the words card (preview, summary and the lyrics
  link, D-007, D-033), the connections as a grid of cards two across, and a small live map of the song's neighbours
  (the map from step 1, clickable). Under both, the previous and next songs on the album.
- **An album page** has the cover large (up to 480 px, the real cover, D-003) with the era tag and "why it matters"
  on the left, the full track list on the right, and a row "Also in this era" with the era's other albums.
- **A moment page** has its clip or photograph large on the left and its story on the right, with the songs it
  is tied to under it.

#### Cases

| Case | Example | What happens | Trace |
|---|---|---|---|
| A song with connections | "Masters of War" | left: cover, note, players; right: words, 4 connection cards, the map of its neighbours | you open: the page; you see: both columns in one screen |
| A song with no connections | "I Believe in You" | the right column has the words card and no connection cards or map | you open: the page; you see: the words, then the next song on the album |
| A long summary | "Murder Most Foul" | the left column stays in place while the right scrolls | you scroll; you see: the players stay |
| An album | *Blonde on Blonde* | the cover at 480 px beside the 14 tracks; "Also in this era" with *Bringing It All Back Home* and *Highway 61 Revisited* | you open: the album; you see: cover and tracks side by side |
| A moment with a clip | Newport 1965 | the clip large on the left, the story right | you open: `/moment/newport-1965/`; you see: the clip beside the story |

#### Interface

```
src/pages/song/[id].astro     # .wide: left (sticky) cover, note, themes, players; right words, connections, map
src/pages/album/[id].astro    # .wide: left cover and why it matters; right track list; then "Also in this era"
src/pages/moment/[id].astro   # .wide: left clip or photo; right story and its songs
src/components/MapView.astro  # a small mode, 360 × 300, for the song page
```

#### Example

At 1440 × 900 you open "Like a Rolling Stone". On the left, the *Highway 61 Revisited* cover, "Released as a single
in July 1965 at over six minutes…", **Loss** and **Freedom**, and the Spotify player. On the right, the words card,
then four connection cards, two across, then a small map with the song in the middle; you click "The Rolling
Stones" on it and their version's page opens.

```diagram
compare: A song page at 1440 px
before: one 720 px column: cover, note, words, players, connections, one under another (2,500 px)
after: two columns: cover, note and players stay on the left; words, connections and a small map on the right
```

### Step 5 — Threads and the map on a computer: cards along the years, the map below, a panel for the song you click (question 3)

*Needs steps 1 and 2.*

**It lets you:** see a whole thread at once on a computer, its cards along a row of years with the map under them,
and explore the map in a full window with the song you clicked described beside it.

- **A thread** on a desktop shows its cards in a row along a line of years, four on screen at once, with **‹ ›**
  to move along and the year between cards drawn as the gap on the line. The map is under the cards, the full
  width of the content and 520 px tall. Hovering a card lights its dot; the **Cards | Map** toggle is gone at this
  width, because both are showing. On a phone the toggle stays, as today.
- **The map page** (`/map/`, `/map/<song>/`) fills the window under the header. Clicking a dot selects it
  (question 3, recommended A): a side panel shows its title, era, cover, preview and connections, with **Open the
  song ›**; a double-click opens it directly. The era legend becomes a filter: click an era to dim the others.
- **The threads list** shows its twelve threads as a grid of cards, three across, each with the covers of its
  first songs.

#### Cases

| Case | Example | What happens | Trace |
|---|---|---|---|
| A thread at 1440 px | "Faith" | 4 of its 10 cards, Gates of Eden 1965 first, the map under them | you open: `/thread/faith/`; you see: cards and map, no toggle |
| Hover a card | "Gotta Serve Somebody" | its dot lights on the map below | you hover; you see: the dot lit |
| Click a dot on the map page | "Nottamun Town" | the side panel: traditional, its note, 1 connection (Masters of War), **Open the song ›** | you click: the dot; map: selects; you see: the panel |
| Filter by era | click "Gospel" in the legend | the other eras' dots dim | you click: Gospel; you see: only the Gospel dots bright |
| A phone | "Faith" at 375 px | cards, with the Cards \| Map toggle, as today | you see: today's thread |

#### Interface

```
src/components/ThreadCards.astro  # from 1100 px: a row along the years, ‹ ›, the map under it; no toggle
src/pages/map/[id].astro          # from 1100 px: the map fills the window; a side panel
src/components/MapPanel.astro     # new: the selected song: title, era, cover, preview, connections, Open
src/islands/map.ts                # select on click (desktop, question 3), open on double-click; era filter
src/pages/threads/index.astro     # a grid of thread cards, three across
```

#### Example

At 1440 × 900 you open "Faith". Gates of Eden (1965), I Dreamed I Saw St. Augustine (1967), The Wicked
Messenger (1967) and Gotta Serve Somebody (1979) are along the line of years, the map under them. You click "Gotta
Serve Somebody" on the map: the panel says Gospel, 1979, "Whoever you are and however high you rise, you will end
up answering to one master or another.", its 2 connections, and **Open the song ›**. You click it and the song page
opens.

```diagram
sequence: Clicking a dot on the map page (question 3, A)
you -> map: click a dot
map -> panel: show its title, era, preview, connections
you -> panel: Open the song ›
panel -> song page: open it
```

### Step 6 — Search and About on a computer, and a desktop check

*Needs step 2.*

**It lets you:** see search results grouped side by side on a computer, and trust that every page has been looked
at on a computer before it ships, with a check that fails when one still looks or works like a phone page.

- **Search** on a desktop shows its groups in three columns: Eras and Moments, Albums, Songs. Typing in the header's
  field (step 2) and pressing Enter opens it.
- **About** puts its sections (sources, credits, what the site leaves out) in two columns.
- **The desktop check** (`tools/check-desktop.mjs`, new) is the only check that looks at the site at computer
  sizes; the phone check only ever opens pages at 375 px, where the Cards | Map button belongs. So a problem that
  shows only on a computer, such as that button left showing beside the map, fails the desktop check and nothing
  else. It opens the same 12 views as the phone check at 1440 × 900
  and 1100 × 800, saves screenshots to `checks/desktop/`, and fails on: a page that scrolls sideways; a control
  showing that does nothing at that width (the Cards | Map toggle); an era page whose window background is not the
  era's; content narrower than 60 % of the window on a page meant to be wide; a map dot that, clicked, neither
  opens a song nor selects it; and any error. `npm test` runs the data check, the phone check and the desktop check.

#### Cases

| Case | Example | What happens | Trace |
|---|---|---|---|
| Search at 1440 px | "1966" | three columns: 2 moments; 1 album, *Blonde on Blonde*; the 1966 songs | you type: 1966; you see: three columns |
| A clean build | `npm test` | data ✓, phone ✓ 12 views, desktop ✓ 24 views (12 × 2 sizes) | you run: npm test; it prints: three ✓ |
| A leftover toggle | the toggle shows on `/thread/faith/` at 1440 px | the check fails, naming the page and the control | check: finds it; prints: ✗ thread at 1440 × 900: "Cards \| Map" shows while both views do |
| A plain margin | an era's look stops at 1200 px | the check fails | check: window background ≠ era background; prints: ✗ era at 1440 × 900 |

#### Interface

```
node tools/check-desktop.mjs    # 12 views × 1440 × 900 and 1100 × 800; screenshots in checks/desktop/
  ✓ 24 views at 1440 × 900 and 1100 × 800, screenshots in checks/desktop/
  ✗ <view> at <size>: <what is wrong>     # exit 1
npm test                        # the data check, then the phone check, then the desktop check
src/pages/search/index.astro    # three columns from 1100 px
src/pages/about.astro           # two columns from 1100 px
```

#### Example

You run `npm test` after a change to the thread page. It prints `✓ 11 eras, 39 albums, 255 songs…`, then
`✓ 12 views at 375×812`, then `✗ thread at 1440 × 900: "Cards | Map" shows while both views do`, and exits 1. You
hide the toggle from 1100 px, run it again, and all three pass.

```diagram
flow: What npm test runs
npm test -> data = the data check: ids, links, credits, summaries
data -> phone = the phone check: 12 views at 375 × 812, a dot tap opens a song
phone -> desktop = the desktop check: 12 views at 1440 × 900 and 1100 × 800 | fails on a phone page on a computer
desktop -> pass = all three ✓
desktop -x fail = exit 1, naming the view, the size and what is wrong
```

## Components touched

- **The app shell**: `src/layouts/Shell.astro`, `src/styles/site.css`, `src/themes/*.css` (step 2).
- **The era timeline**: `src/components/Timeline.astro`, a new `EraSpread.astro`, `PhotoPanel.astro` (step 3).
- **Album and song pages**: `src/pages/song/`, `album/`, `moment/` (step 4).
- **Threads**: `src/islands/map.ts` (steps 1, 5), `ThreadCards.astro`, `MapView.astro`, a new `MapPanel.astro`,
  `src/pages/map/`, `src/pages/threads/` (step 5).
- **Search**: `src/pages/search/index.astro` (step 6).
- **The phone check**: `tools/check-phone.mjs` also taps a dot (step 1).
- **The desktop check** (new): `tools/check-desktop.mjs` (step 6).

## Open questions for the reviewer

None: all three were answered in the review of 2026-10-07, each with the recommendation, and the plan above is
written for those answers: question 1, **up to 1200 px, two columns** (D-036); question 2, **one era fills the
screen** (D-037), with the owner's note that scrolling moves to the next era (step 3); question 3, **select it, and
show its panel** (D-038).

Asked during the build (step 5 reached its fifth choice):

4. **On a computer, should the full map offer a way to the thread cards? (step 5)** On a computer the Cards | Map
   toggle is gone everywhere, so `/map/masters-of-war/` has no way to the cards; on a phone, its "Cards" opens a
   thread from that song.
   - **A · Add "A thread from Masters of War ›" to the map page's header.** One link, beside the title. Costs: one
     more control on a full map.
   - **B · No link: open the song from the panel, then "Start a thread from here".** What is built. Costs: two clicks.
   - Recommended: **A**.

## Decisions in force

- **D-001** "which can produce a sophisticated website… graceful and visually appealing, while fully featured?":
  kept as answered (Astro, a page per song); every page stays an Astro page, with the wide layout added in CSS and
  the same islands. (all steps)
- **D-002** "All 39 albums, 16 in full": kept; the same albums and songs, laid out wider. (step 4)

- **D-003** "The real covers": kept; the album page shows the real cover larger, and the drawn cover still
  stands in when one fails to load. (step 4)
- **D-005** "An embedded Spotify player": kept; it sits in the song page's left column on a computer. (step 4)
- **D-006** "Wikimedia Commons, free-licensed": kept; the same 26 photos, served larger for the full-screen era.
  (step 3)
- **D-007** "The link and a preview in our words": kept, in the song page's right column. (step 4)
- **D-034** "All 277" (the plan every-song): kept; every album track has its own song page, so the two-column
  song page is built for all of them, and an album page's rows all link. (step 4)
- **D-035** "The same page as his own songs": kept; another writer's song gets the same two-column page, with its
  "Words by" line in the words card. (step 4)
- **D-033** "Lyrics are summarised, not quoted": kept; the summary shows in the words card, and nothing quotes the
  lyrics. (step 4)

## Supersedes

None.
