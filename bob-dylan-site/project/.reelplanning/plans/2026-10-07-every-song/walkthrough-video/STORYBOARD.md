---
format: 1920x1080
duration: 130s
message: "Every track a page, as built: the 458 tracks all link, 271 new songs written, players and links fetched, 30 connections; the choices made alone and four off-plan changes, for you to accept or flag."
arc: What landed → step 1 and its choices → the file name → step 2 → instrumentals' links → no Genius → step 3 → threads kept by hand → step 4 → what ran → the list → anything you'd change
audience: the owner, who approved the plan and its two answers
mode: autonomous
music: none
plan_dir: .reelplanning/plans/2026-10-07-every-song
kind: walkthrough
terms: track = one recording on an album, a row in its track list; take = one recording of a song (an album can hold several); live take = a recording made at a concert; map = here, the file that says which song each track belongs to; script = a small program run from the command line; album-tracks = data/parts/album-tracks.json, the file holding the 271 new songs; co-wrote = wrote together with someone else; Spotify = a music streaming service; official clip = a video posted by Bob Dylan's own channel; bobdylan.com = Dylan's official site, with the words of the songs he wrote; Genius = a lyrics website that licenses the words it shows; instrumental = a track with no words; traditional = a folk song nobody now knows the writer of; thread = a path through songs that share something, in time order; connection = a link between two songs, with a kind and a sentence of why; cover = another artist's recording of a song; force = the --force flag that makes the thread script overwrite the threads anyway; data check = the script that fails when the dataset is wrong; phone check = the script that opens every kind of page at phone size; desktop check = the script that does the same at computer sizes; clip check = the script that asks YouTube whether each clip still plays; off-plan change = something built other than the plan said; list = the choices that do not pause the video, one line each; Hoagy Carmichael = the songwriter who wrote "Stardust"'s music in 1927; Mitchell Parish = the lyricist who wrote its words; Saturday Night Live = the TV show where Dylan played three songs in 1979
terms_check: strict
details_check: strict
before: 2026-10-06-dylan-site | decisions D-001, D-003, D-005, D-006, D-007, D-033, D-002: how should the site be built?; explains "search"
before: 2026-10-07-desktop | explains "era"; explains "desktop check"
recap: 2026-10-06-dylan-site | Bob Dylan, explored: a phone-first site of eras, albums…: decisions D-001, D-003, D-005, D-006, D-007, D-033, D-002: how should the site be built?; explains "search"
recap: 2026-10-07-desktop | The Dylan site on a computer: full-window eras, two-column…: explains "era"; explains "desktop check"
---

## Video direction

