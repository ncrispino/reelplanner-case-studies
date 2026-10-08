# Fresh eyes: the newcomer's brief · video

You are a newcomer to this project. You are about to watch "video", a narrated video of 32 scenes,
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
# Fresh eyes: newcomer · round 3 · stamp f8e95d2724bf

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

- 2026-10-06-dylan-site: Bob Dylan, explored: a phone-first site of eras, albums…: decisions D-001, D-002, D-003, D-005, D-006, D-007, D-033: how should the site be built?; explains "search"

## The words this video gives a meaning

- **pixels**: the dots a screen is made of, as in a laptop window 1440 pixels wide
- **720 pixels**: the width of today's column, about half a laptop window
- **the column**: the strip in the middle of the window where today's pages sit
- **the era's look**: an era's colours, texture, typeface and frames, such as Going Electric's black and white op-art
- **op-art**: 1960s art made of bold black-and-white patterns that seem to move
- **Cards and Map button**: the switch on a thread that shows its cards or its map
- **the map**: the view where every song is a dot and every connection a line
- **dot**: one song on the map
- **pointer**: the arrow you move with a mouse or trackpad, or your finger on a phone
- **grabs the pointer**: keeps getting the mouse's moves even when it leaves the map, so a drag keeps working
- **mouse wheel**: the wheel or two-finger scroll that moves a page up and down
- **Control**: the Ctrl key (⌘ on a Mac)
- **zoom**: make the map bigger or smaller
- **phone check**: the script that opens every kind of page at phone size and fails on a sideways scroll, a small button or an error
- **desktop check**: a new script that does the same at computer sizes and fails when a page looks or works like a phone page
- **app shell**: the layout every page shares: its header or bottom bar and the era's look
- **header**: the bar across the top of every page on a computer
- **tab**: one of Eras, Threads, Map and About in the header
- **search field**: the box you type into to search
- **slash**: the / key
- **tablet**: a window from 768 to 1099 pixels wide
- **desktop**: a window 1100 pixels wide or more
- **layout**: how a page is arranged on the screen
- **two columns**: the page split into a main side and a narrower side
- **crossfade**: one look fading into the next
- **address**: the page's link in the browser's bar, like /era/electric/
- **timeline**: the bar across the top of the home page, 1941 to today, one stretch per era
- **era**: a named stretch of Dylan's life with its years, such as Going Electric, 1965–1966
- **thread**: a path through songs that share something, in time order, shown as cards
- **connection**: a link between two songs, with a kind and a sentence of why
- **the words**: the card on a song page with its preview, its summary and the link to its lyrics
- **legend**: the list of eras and their colours under the map
- **panel**: a box beside the map describing the song you clicked
- **select**: mark a dot as the one you are looking at, without leaving the map
- **double click**: two clicks in quick succession
- **view**: one kind of page, such as an album page or search
- **sideways scroll**: a page wider than the window, so it scrolls left and right
- **npm test**: the one command that runs every check
- **quick check**: a question the video asks you, to see whether the plan does what you expect
- **Back to the Roots**: Dylan's early-'90s era of old folk and blues songs
- **Going Electric**: his 1965–1966 era, when he played with a rock band
- **Hibbing**: the Minnesota mining town where he grew up
- **Rough and Rowdy**: his latest era, named for his 2020 album
- **I Believe in You**: a 1979 song from his gospel years
- **Faith**: one of the site's threads, from early hymn-shaped songs to the gospel years
- **moment**: a dated event in his life that is not a record, such as Newport 1965
- **recommended**: the option I would pick, marked on its card
- **data check**: the script that fails when the dataset is wrong
- **era timeline**: the home page: the eras one after another
- **rock band**: a group with electric guitars, bass and drums
- **traditional**: a folk song nobody now knows the writer of, passed down by singers
- **planned**: a check this plan adds: it does not exist yet
- **the owner**: the person this site is built for, who asked for this plan
- **note**: one sentence of fact about a song, under its title
- **players**: the Spotify and YouTube boxes that play a song on its page
- **375×812**: a phone screen's width and height in pixels
- **12 views**: one page of each kind, which a check opens
- **checks/desktop/**: the folder where the desktop check saves its screenshots
- **N**: a compass mark drawn on the map for its star-chart look, not a button
- **landmark**: one of the sixteen albums the site writes about in most detail
- **YouTube**: Google's video site
- **Spotify**: a music streaming service
- **themes**: the subjects a song shares with others, shown as chips such as LOSS and FREEDOM
- **183 songs**: the songs with at least one connection, the ones the map draws
- **public domain**: free of copyright, reusable by anyone
- **PD**: public domain
- **CC BY 2.0**: a Creative Commons licence: reuse with credit
- **clip**: a video of a song or a moment, played from YouTube
- **version**: another artist's recording of a song, which has its own dot and page

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

### Scene 1 · part: On a computer today

Picture: `shots/scene-01.png`

> You opened the site on a computer, and it is still a phone: one column, seven hundred and twenty pixels wide, in the middle of the window. This plan makes it a site for a computer too, and fixes the map on the way.

### Scene 2

Picture: `shots/scene-02.png`

> On the home page, the era's look stops at the column's edges. On a thread, the map is a thin strip beside the cards, and the Cards and Map button is still there with both showing. And on the map, clicking a dot does nothing.

### Scene 3

Picture: `shots/scene-03.png`

> Three changes, in six steps. First, the map works. Then a layout for wide screens: a header, the era's look across the window, and two columns. Last, threads, the map and search on a computer, with a check that catches a phone page on a computer. Phones keep today's layout.

### Scene 4 · part: The map, fixed

Picture: `shots/scene-04.png`

> Step one, the map. It grabs the pointer as soon as you press, so that dragging works. But then the click lands on the map instead of the dot, and the song never opens. That is broken on phones too. Now the map grabs the pointer only once you move four pixels, so a press and release opens the song. On a computer's full map page, question three decides what a click does.

### Scene 5

Picture: `shots/scene-05.png`

> The mouse wheel scrolls the page again; the map zooms only with Control held, or with plus and minus buttons. Hovering a dot names it. And the phone check now taps a dot, and fails unless a song page opens.

### Scene 6 · part: A layout for wide screens

Picture: `shots/scene-06.png`

> Step two, the app shell. The window's width picks the layout. Up to seven hundred and sixty-seven pixels, a phone: today's layout, unchanged. Up to eleven hundred, a tablet: one wider column. From eleven hundred, the desktop layout.

### Scene 7

Picture: `shots/scene-07.png`

> On the desktop, a header runs across the top, with the tabs and a search field; press slash to type in it. The era's look fills the whole window, not just the column. And the content gets two columns.

### Scene 8

Picture: `shots/scene-08.png`

> Question one: how wide should the content go? A: up to twelve hundred pixels, in two columns. B: up to sixteen hundred, with a third column where there is room. C: keep the seven hundred and twenty pixel column, and only paint the era's look across the window. I recommend A.

### Scene 9

Picture: `shots/scene-09.png`

> With A, a song page is cover and players on the left, words and connections on the right.

### Scene 10

Picture: `shots/scene-10.png`

> With B, a wide monitor adds a third column, the song's map.

### Scene 11

Picture: `shots/scene-11.png`

> With C, the column stays, and the era's look fills the margins.

### Scene 12

Picture: `shots/scene-12.png`

> A quick check, a question to see whether the plan does what you expect. This one's on step one. On a phone, you press on a dot, move two pixels, and let go. What happens?

### Scene 13

Picture: `shots/scene-13.png`

> Step three, the home page. On a computer, one era fills the screen: its photograph on the left half, its years and story on the right, its albums in a row underneath. An era with no photograph of him shows a photograph of the place instead, never an empty half.

### Scene 14

Picture: `shots/scene-14.png`

> The arrow keys, big arrows at the sides, or a click on the timeline across the top move to the next era. The look crossfades, and the address changes, so back and a shared link still work.

### Scene 15

Picture: `shots/scene-15.png`

> Question two: on a computer, does the home page give one era at a time, or all of them? A: one era fills the screen. B: all eleven down one long page. C: an overview of eleven columns first, each opening to A. I recommend A.

### Scene 16

Picture: `shots/scene-16.png`

> With A, Going Electric fills the screen, and the arrow brings the next era.

### Scene 17

Picture: `shots/scene-17.png`

> With B, you scroll from Hibbing to Rough and Rowdy, and the look changes as you go.

### Scene 18

Picture: `shots/scene-18.png`

> With C, eleven narrow columns come first, and a click opens one.

### Scene 19

Picture: `shots/scene-19.png`

> A quick check on step two. You open the site in a window nine hundred pixels wide. Which layout do you get?

### Scene 20

Picture: `shots/scene-20.png`

> Step four, album, song and moment pages, in two columns. On a song page, the cover, the note and the players stay on the left as you scroll. On the right: the words, the connections two across, and a small map of the song's neighbours. A song with no connections shows only the words there.

### Scene 21

Picture: `shots/scene-21.png`

> An album page puts its cover large beside the full track list, with the era's other albums under them. A moment puts its clip or photograph beside its story.

### Scene 22

Picture: `shots/scene-22.png`

> A quick check on step three. Back to the Roots has no photograph of Dylan. On a computer, what fills the left half of its screen?

### Scene 23 · part: Threads, the map and checks

Picture: `shots/scene-23.png`

> Step five, threads. A thread's cards run along a line of years, four at a time, with the map under them. Hover a card and its dot lights up. The Cards and Map button is gone at this width, because both are showing. On a phone, it stays.

### Scene 24

Picture: `shots/scene-24.png`

> The map page fills the window. Click a dot, and a panel describes the song, with a link to open it. Click an era in the legend, and the other eras dim.

### Scene 25

Picture: `shots/scene-25.png`

> Question three: on a computer, what should a click on a dot do? A: select it, and show the panel; a double click opens the song. B: open the song at once, as on a phone. I recommend A.

### Scene 26

Picture: `shots/scene-26.png`

> With A, you stay on the map, and the panel tells you about the song.

### Scene 27

Picture: `shots/scene-27.png`

> With B, every click takes you to a song page, and off the map.

### Scene 28

Picture: `shots/scene-28.png`

> A quick check on step four. I Believe in You has no connections. What is in the right column of its page?

### Scene 29

Picture: `shots/scene-29.png`

> Step six. Search shows its groups in three columns. And a new desktop check opens every view at two computer sizes. It fails on a sideways scroll, a button that does nothing, an era's look that stops short, a phone-width column, a dot that does nothing, or an error.

### Scene 30

Picture: `shots/scene-30.png`

> A quick check on step five. You open the Faith thread on a phone. Is the Cards and Map button there?

### Scene 31

Picture: `shots/scene-31.png`

> And one on step six. The Cards and Map button shows on a thread in a window fourteen hundred and forty pixels wide. Which check fails?

### Scene 32

Picture: `shots/scene-32.png`

> That's the plan: the map fixed first, then the site made for a computer. Three questions: how wide, how the home page shows the eras, and what a click on the map does.
