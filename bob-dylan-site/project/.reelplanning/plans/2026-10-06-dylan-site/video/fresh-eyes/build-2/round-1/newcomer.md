# Fresh eyes: newcomer · round 1 · stamp f2170fd8cc00

- N1 · scene 2 · "Step two needs step one's folder": I can't tell which folder this is or why the dataset needs it. My guess is that `data/` sits inside the site folder that step one creates, so step two can't start until that folder exists. It matters because this is the only dependency the overview names, and as said it sounds like step two uses something of step one's beyond a place to put files.
  - Answer: kept: step one makes the site's folder, and the dataset lives in it as `data/`; scene 2 says step two needs that folder and nothing else from step one.

- N2 · scene 3 · "four tabs at the bottom" (Eras · Threads · Search · About): the narration doesn't name the tabs, and the video never says what "About" shows. Eras, Threads and Search each get a step later, but About gets nothing. My guess is a static page about the site and its sources. Which step builds it, and does the phone check cover it?
  - Answer: kept: the About view is part of step one's shell (`#/about`: sources, and what the site leaves out, such as lyrics), shown in the guide's interface beside the video; the phone check opens every view, About included.

- N3 · scene 4 · "/song/like-a-rolling-stone/" and "a framework to learn": card C shows an address with no # in it, right after scene 3 taught that the view lives after the #. Nothing explains the change. My guess is that with Astro every song is a real page at its own path, so the # route goes away. "Framework" isn't explained either. I took it to mean Astro's own way of laying out a project, which you have to learn. You need both to see what C actually costs.
  - Answer: kept: card C's address without a # is the point of option C, a real page per song; the question's full text says it changes how links look, and "a framework to learn" is the cost named on the card.

