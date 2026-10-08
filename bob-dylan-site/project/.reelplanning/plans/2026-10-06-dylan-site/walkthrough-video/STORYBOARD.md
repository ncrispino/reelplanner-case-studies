---
format: 1920x1080
duration: 150s
message: "Version two of the walkthrough: what changed after your review, running on the real screen, and the six choices you flagged, for you to accept or flag again."
arc: What changed → the eras → threads and map → connections → track lists → players and clips → excerpts → what ran → anything you'd change
audience: the owner, who reviewed the first walkthrough and asked for these changes
mode: autonomous
music: none
plan_dir: .reelplanning/plans/2026-10-06-dylan-site
kind: walkthrough
before: 2026-10-06-dylan-site | the plan you approved: its six steps and your answers
terms: 404 = the page a site shows when an address does not exist; base path = the folder a site lives under on its host, such as /dylan-site/; system fonts = the typefaces already on the phone, so nothing is downloaded; JSON = a plain-text format for lists and fields of data; MusicBrainz = a free online database of recordings and albums; Cover Art Archive = a free online library of album cover images; Wikimedia Commons = a free online library of photographs others may reuse under their licence; licence = the terms under which a photo may be reused; Spotify = a music streaming service; YouTube = Google's video site; Spotify id = the code that names one track on Spotify; official channel = the YouTube channel run for Bob Dylan himself; unofficial upload = a clip posted by someone else, which YouTube may take down; d3-force = a code library that spreads dots out so connected ones sit close; edit = one letter changed, added, removed or swapped; view = one screen of the site, such as an album page or search; content filter = a safety check on the AI's own output that stopped it quoting lyrics; quick check = a question the video asks you, to see whether the build does what you expect; phone check = the script that opens every kind of page at phone size and fails on a sideways scroll, a small button or an error; data check = the script that fails when the dataset is wrong; code check = a second AI that read the code against the plan, knowing nothing of how it was written; npm = the tool that installs and runs a project's packages and scripts; npm run check:clips = the clip check: it asks YouTube whether each clip still plays; GitHub Pages = a free service that hosts a site made of plain files; flag = to mark a choice you'd have made the other way, so it gets changed; walkthrough = this file and video: what landed, and the choices made while building; exit 0 = how a script says it passed, and exit 1 that it failed; song id = the short name a song is found by, as in its address: like-a-rolling-stone; preview = one sentence in our own words on what a song says; note = one sentence of fact about a song; the map = the view where every song is a dot and every connection a line; Cytoscape = another code library for drawing networks of dots; precomputed = worked out once when the site is built, not in the browser; Manchester = the 1966 concert where a fan shouted "Judas"; youtube-nocookie.com = YouTube's player that sets no tracking cookies until you play; try-search = a script that types searches into the built site and prints what it finds; tab bar = the row of Eras, Threads, Search and About; Dont Look Back = the 1967 documentary of his 1965 English tour, which opens with him flipping cue cards; op-art = 1960s art made of bold black-and-white patterns that seem to move; seventy-eight label = the paper label on an old 78 rpm record; night chart = a dark map like a star chart; the first writers = the AI helpers that wrote the dataset one era each; loaded = there when the page opens, not after a tap; album songs = Dylan's own songs on his albums, 181 of them; the other songs in the dataset are other artists' versions and the tunes he borrowed; listed = a choice shown on a list, not judged one by one; 802 pages = one per era, album, song and moment, plus a map and a thread page for each song; 375×812 = a phone screen's width and height in pixels; checks/ = the folder where the phone check saves its screenshots; node = the program that runs a project's JavaScript scripts; 12 views = one page of each kind, which the phone check opens at phone size; CC BY 2.0 = a Creative Commons licence: reuse with credit; CC BY-SA 2.0 = the same, and changes are shared under it too; public domain = free of copyright, reusable by anyone
terms_check: strict
details_check: strict
---

## Video direction

