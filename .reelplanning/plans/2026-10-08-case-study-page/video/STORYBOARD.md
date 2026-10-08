---
format: 1920x1080
duration: 210s
message: "A plan to rebuild the Bob Dylan case study page around a timeline of what really happened, with its videos in a watch-only viewer. Three questions."
arc: Today's page → what falls short → three changes → the timeline (question 3) → the watch page (question 1, a quick check) → the timeline page (question 2) → one real loop first → the check (a quick check) → approve
audience: the owner, who asked for this plan
mode: autonomous
music: none
plan_dir: .reelplanning/plans/2026-10-08-case-study-page
kind: plan
terms: case study = a real project told start to finish, with its videos and reviews; study page = the page a visitor reads first; review page = reelplanning's page for reviewing a video: it stops on questions and takes marks and comments; marks = drawings and notes a reviewer leaves on a scene; finish button = the button that ends a review and sends it; transcript = the record of the whole chat session, every message and tool call, one event a line; review = what the owner sent back from the review page: answers, comments, approve or change; commit = one saved change to a repo, with a message saying what changed; plan = the written plan a video is made from, with its steps and questions; event = one thing that happened, kept with its time; timeline = every event in order; source = the file and line an event comes from; agent = the AI coding assistant that does the work; walkthrough = the video made after a build, showing what landed; era = a named stretch of Dylan's life on the site, such as Going Electric; watch page = a page that plays the videos with nothing to fill in; chapters = the titled stretches of a video; quick check = a question to see whether the plan does what you expect; rendered video file = the video saved as an ordinary MP4; watch-only mode = the player with every reviewing control hidden; spread = an era's first view, filling the window; folded = shut, with a line saying what is inside; quote = the owner's words, copied exactly; check = a script that fails when something is wrong; recommended = the option I would pick, marked on its card; step = one part of the plan, numbered; render = to play a video through once and save it as a file; details = the smaller parts of an event, such as the commit's files, shown when opened; own words = what the owner typed, exactly; question = a choice for the reviewer, with options A, B, C
terms_check: strict
details_check: strict
---

## Video direction

- **Palette:** the project theme (`frame.md`): paper, ink, tiles, the dark slab for code, one coral accent per frame. Never a hex literal.
- **The real thing:** scene 1 is today's study page and scene 2 the review player, real screenshots in a thin browser frame inside a `data-artifact`. The new pages are sketches: wireframe boxes with real words, marked as sketches.
- **Questions:** eyebrow, heading (`data-question`) and the option cards (`data-option`); the recommended one carries the coral border and "RECOMMENDED".
- **Motion:** power3, reveals on their words; holds still. **Every root** carries `data-band="bottom"`; nothing below y 900.

## Frame 1 — Today's study page

- type: hook
- chapter_start: Today
- defines: case study, study page, review page
- layout: screen
- duration: 11.304s
- transition_in: cut
- status: outline
- src: compositions/frames/01-today.html
- scene: today's study page at 1440, its first screen and its loop cards
- voiceover: "Here's the case study page as it is…"
- blueprint: compose
- focal: browser frame with assets/shots/d-study-top.png (data-artifact="/bob-dylan/ today")
- roles: browser frame with assets/shots/d-study-top.png (data-artifact="/bob-dylan/ today") = foreground · the owner's words "it is not at all great at explaining anything" = supporting

Scene 1: the page.
Scene 2: the quote. Hold.

## Frame 2 — What falls short

- type: problem
- defines: marks, finish button, transcript, review, commit, plan
- layout: list
- duration: 19.488s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/02-short.html
- scene: three short lines, each with a small picture: four cards, the review player's controls, four sources
- voiceover: "Three things fall short…"
- blueprint: compose
- focal: three rows: "the order of events, pieced together from four cards" with a crop of assets/shots/d-study-cards.png · "a review page for someone who cannot review" with a crop of assets/shots/d-review-player.png (data-artifact="/bob-dylan/review/") · "the record in four places" with four small file chips
- roles: three rows: "the order of events, pieced together from four cards" with a crop of assets/shots/d-study-cards.png · "a review page for someone who cannot review" with a crop of assets/shots/d-review-player.png (data-artifact="/bob-dylan/review/") · "the record in four places" with four small file chips = foreground

