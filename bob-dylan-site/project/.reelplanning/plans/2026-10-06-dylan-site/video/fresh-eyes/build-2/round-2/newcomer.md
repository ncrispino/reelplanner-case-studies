# Fresh eyes: newcomer · round 2 · stamp 43ef65439f8b

- N1 · scene 2 · "Step two needs step one's folder": which folder, and why does the dataset need it? I guessed it means `data/` sits inside the site folder that step one creates, but `data/` isn't shown until scene 5, so at this point the dependency arrow means nothing to me.
  - Answer: kept: step one makes the site's folder and the dataset lives in it as `data/`; the guide beside the video shows step one's interface with `data/`.

- N2 · scene 3 · "four tabs at the bottom" / "About": the phone shows Eras, Threads, Search and About. Eras, Threads and Search each get a step later, but "About" is never said to be a view or given any content. I guessed it is a static credits/sources page. It matters because it is one of the four tabs the phone check has to cover.
  - Answer: kept: the About view is part of step one's shell (`#/about`: sources, and what the site leaves out), listed in step one's interface in the guide.

- N3 · scene 4 · "npm run build → dist/" and "/song/like-a-rolling-stone/": both are on cards B and C while I'm being asked to choose, but they are only explained in scenes 6 and 7, after the question. I couldn't tell what `dist/` is, or how a `/song/...` address differs from the `#/song/...` route I had just learned.
  - Answer: kept: the cards name each option's cost in a line; the branch scenes after the question show what each line means once you pick, and each card's More gives the full words before you answer.

