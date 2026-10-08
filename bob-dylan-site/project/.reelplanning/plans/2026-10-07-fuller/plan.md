# A fuller site: more to read, more to see, more to do on every page

**In one sentence:** era, moment, album and song pages each get more of their story (longer writing in our own words,
more photographs, the album's own player, links out), and the width of a computer screen is used for it, without
crowding the page.

## The problem

The owner, reviewing the walkthrough of the desktop plan:

> "i also think that some on the desktop feels kind of bare; we might need more content. like the sides of the page
> are still kind of empty, and especially the biogrpahy pages with no other contents. they should have links, photos,
> etc. and same with album pages, some song pages. now i dont want it cluttered, i just want more informaiton, more
> visuals, more interaction even. just so there's enough"

### What we have

The site from the plans `2026-10-06-dylan-site`, `2026-10-07-desktop` and `2026-10-07-every-song`: 11 eras, 41
moments, 39 albums and 538 songs, laid out for a computer in up to 1200 px (D-036). The pages are thin because the
writing and the pictures are thin:

- **An era** has a story of about 48 words and 1 to 3 photographs (26 in all; Gospel and Back to the Roots have one).
- **A moment** has 16 to 32 words, no photograph of its own, and a clip for 14 of the 41; the Newport 1965 page is a
  black clip box, three sentences and two album covers.
- **An album** has a "why it matters" of 15 to 56 words and its track list; no player for the album as a whole.
- **A song** has its note, preview, summary, players and connections; on a 1440 px window the 120 px either side of
  the content is empty, and a song with no connection has an empty right column under its words.
- **Nothing links out:** no Wikipedia, no MusicBrainz, no other source to read on.

## What changes

Three changes, in six steps.

1. **More to read and see** (steps 1 and 2): longer writing for eras, moments and albums, and more photographs for
   eras and moments, under the same rules as now (our own words, never lyrics, free-licensed photos with credits).
2. **Pages that use it** (steps 3 and 4): era and moment pages built around their photographs, story and timeline;
   album and song pages with the album's player, its essay and a track list that opens in place.
3. **The width and the way out** (steps 5 and 6): what fills the sides of a wide window, and links to Wikipedia and
   MusicBrainz, with checks that keep it all honest.

Steps 1 and 2 stand alone; steps 3 and 4 need them; steps 5 and 6 stand alone.

## Steps

### Step 1 — Longer writing for eras, moments and albums (question 3)

*Stands alone.*

**It lets you:** read an era's story in a few short sections, what a moment was and why it mattered, and how an album
was made and received, without leaving the site.

The writers who wrote the 271 new songs write, under the same brief (our own words, never a lyric, only facts they
are sure of, a plainer true sentence over a vivid wrong one): an era's story in three short sections, "what happened",
"the music", "what it led to" (about 250 words in all, question 3); a moment's story (about 120 words: what happened,
why it mattered, what came after); an album's essay (about 150 words: how it was made, how it sounds, how it was
received). They go into `data/sources/stories.json`, merged as `story` (eras), `long` (moments) and `essay` (albums);
the short texts stay as each page's opening line. The data check holds each to its length and fails on a quotation
that is not a title.

#### Cases

| Case | Example | What happens | Trace |
|---|---|---|---|
| An era | Going Electric | three sections, about 250 words, after its opening line | writers write: the story; check: length, no quote; you see: the era page |
| A moment | Newport 1965 | about 120 words: the set, the reaction, what it changed | writers write; you see: the moment page |
| An album | Blood on the Tracks | about 150 words: New York and Minneapolis sessions, its sound, its reception | writers write; you see: the album page |
| A fact a writer is unsure of | a session date | left out | writer: leaves it out; you see: the plainer sentence |
| A quoted lyric | any | the data check fails | check: a quotation that is not a title; prints: ✗ |

#### Interface

```
data/sources/stories.json    # { eras: { id: { happened, music, ledTo } }, moments: { id: "…" }, albums: { id: "…" } }
era.story                    # three sections, about 250 words in all (question 3)
moment.long                  # about 120 words
album.essay                  # about 150 words
node tools/check-data.mjs    # ✗ <file> "<id>" story is <n> words, not <from> to <to>
```

#### Example

Going Electric's page opens with its line ("In 1965 Dylan traded solo acoustic folk for a rock band…"), then three
short sections: how the switch happened, what the three albums sound like, and what it led to, from Newport to the
1966 tour and the motorcycle accident.

