---
format: 1920x1080
duration: 250s
message: "Version two of the Dylan site plan: four answers kept, question 1 asked again with the differences shown, per-era themes with real photographs, lyrics links, the map on phones, YouTube beside Spotify. Three questions."
arc: What changed → Step 1 and question 1 → Steps 2–4 with two new questions → Steps 5–6 → Ending
audience: the owner, who reviewed version one and asked for these changes
mode: autonomous
music: none
plan_dir: .reelplanning/plans/2026-10-06-dylan-site
before: none
terms: index.html, app.css, app.js = the files of a site with no build step: the page, its look, and its script; static host = a service that only serves files, like GitHub Pages; build step = a command that turns source files into the files a browser loads; route = the part of the address after the # sign that says which view to show; JSON = a plain-text format for lists and fields of data; id = the short name a record is found by, such as masters-of-war; TypeScript = JavaScript with types, which catch a wrong field before the page runs; Vite = a tool that builds a site from source files into plain files; Astro = a site builder that makes one real page per album and song; npm = the tool that installs code packages for a project; node_modules = the folder npm installs packages into; library = a package of code someone else wrote, used as a part; placeholder = a soft, blurred copy of a photo shown while the sharp one loads; View Transitions = the browser's own way to animate one view into the next; Cover Art Archive = a free online library of album cover images; Wikimedia Commons = a free online library of photographs others may reuse under their licence; licence = the terms under which a photo may be reused, such as crediting the photographer; embedded player = a player from another site shown inside the page; tap target = the area a finger can press; headless Chrome = the Chrome browser run by a script, with no window; npm test = the command that runs the project's checks; HTML = the language a web page is written in; CSS = the rules that say how a web page looks; JavaScript = the code that runs inside a web page; YouTube = Google's video site; Spotify = a music streaming service; view = one screen of the site, such as an album page or search; quick check = a question the video asks you, to see whether the plan does what you expect; theme = an era's own colours, typeface and texture; every polish by hand = the placeholders, transitions, map and players all written by hand, with no packages; polish = the placeholders, transitions, map and players that make the site feel finished; package.json = the file that lists a project's packages; dist/ = the folder of plain files a build writes, ready for a static host; public domain = free for anyone to use; CC BY 2.0 = a free licence: use it if you credit the photographer; CC BY-SA 2.0 = the same, and changed copies must keep the licence; youtube-nocookie.com = YouTube's player that sets no tracking cookies until you play
terms_check: strict
details_check: strict
---

## Video direction

- **Palette:** the project theme (`frame.md`, tokens in `tokens.html`): paper ground, ink text, tiles for cards,
  the dark slab for code and terminal runs, one coral accent per frame on the one thing that matters. Never a hex
  literal: every colour is a `--rp-*` token or `rgba(var(--rp-*-rgb), a)`, or a `color-mix` of tokens.
- **Era themes inside the phone mocks** (the site's own look, a real thing; this version's main visual change):
  each era's panel wears a strong theme built only from token mixes, never hex:
  Greenwich Village = paper ground, ink text, a typewriter-style mono display (JetBrains Mono at large size);
  Going Electric = near-black ground (`--rp-slab`), amber accent (`--rp-syn-num`), condensed bold Inter, all caps;
  Gospel = deep red ground (`color-mix(in oklab, var(--rp-syn-del) 70%, var(--rp-slab))`), gold accent
  (`--rp-syn-num`), EB Garamond display;
  Rough and Rowdy = `--rp-slab` ground, brass (`color-mix(in oklab, var(--rp-syn-num) 60%, var(--rp-tile-2))`),
  worn EB Garamond italic.
- **Real photographs** (in `assets/photos/`, credits in `assets/photos/CREDITS.md`): use them as `<img>` with
  `object-fit: cover`, each with its credit line beneath in small mono:
  `1963-march-on-washington.jpg` (Rowland Scherman · public domain), `1980-gospel-tour.jpg` (Jean-Luc Ourlin ·
  CC BY-SA 2.0), `1984-barcelona.jpg` (Xavier Badosa · CC BY 2.0), `2010-azkena.jpg` (Alberto Cabello · CC BY
  2.0). There is no photo for 1965–66: the Going Electric panel opens on its title set large in its theme.
