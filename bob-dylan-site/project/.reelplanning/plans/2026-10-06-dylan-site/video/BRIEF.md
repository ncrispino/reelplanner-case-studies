---
workflow: faceless-explainer
flow: automation
storyboard: no
message: "Version two: four answers kept (all 39 albums, real covers, threads plus a map, Spotify); question 1 asked again with the differences shown (recommend Vite); per-era themes and real photographs; new questions on the lyrics preview (recommend our own words) and the photo source (recommend Wikimedia Commons)."
destination: embed
aspect: 1920x1080
language: en
audience: the owner, who reviewed version one and asked for these changes
length: about five minutes along one path, 3 chapters (version two: what was decided is one scene)
angle: how-to-process
narration: yes
style_preset: .reelplanning/theme/frame.md (the project theme)
music: none
---

## Intent

Review the first plan for a new site. Nothing exists yet, so the video shows the outcome: the phone screens a
visitor ends up with (the era timeline, an album page, a song page with its connection cards, a thread, search),
drawn as real HTML mocks with real words, plus the two files that carry the idea (one connection in
`data/links.json`) and the two checks' runs (`tools/check-data.mjs`, `tools/check-phone.mjs`).

## Customizations

- Medium: screen (phone prototypes), with a little code and two terminal runs
- Layouts: a phone mock beside a short label column; two or three phones side by side; a code slab; a terminal run; three option cards under a heading
- Main transition: push-slide LEFT for the next scene in a chapter; cut for a chapter or a quick check; push-slide UP for a question
- Real things: scene 3 (the cover growing into the album page), scene 4 (three phones loading the same 1963 photograph), scene 9 (a song record in `songs.json`), scene 10 (the data check's run), scene 12 (four era panels in their themes, with real credited photographs), scene 17 (the song page), scene 23 (the map on a phone), scene 25 (the players after a tap); the rest explain with pictures
- Every frame's root carries `data-band="bottom"` and keeps its lowest eighth empty; option cards carry
  `data-option`, headings `data-question`, outside any camera; a camera is at rest when a question ends.
- `music: none`. Kokoro `am_michael` at speed 1.25, one line at a time. No MP4: the review player plays
  the HTML project.

## Notes

Branch beats hold 6 s. No details pages: the plan's own blocks (Cases, Interface, Example) are in the guide.
