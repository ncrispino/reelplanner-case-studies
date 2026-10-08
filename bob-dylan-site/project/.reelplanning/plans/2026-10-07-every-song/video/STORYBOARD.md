---
format: 1920x1080
duration: 190s
message: "A plan to give each of the 277 album tracks with no page its own song page: records and writing, players and links, connections and threads, album rows that all link, and a data check that holds it. Two questions."
arc: Dead rows today → what fell short → every track a song (with questions 1 and 2) → links and connections → part of the site → ending
audience: the owner, who found "If You See Her, Say Hello" with nothing behind it
mode: autonomous
music: none
plan_dir: .reelplanning/plans/2026-10-07-every-song
kind: plan
terms: track = one recording on an album, a row in its track list; row = one line of an album's track list; page = a song's own page on the site, with its note, words, player and connections; album songs = Dylan's songs on his albums that have a page, 181 today; landmark = one of the 16 albums the dataset was to cover in full; in full = with every track written; record = a song's entry in the dataset: its id, title, album and year; writers = the AI helpers that write the dataset's text, one batch of songs at a time; note = one sentence of fact about a song; themes = the subjects a song shares with others, such as loss or faith; preview = one sentence in our own words on what a song says; summary = three or four sentences in our own words on what a song is about and how it unfolds; take = one recording of a song (an album can hold several takes of one song); live take = a recording made at a concert; instrumental = a track with no words; standards = popular songs of the 1930s to 1950s, like those Sinatra sang; carols = Christmas songs; The Band = the group that backed Dylan from 1965 and recorded The Basement Tapes with him; script = a small program run from the command line; fetcher = a script that looks a song up on another site and keeps its link; Spotify = a music streaming service; YouTube = Google's video site; official clip = a video posted by Bob Dylan's own channel; bobdylan.com = Dylan's official site, with the words of the songs he wrote; lyrics link = the button on a song page that opens its words on bobdylan.com; its story = the mark on today's album rows that have a page; search = the view that finds eras, albums and songs as you type; the map = the view where every song is a dot and every connection a line; data check = the script that fails when the dataset is wrong; build = turning the site's source into its pages; Hoagy Carmichael = the American songwriter who wrote "Stardust" in 1927; Pat Garrett = Pat Garrett & Billy the Kid, the 1973 film soundtrack Dylan recorded; Triplicate = his 2017 album of thirty standards; Blood on the Tracks = his 1975 album; quick check = a question the video asks you, to see whether the plan does what you expect; recommended = the option I would pick, marked on its card; albums.json = the dataset file of albums and their track lists; the owner = the person this site is built for, who asked for these plans; by = the field on a song's record naming who recorded it when it is not Dylan, such as The Band; Mitchell Parish = the lyricist who wrote the words of "Stardust" in 1929; Christmas Island = a 1946 holiday song Dylan recorded on Christmas in the Heart; Christmas in the Heart = his 2009 album of Christmas songs; npm test = the one command that runs every check; fetch-spotify = the fetcher that finds a song on Spotify; find-youtube = the fetcher that finds an official clip on YouTube; find-lyrics-links = the fetcher that finds a song's words on bobdylan.com; flag = to mark something for the reviewer to look at; our own words = written fresh, quoting nothing
terms_check: strict
details_check: strict
before: 2026-10-06-dylan-site | decisions D-001, D-003, D-005, D-006, D-007, D-033, D-002: how should the site be built?; explains "search"
before: 2026-10-07-desktop | explains "connection"
recap: 2026-10-06-dylan-site | Bob Dylan, explored: a phone-first site of eras, albums…: decisions D-001, D-003, D-005, D-006, D-007, D-033, D-002: how should the site be built?; explains "search"
recap: 2026-10-07-desktop | The Dylan site on a computer: full-window eras, two-column…: explains "connection"
---

## Video direction

