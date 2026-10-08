# A case study page that shows how reelplanning was used

**In one sentence:** the Bob Dylan study's page is rebuilt around a timeline of what really happened, from the
owner's first message to the last review, each video placed where it was made with the feedback that caused it, and
its videos open in a watch-only viewer instead of the review page.

## The problem

The owner, looking at the first study page:

> "yeah this case study website sucks it is not at all great at explaining anything... it is mostly claude slop"
>
> "the watch the seven videos should not open our own interactive reelplanning html but instead a version without
> marking up just for video viewing (a simplified version that is just meant to be non-interactive for read-only like
> this; and a better way to navigate videos)."
>
> "a timeline in the case study website would be great, it can be vertical too if you need more room. explaining
> where we started, where we did a video, what feedback created each video (use the session jsonl!), that way ppl say
> ok here's how reelplanning is fully used here!"

### What we have

- **The study page** (`docs/bob-dylan/index.html`): a hero with five counts, six cards for "the loop", a strip of
  screenshots per stage, one card per plan with its reviews folded, four "lessons", the commands, a file map. It says
  what reelplanning does in general words before it shows anything that happened, and the order of events (which
  comment led to which video) has to be pieced together from four separate cards.
- **The videos** open in the review bundle (`docs/bob-dylan/review/`): reelplanning's review player, with Mark, a
  comment box, "Finish review", decisions to pick and a "Before you watch" card. A visitor cannot leave a review there,
  so all of that is in the way. The library names the videos "video" and "walkthrough-video".
- **The record of what happened** is all there but in four places: the session transcript (9,999 events, 17 messages
  the owner typed), the 11 reviews in each plan's `reviews/`, the project's 43 commits, and the plans themselves.

## What changes

Three changes, in five steps.

1. **One record of what happened** (step 1): a timeline built from the transcript, the reviews and the commits, each
   event with its time, its source and what it led to.
2. **Videos to watch, not review** (step 2): a watch-only viewer with a list of chapters to jump between.
3. **A page that tells it in order** (steps 3, 4 and 5): the study page rebuilt around the timeline, opening with one
   real loop rather than a diagram, and a check that every page works and every event has a source.

Step 1 stands alone; step 2 stands alone; step 3 needs both; step 4 needs step 3; step 5 checks all of them.

## Steps

### Step 1 — The timeline, from the transcript, the reviews and the commits (question 1)

*Stands alone.*

**It lets you:** see everything that happened in the study in order, with who said what and what came of it, and
check any event against its source.

`tools/timeline.mjs` reads the redacted transcript (`bob-dylan-site/transcript.jsonl.gz`), every review
(`project/.reelplanning/plans/*/reviews/*.json`) and the project's commits (its git log, saved as
`bob-dylan-site/commits.txt` when the project is archived), and writes `bob-dylan-site/timeline.json`: one event per
thing that happened, of six kinds (the owner asked, a plan was written, a video was made, a review came back, a build
landed, a change followed a review). Each event keeps its time, the owner's own words when it has them, quoted exactly,
and the event it led to. What the agent did is one line per event from the commit message (question 1); the agent's
chat replies stay in the transcript. A message that only asks for a port, or a status, is kept but folded (step 3).

#### Cases

| Case | Example | What happens | Trace |
|---|---|---|---|
| A message the owner typed | 2026-10-07 06:58, "we need a new plan to make this work better on a computer" | an "asked" event, quoted exactly | read: transcript line; write: event `asked`; leads to: the desktop plan |
| A review sent from the review page | 2026-10-07 03:10, the dylan-site walkthrough, changes asked | a "review" event with its verdict, answers and comments | read: `reviews/walkthrough-20261007T031032Z.json`; write: event `review` |
| A commit that follows a review | 16484b1, "Per-era art direction …" | a "change" event, led to by that review | read: git log; link: the review before it, same plan |
| A video built | 28e99a6, "Plan video for dylan-site … 41 frames" | a "video" event, with its link in the viewer | read: git log; write: event `video` |
| A message with nothing to show | "how is the status" | an "asked" event marked small | write: `small: true`; you see: folded |

