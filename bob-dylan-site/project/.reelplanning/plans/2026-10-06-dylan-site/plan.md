# Bob Dylan, explored: a phone-first site of eras, albums, songs and how they connect

**In one sentence:** you can open the site on a phone, swipe through Dylan's life era by era, each era with its own
look and real photographs, tap into any album or song, hear it on the page, and follow a song's connections (the
folk tune it borrowed, the cover that changed it, the later song that answers it) as cards or on a map.

## The problem

The owner:

> "I want someone to be able to explore his life and music — the different eras, the albums, the songs and how
> they connect — in a way that's more engaging than reading a Wikipedia article, and it should work well on a
> phone. Start from scratch in this empty folder."

And from the first review of this plan:

> "which can produce a sophisticated website that is graceful and visually appealing, while fully featured? can
> you detail more visually the differences?"

> "we are going to want good per-era theming, as well as real images. else the site is too plain, just
> procedural"

> "can we link to a website with lyrics and give a preview?"

> "actually wondering if we *can* access the map on phone too if we want; just the default will be the cards,
> but we can toggle"

> "we might want youtube videos for particular songs or events that aren't on spotify or that we want to
> explicitly show"

### What we have

Nothing built: the folder holds `git` and `.reelplanning/`. Four answers from the first review are now decided:
all 39 studio albums with 16 in full (D-002), the real album covers (D-003), threads plus a map (D-004, widened
below), and an embedded Spotify player (D-005).

### What a Wikipedia article does badly

- **It is one long page.** Sixty-five years, 39 studio albums and hundreds of songs, read top to bottom. You
  cannot see the shape of a career at a glance.
- **Connections are buried in prose.** That "Blowin' in the Wind" takes its tune from the slave song "No More
  Auction Block" sits in a paragraph on one page and is never linked to the other end.
- **It all looks the same.** 1963 and 1979 get the same grey page; nothing tells you the gospel years felt
  different from the electric ones.
- **On a phone it is a wall of text** with tables that scroll sideways.

## What changes

Three changes, in six steps.

1. **A site with no server, built for a phone** (step 1): an Astro site, a real page per era, album and song,
   built once into plain files that go on any static host.
2. **One dataset holds everything** (step 2): eras, moments, albums, songs, connections, threads, and the media
   each one points to (covers, photographs, Spotify and YouTube ids, a link to the official lyrics), checked by a
   script so nothing points nowhere.
3. **Four ways to explore it, each era with its own look** (steps 3 to 6): the era timeline, themed per era with
   real photographs; a page per album and per song with its cover, its lyrics link and its player; threads as
   cards with a map one tap away; and search.

Step 2 needs step 1's project; steps 3 to 6 each read step 2's dataset and stand alone from each other.

## Steps

### Step 1 — The app shell: an Astro site for a phone, a real page per album and song

*Stands alone.*

**It lets you:** open the site on a phone, move between its views with a bottom bar and the back button, and see
each view slide or morph into the next instead of blinking.

The **app shell** is the layout every page shares: the bottom bar, the era theme, and the transitions. The site
is built with **Astro** (your answer to question 1, in the review of 2026-10-07): every era, album and song is a
real page at its own address, `/album/blonde-on-blonde/`, `/song/like-a-rolling-stone/`, so the back button, a
shared link and search engines all work. The timeline's swipe, the map and the players are interactive pieces
(Astro "islands") placed on those pages.

Moving between pages is animated with Astro's View Transitions: tap an album cover on the timeline and the cover
grows into the album page's header; go back and it shrinks home. Phones that ask for less motion get a plain
cross-fade. The timeline keeps the era you were on when you come back (`/era/<id>/`).

The layout is designed at 375 px wide first. A bar fixed at the bottom has four tabs (**Eras**, **Threads**,
**Search**, **About**), each at least 44 px tall. Nothing scrolls sideways except the era timeline, which is
meant to.

`npm run build` writes `dist/`: one HTML page per era, album and song, about 260 in all, plus their images in
three sizes with blurred placeholders. Plain files that go on GitHub Pages; no server runs.

#### Cases

