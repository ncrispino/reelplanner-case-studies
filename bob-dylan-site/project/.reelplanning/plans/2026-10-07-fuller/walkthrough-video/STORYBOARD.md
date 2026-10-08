---
format: 1920x1080
duration: 210s
message: "The fuller site, as built: the real pages at 1440 × 900, the choices made alone, one off-plan change, and two questions, for you to accept, flag or answer."
arc: What landed → the writing → the photos → the era bands → question 5 → the album page → the dropped row → question 4 → the rail → links out → the gaps → what ran → the list → anything you'd change
audience: the owner, who approved the plan and its three answers
mode: autonomous
music: none
plan_dir: .reelplanning/plans/2026-10-07-fuller
kind: walkthrough
terms: pixels = the dots a screen is made of (a laptop window is about 1440 wide); header = the bar across the top of every page on a computer; era = a named stretch of Dylan's life, such as Going Electric; full screen = an era's first view, filling the window, with its photo and title (the spread); spreads = each era's full-screen first view; home page = the site's front page, the timeline of all the eras; address = the part of a link after the site's name, such as /era/electric/; bands = the rows under an era's full screen: story and gallery, records and moments, songs, threads; gallery = an era's photographs in a grid; moment = a dated event in his life that is not a record, such as Newport 1965; clip = a short official video from YouTube; caption = the line under a photo saying what and who; credit = the photographer and licence of a photo; records and moments band = an era's albums with their years, and its moments on a dated line; songs to start with = an era's six most connected songs; thread = a path through songs that share something, in time order; connections = links between two songs, with a kind and a sentence of why; In threads = the band on a song page listing the threads it is in; Spotify player = Spotify's own player, set in the page; essay = an album's 150 words on why it matters; track list = the album's tracks in order; opens in place = the row grows to show more without leaving the page; rail = the column at the right of a wide window; quick links = the rail's links to the era, the album, a thread and the map; Read on = the line of links out at the end of a page; Wikipedia = the free encyclopedia; MusicBrainz = the open music database the site's albums come from; Wikimedia Commons = the free photo library the site's photographs come from; Big Pink = the house in West Saugerties where the basement tapes were made; data check = the script that fails when the dataset is wrong; desktop check = the script that opens every kind of page at computer sizes and fails when a page is missing its parts; phone check = the same at phone size; code check = a fresh agent reading the code against the plan; fresh agent = one that has not seen this conversation; gap = a page with fewer photos than the check wants; off-plan change = something built other than the plan said; deviation = an off-plan change; list = the choices that do not pause the video, one line each; recommended = the option I would pick, marked on its card; call = a choice made while building that the plan did not settle; tag = a label on a choice: visible, hard to undo, or close; Fallen Angels = his 2016 album of standards; search = a page of results for words you type, here on Spotify
terms_check: strict
details_check: strict
before: 2026-10-06-dylan-site | decisions D-001, D-003, D-005, D-006, D-007, D-033: how should the site be built?; explains "search"
before: 2026-10-07-desktop | decisions D-052, D-036, D-037, D-038: q4
recap: 2026-10-06-dylan-site | Bob Dylan, explored: a phone-first site of eras, albums…: decisions D-001, D-003, D-005, D-006, D-007, D-033: how should the site be built?; explains "search"
recap: 2026-10-07-desktop | The Dylan site on a computer: full-window eras, two-column…: decisions D-052, D-036, D-037, D-038: q4
recap: 2026-10-07-every-song | Every track a page: the 277 album tracks with no page of…: decisions D-034, D-035: which tracks get a page?; explains "the band"
recap: 2026-10-07-every-song--walkthrough | Every track a page: the 277 album tracks with no page of…: explains "deviation"
recap: 2026-10-07-desktop--walkthrough | The Dylan site on a computer: full-window eras, two-column…: explains "call"
---

## Video direction

- **Palette:** the project theme (`frame.md`): paper, ink, tiles, the dark slab for terminal runs, one coral accent per frame. Never a hex literal.
- **The real thing:** every scene about the site shows its real screenshots from `assets/shots/` (`d-*` at 1440 × 900, `w-*` at 1920 × 1080, `p-*` a phone at 750 × 1624, 2×; taken with the network on, so the real covers and Spotify players show) as `<img>` in a thin browser-window frame (radius 14, ink hairline, a 36 px title bar with three dots and the address in mono) or a phone frame, inside a `data-artifact` naming the address. Never redrawn; crop with overflow and object-position; never scaled above 1.
- **Stops:** one card per choice (`data-call="aN"`; no visible id), "chose" in bold, "instead of" under it, a short why; an off-plan change's card says "Off-plan change".
- **Questions:** the eyebrow, heading (`data-question`) and two cards (`data-option`) outside any camera; the recommended one carries the coral border and "RECOMMENDED".
- **Motion:** power3, reveals on their words; holds still. **Every root** carries `data-band="bottom"`; nothing below y 900.

