# Fresh eyes: the newcomer's brief · walkthrough-video

You are a newcomer to this project. You are about to watch "walkthrough-video", a narrated video of 12 scenes,
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
# Fresh eyes: newcomer · round 1 · stamp 0a8d0ce400bb

- N1 · scene 4 · "the phrase or thing": what you could not explain, and what you guessed; why it matters
- N2 · scene 7 · …
```

One finding a line, numbered N1, N2 … in scene order, each starting with its scene. Put the phrase or
the thing on screen in double quotes. Write "- none" if you have nothing. Leave room under each line: the
author answers each one there. Do not answer or fix anything yourself.

## Viewers were lost on these before

What the people who review this project's videos did not follow in earlier videos (words they looked up, questions
they asked, "Explain this more", checks they missed). Watch for the same kind of phrase here.

- a quick check missed (desktop, plan review): You open the site in a window 900 pixels wide. Which layout do you get?
- a quick check missed (desktop, plan review): The Cards and Map button shows on a thread in a window 1440 pixels wide. Which check fails?
- a word looked up (every-song, plan review): call
- a quick check missed (every-song, plan review): "Christmas Island", on Christmas in the Heart, has nothing the writers are sure ties it to another song. What is on its page?
- a word looked up (dylan-site, walkthrough review): wikimedia commons
- a word looked up (dylan-site, plan review): connection

## The videos this one leans on (a line each)

- 2026-10-06-dylan-site: Bob Dylan, explored: a phone-first site of eras, albums…: decisions D-001, D-003, D-005, D-006, D-007, D-033, D-002: how should the site be built?; explains "search"
- 2026-10-07-desktop: The Dylan site on a computer: full-window eras, two-column…: explains "era"; explains "desktop check"

## The words this video gives a meaning

- **track**: one recording on an album, a row in its track list
- **take**: one recording of a song (an album can hold several)
- **live take**: a recording made at a concert
- **map**: here, the file that says which song each track belongs to
- **script**: a small program run from the command line
- **album-tracks**: data/parts/album-tracks.json, the file holding the 271 new songs
- **co-wrote**: wrote together with someone else
- **Spotify**: a music streaming service
- **official clip**: a video posted by Bob Dylan's own channel
- **bobdylan.com**: Dylan's official site, with the words of the songs he wrote
- **Genius**: a lyrics website that licenses the words it shows
- **instrumental**: a track with no words
- **traditional**: a folk song nobody now knows the writer of
- **thread**: a path through songs that share something, in time order
- **connection**: a link between two songs, with a kind and a sentence of why
- **cover**: another artist's recording of a song
- **force**: the --force flag that makes the thread script overwrite the threads anyway
- **data check**: the script that fails when the dataset is wrong
- **phone check**: the script that opens every kind of page at phone size
- **desktop check**: the script that does the same at computer sizes
- **clip check**: the script that asks YouTube whether each clip still plays
- **off-plan change**: something built other than the plan said
- **list**: the choices that do not pause the video, one line each
- **Hoagy Carmichael**: the songwriter who wrote "Stardust"'s music in 1927
- **Mitchell Parish**: the lyricist who wrote its words
- **Saturday Night Live**: the TV show where Dylan played three songs in 1979

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

### Scene 1 · part: What landed

Picture: `shots/scene-01.png`

> Every track now has a page. All four hundred and fifty-eight tracks on the thirty-nine albums link, two hundred and seventy-one of them to new songs. Every album song has a Spotify player, three hundred and fifty-one have an official clip, and four hundred and twenty-one link to their lyrics.

### Scene 2

Picture: `shots/scene-02.png`

> Step one. A script maps every track to its song, once, and the album pages read that map. Takes join their song: Billy 4 and Billy 7 are listed on Billy 1, and Alberta's two takes became one song. A live take with no page became a song under its plain title, like Minstrel Boy. And where Dylan co-wrote the words, the song counts as his own.

### Scene 3

Picture: `shots/scene-03.png`

> One off-plan change: the new songs are in a file called album-tracks, not tracks, because tracks was already taken by the Blood on the Tracks era.

### Scene 4

Picture: `shots/scene-04.png`

> Step two. Another writer's song names who wrote its words, like Stardust, by Hoagy Carmichael and Mitchell Parish. A traditional song says just that: a traditional song.

### Scene 5

Picture: `shots/scene-05.png`

> Off the plan: instrumentals keep their link to bobdylan.com, as Nashville Skyline Rag already had. The site lists a page for each, though there are no words on it.

### Scene 6

Picture: `shots/scene-06.png`

> And no Genius links. Genius answers this machine with an error, and the search engines that could find its pages ask if it's a robot. Rather than guess at addresses that might be dead, there are none; you could add them by hand.

### Scene 7

Picture: `shots/scene-07.png`

> Step three. Thirty new connections reach the new songs, twelve of them famous covers. If You See Her, Say Hello now leads to Girl from the North Country, and it joins the Love gone wrong thread.

### Scene 8

Picture: `shots/scene-08.png`

> Off the plan: the threads are now kept by hand. The script that built them would choose ten new songs per theme and drop the ones placed here, so it refuses to run without force.

### Scene 9

Picture: `shots/scene-09.png`

> Step four. Every row of every album is a link. And a song page now names its live takes on other albums: She Belongs to Me shows its Self Portrait take.

### Scene 10

Picture: `shots/scene-10.png`

> What ran: the data check, the build of fourteen hundred pages, the phone check and the desktop check, all passing, and the clip check. Not done: Genius links, and checking every sentence of the new notes.

### Scene 11

Picture: `shots/scene-11.png`

> The rest of the choices are on this list: the fetchers keep what they found, the Saturday Night Live clip stays dropped, and the cover versions stay out of their thread.

### Scene 12

Picture: `shots/scene-12.png`

> That's every track a page. Seeing it run, anything you'd change?
