# reelplanning case studies

Real projects built with **[`reelplanning`](https://github.com/ncrispino/reelplanning)**, shown step by step.

> **What is `reelplanning`?** A planning tool for coding agents such as Claude Code. Instead of a wall of text, you
> review each plan as a short narrated video. The video stops at each open question, and you answer it, comment and
> approve. Your answers come back to the agent as files in the repo. After the build, a walkthrough video shows what
> landed and the choices the agent made on its own.
>
> **→ [Get `reelplanning`](https://github.com/ncrispino/reelplanning)**

Each study here keeps its videos, its reviews, its session transcript and the project as it was committed, so you can
follow it, or run it yourself from the same first prompt.

**Browse the studies:** https://ncrispino.github.io/reelplanning-case-studies/

## Try `reelplanning` yourself

```sh
npm i -g github:ncrispino/reelplanning
reelplanning setup
npx skills add "$(npm root -g)/reelplanning" --skill plan-to-video -g
```

Then, in an empty project folder, ask Claude Code for a plan with `reelplanning`. Each study's page starts with the exact
first prompt its owner used.

## Bob Dylan, explored

An interactive site about Bob Dylan's life and music, built from an empty folder and grown through three more plans:
seven videos, each reviewed.

- The study, as a timeline: https://ncrispino.github.io/reelplanning-case-studies/bob-dylan/
- The site: https://ncrispino.github.io/reelplanning-case-studies/bob-dylan/site/
- The videos, to watch: https://ncrispino.github.io/reelplanning-case-studies/bob-dylan/watch/
- The videos in reelplanning's review player: https://ncrispino.github.io/reelplanning-case-studies/bob-dylan/review/
- The write-up in plain text: [bob-dylan-site/README.md](bob-dylan-site/README.md)

## Adding a study

Every study uses the same template: see [TEMPLATE.md](TEMPLATE.md).

## Layout

```
README.md
bob-dylan-site/          the Bob Dylan study
  README.md              how each video was made, and what the owner said about each
  transcript.zip         the session up to the end of the build, as Claude Code recorded it (the owner's email, account skills and connected accounts redacted)
  commits.txt            the project's commits, one a line
  timeline.json          every event of the study, built by tools/timeline.mjs
  study.json             what the study's page says beyond the timeline (TEMPLATE.md)
  project/               the project as committed: source, data, plans, reviews, decisions
docs/                    served by GitHub Pages (main, /docs)
  index.html             the list of studies (built by tools/build-page.mjs)
  assets/                the template's stylesheet, light/dark toggle and video player, shared by every study
  bob-dylan/
    index.html           the study's page: how to do it yourself, then the timeline (tools/build-page.mjs)
    watch/               the videos to watch, in a read-only player, with their chapters and the owner's answers
    img/                 its pictures: the site at each stage, a still from each video
    site/                the built site
    review/              the videos in reelplanning's review player
tools/
  timeline.mjs           the timeline, from the transcript, the reviews and the commits
  videos.mjs             the watch page's list: each video's chapters and questions
  build-page.mjs         the template: a study's page and watch page, and the list of studies
  check-pages.mjs        every page at phone and computer size; every event's source; every quote word for word
.reelplanning/           this repo's own plans, reviews and decisions
```