## Frame 1 — A fuller site

- type: hook
- defines: era, gallery, rail
- chapter_start: What landed
- layout: wall
- duration: 18.368s
- transition_in: cut
- status: outline
- src: compositions/frames/01-built.html
- scene: an era's bands at 1440 large; an album with a track open beside it; a phone with the same bands
- voiceover: "The site has more on every page now…"
- blueprint: compose
- focal: the era's bands
- roles: browser frame with assets/shots/d-electric-bands.png (data-artifact="/era/electric/ at 1440 × 900") = foreground · browser frame with assets/shots/d-album-open.png (data-artifact="/album/blood-on-the-tracks/") = supporting · phone frame with assets/shots/p-electric-bands.png (data-artifact="/era/electric/ on a phone") = supporting · five short labels as named: "story and gallery", "a page for each moment", "the album's player", "a rail at the side", "Read on" = supporting

Scene 1 (0–9s): the era window; labels as named.
Scene 2 (9–20s): the album and the phone; the last labels. Hold.

## Frame 2 — Step 1 · Longer writing

- type: benefit_highlight
- defines: data check
- plan_step: 1
- layout: screen
- duration: 16.491s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/02-step1.html
- scene: the era story's three headings ringed in the Going Electric bands; three numbers: 3 × 80 words, 120, 150
- voiceover: "Step one. Every era now has three short sections…"
- blueprint: compose
- focal: the three sections
- roles: crop of assets/shots/d-electric-bands.png (data-artifact="/era/electric/") on the story column, its three headings ringed = foreground · three number tiles: "an era · 3 × about 80 words", "a moment · about 120", "an album · about 150" = supporting · one line "no lyric quoted · the data check holds each length" = supporting

Scene 1 (0–9s): the story; the headings ring as named.
Scene 2 (9–17s): the tiles, then the line. Hold.

## Frame 3 — Step 2 · More photographs

- type: cta
- defines: Wikimedia Commons, caption, call, tag
- plan_step: 2
- autonomy: a14, a16
- layout: cards
- duration: 18.453s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/03-stop2.html
- scene: Basement and Country's gallery at 1440 (two of its own and one moment's); the Big Pink moment page; two cards
- voiceover: "Step two. Thirty-eight more photographs…"
- blueprint: compose
- focal: the two cards
- roles: crop of assets/shots/d-basement-bands.png (data-artifact="/era/basement/") on the gallery = supporting · crop of assets/shots/d-moment-big-pink.png (data-artifact="/moment/basement-sessions/") on the photo and its caption = supporting · card a14 (data-call="a14") "A moment's photo is the moment's" / "instead of: in every era's gallery" / why "it tops up a gallery of fewer than three" · card a16 (data-call="a16") "The place, when not the event" / "instead of: event photos only" / why "Big Pink for the basement sessions, captioned" = foreground

Scene 1 (0–6s): the gallery; "sixty-four in all".
Scene 2 (6–12s): card a14.
Scene 3 (12–18s): the Big Pink page; card a16. Hold.

## Frame 4 — Step 3 · Era bands and moments

- type: cta
- defines: bands, records and moments band, songs to start with, thread
- plan_step: 3
- autonomy: a1, a3, a4, a19, a26
- layout: cards
- duration: 22.741s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/04-stop3.html
- scene: the records-and-moments band at 1440; a moment page with the era's photograph; five compact cards
- voiceover: "Step three. Under every era's full screen come its bands…"
- blueprint: compose
- focal: the five cards
- roles: crop of assets/shots/d-electric-rm.png (data-artifact="/era/electric/") = supporting · small crop of assets/shots/d-moment-motorcycle.png (data-artifact="/moment/motorcycle-accident/") on "The era's photograph" = supporting · five compact cards: a1 (data-call="a1") "Every era, the home page too" / "instead of: only the era in the address" · a3 (data-call="a3") "Records and moments from 1100 px" / "instead of: on a phone too" · a4 (data-call="a4") "No clip or photo: the era's, labelled" / "instead of: an empty space" · a19 (data-call="a19") "The gallery a grid, credits when opened" / "instead of: a row, a credit on each" · a26 (data-call="a26") "At most six threads" / "instead of: every thread" = foreground

