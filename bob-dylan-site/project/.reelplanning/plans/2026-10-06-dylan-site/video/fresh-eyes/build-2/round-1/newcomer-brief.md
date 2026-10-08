# Fresh eyes: the newcomer's brief · video

You are a newcomer to this project. You are about to watch "video", a narrated video of 41 scenes,
the way a viewer would: the narration of each scene as it is said, and a picture of the scene at its last moment
as the review page shows it (the player's buttons, tabs and captions included). You also have what a viewer can
open on the page: the glossary, the meanings this video gives its own words, and a line on each earlier video this
one leans on. You have nothing else: not the plan, not the code, not what the author meant.

List every phrase or thing on screen you could not explain from what the video had shown **by then**, what you
guessed it means, and every question a newcomer would ask. A word with a meaning below counts as explained. A
plain phrase with no meaning (made of ordinary words, like "the saved review file" or "drops the video") counts as
unexplained when the video never says what it is or where it comes from. Be specific: say the scene, the words,
and what you would need to follow.

**This is a rebuild: look only at what it changed.** Scenes 1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 38, 39, 40, 41 of the 41 are new or changed since
the last build, and those are what you look at. Scenes 5, 6, 36 are here for context only,
the scene just before or after a changed one: they have not changed and had their look, so list nothing on them. The
other scenes are not here: they have not changed since their own look. A finding on a scene not marked "look at
this one" is out of scope and is not counted.

A scene not here may have explained a phrase before the scene you look at: flag the phrase if that scene leaves you
unable to follow it, and the author will say where it is explained.

_Pictures: playwright-core is not installed; the frames alone instead (the player's tab, chips and captions are not in them)._

## The shape of newcomer.md (keep it exactly)

```
# Fresh eyes: newcomer · round 1 · stamp f2170fd8cc00

- N1 · scene 4 · "the phrase or thing": what you could not explain, and what you guessed; why it matters
- N2 · scene 7 · …
```

One finding a line, numbered N1, N2 … in scene order, each starting with its scene (only scenes 1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 38, 39, 40, 41). Put the phrase or
the thing on screen in double quotes. Write "- none" if you have nothing. Leave room under each line: the
author answers each one there. Do not answer or fix anything yourself.

## Viewers were lost on these before

What the people who review this project's videos did not follow in earlier videos (words they looked up, questions
they asked, "Explain this more", checks they missed). Watch for the same kind of phrase here.

- nothing recorded yet

## The videos this one leans on (a line each)

- none named

## The words this video gives a meaning

- **index.html** (defined in the video itself)
- **app.css** (defined in the video itself)
- **app.js**: the three files of the site: the page, its look, and its script
- **static site**: a site made only of files, with no server running code behind it
- **static host**: a service that only serves files, like GitHub Pages
- **build step**: a command that turns source files into the files a browser loads
- **route**: the part of the address after the # sign that says which view to show
- **JSON**: a plain-text format for lists and fields of data
- **id**: the short name a record is found by, such as masters-of-war
- **TypeScript**: JavaScript with types, which catch a wrong field before the page runs
- **Vite**: a tool that builds a site from source files
- **Astro**: a site builder that makes one real page per album and song
- **Cover Art Archive**: a free online library of album cover images
- **graph library**: code that draws dots and lines you can drag and zoom
- **embedded player**: a player from another site shown inside the page
- **tap target**: the area a finger can press
- **headless Chrome**: the Chrome browser run by a script, with no window
- **npm test**: the command that runs the project's checks
- **HTML**: the language a web page is written in
- **CSS**: the rules that say how a web page looks
- **JavaScript**: the code that runs inside a web page
- **YouTube**: Google's video site
- **headless**: run by a script, with no window
- **node**: the program that runs a JavaScript file outside the browser
- **exit 1**: how a script says it failed
- **#57**: the 57th entry in the file
- **view**: one screen of the site, such as an album page or search
- **375×812**: a phone screen's width and height in pixels
- **checks/**: the folder where the phone check saves its screenshots
- **quick check**: a question the video asks you, to see whether the plan does what you expect

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

### Scene 1 · part: The site and its data · look at this one

Picture: `shots/scene-01.png`

> Sixty-five years, thirty-nine studio albums, and hundreds of songs. On a phone, Wikipedia gives you all of it as one long page of text. This plan builds a site you explore instead: swipe through his life, tap into any album or song, and follow how the songs connect.

### Scene 2 · look at this one

Picture: `shots/scene-02.png`

> It makes three changes, in six steps. First, a static site, made only of files, with no server behind it. Second, the dataset: hand-written files that hold his whole life and music. Third, four ways to explore it: a timeline you swipe, a page for each album and song, paths from song to song, and search, which finds things as you type. Step two needs step one's folder. Steps three to six each read the dataset, and stand alone from each other.

### Scene 3 · look at this one

Picture: `shots/scene-03.png`

> Step one is the app shell: one page that reads the address and draws one view at a time. The part after the hash sign, here `#/album/blonde-on-blonde`, is the route: it says which view to show. Because the view lives in the address, the back button works, a shared link opens the right album or song, and the folder can go on any static host, a service that only serves files. It's laid out for a three hundred seventy-five pixel phone first, with four tabs at the bottom, each tall enough for a thumb.

### Scene 4 · look at this one

Picture: `shots/scene-04.png`

> How the files are built is the first question. Option A: plain HTML, CSS and JavaScript, with no build step, a command that turns source files into what the browser loads. The folder is the site. Option B: Vite with TypeScript. Types catch a wrong field early, but a build runs before anyone sees a page. Option C: Astro, which makes a real page for every album and song that search engines can find, at the cost of a framework. I recommend A: it's the smallest thing that does everything asked. How should the site be built?

### Scene 5 · context only: it did not change, list nothing on it

Picture: `shots/scene-05.png`

> With A, step one is three files, `index.html`, `app.css` and `app.js`, and nothing to install.

### Scene 6 · context only: it did not change, list nothing on it

Picture: `shots/scene-06.png`

> With B, step one adds `package.json` and a source folder, and `npm run build` writes the site to `dist/`.

### Scene 7 · look at this one

Picture: `shots/scene-07.png`

> With C, step one becomes an Astro project, and every album and song gets its own page when you build.

### Scene 8 · look at this one

Picture: `shots/scene-08.png`

> Step two is the dataset: five JSON files, plain-text lists of data, in a `data/` folder, all written by hand. An era is a stretch of his life with years and a colour. There are eleven, from Duluth and Hibbing to Rough and Rowdy. A moment is a dated event that isn't a record, like Newport in nineteen sixty-five, when he played electric. And a connection joins two songs, with a kind and one sentence of why. Here's one: Masters of War borrowed the tune of Nottamun Town, an Appalachian song he learned from Jean Ritchie. A song by someone else, like Nottamun Town, is in the dataset too, so the connection has somewhere to go. There are no lyrics anywhere. They're under copyright, so the site describes songs and links out.

### Scene 9 · look at this one

Picture: `shots/scene-09.png`

> The data check is a script that fails when the dataset is wrong: a connection to a song that doesn't exist, an id used twice, or an album outside its era's years. An id is the short name a record is found by. When everything matches, it counts what it found. Here, one connection says blowin-in-the-wnd, a typo, so the check names that line, and exits with an error.

### Scene 10 · look at this one

Picture: `shots/scene-10.png`

> A quick check, a question to see whether the plan does what you expect. This one's on step one. You copy the address of the Tangled Up in Blue page and text it to a friend. What do they see?

### Scene 11 · look at this one

Picture: `shots/scene-11.png`

> Now, how much of the catalogue goes in. A: all thirty-nine studio albums, with the sixteen landmark albums written in full. That's about two hundred and ten songs. B: only the sixteen landmarks. It's faster to write, but there are gaps: no Oh Mercy, no Tempest. C: every song on every album, about four hundred and fifty, most with only a title. I recommend A: the timeline has no holes, and the writing goes where people will tap. How much of the catalogue should go in?

### Scene 12 · look at this one

Picture: `shots/scene-12.png`

> With A, the data check counts thirty-nine albums and about two hundred and ten songs.

### Scene 13 · look at this one

Picture: `shots/scene-13.png`

> With B, eras like the eighties show a single album, and the strip still shows all eleven eras.

### Scene 14 · look at this one

Picture: `shots/scene-14.png`

> With C, the dataset roughly doubles, and most song pages hold a title and an album, and nothing else.

### Scene 15 · part: Exploring: the timeline and the pages · look at this one

Picture: `shots/scene-15.png`

> Next, steps three and four: the views you'll spend the most time in.

### Scene 16 · look at this one

Picture: `shots/scene-16.png`

> Step three is the era timeline, the home view. Each era is one full-width panel, and you swipe sideways between them. A strip on top shows all eleven eras, sized by their years. Tap one to jump. Swipe three times and you're in Basement and Country, nineteen sixty-seven to nineteen seventy: the motorcycle accident, the basement recordings near Woodstock, and four albums to tap. Each panel has its own address, so when you go back, you land on the era you left.

### Scene 17 · look at this one

Picture: `shots/scene-17.png`

> Check on step two. A connection points at visions-of-johana, one letter short. The real song has two n's. You run the data check. What happens?

### Scene 18 · look at this one

Picture: `shots/scene-18.png`

> Step four is the album and song pages. An album page says why it matters and lists its songs. A song page has a short note, its themes, and then its connections, one card each, in plain words. All Along the Watchtower has two: covered by Jimi Hendrix in nineteen sixty-eight, and, from nineteen seventy-four on, Dylan played it Hendrix's way. Tap a card and you're on the other song's page, even when it's someone else's version, and that page links back.

### Scene 19 · look at this one

Picture: `shots/scene-19.png`

> What should a cover look like? A: a cover drawn in the page, the title and year in the era's colour. Nothing to license, and nothing loaded from elsewhere. B: the real covers, from the Cover Art Archive, a free online library of cover images. They're recognisable, but copyrighted, and loaded from another site. C: no covers, titles only. I recommend A. How should album covers look?

### Scene 20 · look at this one

Picture: `shots/scene-20.png`

> With A, Blonde on Blonde is its title, set in the electric era's colour.

### Scene 21 · look at this one

Picture: `shots/scene-21.png`

> With B, each cover is fetched from the archive, and a broken image shows whenever a request fails.

### Scene 22 · look at this one

Picture: `shots/scene-22.png`

> With C, the timeline's album row becomes a list of titles.

### Scene 23 · look at this one

Picture: `shots/scene-23.png`

> Check on step three. You're on the Gospel panel. You tap Slow Train Coming, then press back. Where are you?

### Scene 24 · part: Following connections · look at this one

Picture: `shots/scene-24.png`

> Last, steps five and six: following connections, then search, and the check that runs at phone size.

### Scene 25 · look at this one

Picture: `shots/scene-25.png`

> Step five is threads. A thread is a path through songs that share something, in time order, shown as cards you swipe up through. About twelve are written by hand. In Borrowed tunes, card three of nine is Masters of War. Its tune is Nottamun Town.

### Scene 26 · look at this one

Picture: `shots/scene-26.png`

> Any song page can also start a thread on the spot. It follows that song's connections, and puts the songs in time order, older first. From Girl from the North Country, you get three cards: Scarborough Fair, the song itself, and the nineteen sixty-nine duet with Johnny Cash.

### Scene 27 · look at this one

Picture: `shots/scene-27.png`

> How are connections explored? A: threads only, cards that work with a thumb. B: a connection map, every song a dot and every connection a line. It's striking on a laptop, but on a phone, two hundred dots are too small to tap. C: both, threads, plus the map on wide screens, at the cost of a graph library and a second view to keep working. I recommend A for now. The map can be its own plan. How should connections be explored?

### Scene 28 · look at this one

Picture: `shots/scene-28.png`

> With A, step five is the cards, and nothing else.

### Scene 29 · look at this one

Picture: `shots/scene-29.png`

> With B, step five draws the map instead, and Start a thread opens it centred on the song.

### Scene 30 · look at this one

Picture: `shots/scene-30.png`

> With C, the phone gets threads, and a screen wider than seven hundred sixty-eight pixels also gets the map.

### Scene 31 · look at this one

Picture: `shots/scene-31.png`

> Check on step four. Knockin' on Heaven's Door has a card: covered by Guns N' Roses, nineteen ninety-one. You tap it. What opens?

### Scene 32 · look at this one

Picture: `shots/scene-32.png`

> Step six. Search matches titles, albums, years and themes as you type, inside the page, with no server. Type nineteen sixty-six, and you get the Going Electric era, Blonde on Blonde, and the motorcycle accident.

### Scene 33 · look at this one

Picture: `shots/scene-33.png`

> And the phone check opens every view at phone size in Chrome, run by a script with no window. It fails on a sideways scroll, a tap target under forty-four pixels, or an error, and names the view that failed. With the data check, it's what `npm test` runs. Here, the album page is four hundred and twelve pixels wide, so it stops.

### Scene 34 · look at this one

Picture: `shots/scene-34.png`

> Last question: how does someone listen? A: links out to Spotify, Apple Music and YouTube. Nothing loads until it's tapped. B: an embedded player, Spotify's player inside each song page. You hear it without leaving, but it needs a Spotify id for every song, cookies, and it plays thirty-second previews when you're not logged in. C: no listening at all. I recommend A. How should someone listen?

### Scene 35 · look at this one

Picture: `shots/scene-35.png`

> With A, each song page ends with a Listen row of three links.

### Scene 36 · context only: it did not change, list nothing on it

Picture: `shots/scene-36.png`

> With B, each song page loads Spotify's player, and every song in the dataset gains a Spotify id.

### Scene 37 · look at this one

Picture: `shots/scene-37.png`

> With C, the song page ends at its connections.

### Scene 38 · look at this one

Picture: `shots/scene-38.png`

> Check on step five. Masters of War has one connection, to Nottamun Town, and Nottamun Town has no others. You start a thread from Masters of War. What does it show?

### Scene 39 · look at this one

Picture: `shots/scene-39.png`

> And on step six. A new Share button is thirty-six pixels tall on a phone. What does `npm test` do?

### Scene 40 · look at this one

Picture: `shots/scene-40.png`

> Back to the start. Blowin' in the Wind took its tune from No More Auction Block. On Wikipedia, that's one sentence in a paragraph. Here, it's two taps: the song, then its connection card, and that page points back.

### Scene 41 · look at this one

Picture: `shots/scene-41.png`

> That's the plan: six steps and five questions, each step showing what you picked. Draw on any step to leave a note, or approve.
