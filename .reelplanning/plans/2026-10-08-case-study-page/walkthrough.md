# Walkthrough: a case study page that shows how reelplanning was used

**In one sentence:** the Bob Dylan study's page is now the study itself, in order: how to do it yourself from the same
first prompt, the first loop in six pictures, and a vertical timeline of all 70 events, each with its source and the
owner's own words; its seven videos play on a watch page in a read-only viewer, with their chapters and the owner's answers.

Built from `3c7a5b7` (the approved plan: D-001 one line per event, D-002 MP4s first and a watch-only mode later, D-003
each plan's videos and reviews open).

## Choices made while building

| id | step | chose | instead of | why | where to check |
|---|---|---|---|---|---|
| A1 | 1 | the study's four plans, the three messages that started a plan, the one that approved the fuller plan in chat, and the review whose last comment started it are named in a short table in the script [visible] | finding them from the text alone | a message like "yes write the second plan now" does not say which plan; the table is short and each row is checked against its source | tools/timeline.mjs (PLANS, STARTS, APPROVES) |
| A2 | 1 | a review's time comes from its file name; a message sent twice (the second only adding a "?") is kept once; a note left on an answer or a quick check counts as a comment [close] | the review's export time; every message; comments only from scene notes | the export time is when the page was saved, not sent; the owner's notes on answers held the every-song and desktop plans' comments | tools/timeline.mjs |
| A3 | 1 | an event's kind comes from its commit's subject: a video when it names a video, a plan when it starts "plan", a change when it follows a review (review, approved, fresh-eyes or code-check fixes), else a build [visible] | a kind written by hand for each of the 43 commits | the subjects were written to say this; the timeline then rebuilds the same way for the next study | tools/timeline.mjs |
| A4 | 1 | the timeline ends at the last message of the build, "ok great i see it, maybe we should note this somewhere thoug"; the saved transcript is cut just before the owner's message asking to publish the study, so publishing it is not on the page and not in the transcript [visible] (changed on the owner's word: "thats long and internal and doesnt really add anything") | every message to the end of the session | what follows is this repo's own work, recorded in its own plan | tools/timeline.mjs (END) |
| A5 | 2 | the watch page plays each video in HyperFrames' own player, the read-only viewer: the reviewed video's own scenes, voice and captions from the review bundle, with play, scrub and volume and nothing to fill in [visible] (changed on the owner's word during the build, "actually, i do prefere having our read-only veiwer instead of mp4": the MP4s, of which one had been rendered and timed, are gone) | MP4s in the browser's own player | no render, no 60 MB of files, and the video is exactly the one reviewed | docs/bob-dylan/watch/index.html |
| A6 | 2 | the video plays straight through, so a question's scenes for each answer play one after the other; a line under the player says so, and the chapter list shows the answer picked [visible] | cutting the scenes for answers the owner did not pick | the video is the one the owner reviewed | docs/bob-dylan/watch/index.html |
| A7 | 2 | a walkthrough's chapters are its steps, its off-plan changes and its questions, from their scene titles; a plan video's are its storyboard's chapters; a chapter jumps 0.6 s past its start, after the cross-fade [visible] | the storyboard's chapters only | a walkthrough has one or two, so its list was no help to find a step | tools/videos.mjs |
| A8 | 2 | no poster: the player shows the video's first scene [close] | each video's still as its poster | the player draws a poster at its own size, cropped | docs/bob-dylan/watch/index.html |
| A9 | 3 | the before and after pictures are chosen by hand for four events: the first walkthrough's change, the desktop build, the fuller build and its last change [visible] | a picture for every build | most builds have no picture that shows them; these four are the ones the owner's comments changed | tools/build-page.mjs (PICTURES) |
| A10 | 3 | folded: messages under 80 characters that start nothing, a video's revisions after its first build, and builds and changes with no picture; each run of them is one line, "8 more: 2 changes, 1 small ask, 5 builds" [visible] | folding only the small messages | D-003 keeps each plan's videos and reviews open; the rest is still one click away, and a link into a fold opens it | tools/build-page.mjs |
| A11 | 3 | an answer the owner wrote in their own words is not repeated as a comment under it; times are UTC [close] | the same words twice; the owner's local time | the review file keeps both; the transcript's times are UTC | tools/build-page.mjs |
| D1 | 4 | the page opens with the site at five stages, a strip across the top, each picture linking to the event that made it (the first build; after "boring and stock"; on a computer, before and after; the fuller site), then a three-sentence summary and the first prompt to copy, then straight into the timeline [deviation] (changed on the owner's word during the build: "it is a case study first … it is meant to be a clear guide and read", then "more of an example of the website or something to catch attention … shouldnt take up too much hieight so we can dive right into the timeline") | five beats of the first loop under the summary | the strip shows the loop in pictures in about 200 px; the beats' quotes are all on the timeline | tools/build-page.mjs (STAGES) |
| A12 | 4 | "Do it yourself" quotes reelplanning's README install verbatim, then the hosted voice as optional, then `mkdir dylan-site && cd dylan-site && git init` and `claude "<the first prompt>"`; each plan's starting message carries the same command [visible] | only the first prompt | the owner asked for the standard setup before it, and for the whole study to be followable | tools/build-page.mjs |
| A14 | 3 | a review's comment links to its moment in the video (▶ 2:42) only when the video was not rebuilt after the review; a review also lists the choices the owner flagged [visible] | every comment linked; flags left out | the first plan's video was rebuilt after its first review, so those times point elsewhere; a flag is part of what the owner said | tools/build-page.mjs |
| A16 | 3 | the page's own wording was read cold by a fresh agent for tone; its 31 notes were taken: no counts in the summary, full-sentence labels ("The owner reviews the plan and asks for changes"), plain words for jargon ("new project", "typed answer, not one of the options", "video fix"), and a claim that three plans began as walkthrough comments, which was wrong, removed [visible] (on the owner's word: "just check this and others of tone w fresh subagent") | the first wording | the summary had read as a list of numbers, and the false claim was on the page twice | tools/build-page.mjs |
| A15 | 3 | the page is set as an editorial document: Newsreader, IBM Plex Sans and Plex Mono; hairline rules, no cards; one accent on the spine; an 8 px spacing scale; a rail beside the timeline naming the day and plan you are in [visible] (changed on the owner's word during the build, "i think the themeing is ugly and slop and needs help. and spacing not great too necessarily") | rounded cards, pills and system fonts | one shared stylesheet, docs/bob-dylan/style.css, for both pages | docs/bob-dylan/style.css |
| A13 | 5 | the check uses the `puppeteer-core` reelplanning installs and HyperFrames' headless Chrome, serves `docs/` itself on a free port, blocks requests outside it, and checks a quote with "…" fragment by fragment; it ignores console errors from YouTube, Spotify and the Cover Art Archive, whose requests it blocks [close] | its own dependencies; a fixed port; failing on blocked outside requests | the repo stays plain files; a cut quote is still checked word for word; the outside services are not the pages' to fix | tools/check-pages.mjs |

## What landed, step by step

### Step 1 — The timeline, from the transcript, the reviews and the commits (question 1)

**You can now:** read every event of the study in order, with its source, the owner's words and what it led to.

`tools/timeline.mjs` reads the redacted transcript, the 11 reviews and `commits.txt` (the project's 43 commits, saved
from its git log), and writes `bob-dylan-site/timeline.json`: 71 events, 16 messages from the owner, 3 plan commits (one
commit wrote two plans), 11 video events (one commit made two plans' walkthroughs, so it is one event each), 11 reviews,
17 builds and 13 changes. The plans are numbered in the order the owner asked for them. Each event's agent line is its
commit's subject (D-001); each quote is the owner's own, exactly (A2, A3, A4).

**Commits:** this plan's build commit.

```diagram
flow: Where an event comes from
transcript = the transcript: 16 messages -> timeline = timeline.json: 70 events
reviews = 11 reviews -> timeline
commits = 43 commits -> timeline
```

#### Worked examples

##### The first walkthrough review
- **Input:** `node tools/timeline.mjs bob-dylan-site`
- **What happens:** the review of 2026-10-07 03:10 becomes a review event with its 8 comments, led to the change at 03:43.
- **Output:** `runs/timeline.txt`

#### Files and commands
`tools/timeline.mjs`, `bob-dylan-site/commits.txt`, `bob-dylan-site/timeline.json`.

### Step 2 — A watch-only viewer for the videos (question 2)

**You can now:** watch any of the seven videos with nothing to fill in, jump to a chapter or a question, and see what
the owner answered.

`docs/bob-dylan/watch/` lists the seven by plan; the fuller plan says "Approved in chat: no plan video". D-002 asked for
MP4s first and a watch-only viewer later; during the build the owner asked for the viewer instead (A5). So each video
plays in HyperFrames' own player, the engine inside reelplanning's review page without its review layer, from the
review bundle's scenes, with its chapters and questions under it (A7), each question showing the owner's answer; `?v=`
opens one and `#t=` a moment. One MP4 had been rendered and timed (300 s for the 2:11 every-song walkthrough) before the
change; the renders were stopped.

**Commits:** this plan's build commits.

```diagram
sequence: Watching a video
visitor -> list: picks the desktop walkthrough
list -> player: plays its reviewed scenes, voice and captions
visitor -> chapters: clicks Question 4
chapters -> player: jumps to 1:57 | the owner's answer shows beside it
```

#### Worked examples

##### The desktop walkthrough
- **Input:** `node tools/videos.mjs bob-dylan-site docs/bob-dylan/watch`
- **What happens:** 16 scenes, 3:03, 13 chapters, question 4 answered "Add "A thread from this song ›" to the map page".
- **Output:** `runs/videos.txt`

#### Files and commands
`tools/videos.mjs`, `docs/bob-dylan/watch/`.

### Step 3 — The study page, told as a timeline (question 3)

**You can now:** read the study top to bottom in the order it happened, each plan headed by the words that started it.

`tools/build-page.mjs` writes `docs/bob-dylan/index.html` from the timeline: a heading per day, a stretch per plan with its
starting message, each video as a still with Watch it, each review with its verdict, answers and comments, and four
changes with before and after pictures (A9). Runs of small events are folded (A10, D-003).

**Commits:** this plan's build commit.

#### Worked examples

##### Day 2, 03:10
- **Input:** `node tools/build-page.mjs bob-dylan-site docs/bob-dylan`
- **What happens:** "The owner reviewed the walkthrough video · changes asked", its answer and 8 comments, "What it led to ↓".
- **Output:** `runs/build-page.txt`

#### Files and commands
`tools/build-page.mjs`, `docs/bob-dylan/index.html`.

### Step 4 — Open with one real loop, not a diagram

**You can now:** see the site change across the study in one strip, copy the study's first prompt, and go straight to
the timeline.

The page is a document: a plain title, the site at five stages (D1), a three-sentence summary, the first prompt to copy
with reelplanning's setup folded under it (A12), then the timeline as section 1. A contents column beside it names the
day and plan you are in (A15). The six loop cards and the four lessons of the old page are gone; "What reelplanning did"
and an appendix of commands and files close it.

#### Files and commands
`tools/build-page.mjs`.

### Step 5 — A check that every page works and every event has a source

**You can now:** trust the pages on a phone and a computer, and that every quote on the timeline is in its source.

`node tools/check-pages.mjs` opens 24 views (the front page, the study page, the watch page and each video, two of the
site's pages, at two sizes), follows every link inside `docs/`, and checks all 70 events (A13).

#### Worked examples

##### Before a push
- **Input:** `node tools/check-pages.mjs`
- **Output:** `runs/check-pages.txt`

#### Files and commands
`tools/check-pages.mjs`.

## Tests run

- `node tools/check-pages.mjs`: `runs/check-pages.txt`.

## Not done

- **reelplanning's own player in a watch-only mode:** the viewer here is HyperFrames' player, which reelplanning's wraps; a watch-only switch in reelplanning itself is left for a plan in its own repo.
- **Silence at a question:** the review player pauses on its answer card, which no narration covers; reported by the owner,
  not changed here (it is the player's).

## Decisions kept

- **D-001** "One line per event, from its commit message": each build and change shows its commit's subject (`tools/timeline.mjs`).
- **D-002** "i guess the rendered video file is fine to start but the watch only might be useful too": changed on the owner's word during the build, to the read-only viewer instead of MP4s (A5) (`docs/bob-dylan/watch/`).
- **D-003** "Each plan's videos and reviews open; the rest folded": as built (`tools/build-page.mjs`).
