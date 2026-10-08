# Fresh eyes: newcomer · round 1 · stamp bfbd0b6aae1e

- N1 · scene 2 · "needs its folder" / "Search and checks": the picture says step two "needs its folder" without naming which folder. I guessed step one's site folder, where `data/` lives, but that folder only appears in scene 5. Step 6's box also says "Search and checks", while the narration only names search, so I can't tell what "checks" means here until scene 33.
  - Answer: fixed: scene 2's arrow note now reads "needs step 1's folder"; "Search and checks" is kept: scene 33 shows the checks, and the title is step 6's own.

- N2 · scene 7 · "about 250 pages": the narration never says this number. I guessed it is 39 albums plus about 210 songs, which means it assumes option A of the next question (scene 11) before that question has been asked. If you pick catalogue option C, Astro's page count would be different.
  - Answer: fixed: scene 7 now says "a page per album and song" instead of a count that assumed question 2's answer.

- N3 · scene 8 · "nottamun-town" as a song id: the connection points to a song Dylan didn't write. Scene 18 later says connections can open "someone else's version". A newcomer would ask whether other artists' songs (Nottamun Town, Hendrix's Watchtower, Scarborough Fair) are records in songs.json, and whether they count in the "212 songs" and "≈210 songs" figures. This matters for how much writing option A really is.
  - Answer: fixed: scene 8's narration now says a song by someone else, like Nottamun Town, is in the dataset too, so the connection has somewhere to go.

- N4 · scene 8 · "links.json" vs "connections": the file is called links but the narration and glossary call the thing a connection, and "links out" in the caption means something else (links to other sites). I guessed links.json holds the connections. Three meanings of "link" are close together here.
  - Answer: kept: scene 8 pins "connection" on the entry in `links.json`, and the narration calls it a connection as it shows it; the file name is the file's own.

- N5 · scene 9 · "node tools/check-data.mjs", "exit 1", "#57": the narration calls it "the data check" but never says this command is it, or what "node" is. "exit 1" and "#57" (I guessed: a failure code, and the 57th entry) aren't explained. The chip "missing id" also doesn't match the narration's "a connection to a song that doesn't exist". I guessed they mean the same thing.
  - Answer: fixed: scene 9's first chip now reads "song id that doesn't exist", matching the failing line, and lights when it prints; the narration calls `node tools/check-data.mjs` the data check as it runs, and the storyboard's terms now give node, exit 1 and #57 a meaning a viewer can open.

- N6 · scene 10 · "QUICK CHECK" answers: the three answers are shown but the video never says which is right, for this check or any later one (scenes 17, 23, 31, 38, 39). I can't tell whether the player reveals the answer or whether I'm meant to know it. If it's never revealed, a viewer can't find out they guessed wrong.
  - Answer: kept: the review player reveals the right answer, with each card's reason, once you pick; the frames never show it so the check stays a prediction.

- N7 · scene 13 · the strip of numbers and black blocks, "The '80s · 1": the narration says "eras like the eighties show a single album". But the picture shows two eras with 0 albums (the first and the tenth), which is a bigger gap than the narration describes. The eras aren't named, so I can't tell which ones go empty. No era called "The '80s" has been named either: the only names so far are Duluth and Hibbing, Going Electric, and Rough and Rowdy.
  - Answer: fixed: scene 13 names every era column, so the two empty eras (Duluth and Hibbing, before the records, and The Standards, which has no landmark album) are readable.

- N8 · scene 16 · "1966 motorcycle accident" on the "Basement and Country, 1967–1970" panel: a 1966 moment sits in an era that starts in 1967. Scene 9 said the data check fails on "an album outside its era's years". A newcomer would ask whether moments are exempt from that rule, or whether this panel would fail the check. It also leaves unclear which era a 1966 search (scene 32) belongs to.
  - Answer: fixed: scene 16's moment now reads "1967 · off the road after the 1966 accident", so nothing on the 1967–1970 panel is dated outside it.

- N9 · scene 16 · "Swipe three times": swipe three times from where? I guessed from the first era (Duluth and Hibbing), but the video never says which era the home view opens on.
  - Answer: kept: scene 16 opens on the first panel, Duluth and Hibbing, and the narration says the timeline is the home view; the three swipes start there.

- N10 · scene 18 · the right-hand phone headed "John Wesley Harding 1967": the narration is about All Along the Watchtower's page, but the song's title isn't visible, only the album. I only guessed it's the Watchtower page from the Hendrix card. The chips "the road" and "America" have no label. I guessed they're the "themes" the narration mentions.
  - Answer: fixed: scene 18 keeps the song title, All Along the Watchtower, visible at the top of the page, and labels the chips as themes.

