# Fresh eyes: the designer's brief · video

You are a designer looking at "video", a narrated video of 32 scenes, before anyone reviews it. For
each scene you get a picture of it at rest (its last moment, as the review page shows it: the player's chips,
captions and a detail's glyph included) and what the narration says over it. Look at every picture, at the size it is.

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
# Fresh eyes: designer · round 1 · stamp 5f42b45b49b4

- G1 · scene 4 · "the phrase or thing": what you saw, and which rule it breaks; why it matters
- G2 · scene 7 · …
```

One finding a line, numbered G1, G2 … in scene order, each starting with its scene. Put the phrase or
the thing on screen in double quotes. Write "- none" if you have nothing. Leave room under each line: the
author answers each one there. Do not answer or fix anything yourself.

## The video, scene by scene

### Scene 1 · part: On a computer today

Picture: `shots/scene-01.png`

> You opened the site on a computer, and it is still a phone: one column, seven hundred and twenty pixels wide, in the middle of the window. This plan makes it a site for a computer too, and fixes the map on the way.

### Scene 2

Picture: `shots/scene-02.png`

> On the home page, the era's look stops at the column's edges. On a thread, the map is a thin strip beside the cards, and the Cards and Map button is still there with both showing. And on the map, clicking a dot does nothing.

### Scene 3

Picture: `shots/scene-03.png`

> Three changes, in six steps. First, the map works. Then a layout for wide screens: a header, the era's look across the window, and two columns. Last, threads, the map and search on a computer, with a check that catches a phone page on a computer. Phones keep today's layout.

### Scene 4 · part: The map, fixed

Picture: `shots/scene-04.png`

> Step one, the map. It grabs the pointer as soon as you press, so that dragging works. But then the click lands on the map instead of the dot, and the song never opens. That is broken on phones too. Now the map grabs the pointer only once you move four pixels, so a press and release opens the song.

### Scene 5

Picture: `shots/scene-05.png`

> The mouse wheel scrolls the page again; the map zooms only with Control held, or with plus and minus buttons. Hovering a dot names it. And the phone check now taps a dot, and fails unless a song page opens.

### Scene 6 · part: A layout for wide screens

Picture: `shots/scene-06.png`

> Step two, the app shell. The window's width picks the layout. Up to seven hundred and sixty-seven pixels, a phone: today's layout, unchanged. Up to eleven hundred, a tablet: one wider column. From eleven hundred, the desktop layout.

### Scene 7

Picture: `shots/scene-07.png`

> On the desktop, a header runs across the top, with the tabs and a search field; press slash to type in it. The era's look fills the whole window, not just the column. And the content gets two columns.

### Scene 8

Picture: `shots/scene-08.png`

> Question one: how wide should the content go? A: up to twelve hundred pixels, in two columns. B: up to sixteen hundred, with a third column where there is room. C: keep the seven hundred and twenty pixel column, and only paint the era's look across the window. I recommend A.

### Scene 9

Picture: `shots/scene-09.png`

> With A, a song page is cover and players on the left, words and connections on the right.

### Scene 10

Picture: `shots/scene-10.png`

> With B, a wide monitor adds a third column, the song's map.

### Scene 11

Picture: `shots/scene-11.png`

> With C, the column stays, and the era's look fills the margins.

### Scene 12

Picture: `shots/scene-12.png`

> A quick check, a question to see whether the plan does what you expect. This one's on step one. You press on a dot, move two pixels, and let go. What happens?

### Scene 13

Picture: `shots/scene-13.png`

> Step three, the home page. On a computer, one era fills the screen: its photograph on the left half, its years and story on the right, its albums in a row underneath. An era with no photograph of him shows a photograph of the place instead, never an empty half.

### Scene 14

Picture: `shots/scene-14.png`

> The arrow keys, big arrows at the sides, or a click on the timeline across the top move to the next era. The look crossfades, and the address changes, so back and a shared link still work.

### Scene 15

Picture: `shots/scene-15.png`

> Question two: on a computer, does the home page give one era at a time, or all of them? A: one era fills the screen. B: all eleven down one long page. C: an overview of eleven columns first, each opening to A. I recommend A.

### Scene 16

Picture: `shots/scene-16.png`

> With A, Going Electric fills the screen, and the arrow brings the next era.

### Scene 17

Picture: `shots/scene-17.png`

> With B, you scroll from Hibbing to Rough and Rowdy, and the look changes as you go.

### Scene 18

Picture: `shots/scene-18.png`

> With C, eleven narrow columns come first, and a click opens one.

### Scene 19

Picture: `shots/scene-19.png`

> A quick check on step two. You open the site in a window nine hundred pixels wide. Which layout do you get?

### Scene 20

Picture: `shots/scene-20.png`

> Step four, album, song and moment pages, in two columns. On a song page, the cover, the note and the players stay on the left as you scroll. On the right: the words, the connections two across, and a small map of the song's neighbours. A song with no connections shows only the words there.

### Scene 21

Picture: `shots/scene-21.png`

> An album page puts its cover large beside the full track list, with the era's other albums under them. A moment puts its clip or photograph beside its story.

### Scene 22

Picture: `shots/scene-22.png`

> A quick check on step three. Back to the Roots has no photograph of Dylan. On a computer, what fills the left half of its screen?

### Scene 23 · part: Threads, the map and checks

Picture: `shots/scene-23.png`

> Step five, threads. A thread's cards run along a line of years, four at a time, with the map under them. Hover a card and its dot lights up. The Cards and Map button is gone at this width, because both are showing. On a phone, it stays.

### Scene 24

Picture: `shots/scene-24.png`

> The map page fills the window. Click a dot, and a panel describes the song, with a link to open it. Click an era in the legend, and the other eras dim.

### Scene 25

Picture: `shots/scene-25.png`

> Question three: on a computer, what should a click on a dot do? A: select it, and show the panel; a double click opens the song. B: open the song at once, as on a phone. I recommend A.

### Scene 26

Picture: `shots/scene-26.png`

> With A, you stay on the map, and the panel tells you about the song.

### Scene 27

Picture: `shots/scene-27.png`

> With B, every click takes you to a song page, and off the map.

### Scene 28

Picture: `shots/scene-28.png`

> A quick check on step four. I Believe in You has no connections. What is in the right column of its page?

### Scene 29

Picture: `shots/scene-29.png`

> Step six. Search shows its groups in three columns. And a new desktop check opens every view at two computer sizes. It fails on a sideways scroll, a button that does nothing, an era's look that stops short, a phone-width column, a dot that does nothing, or an error.

### Scene 30

Picture: `shots/scene-30.png`

> A quick check on step five. You open the Faith thread on a phone. Is the Cards and Map button there?

### Scene 31

Picture: `shots/scene-31.png`

> And one on step six. The Cards and Map button shows on a thread in a window fourteen hundred and forty pixels wide. Which check fails?

### Scene 32

Picture: `shots/scene-32.png`

> That's the plan: the map fixed first, then the site made for a computer. Three questions: how wide, how the home page shows the eras, and what a click on the map does.
