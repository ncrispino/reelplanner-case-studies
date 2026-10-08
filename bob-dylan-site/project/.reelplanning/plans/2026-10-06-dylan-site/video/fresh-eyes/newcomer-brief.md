# Fresh eyes: the newcomer's brief · video

You are a newcomer to this project. You are about to watch "video", a narrated video of 28 scenes,
the way a viewer would: the narration of each scene as it is said, and a picture of the scene at its last moment
as the review page shows it (the player's buttons, tabs and captions included). You also have what a viewer can
open on the page: the glossary, the meanings this video gives its own words, and a line on each earlier video this
one leans on. You have nothing else: not the plan, not the code, not what the author meant.

List every phrase or thing on screen you could not explain from what the video had shown **by then**, what you
guessed it means, and every question a newcomer would ask. A word with a meaning below counts as explained. A
plain phrase with no meaning (made of ordinary words, like "the saved review file" or "drops the video") counts as
unexplained when the video never says what it is or where it comes from. Be specific: say the scene, the words,
and what you would need to follow.

**This is a rebuild: look only at what it changed.** Scenes 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28 of the 28 are new or changed since
the last build, and those are what you look at. The
other scenes are not here: they have not changed since their own look. A finding on a scene not marked "look at
this one" is out of scope and is not counted.

A scene not here may have explained a phrase before the scene you look at: flag the phrase if that scene leaves you
unable to follow it, and the author will say where it is explained.

_Pictures: playwright-core is not installed; the frames alone instead (the player's tab, chips and captions are not in them)._

## The shape of newcomer.md (keep it exactly)

```
# Fresh eyes: newcomer · round 1 · stamp a4f59948e9c7

- N1 · scene 4 · "the phrase or thing": what you could not explain, and what you guessed; why it matters
- N2 · scene 7 · …
```

One finding a line, numbered N1, N2 … in scene order, each starting with its scene (only scenes 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28). Put the phrase or
the thing on screen in double quotes. Write "- none" if you have nothing. Leave room under each line: the
author answers each one there. Do not answer or fix anything yourself.

## Viewers were lost on these before

What the people who review this project's videos did not follow in earlier videos (words they looked up, questions
they asked, "Explain this more", checks they missed). Watch for the same kind of phrase here.

- a word looked up (dylan-site, plan review): connection

## The videos this one leans on (a line each)

- none named

## The words this video gives a meaning

- **index.html** (defined in the video itself)
- **app.css** (defined in the video itself)
- **app.js**: the files of a site with no build step: the page, its look, and its script
- **static host**: a service that only serves files, like GitHub Pages
- **build step**: a command that turns source files into the files a browser loads
- **route**: the part of the address after the # sign that says which view to show
- **JSON**: a plain-text format for lists and fields of data
- **id**: the short name a record is found by, such as masters-of-war
- **TypeScript**: JavaScript with types, which catch a wrong field before the page runs
- **Vite**: a tool that builds a site from source files into plain files
- **Astro**: a site builder that makes one real page per album and song
- **npm**: the tool that installs code packages for a project
- **node_modules**: the folder npm installs packages into
- **library**: a package of code someone else wrote, used as a part
- **placeholder**: a soft, blurred copy of a photo shown while the sharp one loads
- **View Transitions**: the browser's own way to animate one view into the next
- **Cover Art Archive**: a free online library of album cover images
- **Wikimedia Commons**: a free online library of photographs others may reuse under their licence
- **licence**: the terms under which a photo may be reused, such as crediting the photographer
- **embedded player**: a player from another site shown inside the page
- **tap target**: the area a finger can press
- **headless Chrome**: the Chrome browser run by a script, with no window
- **npm test**: the command that runs the project's checks
- **HTML**: the language a web page is written in
- **CSS**: the rules that say how a web page looks
- **JavaScript**: the code that runs inside a web page
- **YouTube**: Google's video site
- **Spotify**: a music streaming service
- **view**: one screen of the site, such as an album page or search
- **quick check**: a question the video asks you, to see whether the plan does what you expect
- **theme**: an era's own colours, typeface and texture

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

### Scene 1 · part: What changed, and how it is built · look at this one

Picture: `shots/scene-01.png`

> This is version two of the plan. You decided four things: all thirty-nine albums, real covers, threads with a map, and Spotify on the page. And you asked for five more: question one again, with the differences shown; a look and real photos for each era; lyrics; the map on phones; and YouTube.

### Scene 2 · look at this one

Picture: `shots/scene-02.png`

> It's still three changes in six steps, and something new lands in five of them. The dataset, hand-written files that hold everything, now also points to photos, lyrics and videos. Search, which finds things as you type, stays as it was.

### Scene 3 · look at this one

Picture: `shots/scene-03.png`

> Step one is still the app shell, the one page that reads the address and draws one view at a time. What's new is how views change. With View Transitions, the browser's own animation, the cover you tap grows into the album page's header. Press back, and it shrinks home. A phone set to reduce motion gets a gentle fade instead: the page fades in, and nothing grows.

### Scene 4 · look at this one

Picture: `shots/scene-04.png`

> All three ways can look the same. The look comes from step three's themes and photos. What differs is around it. With plain files, a big photo pops in late, all at once. With Vite or Astro, each photo gets smaller sizes and a placeholder, a blurred copy that shows at once and sharpens. Vite keeps one page, so the swipe and the map keep your place; Astro loads a new page each time. And for the map and players, Vite and Astro pull in packages; plain files are wired by hand.

### Scene 5 · look at this one

Picture: `shots/scene-05.png`

> So, question one, asked again. A: plain files, with photos that pop in late and every polish by hand. B: Vite with TypeScript, one page built into plain files, with placeholders and packages. C: Astro, a real page per song that search engines find, with the swipe reloading between pages. I recommend B. How should the site be built?

### Scene 6 · look at this one

Picture: `shots/scene-06.png`

> With A, step one is three files and a data folder, and every polish is by hand.

### Scene 7 · look at this one

Picture: `shots/scene-07.png`

> With B, step one is a Vite project, and `npm run build` writes plain files to `dist/`.

### Scene 8 · look at this one

Picture: `shots/scene-08.png`

> With C, step one becomes an Astro project, with a page for every album and song.

### Scene 9 · part: Data, eras and pages · look at this one

Picture: `shots/scene-09.png`

> Step two, the dataset. It's seven JSON files now, plain-text lists of data, adding threads and photos. A song record gains three fields: its Spotify id for the player, a YouTube id when there's a clip worth showing, and a link to its official lyrics page. No lyrics are copied.

### Scene 10 · look at this one

Picture: `shots/scene-10.png`

> The data check, the script that fails when the dataset is wrong, also checks credits now. A photo with no licence, the terms it may be reused under, stops it, and it names the photo.

### Scene 11 · look at this one

Picture: `shots/scene-11.png`

> A quick check, a question to see whether the plan does what you expect. This one's on step one. Your phone is set to reduce motion, and you tap a cover. What do you see?

### Scene 12 · look at this one

Picture: `shots/scene-12.png`

> Step three is the one you asked to change most. The era timeline, the home view you swipe, now gives each era its own theme: its colours, typeface and texture. Greenwich Village is paper and typewriter, with a nineteen sixty-three photo from the March on Washington. Going Electric is black and amber, and has no free photo, so its title, set large in its theme, carries the panel. Gospel is red and gold, with a nineteen eighty concert photo. And the Late Renaissance, from nineteen ninety-seven, is shadow and brass, with a two thousand ten festival photo. Every photo shows its credit.

### Scene 13 · look at this one

Picture: `shots/scene-13.png`

> Question three: where do the photos come from? A: Wikimedia Commons, a free library of photos others may reuse, with the credit shown. It's free, but coverage is uneven: some eras get one photo or none. B: licensed press photos, every era covered, for a fee per image, often every year. C: no photos, just the themes, the plainer look you asked to avoid. I recommend A. Where should the era photographs come from?

### Scene 14 · look at this one

Picture: `shots/scene-14.png`

> With A, each era shows what Commons has, and the ones with none lean on their theme.

### Scene 15 · look at this one

Picture: `shots/scene-15.png`

> With B, every era gets photos, and the site pays for them every year.

### Scene 16 · look at this one

Picture: `shots/scene-16.png`

> With C, the panels keep their themes and open on their titles.

### Scene 17 · look at this one

Picture: `shots/scene-17.png`

> Step four, the album and song pages. Blowin' in the Wind's page wears its era's theme, and adds a Lyrics row linking to the official page, a Play row for Spotify, and its connections. On an album page, the real cover comes from the Cover Art Archive. If it fails to load, like New Morning's here, the page shows a drawn cover in the era's theme instead, so nothing shows broken.

### Scene 18 · look at this one

Picture: `shots/scene-18.png`

> Check on step three. Basement and Country has no photo the site can use. What does its panel open on?

### Scene 19 · look at this one

Picture: `shots/scene-19.png`

> Question two: what sits beside the lyrics link? A: the link only. B: the link and the song's first line, a real taste, but quoting a lyric, even one line, needs the publisher's permission. C: the link and a preview in our own words, like nine questions about war and freedom, and an answer that won't stay still. I recommend C. What should a song page show beside its lyrics link?

### Scene 20 · look at this one

Picture: `shots/scene-20.png`

> With A, the row is just the link.

### Scene 21 · look at this one

Picture: `shots/scene-21.png`

> With B, the site needs the publisher's permission first, for every song.

### Scene 22 · look at this one

Picture: `shots/scene-22.png`

> With C, every song in the dataset gains a one-sentence preview, written for the site.

### Scene 23 · part: Connections, listening, checks · look at this one

Picture: `shots/scene-23.png`

> Step five, threads and the map. A thread is a path through songs that share something, shown as cards you swipe. On a phone, cards are still the default, and a toggle switches to the map. It opens centred on the song you were on and its neighbours, about fifteen dots, and you drag to see more. On a laptop, both sit side by side.

### Scene 24 · look at this one

Picture: `shots/scene-24.png`

> Check on step four. The Cover Art Archive doesn't answer for Oh Mercy's cover. What does its album page show?

### Scene 25 · look at this one

Picture: `shots/scene-25.png`

> Step six. Spotify's player loads only when you tap Play, so a page you just read loads nothing from Spotify. Songs and moments that matter get a YouTube clip, like Newport in nineteen sixty-five, also after a tap. Search, and the phone check that opens every view at phone size, are as before.

### Scene 26 · look at this one

Picture: `shots/scene-26.png`

> Check on step five. On a phone, you're on Blowin' in the Wind's card in a thread, and you tap Map. Where does it open?

### Scene 27 · look at this one

Picture: `shots/scene-27.png`

> And on step six. You open Tangled Up in Blue's page and never tap Play. What does the page load from Spotify?

### Scene 28 · look at this one

Picture: `shots/scene-28.png`

> That's version two: six steps and three questions, each step showing what you picked. Draw on any step to leave a note, or approve.