- **Palette:** the project theme (`frame.md`, tokens): paper ground, ink text, tiles for cards, the dark slab for
  code and terminal runs, one coral accent per frame on the one thing that matters. Never a hex literal: every
  colour is a `--rp-*` token, `rgba(var(--rp-*-rgb), a)`, or a `color-mix` of tokens.
- **The real thing:** scene 1 shows the real Blood on the Tracks track list at 1440 × 900
  (`assets/shots/bott-tracks.png`, 1440 × 900) as an `<img>` in a thin browser-window frame (radius 14, ink
  hairline, a 36 px title bar with three small dots and the address in mono), inside a `data-artifact` naming the
  address. Never redrawn or re-typeset.
- **Mocks** of the proposed pages: the same browser frame, drawn in HTML with real titles; the site's paper look
  for album pages (cream ground, a serif italic heading, rows with hairlines); a drawn album cover is a coloured
  square with the title, never the real cover art.
- **Motion:** power3, reveals paced to the voice; a mock enters by a short push; a screenshot never zooms past 1.
  Holds are still.
- **Questions and checks:** the eyebrow, heading (`data-question`) and three cards (`data-option`) sit outside any
  camera; the recommended card carries a coral border and "RECOMMENDED".
- **Every root** carries `data-band="bottom"`; nothing below y 900.

## Frame 1 — Rows with nothing behind them

- type: hook
- chapter_start: Dead rows
- layout: screen
- duration: 14.144s
- transition_in: cut
- status: outline
- src: compositions/frames/01-dead-rows.html
- scene: the real Blood on the Tracks track list; rows 3, 6 and 8 ringed in coral; a counter "277 tracks like this, on 39 albums"
- voiceover: "Blood on the Tracks has ten tracks, and seven of them have a page…"
- blueprint: compose
- focal: the three ringed rows
- roles: browser frame with assets/shots/bott-tracks.png (data-artifact="/album/blood-on-the-tracks/ at 1440 × 900") = foreground · coral rings on "You're a Big Girl Now", "Meet Me in the Morning", "If You See Her, Say Hello" = foreground · the owner's words "i see songs like 'If You See Her, Say Hello' are in the main discography but have nothing there" = supporting · counter "277 tracks, 39 albums" = supporting

Scene 1 (0–9s): the window; the three rings, one per title said.
Scene 2 (9–15s): the counter; the quote card. Hold.

## Frame 2 — What the 277 are

- type: problem
- defines: The Band
- layout: chart
- duration: 14.229s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/02-groups.html
- scene: one horizontal bar of 277 split into four parts, each labelled with its count and two examples
- voiceover: "About a hundred and fifty are his own songs…"
- blueprint: compose
- focal: the bar
- roles: part "his own songs · about 150" (coral), e.g. "If You See Her, Say Hello", "Million Dollar Bash" = foreground · part "other writers' songs · about 110", e.g. "Stardust", "The First Noel" = foreground · part "The Band without him · about 8", e.g. "Katie's Been Gone" = foreground · part "instrumentals and takes · about 10", e.g. "Turkey Chase", "Billy 4" = foreground

Scene 1 (0–15s): each part grows as named; its examples under it. Hold.

## Frame 3 — Sixteen in full, not in full

- type: problem
- layout: chart
- duration: 13.056s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/03-short.html
- scene: the decision card "All 39 albums, 16 in full" with "chosen by you"; beside it sixteen small bars, one per landmark, each pages / tracks; a total "54 of 168 tracks with no page"
- voiceover: "This falls short of what you chose…"
- blueprint: compose
- focal: the sixteen bars
- roles: decision card "All 39 albums, 16 in full" = supporting · bars (ink = with a page, coral outline = without): The Freewheelin' 7/13, The Times They Are a-Changin' 8/10, Bringing It All Back Home 7/11, Highway 61 Revisited 7/9, Blonde on Blonde 7/14, John Wesley Harding 7/12, Nashville Skyline 7/10, Blood on the Tracks 7/10, Desire 7/9, Slow Train Coming 8/9, Infidels 7/8, Oh Mercy 7/10, Time Out of Mind 7/11, Love and Theft 7/12, Modern Times 7/10, Rough and Rowdy Ways 7/10 = foreground · total "54 of 168 tracks with no page" = foreground · line "not flagged when it happened" = supporting