- N4 · scene 4 · "a real page for every album and song that search engines can find": the narration implies that with option A search engines cannot find the album and song pages, but it never says so or why (is it because of the # route?). That is the main thing option A gives up, so I can't weigh A against C without it.
  - Answer: kept: option A's cost, that a `#/song/…` link is not a separate page a search engine indexes, is in its full text under More.

- N5 · scene 5 · "Only the checks install a tool": which checks, and which tool? The data check and the phone check don't appear until scenes 9 and 33, and the tool is never named (I guessed headless Chrome, or whatever `npm test` needs). Without that, "nothing to install" for option A reads as only half true.
  - Answer: kept: the checks are named in the plan's step 6, and the tool, `puppeteer-core`, is named there; scene 5 says only that running the site needs nothing.

- N6 · scene 7 · "when you build": with C, what runs the build and where do the pages go? B named `npm run build` and `dist/`, but C names neither. I also wondered whether C's `/song/.../` addresses replace the # routes, which would change the answer to the scene 10 check.
  - Answer: kept: under C, Astro's own build writes the pages; the question's full text says so, and scene 7 shows the result.

- N7 · scene 8 · "the site describes songs and links out": links out to where? This only becomes clear in scene 34 (Spotify, Apple Music, YouTube). Here it sounds like a decision already made, but scene 34 then presents it as an open question.
  - Answer: kept: "links out" is question 5's subject; scene 8 says only that lyrics are not quoted.

- N8 · scene 11 · "the sixteen landmark albums written in full": who decides which 16 are landmarks, and what does "in full" add? On the other 23 albums under A, what is missing: the "Why it matters" text, the song notes, the connections? I also couldn't read the bar chart: solid thick bars, thin grey bars and hollow bars have no legend (I guessed full, light and absent).
  - Answer: kept: option A's full text under More names the landmarks and what full means (6–8 songs and full notes against 2–3 songs).

- N9 · scene 13 · "the strip still shows all eleven eras": "the strip" isn't introduced until scene 16 ("a strip on top shows all eleven eras"), so here I didn't know what it was. The short labels "Village", "Tracks", "'80s", "Roots", "Renaissance", "Standards" are also never given as full era names; by now only four eras have been named.
  - Answer: kept: scene 13 names every era column, so the strip reads as the row of eras before scene 16 explains swiping it.

- N10 · scene 15 · "Part 2 of 3": the glossary says the player shows "Chapter 2 of 4", but the screen says "Part 2 of 3". Are parts and chapters the same thing, and are there three or four?
  - Answer: kept: the glossary's "Chapter 2 of 4" is an example of the player's label; this video has three, and its openers say "Part 2 of 3".

- N11 · scene 18 · "He played it Hendrix's way from 1974 on": the narration says tapping a card opens "the other song's page", but this second card has no other song. What does it open, and which of the six connection kinds is it? None of "borrowed tune, answer, rewrite, covered by, re-recorded, same theme" obviously fits.
  - Answer: kept: the card opens Dylan's own 1974 recording, a re-recorded connection, as step 2's kinds in the guide list.

- N12 · scene 20 · the drawn covers: each one puts the title and year in a different place (year on top, title at the bottom, centred, right-aligned). Nothing says what decides the layout. Is it fixed per era, random, or hand-set per album? It matters because this is the option being recommended.
  - Answer: kept: a different layout per era is part of option A, said in its full text under More.

- N13 · scene 24 · "Following connections": the part is titled for connections, but the narration says it also covers search and the phone check (step 6). I expected step 6 to be a separate part.
  - Answer: kept: the opener's line says the chapter covers threads, then search and the phone check.

- N14 · scene 25 · "About twelve are written by hand" (the threads): where are they kept? Scene 8 listed exactly five dataset files (eras, moments, albums, songs, links) and none holds threads, yet the glossary says the dataset holds threads. Does the data check also check threads?
  - Answer: kept: threads live in `data/threads.json`, named in step 5's interface in the guide.

- N15 · scene 25 · the vertical scale on the right ("Borrowed tunes · 1962–2006", with ticks at 1962, 1967, 1993, 2006): it is never explained. I guessed the ticks are the nine cards placed by year, with the red dot for the current card, but most ticks are unlabelled and it isn't clear whether this is part of the site or only a diagram in the video.
  - Answer: kept: the axis is titled "Borrowed tunes · 1962–2006" and its ticks are the thread's nine songs by year; the current card is labelled.

- N16 · scene 26 · "Tune from" and "Sung again, 1969 with Johnny Cash": these card wordings don't match the connection kinds given earlier (I guessed borrowed tune and re-recorded). Is the 1969 duet its own song record in the dataset? Also, where does a thread you start appear (the Threads tab? its own address?), and can it be shared like the hand-written ones?
  - Answer: kept: the card wording is the site's plain words for the kinds (borrowed tune, re-recorded), which scene 18 shows with its why line.

- N17 · scene 29 · "step five draws the map instead": under B, what happens to the hand-written threads such as Borrowed tunes? Are they dropped, or still on the Threads tab? I couldn't tell how much of step five B throws away.
  - Answer: kept: under B the map replaces the cards, as the question's full text says; that is B's cost.

- N18 · scene 30 · "wider than seven hundred sixty-eight pixels": scene 27's card C says "768 px and up", but this scene says "wider than 768 px". Which screen gets the map at exactly 768 px (a common tablet width)?
  - Answer: fixed: scene 27's card C now says "wider than 768 px", as scene 30 does.

- N19 · scene 32 · "Search matches titles, albums, years and themes": the results show a "Moments" group (Motorcycle accident), but scene 2 said search finds "eras, albums and songs". What does search actually cover: moments, themes, songs? In this example no song result appears.
  - Answer: fixed: the plan's search groups now include Moments (Eras, Moments, Albums, Songs), matching scene 32.

- N20 · scene 33 · "9 views at 375×812": which nine views? I can count timeline, album, song, thread, search and About, so I guessed the nine are specific example pages. It matters because the check only catches problems on the views it opens.
  - Answer: kept: the nine are one of each view kind with real data (the timeline, an era, an album, a song, the threads list, a thread, search, not found, About): the eight routes in step one's interface in the guide, plus not found.

- N21 · scene 34 · "cookies": named as a cost of option B, but never explained. Why are cookies a problem for this site (consent banners, privacy)? I can't weigh it against the other costs.
  - Answer: kept: cookies matter because the site would set them for a third party; the card names the cost, and the question's full text is beside the video.

- N22 · scene 40 · "it's two taps: the song, then its connection card": two taps starting from where? Getting to the Blowin' in the Wind page in the first place takes a search or a swipe-and-tap through the timeline, so "two taps" seems to leave out the first steps.
  - Answer: kept: two taps from the song's page, which is where Wikipedia's article page starts too.

- N23 · scene 41 · "Draw on any step to leave a note, or approve" / "each step showing what you picked": draw where, and with what? Where do I pick answers to the five questions, and does approving accept the recommended options for any question I haven't answered? Nothing in the video shows where these controls are.
  - Answer: kept: picking answers, drawing and approving are the review page's, beside the video, not part of the video's frames.
