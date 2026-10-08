# Fresh eyes: the designer's brief · video

You are a designer looking at "video", a narrated video of 28 scenes, before anyone reviews it. For
each scene you get a picture of it at rest (its last moment, as the review page shows it: the player's chips,
captions and a detail's glyph included) and what the narration says over it. Look at every picture, at the size it is.

**This is a rebuild: look only at what it changed.** Scenes 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28 of the 28 are new or changed since
the last build, and those are what you look at. The
other scenes are not here: they have not changed since their own look. A finding on a scene not marked "look at
this one" is out of scope and is not counted.

_Pictures: playwright-core is not installed; the frames alone instead (the player's tab, chips and captions are not in them)._

## The seven rules (a frame a newcomer can read)

1. **Show the thing, never a stand-in.** Words, not grey lines or an empty box where words go.
2. **One reading order,** top to bottom, left to right, in the order the narration says it.
3. **A label sits on what it labels, and a qualifier with what it qualifies.** Never a column of chips apart from
   the things they name.
4. **A question says what you decide.** "Drop the walkthrough video after each build? Approve or not", never "you
   approve, or not" alone.
5. **Nothing covers content.** The player's "More in the guide ↓" label has room above the thing it opens; no chip
   or caption sits on words.
6. **Readable at a glance.** Text big enough to read in the picture, text inside a screenshot too, and sharp (a
   screenshot stretched soft breaks it); at most three type sizes.
7. **Pleasing.** One focal point; the same gap between like things; the frame used in balance, not a column of
   chips with an empty half.

List every place a picture breaks one, with the rule's number and what would fix it in a few words.

## The shape of designer.md (keep it exactly)

```
# Fresh eyes: designer · round 1 · stamp a4f59948e9c7

- G1 · scene 4 · "the phrase or thing": what you saw, and which rule it breaks; why it matters
- G2 · scene 7 · …
```

One finding a line, numbered G1, G2 … in scene order, each starting with its scene (only scenes 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28). Put the phrase or
the thing on screen in double quotes. Write "- none" if you have nothing. Leave room under each line: the
author answers each one there. Do not answer or fix anything yourself.

## The video, scene by scene

### Scene 1 · part: What changed, and how it is built · look at this one

Picture: `shots/scene-01.png`

> This is version two of the plan. You decided four things: all thirty-nine albums, real covers, threads with a map, and Spotify on the page. And you asked for five more: question one again, with the differences shown; a look and real photos for each era; lyrics; the map on phones; and YouTube.

### Scene 2 · look at this one

Picture: `shots/scene-02.png`

> It's still three changes in six steps, and something new lands in five of them. The dataset, hand-written files that hold everything, now also points to photos, lyrics and videos. Search, which finds things as you type, stays as it was.

### Scene 3 · look at this one

Picture: `shots/scene-03.png`

> Step one is still the app shell, the one page that reads the address and draws one view at a time. What's new is how views change. With View Transitions, the browser's own animation, the cover you tap grows into the album page's header. Press back, and it shrinks home. A phone set to reduce motion gets a gentle fade instead: the page fades in, and nothing grows.

### Scene 4 · look at this one

Picture: `shots/scene-04.png`

> All three ways can look the same. The look comes from step three's themes and photos. What differs is around it. With plain files, a big photo pops in late, all at once. With Vite or Astro, each photo gets smaller sizes and a placeholder, a blurred copy that shows at once and sharpens. Vite keeps one page, so the swipe and the map keep your place; Astro loads a new page each time. And for the map and players, Vite and Astro pull in packages; plain files are wired by hand.

### Scene 5 · look at this one

Picture: `shots/scene-05.png`

> So, question one, asked again. A: plain files, with photos that pop in late and every polish by hand. B: Vite with TypeScript, one page built into plain files, with placeholders and packages. C: Astro, a real page per song that search engines find, with the swipe reloading between pages. I recommend B. How should the site be built?

### Scene 6 · look at this one

Picture: `shots/scene-06.png`

> With A, step one is three files and a data folder, and every polish is by hand.

### Scene 7 · look at this one

Picture: `shots/scene-07.png`

> With B, step one is a Vite project, and `npm run build` writes plain files to `dist/`.

### Scene 8 · look at this one

Picture: `shots/scene-08.png`

> With C, step one becomes an Astro project, with a page for every album and song.

### Scene 9 · part: Data, eras and pages · look at this one

Picture: `shots/scene-09.png`

> Step two, the dataset. It's seven JSON files now, plain-text lists of data, adding threads and photos. A song record gains three fields: its Spotify id for the player, a YouTube id when there's a clip worth showing, and a link to its official lyrics page. No lyrics are copied.

### Scene 10 · look at this one

Picture: `shots/scene-10.png`

> The data check, the script that fails when the dataset is wrong, also checks credits now. A photo with no licence, the terms it may be reused under, stops it, and it names the photo.

### Scene 11 · look at this one

Picture: `shots/scene-11.png`

> A quick check, a question to see whether the plan does what you expect. This one's on step one. Your phone is set to reduce motion, and you tap a cover. What do you see?

### Scene 12 · look at this one

Picture: `shots/scene-12.png`

> Step three is the one you asked to change most. The era timeline, the home view you swipe, now gives each era its own theme: its colours, typeface and texture. Greenwich Village is paper and typewriter, with a nineteen sixty-three photo from the March on Washington. Going Electric is black and amber, and has no free photo, so its title, set large in its theme, carries the panel. Gospel is red and gold, with a nineteen eighty concert photo. And the Late Renaissance, from nineteen ninety-seven, is shadow and brass, with a two thousand ten festival photo. Every photo shows its credit.

### Scene 13 · look at this one

Picture: `shots/scene-13.png`

> Question three: where do the photos come from? A: Wikimedia Commons, a free library of photos others may reuse, with the credit shown. It's free, but coverage is uneven: some eras get one photo or none. B: licensed press photos, every era covered, for a fee per image, often every year. C: no photos, just the themes, the plainer look you asked to avoid. I recommend A. Where should the era photographs come from?

### Scene 14 · look at this one

Picture: `shots/scene-14.png`

> With A, each era shows what Commons has, and the ones with none lean on their theme.

### Scene 15 · look at this one

Picture: `shots/scene-15.png`

> With B, every era gets photos, and the site pays for them every year.

### Scene 16 · look at this one

Picture: `shots/scene-16.png`

> With C, the panels keep their themes and open on their titles.

### Scene 17 · look at this one

Picture: `shots/scene-17.png`

> Step four, the album and song pages. Blowin' in the Wind's page wears its era's theme, and adds a Lyrics row linking to the official page, a Play row for Spotify, and its connections. On an album page, the real cover comes from the Cover Art Archive. If it fails to load, like New Morning's here, the page shows a drawn cover in the era's theme instead, so nothing shows broken.

### Scene 18 · look at this one

Picture: `shots/scene-18.png`

> Check on step three. Basement and Country has no photo the site can use. What does its panel open on?

### Scene 19 · look at this one

Picture: `shots/scene-19.png`

> Question two: what sits beside the lyrics link? A: the link only. B: the link and the song's first line, a real taste, but quoting a lyric, even one line, needs the publisher's permission. C: the link and a preview in our own words, like nine questions about war and freedom, and an answer that won't stay still. I recommend C. What should a song page show beside its lyrics link?

### Scene 20 · look at this one

Picture: `shots/scene-20.png`

> With A, the row is just the link.

### Scene 21 · look at this one

Picture: `shots/scene-21.png`

> With B, the site needs the publisher's permission first, for every song.

### Scene 22 · look at this one

Picture: `shots/scene-22.png`

> With C, every song in the dataset gains a one-sentence preview, written for the site.

### Scene 23 · part: Connections, listening, checks · look at this one

Picture: `shots/scene-23.png`

> Step five, threads and the map. A thread is a path through songs that share something, shown as cards you swipe. On a phone, cards are still the default, and a toggle switches to the map. It opens centred on the song you were on and its neighbours, about fifteen dots, and you drag to see more. On a laptop, both sit side by side.

### Scene 24 · look at this one

Picture: `shots/scene-24.png`

> Check on step four. The Cover Art Archive doesn't answer for Oh Mercy's cover. What does its album page show?

### Scene 25 · look at this one

Picture: `shots/scene-25.png`

> Step six. Spotify's player loads only when you tap Play, so a page you just read loads nothing from Spotify. Songs and moments that matter get a YouTube clip, like Newport in nineteen sixty-five, also after a tap. Search, and the phone check that opens every view at phone size, are as before.

### Scene 26 · look at this one

Picture: `shots/scene-26.png`

> Check on step five. On a phone, you're on Blowin' in the Wind's card in a thread, and you tap Map. Where does it open?

### Scene 27 · look at this one

Picture: `shots/scene-27.png`

> And on step six. You open Tangled Up in Blue's page and never tap Play. What does the page load from Spotify?

### Scene 28 · look at this one

Picture: `shots/scene-28.png`

> That's version two: six steps and three questions, each step showing what you picked. Draw on any step to leave a note, or approve.
