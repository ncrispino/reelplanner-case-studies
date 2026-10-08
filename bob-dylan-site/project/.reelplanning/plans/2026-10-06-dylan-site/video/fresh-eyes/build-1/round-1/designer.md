# Fresh eyes: designer · round 1 · stamp bfbd0b6aae1e

- G1 · scene 1 · "and visited Woody Guthrie in": the top line of the left phone's text is sliced in half by the phone's rounded top edge, and "Folk Festival, angering part" is sliced at the bottom. Breaks rule 5 (the frame covers words) and rule 6. Fix: crop the page between lines, or fade it out above and below so no line is cut through; this matters because it is the first thing a viewer reads.
  - Answer: fixed: scene 1's long page rests on whole lines; paper bands at the screen's top and bottom keep any line from being sliced.

- G2 · scene 1 · the three album covers on "Going Electric": each is a blank tan tile with a thin line and a year, which reads as a placeholder image, not a cover. Breaks rule 1. Fix: draw the title on the tile as the covers in scene 20 do.
  - Answer: fixed: scene 1's three covers are typographic, each with its title and year, as scene 20's are.

- G3 · scene 3 · "back works / shared links work / no server": three dash-led labels float in the right margin and point at empty space, not at anything in the phone or the URL. Breaks rule 3. Fix: hang them off the URL bar they describe, or drop them for the caption.
  - Answer: fixed: scene 3's three labels sit in a list under the address bar, joined to it by a leader line.

- G4 · scene 3 · the line from "…/#/album/blonde-on-blonde" to the phone ends at "Why it matters", not at the page title or the address. Breaks rule 3, because the route seems to point at a paragraph. Fix: end the connector at the "Blonde on Blonde" header.
  - Answer: fixed: scene 3's connector now ends at the "Blonde on Blonde" header.

- G5 · scene 4 · "A · RECOMMENDED": card A says "A" twice, once as the letter and again in the badge. Breaks rule 7 (redundant label). Fix: make the badge just "RECOMMENDED". The same happens in scene 11.
  - Answer: fixed: card A's badge reads just "RECOMMENDED" on every question.

- G6 · scene 4 · the three option cards are mostly empty between the title and the footer line. Breaks rule 7 (a large dead middle in each card, with the focal point lost). Fix: shorten the cards, or put the narration's one-line trade-off ("a build runs first", "a framework") in each.
  - Answer: fixed: each card in scene 4 carries its trade-off line: "nothing to install", "a build runs first", "a framework to learn".

- G7 · scene 7 · "Like a Rolling Stone / Tangled Up in Blue / Blonde on Blonde": the page cards hold a title and then empty space, so they read as blank page stand-ins. The right third of the frame beside "about 250 pages" is also empty. Breaks rules 1 and 7. Fix: give each card a line of real page content and balance the count against the cards.
  - Answer: fixed: scene 7's page cards each carry a line of real content, and the count is replaced by "a page per album and song", balanced across the frame.

- G8 · scene 8 · "albums.json / songs.json / links.json": eras and moments get an example row on the right, but albums, songs and connections leave the right half blank, while the links example drops to a separate code block below. Breaks rules 2 and 7. Fix: show one example per file in the same row, or put the links code block directly beside its row.
  - Answer: fixed: scene 8 gives albums.json and songs.json an example row each, and the links.json code sits directly under its row, joined by a stem.

- G9 · scene 8 · whole frame: mono file names, grey sans labels, sans example rows, code, two chip styles, a small grey footnote and the large serif caption add up to well over three type sizes. Breaks rule 6. Fix: cut the sizes to three, and drop the "no lyrics: under copyright" footnote into the caption.
  - Answer: fixed: scene 8 is down to two type sizes; the no-lyrics note sits inside the songs.json row.

- G10 · scene 8 · "why": the chip floats above the end of the string, near "version"", rather than at the start of the value it names. "connection" also sits on top of the opening brace. Breaks rule 3. Fix: put each chip at the start of its line, the same way for all three.
  - Answer: fixed: scene 8's "connection", "kind" and "why" each sit above the start of what they name.

- G11 · scene 9 · "missing id / id used twice / album outside its era": a column of chips sits apart on the left with no tie to the terminal output, and "missing id" does not match the error shown ("is not a song id"). Breaks rule 3 (a column of chips apart from the things they name). Fix: highlight the matching chip and link it to the failing line, or move the chips into the terminal as comments.
  - Answer: fixed: scene 9's first chip reads "song id that doesn't exist", lights when the failing line prints, and is joined to it by a line.