- **Album covers:** the site will show the real covers (D-003), but the video never reproduces a copyrighted
  cover; a cover in the video is a typographic tile labelled with the album title, marked "cover from the
  archive" where the real one would load.
- **The phone** (shared by every screen scene): 400 × 800 px, ink hairline border, radius 44, top at y 110. A
  fixed bottom bar, `Eras · Threads · Search · About`, 24 px side padding, space-between.
- **Motion grammar:** power3 eases, reveals paced to the voice. Holds are still.
- **Negative list:** no gradients, glows, blur (except the placeholder demo in scene 4, which is the point),
  particles, music, pictograms, or lyrics.
- **Every root** carries `data-band="bottom"`; nothing below y 945.

## Frame 1 — Version two

- type: hook
- chapter_start: What changed, and how it is built
- layout: list
- duration: 16.896s
- transition_in: cut
- status: outline
- src: compositions/frames/01-hook.html
- scene: version two: two columns, "you decided" (four answers) and "you asked for" (five changes)
- voiceover: "This is version two of the plan…"
- blueprint: compose
- focal: the two columns
- roles: left column "you decided" = foreground · right column "you asked for" = foreground

Scene 1 (0–7s): title "Version two"; left column lands one line at a time: "All 39 albums, 16 in full" · "The real covers" · "Threads, plus a map" · "An embedded Spotify player".
Scene 2 (7–16s): right column: "Ask question 1 again, with the differences shown" · "A theme and real photos per era" · "Lyrics, with a preview" · "The map on phones too" · "YouTube for songs and moments". Hold.

## Frame 2 — Three changes, six steps

- type: product_intro
- layout: rail
- duration: 13.568s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/02-overview.html
- defines: The dataset, Search
- scene: the rail of six steps, each with what is new in it beside the slot
- voiceover: "It's still three changes in six steps…"
- blueprint: compose
- focal: the rail with new-item labels
- roles: rail (stage snippet) = foreground · a short label beside slots 1, 2, 3, 4, 5, 6 = supporting

Scene 1 (0–14s): the six slots fill; beside them in order: 1 "view transitions" · 2 "photos, lyrics links, video ids" · 3 "a theme and photos per era" · 4 "real covers, lyrics" · 5 "the map on phones" · 6 "Spotify and YouTube". Hold.

Slot titles: 1 The app shell · 2 The dataset · 3 The era timeline · 4 Album and song pages · 5 Threads and the map · 6 Search, listening, checks.

## Frame 3 — Step 1 · The app shell, now animated

- type: feature_showcase
- plan_step: 1
- layout: screen
- duration: 20.288s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/03-step1-shell.html
- defines: The app shell
- scene: on a phone, the Highway 61 Revisited cover on the Going Electric panel grows into the album page's header
- voiceover: "Step one is still the app shell…"
- blueprint: compose
- focal: the cover growing into the header
- roles: phone (data-artifact="#/era/electric → #/album/highway-61-revisited") = foreground · address bar above the phone = supporting · label "View Transitions" pinned on the moving cover (data-gloss="view-transition-name") = supporting

Scene 1 (0–6s): anchor "Step 1 · The app shell"; the phone on the Going Electric panel (black and amber theme), three typographic covers; address `#/era/electric`.
Scene 2 (6–14s): a tap on Highway 61 Revisited; the cover tile scales and moves up into the album page's header as the page fills in behind it; the address becomes `#/album/highway-61-revisited`.
Scene 3 (14–20s): label "back: it shrinks home" beside the phone. Hold.

## Frame 4 — What you would see differ

- type: feature_showcase
- plan_step: 1
- layout: before-after
- duration: 29.029s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/42-q1-compare.html
- defines: placeholder
- scene: three phones side by side, A, B, C, each opening the Greenwich Village panel with the 1963 photograph, at the same moment; a row under each for "photo", "between views", "map and players"
- voiceover: "All three ways can look the same…"
- blueprint: compose
- focal: the three phones loading the same photo differently
- roles: three phones labelled A · Plain files, B · Vite, C · Astro = foreground · the 1963 photograph (assets/photos/1963-march-on-washington.jpg) in each = foreground · three short rows under each phone = supporting

