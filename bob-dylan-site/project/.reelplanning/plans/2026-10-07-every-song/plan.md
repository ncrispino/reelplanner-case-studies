# Every track a page: the 277 album tracks with no page of their own

**In one sentence:** every track on the site's 39 albums opens its own page, with a note, a preview and a summary
in our own words, its player, its lyrics link where one exists, and its connections, so an album's track list has
no dead rows.

## The problem

The owner, opening an album on the built site:

> "i see songs like 'If You See Her, Say Hello' are in the main discography but have nothing there"

### What we have

The 39 albums have 458 tracks. 181 of them are songs with a page; 277 are rows in a track list with nothing
behind them. Blood on the Tracks has 10 tracks and 7 pages: "You're a Big Girl Now", "Meet Me in the Morning" and
"If You See Her, Say Hello" have none.

This falls short of what the owner chose. D-002 is "All 39 albums, 16 in full". The 16 landmark albums are not in
full: the dataset's writers wrote 7 or 8 songs for each, so 54 of their 168 tracks have no page. The album page said
"Selected songs · 7 of 14" at first, which hid it; the full track lists, added after the first walkthrough review,
show it. It was not flagged as an off-plan change when it happened.

D-002 turned down "every song on every album" because "most song pages hold only a title". That is no longer so:
every song now gets a summary of three or four sentences in our own words (D-033), written and checked by the same
tools that would write these.

### What the 277 are

- **His own songs, about 150:** "If You See Her, Say Hello", "Million Dollar Bash", "Meet Me in the Morning",
  most of New Morning, Planet Waves, Street Legal, Empire Burlesque and Tempest.
- **Songs by other writers that he recorded, about 110:** standards on Shadows in the Night, Fallen Angels and
  Triplicate (27 tracks on Triplicate alone), carols on Christmas in the Heart, folk and blues on Bob Dylan, Self
  Portrait, Good as I Been to You and World Gone Wrong.
- **Tracks by The Band without him, about 8**, on The Basement Tapes: "Yazoo Street Scandal", "Katie's Been Gone".
- **Instrumentals and alternate takes, about 10**: Pat Garrett's "Turkey Chase" and "Billy 4"/"Billy 7", Self
  Portrait's "Alberta #1"/"Alberta #2" and "Wigwam".

## What changes

Two changes, in four steps.

1. **Every track becomes a song** (steps 1 and 2): a record for each, its writing (a note, themes, a preview and
   a summary), and its player, clip and lyrics link, fetched and checked like today's 181.
2. **Every track is part of the site** (steps 3 and 4): connections and threads reach the new songs, the album page
   links every row, search finds them, the map gains their dots, and the data check fails on an album track with
   no page.

Step 2 needs step 1's records; step 3 needs step 1's writing; step 4 needs steps 1 and 2.

## Steps

### Step 1 — Every track becomes a song: its record and its writing (questions 1 and 2)

*Stands alone.*

**It lets you:** open any track of any album and read what it is: when and where it was made, what it is about
and how it sounds, in a note, a preview and a summary in our own words.

A new script, `tools/add-tracks.mjs`, reads each album's MusicBrainz track list (`data/sources/musicbrainz.json`,
already fetched) and writes a record for every track that has no song yet: its id from its title
(`if-you-see-her-say-hello`), title, album and year, and `by` when it is not Dylan's performance ("The Band").
Takes of one song on one album become one song: "Billy 4" and "Billy 7" are takes of "Billy 1", which already has a
page (`/song/billy-1/`); their rows link to it, and its page lists the three takes. A live track of a song that already has a page
("Like a Rolling Stone (live)" on Self Portrait) links to that page, and one whose song gets its page in this plan
links to that new page.

Writers then write each new song's note (one sentence of fact), themes, preview and summary, by album, as the 181
were (the brief and the content-filter rule in `data/BRIEF-songs.md`): never quoting lyrics, describing a song from
outside, no chart or session facts beyond what is certain. A batch the content filter stops is retried in smaller
pieces, as the Highway 61 Revisited batch was. For another writer's song (question 2), the note says who wrote it
and when, and the summary says what the song is about and what Dylan's recording does with it.

#### Cases