Scene 1: row 1.
Scene 2: row 2.
Scene 3: row 3. Hold.

## Frame 3 — Three changes, five steps

- type: solution
- defines: step, source, watch page, timeline record
- layout: list
- duration: 14.976s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/03-changes.html
- scene: three changes, each naming its steps
- voiceover: "So, three changes in five steps…"
- blueprint: compose
- focal: three lines: "one record of what happened · step 1" · "videos to watch, not review · step 2" · "a page that tells it in order · steps 3, 4, 5"
- roles: three lines: "one record of what happened · step 1" · "videos to watch, not review · step 2" · "a page that tells it in order · steps 3, 4, 5" = foreground

Scene 1: the three lines, as said. Hold.

## Frame 4 — Step 1 · The timeline

- type: feature_showcase
- plan_step: 1
- chapter_start: One record
- defines: event, timeline, agent, walkthrough, era, quote, own words
- layout: code
- duration: 21.168s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/04-step1.html
- scene: four sources flowing into timeline.json, and one event shown as code
- voiceover: "Step one. A script reads the transcript…"
- blueprint: compose
- focal: four source chips (transcript · reviews · commits) → timeline.json
- roles: four source chips (transcript · reviews · commits) → timeline.json = supporting · a code block with the first walkthrough review's event: at, kind, words, source, ledTo = foreground

Scene 1: the sources flow in.
Scene 2: the event, line by line. Hold.

## Frame 5 — Question 1 · What does the timeline say of the agent's side?

- type: cta
- plan_step: 1
- decision: q1
- question: What does the timeline say of the agent's side?
- option_a: One line per event, from its commit message
- option_b: Also quote the agent's chat replies
- option_c: Only the owner's side
- why_a: Short; the agent's reasoning stays in the transcript.
- why_b: Much longer; the replies are long.
- why_c: What was built shows only as pictures.
- option_a_more: 16484b1 reads "Each era its own art direction" beside the review that asked for it.
- option_b_more: Each event also carries the agent's reply, often a screen of text.
- option_c_more: The review shows, then the next picture, with nothing in between.
- recommended: a
- question_more: The transcript has every reply; the commits say what was built in a line each.
- layout: cards
- duration: 14.808s
- transition_in: push-slide UP
- status: outline
- src: compositions/frames/05-q1.html
- scene: three option cards under the heading; the recommended one carries the coral border
- voiceover: "Question one, for step one…"
- blueprint: compose
- focal: heading (data-question)
- roles: heading (data-question) = foreground · three cards (data-option a/b/c) = foreground · eyebrow "Question 1 · step 1" = supporting · RECOMMENDED badge on A = supporting

Scene 1: eyebrow, heading; card A.
Scene 2: card B, then C.
Scene 3: the recommended card gets the coral border. Hold.

## Frame 6 — If A: a line per build

- type: benefit_highlight
- branch: q1=a
- plan_step: 1
- layout: screen
- duration: 6s
- transition_in: crossfade
- status: outline
- src: compositions/frames/06-q1-a.html
- scene: an event with its one line, "Each era its own art direction"
- voiceover: "With A, each build reads in a line…"
- blueprint: compose
- focal: a sketch of one event with its line
- roles: a sketch of one event with its line = foreground · eyebrow "If A · step 1" = supporting

Scene 1 (0–6s): the picture. Hold.

## Frame 7 — If B: the replies too

- type: benefit_highlight
- branch: q1=b
- plan_step: 1
- layout: screen
- duration: 6s
- transition_in: crossfade
- status: outline
- src: compositions/frames/07-q1-b.html
- scene: the same event with a long reply under it
- voiceover: "With B, every step also carries the agent's reply…"
- blueprint: compose
- focal: a sketch of one event with a long reply
- roles: a sketch of one event with a long reply = foreground · eyebrow "If B · step 1" = supporting

Scene 1 (0–6s): the picture. Hold.

## Frame 8 — If C: the owner only

- type: benefit_highlight
- branch: q1=c
- plan_step: 1
- layout: screen
- duration: 6s
- transition_in: crossfade
- status: outline
- src: compositions/frames/08-q1-c.html
- scene: the review, then a picture, nothing between
- voiceover: "With C, what was built shows only as pictures…"
- blueprint: compose
- focal: a sketch: the review, then a picture
- roles: a sketch: the review, then a picture = foreground · eyebrow "If C · step 1" = supporting