#### Interface

```
node tools/timeline.mjs bob-dylan-site     # writes bob-dylan-site/timeline.json
  ✓ <n> events: <a> asked, 4 plans, 7 videos, 11 reviews, <b> builds, <c> changes   # about 70 expected
timeline.json                              # { events: [ { id, at, kind, plan, title, words, verdict, video, source, ledTo } ] }
event.source                               # "transcript:1532", "reviews/walkthrough-20261007T031032Z.json" or "commit:16484b1"
event.words                                # the owner's own words, quoted exactly, or null
```

#### Example

The event for the first walkthrough review: `{ at: "2026-10-07T03:10", kind: "review", plan: "2026-10-06-dylan-site",
verdict: "changes", words: "i think the fonts and styling can be much better, more individualistic; it's kind of
boring and stock right now…", source: "reviews/walkthrough-20261007T031032Z.json", ledTo: "commit:16484b1" }`.

```diagram
flow: Where an event comes from
transcript = the transcript: the owner's messages -> timeline = timeline.json
reviews = each review: verdict, answers, comments -> timeline
commits = the project's commits: plans, videos, builds -> timeline
timeline -> page = the study page's timeline (step 3)
```

### Step 2 — A watch-only viewer for the videos (question 2)

*Stands alone.*

**It lets you:** watch any of the seven videos without anything to fill in, jump to a chapter or a question, and see
what the owner answered at each question.

`docs/bob-dylan/watch/` shows one video at a time, chosen from a list down the side (on a phone, above it) named by
what the video is ("Plan video · The site, from an empty folder"), not its folder. Under the video, its chapters and
its questions are links that jump there; a question shows the owner's answer beside it ("Answered: Astro, a page per
song"). How the video itself plays is question 2, answered in the owner's own words (D-002): "i guess the rendered video
file is fine to start but the watch only might be useful too". So each video plays as a rendered MP4 in the browser's
own player, its chapters and questions jumping with `#t=`; one video is timed first, and if the seven would take more
than a few hours the build stops and asks. A watch-only mode for reelplanning's player is left for a later plan, in
reelplanning's own repo.

#### Cases

| Case | Example | What happens | Trace |
|---|---|---|---|
| A visitor opens a video | the desktop walkthrough | it plays with captions; no Mark, comment box or Finish | open: `watch/?v=desktop-walkthrough`; you see: the video and its chapters |
| A question in a video | dylan-site plan video, question 1 | the chapter list shows "Question 1 · answered: Astro, a page per song" | click: the question; video: jumps to it |
| A plan with no plan video | the fuller site | the list says "approved in chat" in its place | you see: one row, no video |
| A phone | 390 px wide | the list sits above the video, one line a video | you see: the list, then the video |

#### Interface

```
docs/bob-dylan/watch/index.html     # the viewer: a list of the seven, the open video, its chapters and questions
watch/?v=<slug>                     # opens that video; with #t=<seconds>, at that moment
docs/bob-dylan/watch/videos.json    # each video's title, plan, length, chapters and questions with their answers
```

#### Example

From the timeline's first walkthrough review, "Watch it" opens `watch/?v=dylan-site-walkthrough`: the video, and
beside it its chapters ("What landed", "The eras", …) and its one question, "Which YouTube clips? · answered:
official, plus well-known unofficial ones".

```diagram
sequence: Watching a video
visitor -> list: picks the desktop walkthrough
list -> player: loads it
visitor -> chapters: clicks question 4
chapters -> player: jumps to 1:43 | the answer shows beside it
```

### Step 3 — The study page, told as a timeline (question 3)

*Needs steps 1 and 2.*

**It lets you:** read the study top to bottom in the order it happened, and see at each video what caused it and what
it changed.