Scene 1 (0–8s): three phones appear with their labels; each shows the Greenwich Village panel's title and an empty photo frame.
Scene 2 (8–16s): A's photo frame stays empty, then the full photo pops in at once at ~13 s; B's and C's frames show a blurred copy of the photo at once (CSS blur on the same image, this is the placeholder demo) that sharpens at ~11 s. Under each, row "photo": A "full size, pops in late" · B "blurred, then sharp" · C "blurred, then sharp".
Scene 3 (16–22s): row "between views": A "by hand" · B "one page, keeps your place" · C "a new page each time".
Scene 4 (22–28s): row "map and players": A "by hand" · B "packages from npm" · C "added as pieces". Hold.

## Frame 5 — Question 1 · How is the site built?

- type: cta
- plan_step: 1
- decision: q1
- layout: cards
- duration: 19.541s
- transition_in: push-slide UP
- status: outline
- src: compositions/frames/04-q1-build.html
- question: How should the site be built?
- option_a: Plain files, no build step
- option_b: Vite with TypeScript
- option_c: Astro, a page per song
- why_a: Nothing to build or install; photos load at full size and every polish is by hand.
- why_b: One page built into plain files; photos get sizes and a placeholder, the map and players come from npm.
- why_c: A real page per album and song that search engines find; the swipe and the map reload between pages.
- option_a_more: The folder is the site. A 2 MB photograph appears in one piece after a moment on a phone; the map and players are wired by hand.
- option_b_more: npm run build writes dist/, plain files for GitHub Pages. Each photo is built in three sizes with a blurred placeholder.
- option_c_more: Astro builds one page per album and song with the same photo handling as B; covers morph between pages with its transitions.
- recommended: b
- question_more: All three can look the same; the look is step 3's themes and photographs. They differ in how photos load, how views change, and how much of the polish is by hand.
- scene: three option cards under the heading; B carries the coral border
- voiceover: "So, question one, asked again…"
- blueprint: compose
- focal: the three option cards
- roles: eyebrow "Question 1 · step 1" = supporting · heading (data-question) = foreground · three cards (data-option a/b/c), each with a one-line trade-off = foreground · RECOMMENDED badge on B = supporting

Scene 1 (0–8s): eyebrow and heading; card A: "Plain files, no build step" / "photos pop in late".
Scene 2 (8–15s): card B: "Vite with TypeScript" / "placeholders, npm packages".
Scene 3 (15–21s): card C: "Astro, a page per song" / "found by search engines".
Scene 4 (21–26s): B gets the coral border and "RECOMMENDED". Hold.

## Frame 6 — If A: plain files

- type: benefit_highlight
- branch: q1=a
- plan_step: 1
- layout: files
- duration: 6s
- transition_in: crossfade
- status: outline
- src: compositions/frames/05-q1-a.html
- scene: a folder tree, index.html, app.css, app.js, data/; "every polish by hand"
- voiceover: "With A, step one is three files…"
- blueprint: compose
- focal: the folder tree
- roles: tree = foreground · eyebrow "If A · step 1" = supporting · label "every polish by hand" = supporting

Scene 1 (0–6s): the tree draws line by line; label pins. Hold.

## Frame 7 — If B: Vite

- type: benefit_highlight
- branch: q1=b
- plan_step: 1
- layout: files
- duration: 6s
- transition_in: crossfade
- status: outline
- src: compositions/frames/06-q1-b.html
- scene: the tree with package.json, src/app.ts, src/views/, data/; an arrow `npm run build` to `dist/`
- voiceover: "With B, step one is a Vite project…"
- blueprint: compose
- focal: the tree and the build arrow
- roles: tree = foreground · arrow to dist/ = supporting · eyebrow "If B · step 1" = supporting

Scene 1 (0–6s): tree draws; the arrow `npm run build` → `dist/`. Hold.

## Frame 8 — If C: Astro

- type: benefit_highlight
- branch: q1=c
- plan_step: 1
- layout: files
- duration: 6s
- transition_in: crossfade
- status: outline
- src: compositions/frames/07-q1-c.html
- scene: a fan of real pages, one per album and song
- voiceover: "With C, step one becomes an Astro project…"
- blueprint: compose
- focal: the fan of pages
- roles: three page cards (/song/like-a-rolling-stone/, /song/tangled-up-in-blue/, /album/blonde-on-blonde/) = foreground · eyebrow "If C · step 1" = supporting