Scene 1 (0–6s): the picture. Hold.

## Frame 9 — Step 2 · The watch page

- type: feature_showcase
- plan_step: 2
- chapter_start: Videos to watch
- defines: chapters
- layout: screen
- duration: 15.216s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/09-step2.html
- scene: a sketch of the watch page: the list of videos, the video, its chapters and questions with answers
- voiceover: "Step two. A watch page plays one video…"
- blueprint: compose
- focal: sketch: a list "Plan video · The site, from an empty folder" …
- roles: sketch: a list "Plan video · The site, from an empty folder" … = supporting · the video box = supporting · chapters with "Question 1 · answered: Astro, a page per song" = foreground

Scene 1: the list.
Scene 2: the video.
Scene 3: the chapters and an answer. Hold.

## Frame 10 — Question 2 · How should a video play on the watch page?

- type: cta
- plan_step: 2
- decision: q2
- question: How should a video play on the watch page?
- option_a: A rendered video file, in the browser's own player
- option_b: reelplanning's player in a watch-only mode
- option_c: The review player as it is, with better names
- why_a: Plays anywhere; rendering here is slow, so one is timed first.
- why_b: A change to reelplanning itself first.
- why_c: The marking-up stays.
- option_a_more: Each of the seven is an MP4; a chapter jumps with #t=.
- option_b_more: The player hides Mark, comments and Finish, and shows each answer.
- option_c_more: The list has good names; the player is unchanged.
- recommended: a
- question_more: Rendering on this 2-CPU machine is slow; the plan times one video, and if the seven would take more than a few hours it stops and asks, with B as the fallback.
- layout: cards
- duration: 23.928s
- transition_in: push-slide UP
- status: outline
- src: compositions/frames/10-q2.html
- scene: three option cards under the heading; the recommended one carries the coral border
- voiceover: "Question two: how should a video play there…"
- blueprint: compose
- focal: heading (data-question)
- roles: heading (data-question) = foreground · three cards (data-option a/b/c) = foreground · eyebrow "Question 2 · step 2" = supporting · RECOMMENDED badge on A = supporting

Scene 1: eyebrow, heading; card A.
Scene 2: card B, then C.
Scene 3: the recommended card gets the coral border. Hold.

## Frame 11 — If A: a plain video file

- type: benefit_highlight
- branch: q2=a
- plan_step: 2
- layout: screen
- duration: 6s
- transition_in: crossfade
- status: outline
- src: compositions/frames/11-q2-a.html
- scene: a browser's own video player with the chapter list beside it
- voiceover: "With A, each video is a plain file…"
- blueprint: compose
- focal: a sketch of a plain video player
- roles: a sketch of a plain video player = foreground · eyebrow "If A · step 2" = supporting

Scene 1 (0–6s): the picture. Hold.

## Frame 12 — If B: a watch-only player

- type: benefit_highlight
- branch: q2=b
- plan_step: 2
- layout: screen
- duration: 6s
- transition_in: crossfade
- status: outline
- src: compositions/frames/12-q2-b.html
- scene: the review player with its controls struck out
- voiceover: "With B, reelplanning itself changes first…"
- blueprint: compose
- focal: a sketch of the player, Mark and Finish crossed out
- roles: a sketch of the player, Mark and Finish crossed out = foreground · eyebrow "If B · step 2" = supporting

Scene 1 (0–6s): the picture. Hold.

## Frame 13 — If C: the review page

- type: benefit_highlight
- branch: q2=c
- plan_step: 2
- layout: screen
- duration: 6s
- transition_in: crossfade
- status: outline
- src: compositions/frames/13-q2-c.html
- scene: the review player as it is
- voiceover: "With C, the review page stays…"
- blueprint: compose
- focal: assets/shots/d-review-player.png (data-artifact="/bob-dylan/review/")
- roles: assets/shots/d-review-player.png (data-artifact="/bob-dylan/review/") = foreground · eyebrow "If C · step 2" = supporting

Scene 1 (0–6s): the picture. Hold.

## Frame 14 — Quick check · A question on the watch page