- N4 · scene 11 · "the sixteen landmark albums written in full": I don't know who picks the sixteen "landmark" albums, which ones they are, or what "written in full" adds over the other twenty-three. My guess is that landmarks get a "why it matters" text and a note on every song, and the others get titles only. That decides how much the recommended option A actually contains, so a viewer can't really compare A with B without it.
  - Answer: kept: option A's full text, under the card's More, names the landmarks (Freewheelin', Highway 61 Revisited, Blood on the Tracks, Time Out of Mind …) and says what full means: 6–8 songs and full notes against 2–3 songs.

- N5 · scene 13 · "the strip still shows all eleven eras": "the strip" isn't introduced until scene 16 (step three), so here it means nothing. The short labels on screen are new too: "Village", "Tracks", "Gospel", "'80s", "Roots", "Renaissance", "Standards", "Rough". Before this, only Duluth and Hibbing, Going Electric and Rough and Rowdy had been named. My guess is these are short names for the eleven eras, and the big digits are how many albums each era would get under B. Nothing on screen says the digits are album counts, though, and nobody says Hibbing and Standards would show no album at all.
  - Answer: fixed: scene 13's label now says its numbers are albums per era; kept: the strip is the timeline's row of eras, and the scene shows it as that row with every era named.

- N6 · scene 18 · "Themes" (chips "the road", "America"): themes appear on the song page with no word on where they come from or what tapping one does. Scene 8 listed five files (eras, moments, albums, songs, links) and no themes. My guess is a list field on each song, which scene 36 later hints at. Can you tap a theme to see other songs with it, or is it a label only?
  - Answer: kept: themes are a field on each song (step 2 in the guide), and scene 18 says the page lists them; tapping one searching for it is step 4's interface in the guide.

- N7 · scene 18 · "He played it Hendrix's way from 1974 on": the narration says tapping a card opens "the other song's page", but this second card has no other song I can see. Does it open Hendrix's version again, a Dylan live recording, or nothing? Its kind also isn't one I could match to "covered by", "re-recorded" and the rest. Without that, a viewer can't tell what every connection card is promised to do.
  - Answer: kept: the second card is a re-recorded connection to his own later version; its kind is in the guide's dataset block, and the video names only the kinds it needs.

- N8 · scene 20 · the drawn covers lay out the title and year differently each time (year at the top, title in the middle, title bottom-right). The narration only says "its title, set in the electric era's colour". I guess each era or album gets its own layout. Is that variety part of option A, and who designs it?
  - Answer: kept: a different layout per era is part of option A, said in its full text under the card's More.

- N9 · scene 21 · "200" (after each album name, beside "coverartarchive.org/release/…/front"): "200" is never explained. My guess is the web code for a request that worked, as opposed to "failed". A newcomer would read it as a count of something.
  - Answer: fixed: scene 21's status now reads "ok" beside "failed".

- N10 · scene 24 · "Following connections" (title of part 3) and "the check that runs at phone size": the part is called Following connections, but it also covers search and the phone check, which aren't about connections. "The check that runs at phone size" is mentioned here before it's described in scene 33. I guessed it means a check that the site works on a phone.
  - Answer: kept: the chapter title names its first idea, and the opener's line says it covers threads, search and the phone check; the check is described in scene 33.

- N11 · scene 25 · "About twelve are written by hand": who writes the threads, and where are they kept? Scene 8 named five JSON files and none of them is for threads. My guess is a sixth file in `data/`. Does the data check cover threads too? The screen also says "card three of nine", but the timeline beside it shows only one entry (Masters of War, 1963), so I couldn't see what the other eight are.
  - Answer: kept: the threads live in `data/threads.json`, named in step 5's interface in the guide; scene 25's axis now shows all nine of the thread's songs.

- N12 · scene 26 · "puts the songs in time order, older first" against Scarborough Fair marked "traditional" with no year: how does the site place a song with no date in time order? My guess is that undated traditional songs always go first. The 1969 card with Johnny Cash is also a second "Girl from the North Country". Is that a separate song record with its own id and page, or the same song shown twice? This shapes how the dataset is written.
  - Answer: kept: a traditional song has no year and sorts first, as older than any recording; the 1969 duet is its own song record (a re-recorded connection), as step 2's example in the guide shows.

- N13 · scene 28 · "step five is the cards, and nothing else": the Threads tab opens straight onto one thread (Borrowed tunes). What does the tab show first: a list of the twelve threads, or the last one you opened? I'd guess a list. Otherwise I can't tell how you would find the other threads.
  - Answer: kept: the Threads tab opens on the list of threads (`#/threads`), as step 5's interface in the guide says; scene 28 shows one thread opened from it.

- N14 · scene 29 · "step five draws the map instead": does "instead" mean the twelve hand-written threads and their cards go away under B, and only the map remains? The phone shows only dots under the Threads tab. I'd guess yes, but then B also throws away the hand-written threads. The narration doesn't say so, and that's a big part of what you lose with B.
  - Answer: kept: under B the map replaces the cards, which the question's full text says; that is B's cost, stated on the card.

- N15 · scene 33 · "`npm test`": with option A, scene 5 promised "nothing to install" and showed no `package.json`, but `npm test` needs one. Driving Chrome from a script ("run by a script with no window") usually needs a package installed too. So does A still install something just for the checks? The picture also says "9 views", and nothing says which nine. "An error" isn't explained either: an error in the page's script, or a page that fails to load?
  - Answer: fixed: the plan's step 6 now says the checks install one development tool, `puppeteer-core`, through a `package.json`, and the site itself loads nothing from it; scenes 4 and 5 now say "nothing to install to run it", and scene 5's narration says only the checks install a tool.

- N16 · scene 34 · "cookies": the narration lists cookies as a cost of the Spotify player without saying why it matters. My guess is that the site would then need a cookie notice, or would track visitors. Without that, a viewer can't weigh it against option A.
  - Answer: kept: cookies matter because the site would then set them for a third party; the card names the cost, and the question's full text is beside the video.

- N17 · scene 35 · the connection cards here ("Jimi Hendrix / covered it, 1967", "Ballad of a Thin Man / same theme") have no sentence of why. Scene 8 said every connection has "one sentence of why", and scene 18's cards showed one. Is this a shorter card design, or do some connections have no reason? I'd guess the sentence was left out to save space, but it's not clear which is the real design.
  - Answer: kept: scene 35 is a branch scene about the Listen row, so its cards are shortened; scene 18 shows the full card with its why.

- N18 · scene 37 · "With C, the song page ends at its connections": the C page drops more than the Listen row. The note ("Recorded June 1965…") and the "America" theme are gone too, and a new "Album · Highway 61 Revisited · 1965 · track 1" card shows up. Does choosing C really change those, or is this just another mock-up? I'd guess it's only a different picture. As shown, though, it suggests C changes more than listening.
  - Answer: fixed: scene 37's phone is now scene 35's page with only the Listen row gone.

- N19 · scene 40 · "it's two taps: the song, then its connection card": two taps starting where? From the home view you'd have to find the era or album first, or search. My guess is two taps from the album page, or from search results. "Two taps" is the video's closing argument against Wikipedia, so where you start counts.
  - Answer: kept: two taps from the song's page, which is where the comparison with Wikipedia's article page starts.

- N20 · scene 41 · "each step showing what you picked" and "Draw on any step to leave a note": I couldn't tell what "each step showing what you picked" means. My guess is that the plan's steps update to match your answers to the five questions. "Draw on any step" doesn't say where or how you draw: on the video, on the step list, with what tool? Neither phrase is in the glossary. A viewer needs this to know how to answer.
  - Answer: kept: the review page fills each step with your pick and holds the drawing tools; they are the player's, beside the video, not part of the video's frames.
