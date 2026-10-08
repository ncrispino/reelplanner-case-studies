# Fresh eyes: newcomer · round 1 · stamp cd4a6fa38d05

- N1 · scene 1 · "631 pages": the screen gives the count but the voice never says it. 11 eras + 39 albums + 216 songs is 266, so I can't tell what the other 365 pages are. My guess is thread, map and search pages, or one map page per song. It matters because the number comes back in scene 20 ("npm run build ✓ 631 pages") as proof that the build passed.
  - Answer: fixed: scene 1's narration now says the 631 pages count a map and a thread page for each song.

- N2 · scene 1 · "the plan you approved": the video never shows or sums up the plan, so I can't judge "instead of what the plan guessed" (scene 5), "the plan allowed" (scene 6) or the off-plan change. I guess it was an earlier written plan with six steps. I would need one line on what it promised.
  - Answer: kept: the reviewer watched and approved the plan video; its steps and answers are the `before:` video, shown under Before you watch.

- N3 · scene 2 · "Step one" / "The app shell": I can't tell whose steps these are or how many there are. I only learn there are six in scene 22. "Step one: every era, album and song is a real page at its own address" doesn't sound like what the glossary calls the app shell ("the one page that holds the site … one view at a time"). Is it one page or many real pages?
  - Answer: kept: the plan's six steps are the `before:` video's; scene 22 lays them out, and each scene names its step.

- N4 · scene 2 · the orange square titled "BLONDE ON BLONDE" (and the orange "HIGHWAY 61 REVISITED" tile in scenes 1, 10, 14): it is called "a cover", but it is a plain coloured block with the title typed on it, not album art. I guessed it was a placeholder. Scene 4 says covers come from the Cover Art Archive, and scene 20 says "the real covers inside the checks" were not done. So are the real covers in the site or not? This is what a user sees first on every album.
  - Answer: fixed: scene 1 now says the covers shown are the site's drawn ones and the real covers load on the site; the video does not reproduce cover art.