Scene 1 (0–6s): the decision card.
Scene 2 (6–12s): the bars fill; the total.
Scene 3 (12–15s): "not flagged when it happened". Hold.

## Frame 4 — Two changes, four steps

- type: solution
- defines: search
- layout: list
- duration: 14.933s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/04-changes.html
- scene: two change rows naming their steps; a dependency line "steps 2–4 build on step 1"
- voiceover: "Two changes, in four steps…"
- blueprint: compose
- focal: the two rows
- roles: row 1 "Every track becomes a song · steps 1–2" = foreground · row 2 "Every track is part of the site · steps 3–4" = foreground · dependency line = supporting

Scene 1 (0–14s): the rows land with the voice. Hold.

## Frame 5 — Step 1 · A record, then the writing

- type: feature_showcase
- defines: our own words
- plan_step: 1
- chapter_start: Every track a song
- layout: code
- duration: 15.019s
- transition_in: cut
- status: outline
- src: compositions/frames/05-step1.html
- scene: left, a track row "8 If You See Her, Say Hello"; an arrow "tools/add-tracks.mjs" to a code slab with the record; then four text cards fill in: note, themes, preview, summary (shown as grey lines with labels, not as invented text), and a line "never quoting the lyrics"
- voiceover: "Step one. A new script reads each album's track list…"
- blueprint: compose
- focal: the record and its four cards
- roles: track row = supporting · code slab `{ "id": "if-you-see-her-say-hello", "title": "If You See Her, Say Hello", "album": "blood-on-the-tracks", "year": 1975, "by": null }` = foreground · four labelled cards "note", "themes", "preview", "summary" (text as placeholder lines) = foreground · line "in our own words · never quoting the lyrics" (coral) = supporting

Scene 1 (0–8s): the row; the arrow; the record types.
Scene 2 (8–17s): the four cards fill; the coral line. Hold.

## Frame 6 — Step 1 · Tracks that need care

- type: feature_showcase
- plan_step: 1
- layout: cards
- duration: 13.355s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/06-step1-odd.html
- scene: three small cases side by side: "Billy 4" and "Billy 7" → the existing page "Billy 1 · 3 takes"; "Like a Rolling Stone (live)" → the existing page; "Katie's Been Gone" → by The Band
- voiceover: "Some tracks need care…"
- blueprint: compose
- focal: the three cases
- roles: case "takes of one song": rows "Billy 4" and "Billy 7" joining the existing card "Billy 1 · takes: Billy 1, Billy 4, Billy 7" (/song/billy-1/) = foreground · case "a live take": row "Like a Rolling Stone (live) · Self Portrait" → "/song/like-a-rolling-stone/" = foreground · case "The Band without him": row "Katie's Been Gone · The Basement Tapes" → "by The Band" = foreground

Scene 1 (0–14s): each case lands as said. Hold.

## Frame 7 — Question 1 · Which tracks get a page?

- type: cta
- plan_step: 1
- decision: q1
- layout: cards
- duration: 12.309s
- transition_in: push-slide UP
- status: outline
- src: compositions/frames/07-q1.html
- question: Which tracks get a page?
- option_a: The 54 missing from the 16 landmarks
- option_b: All 277
- option_c: None
- why_a: Makes "16 in full" true; about 120 new pages. Triplicate keeps 27 dead rows.
- why_b: Every row of every album opens a page; about 600 new pages.
- why_c: The track lists stay as they are.
- option_a_more: Blood on the Tracks gets its three, Blonde on Blonde its seven. The other 23 albums keep their rows with nothing behind them, such as Tempest's 7 and Triplicate's 27.
- option_b_more: Most of the standards and carols get a page with no connections, and the most batches for the content filter to stop.
- option_c_more: "If You See Her, Say Hello" stays a row with nothing behind it, and "16 in full" stays untrue.
- recommended: b
- question_more: You chose "All 39 albums, 16 in full"; the 16 are not in full today. This asks that again.
- scene: three option cards under the heading; B carries the coral border
- voiceover: "Question one: which tracks get a page?…"
- blueprint: compose
- focal: the three option cards
- roles: eyebrow "Question 1 · step 1" = supporting · heading (data-question) = foreground · three cards (data-option a/b/c), each with a tiny count "54 / 277 / 0" = foreground · RECOMMENDED badge on B = supporting