| Case | Example | What happens | Trace |
|---|---|---|---|
| First visit | open `https://…/` | the timeline, at the first era | you open: `/`; you see: the Eras tab, first panel |
| A shared link | open `…/song/like-a-rolling-stone/` | the song page, directly | you open: the link; host serves: that page; you see: its song page |
| Tap a cover | *Blonde on Blonde* on the Going Electric panel | the cover grows into the album page's header | you tap: the cover; shell: a view transition; you see: the album page |
| Back button | album page → song page → back | the album page again, where it was | you press: back; shell reads: the old route; you see: the album page |
| Less motion | the phone asks for reduced motion | views cross-fade, nothing grows or slides | you tap: a cover; you see: a fade |
| A page that does not exist | `/album/blonde-on-blond/` | the site's 404 page, with search open on "blonde on blond" | host: no such page; you see: not found and results |

#### Interface

```
astro.config.mjs      # the Astro project; output: static
src/layouts/Shell.astro   # the shared layout: bottom bar, era theme, View Transitions
src/pages/                # one file per kind of page, each built once per record
src/islands/*.ts      # the interactive pieces: timeline swipe, map, players, search
npm run dev           # the site on a local address, reloading as you edit
npm run build         # writes dist/: one HTML page per era, album and song
  /                   # the era timeline (step 3)
  /era/<id>/          # the timeline, opened at that era
  /album/<id>/        # an album page (step 4)
  /song/<id>/         # a song page (step 4)
  /moment/<id>/       # a moment, with its clip if it has one (step 6)
  /threads/           # the list of threads (step 5)
  /thread/<id>/       # one thread, at its first song
  /map/[<song-id>/]   # the connection map, centred on a song (step 5)
  /search/?q=<text>   # search (step 6)
  /about/             # sources, credits, and what the site does not include
  /404.html           # not found, with search
```

#### Example

On a phone you open `…/era/electric/`. The panel shows *Highway 61 Revisited*'s real cover. You tap it; the
cover grows into the header of `/album/highway-61-revisited/`. You tap "Like a Rolling Stone"; the address
becomes `/song/like-a-rolling-stone/`. You press back twice and the cover shrinks back into the panel you started on.

```diagram
flow: How a page is reached and shown
you open a link -> page = the host serves its page: it exists | one HTML page per era, album and song, built ahead
you open a link --> notfound = 404 + search: no such page | a typo in a shared link still leads somewhere
page -> island = interactive pieces start: swipe, map, players | only where the page has one
page -> transition = a view transition: you tap | the cover you tapped grows into the next page
transition -> page
```

### Step 2 — The dataset: what is in it, and what each record points to

*Needs step 1 (its project).*

**It lets you:** trust that every era, song, photo and video the site shows comes from one checked place, with
its source and credit.

All the content lives in `data/` as JSON files written by hand. Each kind of thing has its own file:

- **eras** (`eras.json`): a named stretch of his life with years, eleven of them, from "Duluth and Hibbing,
  1941–1960" to "Rough and Rowdy, 2020–". Each also names its **theme** (step 3) and its photographs.
- **moments** (`moments.json`): a dated thing that happened that is not a record: "1965, Newport Folk
  Festival: plays electric". A moment can carry a YouTube id when there is footage worth showing.
- **albums** (`albums.json`): year, era, why it matters, its songs, and its cover's id in the Cover Art Archive
  (D-003).
- **songs** (`songs.json`): album, year, a short note, themes, a Spotify id (D-005), an optional YouTube id, and
  a link to its official lyrics page on bobdylan.com. A song by someone else that a connection needs (a
  traditional tune, a cover) is a song too, marked `by`.
- **connections** (`links.json`): two songs, a kind (`borrowed-tune`, `answer`, `rewrite`, `covered-by`,
  `re-recorded`, `same-theme`) and one sentence of why.
- **threads** (`threads.json`): step 5's hand-written paths.
- **photos** (`photos.json`): each photograph's file, caption, photographer, licence and source page (step 3).

How much of the catalogue goes in is decided: all 39 studio albums, the 16 landmarks written in full (D-002).