Scene 1 (0–9s): the band.
Scene 2 (9–26s): the cards, one on each choice; the moment crop with a4. Hold.

## Frame 5 — Question 5 · Bands on the home page

- type: cta
- plan_step: 3
- decision: q5
- layout: cards
- duration: 14.507s
- transition_in: push-slide UP
- status: outline
- src: compositions/frames/05-q5.html
- question: Bands on the front of the site as well?
- option_a: Yes, as built: every era's bands on the home page too
- option_b: Only at an era's own address
- why_a: Scrolling down from any era opens its story; a long home page.
- why_b: The home page keeps each era's full screen alone; two versions to keep.
- option_a_more: On /, scrolling down from Duluth and Hibbing opens its story, gallery, songs and threads.
- option_b_more: On /, the eras stay their full screens; /era/hibbing/ has the bands.
- recommended: a
- question_more: The home page and /era/<id>/ are the same timeline, so as built both carry the bands.
- scene: two option cards under the heading; A carries the coral border
- voiceover: "That first choice is question five…"
- blueprint: compose
- focal: the two option cards
- roles: eyebrow "Question 5 · step 3" = supporting · heading (data-question) = foreground · two cards (data-option a/b) = foreground · RECOMMENDED badge on A = supporting

Scene 1 (0–7s): eyebrow, heading; card A.
Scene 2 (7–12s): card B.
Scene 3 (12–14s): A gets the coral border and RECOMMENDED. Hold.

## Frame 6 — If A: as built

- type: benefit_highlight
- plan_step: 3
- branch: q5=a
- layout: screen
- duration: 6s
- transition_in: crossfade
- status: outline
- src: compositions/frames/06-q5-a.html
- scene: the real home page scrolled to Duluth and Hibbing's story
- voiceover: "With A, the home page stays as built…"
- blueprint: compose
- focal: the bands
- roles: assets/shots/d-home-bands.png (data-artifact="/") = foreground · eyebrow "If A · step 3" = supporting

Scene 1 (0–6s): the page. Hold.

## Frame 7 — If B: spreads only

- type: benefit_highlight
- plan_step: 3
- branch: q5=b
- layout: screen
- duration: 6.523s
- transition_in: crossfade
- status: outline
- src: compositions/frames/07-q5-b.html
- scene: the home page's spread alone, and an arrow to /era/hibbing/ with the bands
- voiceover: "With B, the home page loses the bands, and the home page and the era pages become two versions…"
- blueprint: compose
- focal: the two pages
- roles: small crop of assets/shots/d-home.png (data-artifact="/") labelled "/ : spreads only" · small crop of assets/shots/d-home-bands.png labelled "/era/hibbing/ : the bands" = foreground · eyebrow "If B · step 3" = supporting

Scene 1 (0–6s): the two pages. Hold.

## Frame 8 — Step 4 · The album page

- type: cta
- defines: Spotify player, essay, track list, connections, In threads
- chapter_start: Albums and songs
- plan_step: 4
- autonomy: a5, a7, a24, a25
- layout: cards
- duration: 20.331s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/08-stop4.html
- scene: Blood on the Tracks at 1440 (cover and player left, essay right); Where its songs lead; four cards
- voiceover: "Step four. An album page has the cover and its Spotify player…"
- blueprint: compose
- focal: the cards
- roles: crop of assets/shots/d-album-open.png (data-artifact="/album/blood-on-the-tracks/") = supporting · crop of assets/shots/d-album-leads.png on "Where its songs lead" = supporting · cards: a5 (data-call="a5") "Cover and player left, essay right" / "instead of: the essay on the left" · a7 (data-call="a7") "Six connections off the album" / "instead of: all of them" · a25 (data-call="a25") "In threads lists the song's own thread" / "instead of: curated threads only" · a24 (data-call="a24") "Fallen Angels: no player" / "instead of: a guessed album" = foreground

Scene 1 (0–8s): the album; card a5.
Scene 2 (8–14s): the connections; card a7.
Scene 3 (14–24s): cards a25, a24. Hold.

## Frame 9 — Off-plan change · one row fewer