- G12 · scene 9 · "id": the orange chip sits under the underlined typo and crowds the "exit 1" line. The bottom third of the frame is also empty. Breaks rules 5 and 7. Fix: put the chip above the string, and centre the terminal vertically.
  - Answer: fixed: scene 9's "id" label sits above the typo, clear of "exit 1", and the terminal is centred.

- G13 · scene 11 · the striped tick bars plus a second solid bar in each card: two unlabelled graphics repeat the same idea, and nothing says what a tick is (an album? a song?). Breaks rules 1 and 3. Fix: keep one bar and label its unit, e.g. "albums: 39, 16 written".
  - Answer: fixed: scene 11 keeps one graphic per card, the album tick row, labelled "39 albums · 16 in full", "16 albums", "39 albums, every song".

- G14 · scene 11 · "How much of the catalogue should go in?": unlike scene 4 there is no "Question 2 · step 2" eyebrow, so the viewer loses which step this decides. The same is true of scenes 19 and 27, and scene 34 writes it in lowercase ("question 5"). Breaks rule 4 (say what you decide) and rule 7 (consistency). Fix: use the same eyebrow, naming the step, on all five questions.
  - Answer: fixed: all five questions carry the same eyebrow, "Question N · step S", in scene 4's style and place.

- G15 · scene 12 · "39 albums": the terminal sits in the upper half with an empty lower half, and there is no "If A" eyebrow as scenes 5 to 7 have. Breaks rule 7. Fix: centre the terminal and add "If A · step 2".
  - Answer: fixed: scene 12's terminal is centred, with the eyebrow "If A · step 2".

- G16 · scene 13 · the eleven era columns: only one is named ("The '80s · 1"). The rest show a number and black blocks, so a viewer cannot tell which era is which, and the black blocks stand in for albums. Breaks rules 1 and 3. Fix: put a short era name under each column, and use album titles or small drawn covers instead of black bars.
  - Answer: fixed: scene 13 names every era column and shows each era's album count alone, with no stand-in blocks.

- G17 · scene 13 · "The '80s · 1": the highlighted column's orange outline is larger than its neighbours and eats into the gaps on both sides. Breaks rule 7 (uneven gaps). Fix: draw the outline inside the column.
  - Answer: fixed: scene 13's coral outline sits inside the '80s column.

- G18 · scene 14 · "≈450 songs": the narration says the dataset "roughly doubles", but nothing in the picture compares 450 with 210. The phone also sits left of centre with an empty left half. Breaks rules 2 and 7. Fix: show "210 → 450", and balance the phone and the number across the frame.
  - Answer: fixed: scene 14 shows "210 → ≈450 songs", and the phone and number are balanced across the frame.

- G19 · scene 15 · the two empty dashed boxes under step 4: they stand in for steps 5 and 6 with no words. Breaks rule 1. Fix: show steps 5 and 6 dimmed with their names, as scene 24 dims the finished steps.
  - Answer: fixed: scene 15 names steps 5 and 6, dimmed, instead of empty dashed slots.

- G20 · scene 16 · the era strip at the top of the phone: it is a row of tiny unlabelled colour bars, too small to read, and "tap to jump" floats outside the phone pointing at it. Breaks rule 6. Fix: enlarge the strip in a callout with era names, or label the current segment.
  - Answer: fixed: scene 16 names the lit era under the strip as it changes, and "tap to jump" is attached to the strip.

- G21 · scene 16 · "Step 3 / The era timeline / #/era/basement": the left column holds three small items in a large empty half. Breaks rule 7. Fix: move the route next to the phone's strip, or bring the left block in toward the phone.
  - Answer: fixed: scene 16's route sits as an address bar on top of the phone, and the title block is level with the phone, so the frame is balanced.

- G22 · scene 18 · "John Wesley Harding 1967": the right phone's top line is clipped by the phone's rounded corner. The song title the narration names, "All Along the Watchtower", is not visible at all. Breaks rules 5 and 1. Fix: scroll the page down so the song title shows at the top, and keep text clear of the corner.
  - Answer: fixed: scene 18 pins the title "All Along the Watchtower" in a bar at the top of the page, clear of the phone's corner, and no line is clipped.