- **Palette:** the project theme (`frame.md`): paper, ink, tiles, the dark slab for terminal runs, one coral accent per frame. Never a hex literal.
- **The real thing:** every scene about the site shows its real 1440 × 900 screenshots from `assets/shots/` (covers and players blocked, so covers are the site's drawn ones and players are empty frames) as `<img>` in a thin browser-window frame (radius 14, ink hairline, a 36 px title bar with three dots and the address in mono), inside a `data-artifact` naming the address. Never redrawn; crop with overflow and object-position; never scaled above 1.
- **Stops:** a stop scene shows one card per choice (`data-call="aN"`; no visible id), its "chose" in bold, "instead of" under it, a short why; an off-plan change's card says "Off-plan change".
- **Motion:** power3, reveals on their words; holds are still. **Every root** carries `data-band="bottom"`; nothing below y 900.

## Frame 1 — Every track a page

- type: hook
- chapter_start: What landed
- layout: screen
- duration: 16.32s
- transition_in: cut
- status: outline
- src: compositions/frames/01-built.html
- scene: the Blood on the Tracks album page at 1440, every row a link; beside it a column of counts
- voiceover: "Every track now has a page…"
- blueprint: compose
- focal: the track list with every row linked
- roles: browser frame with assets/shots/d-album-bott.png (data-artifact="/album/blood-on-the-tracks/") = foreground · counts column: "458 tracks · every one links", "271 new songs", "452 on Spotify", "351 official clips", "421 lyrics links" = supporting

Scene 1 (0–6s): the window; a coral tick by rows 3, 6 and 8.
Scene 2 (6–16s): the counts, one per number said. Hold.

## Frame 2 — Step 1 · Takes, live takes, co-writes

- type: cta
- plan_step: 1
- autonomy: a1, a2, a3, a4
- layout: cards
- duration: 19.989s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/02-stop1.html
- scene: the Billy 1 page cropped to its left column ("Takes on the album: Billy 1 · Billy 4 · Billy 7") beside four choice cards
- voiceover: "Step one. A script maps every track to its song…"
- blueprint: compose
- focal: the four cards
- roles: crop of assets/shots/d-song-billy.png (data-artifact="/song/billy-1/") with "Takes on the album" ringed = supporting · card a1 (data-call="a1") "One map from track to song" / "instead of: matching titles on each page" / why "takes and live takes have other titles" · card a2 (data-call="a2") "Takes become one song" / "instead of: a song per take" / why "Alberta #1 and #2 are Alberta" · card a3 (data-call="a3") "A live take with no page: a song under its plain title" / "instead of: a song called '… (live)'" / why "Minstrel Boy, The Mighty Quinn" · card a4 (data-call="a4") "Co-written words count as his own" / "instead of: Words by Bob Dylan and …" / why "the line is for words he did not write" = foreground

Scene 1 (0–6s): the crop; the ring on the takes line.
Scene 2 (6–22s): the four cards, one per choice said. Hold.

## Frame 3 — Off-plan change · the file name

- type: cta
- defines: deviation
- plan_step: 1
- autonomy: d1
- layout: code
- duration: 8.064s
- transition_in: cut
- status: outline
- src: compositions/frames/03-d1.html
- scene: a small file tree of data/parts/ with tracks.json labelled "the Blood on the Tracks era" and album-tracks.json (coral) labelled "the 271 new songs"; the off-plan card d1
- voiceover: "One off-plan change…"
- blueprint: compose
- focal: the card
- roles: file tree data/parts/: basement.json, electric.json, tracks.json ("the Blood on the Tracks era"), album-tracks.json ("271 new songs", coral) = supporting · card d1 (data-call="d1") "Off-plan change · the new songs in album-tracks.json" / "instead of: tracks.json, as the plan named it" / why "tracks.json is the Blood on the Tracks era" = foreground

Scene 1 (0–9s): the tree; then the card. Hold.

## Frame 4 — Step 2 · Who wrote the words

- type: cta
- plan_step: 2
- autonomy: a8
- layout: screen
- duration: 9.237s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/04-stop2.html
- scene: the Stardust page's words card, "Words by Mitchell Parish" ringed; card a8
- voiceover: "Step two. Another writer's song names who wrote its words…"
- blueprint: compose
- focal: the words-by line and the card
- roles: crop of assets/shots/d-song-stardust.png (data-artifact="/song/stardust/") = foreground · card a8 (data-call="a8") "A traditional song says 'A traditional song'" / "instead of: Words by traditional, or no line" / why "25 songs have no named writer" = foreground

Scene 1 (0–6s): the crop; the ring.
Scene 2 (6–12s): the card. Hold.

## Frame 5 — Off-plan change · instrumentals' links

- type: cta
- plan_step: 2
- autonomy: d4
- layout: screen
- duration: 9.963s
- transition_in: cut
- status: outline
- src: compositions/frames/05-d4.html
- scene: the Turkey Chase page, its "Lyrics on bobdylan.com" button ringed; the off-plan card d4
- voiceover: "Off the plan: instrumentals keep their link…"
- blueprint: compose
- focal: the card
- roles: crop of assets/shots/d-song-turkey.png (data-artifact="/song/turkey-chase/") = supporting · card d4 (data-call="d4") "Off-plan change · instrumentals keep their bobdylan.com link" / "instead of: no lyrics link, as step 1's table says" / why "the site lists a page for each, as for Nashville Skyline Rag" = foreground

Scene 1 (0–11s): the crop; the ring; the card. Hold.

## Frame 6 — Off-plan change · no Genius links

- type: cta
- defines: search
- plan_step: 2
- autonomy: d2
- layout: terminal
- duration: 12.48s
- transition_in: cut
- status: outline
- src: compositions/frames/06-d2.html
- scene: a terminal run from runs/genius-blocked.txt: two curl lines to genius.com answering 403, the search engine's "anomaly"; the off-plan card d2
- voiceover: "And no Genius links…"
- blueprint: compose
- focal: the card
- roles: slab terminal (data-artifact="runs/genius-blocked.txt") with `$ curl … genius.com/api/search/multi?q=Bob%20Dylan%20Stardust` → `403`, `$ curl … genius.com/Bob-dylan-stardust-lyrics` → `403`, `$ curl … duckduckgo …` → `anomaly` = supporting · card d2 (data-call="d2") "Off-plan change · no Genius links" / "instead of: Lyrics on Genius, as the review asked" / why "Genius blocks this machine; an unchecked address could be dead" = foreground

Scene 1 (0–7s): the run types.
Scene 2 (7–13s): the card. Hold.

## Frame 7 — Step 3 · Connections and threads

- type: feature_showcase
- plan_step: 3
- layout: before-after
- duration: 11.029s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/07-step3.html
- scene: the If You See Her, Say Hello page's connection card to Girl from the North Country; beside it the Love gone wrong thread with the song among its cards
- voiceover: "Step three. Thirty new connections reach the new songs…"
- blueprint: compose
- focal: the connection card
- roles: crop of assets/shots/d-song-ifyousee.png (data-artifact="/song/if-you-see-her-say-hello/") around "Connections" = foreground · crop of assets/shots/d-thread-loss.png (data-artifact="/thread/loss/") = supporting · counter "165 connections, up from 135" = supporting

Scene 1 (0–7s): the song page's connection.
Scene 2 (7–13s): the thread; the counter. Hold.

## Frame 8 — Off-plan change · threads kept by hand

- type: cta
- plan_step: 3
- autonomy: d3
- layout: terminal
- duration: 9.685s
- transition_in: cut
- status: outline
- src: compositions/frames/08-d3.html
- scene: a terminal: `$ node tools/make-threads.mjs` printing "✗ data/threads.json is kept by hand now; rerun with --force …", exit 1; the off-plan card d3
- voiceover: "Off the plan: the threads are now kept by hand…"
- blueprint: compose
- focal: the card
- roles: slab terminal (data-artifact="node tools/make-threads.mjs") = supporting · card d3 (data-call="d3") "Off-plan change · the threads kept by hand" / "instead of: rebuilt by make-threads" / why "it would pick ten new songs per theme and drop the placed ones" = foreground

Scene 1 (0–11s): the run; the card. Hold.

## Frame 9 — Step 4 · Every row a link, and live takes named

- type: cta
- plan_step: 4
- autonomy: a9
- layout: screen
- duration: 9.152s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/09-stop4.html
- scene: the She Belongs to Me page, "Also on Self Portrait: She Belongs to Me (live)" ringed; card a9
- voiceover: "Step four. Every row of every album is a link…"
- blueprint: compose
- focal: the line and the card
- roles: crop of assets/shots/d-song-shebelongs.png (data-artifact="/song/she-belongs-to-me/") = foreground · card a9 (data-call="a9") "A song page names its live takes elsewhere" / "instead of: only the album row linking there" / why "on the song's page you would not know the take exists" = foreground

Scene 1 (0–5s): the crop; the ring.
Scene 2 (5–11s): the card. Hold.

## Frame 10 — What ran

- type: benefit_highlight
- layout: list
- duration: 11.008s
- transition_in: cut
- status: outline
- src: compositions/frames/10-ran.html
- scene: two columns: what ran and what is not done
- voiceover: "What ran…"
- blueprint: compose
- focal: the two columns
- roles: left "Ran": `npm test` with `✓ 11 eras, 39 albums, 538 songs, 165 connections`, `1415 page(s) built`, `✓ 12 views at 375×812`, `✓ 24 views at 1440 × 900 and 1100 × 800`; `npm run check:clips` `✓ every clip still plays` = foreground · right "Not done": "Genius links", "every sentence of the new notes checked" = foreground

Scene 1 (0–7s): left. Scene 2 (7–11s): right. Hold.

## Frame 11 — The rest of the choices

- type: cta
- defines: call
- autonomy_list: a5, a6, a7
- layout: list
- duration: 8.64s
- transition_in: cut
- status: outline
- src: compositions/frames/11-list.html
- scene: three choices, one line each, each line a card carrying data-call
- voiceover: "The rest of the choices are on this list…"
- blueprint: compose
- focal: the three lines
- roles: three line cards: a5 (data-call="a5") "The fetchers keep what they found · instead of: rewriting their files each run" · a6 (data-call="a6") "The 1979 Saturday Night Live clip stays dropped · instead of: adding it back" · a7 (data-call="a7") "Cover versions stay out of their thread · instead of: adding them to Songs others made famous" = foreground

Scene 1 (0–10s): the three lines land. Hold.

## Frame 12 — Anything you'd change?

- type: cta
- open_question: Seeing it run, anything you'd change?
- layout: wall
- duration: 6s
- transition_in: cut
- status: outline
- src: compositions/frames/12-ending.html
- scene: three small windows (the Blood on the Tracks list, Stardust, Billy 1) and the question
- voiceover: "That's every track a page…"
- blueprint: compose
- focal: the question
- roles: three small windows = supporting · the question = foreground

Scene 1 (0–6s): windows and question. Hold still.