- type: social_proof
- quiz: k1
- plan_step: 2
- defines: quick check
- question: On the watch page you click question 4 of the walkthrough of the site on a computer. What happens?
- option_a: The video jumps there and shows what the owner answered
- option_b: A form opens to answer it
- option_c: The review page opens
- answer: a
- explain: The watch page only plays: a question in its list jumps the video there and shows what the owner answered.
- option_a_why: Right: it jumps, and shows the answer, A, a link to a thread.
- option_b_why: Nothing on the watch page takes an answer.
- option_c_why: Watch links stay on the watch page.
- walk_me_through: Question 4 of the walkthrough of the site on a computer asked whether the map page should link to a thread from its song. The owner answered A. On the watch page the chapter list has that question; clicking it jumps the video to it and shows the answer beside it, with nothing to fill in.
- explained_at: 9
- layout: cards
- duration: 10s
- transition_in: cut
- status: outline
- src: compositions/frames/14-k1.html
- scene: the desktop walkthrough's chapter list with question 4 under the pointer, three cards
- voiceover: "A quick check…"
- blueprint: compose
- focal: eyebrow "Quick check · step 2"
- roles: eyebrow "Quick check · step 2" = supporting · the chapter list = supporting · heading (data-question) = foreground · cards (data-option) = foreground

Scene 1: the list.
Scene 2: heading and cards. Hold.

## Frame 15 — Step 3 · The timeline page

- type: feature_showcase
- defines: beat
- plan_step: 3
- chapter_start: A page in order
- layout: screen
- duration: 17.904s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/15-step3.html
- scene: a vertical timeline sketch over three days: a plan heading, a video with a still, a review with words, a change with before and after
- voiceover: "Step three. The study page becomes a vertical timeline…"
- blueprint: compose
- focal: a vertical line with a day bar
- roles: a vertical line with a day bar = supporting · a plan heading "we need a new plan to make this work better on a computer" · a video row with assets/shots/v-dylan-site-video.png · a review row with words · a change row with assets/shots/s1-phone-first.png and assets/shots/s2-phone-themed.png = foreground

Scene 1: the line and days.
Scene 2: each kind of event, as said. Hold.

## Frame 16 — Question 3 · How much of the timeline is open at first?

- type: cta
- defines: details
- plan_step: 3
- decision: q3
- question: How much of the timeline is open at first?
- option_a: Each plan's videos and reviews open; the rest folded
- option_b: Everything open
- option_c: Only each plan's heading
- why_a: About 30 of some 70 events show; one click opens a fold.
- why_b: A long page; the plans are harder to see.
- why_c: The order stays hidden until a plan is opened.
- option_a_more: The first walkthrough review shows open; "pls put on 8005 instead" sits in a folded line.
- option_b_more: Every port and status message shows in full.
- option_c_more: Four headings; open one to see its stretch.
- recommended: a
- question_more: Small messages, like a port change, are kept but folded.
- layout: cards
- duration: 14.376s
- transition_in: push-slide UP
- status: outline
- src: compositions/frames/16-q3.html
- scene: three option cards under the heading; the recommended one carries the coral border
- voiceover: "Question three: how much of the timeline is open at first…"
- blueprint: compose
- focal: heading (data-question)
- roles: heading (data-question) = foreground · three cards (data-option a/b/c) = foreground · eyebrow "Question 3 · step 3" = supporting · RECOMMENDED badge on A = supporting

Scene 1: eyebrow, heading; card A.
Scene 2: card B, then C.
Scene 3: the recommended card gets the coral border. Hold.

## Frame 17 — If A: the main events open

- type: benefit_highlight
- branch: q3=a
- plan_step: 3
- layout: screen
- duration: 6s
- transition_in: crossfade
- status: outline
- src: compositions/frames/17-q3-a.html
- scene: the timeline with folded lines between open events
- voiceover: "With A, about thirty events show…"
- blueprint: compose
- focal: a sketch with folded lines
- roles: a sketch with folded lines = foreground · eyebrow "If A · step 3" = supporting

Scene 1 (0–6s): the picture. Hold.

## Frame 18 — If B: everything open

- type: benefit_highlight
- branch: q3=b
- plan_step: 3
- layout: screen
- duration: 6s
- transition_in: crossfade
- status: outline
- src: compositions/frames/18-q3-b.html
- scene: a long timeline, all open
- voiceover: "With B, all of them show…"
- blueprint: compose
- focal: a sketch, all open
- roles: a sketch, all open = foreground · eyebrow "If B · step 3" = supporting