Scene 1 (0–6s): eyebrow, heading; card A.
Scene 2 (6–10s): card B.
Scene 3 (10–13s): card C.
Scene 4 (13–17s): B gets the coral border and RECOMMENDED. Hold.

## Frame 8 — If A: the landmarks in full

- type: benefit_highlight
- branch: q1=a
- plan_step: 1
- layout: list
- duration: 6s
- transition_in: crossfade
- status: outline
- src: compositions/frames/08-q1-a.html
- scene: two track lists side by side: Blood on the Tracks, all ten rows lit; Triplicate, 3 of 30 rows lit
- voiceover: "With A, Blood on the Tracks is complete…"
- blueprint: compose
- focal: the two lists
- roles: list "Blood on the Tracks · 10 of 10" = foreground · list "Triplicate · 3 of 30" = foreground · eyebrow "If A · step 1" = supporting

Scene 1 (0–6s): the rows light. Hold.

## Frame 9 — If B: all 277

- type: benefit_highlight
- branch: q1=b
- plan_step: 1
- layout: list
- duration: 6s
- transition_in: crossfade
- status: outline
- src: compositions/frames/09-q1-b.html
- scene: a wall of 39 tiny track lists, every row lit
- voiceover: "With B, every row of every album opens a page."
- blueprint: compose
- focal: the wall
- roles: 39 tiny lists, all rows lit = foreground · eyebrow "If B · step 1" = supporting

Scene 1 (0–6s): the rows light across the wall. Hold.

## Frame 10 — If C: as it is

- type: benefit_highlight
- branch: q1=c
- plan_step: 1
- layout: list
- duration: 6s
- transition_in: crossfade
- status: outline
- src: compositions/frames/10-q1-c.html
- scene: the Blood on the Tracks list with rows 3, 6 and 8 dim
- voiceover: "With C, "If You See Her, Say Hello" stays a row…"
- blueprint: compose
- focal: the dim rows
- roles: list "Blood on the Tracks · 7 of 10" with three dim rows = foreground · eyebrow "If C · step 1" = supporting

Scene 1 (0–6s): the list; the three rows stay dim. Hold.

## Frame 11 — Question 2 · Songs by other writers

- type: cta
- plan_step: 1
- decision: q2
- layout: cards
- duration: 12.096s
- transition_in: push-slide UP
- status: outline
- src: compositions/frames/11-q2.html
- question: How much is written for a song by another writer?
- option_a: The same page as his own songs
- option_b: A shorter page: the note and the player
- option_c: No page: the writer's name on the row
- why_a: A note, a summary of the song and his recording, the player, who wrote the words.
- why_b: One sentence and the player; thinner than his own songs.
- why_c: Not a link; Triplicate stays mostly dead rows.
- option_a_more: "Stardust": a note naming Hoagy Carmichael, a summary, the player, "Words by Hoagy Carmichael and Mitchell Parish". The most writing.
- option_b_more: "Stardust": one sentence and the Spotify player.
- option_c_more: "Stardust · Hoagy Carmichael" in the track list, not a link.
- recommended: a
- question_more: About 110 of the 277: standards, carols, folk and blues he recorded.
- scene: three option cards under the heading; A carries the coral border
- voiceover: "Question two: how much is written for a song by another writer?…"
- blueprint: compose
- focal: the three option cards
- roles: eyebrow "Question 2 · step 1" = supporting · heading (data-question) = foreground · three cards (data-option a/b/c), each with a tiny page outline (full / short / none) = foreground · RECOMMENDED badge on A = supporting