| Case | Example | What happens | Trace |
|---|---|---|---|
| His own song | "If You See Her, Say Hello", Blood on the Tracks | a song record, a note, themes, a preview, a summary | script writes: the record; writer writes: the text; you see: its page |
| Another writer's song | "Stardust", Triplicate | the note names Hoagy Carmichael and 1927; the summary says what Dylan's version does | writer writes: note and summary; you see: its page |
| The Band without him | "Katie's Been Gone", The Basement Tapes | `by: "The Band"`; the note says Dylan is not on it | script: `by` set; you see: "The Band" under the title |
| Takes of one song | "Billy 4" and "Billy 7", Pat Garrett | no new song: both rows link to "Billy 1", whose page lists the three takes | script: matches the take; album rows: links to `/song/billy-1/` |
| A live take of a song with a page | "Like a Rolling Stone (live)", Self Portrait | no new song: the row links to the existing page | script: matches the title; album row: a link |
| An instrumental | "Turkey Chase", Pat Garrett | a song with a note and a summary of the music; no lyrics link | writer: describes the tune; you see: its page |
| The filter stops a batch | a batch of eight Tempest songs | retried as smaller batches; a song still stopped is listed in the walkthrough | writer: stopped; retry: 2 songs at a time; walkthrough: names any left |

#### Interface

```
node tools/add-tracks.mjs   # a song record for every album track with none, into data/parts/tracks.json
  ✓ <n> tracks: <n> new songs, <n> takes folded into their songs, <n> live takes linked to existing pages
data/parts/tracks.json      # the new songs' records: id, title, album, year, by, takes
data/sources/summaries.json  # each new song's summary (D-033), beside the 182 there now
data/BRIEF-songs.md         # the writers' brief: what to write and what never to (no lyrics)
song.takes                  # a song's takes on one album: ["Billy 1", "Billy 4", "Billy 7"] on billy-1
```

#### Example

`node tools/add-tracks.mjs` finds Blood on the Tracks' three tracks with no song and writes
`{ "id": "if-you-see-her-say-hello", "title": "If You See Her, Say Hello", "album": "blood-on-the-tracks", "year":
1975, "by": null }`. A writer adds its note, themes (loss, love), its preview and a summary of a man asking a
friend to pass a message to a woman who left him. `/song/if-you-see-her-say-hello/` is built with them.

```diagram
flow: From a track to a song page
track = a track in MusicBrainz's list -> record = a song record: tools/add-tracks.mjs | id, title, album, year, by
track -> existing = an existing page: a live take of a song with one | the album row links there
record -> text = note, themes, preview, summary: the writers | in our own words, no lyrics
text -> page = its song page | built with the rest
```

### Step 2 — Players, clips and lyrics links for the new songs

*Needs step 1.*

**It lets you:** play any track from its page, watch an official clip where one exists, and open its lyrics
where bobdylan.com has them.