- N5 · scene 3 · "the bar": the voice never says which bar. I guessed the bottom row "Eras · Threads · Search · About" (the glossary's app shell mentions "the bottom bar"). The 768 px picture on the right is cropped mid-word ("wed", "klin", "Frankli"), so I couldn't tell what page it shows or see the bar's new place clearly.
  - Answer: fixed: the narration now says "the tab bar", and tab bar is in the terms.

- N6 · scene 3 · "sends you to search with the address's words": the picture shows a search for "blonde on blond", but not the mistyped address that produced it. I also never see the 404 page itself. Does the viewer see a 404 at all, or go straight to search?
  - Answer: fixed: scene 3 shows the mistyped address, `/album/blonde-on-blond/ → search`, above the search it lands on.

- N7 · scene 4 · "exit 0" / "exit 1": these terminal lines are unexplained. I guessed 0 means pass and 1 means fail. A non-programmer would not know.
  - Answer: meaning: exit 0 and exit 1 are now in the terms.

- N8 · scene 4 · "links.json": the voice says "connection" but the file is called links. I guessed links.json holds the connections. Earlier viewers already looked up "connection", so the two names for one thing need saying.
  - Answer: kept: `links.json` is the file that holds the connections; the plan's dataset step names it so.

- N9 · scene 4 · "is not a song id" / "blowin-in-the-wnd": "song id" is never explained. I guessed it is the short name used in the address (like /song/like-a-rolling-stone/), and that the typo was planted on purpose. The picture doesn't say the misspelling is the deliberate break.
  - Answer: fixed: song id is now in the terms; the typo was planted in a scratch copy, as the scene says.

- N10 · scene 4 · "has no licence": the glossary's data check fails on "an id used twice, a connection to a song that does not exist, or an album outside its era's years", and says nothing about photos. So I wasn't sure this failure belongs to the same data check. Also "The dataset" is defined as "hand-written JSON files", but this scene says the track lists come from MusicBrainz. Which is it?
  - Answer: fixed: the glossary's data check row now says it also fails on a photo with no licence or credit, as the plan's step 2 asks.

- N11 · scene 5 · "a fact the writers were sure of": who are "the writers"? The agent, people, or sources? Nothing so far has said who wrote the dataset. It matters because it decides how much I trust the 49 connections.
  - Answer: kept: scene 6 says the AI wrote the dataset; the walkthrough's step 2 says it was written era by era from MusicBrainz's track lists.

- N12 · scene 5 · "each photo names its era and kind": the screen shows "kind": "dylan". I guessed kind is "dylan" or "place/event" (from scene 1), but the other values are never shown. I also can't tell why this is a choice I should care about. Nothing says what it changes for me.
  - Answer: kept: kind is `dylan` or `place`, as scene 1's rule (Dylan, else the place or event) says.

- N13 · scene 6 · "the preview in our words": what is "the preview", and whose are "our words"? I guessed it is the italic sentence ("A sneering address to a once-privileged woman…"). Scene 10 later talks about the song's "note", and I can't tell whether the note and the preview are the same thing. "Two credited lines" is also unclear: credited to whom, and shown where?
  - Answer: fixed: scene 6 now says the preview is one sentence in our own words; preview is in the terms.

- N14 · scene 6 · "the field is there for lines added by hand": I guessed this is the "excerpt": null field in data/songs.json. Who adds lines by hand, how, and would they then show on the page? It reads as a to-do for me, but nobody says it is.
  - Answer: kept: scene 6 says the field is there for lines added by hand; whoever edits `data/songs.json` adds them, and the song page shows them.

- N15 · scene 7 · "QUICK CHECK · STEP 3": the check is labelled step 3 but comes before step three starts (scene 8). Scene 1 also already gave the answer ("or, where there is none, a photo of the place or event"), so I couldn't tell whether this tests the build or just my memory. The answer is only shown, never said, in scene 9.
  - Answer: kept: a walkthrough asks its check just before the scene that runs it, so step 3's check comes before step 3's scenes; scene 1 gives the rule, and the case is new.

- N16 · scene 9 · "the themes use fonts already on the phone": "themes" here seems to mean each era's look, but on song pages "themes" means topics like "loss" and "freedom" (scenes 1, 10, 13). Same word, two meanings. The screen title also changes from "each era in its own look" (voice) to "The era timeline" (screen).
  - Answer: fixed: scene 9 now says "the era themes"; theme chips on song pages are topics.

- N17 · scene 10 · "its note": which text on the Like a Rolling Stone page is the note? The paragraph "Released as a single in July 1965…" or the italic sentence? Scene 13 builds every thread card from "the song's own note", so I need to know which it is.
  - Answer: fixed: note and preview are now in the terms: the note is the sentence of fact, the preview the sentence in our words.

- N18 · scene 11 · "a11", "a16", "a17" (and "a7" in scene 13, "a8", "a9", "a14" in scene 15, "A1", "A2", "A13", "A4", "A3", "A12" in scene 21): these codes are never explained. I guessed they are choice numbers. Why are some lowercase and some capital, why do they skip and come out of order, and where would I look one up?
  - Answer: fixed: the internal ids are gone from the cards and the list; each card says its choice in words.

- N19 · scene 11 · "the dataset's songs headed Selected songs, seven of fourteen": so the dataset doesn't hold whole albums. Who picked the seven, and on what basis? With 216 songs over 39 albums, most albums must be partial. That is a big gap the video treats as a labelling detail.
  - Answer: kept: the selection is D-002, your answer in the plan review (16 landmark albums in full, the rest 2–3 songs); the card says so.

- N20 · scene 12 · "the map": it is never introduced before step five, and the glossary has no entry for it. The screen says "THE MAP · 90 SONGS, 49 CONNECTIONS". Why only 90 of 216 songs? I guess only songs with a connection are on it, but nobody says so.
  - Answer: meaning: the map is now in the terms; it shows the 90 songs that have a connection.

- N21 · scene 12 · "opened on the song you were on": the phone map is on Masters of War (/map/masters-of-war/), while the thread beside it and the laptop map are on Lord Franklin. I couldn't tell which song "you were on" or how I got to the map. The "Cards / Map" switch is not explained either.
  - Answer: kept: the phone map was opened from Masters of War's card; the laptop shows the thread's first card, Lord Franklin, beside its map.

- N22 · scene 13 · "built from the dataset's themes and connections": I can't see how, for example, "Borrowed tunes" or "The road" comes out of themes and connections. I guessed connection kind for the first and theme tag for the second. Nobody says what "in time order" or a thread's song count (12 in "Borrowed tunes") depends on.
  - Answer: kept: the walkthrough's step 5 says how: "Borrowed tunes" from the borrowed-tune connections, "Songs others made famous" from the covers, the rest one per song theme.

- N23 · scene 14 · "load only after a tap" / "From youtube-nocookie.com: nothing loads until you tap": why does this matter? I guessed privacy (no tracking) or page speed, but neither is said. "youtube-nocookie.com" is never explained.
  - Answer: fixed: youtube-nocookie.com is now in the terms; nothing loads until you tap, so a page you only read sends nothing to Spotify or YouTube.

- N24 · scene 14 · the search result "Like a Rolling Stone · The Rolling Stones · 1995": a cover by another band shows up as a song. Are covers songs in the dataset (part of the 216)? Scene 10 showed covers as connections only.
  - Answer: kept: a cover by another artist is a song in the dataset, marked with who made it, so a connection can open it.

- N25 · scene 15 · "a hundred and seventy-seven of a hundred and eighty-one songs": the site has 216 songs, so where does 181 come from, and what happens to the other 35 and the 4 that failed? Do they have no Spotify button? "Kept only when the title matches" — matches what, exactly?
  - Answer: kept: 181 are Dylan's album songs; the other 35 are other artists' songs, which have no player.

- N26 · scene 15 · "one edit in a short word, two in a long one": how short is short? Without the cut-off I can't predict whether a given typo will be found. The step's title has also changed: "Search, and players after a tap" in scene 14 versus "Search, listening, checks" here.
  - Answer: fixed: the card now says the cut-off: one edit at 4–5 letters, two from 6; the step's title is the same in both scenes.

- N27 · scene 16 · "Step six reached five choices of my own, so its biggest comes back to you as a question": I don't know the rule that five choices turns one into a question, and the glossary doesn't give it. I also can't tell who "my own" is. I guessed the agent is the narrator. Earlier steps also had several choices, so why no question there?
  - Answer: fixed: the narration now states the rule: a step with five choices of the AI's own sends its biggest open one back as a question.

- N28 · scene 16 · "Question 4": I only met one question to answer (scene 7 was a quick check). Where are questions 1 to 3? Did I miss them, or were they in an earlier video? The brief names no earlier video.
  - Answer: fixed: the eyebrow now reads "New question · step 6"; the plan's three questions were answered in its review.

- N29 · scene 18 · "Newport and Manchester join": Manchester was never mentioned before. Scene 16 only named Newport. I guessed it is the 1966 concert from the Going Electric era. "The clips need watching": by whom, and how?
  - Answer: fixed: Manchester is now in the terms, the 1966 concert where a fan shouted "Judas".

- N30 · scene 19 · "every song keeps its Spotify player": this suggests that under A or B a song with a clip loses its Spotify player. But scene 14 shows both buttons on Subterranean Homesick Blues. What actually changes for Spotify between the options?
  - Answer: fixed: scene 19 now says only the Spotify players remain; under A and B a song keeps both.

- N31 · scene 20 · "the search runs" / "node tools/try-search.mjs": I don't know what this runs or what passing means. I guessed it tries a set of typed queries. It is not in the glossary like the data and phone checks.
  - Answer: fixed: try-search is now in the terms; its run is `runs/search.txt`.

- N32 · scene 20 · "each is fixed or logged" vs the screen's "10 findings, all answered": logged where? Which of the ten were only logged and are still open? I'd want to see them or know where they are.
  - Answer: kept: the ten are answered one by one in walkthrough.md's "Code check" section, beside this video.

- N33 · scene 20 · "Not done: … hosting": so the site is not online. Then what does "Seeing it run" (scene 22) mean, and how would I open it myself to answer "anything you'd change?"
  - Answer: kept: the site runs with `npm run dev` from the repo; hosting it is one of the not-done items, and the screenshots are the built site.

- N34 · scene 20 · "the real covers inside the checks": I don't understand this phrase. I guessed the phone check ran with placeholder covers rather than the real images. It may also explain the orange squares (N4). It needs a sentence.
  - Answer: fixed: scene 1 now says the covers shown are drawn and the real ones load on the site; the checks see the drawn ones because they block outside requests.

- N35 · scene 21 · "Base path is / · instead of /dylan-site/ on GitHub Pages": the glossary's example base path is /dylan-site/, and GitHub Pages is the likely host. Choosing "/" sounds like the site would break when it is hosted there. Is that the point of the flag, or is it fine?
  - Answer: kept: the row says why: no host is chosen yet, and `astro build --base /dylan-site/` moves the whole site.

- N36 · scene 21 · "Data written in parts, merged by a script · instead of seven files by hand": this contradicts the glossary's "hand-written JSON files in data/". Which seven files are meant, and is data/ now generated?
  - Answer: fixed: the glossary's dataset row now says the files are written by hand era by era and merged by a script into the seven `data/*.json` files.

- N37 · scene 21 · "Each era page is the whole timeline · instead of one page reading the address": I couldn't follow this choice. I guessed every /era/... address is its own full copy of the timeline, scrolled to that era. What would I notice either way?
  - Answer: kept: each era page is its own full timeline, opened on that era, so a shared era link works with no script; the row says so.

- N38 · scene 21 · "precomputed, or Cytoscape" / "the Chrome already there": "Cytoscape" and "precomputed" are unexplained. I guessed Cytoscape is another graph library. Nobody says which Chrome is "already there", or where.
  - Answer: fixed: Cytoscape and precomputed are now in the terms; the Chrome is the one already on the build machine.

- N39 · scene 21 · "Phone check skips text links and map dots · instead of 44 px on every link": so some tap targets are smaller than 44 px, yet scene 20 said the phone check passed. The pass means less than it sounds, and the video doesn't say so.
  - Answer: kept: the check skips only links inside running text and the map's dots; every button and tab is held to 44 px, and passed.

- N40 · scene 21 · "Flag any you'd have made the other way": how do I flag one? A button, a comment, a reply? None of these choices shows its label (visible, hard-to-undo, close), so I can't tell why they were left to a list.
  - Answer: fixed: the narration now says to use the Flag on each line; the labels are in walkthrough.md's table.