- **Palette:** the project theme (`frame.md`, tokens): paper, ink, tiles, the dark slab for terminal runs, one coral accent per frame. Never a hex literal.
- **The real thing:** every scene about the site shows its real screenshots from `assets/shots/` (750 × 1624, a phone at 2×) as `<img>` inside a thin phone frame (radius 36, ink hairline), about 360 × 780 on screen, top at y 90, inside a `data-artifact` naming the page's address. A screenshot is never redrawn or re-typeset.
- **Stops:** a stop scene shows one card per choice (no visible id; its why line in the middle), each with `data-call="aN"`, its short "chose" in bold and "instead of" under it, clear of the next card with room under it.
- **Motion:** power3, reveals paced to the voice; a screenshot enters by a short push, never zooms past 1. Holds are still.
- **Every root** carries `data-band="bottom"`; nothing below y 900.

## Frame 1 — What changed after your review

- type: hook
- chapter_start: What changed
- layout: list
- duration: 15.019s
- transition_in: cut
- status: outline
- src: compositions/frames/01-built.html
- scene: a list of the six changes, each with a small real screenshot crop; a quiet line "accepted: 7 choices · listed: 6"
- voiceover: "This is the walkthrough again, after your review…"
- blueprint: compose
- focal: the list of changes
- roles: six change rows ("A look for each era", "Threads and the map, redrawn", "135 connections", "Full track lists", "A player on every song, loaded", "179 clips") = foreground · the accepted line = supporting

Scene 1 (0–12s): the six rows land one by one, each with a thumbnail from assets/shots (era-electric, thread-faith, map, album-bob-songs, song-lars, song-shs).
Scene 2 (12–16s): the accepted line. Hold.

## Frame 2 — Each era its own look

- type: feature_showcase
- plan_step: 3
- layout: wall
- duration: 12.565s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/08-step3.html
- scene: four real era panels: Greenwich Village, Going Electric, Gospel, The '80s
- voiceover: "Each era now has its own look…"
- blueprint: compose
- focal: the four panels
- roles: four phones assets/shots/era-village.png, era-electric.png, era-gospel.png, era-eighties.png (data-artifact="/era/<id>/") = foreground · under each, its gesture in a few words: "typed flyer, rubber stamp" · "cue card, op-art" · "revival handbill" · "neon tubes" = supporting

Scene 1 (0–18s): the four phones push in one per era named. Hold.

## Frame 3 — The choice behind it

- type: cta
- plan_step: 3
- autonomy: a5
- layout: screen
- duration: 13.312s
- transition_in: cut
- status: outline
- src: compositions/frames/09-stop3.html
- scene: two more era panels (Back to the Roots, The Standards) and the choice card a5, changed after review
- voiceover: "The choice changed…"
- blueprint: compose
- focal: the card
- roles: phones assets/shots/era-roots.png and era-standards.png = supporting · card a5 (data-call="a5") "A typeface and a look for each era" / "instead of: fonts already on the phone" / why "eleven free fonts, each from its era's records" = foreground

Scene 1 (0–7s): the two phones.
Scene 2 (7–14s): the card. Hold.

## Frame 4 — Threads and the map, redrawn

- type: feature_showcase
- plan_step: 5
- layout: wall
- duration: 13.205s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/12-step5.html
- scene: a Faith thread card in its era's look, and the map as a night chart with era-coloured dots
- voiceover: "Threads and the map are redrawn…"
- blueprint: compose
- focal: the two phones
- roles: phone assets/shots/thread-faith.png (data-artifact="/thread/faith/") = foreground · phone assets/shots/map.png (data-artifact="/map/masters-of-war/") = foreground

Scene 1 (0–8s): the thread phone.
Scene 2 (8–16s): the map phone. Hold.

## Frame 5 — 135 connections

- type: cta
- plan_step: 2
- autonomy: a6
- layout: cards
- duration: 17.216s
- transition_in: cut
- status: outline
- src: compositions/frames/05-stop2.html
- scene: the choice card a6 with the count 49 → 135 and the new connections by kind
- voiceover: "You asked why there were so few connections…"
- blueprint: compose
- focal: the card
- roles: card a6 (data-call="a6") "135 connections" / "instead of: 49" / why "the first writers could only link inside their own era" = foreground · a bar of kinds: 46 same theme · 30 covers · 9 borrowed tunes · 1 rewrite = supporting

Scene 1 (0–8s): the card and the count.
Scene 2 (8–16s): the kinds bar. Hold.

## Frame 6 — Full track lists