The three fetchers that found today's links run again for the new songs, with no change to how they match:
`tools/fetch-spotify.mjs` (D-005: Spotify's own album pages, a track kept only when its title matches),
`tools/find-youtube.mjs` (official uploads for songs, as the first walkthrough review's answer B kept), and
`tools/find-lyrics-links.mjs` (bobdylan.com's song index). bobdylan.com lists songs he wrote, so another writer's
song has no bobdylan.com link and its words card says who wrote the words: "Words by Hoagy Carmichael and Mitchell
Parish". From the plan review ("another lyrics website will display though?"): such a song links instead to its
words on Genius, a lyrics site that licenses them, when Genius has the song: "Lyrics on Genius ↗", found by
`tools/find-lyrics-links.mjs` from Genius's search and kept only when its title and artist match; a song Genius
does not have keeps the "Words by" line alone. `npm run check:clips` checks the new clips.

#### Cases

| Case | Example | What happens | Trace |
|---|---|---|---|
| A song on Spotify | "Meet Me in the Morning" | a Spotify id; the player loads on its page | fetcher: matches the title; you see: the player |
| A title spelled differently | a dropped apostrophe or subtitle, as with "4th Time Around" | the loose match finds it, as it found "Fourth Time Around" | fetcher: loose match; you see: the player |
| No official clip | most of Triplicate | no clip; the Spotify player only | fetcher: no official upload; you see: one player |
| Another writer's song | "Stardust" | no lyrics link; "Words by Hoagy Carmichael and Mitchell Parish; not on bobdylan.com" | lyrics fetcher: not in the index; you see: the line |
| No Spotify match | a title Spotify lists under another name | listed in `runs/fetch-spotify.txt` for a hand fix | fetcher: no match; run log: names it |

#### Interface

```
node tools/fetch-spotify.mjs       # only songs with no Spotify id yet; prints "N of M album songs have a Spotify id"
node tools/find-youtube.mjs        # official clips for the new songs, moments unchanged
node tools/find-lyrics-links.mjs   # bobdylan.com links for the new songs
npm run check:clips                # every clip still plays
song.wordsBy                       # another writer's song: who wrote its words, shown in place of the link
```

#### Example

`node tools/fetch-spotify.mjs` prints `blood-on-the-tracks: 10/10 songs` and, at the end, how many album songs have
a Spotify id; any it could not match are named in `runs/fetch-spotify.txt` for a hand fix.

```diagram
flow: Where a new song's links come from
song = a new song -> spotify = Spotify id: fetch-spotify | kept only when the title matches
song -> clip = official clip: find-youtube | Bob Dylan's own channel
song -> lyrics = lyrics link: find-lyrics-links | bobdylan.com's index
song --> wordsby = "Words by …": another writer's song | in place of the lyrics link
```

### Step 3 — Connections and threads reach the new songs

*Needs step 1.*

**It lets you:** follow a new song to the songs it is tied to, as cards and on the map, and meet it in a thread.

A pass across the whole catalogue, as the one that added 86 connections after the first walkthrough review, links
the new songs: covers others made famous, tunes he borrowed, songs that share a theme, rewrites and re-recordings,
each with its sentence of why. A connection is written only when it is a fact the writer is sure of (the rule from
the first build: a wrong connection is worse than a missing one), so many new songs, most of the standards, will
have none. Said plainly, from the plan review: a song with no connection still gets its full page (note, words,
player); the page simply shows no connection cards and no small map, and nothing is guessed or marked "maybe" to
fill the space. The threads are read again: a new song joins a thread where it belongs ("If You See Her, Say Hello" in
"Love gone wrong").

#### Cases

| Case | Example | What happens | Trace |
|---|---|---|---|
| A same-theme link | "If You See Her, Say Hello" ↔ "You're Gonna Make Me Lonesome When You Go" | a connection, "same theme", with its why | writer: writes it; data check: both ends exist; you see: a card on each page |
| A borrowed tune | a Basement Tapes song on an older tune | a connection, "borrowed tune" | writer: writes it; you see: a card |
| A standard with nothing to tie | "Braggin'", Triplicate | no connection; its page has the words and the player | writer: none sure; you see: no cards |
| A thread gains a song | "Love gone wrong" | "If You See Her, Say Hello" joins it in time order | thread file: one step added; you see: 11 cards |

#### Interface

```
data/parts/connections-2.json   # the new connections: from, to, kind, why
data/threads.json               # a new song added where it belongs, in time order
node tools/check-data.mjs       # both ends of every connection exist; every kind is known
```

#### Example

A writer links "If You See Her, Say Hello" to "You're Gonna Make Me Lonesome When You Go", same theme: "Two Blood on
the Tracks songs about a love that has ended, one before the parting and one after." Both song pages show it, and
both dots on the map are joined by a line.

```diagram
flow: A new song's connections
song = a new song -> link = a connection: only when sure | with its kind and why
link -> check = the data check: both ends exist
check -> cards = cards on both songs' pages
check -> map = a line on the map
song --> thread = a thread, where it belongs
```

### Step 4 — Album pages, search and the map with every track; the data check holds it

*Needs steps 1 and 2.*

**It lets you:** click any row of any track list and land on its page, find any track in search, and trust
`npm test` to fail if a track ever loses its page.

- **The album page:** every row is a link, so the "its story ›" mark and the line counting the songs with a page
  go; takes of one song ("Billy 4", "Billy 7") link to the song they are takes of, "Billy 1".
- **Search** indexes the new songs.
- **The map** gains a dot for each new song with a connection.
- **The site** grows from 802 pages to about 1,400: each new song adds its page and its map page, and a "thread
  from here" page when it has a connection.
- **The data check** fails on an album track with no song (only on the tracks your answers give a page: every track with B and A, the landmarks' with A for question 1, his own songs with C for question 2), on a song
  with no summary, and on a summary outside 45–90 words or quoting more than a title (D-033).

#### Cases

| Case | Example | What happens | Trace |
|---|---|---|---|
| An album row | "If You See Her, Say Hello" on Blood on the Tracks | the whole row opens its page | you click: the row; you see: `/song/if-you-see-her-say-hello/` |
| Search | "say hello" | "If You See Her, Say Hello · Blood on the Tracks · 1975" | you type; search: finds it; you see: one song |
| A track with no song | a track added to an album's list later | the data check fails, naming it | check: track with no song; prints: ✗ albums.json "<album>" track <n> "<title>" has no song |
| The phone and desktop checks | `npm test` | both pass on the new pages | you run: npm test; it prints: ✓ |

#### Interface

```
src/pages/album/[id].astro   # every row a link; no "its story ›", no count of pages
src/pages/search-index.json.ts   # the new songs in the index
node tools/check-data.mjs    # ✗ albums.json "<album>" track <n> "<title>" has no song
npm run build                # about 1,400 pages
```

#### Example

You open `/album/blood-on-the-tracks/`. All ten rows are links. You click "If You See Her, Say Hello", read its
summary, play it on Spotify, and click its connection to "You're Gonna Make Me Lonesome When You Go".

```diagram
compare: Blood on the Tracks' track list
before: 10 rows, 7 with "its story ›", 3 with nothing behind them
after: 10 rows, every one a link to its song's page
```

## Components touched

- **The dataset**: `data/parts/tracks.json`, `data/parts/connections-2.json`, `data/sources/summaries.json`,
  `data/threads.json` (steps 1–3); `tools/add-tracks.mjs` (new), the three fetchers (step 2).
- **The data check**: `tools/check-data.mjs` (step 4).
- **Album and song pages**: `src/pages/album/[id].astro`, `src/pages/song/[id].astro` (the words card's "Words by"
  line) (steps 2, 4).
- **Threads**: `data/threads.json`, the map (steps 3, 4).
- **Search**: the search index (step 4).

## Open questions for the reviewer

1. **Which tracks get a page? (step 1)** D-002 chose "All 39 albums, 16 in full"; the 16 are not in full today.
   - **A · The 54 missing tracks of the 16 landmarks.** Makes "16 in full" true: Blood on the Tracks gets its
     three, Blonde on Blonde its seven: about 120 new pages instead of about 600. Costs: the other 23 albums keep
     dead rows: Tempest's 7, Triplicate's 27.
   - **B · All 277.** Every row of every album opens a page. Costs: about 600 new pages; most of the standards and
     carols get a page with no connections; the most batches for the content filter to stop.
   - **C · None: the track lists stay as they are.** Costs: rows like "If You See Her, Say Hello" stay dead, and
     "16 in full" stays untrue.
   - Recommended: **B**.

2. **How much is written for a song by another writer? (step 1)** About 110 of the 277: standards, carols, folk and
   blues he recorded.
   - **A · The same page as his own songs.** "Stardust": a note naming Hoagy Carmichael, a summary of the song and
     of his recording, the player, "Words by Hoagy Carmichael and Mitchell Parish". Costs: the most writing.
   - **B · A shorter page: the note and the player.** "Stardust": one sentence and the Spotify player. Costs: those
     pages read thinner than his own songs'.
   - **C · No page: the row names the writer.** "Stardust · Hoagy Carmichael" in the track list, not a link. Costs:
     Triplicate stays mostly dead rows.
   - Recommended: **A**.

## Decisions in force

- **D-001** "which can produce a sophisticated website… graceful and visually appealing, while fully featured?":
  kept as answered (Astro, a page per song); each new song is one more Astro page. (step 4)
- **D-003** "The real covers": kept; a new song's page shows its album's cover. (step 4)
- **D-005** "An embedded Spotify player": kept; the new songs' players are found the same way. (step 2)
- **D-006** "Wikimedia Commons, free-licensed": kept; no new photographs. (step 4)
- **D-007** "The link and a preview in our words": kept; every new song has a preview, and its lyrics link where
  bobdylan.com has one. (steps 1, 2)
- **D-033** "Lyrics are summarised, not quoted": kept; every new song gets a summary, checked for length and
  quotation. (steps 1, 4)

## Supersedes

- **D-002** "All 39 albums, 16 in full": question 1 asks it again; "16 in full" was not met (7 or 8 songs per
  landmark), and B widens it to every track.
