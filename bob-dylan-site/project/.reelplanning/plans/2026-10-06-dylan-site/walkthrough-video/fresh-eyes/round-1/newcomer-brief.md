# Fresh eyes: the newcomer's brief · walkthrough-video

You are a newcomer to this project. You are about to watch "walkthrough-video", a narrated video of 11 scenes,
the way a viewer would: the narration of each scene as it is said, and a picture of the scene at its last moment
as the review page shows it (the player's buttons, tabs and captions included). You also have what a viewer can
open on the page: the glossary, the meanings this video gives its own words, and a line on each earlier video this
one leans on. You have nothing else: not the plan, not the code, not what the author meant.

List every phrase or thing on screen you could not explain from what the video had shown **by then**, what you
guessed it means, and every question a newcomer would ask. A word with a meaning below counts as explained. A
plain phrase with no meaning (made of ordinary words, like "the saved review file" or "drops the video") counts as
unexplained when the video never says what it is or where it comes from. Be specific: say the scene, the words,
and what you would need to follow.

**This is a rebuild: look only at what it changed.** Scenes 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 of the 11 are new or changed since
the last build, and those are what you look at. The
other scenes are not here: they have not changed since their own look. A finding on a scene not marked "look at
this one" is out of scope and is not counted.

A scene not here may have explained a phrase before the scene you look at: flag the phrase if that scene leaves you
unable to follow it, and the author will say where it is explained.

_Pictures: playwright-core is not installed; the frames alone instead (the player's tab, chips and captions are not in them)._

## The shape of newcomer.md (keep it exactly)

```
# Fresh eyes: newcomer · round 1 · stamp 9c1be9053655

- N1 · scene 4 · "the phrase or thing": what you could not explain, and what you guessed; why it matters
- N2 · scene 7 · …
```

One finding a line, numbered N1, N2 … in scene order, each starting with its scene (only scenes 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11). Put the phrase or
the thing on screen in double quotes. Write "- none" if you have nothing. Leave room under each line: the
author answers each one there. Do not answer or fix anything yourself.

## Viewers were lost on these before

What the people who review this project's videos did not follow in earlier videos (words they looked up, questions
they asked, "Explain this more", checks they missed). Watch for the same kind of phrase here.

- a word looked up (dylan-site, walkthrough review): wikimedia commons
- a word looked up (dylan-site, plan review): connection

## The videos this one leans on (a line each)

- none named

## The words this video gives a meaning

- **404**: the page a site shows when an address does not exist
- **base path**: the folder a site lives under on its host, such as /dylan-site/
- **system fonts**: the typefaces already on the phone, so nothing is downloaded
- **JSON**: a plain-text format for lists and fields of data
- **MusicBrainz**: a free online database of recordings and albums
- **Cover Art Archive**: a free online library of album cover images
- **Wikimedia Commons**: a free online library of photographs others may reuse under their licence
- **licence**: the terms under which a photo may be reused
- **Spotify**: a music streaming service
- **YouTube**: Google's video site
- **Spotify id**: the code that names one track on Spotify
- **official channel**: the YouTube channel run for Bob Dylan himself
- **unofficial upload**: a clip posted by someone else, which YouTube may take down
- **d3-force**: a code library that spreads dots out so connected ones sit close
- **edit**: one letter changed, added, removed or swapped
- **view**: one screen of the site, such as an album page or search
- **content filter**: a safety check on the AI's own output that stopped it quoting lyrics
- **quick check**: a question the video asks you, to see whether the build does what you expect
- **phone check**: the script that opens every kind of page at phone size and fails on a sideways scroll, a small button or an error
- **data check**: the script that fails when the dataset is wrong
- **code check**: a second AI that read the code against the plan, knowing nothing of how it was written
- **npm**: the tool that installs and runs a project's packages and scripts
- **npm run check:clips**: the clip check: it asks YouTube whether each clip still plays
- **GitHub Pages**: a free service that hosts a site made of plain files
- **flag**: to mark a choice you'd have made the other way, so it gets changed
- **walkthrough**: this file and video: what landed, and the choices made while building
- **exit 0**: how a script says it passed, and exit 1 that it failed
- **song id**: the short name a song is found by, as in its address: like-a-rolling-stone
- **preview**: one sentence in our own words on what a song says
- **note**: one sentence of fact about a song
- **the map**: the view where every song is a dot and every connection a line
- **Cytoscape**: another code library for drawing networks of dots
- **precomputed**: worked out once when the site is built, not in the browser
- **Manchester**: the 1966 concert where a fan shouted "Judas"
- **youtube-nocookie.com**: YouTube's player that sets no tracking cookies until you play
- **try-search**: a script that types searches into the built site and prints what it finds
- **tab bar**: the row of Eras, Threads, Search and About

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
- **A repo / repository**: A project's folder of code together with its whole history, kept with git.
- **A branch**: A line of work kept apart from the main code until it is merged.
- **Merge**: To bring a branch's changes into the main code. A pull request is merged when it is accepted.
- **A commit**: One saved change to a repo, with a message saying what changed.
- **A pull request / PR**: A change someone asks to have merged into a repo; others read it and comment before it goes in.
- **The agent**: The AI coding assistant that does the work, in chat: it writes the plan, builds the code and makes the videos.

## The video, scene by scene

### Scene 1 · part: What changed · look at this one

Picture: `shots/scene-01.png`

> This is the walkthrough again, after your review. Six things changed: a look for each era, threads and the map redrawn, many more connections, full track lists, a loaded player on every song, and many more clips. The seven choices you accepted stay as they were.

### Scene 2 · look at this one

Picture: `shots/scene-02.png`

> Each era now has its own look. Greenwich Village is a typed flyer with a rubber stamp. Going Electric is a Dont Look Back cue card. Gospel is a revival handbill in gold and red. The eighties are neon tubes.

### Scene 3 · look at this one

Picture: `shots/scene-03.png`

> The choice changed: each era has its own typeface, eleven free fonts chosen from its records and posters, instead of the fonts already on the phone. Back to the Roots is a seventy-eight label; the Standards, an art deco frame.

### Scene 4 · look at this one

Picture: `shots/scene-04.png`

> Threads and the map are redrawn. Each thread card wears its song's era, with the year large and how far it moved from the card before. The map is a night chart, each dot coloured by its era, and no label overlaps another.

### Scene 5 · look at this one

Picture: `shots/scene-05.png`

> You asked why there were so few connections. The first writers worked one era at a time, and could only link songs inside their own era. A pass across the whole catalogue added eighty-six: famous covers, the tunes he borrowed, and songs that share a theme across the years. There are a hundred and thirty-five now.

### Scene 6 · look at this one

Picture: `shots/scene-06.png`

> And you asked whether songs were missing. They were only unlisted. An album page now shows every track, numbered, and marks the songs that have their own page.

### Scene 7 · look at this one

Picture: `shots/scene-07.png`

> On a song page, the players are loaded with the page now, in a frame that matches the era. They play from Spotify and YouTube on the site; here they are blank.

### Scene 8 · look at this one

Picture: `shots/scene-08.png`

> No song is left without a player: all a hundred and eighty-one album songs match on Spotify now. And there are a hundred and seventy-nine clips: an official one for most songs, and footage of moments like Newport, some posted by others. A clip check finds any that are taken down.

### Scene 9 · look at this one

Picture: `shots/scene-09.png`

> You asked whether we really can't quote a line. Quoting a line or two with credit is common, and may well be allowed. The limit is the AI itself: a filter stopped it every time it wrote lyric lines. So none are written, but lines you add by hand show on the page, credited.

### Scene 10 · look at this one

Picture: `shots/scene-10.png`

> What ran: the data check, the build, the phone check and the clip check, all passing. Not done: lyric excerpts, hosting, and the real covers inside the checks.

### Scene 11 · look at this one

Picture: `shots/scene-11.png`

> That's what changed. Seeing it run, anything you'd change?
