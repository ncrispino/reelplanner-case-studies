# SCRIPT — dylan-site plan video, version two

**Voice:** am_michael (Kokoro)
**Voice settings:** speed 1.25
**Voice direction:** Plain, warm, a peer explaining a plan. No hype.

---

## Line 1 — Version two (Frame 1)

    This is version two of the plan. You decided four things: all thirty-nine albums, real covers, threads with a map, and Spotify on the page. And you asked for five more: question one again, with the differences shown; a look and real photos for each era; lyrics; the map on phones; and YouTube.

## Line 2 — Overview (Frame 2)

    It's still three changes in six steps, and something new lands in five of them. The dataset, hand-written files that hold everything, now also points to photos, lyrics and videos. Search, which finds things as you type, stays as it was.

## Line 3 — Step 1 (Frame 3)

    Step one is still the app shell, the one page that reads the address and draws one view at a time. What's new is how views change. With View Transitions, the browser's own animation, the cover you tap grows into the album page's header. Press back, and it shrinks home. A phone set to reduce motion gets a gentle fade instead: the page fades in, and nothing grows.

## Line 4 — What you'd see differ (Frame 4)

    All three ways to build the site can look the same. The look comes from step three's themes and photos. What differs is around it. With plain files, a big photo pops in late, all at once. With Vite or Astro, each photo gets smaller sizes and a placeholder, a blurred copy that shows at once and sharpens. Vite keeps one page, so the swipe and the map keep your place; Astro loads a new page each time. And for the map and players, Vite and Astro pull in packages; plain files are wired by hand.

## Line 5 — Question 1 (Frame 5)

    So, question one, asked again. A: plain files, with photos that pop in late and every polish by hand. B: Vite with TypeScript, one page built into plain files, with placeholders and packages. C: Astro, a real page per song that search engines find, with the swipe reloading between pages. I recommend B. How should the site be built?

## Line 6 — Branch q1 A (Frame 6)

    With A, step one is three files and a data folder, and every polish is by hand.

## Line 7 — Branch q1 B (Frame 7)

    With B, step one is a Vite project, and `npm run build` writes plain files to `dist/`.

## Line 8 — Branch q1 C (Frame 8)

    With C, step one becomes an Astro project, with a page for every album and song.

## Line 9 — Step 2 (Frame 9)

    Step two, the dataset. It's seven JSON files now, plain-text lists of data, adding threads and photos. A song record gains three fields: its Spotify id for the player, a YouTube id when there's a clip worth showing, and a link to its official lyrics page. No lyrics are copied.

## Line 10 — Step 2 check (Frame 10)

    The data check, the script that fails when the dataset is wrong, also checks credits now. A photo with no licence, the terms it may be reused under, stops it, and it names the photo.

## Line 11 — Quick check k1 (Frame 11)

    A quick check, a question to see whether the plan does what you expect. This one's on step one. Your phone is set to reduce motion, and you tap a cover. What do you see?

## Line 12 — Step 3 (Frame 12)

    Step three is the one you asked to change most. The era timeline, the home view you swipe, now gives each era its own theme: its colours, typeface and texture. Greenwich Village is paper and typewriter, with a nineteen sixty-three photo from the March on Washington. Going Electric is black and amber, and has no free photo, so its title, set large in its theme, carries the panel. Gospel is red and gold, with a nineteen eighty concert photo. And the Late Renaissance, from nineteen ninety-seven, is shadow and brass, with a two thousand ten festival photo. Every photo shows its credit.

## Line 13 — Question 2 (Frame 13)

    Question two: where do the photos come from? A: Wikimedia Commons, a free library of photos others may reuse, with the credit shown. It's free, but coverage is uneven: some eras get one photo or none. B: licensed press photos, every era covered, for a fee per image, often every year. C: no photos, just the themes, the plainer look you asked to avoid. I recommend A. Where should the era photographs come from?

## Line 14 — Branch q3 A (Frame 14)

    With A, each era shows what Commons has, and the ones with none lean on their theme.

## Line 15 — Branch q3 B (Frame 15)

    With B, every era gets photos, and the site pays for them every year.

## Line 16 — Branch q3 C (Frame 16)

    With C, the panels keep their themes and open on their titles.

## Line 17 — Step 4 (Frame 17)

    Step four, the album and song pages. Blowin' in the Wind's page wears its era's theme, and adds a Lyrics row linking to the official page, a Play row for Spotify, and its connections. On an album page, the real cover comes from the Cover Art Archive. If it fails to load, like New Morning's here, the page shows a drawn cover in the era's theme instead, so nothing shows broken.

## Line 18 — Quick check k2 (Frame 18)

    Check on step three. Basement and Country has no photo the site can use. What does its panel open on?

## Line 19 — Question 3 (Frame 19)

    Question three: what sits beside the lyrics link? A: the link only. B: the link and the song's first line, a real taste, but quoting a lyric, even one line, needs the publisher's permission. C: the link and a preview in our own words, like nine questions about war and freedom, and an answer that won't stay still. I recommend C. What should a song page show beside its lyrics link?

## Line 20 — Branch q2 A (Frame 20)

    With A, the row is just the link.

## Line 21 — Branch q2 B (Frame 21)

    With B, the site needs the publisher's permission first, for every song.

## Line 22 — Branch q2 C (Frame 22)

    With C, every song in the dataset gains a one-sentence preview, written for the site.

## Line 23 — Step 5 (Frame 23)

    Step five, threads and the map. A thread is a path through songs that share something, shown as cards you swipe. On a phone, cards are still the default, and a toggle switches to the map, where every song is a dot and every connection a line. It opens centred on the song you were on and its neighbours, about fifteen dots, and you drag to see more. On a laptop, both sit side by side.

## Line 24 — Quick check k3 (Frame 24)

    Check on step four. The Cover Art Archive doesn't answer for Oh Mercy's cover. What does its album page show?

## Line 25 — Step 6 (Frame 25)

    Step six. Spotify's player loads only when you tap Play, so a page you just read loads nothing from Spotify. Songs and moments that matter get a YouTube clip, like Newport in nineteen sixty-five, also after a tap. Search, and the phone check that opens every view at phone size, work as in version one.

## Line 26 — Quick check k4 (Frame 26)

    Check on step five. On a phone, you're on Blowin' in the Wind's card in a thread, and you tap Map. Where does it open?

## Line 27 — Quick check k5 (Frame 27)

    And on step six. You open Tangled Up in Blue's page and never tap Play. What does the page load from Spotify?

## Line 28 — Ending (Frame 28)

    That's version two: six steps and three questions, and the plan shows your picks on its steps as you answer. Draw on any step to leave a note, or approve.