```diagram
flow: From the writers to a page
brief = the writers' brief: our own words, no lyrics -> stories = stories.json | eras, moments, albums
stories -> check = the data check: length, no quotation
check -> page = the era, moment and album pages
```

### Step 2 — More photographs for eras and moments

*Stands alone.*

**It lets you:** see each era in three to five photographs and most moments in one of their own.

The photo search that found today's 26 runs again (D-006: Wikimedia Commons, free-licensed, credited): for each era
up to five in all, a photograph of Dylan first, then the places and people of the era; for each moment one photograph
of the event, its place or its people where Commons has one. Each keeps its licence, author and source, and the data
check fails on a photograph without them.

#### Cases

| Case | Example | What happens | Trace |
|---|---|---|---|
| An era with one photo | Gospel | up to four more from the 1979–1981 tours | search: Commons; check: licence and credit; you see: a gallery |
| A moment with a photo on Commons | Live Aid 1985 | its photograph on the moment page | search: Commons; you see: the photo with its credit |
| A moment with none | a 1960s recording session | no photo; the era's photo stands in, as on the timeline | search: none found; you see: the era's photo |
| A photo with no licence | any | not used | check: no licence; prints: ✗ |

#### Interface

```
tools/find-photos.mjs     # Commons search for eras (up to 5) and moments (1 each); writes data/photos.json
photo.moment              # the moment a photo belongs to, when it is one
node tools/check-data.mjs  # ✗ photos.json "<id>" has no licence | no credit
```

#### Example

Gospel goes from one photograph (Toronto, 1980) to up to five, and Live Aid 1985 gets its own photograph with its
author and licence under it.

```diagram
flow: Where a photo comes from
search = Commons search -> photo = a photo with licence and credit | kept only with both
photo -> era = an era's gallery: up to 5
photo -> moment = a moment's own photo
search --> none = no photo: the era's stands in
```

### Step 3 — Era and moment pages built around their story

*Needs steps 1 and 2.*

**It lets you:** move through an era as a short illustrated story, and open a moment as a page of its own with its
photograph or clip, its story and what was around it.

- **An era**, below its full-screen spread (D-037): its story in its three sections beside a photo gallery (click a
  photo to see it large, with its credit); its albums as a row of covers with their years; its moments as a dated
  timeline, each with its photo or clip mark; "songs to start with", the era's six most connected songs with their
  previews; and the threads that pass through it.
- **A moment**: its photograph or clip large; its longer story; the moments just before and after on a small
  timeline; the songs and records from that year; and the era it belongs to.

#### Cases

| Case | Example | What happens | Trace |
|---|---|---|---|
| An era page, scrolled | Going Electric | story and gallery, albums, moments, songs to start with, threads | you scroll: below the spread; you see: five bands |
| A photo clicked | a Kramer photograph | it opens large over the page, with its credit; Esc closes it | you click; you see: the photo large |
| A moment with a clip | Newport 1965 | the clip large, the story, 1965's moments either side | you open: the moment; you see: clip and story |
| A moment with no photo or clip | a 1960s session | the era's photo stands in | you see: the era's photo, labelled as the era's |
| On a phone | Going Electric | the same bands, one under another | you scroll; you see: the bands stacked |

#### Interface

```
src/components/EraStory.astro    # the bands under an era's spread: story + gallery, albums, moments, songs, threads
src/components/Gallery.astro     # photos in a row; click opens one large (Esc, ← → move between them)
src/pages/moment/[id].astro      # photo or clip, long story, a timeline of the moments either side, the year's songs
```

#### Example

You scroll past Going Electric's spread. Its three sections sit beside four photographs; you click one and it opens
large with "1965 publicity photo · Daniel Kramer · Public domain" under it. Below: the three albums, the four
moments from Newport to the motorcycle accident, and "Like a Rolling Stone" first among the songs to start with.

```diagram
flow: An era page on a computer
spread = the full-screen spread -> story = story and gallery: you scroll
story -> albums = its albums
albums -> moments = its moments, dated
moments -> songs = songs to start with
songs -> threads = threads through it
```

### Step 4 — Album and song pages: the album's player, its essay, a track list that opens in place

*Needs step 1.*

**It lets you:** play a whole album on its page, read its essay, and open any track in place to read its preview and
play it, without leaving the album.