- type: cta
- defines: off-plan change, deviation
- plan_step: 4
- autonomy: d1
- layout: cards
- duration: 7.723s
- transition_in: cut
- status: outline
- src: compositions/frames/09-d1.html
- scene: the album page's previous and next albums with covers, and an Off-plan change card
- voiceover: "Off the plan: the Also in this era row is gone…"
- blueprint: compose
- focal: the card
- roles: crop of assets/shots/d-album-end.png (data-artifact="/album/blood-on-the-tracks/") on Before it / After it = supporting · card d1 (data-call="d1") "Off-plan change" / "No Also in this era row" / "instead of: both rows" / why "the same era's covers, just below" = foreground

Scene 1 (0–9s): the crop, then the card. Hold.

## Frame 10 — Question 4 · Fallen Angels

- type: cta
- defines: search
- plan_step: 4
- decision: q4
- layout: cards
- duration: 12.523s
- transition_in: push-slide UP
- status: outline
- src: compositions/frames/10-q4.html
- question: Fallen Angels has no Spotify album to embed: what goes in its place?
- option_a: Nothing: its songs' players only
- option_b: A line: Find Fallen Angels on Spotify ↗
- why_a: As built; the one album page with no player.
- why_b: A search page, not a player; it opens Spotify.
- option_a_more: /album/fallen-angels/ shows the cover, the essay and the track list; each track row has its own player.
- option_b_more: Under the cover: "Find Fallen Angels on Spotify ↗", opening Spotify's search for the album.
- recommended: b
- question_more: MusicBrainz lists no Spotify album whose title matches Fallen Angels, so a guessed one could play the wrong record.
- scene: two option cards under the heading; B carries the coral border
- voiceover: "Fallen Angels is question four…"
- blueprint: compose
- focal: the two option cards
- roles: eyebrow "Question 4 · step 4" = supporting · heading (data-question) = foreground · two cards (data-option a/b) = foreground · RECOMMENDED badge on B = supporting

Scene 1 (0–6s): eyebrow, heading; card A.
Scene 2 (6–11s): card B.
Scene 3 (11–13s): B gets the coral border and RECOMMENDED. Hold.

## Frame 11 — If A: as built

- type: benefit_highlight
- plan_step: 4
- branch: q4=a
- layout: screen
- duration: 6s
- transition_in: crossfade
- status: outline
- src: compositions/frames/11-q4-a.html
- scene: the real Fallen Angels page: cover, no player
- voiceover: "With A, the album page stays as built…"
- blueprint: compose
- focal: the page
- roles: assets/shots/d-fallen-angels.png (data-artifact="/album/fallen-angels/") = foreground · eyebrow "If A · step 4" = supporting

Scene 1 (0–6s): the page. Hold.

## Frame 12 — If B: one link

- type: benefit_highlight
- plan_step: 4
- branch: q4=b
- layout: screen
- duration: 6s
- transition_in: crossfade
- status: outline
- src: compositions/frames/12-q4-b.html
- scene: the Fallen Angels cover with a drawn line under it: Find Fallen Angels on Spotify ↗
- voiceover: "With B, one link sits where the player would be…"
- blueprint: compose
- focal: the link
- roles: crop of assets/shots/d-fallen-angels.png on the cover = supporting · a drawn link line "Find Fallen Angels on Spotify ↗" (a sketch, not built) = foreground · eyebrow "If B · step 4" = supporting

Scene 1 (0–6s): the cover; the line. Hold.

## Frame 13 — Step 5 · The rail

- type: cta
- defines: rail, quick links
- chapter_start: Wide windows and links out
- plan_step: 5
- autonomy: a8, a9
- layout: cards
- duration: 18.923s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/13-stop5.html
- scene: a song page at 1920 with the rail ringed; two cards
- voiceover: "Step five. From fourteen hundred and forty pixels…"
- blueprint: compose
- focal: the cards
- roles: browser frame with assets/shots/w-song.png (data-artifact="/song/like-a-rolling-stone/ at 1920 × 1080"), scaled crop, the rail ringed = supporting · card a8 (data-call="a8") "On album, song and moment pages" / "instead of: on every page" / why "only they have one era" · card a9 (data-call="a9") "The content lines up with the header" / "instead of: centred, the rail outside" / why "984 px at 1440, 1200 from about 1900" = foreground

Scene 1 (0–8s): the page; the rail rings.
Scene 2 (8–20s): cards a8, a9. Hold.

## Frame 14 — Step 6 · Read on