Scene 1 (0–6s): eyebrow, heading; card A.
Scene 2 (6–9s): card B.
Scene 3 (9–12s): card C.
Scene 4 (12–15s): A gets the coral border and RECOMMENDED. Hold.

## Frame 12 — If A: a full page

- type: benefit_highlight
- branch: q2=a
- plan_step: 1
- layout: screen
- duration: 6s
- transition_in: crossfade
- status: outline
- src: compositions/frames/12-q2-a.html
- scene: a page outline "Stardust": a note line naming Hoagy Carmichael, a summary block, a player box, "Words by Hoagy Carmichael and Mitchell Parish"
- voiceover: "With A, "Stardust" gets a note naming Hoagy Carmichael…"
- blueprint: compose
- focal: the page outline
- roles: page outline = foreground · eyebrow "If A · step 1" = supporting

Scene 1 (0–6s): the page fills. Hold.

## Frame 13 — If B: a short page

- type: benefit_highlight
- branch: q2=b
- plan_step: 1
- layout: screen
- duration: 6s
- transition_in: crossfade
- status: outline
- src: compositions/frames/13-q2-b.html
- scene: a short page outline "Stardust": one line and a player box
- voiceover: "With B, "Stardust" gets one sentence and the player."
- blueprint: compose
- focal: the page outline
- roles: short page outline = foreground · eyebrow "If B · step 1" = supporting

Scene 1 (0–6s): the short page. Hold.

## Frame 14 — If C: a name on a row

- type: benefit_highlight
- branch: q2=c
- plan_step: 1
- layout: list
- duration: 6s
- transition_in: crossfade
- status: outline
- src: compositions/frames/14-q2-c.html
- scene: Triplicate's track list with "Stardust · Hoagy Carmichael", not a link
- voiceover: "With C, "Stardust" is a name in Triplicate's track list…"
- blueprint: compose
- focal: the row
- roles: list rows "28 Stardust · Hoagy Carmichael" (no link) among neighbours = foreground · eyebrow "If C · step 1" = supporting

Scene 1 (0–6s): the list; the row. Hold.

## Frame 15 — Quick check · A live take

- type: social_proof
- quiz: k1
- plan_step: 1
- layout: cards
- duration: 11.664s
- transition_in: cut
- status: outline
- src: compositions/frames/15-k1.html
- question: On Self Portrait, you click "She Belongs to Me (live)". Its song had no page before this plan. Where do you land?
- option_a: A page of its own for the live take
- option_b: The new page of "She Belongs to Me"
- option_c: Nowhere: live takes have no page
- answer: b
- explain: A live take links to its song's page, and "She Belongs to Me" gets its page in this plan, so the row links to that new page.
- option_a_why: A live take never gets a page of its own; it links to its song.
- option_b_why: Right: the song gets its page from Bringing It All Back Home, and the live row links there.
- option_c_why: Every row links somewhere; a live take links to its song.
- walk_me_through: "She Belongs to Me" is on Bringing It All Back Home, and had no page before this plan, so step one gives it one. Self Portrait's "She Belongs to Me (live)" is a live take of that song, so the script makes no page for it and links its row to the song. Clicking it opens the new "She Belongs to Me" page.
- explained_at: 6
- scene: a quick check: a small Self Portrait track list with "She Belongs to Me (live)" under the pointer, three cards
- voiceover: "A quick check, a question to see whether the plan does what you expect…"
- blueprint: compose
- focal: three cards
- roles: eyebrow "Quick check · step 1" = supporting · small list = supporting · heading (data-question) = foreground · cards (data-option) = foreground

Scene 1 (0–4s): eyebrow; the list.
Scene 2 (4–10s): heading and cards. Hold from 7s.

## Frame 16 — Step 2 · Players, clips and lyrics links