- **An album** gets Spotify's album player (question 1 of the plan `2026-10-06-dylan-site` chose Spotify, D-005), its
  essay beside "why it matters", a track list where clicking a row's arrow opens it in place (the song's preview, its
  themes and its player; "its page ›" goes on), the connections that start from its songs (covers, borrowed tunes),
  and the previous and next album of its era with their covers.
- **A song** gets "in threads" (the threads it is in, linked) and "the same year" (his other songs of that year), so
  a song with no connection still has a full right column.

#### Cases

| Case | Example | What happens | Trace |
|---|---|---|---|
| An album page | Blood on the Tracks | album player, essay, ten tracks, connections, previous and next album | you open: the album; you see: all of it |
| A track opened in place | "If You See Her, Say Hello" | its preview, themes and player under the row; "its page ›" | you click: the row's arrow; you see: the row open |
| A song with no connection | "I Believe in You" | in threads (Faith), the same year (1979) | you open: the song; you see: two bands on the right |
| An album with no Spotify album id | none of the 39 should | the track players only | fetch: none; you see: no album player |

#### Interface

```
album.spotifyAlbum           # Spotify's album id, kept by tools/fetch-spotify.mjs (it reads the album pages already)
src/pages/album/[id].astro   # album player, essay, track rows that open in place, connections, previous / next
src/pages/song/[id].astro    # "In threads" and "The same year"
```

#### Example

On Blood on the Tracks you press play on the album player at the top, read the essay, and click the arrow beside
"Meet Me in the Morning": the row opens with its preview and its Spotify player; you play it there.

```diagram
state: A track row on an album page
[*] -> closed: you open the album
closed -> open: you click its arrow | its preview, themes and player
open -> closed: you click again
open -> song page: its page ›
```

### Step 5 — The sides of a wide window (question 1)

*Stands alone.*

**It lets you:** use the whole width of a large screen for things that help, not empty margins.

From 1440 px wide (question 1, recommended A) a context rail sits beside the 1200 px content (D-036 kept): the era's
badge and years, a small timeline of the eras with this page's place lit, and quick links (this era, its albums, a
thread from this song, the map); it stays in place as you scroll. Below 1440 px the rail is not shown; the content is
as today.

#### Cases

| Case | Example | What happens | Trace |
|---|---|---|---|
| A song at 1680 px | "Like a Rolling Stone" | the rail: Going Electric 1965–1966, the eras with Going Electric lit, four links | you open: the page; you see: the rail at the right |
| At 1440 px | the same | the rail at 240 px beside the content | you see: content and rail |
| At 1280 px | the same | no rail; as today | you see: today's page |

#### Interface

```
src/components/Rail.astro      # era badge, era timeline, quick links; sticky
@media (min-width: 1440px)     # the rail shows; the content stays up to 1200 px
```

#### Example

On a 1920 px monitor, Masters of War's page has the rail on its right: "Greenwich Village 1961–1964", the eleven eras
with Greenwich Village lit, and links to the era, The Freewheelin' Bob Dylan, a thread from Masters of War and the map.

```diagram
flow: What a wide window gets
window -> today = up to 1439 px: as today
window -> rail = 1440 px and up: content and the context rail | question 1, A
```

### Step 6 — Links out, and checks that hold it

*Stands alone.*

**It lets you:** go on reading elsewhere, from Wikipedia and MusicBrainz, and trust the build to fail when a page's
new parts go missing.

Each era, album and song links to its Wikipedia article and its MusicBrainz page where MusicBrainz lists them
(question 2, recommended A), found through MusicBrainz's own links for the album or recording and kept only when the
page answers. The desktop check gains: an era page with fewer than three photographs, an album page with no essay or
no player, and a moment page with neither a photo nor a clip, each named.

#### Cases

| Case | Example | What happens | Trace |
|---|---|---|---|
| An album | Highway 61 Revisited | "Read on: Wikipedia ↗ · MusicBrainz ↗" | fetch: MusicBrainz's links; check: the page answers; you see: two links |
| A song with no Wikipedia article | "Turkey Chase" | MusicBrainz only | fetch: none for Wikipedia; you see: one link |
| A page missing its new parts | an album with no essay | the desktop check fails, naming it | check: no essay; prints: ✗ |

#### Interface

```
tools/find-links-out.mjs       # Wikipedia and MusicBrainz links from MusicBrainz's url relations; data/sources/links-out.json
node tools/check-desktop.mjs   # ✗ era "<id>": 2 photos, want 3 · ✗ album "<id>": no essay · ✗ moment "<id>": no photo or clip
```

#### Example

