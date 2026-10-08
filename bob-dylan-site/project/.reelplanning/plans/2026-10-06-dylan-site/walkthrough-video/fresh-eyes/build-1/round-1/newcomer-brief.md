# Fresh eyes: the newcomer's brief · walkthrough-video

You are a newcomer to this project. You are about to watch "walkthrough-video", a narrated video of 22 scenes,
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
# Fresh eyes: newcomer · round 1 · stamp cd4a6fa38d05

- N1 · scene 4 · "the phrase or thing": what you could not explain, and what you guessed; why it matters
- N2 · scene 7 · …
```

One finding a line, numbered N1, N2 … in scene order, each starting with its scene. Put the phrase or
the thing on screen in double quotes. Write "- none" if you have nothing. Leave room under each line: the
author answers each one there. Do not answer or fix anything yourself.

## Viewers were lost on these before

What the people who review this project's videos did not follow in earlier videos (words they looked up, questions
they asked, "Explain this more", checks they missed). Watch for the same kind of phrase here.

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
- **GitHub Pages**: a free service that hosts a site made of plain files
- **flag**: to mark a choice you'd have made the other way, so it gets changed
- **walkthrough**: this file and video: what landed, and the choices made while building

## The glossary (every word a viewer can look up)

- **choice** (in the files: A call): A choice the agent made on its own while building, one the plan did not cover: one row in `walkthrough.md`.
- **label** (in the files: A tag): A label the agent puts on a choice it made alone, saying why you might want to look at it. Four kinds: *visible* (you'll notice it when you use the thing), *hard-to-undo* (changing it later costs real work), *close* (a toss-up: the other way was nearly as good), *deviation* (an off-plan change). An off-plan change, and a choice labelled visible or hard-to-undo, pauses the walkthrough video; every other choice is on its list at the end.
- **late fix** (in the files: A miss): A late fix: something a review let through that a later plan, fix or review had to change. A recent one makes a choice that shares its label pause the walkthrough video.
- **off-plan change** (in the files: A deviation): An off-plan change: a choice where the agent did something other than what the plan said. It always stops the walkthrough video.
- **scene** (in the files: A beat): One scene of a video: a picture and a sentence or two of its voice. A video is a row of scenes; a question or a choice pauses at the end of its scene.
- **A chapter**: A stretch of one video under one title; the player shows "Chapter 2 of 4" as it begins. Not a plan's step, and not a part of the system.
- **part of the system** (in the files: An area): One part of the system, drawn as a box, with an id in `system.json` (where it is called a component).
- **The app shell**: The one page that holds the site: it reads the address and draws one view at a time, with the bottom bar.
- **The dataset**: The hand-written JSON files in `data/` that hold every era, moment, album, song, connection and thread.
- **The data check**: A script that fails when the dataset has an id used twice, a connection to a song that does not exist, or an album outside its era's years.
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

### Scene 1 · part: What was built

Picture: `shots/scene-01.png`

> Here is the site, built from the plan you approved, on a phone. Eleven eras, thirty-nine albums, two hundred and sixteen songs. Each era opens on a free photo of Dylan from those years, or, where there is none, a photo of the place or event.

### Scene 2

Picture: `shots/scene-02.png`

> Step one: every era, album and song is a real page at its own address. Tap a cover on the Going Electric panel, and it grows into the album page's header.

### Scene 3

Picture: `shots/scene-03.png`

> Two choices here you'd notice. A mistyped address lands on the 404 page, which sends you to search with the address's words, instead of showing results on the 404 page itself. And from seven hundred sixty-eight pixels wide, the bar moves to the top of the screen; on a phone it stays at the bottom.

### Scene 4

Picture: `shots/scene-04.png`

> Step two, the dataset. Track lists come from MusicBrainz, covers from the Cover Art Archive, photos from Wikimedia Commons. The data check passes with these counts, and in a scratch copy broken by hand, it names a connection to a song that does not exist, and a photo with no licence.

### Scene 5

Picture: `shots/scene-05.png`

> Two choices on the data. There are forty-nine connections, each one a fact the writers were sure of, instead of the hundred and forty the plan guessed. And each photo names its era and kind, instead of each era listing its photos.

### Scene 6

Picture: `shots/scene-06.png`

> And one off-plan change. The plan allowed two credited lines of lyrics on a song page. When the AI tried to write them, a content filter stopped it, so no excerpt is written. The song page shows the preview in our words and the link, and the field is there for lines added by hand.

### Scene 7

Picture: `shots/scene-07.png`

> A quick check, a question to see whether the build does what you expect. Wikimedia Commons has no free photo of Dylan from nineteen sixty-seven to nineteen seventy. What does the Basement and Country panel open on?

### Scene 8

Picture: `shots/scene-08.png`

> Step three: each era in its own look. Greenwich Village, Going Electric, Gospel, the Late Renaissance.

### Scene 9

Picture: `shots/scene-09.png`

> Here is Basement and Country, opening on the Isle of Wight festival in nineteen sixty-nine, where he headlined. One choice: the themes use fonts already on the phone, so nothing downloads, instead of a web font for each era. The look varies a little from phone to phone.

### Scene 10

Picture: `shots/scene-10.png`

> Step four, the album and song pages: Blonde on Blonde's songs, and Like a Rolling Stone, with its note, its themes, and its connections.

### Scene 11

Picture: `shots/scene-11.png`

> Three choices on these pages. The lyrics link opens in a new tab, so you keep your place. A song page steps to the album's previous and next song. And an album lists the dataset's songs headed Selected songs, seven of fourteen, so the list doesn't pass for the whole album.

### Scene 12

Picture: `shots/scene-12.png`

> Step five: a thread as cards, and the map on a phone, opened on the song you were on. On a laptop, the two sit side by side.

### Scene 13

Picture: `shots/scene-13.png`

> One choice here: the twelve threads are built from the dataset's themes and connections, each card's sentence the song's own note, instead of twelve threads written card by card.

### Scene 14

Picture: `shots/scene-14.png`

> Step six. Search finds Like a Rolling Stone from a typo, and the Spotify and YouTube players load only after a tap.

### Scene 15

Picture: `shots/scene-15.png`

> Three choices in step six. Spotify ids come from Spotify's own album pages, kept only when the title matches, a hundred and seventy-seven of a hundred and eighty-one songs. Only two clips, both from Bob Dylan's official channel. And search forgives a typo or two, one edit in a short word, two in a long one.

### Scene 16

Picture: `shots/scene-16.png`

> Step six reached five choices of my own, so its biggest comes back to you as a question. Which songs and moments get a YouTube clip? A: official uploads only, what is there now. B: well-known unofficial ones too, like Newport in nineteen sixty-five, though those are often taken down. C: no clips at all. I recommend A. Which songs and moments should get a YouTube clip?

### Scene 17

Picture: `shots/scene-17.png`

> With A, the two official clips stay, and nothing breaks.

### Scene 18

Picture: `shots/scene-18.png`

> With B, Newport and Manchester join, and the clips need watching for ones taken down.

### Scene 19

Picture: `shots/scene-19.png`

> With C, both clips go, and every song keeps its Spotify player.

### Scene 20

Picture: `shots/scene-20.png`

> What ran: the data check, the build, the phone check, and the search runs, all passing. A code check, a second AI that read the code against the plan, found ten things; each is fixed or logged. Not done: lyric excerpts, hosting, the real covers inside the checks, and more connections.

### Scene 21

Picture: `shots/scene-21.png`

> The rest of the choices, one line each. Flag any you'd have made the other way.

### Scene 22

Picture: `shots/scene-22.png`

> That's what was built. Seeing it run, anything you'd change?