Scene 1 (0–6s): the cards fan out; label "a page per album and song". Hold.

## Frame 9 — Step 2 · The dataset

- type: feature_showcase
- plan_step: 2
- chapter_start: Data, eras and pages
- layout: code
- duration: 17.237s
- transition_in: cut
- status: outline
- src: compositions/frames/08-step2-dataset.html
- scene: the data/ folder's seven files, each with one plain line, then one song record on the code slab with its new fields: spotify, youtube, lyrics
- voiceover: "Step two, the dataset…"
- blueprint: compose
- focal: the song record with its media fields
- roles: file list = supporting · code slab (data-artifact="data/songs.json") = foreground · pinned words "player", "video", "lyrics" on the three new fields = supporting

Scene 1 (0–8s): anchor "Step 2 · The dataset"; seven files type down, each with a plain line: eras · moments · albums · songs · connections · threads · photos.
Scene 2 (8–20s): the slab types:
```
{ "id": "blowin-in-the-wind",
  "album": "freewheelin",
  "spotify": "…",
  "youtube": null,
  "lyrics": "https://www.bobdylan.com/songs/blowin-wind/" }
```
the three last fields wipe in one by one with their pinned words.
Scene 3 (20–26s): under the slab: "no lyrics copied: a link to the official page". Hold.

## Frame 10 — Step 2 · The data check, now for credits

- type: feature_showcase
- plan_step: 2
- defines: The data check
- layout: terminal
- duration: 10.261s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/09-step2-check.html
- scene: the data check passes with photos counted, then fails on a photo with no licence
- voiceover: "The data check also checks credits…"
- blueprint: compose
- focal: the terminal run
- roles: terminal (data-artifact="node tools/check-data.mjs") = foreground · chip "a photo with no credit" tied to the failing line = supporting

Scene 1 (0–6s): `$ node tools/check-data.mjs` → `✓ 11 eras, 39 albums, 212 songs, 140 connections, 12 threads, 31 photos`.
Scene 2 (6–14s): second run: `✗ photos.json #7: "newport-1965" has no licence` / `exit 1`; the chip lights and ties to the line. Hold.

## Frame 11 — Quick check · Less motion

- type: social_proof
- quiz: k1
- plan_step: 1
- layout: cards
- duration: 12.5s
- transition_in: cut
- status: outline
- src: compositions/frames/43-k1.html
- question: Your phone is set to reduce motion. You tap a cover on the timeline. What do you see?
- option_a: The cover grows into the album page
- option_b: The album page fades in, nothing grows
- option_c: The album page appears with no change at all
- answer: b
- explain: A phone that asks for less motion gets a plain cross-fade between views instead of the grow.
- option_a_why: The grow is the motion the phone asked to avoid.
- option_b_why: Right: reduced motion swaps the grow for a cross-fade.
- option_c_why: The view still changes gently; only the movement is dropped.
- walk_me_through: The phone's reduced-motion setting tells the site to skip movement. The shell still animates the change, but as a cross-fade, so the album page fades in over the timeline and nothing grows or slides.
- explained_at: 3
- scene: a quick check: a small settings row "Reduce motion · on", three cards
- voiceover: "A quick check, a question to see whether the plan does what you expect…"
- blueprint: compose
- focal: three cards
- roles: settings row = supporting · heading (data-question) = foreground · cards = foreground

Scene 1 (0–5s): "QUICK CHECK · STEP 1"; a small settings row "Reduce motion · on".
Scene 2 (5–12s): heading and three cards. Hold from 8s.

## Frame 12 — Step 3 · Each era its own look

- type: feature_showcase
- plan_step: 3
- defines: The era timeline, theme
- layout: wall
- duration: 33.487s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/16-step3-timeline.html
- scene: four phones in a row, each an era panel in its own theme: Greenwich Village with the 1963 photograph, Going Electric with no photo and its title set huge, Gospel with the 1980 photograph, Late Renaissance with the 2010 photograph; each photo's credit under it
- voiceover: "Step three is the one you asked to change most…"
- blueprint: compose
- focal: the four themed panels
- roles: four phones (data-artifact="#/era/<id>") = foreground · photo credits = supporting · era name under each phone = supporting