- type: feature_showcase
- plan_step: 2
- chapter_start: Links and connections
- layout: diagram
- duration: 15.104s
- transition_in: cut
- status: outline
- src: compositions/frames/16-step2.html
- scene: a song card "Meet Me in the Morning" with three fetchers feeding it: Spotify id, official clip, lyrics link; below, a second card "Stardust" where the lyrics link is replaced by "Words by Hoagy Carmichael and Mitchell Parish · not on bobdylan.com"
- voiceover: "Step two. The same three fetchers…"
- blueprint: compose
- focal: the two cards
- roles: three fetcher labels "fetch-spotify", "find-youtube", "find-lyrics-links" = supporting · card "Meet Me in the Morning" with three filled slots = foreground · card "Stardust" with the Words-by line (coral) = foreground

Scene 1 (0–9s): the fetchers; the first card's slots fill.
Scene 2 (9–16s): the Stardust card and its line. Hold.

## Frame 17 — Step 3 · Connections, only when sure

- type: feature_showcase
- plan_step: 3
- layout: diagram
- duration: 14.827s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/17-step3.html
- scene: two song cards joined by a line labelled "same theme": "If You See Her, Say Hello" and "You're Gonna Make Me Lonesome When You Go", with the why "Two Blood on the Tracks songs about a love that has ended, one before the parting and one after."; beside, "Braggin'" alone, labelled "no connection: none the writers are sure of"
- voiceover: "Step three. A pass across the whole catalogue…"
- blueprint: compose
- focal: the joined pair
- roles: pair and line (coral) = foreground · why sentence = foreground · "Braggin'" card alone = supporting · rule "a wrong connection is worse than a missing one" = supporting

Scene 1 (0–10s): the pair; the line draws; the why.
Scene 2 (10–16s): the lone card; the rule. Hold.

## Frame 18 — Quick check · Stardust's words

- type: social_proof
- quiz: k2
- plan_step: 2
- layout: cards
- duration: 9s
- transition_in: cut
- status: outline
- src: compositions/frames/18-k2.html
- question: You open "Stardust". What is where the lyrics link would be?
- option_a: A link to its words on bobdylan.com
- option_b: Who wrote its words, and that it is not on bobdylan.com
- option_c: Two lines of its lyrics
- answer: b
- explain: bobdylan.com lists the songs he wrote, so another writer's song shows who wrote its words instead of a link.
- option_a_why: bobdylan.com has the songs he wrote; "Stardust" is Hoagy Carmichael's.
- option_b_why: Right: "Words by Hoagy Carmichael and Mitchell Parish; not on bobdylan.com".
- option_c_why: The site never quotes lyrics; it summarises them.
- walk_me_through: The lyrics fetcher looks each new song up in bobdylan.com's index of the songs he wrote. "Stardust" is not there, because Hoagy Carmichael and Mitchell Parish wrote it. So its page shows who wrote the words, and says they are not on bobdylan.com, where a link would be.
- explained_at: 16
- scene: a quick check: a small words card with a blank where the link goes, three cards
- voiceover: "A quick check on step two…"
- blueprint: compose
- focal: three cards
- roles: eyebrow "Quick check · step 2" = supporting · words card outline = supporting · heading (data-question) = foreground · cards (data-option) = foreground

Scene 1 (0–3s): eyebrow; the outline.
Scene 2 (3–9s): heading and cards. Hold from 6s.

## Frame 19 — Step 4 · Every row a link

- type: feature_showcase
- defines: data check
- plan_step: 4
- chapter_start: Part of the site
- layout: before-after
- duration: 15.872s
- transition_in: cut
- status: outline
- src: compositions/frames/19-step4.html
- scene: before and after of Blood on the Tracks' list: before, 7 "its story ›" marks and 3 dead rows; after, ten rows each a link; under it three counters: search "every track", the map "+ their dots", pages "802 → about 1,400"; a planned data-check line
- voiceover: "Step four. On an album page every row becomes a link…"
- blueprint: compose
- focal: the after list
- roles: before list (small) = supporting · after list, every row a link (coral underline) = foreground · counters = supporting · slab line with tag "planned": `✗ albums.json "<album>" track <n> "<title>" has no song` = supporting