Highway 61 Revisited's page ends with "Read on: Wikipedia ↗ · MusicBrainz ↗", both opening in a new tab.

```diagram
flow: Where a link out comes from
mb = MusicBrainz's links for the album or recording -> wiki = Wikipedia: kept if it answers
mb -> mbpage = MusicBrainz's own page
mb --> none = no link: none listed
```

## Components touched

- **The dataset**: `data/sources/stories.json`, `data/photos.json`, `data/sources/links-out.json`, and the scripts that
  fill them (steps 1, 2, 6).
- **The data check**: lengths of the new writing, photo credits (steps 1, 2).
- **The era timeline**: the bands under an era's spread (step 3).
- **Album and song pages**: album, song and moment pages (steps 3, 4).
- **The app shell**: the context rail (step 5).
- **The desktop check**: the new parts (step 6).

## Open questions for the reviewer

1. **What fills the sides of a wide window? (step 5)**
   - **A · A context rail from 1440 px, the content kept at 1200 px.** On a 1920 px monitor, a song page has the era's
     badge, a timeline of the eras and four quick links at its right. Costs: one more column to keep up to date.
   - **B · The content widens to 1440 px.** The two columns get wider. Costs: lines of text grow long, and the empty
     sides come back at 1920 px.
   - **C · Leave the sides, fill only the content.** Costs: the empty sides you pointed at stay.
   - Recommended: **A**.

2. **Read on elsewhere: Wikipedia and MusicBrainz, or nothing? (step 6)**
   - **A · Wikipedia and MusicBrainz, where MusicBrainz lists them.** Highway 61 Revisited: "Read on: Wikipedia ↗ ·
     MusicBrainz ↗". Costs: a reader may leave the site.
   - **B · No links out; everything on the site.** Costs: nothing more to read once a page ends.
   - Recommended: **A**.

3. **How long should the new writing be? (step 1)**
   - **A · An era about 250 words, a moment about 120, an album about 150.** Going Electric: three short sections.
     Costs: more facts to check.
   - **B · About twice that.** Going Electric: a short essay of 500 words. Costs: twice the facts to check, and long
     reading on a phone.
   - **C · Keep today's lengths; add only pictures and interaction.** Costs: the pages stay thin to read.
   - Recommended: **A**.

Asked during the build (steps 3 and 4 each reached their fifth choice):

4. **Fallen Angels has no Spotify album to embed: what goes in its place?** (step 4) MusicBrainz lists no Spotify
   album whose title matches it, so its page has no album player; each of its songs still has its own.
   - **A · Nothing: the page as built, its songs' players only.** Costs: the one album page with no player.
   - **B · A line "Find Fallen Angels on Spotify ↗", a Spotify search for the album, where the player would be.**
     Costs: a search page, not a player, and it opens Spotify.
   - Recommended: **B**.

5. **Bands on the front of the site as well?** (step 3) Each era's story, gallery, records, songs and
   threads sit under its full-screen spread, on /era/electric/ and on the home page alike, since both are the same
   timeline.
   - **A · Yes, as built.** Scrolling down from any era on the home page opens its story. Costs: a long home page.
   - **B · Only on /era/&lt;id&gt;/; the home page stays the spreads alone.** Costs: the home page and the era pages
     become two versions to keep, and the home page's eras stay as thin as before.
   - Recommended: **A**.

## Decisions in force

- **D-001** "Astro, a page per song": the new parts are Astro components and the same islands. (all steps)
- **D-003** "The real covers": album rows and the previous and next album show the real covers. (steps 3, 4)
- **D-005** "An embedded Spotify player": the album player is Spotify's too. (step 4)
- **D-006** "Wikimedia Commons, free-licensed": every new photograph comes from Commons, with its licence. (step 2)
- **D-007** "The link and a preview in our words": the track row that opens in place shows the preview. (step 4)
- **D-052** "Add \"A thread from this song ›\" to the map page": kept; the rail's quick links include it. (step 5)
- **D-033** "Lyrics are summarised, not quoted": the new writing quotes no lyric. (step 1)
- **D-034** "All 277": every track's row opens in place. (step 4)
- **D-035** "The same page as his own songs": another writer's song gets the same new bands. (step 4)
- **D-036** "Up to 1200 px, two columns": kept; the rail sits beside it. (step 5)
- **D-037** "One era fills the screen": kept; the new bands are below the spread. (step 3)
- **D-038** "Select it, and show its panel": the map is unchanged. (step 5)

## Supersedes

None.