- G23 · scene 18 · "Jimi Hendrix, 1968": the orange tap circle sits on "1968" and on "Ladyland, and", and the black "connection" chip sits on the card's top border. Breaks rule 5. Fix: put the tap ring at the card's edge or behind the text, and the chip above the card.
  - Answer: fixed: scene 18's tap ring sits around the Hendrix card, off its text, and the "connection" label sits above the card with a short leader.

- G24 · scene 18 · "Highway 61 Revisited": the left phone is faded to light grey and is hard to read. Breaks rule 6. Fix: keep it at full contrast, or drop it and give the frame to the song page.
  - Answer: fixed: scene 18's album page stays readable, dimmed only slightly.

- G25 · scene 19 · "the 1966 photo, from the archive": option B shows a dashed empty box with words where the real cover would be. Breaks rule 1. Fix: show a recognisable rendered cover-like image, or at least a mock photo, not a placeholder.
  - Answer: kept: the site will not reproduce a copyrighted cover photo, and the video does not either; card B says what would be there, and its cost is the point of the option.

- G26 · scene 19 · card A has no "RECOMMENDED" badge, though the narration recommends A, while scenes 4 and 11 show the badge. Scenes 27 and 34 also lack it. Breaks rule 4 (what you decide, and what is suggested, should be visible). Fix: badge the recommended option on every question.
  - Answer: fixed: the badge was cut off by timing; card A on every question now shows the coral border and "RECOMMENDED" at rest.

- G27 · scene 20 · "Blonde on Blonde": nothing names the "electric era's colour" the narration points to, and the lower 40% of the frame is empty. Breaks rules 3 and 7. Fix: label the era under each cover ("Going Electric") and centre the row.
  - Answer: fixed: scene 20 names each cover's era under it, adds the eyebrow "If A · step 4", and centres the row.

- G28 · scene 21 · "loaded": three cover tiles show the word "loaded" instead of an image, so the "real covers" option is never actually shown. Breaks rule 1. Fix: show the cover images in the loaded tiles, and a broken-image icon in the failed one.
  - Answer: kept: the site and the video do not reproduce copyrighted cover photos; each loaded tile now leads with its album title, and the failed one says so.

- G29 · scene 21 · "coverartarchive.org/release/…/front 200": the four request lines are not tied to the four tiles, and all four URLs read the same. Breaks rule 3. Fix: draw a line from each tile to its request, or name the album in each row.
  - Answer: fixed: scene 21's request rows each name their album ("New Morning · failed"), which ties them to the tiles.

- G30 · scene 22 · "John Wesley Harding1967": the title runs into the year with no gap. Breaks rule 7 (and reads as one word). Fix: shrink or wrap the title, or reserve a fixed column for the year.
  - Answer: fixed: scene 22 gives the year its own column, so "John Wesley Harding" and "1967" no longer run together.

- G31 · scene 23 · "Back from an album: where are you?": unlike the other quick checks (scenes 10, 17, 38), it gives no A/B/C answer cards, so the right half below the question is empty. Breaks rules 4 and 7. Fix: add the three answer cards.
  - Answer: fixed: the answer cards were cut off by timing; scene 23 now shows all three at rest, under the eyebrow "Quick check · step 3".

- G32 · scene 25 · the "Masters of War" card: it is a big empty green card with only a title and album, while the narration says "Its tune is Nottamun Town" (scene 28 shows that note). Breaks rule 1. Fix: show the card's note here.
  - Answer: fixed: scene 25's why line ("The tune is 'Nottamun Town'…") is on the Masters of War card at rest; its cue was past the frame's end before.

- G33 · scene 25 · the next card peeking below: its year ("1965") is cut in half by the card's edge. Breaks rule 5. Fix: let the peek show either a full line or none.
  - Answer: fixed: scene 25's peek shows the next card's whole year line, "1963", and nothing cut.

- G34 · scene 25 · "1963 Masters of War": the dot sits on the 1962 tick at the top of the 1962–2006 axis, and the rest of the axis is empty with no other cards marked. Breaks rule 3 (the label is misplaced on its scale). Fix: place the dot at 1963, and mark the other eight cards on the axis.
  - Answer: fixed: scene 25's dot sits on the 1963 tick, and the axis is titled "Borrowed tunes · 1962–2006".

- G35 · scene 26 · the time axis with two cards: the narration says three cards (Scarborough Fair, the song, and the 1969 Johnny Cash duet), but only two are drawn and the right half of the axis is empty. Breaks rules 1 and 2. Fix: add the third card, "1969 · with Johnny Cash".
  - Answer: fixed: scene 26's third card was cut off by timing; all three cards now land on their names (10.5, 11.9, 13.2 s) and rest on the year line.