Scene 1 (0–7s): anchor "Step 3 · The era timeline"; phone 1: Greenwich Village 1961–1964, paper and ink, typewriter title, the 1963 photo with "Rowland Scherman · public domain".
Scene 2 (7–14s): phone 2 slides in: Going Electric 1965–1966, black and amber, "GOING ELECTRIC" huge in condensed caps, no photo.
Scene 3 (14–21s): phone 3: Gospel 1979–1981, deep red and gold, Garamond title, the 1980 photo, "Jean-Luc Ourlin · CC BY-SA 2.0".
Scene 4 (21–30s): phone 4: Late Renaissance 1997–2012, shadow and brass, worn italic, the 2010 photo, "Alberto Cabello · CC BY 2.0". Hold.

## Frame 13 — Question 2 · Where do the photographs come from?

- type: cta
- plan_step: 3
- decision: q2
- layout: cards
- duration: 23.019s
- transition_in: push-slide UP
- status: outline
- src: compositions/frames/44-q3-photos.html
- question: Where should the era photographs come from?
- option_a: Wikimedia Commons, free-licensed
- option_b: Licensed press photographs
- option_c: No photographs
- why_a: Free to use with credit shown; coverage is uneven, and some eras get one photo or none.
- why_b: Every era covered, but a fee per image, often yearly, and a licence that may not allow a public site.
- why_c: Each era's theme alone, with the covers; the plainer look the review asked to avoid.
- option_a_more: Photos are copied into the site with caption, photographer and licence under each, as the licence requires.
- option_b_more: A photo agency's images; the licence decides where and how long they can be shown.
- option_c_more: The panels keep their themes and covers, and open on the era's title instead of a photograph.
- recommended: a
- scene: three cards, A showing a small credited photo, B a fee line, C a title-only panel
- voiceover: "Question two…"
- blueprint: compose
- focal: three cards
- roles: eyebrow "Question 2 · step 3" = supporting · heading = foreground · cards = foreground

Scene 1 (0–8s): heading; card A with a small crop of the 1984 photograph and "Xavier Badosa · CC BY 2.0".
Scene 2 (8–14s): card B: "a fee per image, per year".
Scene 3 (14–19s): card C: a small panel with only "GOSPEL" in its theme.
Scene 4 (19–24s): A coral, "RECOMMENDED". Hold.

## Frame 14 — If A: Commons

- type: benefit_highlight
- branch: q2=a
- plan_step: 3
- layout: wall
- duration: 6s
- transition_in: crossfade
- status: outline
- src: compositions/frames/45-q3-a.html
- scene: the eleven eras with a photo count under each, some 0
- voiceover: "With A, each era shows what Commons has…"
- blueprint: compose
- focal: the eleven counts
- roles: era names with counts = foreground · eyebrow "If A · step 3" = supporting

Scene 1 (0–6s): eleven short era names with counts draw; the zeros are marked "theme only". Hold.

## Frame 15 — If B: licensed

- type: benefit_highlight
- branch: q2=b
- plan_step: 3
- layout: list
- duration: 6s
- transition_in: crossfade
- status: outline
- src: compositions/frames/46-q3-b.html
- scene: a licence summary card: images, term, renewal
- voiceover: "With B, every era gets photos…"
- blueprint: compose
- focal: the licence card
- roles: card with three rows "images: 1 per era" · "term: 1 year" · "renew: every year" = foreground · eyebrow "If B · step 3" = supporting

Scene 1 (0–6s): rows type in. Hold.

## Frame 16 — If C: no photographs

- type: benefit_highlight
- branch: q2=c
- plan_step: 3
- layout: screen
- duration: 6s
- transition_in: crossfade
- status: outline
- src: compositions/frames/47-q3-c.html
- scene: the Gospel panel in its theme with no photo
- voiceover: "With C, the panels keep their themes…"
- blueprint: compose
- focal: the themed panel
- roles: phone = foreground · eyebrow "If C · step 3" = supporting

Scene 1 (0–6s): panel draws. Hold.

## Frame 17 — Step 4 · The song page

