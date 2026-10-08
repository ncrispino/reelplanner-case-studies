# Code check: 2026-10-08-case-study-page

## Steps
- Step 1 — ✓ carried by `tools/timeline.mjs`, `bob-dylan-site/commits.txt`, `bob-dylan-site/timeline.json`
- Step 2 — ✗ nothing in the diff carries "each video plays as a rendered MP4" for six of the seven: only `docs/bob-dylan/watch/media/every-song-walkthrough.mp4` is committed, so `docs/bob-dylan/watch/index.html:104` loads a missing file (404) for every other video; closest is `docs/bob-dylan/watch/videos.json`
- Step 3 — ✗ nothing in the diff carries "a thin bar beside it marks the day and the plan you are in" (only the day heading is sticky, `tools/build-page.mjs:182`) or "Watch the walkthrough opening it at the scene the comment was left on" (a review's link is a bare `watch/?v=<slug>` with no `#t=`, `tools/build-page.mjs:66`); closest is `tools/build-page.mjs`
- Step 4 — ✗ nothing in the diff carries "the commands and the file map stay, at the end, folded": both sections of the old page are gone, replaced by a few links in "What reelplanning did here" (`tools/build-page.mjs:286-298`); closest is `tools/build-page.mjs`
- Step 5 — ✓ carried by `tools/check-pages.mjs` (run on HEAD it fails, on the six missing MP4s, and `runs/check-pages.txt` the walkthrough cites is not in the diff)

## Decisions
- D-001 — ✓ holds: `tools/timeline.mjs:103` (a commit event's title is its subject) and `tools/build-page.mjs:71-75` (a build or change shows that one line); no agent chat replies are read
- D-002 — ✗ broken: `docs/bob-dylan/watch/media/` holds one MP4 of seven, so six videos on the watch page do not play; the walkthrough's "all seven took about 50 minutes" and `runs/render-times.txt` (cited by A5) are not in the diff
- D-003 — ✓ holds: `tools/build-page.mjs:79` (plans, reviews, non-small asks, each video's first build and pictured changes open; the rest in `<details class="fold">`, line 87)

## Unexplained
- `tools/build-page.mjs` — ✗ removes the old page's "The commands, in the order they ran" and "Where to find it" sections instead of folding them at the end as step 4 asks; no step, decision or autonomy row covers it. Suggest: autonomy row "commands and file map dropped, links kept in 'What reelplanning did here', instead of folded at the end" (or restore them).
- `tools/check-pages.mjs` — ✗ ignores console errors matching `youtube|spotify|coverartarchive|Failed to load resource` (line 88), so a failed resource load only fails the check if it is a 4xx from docs/; A13 does not name this filter. Suggest: autonomy row "console errors from YouTube, Spotify, the Cover Art Archive and failed resource loads are ignored, instead of failing on every console error".
- `tools/build-page.mjs` — ✗ a review on the timeline also lists "flagged choice A<n>" for each autonomy row the owner flagged (line 64), which the plan's review event (verdict, words, answers) does not ask for; no row covers it. Suggest: autonomy row "a review shows the choices the owner flagged, instead of only its verdict, answers and comments".
- `tools/timeline.mjs` — ✗ a review's `words` is its first comment (line 87) and `ledTo` is an event id (lines 111-114), not the plan's example (the "boring and stock" comment; `ledTo: "commit:16484b1"`), so the 03:10 review's words are "can you explore more why we didnt fully fill…"; no row covers the choice. Suggest: autonomy row "a review's words are its first comment and ledTo an event id, instead of the comment that caused the change and a commit source".