- G36 · scene 27 · "Like a Rolling Stone": in option B's map, an edge line runs across or into the label text. In option C's map, nothing is labelled. Breaks rules 5 and 3. Fix: route edges around the labels, and label at least one node in C.
  - Answer: fixed: scene 27's map edges no longer cross labels, and option C's map labels "Masters of War".

- G37 · scene 28 · "A · Threads only": the label floats far to the right of the phone, in empty space, and is not attached to it. Breaks rules 3 and 7. Fix: put the label above or beside the phone, close to it.
  - Answer: fixed: scene 28's "A · Threads only" sits directly above the phone.

- G38 · scene 30 · "768 px": the measure is a vertical line between the phone and the laptop, so it measures nothing. Breaks rule 3. Fix: draw a horizontal width bracket across the laptop screen.
  - Answer: fixed: scene 30 measures the laptop screen with a horizontal bracket labelled "wider than 768 px".

- G39 · scene 31 · "Quick check": the eyebrow drops the step number the narration says ("Check on step four"), and there are no A/B/C answer cards, which leaves the right half empty. Breaks rules 4 and 7. Fix: write "Quick check · step 4" and add the three answer cards.
  - Answer: fixed: scene 31 reads "Quick check · step 4" and shows its three answer cards at rest; they were cut off by timing.

- G40 · scene 32 · "no server": the chip floats alone in the empty left half, not attached to anything. The phone's tab labels "Eras" and "About" also touch the phone's sides. Breaks rules 3, 5 and 7. Fix: tie "no server" to the results list (e.g. "found in the page, no server"), and pad the tab bar.
  - Answer: fixed: scene 32's chip reads "found in the page · no server" and is bracketed to the results; the tab bar is padded clear of the phone's sides.

- G41 · scene 33 · "37 px": the phone outline runs through the "7", and the number is not explained (the narration says 412 px wide). The phone itself is a nearly blank box. Breaks rules 5 and 1. Fix: label it "412 px page in a 375 px phone", keep the label clear of the outline, and show some of the page.
  - Answer: fixed: scene 33 labels the overflow "412 px page · 375 px phone", clear of the outline, and the small phone shows the album page's real lines.

- G42 · scene 33 · "sideways scroll / tap target under 44 px / console error": a row of chips sits apart from the terminal, and none is marked as the one that failed. Breaks rule 3. Fix: highlight "sideways scroll" and link it to the failing line.
  - Answer: fixed: scene 33 lights the "sideways scroll" chip and draws a leader to the failing line when it prints.

- G43 · scene 35 · "Like a Rolling Stone": a blank band sits between the title and "Connections" where the note and themes should be. There is no "If A" eyebrow, and the phone floats alone in a wide empty frame. Breaks rules 1 and 7. Fix: fill the note and themes, and add "If A · song page" beside the phone.
  - Answer: fixed: scene 35's song page shows its note and theme between title and Connections, with the eyebrow "If A · step 6".

- G44 · scene 37 · the song page's coloured header: it is empty, with no song title. Breaks rule 1. Fix: show "Like a Rolling Stone" as in scene 35, so the two outcomes compare like for like.
  - Answer: fixed: scene 37 shows "Like a Rolling Stone" in its header, as scene 35 does, with the eyebrow "If C · step 6".

- G45 · scene 39 · "36 px [ Share": the example floats top right, the question wraps so that "do?" sits alone on a line, and the rest of the frame is empty, with no answer cards. Breaks rules 6 and 7. Fix: set "npm test" at the body size so the question fits on one line, place the Share button in a phone, and add A/B/C answers.
  - Answer: fixed: scene 39's question sits on two whole lines with `npm test` at the heading's size, the Share button is inside a phone, and the answer cards show at rest.

- G46 · scene 40 · "and visited Woody Guthrie in": as in scene 1, the top and bottom lines of the left phone are sliced by the phone's edge. "2 taps" also points at empty space beside the right phone. Breaks rules 5 and 3. Fix: crop between lines, and point "2 taps" at the connection card.
  - Answer: fixed: scene 40's long page rests on whole lines, and "2 taps" sits level with the connection card it counts.

- G47 · scene 41 · "Draw on any step, or approve.": it does not say what you approve. Breaks rule 4. Fix: "Approve this six-step plan, or draw on a step to leave a note."
  - Answer: fixed: scene 41 reads "Approve this six-step plan, or draw on a step to leave a note."
