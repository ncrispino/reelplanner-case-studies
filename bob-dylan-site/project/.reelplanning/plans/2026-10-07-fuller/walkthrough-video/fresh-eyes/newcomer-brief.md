# Fresh eyes: the newcomer's brief · walkthrough-video

You are a newcomer to this project. You are about to watch "walkthrough-video", a narrated video of 18 scenes,
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
# Fresh eyes: newcomer · round 1 · stamp f0c6dc2b2512

- N1 · scene 4 · "the phrase or thing": what you could not explain, and what you guessed; why it matters
- N2 · scene 7 · …
```

One finding a line, numbered N1, N2 … in scene order, each starting with its scene. Put the phrase or
the thing on screen in double quotes. Write "- none" if you have nothing. Leave room under each line: the
author answers each one there. Do not answer or fix anything yourself.

## Viewers were lost on these before

What the people who review this project's videos did not follow in earlier videos (words they looked up, questions
they asked, "Explain this more", checks they missed). Watch for the same kind of phrase here.

- a word looked up (desktop, walkthrough review): agent
- a word looked up (desktop, walkthrough review): beat
- a comment (desktop, walkthrough review): "i also think that some on the desktop feels kind of bare; we might need more content. like the sides of the page are still kind of empty, and especially the biogrpahy pages with no other contents. they should have link…
- a quick check missed (desktop, plan review): You open the site in a window 900 pixels wide. Which layout do you get?
- a quick check missed (desktop, plan review): The Cards and Map button shows on a thread in a window 1440 pixels wide. Which check fails?
- a word looked up (every-song, plan review): call
- a quick check missed (every-song, plan review): "Christmas Island", on Christmas in the Heart, has nothing the writers are sure ties it to another song. What is on its page?
- a word looked up (dylan-site, walkthrough review): wikimedia commons
- a word looked up (dylan-site, plan review): connection

## The videos this one leans on (a line each)

- 2026-10-06-dylan-site: Bob Dylan, explored: a phone-first site of eras, albums…: decisions D-001, D-003, D-005, D-006, D-007, D-033: how should the site be built?; explains "search"
- 2026-10-07-desktop: The Dylan site on a computer: full-window eras, two-column…: decisions D-052, D-036, D-037, D-038: q4
- 2026-10-07-every-song: Every track a page: the 277 album tracks with no page of…: decisions D-034, D-035: which tracks get a page?; explains "the band"
- 2026-10-07-every-song--walkthrough: Every track a page: the 277 album tracks with no page of…: explains "deviation"
- 2026-10-07-desktop--walkthrough: The Dylan site on a computer: full-window eras, two-column…: explains "call"

## The words this video gives a meaning

- **pixels**: the dots a screen is made of (a laptop window is about 1440 wide)
- **header**: the bar across the top of every page on a computer
- **era**: a named stretch of Dylan's life, such as Going Electric
- **full screen**: an era's first view, filling the window, with its photo and title (the spread)
- **spreads**: each era's full-screen first view
- **home page**: the site's front page, the timeline of all the eras
- **address**: the part of a link after the site's name, such as /era/electric/
- **bands**: the rows under an era's full screen: story and gallery, records and moments, songs, threads
- **gallery**: an era's photographs in a grid
- **moment**: a dated event in his life that is not a record, such as Newport 1965
- **clip**: a short official video from YouTube
- **caption**: the line under a photo saying what and who
- **credit**: the photographer and licence of a photo
- **records and moments band**: an era's albums with their years, and its moments on a dated line
- **songs to start with**: an era's six most connected songs
- **thread**: a path through songs that share something, in time order
- **connections**: links between two songs, with a kind and a sentence of why
- **In threads**: the band on a song page listing the threads it is in
- **Spotify player**: Spotify's own player, set in the page
- **essay**: an album's 150 words on why it matters
- **track list**: the album's tracks in order
- **opens in place**: the row grows to show more without leaving the page
- **rail**: the column at the right of a wide window
- **quick links**: the rail's links to the era, the album, a thread and the map
- **Read on**: the line of links out at the end of a page
- **Wikipedia**: the free encyclopedia
- **MusicBrainz**: the open music database the site's albums come from
- **Wikimedia Commons**: the free photo library the site's photographs come from
- **Big Pink**: the house in West Saugerties where the basement tapes were made
- **data check**: the script that fails when the dataset is wrong
- **desktop check**: the script that opens every kind of page at computer sizes and fails when a page is missing its parts
- **phone check**: the same at phone size
- **code check**: a fresh agent reading the code against the plan
- **fresh agent**: one that has not seen this conversation
- **gap**: a page with fewer photos than the check wants
- **off-plan change**: something built other than the plan said
- **deviation**: an off-plan change
- **list**: the choices that do not pause the video, one line each
- **recommended**: the option I would pick, marked on its card
- **call**: a choice made while building that the plan did not settle
- **tag**: a label on a choice: visible, hard to undo, or close
- **Fallen Angels**: his 2016 album of standards
- **search**: a page of results for words you type, here on Spotify

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

> The site has more on every page now. Each era tells its story beside a gallery of photographs, most moments have a page with a picture of their own, and every album has its player, an essay, and a track list that opens in place. Wide windows get a rail at the side, and pages link out to Wikipedia and MusicBrainz.

### Scene 2

Picture: `shots/scene-02.png`

> Step one. Every era now has three short sections, of about eighty words each: what happened, the music, and what it led to. Each moment has about a hundred and twenty words, and each album an essay of about a hundred and fifty. None of it quotes a lyric, and the data check holds each text to its length.

### Scene 3

Picture: `shots/scene-03.png`

> Step two. Thirty-eight more photographs from Wikimedia Commons, sixty-four in all. Two choices: a moment's photo belongs to its moment, and only tops up an era's gallery when the gallery has fewer than three. And many moment photos show the place, not the event, like Big Pink for the basement sessions; the caption says so.

### Scene 4

Picture: `shots/scene-04.png`

> Step three. Under every era's full screen come its bands: the story and gallery, records and moments, songs to start with, and threads. Five choices. Every era gets them, the home page too. The records and moments band shows only on a computer. A moment with no clip or photo shows the era's photograph, labelled. The gallery is a grid, with each credit when a photo opens. And an era lists at most six threads.

### Scene 5

Picture: `shots/scene-05.png`

> That first choice is question five. A: the bands stay on the home page too, so scrolling down from any era opens its story. B: they show only at an era's own address, and the home page keeps the spreads alone. I recommend A.

### Scene 6

Picture: `shots/scene-06.png`

> With A, the home page stays as built: a long page, with every era's story under it.

### Scene 7

Picture: `shots/scene-07.png`

> With B, the home page loses the bands, and there are two timelines to keep.

### Scene 8 · part: Albums and songs

Picture: `shots/scene-08.png`

> Step four. An album page has the cover and its Spotify player on the left, and the essay and track list on the right. Three choices: under the tracks, six connections that lead off the album, not all of them; a song's In threads band also lists the thread made from that song; and Fallen Angels has no player, because MusicBrainz lists no Spotify album for it.

### Scene 9

Picture: `shots/scene-09.png`

> Off the plan: the Also in this era row is gone, because the previous and next album, with their covers, show the same era just below.

### Scene 10

Picture: `shots/scene-10.png`

> Fallen Angels is question four. A: nothing takes the player's place, and its songs keep their own players. B: one line, Find Fallen Angels on Spotify, that opens a Spotify search for it. I recommend B.

### Scene 11

Picture: `shots/scene-11.png`

> With A, the album page stays as built.

### Scene 12

Picture: `shots/scene-12.png`

> With B, one link sits where the player would be.

### Scene 13 · part: Wide windows and links out

Picture: `shots/scene-13.png`

> Step five. From fourteen hundred and forty pixels, a rail sits at the right of album, song and moment pages: the era, a bar for each era with this one lit, and quick links. The content lines up with the header, so at fourteen forty it is nine hundred and eighty-four pixels wide, and the full twelve hundred from about nineteen hundred.

### Scene 14

Picture: `shots/scene-14.png`

> Step six. Read on, with Wikipedia and MusicBrainz, ends each page. Eras are not in MusicBrainz, so seven eras got a Wikipedia article picked by hand, and four have none. And songs that are not on his albums get no links.

### Scene 15

Picture: `shots/scene-15.png`

> And eight gaps the photo search could not fill: Back to the Roots has two photographs, and seven moments have no photo or clip. The desktop check names them and does not fail on them; any new gap fails.

### Scene 16

Picture: `shots/scene-16.png`

> What ran: the data check, the build, the phone check, and the desktop check at two sizes, all passing; and a code check by a fresh agent, whose six findings are answered. Not done: questions four and five, the eight gaps, and checking every sentence of the new writing.

### Scene 17

Picture: `shots/scene-17.png`

> The rest of the choices are on this list, nine of them, one line each.

### Scene 18

Picture: `shots/scene-18.png`

> That's the fuller site. Seeing it run, anything you'd change?
