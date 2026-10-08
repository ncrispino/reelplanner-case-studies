---
workflow: faceless-explainer
flow: automation
storyboard: no
message: "Version two of the walkthrough: what changed after your review, on the real screen, and the six choices you flagged, for you to accept or flag again."
destination: embed
aspect: 1920x1080
language: en
audience: the owner, who reviewed the first walkthrough
length: about two minutes (a revised walkthrough: what changed at full length, what was accepted in a line)
angle: how-to-process
narration: yes
style_preset: .reelplanning/theme/frame.md (the project theme)
music: none
---

## Intent

Show the change running: real phone screenshots of the built site (`assets/shots/*.png`, taken at 375 × 812 with
real covers blocked so the drawn covers show), the data check's real runs, and each pause on its own scene.

## Customizations

- Medium: screen (real screenshots of the built site in phone frames), with two terminal runs
- Layouts: one to four phone screenshots side by side; a terminal run; a stop with one card per choice; three option cards; the list
- Main transition: push-slide LEFT for the next scene; cut for a stop, a check or a question
- Real things: scene 2 (four era panels), scene 3 (two more era panels), scene 4 (a thread card and the map), scene 6 (the full track list), scene 7 (two song pages), scene 9 (the words card), scene 10 (the checks' result lines)
- Every frame's root carries `data-band="bottom"` and keeps its lowest eighth empty; option cards carry `data-option`, call cards `data-call`, headings `data-question`, outside any camera.
- `music: none`. Kokoro `am_michael` at speed 1.25. No MP4: the review player plays the HTML project.

## Notes

Screenshots are 750 × 1624 (a 375 px phone at 2×): show them at about 360 × 780 inside a thin phone frame.