The study page becomes a vertical timeline from `timeline.json`, in three days. Each plan is a stretch of it, headed by
the owner's words that started it. Along it: the owner's messages, each plan written, each video (a still, its length,
"Watch it" opening the viewer at it), each review (its verdict, the owner's words, what they answered), and what
changed after (one line, with a before and after picture where the site changed). How much is open at first is
question 3. A thin bar beside it marks the day and the plan you are in. The general account of reelplanning moves to
the end, short, after the visitor has seen it used.

#### Cases

| Case | Example | What happens | Trace |
|---|---|---|---|
| A plan starts | the desktop plan | a heading with the owner's words: "we need a new plan to make this work better on a computer" | read: event `asked` → `plan`; you see: the stretch begins |
| A video | the every-song plan video | a still, "22 scenes · 3:36", Watch it | click: Watch it; open: `watch/?v=every-song` |
| A review that asked for changes | the dylan-site walkthrough | the verdict, the owner's words, and under it what changed, with the before and after shots | read: `review` → `change`; you see: plain → themed |
| A small message | "pls put on 8005 instead." | folded into a line, "and two small asks", open to read | you see: a folded line |
| On a phone | 390 px | one column; the day bar becomes a heading per day | you see: Day 1, Day 2, Day 3 |

#### Interface

```
docs/bob-dylan/index.html     # the timeline page, built from timeline.json by tools/build-page.mjs
node tools/build-page.mjs bob-dylan-site   # writes the page from timeline.json
  ✓ docs/bob-dylan/index.html: <n> events in 3 days, 4 plans, 7 videos, 11 reviews
<article class="event" data-kind="review" data-source="…">   # one per event, its source on it
```

#### Example

Day 2, 03:10: "Walkthrough review · changes asked", the owner's words ("…it's kind of boring and stock right now. each
era should mean something…"), then 03:43 "Each era its own art direction", with the first build's phone page beside the
themed one, and "Watch the walkthrough" opening it at the scene the comment was left on.

```diagram
flow: One stretch of the timeline
ask = the owner asks -> plan = the plan
plan -> video = the plan video
video -> review = the review: answers, words
review -> build = the build
build --> change = a change, when the review asked for one
change -> next = the next video
```

### Step 4 — Open with one real loop, not a diagram

*Needs step 3.*

**It lets you:** understand what reelplanning is from one real example in the first screen, before the full timeline.

Under it, before anything else, **how to do it yourself** (the plan review: "if user wants to try this on their own,
they can copy the first command at the start and it will start claude with the first prompt. before that theres the
standard reelplanning setup"): reelplanning's setup, then the one command that starts Claude Code with the study's first
prompt, word for word, each with a copy button. Each plan's stretch of the timeline carries the same: the owner's
message that started it, as a copyable prompt, so anyone can follow the whole study step by step. Text is set to read
easily at both sizes: at least 17 px for body text, 15 px for captions.

The page opens with the first loop of the study, told in five beats with its own pictures: the request; the plan video
asking "How should the site be built?"; the owner's own answer ("which can produce a sophisticated website…"); the
plan asked again, approved; the first walkthrough, and "boring and stock", and the themed site. Each beat links down
to its place in the timeline. The six-card "loop" and the four "lessons" go; the commands and the file map stay, at
the end, folded.

#### Cases

| Case | Example | What happens | Trace |
|---|---|---|---|
| A first-time visitor | someone who has never heard of reelplanning | reads five beats and a picture each, in one screen and a scroll | you see: the request → the question → the answer → the themed site |
| A beat clicked | "the owner's own answer" | the timeline opens at that review | click: the beat; scroll: to the event |
| Someone who wants to replicate it | a developer with Claude Code | copies the setup, then the first command, and has the same first prompt running | copy: the setup; copy: `claude "Use reelplanning to plan: …"`; you see: the plan start |

#### Interface

```
<section class="first-loop">   # five beats, each a picture, a line and a link into the timeline
<section class="replicate">    # reelplanning's setup, then `claude "<the first prompt>"`, each with a copy button
event.prompt                   # on an "asked" event that started a plan: the message as a copyable prompt
```

#### Example

Beat 3 reads "The owner wrote their own answer", with the plan video's question 1 still and the quote, and links to
the 2026-10-06 21:01 review in the timeline.

```diagram
flow: The first screen
request -> question = the plan video asks
question -> answer = the owner's own answer
answer -> built = the first build
built -> boring = "boring and stock"
boring -> themed = each era its own look
```

### Step 5 — A check that every page works and every event has a source

*Needs steps 1 to 4.*

**It lets you:** trust that the published pages work on a phone and a computer, and that nothing on the timeline is
made up.

`tools/check-pages.mjs` serves `docs/` at its Pages path and opens the front page, the study page, the viewer with each
video and the built site's first pages, at 390 × 844 and 1440 × 900. It fails on a console error, a link that does not
resolve inside `docs/`, a page wider than the window, an event with no source, or a quoted line its source does not
hold word for word.

#### Cases

| Case | Example | What happens | Trace |
|---|---|---|---|
| A quote that is not in its source | a comment with a typo fixed | the check fails, naming the event | read: the source; compare: word for word; prints: ✗ |
| A broken link | `watch/?v=fuller` with no such video | the check fails | open: the link; prints: ✗ |
| All well | | the check passes | prints: ✓ 14 views, every event with its source |

#### Interface

```
node tools/check-pages.mjs     # ✓ 14 views at 390 × 844 and 1440 × 900 · <n> events, each with its source
  ✗ event "review-2026-10-07T03:10": quote not found in reviews/walkthrough-20261007T031032Z.json
```

#### Example

Before a push, `node tools/check-pages.mjs` prints "✓ 14 views … every event with its source"; a quote retyped with
"don't" for the owner's "dont" fails it.

```diagram
flow: What the check opens
check -> pages = the front page, the study page, the viewer, the site
check -> events = each event: its source, its quote
pages -x broken = a broken link or an error: fails
```

## Components touched

- **The study page** (step 3, 4): rebuilt around the timeline.
- **The study folder** (step 1): gains `timeline.json` and `commits.txt`.
- **The watch page** (step 2): new, `docs/bob-dylan/watch/`.
- **The review bundle** (step 2): kept for anyone who wants the full player; no longer what "Watch" opens.
- **The front page** (step 5): checked with the rest.

## Open questions for the reviewer

1. **What does the timeline say of the agent's side?** (step 1)
   - **A · One line per event from its commit message,** e.g. "Each era its own art direction". Costs: the agent's
     reasoning stays in the transcript.
   - **B · Also quote the agent's chat replies at each step,** from the transcript. Costs: much longer, and the replies
     are long.
   - **C · Only the owner's side.** Costs: what was built shows only as pictures.
   - Recommended: **A**.

2. **How should a video play on the watch page?** (step 2)
   - **A · A rendered MP4 of each video, in the browser's own player.** Watch-only by nature, plays anywhere, chapters
     jump with `#t=`. Costs: rendering on this 2-CPU machine is slow: the plan times one video first, and if the seven
     would take more than a few hours it stops and asks before going on, with B as the fallback. Each MP4 is a few tens
     of MB.
   - **B · reelplanning's player in a watch-only mode,** with no Mark, comment box or Finish, its questions showing
     the owner's answer. Costs: a change to reelplanning itself, in its own repo, before this page can use it.
   - **C · The review player as it is,** linked from a plain list with better names. Costs: the marking-up the owner
     does not want stays.
   - Recommended: **A**.

3. **How much of the timeline is open at first?** (step 3)
   - **A · Each plan's videos and reviews open; small messages and each change's details folded.** About 30 of some 70
     events show; the rest open in place. Costs: one click to see a fold.
   - **B · Everything open.** All of some 70 events. Costs: a long page; the plans are harder to see.
   - **C · Only the plans' headings; open a plan to see its stretch.** Costs: the order of events is hidden until
     opened.
   - Recommended: **A**.

## Decisions in force

None yet in this repo: this is its first plan.

## Supersedes

None.