**Lyrics: a link, a preview, and a short excerpt.** Each song links to its official lyrics page on bobdylan.com,
with a one-sentence preview written for the site (D-007). From the review of 2026-10-07, a song page may also
show a short excerpt of the words, at most two lines, attributed under it ("Words and music by Bob Dylan ·
© <publisher>") and linked to the official page; never the full lyrics. Song words are under copyright, and a
short attributed quote is often accepted but not guaranteed: the publisher can still ask for it to come down. So
excerpts live in one field, `excerpt`, and can be taken out of every page in one change.

**The data check** (`tools/check-data.mjs`) fails when a record points at an id that does not exist, an id is
used twice, an album's year falls outside its era, a photo has no licence or credit, or a lyric excerpt runs past two
lines or has no credit.

#### Cases

| Case | Example | What happens | Trace |
|---|---|---|---|
| A Dylan song | "Masters of War", 1963 | a song on *The Freewheelin' Bob Dylan*, with a Spotify id and a lyrics link | you write: `songs.json`; check: album lists it; you see: its page |
| Someone else's song | "Nottamun Town", traditional | a song with `by: "traditional"`, no album | you write: `by`; check: no album needed; you see: it at the end of a connection |
| A moment with footage | Newport, 1965 | the moment carries a YouTube id | you write: `youtube`; you see: the clip on the moment |
| A photo with no licence | `photos.json` entry without `licence` | the check fails and names it | it prints: the photo's id; exit 1 |
| A broken connection | `to: "blowin-in-the-wnd"` | the check fails and names the line | it prints: the bad id; exit 1 |

#### Interface

```
data/eras.json      # [{ id, title, years: [from, to], theme, summary, albums: [ids], moments: [ids], photos: [ids] }]
data/moments.json   # [{ id, year, title, text, era, youtube? }]
data/albums.json    # [{ id, title, year, era, why, songs: [ids], landmark, cover: <Cover Art Archive release id> }]
data/songs.json     # [{ id, title, year, album?, by?, note, themes, spotify?, youtube?, lyrics?, preview?, excerpt? }]
data/links.json     # [{ from, to, kind, why }]
data/threads.json   # [{ id, title, intro, steps: [{ song, why }] }]
data/photos.json    # [{ id, file, caption, year, photographer, licence, source }]
tools/check-data.mjs  # node tools/check-data.mjs
    ✓ 11 eras, 39 albums, 212 songs, 140 connections, 12 threads, 31 photos
    ✗ photos.json #7: "newport-1965" has no licence      (exit 1)
```

#### Example

`songs.json` has `{ "id": "blowin-in-the-wind", "title": "Blowin' in the Wind", "year": 1963, "album":
"freewheelin", "themes": ["protest"], "spotify": "…", "lyrics": "https://www.bobdylan.com/songs/blowin-wind/" }`.
`links.json` joins it to "No More Auction Block" (`borrowed-tune`, "a spiritual sung by freed slaves; he said
so himself in 1978"). The check finds every id and passes.

```diagram
flow: What the dataset holds
era -> album: lists
era -> moment: lists
era -> photo: shows
album -> song: lists
song -> song: connection | a kind and one sentence of why
song -> lyrics = the official lyrics page: links to
check = tools/check-data.mjs -x broken: a missing id or credit | the check stops the commit
```

### Step 3 — The era timeline: each era with its own look (question 2)

*Needs step 2.*

**It lets you:** swipe through his life as eleven panels and feel each era change: its colours, its type, its
photographs.

The **era timeline** is the home view. Each era is one full-width panel; you swipe sideways between them. A
strip on top shows all eleven eras, sized by their years; tap one to jump.

**Each era has its own theme**, kept in `src/themes/<era>.css`: a palette, a display typeface, and a texture,
drawn from the look of its records. For example:

- **Greenwich Village, 1961–1964:** off-white paper, black ink, a typewriter-style face, like a folk club flyer.
- **Going Electric, 1965–1966:** high-contrast black and amber, a condensed sans, a little blur on photos.
- **Gospel, 1979–1981:** warm red and gold, a serif with a revival-poster feel.
- **Rough and Rowdy, 2020–:** deep shadow and brass, a worn serif.

The theme follows you: an album or song page from that era wears its era's theme.

**Real photographs, and never a bare panel.** Each panel opens on a full-width photograph of Dylan from that era,
with its caption and credit underneath, from Wikimedia Commons (D-006). Covers come from the Cover Art Archive
(D-003). From the review of 2026-10-07, no panel is text alone: where Commons has no free photo of Dylan for an
era, the panel is filled, in this order, by
1. a free photograph of the place or the moment (Greenwich Village streets in the early 1960s, the Newport Folk
   Festival grounds, a 1970s tour bus), credited the same way;
2. the era's album covers set as a collage across the panel;
3. an illustration drawn for the site in the era's style: a folk-club flyer for 1961–64, a tour poster for
   the Rolling Thunder years, a revival handbill for the gospel years.

Images whose licence does not allow a public site are not used, even when they would look better: a photo
agency or a newspaper archive can and does ask for those to come down. The three fillers above keep every panel
full without them.

#### Cases

| Case | Example | What happens | Trace |
|---|---|---|---|
| Swipe | Greenwich Village → left | "Going Electric, 1965–1966" snaps in, its colours and type replace the last | you swipe: left; you see: the next panel in its own theme |
| Jump | tap the "Gospel" segment | the timeline scrolls to it | you tap: the segment; you see: the gospel panel |
| A photo | Greenwich Village | a 1963 photograph, credit under it | you see: the photo, caption and credit |
| An era with no photo of Dylan | Going Electric, 1965–1966 | a free photo of Newport's grounds, else the covers as a collage, else a drawn tour poster | panel: no Dylan photo; you see: the next filler, full width |
| Less motion | reduced motion | panels change without sliding | you see: an instant change |

#### Interface

```
/  and  /era/<id>/          # the timeline, at the first era or at <id>
src/themes/<era>.css        # one theme per era: --era-ink, --era-paper, --era-accent, --era-display-font, texture
strip                       # eleven segments, width by years, tap to jump
panel                       # photograph + credit, title, years, summary, moments, album covers
```

#### Example

You open the site and swipe twice. The page turns black and amber; a 1965 photograph fills the top of the
panel, credited under it; "Going Electric, 1965–1966" is set in a condensed face; below it, "1965 · Newport:
plays electric" and three real covers.

```diagram
state: Where you are on the timeline
[*] -> panel: you open the site
panel -> panel: you swipe | the next era snaps in in its own theme
panel -> panel: you tap the strip
panel -> album page: you tap a cover | the page keeps the era's theme
album page -> panel: back | the same era, where you left it
```

### Step 4 — Album and song pages: covers, lyrics links, and connections (question 3)

*Needs step 2.*

**It lets you:** tap any album to see its real cover and why it matters, and tap any song to read about it, open
its lyrics, and follow everything it connects to.

An **album page** shows the real cover (D-003), title, year and era, why it matters, and its songs. If the cover
fails to load, the page draws a typographic cover in the era's theme instead, so nothing shows broken.

A **song page** shows the title, album and year, the note, its themes, a **Lyrics** row that links to the
official lyrics page with the preview in our words (D-007) and, where one is set, a two-line excerpt credited
under it, the player (step 6), and then **Connections**:
one card per connection, its kind in plain words and its why, the other song tappable.

#### Cases

| Case | Example | What happens | Trace |
|---|---|---|---|
| A landmark album | *Highway 61 Revisited* | real cover, why it matters, 8 songs | you tap: the cover; you see: its page |
| A cover that fails | the archive does not answer | a typographic cover in the era's theme | page: the image fails; you see: the drawn cover |
| Lyrics | "Visions of Johanna" | a Lyrics row linking to bobdylan.com | you tap: Lyrics; you see: the official page, in a new tab |
| A song with connections | "All Along the Watchtower" | "Covered by Jimi Hendrix, 1968" and "He played it Hendrix's way, from 1974" | you open: the song; you see: 2 cards |
| Someone else's song | "No More Auction Block" | a short page with the connection back | you tap: the card; you see: its page |

#### Interface

```
/album/<id>/    # real cover (or the drawn one), title, year, era, why, songs
/song/<id>/     # title, album, year, note, themes, Lyrics row, player, Connections, Start a thread
lyrics row        # the preview in our words, an optional two-line credited excerpt, "Lyrics on bobdylan.com ↗"
connection card   # one per connection: its kind in words, the other song, the why; tap opens the other song
```

#### Example

You open "Blowin' in the Wind". It reads: *The Freewheelin' Bob Dylan*, 1963, in the Greenwich Village theme;
the note; a Lyrics row, "Lyrics on bobdylan.com ↗"; the Spotify player; and one card, "Borrowed the tune of —
No More Auction Block (traditional)". You tap the card; its page lists the one connection back.

```diagram
flow: From album to song to its connections
album page -> song page: tap a song
song page -> lyrics = bobdylan.com: Lyrics | opens the official page
song page -> other song: tap a connection card
song page -> thread: Start a thread from here
```

### Step 5 — Threads and the map: follow connections as cards, or see them all

*Needs step 2.*

**It lets you:** follow one idea, like "songs he borrowed", through his career one song at a time, or switch to a
map of how songs connect and move around it, on a phone too.

A **thread** is a path through songs that share something, in time order, shown as cards you swipe up through.
About twelve are written by hand in `data/threads.json`: "Borrowed tunes", "The protest years and after",
"Love gone wrong", "Faith", "The road", "America". "Start a thread from here" on a song page makes one from that
song's connections.

**The map** draws every song as a dot and every connection as a line (D-004). On a wide screen it sits beside
the cards. On a phone, cards are the default and a **Cards | Map** toggle switches; the phone's map opens on the
current song and its neighbours (two connections out, about 15 dots), and you pinch and drag to see more. Tap a
dot to open its song.

#### Cases

| Case | Example | What happens | Trace |
|---|---|---|---|
| A written thread | "Borrowed tunes" | 9 cards from "Song to Woody" (1962) to "Rollin' and Tumblin'" (2006) | you open: `/thread/borrowed-tunes/`; you see: card 1 of 9 |
| Map on a phone | the toggle on "Masters of War" | the map, centred on it, about 15 dots | you tap: Map; you see: its neighbourhood |
| Move on the map | drag left | more songs come into view | you drag; you see: the next songs |
| Map on a laptop | 1280 px wide | cards and the map side by side | you see: both |
| A thread from a song | "Start a thread" on "Girl from the North Country" | Scarborough Fair → the song → the 1969 duet with Johnny Cash | you tap: the button; you see: 3 cards |

#### Interface

```
/threads/                 # the list, each with its length and years
/thread/<id>/             # one card per step; swipe up for the next
/thread/from/<song-id>/   # a thread made from that song's connections
/map/[<song-id>/]         # the map, centred on a song
toggle                    # Cards | Map, on phones; both side by side above 768 px
```

#### Example

On a phone you are on card 3 of "Borrowed tunes", "Masters of War". You tap **Map**: the screen shows Masters of
War in the middle, Nottamun Town joined to it, and the 1963 songs around it. You drag right and the 1962 songs
come in; you tap "Song to Woody" and its page opens.

```diagram
state: Cards and map on a phone
[*] -> cards: you open a thread
cards -> map: you tap Map | the map opens on the song you were on
map -> map: you pinch or drag | more songs come into view
map -> song page: you tap a dot
map -> cards: you tap Cards
```

### Step 6 — Search, listening and watching, and checking it on a phone

*Needs step 2.*

**It lets you:** find any song, album, era or moment by typing, hear a song on its page, watch the footage that
matters, and know the site was checked at phone width before it shipped.

**Search** matches titles, albums, years and themes as you type, in the page. Results are grouped (Eras,
Moments, Albums, Songs).

**Listening** is Spotify's embedded player on each song page (D-005). It loads only when you tap Play, so a page
with no tap loads nothing from Spotify.

**Watching**: a song or moment with a YouTube id shows YouTube's player from `youtube-nocookie.com`, also only
after a tap: Newport 1965, "Subterranean Homesick Blues" from *Dont Look Back*, a live "Hurricane" from 1975.
These are chosen by hand where the footage matters or the song is not on Spotify.

**The phone check** (`tools/check-phone.mjs`) opens every view in headless Chrome at 375 × 812, saves a
screenshot of each to `checks/`, and fails on a sideways scroll, a tap target under 44 px, or a console error.
With the data check, it is what `npm test` runs.

#### Cases

| Case | Example | What happens | Trace |
|---|---|---|---|
| A title | type "tangled" | "Tangled Up in Blue", 1975 | you type: `tangled`; you see: 1 song |
| Play a song | "Like a Rolling Stone", tap Play | Spotify's player loads and plays | you tap: Play; page: loads the player; you hear: the song |
| Footage | the Newport 1965 moment | a YouTube player, after a tap | you tap: the clip; you see: the footage |
| A song not on Spotify | a song with only a YouTube id | the YouTube player in its place | you see: the YouTube player |
| A wide page | a view scrolls sideways at 375 px | the phone check fails and names it | it prints: the view and its width; exit 1 |

#### Interface

```
/search/?q=<text>        # results grouped: Eras, Moments, Albums, Songs
player row               # Spotify embed (D-005) after a tap; YouTube (youtube-nocookie.com) where an id is set
tools/check-phone.mjs    # node tools/check-phone.mjs
    ✓ 10 views at 375×812, screenshots in checks/
    ✗ /album/blonde-on-blonde/: page is 412 px wide      (exit 1)
npm test                 # check-data, then check-phone
```

#### Example

You type "newport". Results: the moment "1965 · Newport Folk Festival: plays electric". You open it; its page
has the clip. You tap it, and YouTube's player plays the footage in the page.

```diagram
flow: What runs before a commit
npm test -> data = check-data.mjs
data -> phone = check-phone.mjs: data is good
data -x stop: a broken id or a missing credit
phone -x stop: a sideways scroll or a small target | names the view
phone -> commit: all views pass
```

## Components touched

- **The app shell** (new): `index.html`, `src/app.ts`, `src/views/` (step 1).
- **The dataset** (new): `data/*.json` (step 2).
- **The data check** (new): `tools/check-data.mjs` (step 2).
- **The era timeline** (new): the home view and `src/themes/` (step 3).
- **Album and song pages** (new) (step 4).
- **Threads** (new): `data/threads.json`, the cards and the map (step 5).
- **Search** (new) (step 6).
- **The phone check** (new): `tools/check-phone.mjs` (step 6).

## Open questions for the reviewer

None: all three were answered in the review of 2026-10-07 (question 1 Astro, question 2 Wikimedia
Commons, question 3 a preview in our words), and the plan above is written for those answers.

Asked during the build (step 6 reached its fifth choice):

4. **Which songs and moments get a YouTube clip? (step 6)** Two have one now, both from Bob Dylan's official
   channel: "Subterranean Homesick Blues" (the Dont Look Back cue-card film) and the "Things Have Changed" video.
   No official upload of the Newport 1965 set turned up.
   - **A · Official uploads only.** What is there now; a clip that may vanish is never shown. Costs: Newport 1965 and
     most live moments have no clip.
   - **B · Official uploads, plus well-known unofficial ones.** Newport 1965, the 1966 "Judas" show, Rolling Thunder
     footage. Costs: unofficial uploads are taken down often, so clips break, and the site shows footage its owner
     did not post.
   - **C · No clips.** Spotify only. Costs: the moments that are about a performance have nothing to watch.
   - Recommended: **A**.

## Decisions in force

- **D-002** "All 39 albums, 16 in full": kept; the dataset holds every studio album, the 16 landmarks written in
  full. (step 2)
- **D-003** "The real covers": kept; album covers come from the Cover Art Archive, with a drawn cover in the era's
  theme when one fails to load. (steps 3, 4)
- **D-005** "An embedded Spotify player": kept; it loads after a tap, and curated YouTube clips sit beside it.
  (step 6)
- **D-006** "Wikimedia Commons, free-licensed": kept, with no panel ever text alone: free photos of the place or
  moment, the covers as a collage, or an illustration drawn for the site fill an era with no photo of Dylan.
  (step 3)
- **D-007** "The link and a preview in our words": kept, and widened by the review's comment to allow a two-line
  credited excerpt in its own field. (steps 2, 4)

## Supersedes

- **D-001** "which can produce a sophisticated website that is graceful and visually appealing, while fully
  featured? can you detail more visually the differences?": not a choice of option; question 1 was asked again
  and answered in the review of 2026-10-07: **C · Astro, a page per song** (step 1).
- **D-004** "Threads, plus a map on wide screens": widened from the review's own comment, so the map is on phones
  too, behind a Cards | Map toggle, opening on the current song's neighbours (step 5).
