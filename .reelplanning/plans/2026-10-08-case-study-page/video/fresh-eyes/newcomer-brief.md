# Fresh eyes: the newcomer's brief · video

You are a newcomer to this project. You are about to watch "video", a narrated video of 23 scenes,
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
# Fresh eyes: newcomer · round 1 · stamp 419d038f2ae0

- N1 · scene 4 · "the phrase or thing": what you could not explain, and what you guessed; why it matters
- N2 · scene 7 · …
```

One finding a line, numbered N1, N2 … in scene order, each starting with its scene. Put the phrase or
the thing on screen in double quotes. Write "- none" if you have nothing. Leave room under each line: the
author answers each one there. Do not answer or fix anything yourself.

## Viewers were lost on these before

What the people who review this project's videos did not follow in earlier videos (words they looked up, questions
they asked, "Explain this more", checks they missed). Watch for the same kind of phrase here.

- nothing recorded yet

## The videos this one leans on (a line each)

- none named

## The words this video gives a meaning

- **case study**: a real project told start to finish, with its videos and reviews
- **study page**: the page a visitor reads first
- **review page**: reelplanning's page for reviewing a video: it stops on questions and takes marks and comments
- **marks**: drawings and notes a reviewer leaves on a scene
- **finish button**: the button that ends a review and sends it
- **transcript**: the record of the whole chat session, every message and tool call, one event a line
- **review**: what the owner sent back from the review page: answers, comments, approve or change
- **commit**: one saved change to a repo, with a message saying what changed
- **plan**: the written plan a video is made from, with its steps and questions
- **event**: one thing that happened, kept with its time
- **timeline**: every event in order
- **source**: the file and line an event comes from
- **agent**: the AI coding assistant that does the work
- **walkthrough**: the video made after a build, showing what landed
- **era**: a named stretch of Dylan's life on the site, such as Going Electric
- **watch page**: a page that plays the videos with nothing to fill in
- **chapters**: the titled stretches of a video
- **quick check**: a question to see whether the plan does what you expect
- **rendered video file**: the video saved as an ordinary MP4
- **watch-only mode**: the player with every reviewing control hidden
- **spread**: an era's first view, filling the window
- **folded**: shut, with a line saying what is inside
- **quote**: the owner's words, copied exactly
- **check**: a script that fails when something is wrong
- **recommended**: the option I would pick, marked on its card
- **step**: one part of the plan, numbered
- **render**: to play a video through once and save it as a file
- **details**: the smaller parts of an event, such as the commit's files, shown when opened
- **own words**: what the owner typed, exactly
- **question**: a choice for the reviewer, with options A, B, C

## The glossary (every word a viewer can look up)

- **choice** (in the files: A call): A choice the agent made on its own while building, one the plan did not cover: one row in `walkthrough.md`.
- **label** (in the files: A tag): A label the agent puts on a choice it made alone, saying why you might want to look at it. Four kinds: *visible* (you'll notice it when you use the thing), *hard-to-undo* (changing it later costs real work), *close* (a toss-up: the other way was nearly as good), *deviation* (an off-plan change). An off-plan change, and a choice labelled visible or hard-to-undo, pauses the walkthrough video; every other choice is on its list at the end.
- **late fix** (in the files: A miss): A late fix: something a review let through that a later plan, fix or review had to change. A recent one makes a choice that shares its label pause the walkthrough video.
- **off-plan change** (in the files: A deviation): An off-plan change: a choice where the agent did something other than what the plan said. It always stops the walkthrough video.
- **scene** (in the files: A beat): One scene of a video: a picture and a sentence or two of its voice. A video is a row of scenes; a question or a choice pauses at the end of its scene.
- **A chapter**: A stretch of one video under one title; the player shows "Chapter 2 of 4" as it begins. Not a plan's step, and not a part of the system.
- **part of the system** (in the files: An area): One part of the system, drawn as a box, with an id in `system.json` (where it is called a component).
- **The study folder**: A study's own folder at the repo's root: its plain-text write-up, its session transcript and its project as committed.
- **The study page**: The page a visitor reads first: the write-up, its pictures and links to everything else.
- **The review bundle**: A study's videos packed with reelplanning's review player into one folder of static files.
- **The built site**: The study's own site, built to work under its Pages address.
- **The front page**: The list of studies, at the Pages root.
- **The watch page**: A page that plays a study's videos to watch, with nothing to fill in: a list of the videos, the open one, its chapters and questions.
- **the timeline** (in the files: The timeline record): One file listing everything that happened in a study, in order: each event's time, kind, the owner's own words, its source and what it led to.
- **A repo / repository**: A project's folder of code together with its whole history, kept with git.
- **A branch**: A line of work kept apart from the main code until it is merged.
- **Merge**: To bring a branch's changes into the main code. A pull request is merged when it is accepted.
- **A commit**: One saved change to a repo, with a message saying what changed.
- **A pull request / PR**: A change someone asks to have merged into a repo; others read it and comment before it goes in.
- **The agent**: The AI coding assistant that does the work, in chat: it writes the plan, builds the code and makes the videos.

## The video, scene by scene

### Scene 1 · part: Today

Picture: `shots/scene-01.png`

> Here's the case study page as it is. You said it doesn't explain anything. It tells reelplanning in general words, in cards, before it shows anything that happened, and its videos open in the review page.

### Scene 2

Picture: `shots/scene-02.png`

> Three things fall short. The order of events, which comment led to which video, has to be pieced together from four cards. A visitor gets the review page, with marks, comments and a finish button they can't use. And the record of what happened sits in four places: the transcript, the reviews, the commits and the plans.

### Scene 3

Picture: `shots/scene-03.png`

> So, three changes in five steps. One record of what happened, built from all four. Videos to watch, not review. And a page that tells it in order, with a check that every event has a source.

### Scene 4 · part: One record

Picture: `shots/scene-04.png`

> Step one. A script reads the transcript, every review and the project's commits, and writes one timeline. Each event keeps its time, the owner's own words, quoted exactly, its source, and what it led to. The first walkthrough review, for example, leads to the commit that gave each era its own look.

### Scene 5

Picture: `shots/scene-05.png`

> Question three, for step one: what does the timeline say of the agent's side? A: one line per event, from its commit message. B: also quote the agent's chat replies. C: only the owner's side. I recommend A.

### Scene 6

Picture: `shots/scene-06.png`

> With A, each build reads in a line, like each era its own art direction.

### Scene 7

Picture: `shots/scene-07.png`

> With B, every step also carries the agent's reply, which makes it much longer.

### Scene 8

Picture: `shots/scene-08.png`

> With C, what was built shows only as pictures.

### Scene 9 · part: Videos to watch

Picture: `shots/scene-09.png`

> Step two. A watch page plays one video at a time, chosen from a list named by what each video is. Under it, its chapters and questions jump there, and each question shows what the owner answered. There's no mark, no comment box, no finish.

### Scene 10

Picture: `shots/scene-10.png`

> Question one: how should a video play there? A: a rendered video file, in the browser's own player. B: reelplanning's player in a watch-only mode. C: the review player as it is, with better names. I recommend A, though rendering is slow on this machine, so I'd time one first.

### Scene 11

Picture: `shots/scene-11.png`

> With A, each video is a plain file that plays anywhere, with nothing to fill in.

### Scene 12

Picture: `shots/scene-12.png`

> With B, reelplanning itself changes first, and its player hides everything a reviewer uses.

### Scene 13

Picture: `shots/scene-13.png`

> With C, the review page stays, marks and all.

### Scene 14

Picture: `shots/scene-14.png`

> A quick check. On the watch page, you click question four of the desktop walkthrough. What happens?

### Scene 15 · part: A page in order

Picture: `shots/scene-15.png`

> Step three. The study page becomes a vertical timeline over three days. Each plan is a stretch, headed by the words that started it. Along it come the messages, the plans, each video with a still and a watch link, each review, and what changed after, with before and after pictures.

### Scene 16

Picture: `shots/scene-16.png`

> Question two: how much of the timeline is open at first? A: each plan's videos and reviews open, with small messages and details folded. B: everything open. C: only each plan's heading. I recommend A.

### Scene 17

Picture: `shots/scene-17.png`

> With A, about thirty events show, and the rest open in place.

### Scene 18

Picture: `shots/scene-18.png`

> With B, all of them show, and the plans get harder to see.

### Scene 19

Picture: `shots/scene-19.png`

> With C, the order of events stays hidden until you open a plan.

### Scene 20

Picture: `shots/scene-20.png`

> Step four. The page opens with one real loop instead of a diagram: the request, the plan video's first question, the owner's own answer, the first build, the words boring and stock, and the themed site. Each links down to its place on the timeline.

### Scene 21

Picture: `shots/scene-21.png`

> Step five. A check opens every page at phone and computer size, and fails on an error, a broken link, an event with no source, or a quote its source doesn't hold word for word.

### Scene 22

Picture: `shots/scene-22.png`

> Another quick check. Someone tidies a quote, writing don't where the owner wrote dont. What does the check do?

### Scene 23

Picture: `shots/scene-23.png`

> That's the plan. Draw on any step to leave a note, or approve it.
