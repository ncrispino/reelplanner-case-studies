---
format: 1920x1080
duration: 170s
message: "The site on a computer, as built: the real pages at 1440 × 900, the choices made alone, three off-plan changes, and one question, for you to accept, flag or answer."
arc: What landed → the map → the shell → the eras → two-column pages → a moment's songs → threads and the map → the tablet toggle → thread covers → question 4 → search and the check → what ran → the list → anything you'd change
audience: the owner, who approved the plan and its three answers
mode: autonomous
music: none
plan_dir: .reelplanning/plans/2026-10-07-desktop
kind: walkthrough
terms: pixels = the dots a screen is made of (a laptop window is about 1440 wide); header = the bar across the top of every page on a computer; tablet = a window from 768 to 1099 pixels wide; dot = one song on the map; tooltip = the small label a browser shows when you hold the mouse still over something; pinch = two fingers drawn apart or together to zoom; era = a named stretch of Dylan's life, such as Going Electric; timeline = the bar across the top of the home page, one stretch per era; words card = the box on a song page with its preview, its summary and its lyrics link; connections = links between two songs, with a kind and a sentence of why; moment = a dated event in his life that is not a record, such as Newport 1965; thread = a path through songs that share something, in time order, shown as cards; Cards and Map button = the switch on a thread that shows its cards or its map; threads list = the page listing all twelve threads; cover = an album's front picture; search = the view that finds eras, moments, albums and songs as you type; desktop check = the script that opens every kind of page at computer sizes and fails when one looks or works like a phone page; data check = the script that fails when the dataset is wrong; phone check = the same at phone size; bottom bar = the row of tabs at the bottom of a phone screen; hover label = the label that appears beside a dot when the mouse is over it; off-plan change = something built other than the plan said; list = the choices that do not pause the video, one line each; recommended = the option I would pick, marked on its card; deviation = an off-plan change; npm test = the one command that runs every check; call = a choice made while building that the plan did not settle; tag = a label on a choice: visible, hard to undo, or close
terms_check: strict
details_check: strict
before: 2026-10-06-dylan-site | decisions D-001, D-002, D-003, D-005, D-006, D-007, D-033: how should the site be built?; explains "search"
recap: 2026-10-06-dylan-site | Bob Dylan, explored: a phone-first site of eras, albums…: decisions D-001, D-002, D-003, D-005, D-006, D-007, D-033: how should the site be built?; explains "search"
---

## Video direction