- N11 · scene 19 · "the 1966 photo, from the archive": I guessed this is the real Blonde on Blonde cover photo, but "photo" and "archive" appear before the narration names the Cover Art Archive. Also, from here on, the recommended option no longer carries the "RECOMMENDED" label that questions 1 and 2 had (scenes 19, 27, 34). Only a highlight or nothing marks it. Scene 34 has no mark at all, even though the narration recommends A.
  - Answer: fixed: the recommended mark was cut off by timing; every question now shows the same RECOMMENDED badge and the same "Question N · step S" eyebrow.

- N12 · scene 20 · the four drawn covers with different layouts and colours: the narration only talks about Blonde on Blonde. Freewheelin', Nashville Skyline and Slow Train Coming each put the title and year in a different place. I can't tell whether the layout changes per era, per album or at random, or what the underline under Blonde on Blonde means.
  - Answer: fixed: scene 20 names each cover's era under it, so the colour and layout read as per era.

- N13 · scene 21 · "200" and "loaded": the status codes and the word "loaded" are never explained. I guessed 200 means the image downloaded fine. The narration says "a broken image shows when it's down", but the archive isn't down in the picture: only one of four images failed. So the scene doesn't show what happens when the whole archive is down.
  - Answer: fixed: scene 21's narration now says a broken image shows whenever a request fails, which is what the picture shows; each request row names its album.

- N14 · scene 25 · the side axis "1962 … 2006": only one point (1963 Masters of War) is on it, and nothing says what the axis is. I guessed it's the time span of the Borrowed tunes thread (scene 28 shows "1962–2006"). Also, the phone's card shows no reason the song is in the thread, unlike scene 28's card.
  - Answer: fixed: scene 25 labels the axis "Borrowed tunes · 1962–2006", puts the dot at 1963, and shows the card's why line at rest.

- N15 · scene 26 · "you get three cards": the narration names three cards (Scarborough Fair, the song, the 1969 Johnny Cash duet), but the picture shows only two. Scarborough Fair is dated "traditional", not a year. A newcomer would ask how "time order, older first" places a song with no year.
  - Answer: fixed: the third card was cut off by timing and now lands on "duet"; kept: a traditional song has no year and comes first, older than any recording.

- N16 · scene 29 · "44 px tap · 6 dots": I guessed it means a finger-sized area covers six dots, so you can't hit one. Nothing says so, and "Start a thread opens it centred on the song" sits next to a "Threads" tab. Under option B, does the Threads tab still exist?
  - Answer: fixed: the label now reads "a fingertip covers 6 dots"; kept: under option B the map replaces the cards, as the question's full text says.

- N17 · scene 30 · "768 px" on a vertical line between the phone and the laptop: the line is vertical but the narration means screen width. I guessed it is a dividing line, not a measurement. The map also links Masters of War to Like a Rolling Stone, a connection the video never mentions.
  - Answer: fixed: scene 30 measures the laptop screen with a horizontal bracket, "wider than 768 px", and the map no longer shows a connection the dataset lacks.

- N18 · scene 33 · "console error", "9 views at 375×812", "screenshots in checks/", "37 px": the narration says "an error", but the chip says "console error", which isn't explained. "9 views" doesn't match the "four ways to explore" and four tabs I'd counted. "812" and the "checks/" screenshot folder come out of nowhere. I guessed "37 px" is how far the 412 px page spills past the 375 px phone.
  - Answer: fixed: scene 33's chip now reads "an error" and the overflow is labelled "412 px page · 375 px phone"; meaning: view, 375×812 and checks/ are in the storyboard's terms.

- N19 · scene 35 · "Jimi Hendrix, covered it, 1967": on Like a Rolling Stone's page, the connection cards name artists, not songs. Scene 18 said tapping a card opens "the other song's page". So what page does "The Rolling Stones, covered it, 1995" open? Is a cover its own song record?
  - Answer: kept: scene 8 now says someone else's song is in the dataset, and scene 18 says a card opens the other song's page even when it's someone else's version: a cover card opens that recording's page.

- N20 · scene 37 · the song page with an empty coloured header: the title is missing. I guessed it's Like a Rolling Stone from scene 35's cards and "Highway 61 Revisited · track 1", but in option C the page shows no title at all.
  - Answer: fixed: scene 37's header shows "Like a Rolling Stone", as scene 35 does.

- N21 · scene 41 · "Draw on any step to leave a note, or approve": the video never shows how to draw, or where the note goes or who reads it. "each step showing what you picked" is also unclear, since no scene showed the plan changing after a choice. I guessed it's part of the review page, not the video.
  - Answer: fixed: scene 41 now reads "Approve this six-step plan, or draw on a step to leave a note"; drawing is the review page's, beside the video.
