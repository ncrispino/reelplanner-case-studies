# Code check brief: 2026-10-08-case-study-page

You are checking that an implementation follows its plan. You did not write it. Answer three questions,
every answer tied to a file (and a line where you can), and write them to `.reelplanning/plans/2026-10-08-case-study-page/code-check/findings.md`.

1. **Steps.** Does every plan step have a change that carries it out?
2. **Decisions.** Does every decision below hold in the code?
3. **Unexplained.** Is there anything in the diff the autonomy log does not explain? A change counts as
   explained when a step asks for it, a decision requires it, or an autonomy row names it. A choice a
   reviewer could reasonably have made the other way (a default, an error code, a library, a data
   shape, deleting instead of flagging, behaviour someone can see) needs a row; renames, file layout
   and the order of edits do not.

Report what you find, never fix it. Say "✗" only for something a reviewer would want to know; say why
in one sentence.

## The shape of findings.md (keep it exactly)

```
# Code check: 2026-10-08-case-study-page

## Steps
- Step 1 — ✓ carried by `path/to/file`, `other/file`
- Step 2 — ✗ nothing in the diff carries "<the part of the step>"; closest is `file`

## Decisions
- D-004 — ✓ holds: `path/file.mjs` (the summary frame is written in resumeAt)
- D-005 — ✗ broken: `path/file.js:120` counts a record jump as a rewind

## Unexplained
- `path/file.js` — ✗ changes the default speed from 1× to 1.25×; no step, decision or autonomy row covers it. Suggest: autonomy row "default speed 1.25×, instead of 1×".
```

Write "- none" under a section with nothing to report. Every ✗ line must start with its key: `Step N`,
a decision id, or a backticked path.

## Commits (3c7a5b7..HEAD)

```
570fa79 case study page: the timeline (70 events from the transcript, reviews and commits), a watch page for the videos, the study page as a timeline with do-it-yourself first, and a check of every page and quote
```

## The plan, as implemented

Read `.reelplanning/plans/2026-10-08-case-study-page/plan.md` in full. Its title is "A case study page that shows how reelplanning was used", with 5 steps.

## The decisions that apply

- **D-001** (step 1) What does the timeline say of the agent's side? → **One line per event, from its commit message**
- **D-002** (step 2) How should a video play on the watch page? → **i guess the rendered video file is fine to start but the watch only might be useful too**
- **D-003** (step 3) How much of the timeline is open at first? → **Each plan's videos and reviews open; the rest folded**

## Earlier calls this diff changes

- none

## The autonomy log (the implementer's own calls)

