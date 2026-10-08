# Fresh eyes: the newcomer's brief · walkthrough-video

You are a newcomer to this project. You are about to watch "walkthrough-video", a narrated video of 16 scenes,
the way a viewer would: the narration of each scene as it is said, and a picture of the scene at its last moment
as the review page shows it (the player's buttons, tabs and captions included). You also have what a viewer can
open on the page: the glossary, the meanings this video gives its own words, and a line on each earlier video this
one leans on. You have nothing else: not the plan, not the code, not what the author meant.

List every phrase or thing on screen you could not explain from what the video had shown **by then**, what you
guessed it means, and every question a newcomer would ask. A word with a meaning below counts as explained. A
plain phrase with no meaning (made of ordinary words, like "the saved review file" or "drops the video") counts as
unexplained when the video never says what it is or where it comes from. Be specific: say the scene, the words,
and what you would need to follow.

**This is a rebuild: look only at what it changed.** Scenes 9, 11 of the 16 are new or changed since
the last build, and those are what you look at. Scenes 8, 10, 12 are here for context only,
the scene just before or after a changed one: they have not changed and had their look, so list nothing on them. The
other scenes are not here: they have not changed since their own look. A finding on a scene not marked "look at
this one" is out of scope and is not counted.

A scene not here may have explained a phrase before the scene you look at: flag the phrase if that scene leaves you
unable to follow it, and the author will say where it is explained.

_Pictures: playwright-core is not installed; the frames alone instead (the player's tab, chips and captions are not in them)._

## The shape of newcomer.md (keep it exactly)

```
# Fresh eyes: newcomer · round 1 · stamp a9e1f178072d

- N1 · scene 4 · "the phrase or thing": what you could not explain, and what you guessed; why it matters
- N2 · scene 7 · …
```

One finding a line, numbered N1, N2 … in scene order, each starting with its scene (only scenes 9, 11). Put the phrase or
the thing on screen in double quotes. Write "- none" if you have nothing. Leave room under each line: the
author answers each one there. Do not answer or fix anything yourself.

## Viewers were lost on these before

What the people who review this project's videos did not follow in earlier videos (words they looked up, questions
they asked, "Explain this more", checks they missed). Watch for the same kind of phrase here.

- a comment (desktop, walkthrough review): "i also think that some on the desktop feels kind of bare; we might need more content. like the sides of the page are still kind of empty, and especially the biogrpahy pages with no other contents. they should have link…
- a quick check missed (desktop, plan review): You open the site in a window 900 pixels wide. Which layout do you get?
- a quick check missed (desktop, plan review): The Cards and Map button shows on a thread in a window 1440 pixels wide. Which check fails?
- a word looked up (every-song, plan review): call
- a quick check missed (every-song, plan review): "Christmas Island", on Christmas in the Heart, has nothing the writers are sure ties it to another song. What is on its page?
- a word looked up (dylan-site, walkthrough review): wikimedia commons
- a word looked up (dylan-site, plan review): connection

## The videos this one leans on (a line each)

- 2026-10-06-dylan-site: Bob Dylan, explored: a phone-first site of eras, albums…: decisions D-001, D-002, D-003, D-005, D-006, D-007, D-033: how should the site be built?; explains "search"

## The words this video gives a meaning

- **pixels**: the dots a screen is made of (a laptop window is about 1440 wide)
- **header**: the bar across the top of every page on a computer
- **tablet**: a window from 768 to 1099 pixels wide
- **dot**: one song on the map
- **tooltip**: the small label a browser shows when you hold the mouse still over something
- **pinch**: two fingers drawn apart or together to zoom
- **era**: a named stretch of Dylan's life, such as Going Electric
- **timeline**: the bar across the top of the home page, one stretch per era
- **words card**: the box on a song page with its preview, its summary and its lyrics link
- **connections**: links between two songs, with a kind and a sentence of why
- **moment**: a dated event in his life that is not a record, such as Newport 1965
- **thread**: a path through songs that share something, in time order, shown as cards
- **Cards and Map button**: the switch on a thread that shows its cards or its map
- **threads list**: the page listing all twelve threads
- **cover**: an album's front picture
- **search**: the view that finds eras, moments, albums and songs as you type
- **desktop check**: the script that opens every kind of page at computer sizes and fails when one looks or works like a phone page
- **data check**: the script that fails when the dataset is wrong
- **phone check**: the same at phone size
- **bottom bar**: the row of tabs at the bottom of a phone screen
- **hover label**: the label that appears beside a dot when the mouse is over it
- **off-plan change**: something built other than the plan said
- **list**: the choices that do not pause the video, one line each
- **recommended**: the option I would pick, marked on its card
- **deviation**: an off-plan change
- **npm test**: the one command that runs every check
- **call**: a choice made while building that the plan did not settle
- **tag**: a label on a choice: visible, hard to undo, or close

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

### Scene 8 · context only: it did not change, list nothing on it

Picture: `shots/scene-08.png`

> Off the plan: the tablet also hides the map's own Cards and Map button beside a thread's cards, the same leftover button this plan removes on a computer.

### Scene 9 · look at this one

Picture: `shots/scene-09.png`

> And the threads list shows each thread's covers from all its songs; an old tune, or another artist's version, shows the cover of the Dylan song it leads to.

### Scene 10 · context only: it did not change, list nothing on it

Picture: `shots/scene-10.png`

> One question came up while building. On a computer, the Cards and Map button is gone, so the full map has no way to the thread cards. A: add a link, a thread from this song, to the map page. B: no link; open the song, then start a thread from there. I recommend A.

### Scene 11 · look at this one

Picture: `shots/scene-11.png`

> With A, the map page's header gets one link to a thread from its song.

### Scene 12 · context only: it did not change, list nothing on it

Picture: `shots/scene-12.png`

> With B, it stays as built: two clicks, through the song page.
