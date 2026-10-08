# Walkthrough: every track a page

**In one sentence:** every one of the 458 tracks on the site's 39 albums now opens a song page, so an album's track
list has no dead rows; the 271 new songs each have a note, themes, a preview and a summary in our own words, a
Spotify player, and their lyrics link or who wrote their words.

Built from `40447f2` (the approved plan, with the review's comments folded in).

## Choices made while building

| id | step | chose | instead of | why | where to check |
|---|---|---|---|---|---|
| A1 | 1 | Every album track is mapped to its song once, by `tools/add-tracks.mjs`, into `data/sources/track-map.json` (`{ album: [song id per track] }`); album pages and the data check read that map [hard-to-undo] | matching track titles to songs when each page is built, as before | a take or a live take maps to a song with a different title; one map, checked, is simpler than the same fuzzy match in three places | `data/sources/track-map.json`, `src/pages/album/[id].astro` |
| A2 | 1 | Takes on one album that have no song between them become one song under the shared title: "Alberta #1" and "Alberta #2" are the song "Alberta"; "Forever Young (continued)" on Planet Waves maps to "Forever Young" [visible] | a song per take | the plan folds takes into the song they are takes of; with no existing song, the title without the take number is that song | `runs/add-tracks.txt`, `/song/alberta/` |
| A3 | 1 | A live take whose song had no page anywhere becomes a song under its plain title, with the live take as its track: "The Mighty Quinn (Quinn the Eskimo)" and "Minstrel Boy", both on Self Portrait [visible] | a song titled "… (live)" | the page is about the song; the album row still shows the track as MusicBrainz names it | `runs/add-tracks.txt`, `/song/minstrel-boy/` |
| A4 | 1 | Where Dylan co-wrote the words (with Robert Hunter, Jacques Levy, Tom Petty, Carole Bayer Sager), the song counts as his own: no "Words by" line, the co-writer named in the note [visible, close] (changed after review, "probably want to give each writer credit": a co-written song now names every writer, "Words by Bob Dylan and Jacques Levy" on Hurricane, from `data/sources/words-by.json` (21 songs: the Desire songs with Levy, the Together Through Life and Tempest songs with Robert Hunter, Petty, Bayer Sager, Sam Shepard, Tim Drummond)) | a "Words by Bob Dylan and …" line | the line is for songs whose words he did not write; the writers had handled it two ways and two songs were changed to match | `data/parts/album-tracks.json` (`got-my-mind-made-up`, `under-your-spell`) |
| A5 | 2 | The three fetchers now keep what earlier runs found (`lyrics.json` was rewritten from scratch each run, which would have dropped 8 links found in the first build) and know a few other spellings (Talkin' World War III Blues, Motorpsycho Nightmare, What'll I Do, Quinn the Eskimo) | rerunning them as they were | a rerun must only add; without the spellings, 4 of Dylan's songs had no lyrics link and 3 no player | `tools/find-lyrics-links.mjs`, `tools/fetch-spotify.mjs`, `tools/find-youtube.mjs` |
| A6 | 2 | The 1979 Saturday Night Live moment stays without a clip: the YouTube finder found the same unofficial upload the first build dropped, and now skips it (changed after review, flagged: the 1979 Saturday Night Live moment has a clip again, "Bob Dylan - Saturday Night Live Performance (1979)", now required to name SNL and 1979 in its title (`runs/find-youtube-moments.txt`)) | adding it back | the first walkthrough's clip count (179, which the review accepted) did not include it | `tools/find-youtube.mjs` (`DROPPED`) |
| A7 | 3 | Covers others made famous are added as their own version songs (12, such as Manfred Mann's "Mighty Quinn"), as the first build's connections were, and are not added to the "Songs others made famous" thread | adding them to that thread too | the writers were asked for new songs in threads; a thread change is the owner's to see | `data/parts/connections-2.json` |
| A8 | 2 | A traditional song's words card says "A traditional song" [visible] | "Words by traditional", or no line | "Words by" names a writer; a traditional song has none (25 songs) | `src/components/Words.astro` |
| A9 | 4 | A song page names its live takes on other albums: "Also on Self Portrait: She Belongs to Me (live)" [visible] | the album row linking there, with nothing on the song's page | a reader on the song page would not know the live take exists; the map gives it for free | `src/pages/song/[id].astro` |
| D3 | 3 | `data/threads.json` is kept by hand from now on: the 26 new songs were placed into it, and `tools/make-threads.mjs` refuses to overwrite it without `--force` [deviation] | regenerating the threads with the tool | the tool keeps ten songs per theme, landmark albums first; with 452 album songs it would pick a different ten and drop the placed songs | `tools/make-threads.mjs`, `data/threads.json` |
| D4 | 2 | An instrumental keeps its bobdylan.com page as its link (9 songs, such as "Turkey Chase"), as "Nashville Skyline Rag" had from the first build [deviation, close] | no lyrics link, as step 1's case table says | bobdylan.com keeps a page for each; the button still reads "Lyrics on bobdylan.com", which there means the song's page, not words | `data/sources/lyrics.json` |
| D1 | 1 | The new songs' records are in `data/parts/album-tracks.json` [deviation] | `data/parts/tracks.json`, as the plan's interface named it | that file already exists: it is the "Blood on the Tracks" era's part | `data/parts/album-tracks.json` |
| D2 | 2 | No Genius links: another writer's song shows "Words by …" alone [deviation, visible] (changed after review, "are there other lyrics providers not blocked?": yes: Lyrics.com, whose lyrics are licensed from LyricFind, answers; 22 songs bobdylan.com lacks now link there ("Lyrics on Lyrics.com"), checked by title; 9 more (8 Triplicate standards and Alberta) wait, because Lyrics.com rate-limited this machine part way: rerun `node tools/find-lyrics-links.mjs`. Genius still blocks it) | "Lyrics on Genius ↗" where Genius has the song, as the plan review asked | Genius answers this machine with 403, and the search engines that could find its pages answer with a bot check, so no link could be found or checked; an unchecked address could be a dead link | `runs/genius-blocked.txt` |

## What landed, step by step

### Step 1 — Every track becomes a song: its record and its writing

**You can now:** open any track of any album and read what it is.

`tools/add-tracks.mjs` reads the 458 MusicBrainz tracks and maps each to a song (A1): 182 tracks were already songs,
271 tracks became new songs, 4 takes joined their songs (Billy 4 and Billy 7 → Billy 1; Alberta #1 and #2 → Alberta),
2 live takes link to existing pages (Like a Rolling Stone, She Belongs to Me) and 2 became songs of their own (A3).
Run: `runs/add-tracks.txt`. Running it again changes nothing (the records keep their text).

The 271 new songs were written by the writers in 13 batches from `data/BRIEF-songs.md`: a note, 1–3 themes, a
preview, a summary (into `data/sources/summaries.json`), and `by` / `wordsBy`. None was stopped by the content
filter this time. Of the 271: 163 are his own songs or instrumentals, 83 name another writer ("Words by Hoagy
Carmichael and Mitchell Parish"), 25 are traditional ("A traditional song"), and 8 Basement Tapes tracks are by The
Band. Every claim about where a track sits on its album ("closes side one") was checked against the MusicBrainz track
order; one was wrong ("From a Buick 6") and was corrected. "What I'll Do" is titled "What'll I Do", Irving Berlin's
title. After the walkthrough video's fresh eyes, three "Words by" lines that named the composer too were corrected to
the lyricist alone: "Stardust" (Mitchell Parish), "Tomorrow Night" (Sam Coslow) and "Trade Winds" (Charles Tobias).

**Commits:** `cadf678`, `03bd77d`.

```diagram
flow: From a track to a song page
track = a MusicBrainz track -> map = track-map.json: tools/add-tracks.mjs | every track, in order
map -> own = its album's song: same title
map -> take = a take's song: Billy 4 → Billy 1
map -> live = a live take's song: anywhere on the site
map -> new = a new record: album-tracks.json | 271
new -> text = note, themes, preview, summary: the writers | in our own words
```

#### Worked examples

##### Blood on the Tracks' missing three
- **Input:** `node tools/add-tracks.mjs`
- **What happens:** "You're a Big Girl Now", "Meet Me in the Morning" and "If You See Her, Say Hello" become songs.
- **Output:** `runs/add-tracks.txt` (lines 1-2)
- **Edge cases:** a rerun keeps their text.

##### Takes and live takes
- **Input:** the Pat Garrett and Self Portrait track lists
- **What happens:** Billy 4 and Billy 7 map to Billy 1; Alberta #1 and #2 become one song; four live takes map to their songs.
- **Output:** `runs/add-tracks.txt` (lines 3-10)
- **Edge cases:** "Forever Young (continued)" maps to "Forever Young" by its title alone.

#### Why it works this way
One map from track to song is written once and checked, so the album page, the song page (its takes, and "Also on")
and the data check all read the same answer.

#### What else was considered
Matching titles at build time, as the album page did; it cannot place a take or a live take.

#### What breaks it
A track title MusicBrainz changes later: the next `add-tracks` makes it a new song unless its title still matches.

#### Limits
The writers' notes are from what they knew; flagged facts and every track position were checked, not every sentence.

#### Files and commands
`tools/add-tracks.mjs`, `tools/lib/tracks.mjs`, `data/sources/track-map.json`, `data/parts/album-tracks.json`,
`data/sources/summaries.json`, `data/BRIEF-songs.md`.

### Step 2 — Players, clips and lyrics links for the new songs

**You can now:** play any track from its page, watch an official clip for most, and open its lyrics or see who wrote its words.

All 452 album songs have a Spotify player (`runs/fetch-spotify.txt`, `runs/fetch-spotify-2.txt`): the first run
found 448, and the four others were spelled differently (A5). 351 have an official clip from Bob Dylan's channel,
up from 166 (`runs/find-youtube.txt`; its own count, 364, wrongly included the 13 moments' clips, and the script now
counts album songs only), and the clip check says every clip plays (`runs/check-clips.txt`). 421 link to their words on bobdylan.com (`runs/find-lyrics-links*.txt`); the others are
songs by other writers, which show "Words by …" or "A traditional song", and "Katie's Been Gone" and "Alberta". No
Genius links (D2).

**Commits:** `cadf678`, `03bd77d`.

```diagram
flow: Where a new song's links come from
song = a new song -> spotify = Spotify: fetch-spotify | 452 of 452
song -> clip = official clip: find-youtube | 351 of 452
song -> lyrics = bobdylan.com: find-lyrics-links | 421 of 452
song --> words = "Words by …": another writer's song | in place of a link
song -x genius = Genius: blocked from here | D2
```

#### Worked examples

##### All 452 on Spotify
- **Input:** `node tools/fetch-spotify.mjs`, then again with the spellings
- **What happens:** 448, then the last four.
- **Output:** `runs/fetch-spotify-2.txt`
- **Edge cases:** a title Spotify spells differently ("Talkin'") needs a spelling.

#### Why it works this way
The fetchers match by title, as the plan says, so a link is only kept when it is the song.

#### What else was considered
Typing links in by hand for the misses; the spellings keep them reproducible.

#### What breaks it
A song taken off Spotify or YouTube: the clip check names a clip that stops playing.

#### Limits
101 album songs have no official clip, most of the standards and carols.

#### Files and commands
`tools/fetch-spotify.mjs`, `tools/find-youtube.mjs`, `tools/find-lyrics-links.mjs`, `npm run check:clips`.

### Step 3 — Connections and threads reach the new songs

**You can now:** follow a new song to the songs it is tied to, and meet it in a thread.

A pass across the whole catalogue added 30 connections touching 33 new songs: 12 famous covers (each with its version
song), 1 borrowed tune ("Apple Suckling Tree" on "Froggie Went a-Courtin'"), and 17 same-theme pairs, such as "If You
See Her, Say Hello" and "Girl from the North Country". The site has 165 connections, up from 135. As the review asked,
said plainly: a song with no connection still has its full page, with no cards and no small map, and nothing is
guessed. 26 new songs joined ten threads in time order; no existing thread changed order.

**Commits:** `cadf678`.

```diagram
flow: A new song's connections
song = a new song -> link = a connection: only when sure | 30 added
link -> cards = cards on both pages
song --> none = no connection: the page has no cards | most standards and carols
song --> thread = a thread, in time order | 26 added
```

#### Worked examples

##### A same-theme pair
- **Input:** `/song/if-you-see-her-say-hello/`
- **What happens:** a connection card to "Girl from the North Country".
- **Output:** `runs/npm-test.txt`
- **Edge cases:** "Christmas Island" has no connection and no cards.

#### Why it works this way
A wrong connection is worse than a missing one (the first build's rule), so the pass wrote only what it was sure of.

#### What else was considered
A larger pass of 40–90 links; the writer stopped at 30.

#### What breaks it
A link to a song id that is renamed: the data check fails on it.

#### Limits
Most of the 271 new songs have no connection yet.

#### Files and commands
`data/parts/connections-2.json`, `data/threads.json`, `tools/check-data.mjs`.

### Step 4 — Album pages, search and the map with every track; the data check holds it

**You can now:** click any row of any track list, find any track in search, and trust `npm test` to fail if a track loses its page.

Every album row is a link (the "its story ›" mark and the count of pages are gone), takes link to the song they are
takes of, and a song page lists its takes ("Takes on the album: Billy 1 · Billy 4 · Billy 7") and a live take on
another album ("Also on Self Portrait: She Belongs to Me (live)"). Search indexes all 538 songs; the map draws the 230
with a connection. The site builds 1,415 pages (the desktop plan's pages included). The data check fails on an album
track with no song, a song that is on no track, a song with no summary, and a summary outside 45–90 words or quoting
more than a title (`runs/npm-test.txt`).

**Commits:** `cadf678`, `1b32857` (the album and song pages, reworked by the desktop plan in the same commit).

```diagram
compare: Blood on the Tracks' track list
before: 10 rows, 7 with "its story ›", 3 with nothing behind them
after: 10 rows, every one a link to its song
```

#### Worked examples

##### A track with no song
- **Input:** a track list with a track the map does not cover
- **What happens:** the data check fails, naming the album, the track number and its title.
- **Output:** `runs/npm-test.txt`
- **Edge cases:** a song whose album lists it on no track fails too.

#### Why it works this way
The map is the one place a track meets its song, so the check reads it.

#### What else was considered
Checking titles against song titles; takes and live takes would fail.

#### What breaks it
A new MusicBrainz track list fetched without running `add-tracks`.

#### Limits
The check covers the 39 albums the site has.

#### Files and commands
`src/pages/album/[id].astro`, `src/pages/song/[id].astro`, `tools/check-data.mjs`, `npm test`.

## Tests run

- `npm test` (the data check, the build, the phone check, the desktop check): all pass, 1,415 pages (`runs/npm-test.txt`).
- `npm run check:clips`: every clip plays (`runs/check-clips.txt`).
- `node tools/add-tracks.mjs`, run twice: the second run changes nothing (`runs/add-tracks.txt`).

## Not done

- **Genius links:** none (D2): Genius blocks this machine. They can be added by hand to `data/sources/lyrics.json`, or the finder run from a network Genius answers.
- **Facts in the new notes:** the facts the writers flagged and every track position were checked; not every sentence of 271 notes.
- **Clips:** 101 album songs have no official clip.

## Categories of change

- **Track map** {track-map} (`tools/add-tracks.mjs`, `tools/lib/tracks.mjs`, `data/sources/track-map.json`) (step 1): every album track mapped to its song once, takes and live takes included.
  Runs: `runs/add-tracks.txt`
- **New songs' writing** {writing} (`data/parts/album-tracks.json`, `data/sources/summaries.json`, `data/BRIEF-songs.md`) (step 1): 271 songs' notes, themes, previews, summaries and credits.
  Runs: `runs/npm-test.txt`
- **Links and players** {links} (`tools/fetch-spotify.mjs`, `tools/find-youtube.mjs`, `tools/find-lyrics-links.mjs`, `data/sources/*.json`) (step 2): Spotify for all 452, 351 song clips, 421 lyrics links; reruns keep earlier results.
  Runs: `runs/fetch-spotify-2.txt`, `runs/find-youtube.txt`, `runs/check-clips.txt`
- **Connections and threads** {connections} (`data/parts/connections-2.json`, `data/threads.json`) (step 3): 30 connections, 12 versions, 26 thread steps.
  Runs: `runs/npm-test.txt`
- **Album and song pages, data check** {pages} (`src/pages/album/[id].astro`, `src/pages/song/[id].astro`, `tools/check-data.mjs`, `tools/merge-data.mjs`) (step 4): every row a link, takes and "Also on", the check on every track.
  Runs: `runs/npm-test.txt`

## Decisions kept

- **D-001** "Astro, a page per song": each new song is one more Astro page (`src/pages/song/[id].astro`).
- **D-003** "The real covers": a new song's page shows its album's cover (`src/components/Cover.astro`).
- **D-005** "An embedded Spotify player": all 452 album songs have one (`data/sources/spotify.json`).
- **D-006** "Wikimedia Commons, free-licensed": no new photographs.
- **D-007** "The link and a preview in our words": every new song has a preview, and its bobdylan.com link where there is one (`data/sources/lyrics.json`).
- **D-033** "Lyrics are summarised, not quoted": every new song has a summary, and the data check holds them to 45–90 words with no quotation (`tools/check-data.mjs`).
- **D-034** "All 277": every track opens a page (`data/sources/track-map.json`).
- **D-035** "The same page as his own songs": another writer's song has the same page, with "Words by …" (`src/components/Words.astro`).
- Earlier accepted calls whose lines this changed (`reel check --base 40447f2`): the album page's full track list (the first build's A17) is kept, every row now a link; Spotify matching by title (A8) is kept, with spellings added (A5); the song page's previous and next song (A16), search's typo forgiveness (A14) and the threads (A7) are kept as they were.

## Code check

Findings: `code-check/findings.md` (4 steps ✓, 14 decisions ✓, 1 ✗, 3 unexplained ✗).

- **D-013** (the threads are built by `tools/make-threads.mjs`): ✗ answered by D3: the threads are kept by hand now, and the tool will not overwrite them without `--force`.
- **`src/components/Words.astro`** ("A traditional song"): ✗ answered by A8.
- **`src/pages/song/[id].astro`** ("Also on …"): ✗ answered by A9.
- **`data/sources/lyrics.json`** (instrumentals with a bobdylan.com link): ✗ answered by D4.
