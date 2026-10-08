---
workflow: faceless-explainer
flow: automation
storyboard: no
message: "A plan to give each of the 277 album tracks with no page its own song page: records and writing, players and links, connections and threads, album rows that all link, and a data check that holds it. Two questions: which tracks, and how much for other writers' songs."
destination: embed
aspect: 1920x1080
language: en
audience: the owner, who found "If You See Her, Say Hello" with nothing behind it
length: about three minutes along one path, 3 chapters
angle: how-to-process
narration: yes
style_preset: .reelplanning/theme/frame.md (the project theme)
music: none
---

## Intent

Review a plan for the dataset. The site exists, so the video opens on the real Blood on the Tracks track list at
1440 × 900 (three rows with nothing behind them), then draws what each step makes: a song record, the writing, the
links, a connection, and the same track list with every row a link.

## Customizations

- Medium: screen (a real screenshot, then browser-window and card mocks), with a JSON record, diagrams and one planned terminal run
- Layouts: one wide browser window with a short label column; a bar of four groups; a code slab; a diagram; three option cards under a heading
- Main transition: push-slide LEFT for the next scene in a chapter; cut for a chapter or a quick check; push-slide UP for a question
- Real things: scene 1 (Blood on the Tracks' track list today); the rest explain with pictures
- Every frame's root carries `data-band="bottom"` and keeps its lowest eighth empty; option cards carry
  `data-option`, headings `data-question`, outside any camera; a camera is at rest when a question ends.
- `music: none`. Kokoro `am_michael` at speed 1.25, one line at a time. No MP4: the review player plays
  the HTML project.

## Notes

Branch beats hold 6 s. No details pages: the plan's own blocks (Cases, Interface, Example) are in the guide.
