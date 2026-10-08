# Walkthrough: a fuller site

**In one sentence:** every era now tells its story in three short sections beside a gallery of photographs, every
moment has a page with its own photograph or clip and a longer story, every album has its Spotify player, an essay and
a track list that opens in place, wide windows get a context rail at the side, and eras, albums and songs link out to
Wikipedia and MusicBrainz; the checks fail when a page loses any of it.

Built from `8cd2446` (the approved plan: D-083 the rail, D-084 the links out, D-085 the lengths), in `77595ec`.

## Choices made while building

| id | step | chose | instead of | why | where to check |
|---|---|---|---|---|---|
| A1 | 3 | (question 5) every era on the timeline gets its bands, under its own spread, inside a new wrapper (`article.eb`) that a phone swipes and a computer snaps to; the home page's timeline gets them too [visible] [hard-to-undo] | bands only for the era in the address, after the whole timeline | /era/&lt;id&gt;/ is the whole timeline, and › and ← → move between eras, so each era needs its bands under its own spread | src/components/EraSpread.astro, src/components/Timeline.astro |
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
| A13 | 6 | eras link only to Wikipedia, an article picked by hand for what the era is most about (Hibbing, Greenwich Village, the Electric Dylan controversy, The Basement Tapes, the Rolling Thunder Revue, the Traveling Wilburys, the 2016 Nobel Prize in Literature), each kept only when it answers; Gospel, Back to the Roots, the Standards and Rough and Rowdy have none [visible] (changed after review, "maybe every era should have something it links to, for consistency": every era now links to its own section of Wikipedia's Bob Dylan article, "Wikipedia: Bob Dylan, 1965–1969 ↗", each kept only when the article has it; the seven articles above follow it, `runs/find-links-out-eras.txt`) | no era links | an era is not a MusicBrainz entity, so the finder found none; the plan says each era links out | tools/find-links-out.mjs (ERA_WIKI) |
| A14 | 2 | an era's gallery is up to five photographs of its own; a photo marked as a moment's belongs to that moment, and tops up a gallery with fewer than three (Basement and Blood on the Tracks: 2 of their own and 1 from a moment) [visible] | a moment's photo counted in every gallery, or never | the moment's photo leads its own page; a gallery of two looked thin | src/lib/data.ts (photosOfEra) |
| A15 | 2 | six of the first 26 photographs are now marked as a moment's, since each already shows it (the March on Washington, Isle of Wight 1969, Chicago 1974, Ginsberg on the Rolling Thunder Revue, Rotterdam 1978, the American Reunion of 1993) [close] | leaving them as era photos only | those moments get their photo without a new search | data/photos.json |
| A16 | 2 | a moment's photograph is often its place or its people, and the caption says so: Big Pink for the Basement sessions, the Warfield for the gospel shows, Roy Orbison for the Wilburys [visible] | a photo only of the event itself | Commons has few free photos of the events; a place, captioned, is honest and still shows it | data/photos.json |
| A17 | 2, 6 | the desktop check names eight gaps the photo search could not fill and does not fail on them: Back to the Roots (2 photos) and seven moments with no photo or clip (the Shelton review, marrying Sara Lownds, the motorcycle accident, Pat Garrett, the 1980 retrospective shows, Chronicles, The Philosophy of Modern Song); any other gap fails [visible] (changed after review, "is there something else we can put here? be creative but also consistent": a moment with no photo or clip of its own now shows a card drawn in its era's look, as an album with no cover is, its year large and its title, captioned that no free photo or film exists; a gallery of fewer than three photos is topped up with the era's record covers, so Back to the Roots shows its two photos and the covers of Good as I Been to You and World Gone Wrong; the check now counts the pictures a gallery shows and accepts a moment's card, and names no known gaps) | the check failing until they are filled | Commons has no free photograph that fits; these pages show the era's photograph, labelled | tools/check-desktop.mjs (KNOWN_GAPS) |
| A18 | 1 | the data check compares quoted titles loosely (curly and straight apostrophes, hyphens, a bracketed subtitle) and accepts seven real songs on none of the site's albums ("Dignity", "Blind Willie McTell", "Series of Dreams", "Things Have Changed", "I Shall Be Released", "This Wheel's on Fire", "Handle with Care") [close] | quoting only titles on the site | the stories name these songs; they are titles, not lyrics | tools/check-data.mjs (OTHER_TITLES) |
| A19 | 3 | the gallery is a grid (the first photo wide, then two a row) with one line naming the photographers; each photo's credit and licence show when it opens large [visible] | a sideways row, or a credit under every thumbnail | a sideways scroller inside the phone's sideways swipe fights it; credits under every thumbnail crowd it | src/components/Gallery.astro |
| A20 | 4 | a song page's "The same year" lists up to 8 of his own songs from his records that year, the most connected first, leaving out covers and other artists' songs [close] | every song from that year on the site | it is about what he was writing then | src/pages/song/[id].astro |
| A21 | 1 | the data check holds each era section to 60–110 words, a moment to 80–150 and an album essay to 100–180 [close] | an exact length, or no bound | the plan says "about" (D-085); the band catches a text that is cut off or runs on, not one a few words over | tools/check-data.mjs (holdText) |
| A22 | 6 | a song's "MusicBrainz ↗" opens the work (the song as written) [close] | the recording on the album | the work is where MusicBrainz keeps the Wikipedia link and every recording of the song | tools/find-links-out.mjs |
| A23 | 6 | links out for the 452 album songs only; the 86 songs on no album of his (old tunes, other artists' versions) have none [visible] | every song | those are other artists' recordings, with no MusicBrainz release in the site's data to start from | tools/find-links-out.mjs |
| A24 | 4 | (question 4, answered B: under the cover, "Find Fallen Angels on Spotify ↗" opens Spotify's search for the album, and the desktop check wants it on an album with no player) Fallen Angels has no album player: MusicBrainz lists no Spotify album whose title matches it, and the desktop check only asks for a player where an album has a Spotify id [visible] | all 39 with a player | a guessed album id could play the wrong record; its songs still have their own players | data/sources/spotify-albums.json, runs/find-spotify-albums.txt |
| A25 | 4 | a song page's "In threads" also lists the thread made from the song ("From &lt;song&gt;"), so a song in no curated thread still has one [visible] | the curated threads only | every connected song has its own thread (D-052's link), and the band would otherwise be empty for most songs | src/pages/song/[id].astro |
| A26 | 3 | an era's "Threads through it" shows at most six threads, those with the most of the era's songs first [visible] | every thread that passes through it | the twelve threads pass through most eras; six reads as a band | src/components/EraStory.astro |

## What landed, step by step

### Step 1 — Longer writing for eras, moments and albums (question 3)

**You can now:** read each era as three short sections, each moment as a paragraph, and why each album matters.

Each era has a story in three sections, What happened, The music and What it led to, about 80 words each (D-085: about
250 in all); each of the 41 moments about 120 words; each of the 39 albums an essay of about 150. All in our own
words, in `data/sources/stories.json`; none quotes a lyric (D-033). Facts the writers were unsure of were left out or
kept general (no chart positions, few exact dates); the facts they flagged (Mike Bloomfield at the Warfield in 1980,
the "Soy Bomb" dancer at the 1998 Grammys, Modern Times as his first US number one in 30 years) were checked. The data
check holds each text to its length and to quoting only titles (A18).

**Commits:** `77595ec`.

```diagram
flow: A story from writer to page
writer = written in our words -> stories = data/sources/stories.json
stories -> check = check-data: length, titles only | fails on a lyric or a stray quote
check -> page = era bands, moment page, album essay
```

#### Worked examples

##### Going Electric
- **Input:** `node tools/merge-data.mjs && node tools/check-data.mjs`
- **What happens:** the era's story lands in `data/eras.json` as `story.happened`, `story.music` and `story.ledTo`.
- **Output:** "✓ 11 eras, 39 albums, 538 songs, 165 connections, 12 threads, 64 photos" (`runs/npm-test.txt`).
- **Edge cases:** "Knockin' on Heaven's Door" written with a straight apostrophe still matches its title (A18).

#### Limits
Every sentence was not checked against a source; the writers kept to what they were sure of.

#### Files and commands
`data/sources/stories.json`, `tools/merge-data.mjs`, `tools/check-data.mjs`.

### Step 2 — More photographs for eras and moments

**You can now:** see most eras in three to five photographs, and 31 of the 41 moments in one of their own.

The Commons search ran again (D-006): 38 new photographs, 64 in all, each public domain, CC0, CC BY or CC BY-SA with
a named author; a photo whose licence or author could not be read again from Commons was not used. Each was looked at
against its caption; ones that were unclear were dropped (an audience video still, a photo whose place was unclear, the
Shrine Auditorium for an Oscar he accepted by satellite). Back to the Roots has two, and ten moments have none
(three of those have a clip) (A17).

**Commits:** `77595ec`.

```diagram
flow: Where a photo goes
search = Commons search -> kept = a photo with licence and author | looked at against its caption
kept -> gallery = the era's gallery: up to 5
kept -> moment = a moment's own photo | tops up a thin gallery (A14)
search --> none = none: the era's photograph, labelled
```

#### Worked examples

##### Live Aid 1985
- **Input:** `node tools/find-photos.mjs`
- **What happens:** the JFK Stadium stage photo is appended with `moment: "live-aid-1985"`, its author and licence.
- **Output:** `runs/find-photos.txt` (the search and the counts per era).
- **Edge cases:** Commons rounds a 2000 px request up to 3840, so the script asks for 1920.

#### Limits
The final download's log was not kept; `runs/find-photos.txt` has the search and the result.

#### Files and commands
`tools/find-photos.mjs`, `data/photos.json`, `src/assets/photos/`.

### Step 3 — Era and moment pages built around their story

**You can now:** scroll from an era's full-screen spread into its story, gallery, records and moments, songs to start
with and threads; and open a moment as a page of its own.

Under each era's spread (D-037) come its bands (A1): the story beside the gallery (A19), records and moments on a
dated line from 1100 px (A3), the six most connected songs with previews, the threads through it, and Read on. On a
phone they stack under the panel, and the row is as tall as the era in view (A2). A moment page has its clip or
photograph large, its story, "Around it", "His songs from &lt;year&gt;" and that year's records (A4).

**Commits:** `77595ec`.

```diagram
flow: An era on a computer
spread = the full-screen spread -> bands = story and gallery, records and moments, songs, threads, Read on
bands -> next = the next era snaps in after the bands
```

#### Worked examples

##### Going Electric at 1440 × 900
- **Input:** open /era/electric/ and scroll.
- **What happens:** the story's three sections sit beside its five photographs; a click opens one large with its credit.
- **Output:** `runs/ui-check-desktop.txt`.
- **Edge cases:** an era with no story or photos shows only the bands it has.

#### Files and commands
`src/components/EraStory.astro`, `src/components/Gallery.astro`, `src/pages/moment/[id].astro`.

### Step 4 — Album and song pages

**You can now:** play a whole album, read why it matters, open any track in place, and see where its songs lead.

The album page has Spotify's album player (38 of 39 albums; Fallen Angels has none on Spotify's MusicBrainz links),
the essay, track rows with a ▾ that opens each in place (A6), six connections off the album (A7), and the previous and
next album (D1). A song page gains "In threads" and "The same year" (A20) and Read on.

**Commits:** `77595ec`.

```diagram
state: A track row
[*] -> closed: the album opens | title links to its page
closed -> open: you press ▾ | preview, themes, its player (loaded now)
open -> closed: you press ▴
```

#### Worked examples

##### Blood on the Tracks, track 3
- **Input:** press ▾ beside "You're a Big Girl Now".
- **What happens:** the row opens with its preview, "love · loss · time", its player and "Its page ›".
- **Output:** `runs/ui-check-desktop.txt`.

#### Files and commands
`src/pages/album/[id].astro`, `src/pages/song/[id].astro`, `tools/find-spotify-albums.mjs`, `data/sources/spotify-albums.json`.

### Step 5 — The sides of a wide window (question 1)

**You can now:** see, from 1440 px, where a page sits among the eras, and jump to its era, album, a thread or the map.

The rail (D-083) sits in the right margin of album, song and moment pages (A8, A9, A10). Below 1440 px nothing
changes: the wrapper is `display: contents`.

**Commits:** `77595ec`.

```diagram
flow: Which pages get the rail
width -> none = below 1440 px: no rail, the page as before
width -> rail = 1440 px and up: album, song and moment pages
```

#### Files and commands
`src/components/Rail.astro`, `src/layouts/Shell.astro`, `src/styles/site.css`.

### Step 6 — Links out, and checks that hold it

**You can now:** carry on reading on Wikipedia and MusicBrainz, and trust the build to fail when a page loses its new parts.

Every album and all 452 album songs link to MusicBrainz; all 39 albums and 209 songs to Wikipedia (D-084), each
article kept only when it answered; 7 eras to Wikipedia (A13). The desktop check fails on an era with fewer than three
photographs, an album with no essay or no player, and a moment with neither a photo nor a clip, naming each (A12), less
the eight gaps it names as known (A17).

**Commits:** `77595ec`.

```diagram
flow: Where a link out comes from
mb = MusicBrainz's links -> wiki = Wikipedia: kept if it answers
mb -> mbpage = MusicBrainz's own page
hand = an era: picked by hand (A13) -> wiki
```

#### Worked examples

##### Highway 61 Revisited
- **Input:** `node tools/find-links-out.mjs`
- **What happens:** the album gets both links; "Turkey Chase" gets MusicBrainz only.
- **Output:** `runs/find-links-out.txt`.

#### Files and commands
`tools/find-links-out.mjs`, `data/sources/links-out.json`, `src/components/ReadOn.astro`, `tools/check-desktop.mjs`.

## Tests run

- `npm test`: the data check, the build, the phone check (12 views) and the desktop check (24 views at two sizes), all pass (`runs/npm-test.txt`).
- Screenshots at 1440 × 900 and 1920 × 1080 of an era's bands, a moment, an album with a track open and a song (`runs/shots/`), taken with the network on so covers and players show.

## Not done

- **Eight photo gaps** (A17): still no free photographs for them; after review each shows a drawn card or the era's covers instead.
- **Question 5:** answered A, as built.
- **Question 4:** answered B, built after review.
- **The new writing** was not checked sentence by sentence against sources.

## Decisions kept

- **D-001** "Astro, a page per song": the new parts are Astro components (`src/components/`).
- **D-003** "The real covers": the previous and next album and the era's records (`src/pages/album/[id].astro`).
- **D-005** "An embedded Spotify player": the album player and each track's (`src/pages/album/[id].astro`).
- **D-006** "Wikimedia Commons, free-licensed": all 38 new photographs (`data/photos.json`).
- **D-007** "The link and a preview in our words": an opened track row shows the preview.
- **D-033** "Lyrics are summarised, not quoted": no new text quotes a lyric (`tools/check-data.mjs`).
- **D-034** "All 277" and **D-035** "The same page as his own songs": every track row opens in place.
- **D-036** "Up to 1200 px, two columns" and **D-037** "One era fills the screen": kept, the rail beside and the bands below.
- **D-038** "Select it, and show its panel" and **D-052** the map page's thread link: the map is unchanged; the rail links to it.
- **D-083**, **D-084**, **D-085**: as built in steps 5, 6 and 1.
- Earlier accepted calls whose lines this changed (`reel check --base 8cd2446`): photos by era and kind (D-010) now also by moment (A14, A15); a moment's songs (D-062) keep the songs its story names, and its records now come from that year in any era (A4); the full track list (D-029), previous and next song (D-012), lyrics in a new tab (D-011), theme chips (D-014), live takes (D-046), the one-markup spread and its crossfade (D-057, D-058), the timeline names (D-059), the song page's columns and words card (D-060, D-061) and the desktop check's extra rules (D-067) are kept as they were; their lines moved into the new layouts.

## Code check

Findings: `code-check/findings.md` (6 steps ✓, 27 decisions ✓, 6 unexplained ✗), by a fresh agent; it could not write
files, so its reply was saved as it gave it.

- **`tools/check-data.mjs:107-109`** (the length bands): ✗ answered by A21.
- **`tools/find-links-out.mjs:139`** (a song's MusicBrainz link is its work): ✗ answered by A22.
- **`tools/find-links-out.mjs:100-103`** (album songs only): ✗ answered by A23.
- **`data/albums.json`** (Fallen Angels has no player): ✗ answered by A24, and asked as question 4.
- **`src/pages/song/[id].astro:992-999`** ("In threads" lists the song's own thread): ✗ answered by A25.
- **`src/components/EraStory.astro:78-82`** (at most six threads an era): ✗ answered by A26.
