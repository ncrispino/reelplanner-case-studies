---
format: 1920x1080
duration: 270s
message: "A plan to make the Dylan site right on a computer: every map dot opens its song; from 1100 px a header, the era's look across the window, one era per screen, two-column pages, threads with the map below, and a desktop check. Three questions."
arc: Today on a computer → the map fixed → a layout for wide screens (with questions 1 and 2) → threads, the map and checks (with question 3) → ending
audience: the owner, who built the phone-first site with us and opened it on a computer
mode: autonomous
music: none
plan_dir: .reelplanning/plans/2026-10-07-desktop
kind: plan
terms: pixels = the dots a screen is made of, as in a laptop window 1440 pixels wide; 720 pixels = the width of today's column, about half a laptop window; the column = the strip in the middle of the window where today's pages sit; the era's look = an era's colours, texture, typeface and frames, such as Going Electric's black and white op-art; op-art = 1960s art made of bold black-and-white patterns that seem to move; Cards and Map button = the switch on a thread that shows its cards or its map; the map = the view where every song is a dot and every connection a line; dot = one song on the map; pointer = the arrow you move with a mouse or trackpad, or your finger on a phone; grabs the pointer = keeps getting the mouse's moves even when it leaves the map, so a drag keeps working; mouse wheel = the wheel or two-finger scroll that moves a page up and down; Control = the Ctrl key (⌘ on a Mac); zoom = make the map bigger or smaller; phone check = the script that opens every kind of page at phone size and fails on a sideways scroll, a small button or an error; desktop check = a new script that does the same at computer sizes and fails when a page looks or works like a phone page; app shell = the layout every page shares: its header or bottom bar and the era's look; header = the bar across the top of every page on a computer; tab = one of Eras, Threads, Map and About in the header; search field = the box you type into to search; slash = the / key; tablet = a window from 768 to 1099 pixels wide; desktop = a window 1100 pixels wide or more; layout = how a page is arranged on the screen; two columns = the page split into a main side and a narrower side; crossfade = one look fading into the next; address = the page's link in the browser's bar, like /era/electric/; timeline = the bar across the top of the home page, 1941 to today, one stretch per era; era = a named stretch of Dylan's life with its years, such as Going Electric, 1965–1966; thread = a path through songs that share something, in time order, shown as cards; connection = a link between two songs, with a kind and a sentence of why; the words = the card on a song page with its preview, its summary and the link to its lyrics; legend = the list of eras and their colours under the map; panel = a box beside the map describing the song you clicked; select = mark a dot as the one you are looking at, without leaving the map; double click = two clicks in quick succession; view = one kind of page, such as an album page or search; sideways scroll = a page wider than the window, so it scrolls left and right; npm test = the one command that runs every check; quick check = a question the video asks you, to see whether the plan does what you expect; Back to the Roots = Dylan's early-'90s era of old folk and blues songs; Going Electric = his 1965–1966 era, when he played with a rock band; Hibbing = the Minnesota mining town where he grew up; Rough and Rowdy = his latest era, named for his 2020 album; I Believe in You = a 1979 song from his gospel years; Faith = one of the site's threads, from early hymn-shaped songs to the gospel years; moment = a dated event in his life that is not a record, such as Newport 1965; recommended = the option I would pick, marked on its card; data check = the script that fails when the dataset is wrong; era timeline = the home page: the eras one after another; rock band = a group with electric guitars, bass and drums; traditional = a folk song nobody now knows the writer of, passed down by singers; planned = a check this plan adds: it does not exist yet; the owner = the person this site is built for, who asked for this plan; note = one sentence of fact about a song, under its title; players = the Spotify and YouTube boxes that play a song on its page; 375×812 = a phone screen's width and height in pixels; 12 views = one page of each kind, which a check opens; checks/desktop/ = the folder where the desktop check saves its screenshots; N = a compass mark drawn on the map for its star-chart look, not a button; landmark = one of the sixteen albums the site writes about in most detail; YouTube = Google's video site; Spotify = a music streaming service; themes = the subjects a song shares with others, shown as chips such as LOSS and FREEDOM; 183 songs = the songs with at least one connection, the ones the map draws; public domain = free of copyright, reusable by anyone; PD = public domain; CC BY 2.0 = a Creative Commons licence: reuse with credit; clip = a video of a song or a moment, played from YouTube; version = another artist's recording of a song, which has its own dot and page
terms_check: strict
details_check: strict
before: 2026-10-06-dylan-site | decisions D-001, D-002, D-003, D-005, D-006, D-007, D-033: how should the site be built?; explains "search"
recap: 2026-10-06-dylan-site | Bob Dylan, explored: a phone-first site of eras, albums…: decisions D-001, D-002, D-003, D-005, D-006, D-007, D-033: how should the site be built?; explains "search"
---

## Video direction

- **Palette:** the project theme (`frame.md`, tokens): paper ground, ink text, tiles for cards, the dark slab for
  terminal runs and diagrams' nodes when dark, one coral accent per frame on the one thing that matters. Never a hex
  literal: every colour is a `--rp-*` token, `rgba(var(--rp-*-rgb), a)`, or a `color-mix` of tokens.