- type: feature_showcase
- plan_step: 4
- defines: Album and song pages
- layout: screen
- duration: 21.056s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/18-step4-pages.html
- scene: two phones: Blowin' in the Wind's song page in the Greenwich Village theme (note, Lyrics row, Spotify Play row, one connection card), and New Morning's album page where the cover failed and a drawn cover stands in
- voiceover: "Step four, the album and song pages…"
- blueprint: compose
- focal: the song page's Lyrics row and Play row
- roles: right phone song page (data-artifact="#/song/blowin-in-the-wind") = foreground · left phone album page with the drawn cover = supporting · label "drawn when the real cover fails" = supporting

Scene 1 (0–8s): anchor "Step 4 · Album and song pages"; right phone draws the song page: title, Freewheelin' 1963, note "Written in ten minutes at the Commons coffeehouse, April 1962."
Scene 2 (8–16s): the Lyrics row "Lyrics on bobdylan.com ↗" lands, then a row "▶ Play · Spotify", then the card "Borrowed the tune of — No More Auction Block".
Scene 3 (16–24s): left phone: New Morning, 1970, its cover tile drawn in the Basement and Country theme with the label "drawn when the real cover fails". Hold.

## Frame 18 — Quick check · An era with no photo

- type: social_proof
- quiz: k2
- plan_step: 3
- layout: cards
- duration: 9.5s
- transition_in: cut
- status: outline
- src: compositions/frames/48-k2.html
- question: The Basement and Country era has no photo the site can use. What does its panel open on?
- option_a: A grey box where the photo goes
- option_b: Its title, set large in its theme
- option_c: A photo from the nearest era
- answer: b
- explain: An era with no usable photo opens on its title set large in the era's own theme, as Going Electric did.
- option_a_why: The site never shows an empty frame; a missing photo is designed for.
- option_b_why: Right: the theme carries the panel, the way Going Electric's huge title did.
- option_c_why: A photo from another era would show the wrong years.
- walk_me_through: Basement and Country has no photo in photos.json. The panel looks for one, finds none, and opens on its title set large in its own theme, the same way the Going Electric panel did.
- explained_at: 12
- scene: a quick check with the era name and three cards
- voiceover: "Check on step three…"
- blueprint: compose
- focal: three cards
- roles: heading = foreground · cards = foreground

Scene 1 (0–4s): "QUICK CHECK · STEP 3"; "Basement and Country · 1967–1970 · 0 photos".
Scene 2 (4–12s): heading and cards. Hold from 8s.

## Frame 19 — Question 3 · What sits beside the lyrics link?

- type: cta
- plan_step: 4
- decision: q3
- layout: cards
- duration: 20.331s
- transition_in: push-slide UP
- status: outline
- src: compositions/frames/49-q2-lyrics.html
- question: What should a song page show beside its lyrics link?
- option_a: The link only
- option_b: The link and the first line
- option_c: The link and a preview in our words
- why_a: Nothing quoted; the official page has the words.
- why_b: A real taste of the song, but quoting a lyric needs the publisher's permission.
- why_c: A one-sentence preview written for the site; no lyric is quoted.
- option_a_more: "Lyrics on bobdylan.com ↗" and nothing more.
- option_b_more: The song's first line above the link; even one line needs permission, and Dylan's publisher enforces it.
- option_c_more: For Blowin' in the Wind: "Nine questions about war and freedom, and an answer that won't stay still."
- recommended: c
- scene: three cards, each showing the Lyrics row as it would look
- voiceover: "Question three…"
- blueprint: compose
- focal: three cards
- roles: eyebrow "Question 3 · step 4" = supporting · heading = foreground · cards = foreground

Scene 1 (0–7s): heading; card A: "Lyrics on bobdylan.com ↗".
Scene 2 (7–14s): card B: a slot labelled "first line, quoted · needs permission" above the link (the line itself is not shown).
Scene 3 (14–19s): card C: "Nine questions about war and freedom, and an answer that won't stay still." above the link.
Scene 4 (19–24s): C coral, "RECOMMENDED". Hold.

## Frame 20 — If A: the link only

- type: benefit_highlight
- branch: q3=a
- plan_step: 4
- layout: screen
- duration: 6s
- transition_in: crossfade
- status: outline
- src: compositions/frames/50-q2-a.html
- scene: the song page's Lyrics row, the link alone
- voiceover: "With A, the row is just the link."
- blueprint: compose
- focal: the Lyrics row
- roles: phone = foreground · eyebrow "If A · step 4" = supporting