| id | step | chose | instead of | why | check |
|---|---|---|---|---|---|
| A1 | 1 | the study's four plans, the three messages that started a plan, the one that approved the fuller plan in chat, and the review whose last comment started it are named in a short table in the script [visible] | finding them from the text alone | a message like "yes write the second plan now" does not say which plan; the table is short and each row is checked against its source | tools/timeline.mjs (PLANS, STARTS, APPROVES) |
| A2 | 1 | a review's time comes from its file name; a message sent twice (the second only adding a "?") is kept once; a note left on an answer or a quick check counts as a comment [close] | the review's export time; every message; comments only from scene notes | the export time is when the page was saved, not sent; the owner's notes on answers held the every-song and desktop plans' comments | tools/timeline.mjs |
| A3 | 1 | an event's kind comes from its commit's subject: a video when it names a video, a plan when it starts "plan", a change when it follows a review (review, approved, fresh-eyes or code-check fixes), else a build [visible] | a kind written by hand for each of the 43 commits | the subjects were written to say this; the timeline then rebuilds the same way for the next study | tools/timeline.mjs |
| A4 | 1 | the timeline ends at the owner's "OK great. I think we're done here now."; publishing the study is not on it [visible] | every message to the end of the session | what follows is this repo's own work, recorded in its own plan | tools/timeline.mjs (END) |
| A5 | 2 | each video is rendered at 15 frames a second at a CRF of 30, two workers: 1.6 times its own length to render here, about 6 MB for two minutes [visible] | 30 frames a second at the default quality | the scenes move little; it halves the render and keeps all seven under 60 MB | runs/render-times.txt |
| A6 | 2 | an MP4 plays every scene in order, so a question's scenes for each answer play one after the other; a line under the player says so [visible] | cutting the scenes for answers the owner did not pick | the video is the one the owner reviewed; the chapter list shows which answer was picked | docs/bob-dylan/watch/index.html |
| A7 | 2 | a walkthrough's chapters are its steps, its off-plan changes and its questions, from their scene titles; a plan video's are its storyboard's chapters [visible] | the storyboard's chapters only | a walkthrough has one or two, so its list was no help to find a step | tools/videos.mjs |
| A8 | 2 | each video shows its still from the study page as its poster [close] | the first frame | the first frame is a blank page | docs/bob-dylan/watch/index.html |
| A9 | 3 | the before and after pictures are chosen by hand for four events: the first walkthrough's change, the desktop build, the fuller build and its last change [visible] | a picture for every build | most builds have no picture that shows them; these four are the ones the owner's comments changed | tools/build-page.mjs (PICTURES) |
| A10 | 3 | folded: messages under 80 characters that start nothing, a video's revisions after its first build, and builds and changes with no picture; each run of them is one line, "8 more: 2 changes, 1 small ask, 5 builds" [visible] | folding only the small messages | D-003 keeps each plan's videos and reviews open; the rest is still one click away, and a link into a fold opens it | tools/build-page.mjs |
| A11 | 3 | an answer the owner wrote in their own words is not repeated as a comment under it; times are UTC [close] | the same words twice; the owner's local time | the review file keeps both; the transcript's times are UTC | tools/build-page.mjs |
| D1 | 4 | the first loop has six moments, not five: the request, the plan video's question, the owner's own answer, the first build, the walkthrough review, each era its own look [deviation] | five beats | "boring and stock" needed its own review moment between the build and the themed site, or the change looked unprompted | tools/build-page.mjs (beats) |
| A12 | 4 | "Do it yourself" quotes reelplanning's README install verbatim, then the hosted voice as optional, then `mkdir dylan-site && cd dylan-site && git init` and `claude "<the first prompt>"`; each plan's starting message carries the same command [visible] | only the first prompt | the owner asked for the standard setup before it, and for the whole study to be followable | tools/build-page.mjs |
| A13 | 5 | the check uses the `puppeteer-core` reelplanning installs and HyperFrames' headless Chrome, serves `docs/` itself on a free port, blocks requests outside it, and checks a quote with "…" fragment by fragment [close] | its own dependencies; a fixed port | the repo stays plain files; a cut quote is still checked word for word | tools/check-pages.mjs |

## The diff

Read it yourself: `git diff 3c7a5b7..HEAD` (from the repository root). The files it touches:

```
.../2026-10-08-case-study-page/runs/build-page.txt |    3 +
 .../2026-10-08-case-study-page/runs/timeline.txt   |    3 +
 .../2026-10-08-case-study-page/runs/videos.txt     |    9 +
 .../2026-10-08-case-study-page/walkthrough.md      |  151 +++
 README.md                                          |   16 +-
 bob-dylan-site/commits.txt                         |   43 +
 bob-dylan-site/timeline.json                       | 1396 ++++++++++++++++++++
 docs/bob-dylan/index.html                          |  737 +++++------
 docs/bob-dylan/watch/index.html                    |  120 ++
 .../watch/media/every-song-walkthrough.mp4         |  Bin 0 -> 6074085 bytes
 docs/bob-dylan/watch/videos.json                   |  344 +++++
 tools/build-page.mjs                               |  316 +++++
 tools/check-pages.mjs                              |  110 ++
 tools/timeline.mjs                                 |  127 ++
 tools/videos.mjs                                   |   63 +
 15 files changed, 3034 insertions(+), 404 deletions(-)
```
