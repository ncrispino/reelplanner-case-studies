# reelplanning-case-studies — system spec

_Kept current by the agent after every walkthrough (stage 4). Names come from `glossary.md`; parts and edges from `system.json`. Prose here, data there._

## Purpose

A public home for reelplanning's case studies: real projects planned and reviewed through reelplanning, each kept with
its videos, its reviews, its session transcript and the project as committed, and shown on GitHub Pages so someone new
can see how reelplanning was used, start to finish. The first study is Bob Dylan, explored.

## Parts

- **The study folder** (`study`): `bob-dylan-site/`: the plain-text write-up (`README.md`), the session transcript
  (`transcript.zip`, the owner's email, account skills and connected accounts redacted) and the project as committed (`project/`, a git archive).
- **The study page** (`study-page`): `docs/bob-dylan/index.html` and its pictures in `docs/bob-dylan/img/`: the write-up
  a visitor reads first.
- **The review bundle** (`review-bundle`): `docs/bob-dylan/review/`: the seven videos in reelplanning's review player,
  made by `reelplanning bundle-player`, voice included.
- **The built site** (`built-site`): `docs/bob-dylan/site/`: the Bob Dylan site, built with its base path set to its
  Pages address.
- **The front page** (`front-page`): `docs/index.html`, the list of studies, and the root `README.md`.

## Pipelines

1. **Publishing a study:** the project's last commit → `study/project/`; its videos → `bundle-player` → the review
   bundle; the site built with `--base` → the built site; the write-up and pictures by hand → the study page; one commit,
   pushed to `main`; GitHub Pages serves `docs/`.

## Invariants

- Nothing in the repo names the owner's email, a key or a token; the transcript is redacted before it is committed.
- Every page under `docs/` works under its Pages path (`/reelplanning-case-studies/…`) with no request outside it but the
  album covers, Spotify and YouTube.
- A study's project and videos are snapshots: they are never rebuilt because the project moved on.

## Knowledge levels

- `new`: nothing about this repo or reelplanning.
- `familiar`: the part names above, not the mechanics.
- `owner`: the mechanics and the history; skips the "today" and cast beats.

## Conventions

Plain static files, no build step for the pages of this repo itself. Pictures as JPEG. "reelplanning" is lowercase.
A page is checked at 390 × 844 and 1440 × 900 from a local server rooted at `docs/`.