- type: cta
- defines: Read on, Wikipedia, MusicBrainz
- plan_step: 6
- autonomy: a11, a13, a23
- layout: cards
- duration: 13.824s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/14-stop6.html
- scene: the album page's end with Read on ringed; three cards
- voiceover: "Step six. Read on, with Wikipedia and MusicBrainz…"
- blueprint: compose
- focal: the cards
- roles: crop of assets/shots/d-album-end.png (data-artifact="/album/blood-on-the-tracks/") with "Read on: Wikipedia ↗ · MusicBrainz ↗" ringed = supporting · card a11 (data-call="a11") "Read on ends each page" / "instead of: near the title" · card a13 (data-call="a13") "Eras: an article picked by hand" / "instead of: no era links" / why "seven eras; four have none" · card a23 (data-call="a23") "Album songs only" / "instead of: every song" = foreground

Scene 1 (0–5s): the crop; Read on rings.
Scene 2 (5–16s): cards a11, a13, a23. Hold.

## Frame 15 — The gaps

- type: cta
- defines: gap, desktop check
- plan_step: 6
- autonomy: a17
- layout: cards
- duration: 11.691s
- transition_in: cut
- status: outline
- src: compositions/frames/15-gaps.html
- scene: Back to the Roots' gallery of two at 1440; a list of the seven moments; one card
- voiceover: "And eight gaps the photo search could not fill…"
- blueprint: compose
- focal: the card
- roles: crop of assets/shots/d-roots-bands.png (data-artifact="/era/roots/") on its two photos = supporting · seven short lines: "the Shelton review", "marrying Sara Lownds", "the motorcycle accident", "Pat Garrett", "the 1980 retrospective", "Chronicles", "The Philosophy of Modern Song" = supporting · card a17 (data-call="a17") "The check names 8 gaps, does not fail on them" / "instead of: failing until filled" / why "Commons has no free photo that fits; a new gap fails" = foreground

Scene 1 (0–6s): the gallery; the seven lines.
Scene 2 (6–13s): the card. Hold.

## Frame 16 — What ran

- type: benefit_highlight
- defines: phone check, code check, fresh agent
- layout: list
- duration: 14.613s
- transition_in: cut
- status: outline
- src: compositions/frames/16-ran.html
- scene: two columns: what ran and what is not done
- voiceover: "What ran…"
- blueprint: compose
- focal: the two columns
- roles: left "Ran": `npm test`: `✓ 11 eras, 39 albums, 538 songs, 165 connections, 12 threads, 64 photos`, `✓ 12 views at 375×812`, `✓ 24 views at 1440 × 900 and 1100 × 800`, "code check: 6 steps ✓, 27 decisions ✓, 6 findings answered" = foreground · right "Not done": "questions 4 and 5", "8 photo gaps", "every sentence checked" = foreground

Scene 1 (0–10s): left. Scene 2 (10–16s): right. Hold.

## Frame 17 — The rest of the choices

- type: cta
- autonomy_list: a18, a21, a15, a2, a6, a20, a10, a12, a22
- layout: list
- duration: 12s
- transition_in: cut
- status: outline
- src: compositions/frames/17-list.html
- scene: nine choices, one short line each, in two columns, each line a card carrying data-call
- voiceover: "The rest of the choices are on this list…"
- blueprint: compose
- focal: the nine lines
- roles: nine line cards: a18 "titles compared loosely; 7 real songs off the albums allowed · instead of: titles on the site only" · a21 "lengths held to 60–110, 80–150, 100–180 words · instead of: an exact length" · a15 "6 of the first photos marked a moment's · instead of: era photos only" · a2 "a phone's era row as tall as the era in view · instead of: the tallest era" · a6 "a track row's ▾ opens it, its title links · instead of: the whole row a toggle" · a20 "The same year: his own songs · instead of: every song that year" · a10 "the rail's eras a list of bars · instead of: a small ribbon" · a12 "the check reads the built pages · instead of: the data only" · a22 "a song's MusicBrainz link is its work · instead of: the recording" (each with its data-call) = foreground

Scene 1 (0–12s): the lines land in order. Hold.

## Frame 18 — Anything you'd change?

- type: cta
- open_question: Seeing it run, anything you'd change?
- layout: wall
- duration: 6s
- transition_in: cut
- status: outline
- src: compositions/frames/18-ending.html
- scene: three small windows (an era's bands, an album, a song with its rail) and the question
- voiceover: "That's the fuller site…"
- blueprint: compose
- focal: the question
- roles: three small windows = supporting · the question = foreground

Scene 1 (0–6s): windows and question. Hold still.