- **The real thing:** scenes 1, 2 and 4 show real screenshots of today's site at 1440 × 900 from `assets/shots/`
  (`desk-*.png`, 1440 × 900) as `<img>` inside a thin browser-window frame (radius 14, ink hairline, a 36 px title
  bar with three small dots and the address in mono), inside a `data-artifact` naming the address. A screenshot is
  never redrawn or re-typeset.
- **Browser-window mocks** for the proposed layouts: the same frame, about 1280 × 720 on screen, drawn in HTML with
  the site's real words. The era's look inside a mock is built from token mixes only, never hex: Going Electric =
  near-black ground (`--rp-slab`), concentric op-art rings drawn as repeating-radial-gradient of `--rp-paper` at low
  alpha on slab, condensed caps type (Inter 800, tight tracking), coral accent; Hibbing = rust
  (`color-mix(in oklab, var(--rp-coral) 60%, var(--rp-ink))`) and slate; Gospel = deep red
  (`color-mix(in oklab, var(--rp-syn-del) 70%, var(--rp-slab))`) with gold (`--rp-syn-num`). Real photos from
  `assets/photos/` with their credit line in small mono under them, as on the site. Album covers in mocks are drawn
  (the title on a coloured square, as the site's drawn fallback), never the real cover art.
- **Motion:** power3, reveals paced to the voice; a mock enters by a short push; a screenshot never zooms past 1.
  Holds are still.
- **Questions and checks:** the eyebrow, heading (`data-question`) and three cards (`data-option`) sit outside any
  camera; the recommended card carries a coral border and "RECOMMENDED".
- **Every root** carries `data-band="bottom"`; nothing below y 900.

## Frame 1 — On a computer, a phone in the middle

- type: hook
- chapter_start: On a computer today
- layout: screen
- duration: 11.52s
- transition_in: cut
- status: outline
- src: compositions/frames/01-today.html
- scene: the real song page at 1440 × 900 in a browser frame; two coral brackets measure the 720 px column; the empty sides shaded
- voiceover: "You opened the site on a computer, and it is still a phone…"
- blueprint: compose
- focal: the screenshot with the column measured
- roles: browser frame with assets/shots/desk-song.png (data-artifact="/song/like-a-rolling-stone/ at 1440 × 900") = foreground · a dimension line "720 px" across the column, with the window "1440 px" above = supporting · quote card, the owner's words: "a lot was meant for a phone. we need to fill in more and fix it so it looks great on a computer too" = supporting

Scene 1 (0–6s): the window pushes in; the 1440 px line, then the 720 px line and the shaded sides.
Scene 2 (6–13s): the quote card lands at the left. Hold.

## Frame 2 — Three things that are wrong today

- type: problem
- defines: era, thread
- layout: wall
- duration: 12.245s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/02-wrong.html
- scene: three real screenshots side by side, each with one coral mark and a short label
- voiceover: "On the home page, the era's look stops at the column's edges…"
- blueprint: compose
- focal: the three screenshots
- roles: assets/shots/desk-home.png (data-artifact="/ at 1440 × 900"), label "the era's look stops at the column" = foreground · assets/shots/desk-thread.png (data-artifact="/thread/faith/ at 1440 × 900"), label "a thin map, and a button with both showing", coral ring on the CARDS | MAP button = foreground · assets/shots/desk-map.png (data-artifact="/map/masters-of-war/ at 1440 × 900"), a drawn pointer on a dot, label "click a dot: nothing opens" = foreground

Scene 1 (0–5s): the home page; its label.
Scene 2 (5–10s): the thread; the ring on the button.
Scene 3 (10–15s): the map; the pointer clicks (a small pulse), the label. Hold.

## Frame 3 — Three changes, six steps

- type: solution
- defines: search, desktop check
- layout: list
- duration: 15.275s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/03-changes.html
- scene: three change rows, each naming its steps; a small dependency line "step 1 stands alone · steps 3–6 need step 2"; a phone icon with "phones: unchanged"
- voiceover: "Three changes, in six steps…"
- blueprint: compose
- focal: the three rows
- roles: row 1 "The map works · step 1" = foreground · row 2 "A layout for wide screens · steps 2–4" = foreground · row 3 "Threads, the map, search and a desktop check · steps 5–6" = foreground · the dependency line and "phones: unchanged" = supporting

Scene 1 (0–12s): the three rows land with the voice.
Scene 2 (12–16s): "phones: unchanged". Hold.

## Frame 4 — Step 1 · The map: a click lands on the dot

- type: feature_showcase
- plan_step: 1
- chapter_start: The map, fixed
- layout: before-after
- duration: 19.712s
- transition_in: cut
- status: outline
- src: compositions/frames/04-step1.html
- scene: left, the real map screenshot cropped to the map, a pointer on "Nottamun Town"; right, a state diagram: pressed → released without moving → the song opens; pressed → moved past 4 px → dragging
- voiceover: "Step one, the map…"
- blueprint: compose
- focal: the state diagram
- roles: crop of assets/shots/desk-map.png (data-artifact="/map/masters-of-war/") = supporting · diagram nodes "pressed", "song opens", "dragging", edges "release, no move" and "move > 4 px" (coral on "song opens") = foreground · "today: the map takes the pointer at once" struck through = supporting

Scene 1 (0–9s): the map crop; the struck-through "today" line.
Scene 2 (9–19s): the diagram draws node by node; "song opens" turns coral. Hold.

## Frame 5 — Step 1 · Scroll past it, hover a dot

- type: feature_showcase
- defines: phone check
- plan_step: 1
- layout: screen
- duration: 12.331s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/05-step1-hover.html
- scene: a drawn map in a browser window: a hover label "Lord Randal · traditional" beside a dot, its line lit; + and − buttons in the corner; a small terminal line from the phone check, marked "planned"
- voiceover: "The mouse wheel scrolls the page again…"
- blueprint: compose
- focal: the hover label
- roles: map mock (night chart: slab ground, era-coloured dots) = foreground · hover label = foreground · + / − buttons = supporting · terminal line "✓ a dot tap on /map/masters-of-war/ opens /song/nottamun-town/" with tag "planned" = supporting

Scene 1 (0–6s): the map; a wheel icon with "scrolls the page", then + and −.
Scene 2 (6–10s): the hover label appears.
Scene 3 (10–13s): the planned terminal line. Hold.

## Frame 6 — Step 2 · Three widths

- type: feature_showcase
- defines: app shell, connection
- plan_step: 2
- chapter_start: A layout for wide screens
- layout: diagram
- duration: 13.781s
- transition_in: cut
- status: outline
- src: compositions/frames/06-step2-widths.html
- scene: a ruler from 0 to 1440 px with three bands: phone (to 767), tablet (768–1099), desktop (1100 and up); above each band a small outline of its layout
- voiceover: "Step two, the app shell…"
- blueprint: compose
- focal: the ruler with three bands
- roles: band "phone · up to 767 px · today's layout" = foreground · band "tablet · 768–1099 px · one wider column" = foreground · band "desktop · 1100 px and up · the new layout" (coral) = foreground · three small layout outlines = supporting

Scene 1 (0–15s): the ruler; each band lights as named. Hold.

## Frame 7 — Step 2 · The desktop: a header, the era's look across the window

- type: feature_showcase
- plan_step: 2
- layout: before-after
- duration: 10.859s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/07-step2-desktop.html
- scene: left small, today's album page at 1440 (real); right large, a mock of the album page proposed: Going Electric's op-art across the whole window, a header with "Dylan" at left, Eras · Threads · Map · About, a search field "Search  /" at right; cover and track list side by side
- voiceover: "On the desktop, a header runs across the top…"
- blueprint: compose
- focal: the proposed window
- roles: assets/shots/desk-album.png labelled "today" (data-artifact="/album/blonde-on-blonde/ today") = supporting · mock window "/album/blonde-on-blonde/" labelled "proposed" with header, search field (coral ring), op-art ground edge to edge, drawn cover "Blonde on Blonde", track list rows 1–5 with real titles (Rainy Day Women #12 & 35, Pledging My Time, Visions of Johanna, One of Us Must Know (Sooner or Later), I Want You) = foreground

Scene 1 (0–4s): today's page, small.
Scene 2 (4–9s): the mock pushes in; header and search field.
Scene 3 (9–14s): the op-art fills to the window's edges; the two columns. Hold.

## Frame 8 — Question 1 · How wide should the content go?

- type: cta
- plan_step: 2
- decision: q1
- layout: cards
- duration: 15.808s
- transition_in: push-slide UP
- status: outline
- src: compositions/frames/08-q1.html
- question: How wide should the content go on a computer?
- option_a: Up to 1200 px, two columns
- option_b: Up to 1600 px, three columns where there is room
- option_c: Keep the 720 px column, paint the margins
- why_a: Cover and players left, words and connections right; the era's look either side.
- why_b: A third column, the song's map, on a wide monitor; harder to read in order.
- why_c: The cheapest; a song page stays 2,500 px tall.
- option_a_more: On a 1440 px window a song page is cover and players on the left, words and connections on the right, with 120 px of the era's look each side. On a 2560 px monitor the content is less than half the width.
- option_b_more: On a 1920 px window a song page adds a third column for its map. Every page needs a three-column version.
- option_c_more: The era's look fills the window, but the page is the phone layout in the middle, as today.
- recommended: a
- question_more: The era's look fills the window in every option; this is about the content on it.
- scene: three option cards under the heading, each with a tiny wireframe; A carries the coral border
- voiceover: "Question one: how wide should the content go?…"
- blueprint: compose
- focal: the three option cards
- roles: eyebrow "Question 1 · step 2" = supporting · heading (data-question) = foreground · three cards (data-option a/b/c) each with a wireframe (2 columns / 3 columns / 1 narrow column) and its trade-off = foreground · RECOMMENDED badge on A = supporting

Scene 1 (0–6s): eyebrow, heading; card A.
Scene 2 (6–11s): card B.
Scene 3 (11–17s): card C.
Scene 4 (17–20s): A gets the coral border and RECOMMENDED. Hold.

## Frame 9 — If A: up to 1200 px

- type: benefit_highlight
- branch: q1=a
- plan_step: 2
- layout: screen
- duration: 6s
- transition_in: crossfade
- status: outline
- src: compositions/frames/09-q1-a.html
- scene: a 1440 window wireframe: two columns in the middle 1200, the era's look either side
- voiceover: "With A, a song page is cover and players on the left…"
- blueprint: compose
- focal: the wireframe
- roles: wireframe, left column "cover · note · players", right "words · connections" = foreground · eyebrow "If A · step 2" = supporting

Scene 1 (0–6s): the two columns draw. Hold.

## Frame 10 — If B: up to 1600 px

- type: benefit_highlight
- branch: q1=b
- plan_step: 2
- layout: screen
- duration: 6s
- transition_in: crossfade
- status: outline
- src: compositions/frames/10-q1-b.html
- scene: a 1920 window wireframe: three columns, the third "map"
- voiceover: "With B, a wide monitor adds a third column…"
- blueprint: compose
- focal: the wireframe
- roles: wireframe, columns "cover · players", "words · connections", "the song's map" = foreground · eyebrow "If B · step 2" = supporting

Scene 1 (0–6s): the three columns draw. Hold.

## Frame 11 — If C: the 720 px column stays

- type: benefit_highlight
- branch: q1=c
- plan_step: 2
- layout: screen
- duration: 6s
- transition_in: crossfade
- status: outline
- src: compositions/frames/11-q1-c.html
- scene: a 1440 window wireframe: one 720 column, the margins filled with the era's look
- voiceover: "With C, the column stays…"
- blueprint: compose
- focal: the wireframe
- roles: wireframe, one column "today's page", margins textured = foreground · eyebrow "If C · step 2" = supporting

Scene 1 (0–6s): the column, then the margins fill. Hold.

## Frame 12 — Quick check · A small move

- type: social_proof
- quiz: k1
- plan_step: 1
- layout: cards
- duration: 10s
- transition_in: cut
- status: outline
- src: compositions/frames/12-k1.html
- question: On a phone, you press on a dot, move 2 pixels, and let go. What happens?
- option_a: The map moves 2 pixels
- option_b: The dot's song opens
- option_c: Nothing happens
- answer: b
- explain: The map only starts a drag once the pointer moves more than 4 pixels, so a 2-pixel move is still a click on the dot.
- option_a_why: A drag starts only past 4 pixels; 2 is under it.
- option_b_why: Right: under 4 pixels it is a click, and the dot's link opens.
- option_c_why: That is today's bug; the fix makes the click reach the dot.
- walk_me_through: You press on the dot, and the map only remembers where. You move 2 pixels, which is under the 4-pixel line, so no drag starts and the map never takes the pointer. You let go, the click lands on the dot, and its song page opens.
- explained_at: 4
- scene: a quick check: a small drawn dot with a 2 px arrow, three cards
- voiceover: "A quick check, a question to see whether the plan does what you expect…"
- blueprint: compose
- focal: three cards
- roles: eyebrow "Quick check · step 1" = supporting · a dot with a tiny arrow "2 px" = supporting · heading (data-question) = foreground · cards (data-option) = foreground

Scene 1 (0–4s): eyebrow; the dot and arrow.
Scene 2 (4–10s): heading and three cards. Hold from 7s.

## Frame 13 — Step 3 · One era fills the screen

- type: feature_showcase
- defines: era timeline, rock band
- plan_step: 3
- layout: screen
- duration: 15.061s
- transition_in: cut
- status: outline
- src: compositions/frames/13-step3.html
- scene: a mock window of /era/electric/ at desktop width: the timeline across the top (1941 to today, eleven stretches, Going Electric lit), Daniel Kramer's 1965 photo filling the left half, "1965–1966 · GOING ELECTRIC" and the first lines of its story on the right, a row of three drawn covers under it
- voiceover: "Step three, the home page…"
- blueprint: compose
- focal: the era spread
- roles: mock window "/era/electric/" = foreground · assets/photos/electric-kramer-1965.jpg with credit "1965 publicity photo · Daniel Kramer · Public domain" = foreground · story text "In 1965 Dylan traded solo acoustic folk for a rock band, recording three albums in about fifteen months…" = foreground · drawn covers Bringing It All Back Home, Highway 61 Revisited, Blonde on Blonde = supporting · a small inset: Back to the Roots with assets/photos/roots-american-reunion-1993.jpg, label "no photo of him: a photo of the place" = supporting

Scene 1 (0–9s): the window; the photo fills the left half; the story types on the right.
Scene 2 (9–14s): the album row; the timeline across the top.
Scene 3 (14–18s): the Back to the Roots inset. Hold.

## Frame 14 — Step 3 · Moving between eras

- type: feature_showcase
- plan_step: 3
- layout: screen
- duration: 10.667s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/14-step3-move.html
- scene: the same window as frame 13: a › button at the right edge and a "→" key cap; the look crossfades from Going Electric (op-art, Kramer's photo) to the next era, Basement and Country (its own look, the Isle of Wight crowd photo on the left half); the address changes from /era/electric/ to /era/basement/
- voiceover: "The arrow keys, big arrows at the sides…"
- blueprint: compose
- focal: the crossfade and the address
- roles: mock window with Going Electric (assets/photos/electric-kramer-1965.jpg, credit "Daniel Kramer · Public domain") then Basement and Country, 1967–1970 (assets/photos/basement-isle-of-wight-crowd-1969.jpg, credit "Isle of Wight Festival crowd, 1969 · TimBrighton · CC BY 2.0"; story "After his 1966 motorcycle accident Dylan stopped touring, settled with his family near Woodstock and recorded informally with the Band in a basement.") = foreground · key cap "→" and the › button = supporting · the address in the title bar (coral when it changes) = supporting

Scene 1 (0–7s): Going Electric; the key cap presses.
Scene 2 (7–13s): the crossfade; the address changes. Hold.

## Frame 15 — Question 2 · One era at a time, or all of them?

- type: cta
- plan_step: 3
- decision: q2
- layout: cards
- duration: 14.187s
- transition_in: push-slide UP
- status: outline
- src: compositions/frames/15-q2.html
- question: On a computer, does the home page give one era at a time, or all of them at once?
- option_a: One era fills the screen
- option_b: All eleven down one long page
- option_c: An overview of eleven columns first
- why_a: Photo left, story right, albums under; arrows, keys and the timeline move on.
- why_b: Scroll from Hibbing to Rough and Rowdy; the look changes under you.
- why_c: One more click to an era; each column is about 120 px wide.
- option_a_more: At 1440 × 900, Going Electric is Kramer's photo on the left and its story on the right, with its three albums under it. You see one era at a time.
- option_b_more: Each era is a full-width band down one page; the look changes as each band scrolls in.
- option_c_more: Eleven columns side by side, each opening to A's full-screen era.
- recommended: a
- scene: three option cards under the heading, each with a tiny wireframe; A carries the coral border
- voiceover: "Question two: on a computer, does the home page give one era at a time…"
- blueprint: compose
- focal: the three option cards
- roles: eyebrow "Question 2 · step 3" = supporting · heading (data-question) = foreground · three cards (data-option a/b/c) each with a wireframe (one spread / stacked bands / eleven columns) = foreground · RECOMMENDED badge on A = supporting

Scene 1 (0–6s): eyebrow, heading; card A.
Scene 2 (6–10s): card B.
Scene 3 (10–15s): card C.
Scene 4 (15–18s): A gets the coral border and RECOMMENDED. Hold.

## Frame 16 — If A: one era fills the screen

- type: benefit_highlight
- branch: q2=a
- plan_step: 3
- layout: screen
- duration: 6s
- transition_in: crossfade
- status: outline
- src: compositions/frames/16-q2-a.html
- scene: a wireframe spread: photo left, story right, an › at the edge
- voiceover: "With A, Going Electric fills the screen…"
- blueprint: compose
- focal: the wireframe
- roles: wireframe "Going Electric" = foreground · eyebrow "If A · step 3" = supporting

Scene 1 (0–6s): the spread draws; the › pulses. Hold.

## Frame 17 — If B: one long page

- type: benefit_highlight
- branch: q2=b
- plan_step: 3
- layout: screen
- duration: 6s
- transition_in: crossfade
- status: outline
- src: compositions/frames/17-q2-b.html
- scene: a tall page of eleven bands, scrolling slowly from Hibbing to Rough and Rowdy
- voiceover: "With B, you scroll from Hibbing to Rough and Rowdy…"
- blueprint: compose
- focal: the bands
- roles: eleven bands, each an era's name = foreground · eyebrow "If B · step 3" = supporting

Scene 1 (0–6s): the bands scroll up once and stop. Hold.

## Frame 18 — If C: eleven columns first

- type: benefit_highlight
- branch: q2=c
- plan_step: 3
- layout: screen
- duration: 6s
- transition_in: crossfade
- status: outline
- src: compositions/frames/18-q2-c.html
- scene: eleven narrow columns side by side, one widening into a spread
- voiceover: "With C, eleven narrow columns come first…"
- blueprint: compose
- focal: the columns
- roles: eleven columns with era names set vertically = foreground · eyebrow "If C · step 3" = supporting

Scene 1 (0–6s): the columns; Going Electric widens. Hold.

## Frame 19 — Quick check · A 900 px window

- type: social_proof
- quiz: k2
- plan_step: 2
- layout: cards
- duration: 9s
- transition_in: cut
- status: outline
- src: compositions/frames/19-k2.html
- question: You open the site in a window 900 pixels wide. Which layout do you get?
- option_a: The phone layout, with the bottom bar
- option_b: One wider column, the tablet layout
- option_c: The header and two columns
- answer: b
- explain: 900 pixels is between 768 and 1099, the tablet's range: today's layout in one wider column.
- option_a_why: The phone layout stops at 767 pixels.
- option_b_why: Right: 768 to 1099 pixels is the tablet's range.
- option_c_why: The desktop layout starts at 1100 pixels.
- walk_me_through: The window's width picks the layout. The phone layout runs up to 767 pixels and the desktop layout starts at 1100. A window 900 pixels wide falls between them, so it gets the tablet layout, today's page in one wider column.
- explained_at: 6
- scene: a quick check: a window outline with "900 px" across it, three cards
- voiceover: "A quick check on step two…"
- blueprint: compose
- focal: three cards
- roles: eyebrow "Quick check · step 2" = supporting · window outline "900 px" = supporting · heading (data-question) = foreground · cards (data-option) = foreground

Scene 1 (0–3s): eyebrow; the window outline.
Scene 2 (3–9s): heading and cards. Hold from 6s.

## Frame 20 — Step 4 · A song page in two columns

- type: feature_showcase
- defines: moment
- plan_step: 4
- layout: screen
- duration: 15.979s
- transition_in: cut
- status: outline
- src: compositions/frames/20-step4.html
- scene: a mock window of /song/like-a-rolling-stone/ at desktop width on Going Electric's op-art: left column (drawn Highway 61 Revisited cover, title, "Released as a single in July 1965 at over six minutes, it reached number two in the US.", chips LOSS and FREEDOM, a Spotify player box); right column (the words card with its preview, four connection cards two across, a small night-chart map)
- voiceover: "Step four, album, song and moment pages, in two columns…"
- blueprint: compose
- focal: the two columns
- roles: mock window = foreground · left column, with a pin "stays as you scroll" = foreground · words card "A sneering address to a once-privileged woman who has fallen and must now fend for herself." = foreground · four connection cards: Jimi Hendrix (covered by), Idiot Wind (same theme), Ballad of a Thin Man (same theme), The Rolling Stones (covered by) = supporting · small map = supporting

Scene 1 (0–8s): the window; the left column; the pin.
Scene 2 (8–14s): the words card; the connection cards; the map.
Scene 3 (14–18s): hold.

## Frame 21 — Step 4 · An album, a moment

- type: feature_showcase
- plan_step: 4
- layout: wall
- duration: 8.981s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/21-step4-album.html
- scene: two smaller mock windows: /album/blonde-on-blonde/ (a large drawn cover beside the track list, a row "Also in this era" with Bringing It All Back Home and Highway 61 Revisited); /moment/newport-1965/ (a clip box on the left, the story on the right)
- voiceover: "An album page puts its cover large…"
- blueprint: compose
- focal: the two windows
- roles: album window = foreground · moment window with a play-button clip box labelled "clip" and the title "Newport Folk Festival: plays electric" and "1965" = foreground

Scene 1 (0–7s): the album window.
Scene 2 (7–12s): the moment window. Hold.

## Frame 22 — Quick check · An era with no photo of him

- type: social_proof
- quiz: k3
- plan_step: 3
- layout: cards
- duration: 9s
- transition_in: cut
- status: outline
- src: compositions/frames/22-k3.html
- question: Back to the Roots has no photograph of Dylan. On a computer, what fills the left half of its screen?
- option_a: Nothing: the story takes the whole width
- option_b: A photograph of a place from the era
- option_c: An empty frame, waiting for a photo
- answer: b
- explain: An era with no photograph of him shows a photograph of the place instead, so the left half is never empty.
- option_a_why: The layout keeps the photo half; it is filled, not dropped.
- option_b_why: Right: a photograph of the place stands in, as on a phone.
- option_c_why: The plan never leaves a half empty.
- walk_me_through: Every era on a computer has its photograph on the left half. Back to the Roots has no photograph of Dylan, so the plan uses the stand-in the site already has, a free photograph of a place from the era. The left half shows that, never a blank.
- explained_at: 13
- scene: a quick check: a small era spread with its left half as a question mark, three cards
- voiceover: "A quick check on step three…"
- blueprint: compose
- focal: three cards
- roles: eyebrow "Quick check · step 3" = supporting · spread outline "Back to the Roots" with "?" on its left half = supporting · heading (data-question) = foreground · cards (data-option) = foreground

Scene 1 (0–3s): eyebrow; the outline.
Scene 2 (3–9s): heading and cards. Hold from 6s.

## Frame 23 — Step 5 · A thread along the years, the map under it

- type: feature_showcase
- plan_step: 5
- chapter_start: Threads, the map and checks
- layout: screen
- duration: 12.907s
- transition_in: cut
- status: outline
- src: compositions/frames/23-step5.html
- scene: a mock window of /thread/faith/ at desktop width: four cards along a line of years (Gates of Eden 1965, I Dreamed I Saw St. Augustine 1967, The Wicked Messenger 1967, Gotta Serve Somebody 1979) with ‹ › at the ends; the map under them; the pointer hovers the fourth card and its dot lights; no Cards and Map button; a small phone at the side (assets/shots/phone-thread.png) with its button, labelled "phone: stays"
- voiceover: "Step five, threads…"
- blueprint: compose
- focal: the cards along the years
- roles: mock window = foreground · the year line 1965 · 1967 · 1979 = supporting · the lit dot (coral) = foreground · a struck-through "Cards | Map" label "gone at this width" = supporting · phone screenshot assets/shots/phone-thread.png (data-artifact="/thread/borrowed-tunes/ on a phone") = supporting

Scene 1 (0–8s): the window; the four cards along the years.
Scene 2 (8–13s): the map under them; the hover; the dot lights.
Scene 3 (13–17s): the struck-through label; the phone. Hold.

## Frame 24 — Step 5 · The map page and its panel

- type: feature_showcase
- plan_step: 5
- layout: screen
- duration: 8.384s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/24-step5-map.html
- scene: a mock window of /map/ filling the window: the night chart, a selected dot "Gotta Serve Somebody", a panel at the right: "Gospel · 1979", "Whoever you are and however high you rise, you will end up answering to one master or another.", "2 connections", "Open the song ›"; the legend under it with Gospel lit and the other eras dimmed
- voiceover: "The map page fills the window…"
- blueprint: compose
- focal: the panel
- roles: mock window "/map/gotta-serve-somebody/" = foreground · panel = foreground · legend with Gospel lit = supporting

Scene 1 (0–6s): the map; the dot selected; the panel slides in.
Scene 2 (6–12s): the legend; the other eras dim. Hold.

## Frame 25 — Question 3 · What does a click on a dot do?

- type: cta
- plan_step: 5
- decision: q3
- layout: cards
- duration: 10.517s
- transition_in: push-slide UP
- status: outline
- src: compositions/frames/25-q3.html
- question: On a computer, what should clicking a dot on the map do?
- option_a: Select it, and show its panel
- option_b: Open its song at once
- why_a: You stay on the map; Open the song › or a double click opens it.
- why_b: As on a phone; every click leaves the map.
- option_a_more: Click Nottamun Town: the panel shows traditional, its note and its 1 connection, Masters of War. One more click opens the page.
- option_b_more: Click Nottamun Town: /song/nottamun-town/ opens. You lose your place on the map.
- recommended: a
- question_more: On a phone a tap opens the song, whatever the answer.
- scene: two option cards under the heading; A carries the coral border
- voiceover: "Question three: on a computer, what should a click on a dot do?…"
- blueprint: compose
- focal: the two option cards
- roles: eyebrow "Question 3 · step 5" = supporting · heading (data-question) = foreground · two cards (data-option a/b), each with a tiny picture (a dot and a panel / a dot and a page) = foreground · RECOMMENDED badge on A = supporting

Scene 1 (0–5s): eyebrow, heading; card A.
Scene 2 (5–11s): card B.
Scene 3 (11–15s): A gets the coral border and RECOMMENDED. Hold.

## Frame 26 — If A: select, with a panel

- type: benefit_highlight
- branch: q3=a
- plan_step: 5
- layout: screen
- duration: 6s
- transition_in: crossfade
- status: outline
- src: compositions/frames/26-q3-a.html
- scene: a dot clicked, a panel sliding in beside the map
- voiceover: "With A, you stay on the map…"
- blueprint: compose
- focal: the panel
- roles: map mock and panel "Nottamun Town · traditional · 1 connection" = foreground · eyebrow "If A · step 5" = supporting

Scene 1 (0–6s): the click; the panel slides in. Hold.

## Frame 27 — If B: open at once

- type: benefit_highlight
- branch: q3=b
- plan_step: 5
- layout: screen
- duration: 6s
- transition_in: crossfade
- status: outline
- src: compositions/frames/27-q3-b.html
- scene: a dot clicked, the window's address changing to /song/nottamun-town/
- voiceover: "With B, every click takes you to a song page…"
- blueprint: compose
- focal: the address change
- roles: map mock then a plain song page outline, address /song/nottamun-town/ = foreground · eyebrow "If B · step 5" = supporting

Scene 1 (0–6s): the click; the page replaces the map. Hold.

## Frame 28 — Quick check · A song with no connections

- type: social_proof
- quiz: k4
- plan_step: 4
- layout: cards
- duration: 9s
- transition_in: cut
- status: outline
- src: compositions/frames/28-k4.html
- question: I Believe in You has no connections. What is in the right column of its page?
- option_a: Only the words
- option_b: The words card and an empty map
- option_c: Connections borrowed from its album
- answer: a
- explain: A song with no connections shows only the words in its right column: no connection cards and no map.
- option_a_why: Right: with nothing to connect, only the words are there.
- option_b_why: The small map shows a song's neighbours; with none, it is left out.
- option_c_why: Connections are between songs, written one by one; the page never borrows them.
- walk_me_through: The right column of a song page holds the words, the song's connections and a small map of its neighbours. I Believe in You has no connections, so there are no cards to show and no neighbours to map. Only its words card is there.
- explained_at: 20
- scene: a quick check: a two-column outline with its right column marked "?", three cards
- voiceover: "A quick check on step four…"
- blueprint: compose
- focal: three cards
- roles: eyebrow "Quick check · step 4" = supporting · outline = supporting · heading (data-question) = foreground · cards (data-option) = foreground

Scene 1 (0–3s): eyebrow; the outline.
Scene 2 (3–9s): heading and cards. Hold from 6s.

## Frame 29 — Step 6 · Search, and the desktop check

- type: feature_showcase
- plan_step: 6
- layout: before-after
- duration: 15.723s
- transition_in: cut
- status: outline
- src: compositions/frames/29-step6.html
- scene: left, a mock of /search/?q=1966 in three columns (Moments: Motorcycle accident near Woodstock, "Judas!" at the Manchester Free Trade Hall · Albums: Blonde on Blonde · Songs: Rainy Day Women #12 & 35, Visions of Johanna); right, a planned terminal run of npm test
- voiceover: "Step six. Search shows its groups in three columns…"
- blueprint: compose
- focal: the terminal run
- roles: search mock = supporting · terminal (slab) with tag "planned": `npm test`, `✓ 11 eras, 39 albums, 255 songs, 135 connections, 12 threads, 26 photos`, `✓ 12 views at 375×812`, `✓ 24 views at 1440 × 900 and 1100 × 800, screenshots in checks/desktop/` = foreground · the six failures listed under it as short tags (sideways scroll · a button that does nothing · an era's look that stops short · a phone-width column · a dot that does nothing · an error) = supporting

Scene 1 (0–5s): the search mock.
Scene 2 (5–11s): the terminal lines type.
Scene 3 (11–17s): the six tags land. Hold.

## Frame 30 — Quick check · Faith on a phone

- type: social_proof
- quiz: k5
- plan_step: 5
- layout: cards
- duration: 9s
- transition_in: cut
- status: outline
- src: compositions/frames/30-k5.html
- question: You open the Faith thread on a phone. Is the Cards and Map button there?
- option_a: Yes, it stays
- option_b: No, it is gone everywhere
- option_c: Only once the map is open
- answer: a
- explain: The button goes only on a computer, where the cards and the map both show; on a phone it stays as today.
- option_a_why: Right: phones keep today's layout, button included.
- option_b_why: It goes only at desktop widths, where both views show at once.
- option_c_why: On a phone it is always there, to switch either way.
- walk_me_through: On a computer the cards and the map show together, so a button to switch between them does nothing, and the plan removes it there. A phone shows one at a time and keeps today's layout, so on a phone the button is still there to switch.
- explained_at: 23
- scene: a quick check: a phone outline with "Faith", three cards
- voiceover: "A quick check on step five…"
- blueprint: compose
- focal: three cards
- roles: eyebrow "Quick check · step 5" = supporting · phone outline = supporting · heading (data-question) = foreground · cards (data-option) = foreground

Scene 1 (0–3s): eyebrow; the phone outline.
Scene 2 (3–9s): heading and cards. Hold from 6s.

## Frame 31 — Quick check · Which check fails?

- type: social_proof
- defines: data check
- quiz: k6
- plan_step: 6
- layout: cards
- duration: 10s
- transition_in: cut
- status: outline
- src: compositions/frames/31-k6.html
- question: The Cards and Map button shows on a thread in a window 1440 pixels wide. Which check fails?
- option_a: The data check
- option_b: The phone check
- option_c: The desktop check
- answer: c
- explain: The desktop check opens every view at computer sizes and fails on a button showing that does nothing at that width.
- option_a_why: The data check reads the dataset, not the pages.
- option_b_why: The phone check looks at phone size, where the button belongs.
- option_c_why: Right: at 1440 pixels the button does nothing, and the desktop check fails on it.
- walk_me_through: At 1440 pixels the thread shows its cards and its map together, so the Cards and Map button has nothing to switch. The desktop check opens the thread at that size, finds a button that does nothing, and fails, naming the view and the size. The phone check is happy, since on a phone the button belongs.
- explained_at: 29
- scene: a quick check: a small window "1440 px" with the button ringed, three cards
- voiceover: "And one on step six…"
- blueprint: compose
- focal: three cards
- roles: eyebrow "Quick check · step 6" = supporting · window outline = supporting · heading (data-question) = foreground · cards (data-option) = foreground

Scene 1 (0–3s): eyebrow; the window.
Scene 2 (3–10s): heading and cards. Hold from 7s.

## Frame 32 — The plan, with your choices

- type: cta
- plan_questions: 1, 2, 3
- layout: rail
- duration: 9.424s
- transition_in: cut
- status: outline
- src: compositions/frames/32-ending.html
- scene: the rail of six steps, each with its choice slot filled by the player
- voiceover: "That's the plan…"
- blueprint: compose
- focal: the rail with choices
- roles: rail (slots carry data-plan-step, an empty .d span each), steps "1 The map", "2 The app shell", "3 The era timeline", "4 Album, song and moment pages", "5 Threads and the map", "6 Search and the desktop check" = foreground · the ask = supporting

Scene 1 (0–4s): all six slots fill.
Scene 2 (4–9s): the ask: "Draw on any step to leave a note, / or approve this six-step plan." Hold still.