- **Palette:** the project theme (`frame.md`): paper, ink, tiles, the dark slab for terminal runs, one coral accent per frame. Never a hex literal.
- **The real thing:** every scene about the site shows its real screenshots from `assets/shots/` (`d-*` at 1440 × 900, `t-*` at 900 × 1000, `p-*` a phone at 750 × 1624, 2×; covers and players blocked, so covers are the site's drawn ones and players empty frames) as `<img>` in a thin browser-window frame (radius 14, ink hairline, a 36 px title bar with three dots and the address in mono) or a phone frame, inside a `data-artifact` naming the address. Never redrawn; crop with overflow and object-position; never scaled above 1.
- **Stops:** one card per choice (`data-call="aN"`; no visible id), "chose" in bold, "instead of" under it, a short why; an off-plan change's card says "Off-plan change".
- **Question:** the eyebrow, heading (`data-question`) and two cards (`data-option`) outside any camera; A carries the coral border and "RECOMMENDED".
- **Motion:** power3, reveals on their words; holds still. **Every root** carries `data-band="bottom"`; nothing below y 900.

## Frame 1 — The site on a computer

- type: hook
- defines: era, search, thread
- chapter_start: What landed
- layout: wall
- duration: 14.379s
- transition_in: cut
- status: outline
- src: compositions/frames/01-built.html
- scene: the home page at 1440 large; a phone beside it labelled "phone: unchanged"
- voiceover: "On a computer, the site now fills the window…"
- blueprint: compose
- focal: the home page
- roles: browser frame with assets/shots/d-home.png (data-artifact="/ at 1440 × 900") = foreground · phone frame with assets/shots/p-home.png (data-artifact="/ on a phone") labelled "phone: 18 pages, pixel for pixel the same" = supporting · five short labels as named: "header and search", "each era full screen", "two columns", "threads along the years", "a map you can click" = supporting

Scene 1 (0–10s): the window; the labels as named.
Scene 2 (10–15s): the phone. Hold.

## Frame 2 — Step 1 · The map

- type: cta
- defines: call, tag
- plan_step: 1
- autonomy: a2, a4
- layout: cards
- duration: 13.845s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/02-stop1.html
- scene: the map at 1440 with its + and − buttons ringed; a phone map beside it with none; two cards
- voiceover: "Step one. A click or a tap on a dot opens its song now…"
- blueprint: compose
- focal: the two cards
- roles: crop of assets/shots/d-map.png (data-artifact="/map/masters-of-war/") with the + / − buttons ringed = supporting · small phone with assets/shots/p-map.png (data-artifact="/map/masters-of-war/ on a phone") = supporting · card a2 (data-call="a2") "+ and − from tablet width up" / "instead of: on phones too" / why "a phone pinches" · card a4 (data-call="a4") "The map's own hover label" / "instead of: the browser's tooltip as well" / why "two labels at once" = foreground

Scene 1 (0–6s): the map; the ring.
Scene 2 (6–15s): the two cards. Hold.

## Frame 3 — Step 2 · The header, and the tablet

- type: cta
- plan_step: 2
- autonomy: a5, a7
- layout: cards
- duration: 12.139s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/03-stop2.html
- scene: the song page's header ringed at 1440; the thread at 900 px beside it; two cards
- voiceover: "Step two. The header stays at the top as you scroll…"
- blueprint: compose
- focal: the two cards
- roles: crop of the top of assets/shots/d-song-lars.png (data-artifact="/song/like-a-rolling-stone/") with the header ringed = supporting · crop of assets/shots/t-thread-faith.png (data-artifact="/thread/faith/ at 900 px") = supporting · card a5 (data-call="a5") "The header stays at the top" / "instead of: scrolling away" / why "search always at hand" · card a7 (data-call="a7") "A tablet keeps today's column, wider margins" / "instead of: widening the column" / why "the plan: today's layout with more room" = foreground

Scene 1 (0–7s): the header crop; the tablet crop.
Scene 2 (7–14s): the cards. Hold.

## Frame 4 — Step 3 · Each era a screen

- type: cta
- plan_step: 3
- autonomy: a9, a11, a12
- layout: cards
- duration: 19.179s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/04-stop3.html
- scene: the Going Electric era at 1440 (Kramer photo left, story right, the timeline across the top); three cards
- voiceover: "Step three. Each era fills the screen, and scrolling snaps to the next…"
- blueprint: compose
- focal: the three cards
- roles: assets/shots/d-era-electric.png (data-artifact="/era/electric/") scaled down in its frame = supporting · card a9 (data-call="a9") "One era markup at every width" / "instead of: a separate desktop page" / why "the phone panel stays as it is" · card a11 (data-call="a11") "The header's colour fades; the old text dims" / "instead of: a full-screen fade" / why "a fade on a scroll reads as a flash" · card a12 (data-call="a12") "Short eras' names cut short on the timeline" / "instead of: every name in full" / why "Back to the Roots is 30 pixels wide" = foreground

Scene 1 (0–6s): the era.
Scene 2 (6–20s): the three cards. Hold.

## Frame 5 — Step 4 · Two-column pages

- type: cta
- defines: connection
- plan_step: 4
- autonomy: a13, a14
- layout: cards
- duration: 17.515s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/05-stop4.html
- scene: the Like a Rolling Stone page at 1440; two cards
- voiceover: "Step four. A song page has the cover, note and players on the left…"
- blueprint: compose
- focal: the two cards
- roles: assets/shots/d-song-lars.png (data-artifact="/song/like-a-rolling-stone/") = supporting · card a13 (data-call="a13") "The words card drawn twice, once per layout" / "instead of: moving it with script" / why "the phone page stays exactly as it was" · card a14 (data-call="a14") "The cover small, above the title" / "instead of: beside it" / why "a long title never breaks inside a word" = foreground

Scene 1 (0–8s): the page; a light outline on each column as named.
Scene 2 (8–18s): the cards. Hold.

## Frame 6 — Off-plan change · a moment's songs

- type: cta
- defines: deviation
- defines: moment
- plan_step: 4
- autonomy: d1
- layout: screen
- duration: 8.341s
- transition_in: cut
- status: outline
- src: compositions/frames/06-d1.html
- scene: the Newport 1965 moment at 1440, "Records from 1965" ringed; the off-plan card d1
- voiceover: "Off the plan: a moment lists the songs its story names…"
- blueprint: compose
- focal: the card
- roles: assets/shots/d-moment-newport.png (data-artifact="/moment/newport-1965/") = supporting · card d1 (data-call="d1") "Off-plan change · a moment's songs from its story and its year" / "instead of: the songs it is tied to" / why "the data has no songs listed per moment" = foreground

Scene 1 (0–10s): the page; the ring; the card. Hold.

## Frame 7 — Step 5 · Threads and the map

- type: cta
- plan_step: 5
- autonomy: a17, a18, a20
- layout: cards
- duration: 14.656s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/07-stop5.html
- scene: the Faith thread at 1440 (cards along the years); the map page with a dot selected; three cards
- voiceover: "Step five. A thread's cards are spaced evenly…"
- blueprint: compose
- focal: the three cards
- roles: crop of assets/shots/d-thread-faith.png (data-artifact="/thread/faith/") = supporting · crop of assets/shots/d-map-selected.png (data-artifact="/map/masters-of-war/") around the panel = supporting · card a17 (data-call="a17") "Cards evenly spaced, the years written on the line" / "instead of: spaced by the years between them" / why "a 40-year gap pushes the next card off the row" · card a18 (data-call="a18") "A thread's map opens on its first song's neighbours" / "instead of: fitted to all its songs" / why "fitted, the labels were 5 pixels tall" · card a20 (data-call="a20") "The map page opens with its song in the panel" / "instead of: an empty panel" / why "the page is about that song" = foreground

Scene 1 (0–7s): the thread; the map.
Scene 2 (7–19s): the three cards. Hold.

## Frame 8 — Off-plan change · the tablet's toggle

- type: cta
- plan_step: 5
- autonomy: d2
- layout: screen
- duration: 8.853s
- transition_in: cut
- status: outline
- src: compositions/frames/08-d2.html
- scene: the Faith thread at 900 px; the off-plan card d2
- voiceover: "Off the plan: the tablet also hides the map's own Cards and Map button…"
- blueprint: compose
- focal: the card
- roles: assets/shots/t-thread-faith.png (data-artifact="/thread/faith/ at 900 px") = supporting · card d2 (data-call="d2") "Off-plan change · the tablet hides the map's toggle too" / "instead of: the tablet exactly as before" / why "the same leftover button this plan removes" = foreground

Scene 1 (0–9s): the page; the card. Hold.

## Frame 9 — Off-plan change · the threads list's covers

- type: cta
- plan_step: 5
- autonomy: d3
- layout: screen
- duration: 8.725s
- transition_in: cut
- status: outline
- src: compositions/frames/09-d3.html
- scene: the threads list at 1440, a grid three across with covers; the off-plan card d3
- voiceover: "And the threads list shows each thread's covers…"
- blueprint: compose
- focal: the card
- roles: assets/shots/d-threads.png (data-artifact="/threads/") = supporting · card d3 (data-call="d3") "Off-plan change · covers from all of a thread's songs" / "instead of: the covers of its first songs" / why "an old tune shows the cover of the song it leads to" = foreground

Scene 1 (0–9s): the page; the card. Hold.

## Frame 10 — Question 4 · A way to the thread cards

- type: cta
- plan_step: 5
- decision: q4
- layout: cards
- duration: 14.656s
- transition_in: push-slide UP
- status: outline
- src: compositions/frames/10-q4.html
- question: On a computer, should the full map offer a way to the thread cards?
- option_a: Add "A thread from this song ›" to the map page
- option_b: No link: open the song, then start a thread
- why_a: One link beside the title; one more control on a full map.
- why_b: As built; two clicks, through the song page.
- option_a_more: On /map/masters-of-war/, "A thread from Masters of War ›" sits beside the title and opens /thread/from/masters-of-war/.
- option_b_more: Open the song from the panel, then "Start a thread from here" on its page.
- recommended: a
- question_more: The Cards | Map button is gone on a computer, so the full map has no way back to the cards that a phone's "Cards" gives.
- scene: two option cards under the heading; A carries the coral border
- voiceover: "One question came up while building…"
- blueprint: compose
- focal: the two option cards
- roles: eyebrow "Question 4 · step 5" = supporting · heading (data-question) = foreground · two cards (data-option a/b), each with a tiny picture (the map title with a link / a song page with its button) = foreground · RECOMMENDED badge on A = supporting

Scene 1 (0–6s): eyebrow, heading; card A.
Scene 2 (6–12s): card B.
Scene 3 (12–15s): A gets the coral border and RECOMMENDED. Hold.

## Frame 11 — If A: a link on the map page

- type: benefit_highlight
- branch: q4=a
- plan_step: 5
- layout: screen
- duration: 6s
- transition_in: crossfade
- status: outline
- src: compositions/frames/11-q4-a.html
- scene: the real map page at 1440 (built after the review answered A), "A thread from Masters of War ›" under the title ringed
- voiceover: "With A, the map page's header gets one link…"
- blueprint: compose
- focal: the link
- roles: assets/shots/d-map-link.png (data-artifact="/map/masters-of-war/") with the link ringed = foreground · eyebrow "If A · step 5" = supporting

Scene 1 (0–6s): the link appears. Hold.

## Frame 12 — If B: as built

- type: benefit_highlight
- branch: q4=b
- plan_step: 5
- layout: screen
- duration: 6s
- transition_in: crossfade
- status: outline
- src: compositions/frames/12-q4-b.html
- scene: two steps: the panel's "Open the song ›", then the song page's "Start a thread from here"
- voiceover: "With B, it stays as built…"
- blueprint: compose
- focal: the two steps
- roles: two small step boxes with an arrow = foreground · eyebrow "If B · step 5" = supporting

Scene 1 (0–6s): the two steps. Hold.

## Frame 13 — Step 6 · Search, and the desktop check

- type: cta
- defines: desktop check
- plan_step: 6
- autonomy: a23
- layout: cards
- duration: 9.579s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/13-stop6.html
- scene: search for 1966 at 1440 in three columns; card a23
- voiceover: "Step six. Search shows three columns…"
- blueprint: compose
- focal: the card
- roles: assets/shots/d-search-1966.png (data-artifact="/search/?q=1966") = supporting · card a23 (data-call="a23") "The desktop check also fails on a phone bar, no header, or an arrow that moves nothing" / "instead of: only the plan's list" / why "the same rule: a control that does nothing" = foreground

Scene 1 (0–5s): the search page.
Scene 2 (5–12s): the card. Hold.

## Frame 14 — What ran

- type: benefit_highlight
- defines: data check, phone check
- layout: list
- duration: 11.627s
- transition_in: cut
- status: outline
- src: compositions/frames/14-ran.html
- scene: two columns: what ran and what is not done
- voiceover: "What ran…"
- blueprint: compose
- focal: the two columns
- roles: left "Ran": `npm test`: `✓ 11 eras, 39 albums, 538 songs, 165 connections`, `1415 page(s) built`, `✓ 12 views at 375×812; a tap on a map dot opens its song`, `✓ 24 views at 1440 × 900 and 1100 × 800` = foreground · right "Not done": "question 4", "the hover label checked by hand" = foreground

Scene 1 (0–7s): left. Scene 2 (7–11s): right. Hold.

## Frame 15 — The rest of the choices

- type: cta
- autonomy_list: a1, a3, a6, a8, a10, a15, a16, a25, a19, a21, a22, a24
- layout: list
- duration: 12s
- transition_in: cut
- status: outline
- src: compositions/frames/15-list.html
- scene: twelve choices, one short line each, in two columns, each line a card carrying data-call
- voiceover: "The rest of the choices are on this list…"
- blueprint: compose
- focal: the twelve lines
- roles: twelve line cards: a1 "each dot's hit ring 28 map units across · instead of: 14 px" · a3 "the phone check taps and presses a dot · instead of: a tap only" · a6 "header search a plain form · instead of: a scripted field" · a8 "map pages light Map in the header, Threads in the phone bar · instead of: a Map tab on phones" · a10 "scrolling replaces the address, no history entry per era · instead of: one per era" · a15 "the song page's small map the column's width · instead of: 360 × 300" · a16 "the album page's left column not sticky · instead of: sticky" · a25 "the panel's data one file fetched on first click · instead of: in every map page" · a19 "the era filter one era at a time, from 1100 px · instead of: several, at every width" · a21 "search columns by CSS · instead of: re-rendered results" · a22 "the check measures what shows in the page · instead of: the page's box" · a24 "npm test runs all four checks · instead of: a script per size" (each with its data-call) = foreground

Scene 1 (0–12s): the lines land in order. Hold.

## Frame 16 — Anything you'd change?

- type: cta
- open_question: Seeing it run, anything you'd change?
- layout: wall
- duration: 6s
- transition_in: cut
- status: outline
- src: compositions/frames/16-ending.html
- scene: three small windows (the home page, a song page, the map) and the question
- voiceover: "That's the site on a computer…"
- blueprint: compose
- focal: the question
- roles: three small windows = supporting · the question = foreground

Scene 1 (0–6s): windows and question. Hold still.