- type: cta
- plan_step: 4
- autonomy: a17
- layout: screen
- duration: 8.789s
- transition_in: cut
- status: outline
- src: compositions/frames/11-stop4.html
- scene: the Blonde on Blonde track list screenshot, and the choice card a17, changed after review
- voiceover: "And you asked whether songs were missing…"
- blueprint: compose
- focal: the screenshot and card
- roles: phone assets/shots/album-bob-songs.png (data-artifact="/album/blonde-on-blonde/") = foreground · card a17 (data-call="a17") "Every track, numbered" / "instead of: only the selected songs" / why "its story › marks the 7 with a page, 5 on screen" = foreground

Scene 1 (0–7s): the phone.
Scene 2 (7–14s): the card. Hold.

## Frame 7 — Players, loaded

- type: feature_showcase
- plan_step: 6
- layout: before-after
- duration: 8.789s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/14-step6.html
- scene: the Like a Rolling Stone song page with its "Listen and watch" frame and the era-styled chips and words card
- voiceover: "On a song page, the players are loaded…"
- blueprint: compose
- focal: the song page
- roles: phone assets/shots/song-lars.png (data-artifact="/song/like-a-rolling-stone/") = foreground · phone assets/shots/song-shs.png (data-artifact="/song/subterranean-homesick-blues/") = foreground · label "players load from Spotify and YouTube on the site; blank here" = supporting

Scene 1 (0–14s): both phones. Hold.

## Frame 8 — Every song has a player, and the clips

- type: cta
- plan_step: 6
- autonomy: a8, a9
- layout: cards
- duration: 15.744s
- transition_in: cut
- status: outline
- src: compositions/frames/15-stop6.html
- scene: two choice cards: a8 181 of 181; a9 166 song clips and 13 moments, with `npm run check:clips`
- voiceover: "No song is left without a player…"
- blueprint: compose
- focal: the two cards
- roles: card a8 (data-call="a8") "181 of 181 songs on Spotify" / "instead of: 177" / why "four titles Spotify spells differently now match" = foreground · card a9 (data-call="a9") "179 clips, official and not" / "instead of: 2" / why "npm run check:clips finds any taken down" = foreground

Scene 1 (0–8s): card a8.
Scene 2 (8–16s): card a9. Hold.

## Frame 9 — Lyric excerpts, kept as they were

- type: cta
- plan_step: 2
- autonomy: d1
- layout: screen
- duration: 15.083s
- transition_in: cut
- status: outline
- src: compositions/frames/06-d1.html
- scene: the song page's words card, and the off-plan card d1 with the answer to the review's question
- voiceover: "You asked whether we really can't quote a line…"
- blueprint: compose
- focal: the card
- roles: phone assets/shots/song-lars-lyrics.png (data-artifact="/song/like-a-rolling-stone/") = supporting · card d1 (data-call="d1") "No excerpts written by the AI" / "instead of: two credited lines" / why "a filter stops the AI writing lyrics; lines added by hand show" = foreground

Scene 1 (0–8s): the phone.
Scene 2 (8–18s): the card and the slab line `"excerpt": null`. Hold.

## Frame 10 — What ran

- type: benefit_highlight
- layout: list
- duration: 6.144s
- transition_in: cut
- status: outline
- src: compositions/frames/20-ran.html
- scene: what ran and what is not done
- voiceover: "What ran…"
- blueprint: compose
- focal: the two columns
- roles: left "Ran": `node tools/check-data.mjs ✓ 255 songs, 135 connections`, `npm run build ✓ 802 pages`, `node tools/check-phone.mjs ✓ 12 views`, `npm run check:clips ✓ 179 clips` = foreground · right "Not done": "lyric excerpts", "hosting" = foreground

Scene 1 (0–7s): left. Scene 2 (7–14s): right. Hold.

## Frame 11 — Anything you'd change?

- type: cta
- open_question: Seeing it run, anything you'd change?
- layout: wall
- duration: 6s
- transition_in: cut
- status: outline
- src: compositions/frames/22-ending.html
- scene: three phones (era-gospel, thread-faith, song-lars) and the question
- voiceover: "That's what changed…"
- blueprint: compose
- focal: the question
- roles: three small phones = supporting · the question = foreground

Scene 1 (0–8s): phones and question. Hold still.