Scene 1 (0–6s): the picture. Hold.

## Frame 19 — If C: headings only

- type: benefit_highlight
- branch: q3=c
- plan_step: 3
- layout: screen
- duration: 6s
- transition_in: crossfade
- status: outline
- src: compositions/frames/19-q3-c.html
- scene: four plan headings, shut
- voiceover: "With C, the order of events stays hidden…"
- blueprint: compose
- focal: a sketch of four headings
- roles: a sketch of four headings = foreground · eyebrow "If C · step 3" = supporting

Scene 1 (0–6s): the picture. Hold.

## Frame 20 — Step 4 · One real loop first

- type: feature_showcase
- plan_step: 4
- defines: spread, folded
- layout: list
- duration: 15.888s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/20-step4.html
- scene: five beats across the first screen, each a small picture and a line
- voiceover: "Step four. The page opens with one real loop…"
- blueprint: compose
- focal: five beats: the request · assets/shots/v-dylan-site-video.png "the plan asks" · the owner's own answer · assets/shots/s1-phone-first.png "the first build" · "boring and stock" · assets/shots/s2-phone-themed.png "each era its own look"
- roles: five beats: the request · assets/shots/v-dylan-site-video.png "the plan asks" · the owner's own answer · assets/shots/s1-phone-first.png "the first build" · "boring and stock" · assets/shots/s2-phone-themed.png "each era its own look" = foreground

Scene 1: the beats in order, as said. Hold.

## Frame 21 — Step 5 · The check

- type: feature_showcase
- plan_step: 5
- defines: check
- layout: code
- duration: 11.664s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/21-step5.html
- scene: a terminal running the check: pages at two sizes, events with sources, one failure
- voiceover: "Step five. A check opens every page…"
- blueprint: compose
- focal: the slab with "node tools/check-pages.mjs", its ✓ line and one ✗ line
- roles: the slab with "node tools/check-pages.mjs", its ✓ line and one ✗ line = foreground · four labels: error, broken link, no source, quote not found = supporting

Scene 1: the run.
Scene 2: the four labels. Hold.

## Frame 22 — Quick check · A tidied quote

- type: social_proof
- quiz: k2
- plan_step: 5
- question: Someone tidies a quote, writing don't where the owner wrote dont. What does the check do?
- option_a: Passes: the meaning is the same
- option_b: It fails on that event
- option_c: Fixes the quote back
- answer: b
- explain: A quote must be in its source word for word, so a tidied one fails the check, which names the event.
- option_a_why: The check compares words, not meanings.
- option_b_why: Right: the quote is not in its source as written.
- option_c_why: The check only reports; it changes nothing.
- walk_me_through: The timeline quotes the owner exactly, typos and all. The check reads each quote's source and looks for the quote word for word. "don't" is not in the review, which says "dont", so the check fails and names that event.
- explained_at: 21
- layout: cards
- duration: 10s
- transition_in: cut
- status: outline
- src: compositions/frames/22-k2.html
- scene: a quote with dont corrected to don't, three cards
- voiceover: "Another quick check…"
- blueprint: compose
- focal: eyebrow "Quick check · step 5"
- roles: eyebrow "Quick check · step 5" = supporting · the tidied quote = supporting · heading (data-question) = foreground · cards (data-option) = foreground

Scene 1: the quote.
Scene 2: heading and cards. Hold.

## Frame 23 — The plan, with your choices

- type: cta
- plan_questions: 1, 2, 3
- defines: recommended, question
- layout: rail
- duration: 9s
- transition_in: cut
- status: outline
- src: compositions/frames/23-ending.html
- scene: the rail of five steps, each with its choice slot
- voiceover: "That's the plan…"
- blueprint: compose
- focal: rail (slots carry data-plan-step, an empty .d span each): "1 The timeline", "2 The watch page", "3 The study page as a timeline", "4 One real loop first", "5 The check"
- roles: rail (slots carry data-plan-step, an empty .d span each): "1 The timeline", "2 The watch page", "3 The study page as a timeline", "4 One real loop first", "5 The check" = foreground · the ask = supporting

Scene 1: the slots fill.
Scene 2: the ask. Hold still.
