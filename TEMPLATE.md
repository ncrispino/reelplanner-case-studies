# The case-study template

Every study in this repo is published the same way: a case study page (a title, the site at a few stages, a short summary
with the first prompt to copy, then the whole study as a timeline) and a watch page for its videos, both with a
light/dark toggle. The pages come from four scripts in `tools/` and one stylesheet; what is particular to a study is
in its own `study.json`. The Bob Dylan study (`bob-dylan-site/`) is the worked example.

## While the study runs

Keep every version of every video. A project's `.reelplanning/` commits each video's storyboard, script and scenes,
but not its screenshots, fonts or narration (the repo's ignore rules leave out `assets/`, the voice and its timings), so
a video rebuilt after a review loses its first version for good. After each video is built, and again after each review
that asks for changes, snapshot the built videos in full: with the case-study kit, `sh eval/case-studies/kit/arm.sh ours
snapshot`; without it, `reelplanning bundle-player <somewhere>/review-v<n> <the video folders> --reelplanning
<project>/.reelplanning`. The watch page can then show each version.

## Adding a study

1. **Make the study folder** at the repo's root, e.g. `my-study/`, with:
   - `project/`: the project as committed (`git -C <project> archive HEAD | tar -x -C my-study/project`), its
     `.reelplanning/` included;
   - `transcript.zip`: the session transcript as `transcript.jsonl` in a zip (a `.gz` will not open with a double-click on a Mac), cut just before the first message after the study (e.g. asking to
     publish it), with the owner's email, their account's skills and connected accounts, their organization's id and anything else private redacted, and checked before it is committed; the
     timeline ends where it ends;
   - `commits.txt`: `git -C <project> log --reverse --format='%h%x09%aI%x09%s' > my-study/commits.txt`.
2. **Write `my-study/study.json`**, copying `bob-dylan-site/study.json`:

   | Field | What it is |
   |---|---|
   | `slug` | the page's address: `docs/<slug>/` |
   | `title` | the study's short name, in the top bar |
   | `heading`, `label`, `dek` | the page's heading, the line above it, the lines under it |
   | `blurb`, `card` | the study's card on the front page: a sentence or two, and the screenshot in `img/` it shows |
   | `stripLabel` | the line over the strip of screenshots |
   | `summary` | the summary's paragraphs, plain and short (HTML allowed for links) |
   | `project` | the folder name in the "try it yourself" command |
   | `ranWith` | what the study ran on, for replicating it: `model` (its id, also put in the first command as `--model`), `modelName`, `claudeCode`, `reelplanning`, `hyperframes`; the model and Claude Code version are in the transcript (each message's `model` and each line's `version`) |
   | `days` | each date's label on the timeline |
   | `plans` | each plan in the order the owner asked for it: its id (its `.reelplanning/plans/` folder), title, kind, and `match`, a pattern that finds it in a commit's subject |
   | `starts`, `approves` | the opening words of the owner's messages that started a plan, or approved one in chat |
   | `startedByReview` | when a plan began as a comment on another plan's review |
   | `videos` | each video: its slug on the watch page, its plan, `video` or `walkthrough-video`, and its still in `docs/<slug>/img/` |
   | `stages` | the strip at the top: a few screenshots of the site, each with a caption, the timeline event its larger view links to, and `badge` (e.g. "added") when it shows something added rather than replaced |
   | `pictures` | before-and-after screenshots shown with an event |
   | `together`, `togetherNote` | plans asked for and planned together, shown under one heading, and the line that says why |
   | `versions` | a video rebuilt after a review: its slug → the timeline event that built the version kept; the first build then reads "version 1, not kept" and the card that plays sits at the rebuild |
   | `videoNote` | a line on the watch page, e.g. which videos were rebuilt after a review (the watch page shows each as last built) |
   | `facts` | "How the reviews worked": a few plain lines, each term the page uses explained once, each claim linked to its source (HTML allowed) |
   | `plainCommits` | each commit on the timeline as one plain sentence, by its hash; the page links the hash to its line in `commits.txt` and shows the raw message on hover |
   | `pages` | the site's pages the check opens |
3. **Pack the videos and the site** into `docs/<slug>/`:
   - `reelplanning bundle-player docs/<slug>/review <each video folder> --reelplanning <project>/.reelplanning`: the
     watch page plays these;
   - the built site in `docs/<slug>/site/`, built with its base path set to `/reelplanning-case-studies/<slug>/site/`;
   - stills and screenshots in `docs/<slug>/img/`, as JPEG.
4. **Build and check:**
   ```
   node tools/timeline.mjs my-study      # my-study/timeline.json, from the transcript, the reviews and the commits
   node tools/videos.mjs my-study        # docs/<slug>/watch/videos.json: each video's chapters and questions
   node tools/build-page.mjs my-study    # docs/<slug>/index.html, docs/<slug>/watch/index.html, docs/index.html
   node tools/check-pages.mjs            # every page at 390 × 844 and 1440 × 900; every event's source; every quote
   ```
5. **Read it cold.** A fresh agent reads the built page for tone and clarity before it is published: plain words, no
   counts for their own sake, no claim the timeline does not back.

## What the template keeps the same

- `docs/assets/case-study.css`: the look (Newsreader, IBM Plex Sans and Mono; hairline rules; one accent; an 8 px scale),
  light and dark.
- `docs/assets/theme.js`: the light/dark toggle, kept per visitor; with no choice the system's setting rules.
- `docs/assets/hyperframes-player.js`: the read-only viewer (HyperFrames' player, MIT).
- The owner's words are quoted exactly, typos included, and every event names its source; `check-pages.mjs` fails
  otherwise.