Scene 1 (0–8s): before; after.
Scene 2 (8–14s): the counters.
Scene 3 (14–19s): the data-check line. Hold.

## Frame 20 — Quick check · A carol with nothing to connect

- type: social_proof
- quiz: k3
- plan_step: 3
- layout: cards
- duration: 9s
- transition_in: cut
- status: outline
- src: compositions/frames/20-k3.html
- question: "Christmas Island", on Christmas in the Heart, has nothing the writers are sure ties it to another song. What is on its page?
- option_a: Its page, with no connection
- option_b: A guessed connection, marked "maybe"
- option_c: No page until it has a connection
- answer: a
- explain: A connection is written only when the writers are sure, so a song with none still gets its page, with its words and player and no connection cards.
- option_a_why: Right: the page is there, with its words and player, and no connection.
- option_b_why: A wrong connection is worse than a missing one, so none is guessed.
- option_c_why: Every track gets a page, connected or not.
- walk_me_through: The pass across the catalogue writes a connection only when the writers are sure of it. Nothing ties "Christmas Island" to another song for certain, so it gets none. Its page still has its note, its summary and its player, with no connection cards.
- explained_at: 17
- scene: a quick check: a lone song card "Christmas Island", three cards
- voiceover: "A quick check on step three…"
- blueprint: compose
- focal: three cards
- roles: eyebrow "Quick check · step 3" = supporting · lone card = supporting · heading (data-question) = foreground · cards (data-option) = foreground

Scene 1 (0–3s): eyebrow; the lone card.
Scene 2 (3–9s): heading and cards. Hold from 6s.

## Frame 21 — Quick check · A track added later

- type: social_proof
- quiz: k4
- plan_step: 4
- layout: cards
- duration: 9s
- transition_in: cut
- status: outline
- src: compositions/frames/21-k4.html
- question: A track is added to an album's list later, with no song. What happens the next time the checks run?
- option_a: Nothing: the row shows with no link
- option_b: The data check fails
- option_c: A page is made for it with only its title
- answer: b
- explain: The data check fails on any album track with no song, naming the album, the track's number and its title.
- option_a_why: That is today's dead row; the check stops it coming back.
- option_b_why: Right: the check fails and says which track has no song.
- option_c_why: Nothing writes a page by itself; the check asks for one.
- walk_me_through: After this plan, the data check reads every album's track list and looks for a song for each track; `npm test` runs it before the site is built. A track added later with no song breaks that, so the check fails and names the album, the track's number and its title. Someone then writes its song before the checks pass.
- explained_at: 19
- scene: a quick check: a track list with a new row marked "?", three cards
- voiceover: "And one on step four…"
- blueprint: compose
- focal: three cards
- roles: eyebrow "Quick check · step 4" = supporting · list with "?" row = supporting · heading (data-question) = foreground · cards (data-option) = foreground

Scene 1 (0–3s): eyebrow; the list.
Scene 2 (3–9s): heading and cards. Hold from 6s.

## Frame 22 — The plan, with your choices

- type: cta
- plan_questions: 1, 2
- layout: rail
- duration: 9s
- transition_in: cut
- status: outline
- src: compositions/frames/22-ending.html
- scene: the rail of four steps, each with its choice slot filled by the player
- voiceover: "That's the plan…"
- blueprint: compose
- focal: the rail with choices
- roles: rail (slots carry data-plan-step, an empty .d span each), steps "1 Every track becomes a song", "2 Players, clips and lyrics links", "3 Connections and threads", "4 Album pages, search, the map and the data check" = foreground · the ask = supporting

Scene 1 (0–4s): the four slots fill.
Scene 2 (4–9s): the ask: "Draw on any step to leave a note, / or approve this four-step plan." Hold still.
