# Fresh eyes: the newcomer's brief · video

You are a newcomer to this project. You are about to watch "video", a narrated video of 22 scenes,
the way a viewer would: the narration of each scene as it is said, and a picture of the scene at its last moment
as the review page shows it (the player's buttons, tabs and captions included). You also have what a viewer can
open on the page: the glossary, the meanings this video gives its own words, and a line on each earlier video this
one leans on. You have nothing else: not the plan, not the code, not what the author meant.

List every phrase or thing on screen you could not explain from what the video had shown **by then**, what you
guessed it means, and every question a newcomer would ask. A word with a meaning below counts as explained. A
plain phrase with no meaning (made of ordinary words, like "the saved review file" or "drops the video") counts as
unexplained when the video never says what it is or where it comes from. Be specific: say the scene, the words,
and what you would need to follow.

_Pictures: playwright-core is not installed; the frames alone instead (the player's tab, chips and captions are not in them)._

## The shape of newcomer.md (keep it exactly)

```
# Fresh eyes: newcomer · round 1 · stamp 124b72a2eadf

- N1 · scene 4 · "the phrase or thing": what you could not explain, and what you guessed; why it matters
- N2 · scene 7 · …
```

One finding a line, numbered N1, N2 … in scene order, each starting with its scene. Put the phrase or
the thing on screen in double quotes. Write "- none" if you have nothing. Leave room under each line: the
author answers each one there. Do not answer or fix anything yourself.

## Viewers were lost on these before

What the people who review this project's videos did not follow in earlier videos (words they looked up, questions
they asked, "Explain this more", checks they missed). Watch for the same kind of phrase here.

- a word looked up (dylan-site, walkthrough review): wikimedia commons
- a word looked up (dylan-site, plan review): connection

## The videos this one leans on (a line each)

- 2026-10-06-dylan-site: Bob Dylan, explored: a phone-first site of eras, albums…: decisions D-001, D-003, D-005, D-006, D-007, D-033, D-002: how should the site be built?; explains "search"
- 2026-10-07-desktop: The Dylan site on a computer: full-window eras, two-column…: explains "connection"

## The words this video gives a meaning

- **track**: one recording on an album, a row in its track list
- **row**: one line of an album's track list
- **page**: a song's own page on the site, with its note, words, player and connections
- **album songs**: Dylan's songs on his albums that have a page, 181 today
- **landmark**: one of the 16 albums the dataset was to cover in full
- **in full**: with every track written
- **record**: a song's entry in the dataset: its id, title, album and year
- **writers**: the AI helpers that write the dataset's text, one batch of songs at a time
- **note**: one sentence of fact about a song
- **themes**: the subjects a song shares with others, such as loss or faith
- **preview**: one sentence in our own words on what a song says
- **summary**: three or four sentences in our own words on what a song is about and how it unfolds
- **take**: one recording of a song (an album can hold several takes of one song)
- **live take**: a recording made at a concert
- **instrumental**: a track with no words
- **standards**: popular songs of the 1930s to 1950s, like those Sinatra sang
- **carols**: Christmas songs
- **The Band**: the group that backed Dylan from 1965 and recorded The Basement Tapes with him
- **script**: a small program run from the command line
- **fetcher**: a script that looks a song up on another site and keeps its link
- **Spotify**: a music streaming service
- **YouTube**: Google's video site
- **official clip**: a video posted by Bob Dylan's own channel
- **bobdylan.com**: Dylan's official site, with the words of the songs he wrote
- **lyrics link**: the button on a song page that opens its words on bobdylan.com
- **its story**: the mark on today's album rows that have a page
- **search**: the view that finds eras, albums and songs as you type
- **the map**: the view where every song is a dot and every connection a line
- **data check**: the script that fails when the dataset is wrong
- **build**: turning the site's source into its pages
- **Hoagy Carmichael**: the American songwriter who wrote "Stardust" in 1927
- **Pat Garrett**: Pat Garrett & Billy the Kid, the 1973 film soundtrack Dylan recorded
- **Triplicate**: his 2017 album of thirty standards
- **Blood on the Tracks**: his 1975 album
- **quick check**: a question the video asks you, to see whether the plan does what you expect
- **recommended**: the option I would pick, marked on its card
- **fetch-spotify**: the fetcher that finds a song on Spotify
- **find-youtube**: the fetcher that finds an official clip on YouTube
- **find-lyrics-links**: the fetcher that finds a song's words on bobdylan.com
- **flag**: to mark something for the reviewer to look at
- **our own words**: written fresh, quoting nothing

## The glossary (every word a viewer can look up)

- **choice** (in the files: A call): A choice the agent made on its own while building, one the plan did not cover: one row in `walkthrough.md`.
- **label** (in the files: A tag): A label the agent puts on a choice it made alone, saying why you might want to look at it. Four kinds: *visible* (you'll notice it when you use the thing), *hard-to-undo* (changing it later costs real work), *close* (a toss-up: the other way was nearly as good), *deviation* (an off-plan change). An off-plan change, and a choice labelled visible or hard-to-undo, pauses the walkthrough video; every other choice is on its list at the end.
- **late fix** (in the files: A miss): A late fix: something a review let through that a later plan, fix or review had to change. A recent one makes a choice that shares its label pause the walkthrough video.
- **off-plan change** (in the files: A deviation): An off-plan change: a choice where the agent did something other than what the plan said. It always stops the walkthrough video.
- **scene** (in the files: A beat): One scene of a video: a picture and a sentence or two of its voice. A video is a row of scenes; a question or a choice pauses at the end of its scene.
- **A chapter**: A stretch of one video under one title; the player shows "Chapter 2 of 4" as it begins. Not a plan's step, and not a part of the system.
- **part of the system** (in the files: An area): One part of the system, drawn as a box, with an id in `system.json` (where it is called a component).
- **The app shell**: The one page that holds the site: it reads the address and draws one view at a time, with the bottom bar.
- **The dataset**: The JSON files in `data/` that hold every era, moment, album, song, connection, thread and photo, written by hand era by era in `data/parts/` and merged by a script.
- **The data check**: A script that fails when the dataset has an id used twice, a connection to a song that does not exist, an album outside its era's years, a photo with no licence or credit, or a lyric excerpt over two lines.
- **An era**: A named stretch of Dylan's life with years and a colour, such as "Going Electric, 1965–1966"; the timeline shows one per panel.
- **A moment**: A dated event in his life that is not a record, such as the 1966 motorcycle accident.
- **A connection**: A link between two songs, with a kind (borrowed tune, answer, rewrite, covered by, re-recorded, same theme) and one sentence of why.
- **The era timeline**: The home view: one full-width panel per era, swiped sideways, with a strip of all eras on top.
- **Album and song pages**: The page for one album (why it matters, its songs) and for one song (its note, themes and connections).
- **A thread**: A path through songs that share something, in time order, shown as cards you swipe through.
- **Search**: The view that finds eras, albums and songs as you type, in the page with no server.
- **The phone check**: A script that opens every view at phone width and fails on a sideways scroll, a tap target under 44 px or an error.
- **The desktop check**: A script that opens every kind of page at computer sizes (1440 × 900 and 1100 × 800) and fails on a sideways scroll, a control showing that does nothing at that width, an era's look that stops short of the window, content in a phone-width column, a map dot that does nothing when clicked, or an error.
- **A repo / repository**: A project's folder of code together with its whole history, kept with git.
- **A branch**: A line of work kept apart from the main code until it is merged.
- **Merge**: To bring a branch's changes into the main code. A pull request is merged when it is accepted.
- **A commit**: One saved change to a repo, with a message saying what changed.
- **A pull request / PR**: A change someone asks to have merged into a repo; others read it and comment before it goes in.
- **The agent**: The AI coding assistant that does the work, in chat: it writes the plan, builds the code and makes the videos.

## The video, scene by scene

### Scene 1 · part: Dead rows

Picture: `shots/scene-01.png`

> Blood on the Tracks has ten tracks, and seven of them have a page. "You're a Big Girl Now", "Meet Me in the Morning" and "If You See Her, Say Hello" are rows with nothing behind them. Across all thirty-nine albums, two hundred and seventy-seven tracks are like that.

### Scene 2

Picture: `shots/scene-02.png`

> About a hundred and fifty are his own songs. About a hundred and ten are other writers' songs he recorded: standards, carols, folk and blues. About eight are The Band without him, on The Basement Tapes. And about ten are instrumentals and alternate takes.

### Scene 3

Picture: `shots/scene-03.png`

> This falls short of what you chose. You picked all thirty-nine albums, sixteen in full. The sixteen are not in full: each has seven or eight songs written, so fifty-four of their tracks have no page. That should have been flagged when it happened.

### Scene 4

Picture: `shots/scene-04.png`

> Two changes, in four steps. First, every track becomes a song, with its writing, its player and its links. Then every track becomes part of the site: connections, threads, album pages, search and the map, with a check that fails if a track ever loses its page.

### Scene 5 · part: Every track a song

Picture: `shots/scene-05.png`

> Step one. A new script reads each album's track list and writes a record for every track that has no song yet. Then writers add each song's note, themes, preview and summary, in our own words, never quoting the lyrics, just as the hundred and eighty-one were written.

### Scene 6

Picture: `shots/scene-06.png`

> Some tracks need care. On Pat Garrett, "Billy 4" and "Billy 7" join "Billy 1", which already has a page, as its takes. A live take of a song that already has a page links to that page. And a Band track says The Band, not Dylan.

### Scene 7

Picture: `shots/scene-07.png`

> Question one: which tracks get a page? A: the fifty-four missing from the sixteen landmarks, about a hundred and twenty new pages. B: all two hundred and seventy-seven, about six hundred. C: none. I recommend B.

### Scene 8

Picture: `shots/scene-08.png`

> With A, Blood on the Tracks is complete, and Triplicate keeps its twenty-seven empty rows.

### Scene 9

Picture: `shots/scene-09.png`

> With B, every row of every album opens a page.

### Scene 10

Picture: `shots/scene-10.png`

> With C, "If You See Her, Say Hello" stays a row with nothing behind it.

### Scene 11

Picture: `shots/scene-11.png`

> Question two: how much is written for a song by another writer? A: the same page as his own songs. B: a shorter page, the note and the player. C: no page, just the writer's name on the row. I recommend A.

### Scene 12

Picture: `shots/scene-12.png`

> With A, "Stardust" gets a note naming Hoagy Carmichael, a summary, and its player.

### Scene 13

Picture: `shots/scene-13.png`

> With B, "Stardust" gets one sentence and the player.

### Scene 14

Picture: `shots/scene-14.png`

> With C, "Stardust" is a name in Triplicate's track list, and not a link.

### Scene 15

Picture: `shots/scene-15.png`

> A quick check, a question to see whether the plan does what you expect. This one's on step one. On Self Portrait, you click "She Belongs to Me (live)". Its song had no page before this plan. Where do you land?

### Scene 16 · part: Links and connections

Picture: `shots/scene-16.png`

> Step two. The same three fetchers that found today's links run again for the new songs: Spotify, YouTube's official clips, and the lyrics on bobdylan.com. That site lists songs he wrote, so another writer's song shows who wrote its words instead of a lyrics link.

### Scene 17

Picture: `shots/scene-17.png`

> Step three. A pass across the whole catalogue links the new songs to others, and only when it is sure. "If You See Her, Say Hello" joins "You're Gonna Make Me Lonesome When You Go", two songs about a love that has ended. Many standards will have no connection at all.

### Scene 18

Picture: `shots/scene-18.png`

> A quick check on step two. You open "Stardust". What is where the lyrics link would be?

### Scene 19 · part: Part of the site

Picture: `shots/scene-19.png`

> Step four. On an album page every row becomes a link, so the "its story" marks go. Search finds every track, and the map gains their dots. The site grows from eight hundred and two pages to about fourteen hundred. And the data check fails on any album track with no song.

### Scene 20

Picture: `shots/scene-20.png`

> A quick check on step three. "Braggin'", on Triplicate, has nothing the writers are sure ties it to another song. What is on its page?

### Scene 21

Picture: `shots/scene-21.png`

> And one on step four. A track is added to an album's list later, with no song. What happens at the next build?

### Scene 22

Picture: `shots/scene-22.png`

> That's the plan: every track a song, and every song part of the site. Two questions: which tracks, and how much for other writers' songs.