Scene 1 (0–6s): row draws. Hold.

## Frame 21 — If B: the first line

- type: benefit_highlight
- branch: q3=b
- plan_step: 4
- layout: list
- duration: 6s
- transition_in: crossfade
- status: outline
- src: compositions/frames/51-q2-b.html
- scene: a to-do card: "ask the publisher for permission · 212 songs"
- voiceover: "With B, the site needs permission first…"
- blueprint: compose
- focal: the permission card
- roles: card = foreground · eyebrow "If B · step 4" = supporting

Scene 1 (0–6s): card draws. Hold.

## Frame 22 — If C: a preview in our words

- type: benefit_highlight
- branch: q3=c
- plan_step: 4
- layout: code
- duration: 6s
- transition_in: crossfade
- status: outline
- src: compositions/frames/52-q2-c.html
- scene: songs.json gains a "preview" field
- voiceover: "With C, every song in the dataset gains a one-sentence preview…"
- blueprint: compose
- focal: the new field
- roles: code slab (data-artifact="data/songs.json") with `"preview": "Nine questions about war and freedom, and an answer that won't stay still."` added = foreground · eyebrow "If C · step 4" = supporting

Scene 1 (0–6s): the field wipes in as an added line. Hold.

## Frame 23 — Step 5 · The map, on a phone too

- type: feature_showcase
- plan_step: 5
- chapter_start: Connections, listening, checks
- defines: A thread
- layout: before-after
- duration: 20.672s
- transition_in: cut
- status: outline
- src: compositions/frames/53-step5-map.html
- scene: a phone on a thread card, Masters of War, with a Cards | Map toggle; tap Map; the screen becomes a map centred on Masters of War with about 15 dots; a drag brings in more
- voiceover: "Step five, threads and the map…"
- blueprint: compose
- focal: the phone switching from cards to map
- roles: phone (data-artifact="#/thread/borrowed-tunes → #/map/masters-of-war") = foreground · label "about 15 dots: two connections out" = supporting · a laptop outline at right with cards and map side by side = supporting

Scene 1 (0–7s): anchor "Step 5 · Threads and the map"; the phone shows card 3 of 9, "Masters of War · 1963", with a toggle "Cards | Map" at the top.
Scene 2 (7–16s): a tap on Map; the card fades and a map draws: Masters of War in the middle, Nottamun Town joined to it, Blowin' in the Wind, Girl from the North Country, A Hard Rain's a-Gonna Fall, Song to Woody around it; label "about 15 dots: two connections out".
Scene 3 (16–24s): a drag left shifts the map and two more dots arrive; a small laptop outline at right shows cards and map side by side, "above 768 px". Hold.

## Frame 24 — Quick check · A cover that fails

- type: social_proof
- quiz: k3
- plan_step: 4
- layout: cards
- duration: 9.4s
- transition_in: cut
- status: outline
- src: compositions/frames/54-k3.html
- question: The Cover Art Archive does not answer for Oh Mercy's cover. What does its album page show?
- option_a: A broken image
- option_b: A cover drawn in its era's theme
- option_c: No cover, the title only
- answer: b
- explain: When the real cover fails to load, the page draws a typographic cover in the era's theme, so nothing shows broken.
- option_a_why: The page catches the failed load and never leaves a broken image.
- option_b_why: Right: a drawn cover stands in, as New Morning's did.
- option_c_why: The page keeps a cover in its place; it just draws it.
- walk_me_through: Oh Mercy's cover request to the Cover Art Archive fails. The album page notices the failed image and draws a cover instead: the title and year set in its era's theme, the way New Morning's was drawn.
- explained_at: 17
- scene: a quick check with a request line "Oh Mercy · failed" and three cards
- voiceover: "Check on step four…"
- blueprint: compose
- focal: three cards
- roles: request line = supporting · heading = foreground · cards = foreground

Scene 1 (0–4s): "QUICK CHECK · STEP 4"; "coverartarchive.org · Oh Mercy · failed".
Scene 2 (4–12s): heading and cards. Hold from 8s.

## Frame 25 — Step 6 · Listen and watch on the page

