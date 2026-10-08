---
workflow: faceless-explainer
flow: automation
storyboard: no
message: "A plan to make the Dylan site right on a computer: the map's dots open their songs everywhere; from 1100 px a header, the era's look across the window, one era per screen, two-column pages, threads with the map below, and a desktop check. Three questions."
destination: embed
aspect: 1920x1080
language: en
audience: the owner, who built the phone-first site with us and opened it on a computer
length: about four minutes along one path, 4 chapters
angle: how-to-process
narration: yes
style_preset: .reelplanning/theme/frame.md (the project theme)
music: none
---

## Intent

Review a plan for the site's computer layout. The site exists, so the video opens on the real screens at 1440 × 900
(screenshots taken on 2026-10-07): the phone column in the middle of the window, the era look stopping at its
edges, the thin map beside the thread cards, the toggle left showing. The proposed layouts are drawn as browser-window
mocks with the site's real words, real photos and the eras' looks; the checks are shown as planned runs.

## Customizations

- Medium: screen (real desktop screenshots, then browser-window mocks of the proposed layouts), with a diagram per step and one planned terminal run
- Layouts: one wide browser window with a short label column; two windows side by side (today and proposed); a diagram; three option cards under a heading; a terminal run
- Main transition: push-slide LEFT for the next scene in a chapter; cut for a chapter or a quick check; push-slide UP for a question
- Real things: scene 1 (the song page at 1440 × 900 today), scene 2 (the home page, a thread and the map today), scene 4 (the map today, where a click does nothing); the rest explain with pictures
- Every frame's root carries `data-band="bottom"` and keeps its lowest eighth empty; option cards carry
  `data-option`, headings `data-question`, outside any camera; a camera is at rest when a question ends.
- `music: none`. Kokoro `am_michael` at speed 1.25, one line at a time. No MP4: the review player plays
  the HTML project.

## Notes

Branch beats hold 6 s. No details pages: the plan's own blocks (Cases, Interface, Example) are in the guide.