- type: feature_showcase
- plan_step: 6
- defines: The phone check
- layout: screen
- duration: 18.027s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/55-step6-play.html
- scene: a song page whose player row loads only on tap; then the Newport 1965 moment with its YouTube clip, loading on tap; then a one-line note on search and the phone check
- voiceover: "Step six…"
- blueprint: compose
- focal: the player rows loading on tap
- roles: left phone song page Like a Rolling Stone (data-artifact="#/song/like-a-rolling-stone") = foreground · right phone moment Newport 1965 (data-artifact="#/moment/newport-1965") = foreground · label "loads after a tap" = supporting · a small strip "search and the phone check: as before" = supporting

Scene 1 (0–8s): anchor "Step 6 · Listening, watching, checks"; left phone: "▶ Play · Spotify" row; a tap; the row expands into a player bar "Like a Rolling Stone · 6:13".
Scene 2 (8–17s): right phone: the moment page "1965 · Newport Folk Festival: plays electric" with a video frame "▶ YouTube · youtube-nocookie.com"; a tap; the frame shows "playing".
Scene 3 (17–24s): strip "search and the phone check: as before". Hold.

## Frame 26 — Quick check · The map on a phone

- type: social_proof
- quiz: k4
- plan_step: 5
- layout: cards
- duration: 9.8s
- transition_in: cut
- status: outline
- src: compositions/frames/56-k4.html
- question: On a phone you're on Blowin' in the Wind's card in a thread. You tap Map. Where does the map open?
- option_a: The whole map, every song at once
- option_b: Centred on Blowin' in the Wind and its neighbours
- option_c: On the first song of the thread
- answer: b
- explain: The phone's map opens on the song you were on and the songs two connections out; you drag to see more.
- option_a_why: All 210 dots at once would be too small to tap on a phone.
- option_b_why: Right: it opens on the current song's neighbourhood.
- option_c_why: The map follows the card you were on, not the thread's start.
- walk_me_through: You were on Blowin' in the Wind. Map opens centred on it, with the songs one and two connections away, No More Auction Block among them, about fifteen dots. Dragging brings in the rest.
- explained_at: 23
- scene: a quick check with a small card "Blowin' in the Wind · 2 of 9" and a toggle
- voiceover: "Check on step five…"
- blueprint: compose
- focal: three cards
- roles: small card and toggle = supporting · heading = foreground · cards = foreground

Scene 1 (0–4s): "QUICK CHECK · STEP 5"; the small card and the "Cards | Map" toggle.
Scene 2 (4–12s): heading and cards. Hold from 8s.

## Frame 27 — Quick check · Never tapping Play

- type: social_proof
- quiz: k5
- plan_step: 6
- layout: cards
- duration: 9.8s
- transition_in: cut
- status: outline
- src: compositions/frames/57-k5.html
- question: You open Tangled Up in Blue's page and never tap Play. What does the page load from Spotify?
- option_a: The player, ready to go
- option_b: Nothing
- option_c: A 30-second preview
- answer: b
- explain: The Spotify player loads only after a tap, so a page you only read loads nothing from Spotify.
- option_a_why: The player waits for the tap; nothing is fetched before.
- option_b_why: Right: no tap, no request to Spotify.
- option_c_why: A preview plays only once the player has loaded, after a tap.
- walk_me_through: The song page shows a Play row, not the player. Only a tap on Play asks Spotify for its player. You never tap, so the page makes no request to Spotify at all.
- explained_at: 25
- scene: a quick check with a Play row
- voiceover: "And on step six…"
- blueprint: compose
- focal: three cards
- roles: Play row = supporting · heading = foreground · cards = foreground

Scene 1 (0–4s): "QUICK CHECK · STEP 6"; a row "▶ Play · Spotify" untapped.
Scene 2 (4–12s): heading and cards. Hold from 8s.

## Frame 28 — The plan, with your choices

- type: cta
- plan_questions: 1, 2, 3
- layout: rail
- duration: 9s
- transition_in: cut
- status: outline
- src: compositions/frames/41-ending.html
- scene: the rail of six steps, each with its choice slot filled by the player
- voiceover: "That's version two…"
- blueprint: compose
- focal: the rail with choices
- roles: rail (slots carry data-plan-step, an empty .d span each) = foreground · the ask = supporting

Scene 1 (0–4s): all six slots fill.
Scene 2 (4–10s): the ask: "Draw on any step to leave a note, / or approve this six-step plan." Hold still.
