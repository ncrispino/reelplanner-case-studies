# Fresh eyes: the designer's brief · walkthrough-video

You are a designer looking at "walkthrough-video", a narrated video of 16 scenes, before anyone reviews it. For
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
# Fresh eyes: designer · round 1 · stamp e27bf6576a59

- G1 · scene 4 · "the phrase or thing": what you saw, and which rule it breaks; why it matters
- G2 · scene 7 · …
```

One finding a line, numbered G1, G2 … in scene order, each starting with its scene. Put the phrase or
the thing on screen in double quotes. Write "- none" if you have nothing. Leave room under each line: the
author answers each one there. Do not answer or fix anything yourself.

## The video, scene by scene

### Scene 1 · part: What landed

Picture: `shots/scene-01.png`

> On a computer, the site now fills the window. A header with search, each era across the whole screen, two-column pages, threads along the years, and a map you can click. On a phone, nothing changed: eighteen pages compared pixel for pixel are the same.

### Scene 2

Picture: `shots/scene-02.png`

> Step one. A click or a tap on a dot opens its song now, on a phone too. Two choices: the plus and minus buttons show from tablet width up, since a phone pinches; and hovering a dot shows its own label in place of the browser's tooltip.

### Scene 3

Picture: `shots/scene-03.png`

> Step two. The header stays at the top as you scroll, so search is always there. And a tablet keeps today's column, with wider margins: at nine hundred pixels a thread still has its cards and map side by side.

### Scene 4

Picture: `shots/scene-04.png`

> Step three. Each era fills the screen, and scrolling snaps to the next. The era is one piece of page at every width, laid out side by side from eleven hundred pixels. As you scroll, the header's colour fades into the next era's and the old text dims. And on the timeline, short eras' names are cut short; the current one is written in full.

### Scene 5

Picture: `shots/scene-05.png`

> Step four. A song page has the cover, note and players on the left, and the words, connections and a small map on the right. The words card is drawn twice, once for each layout, so the phone page stays exactly as it was. And the cover sits small, above the title, so a long title never breaks inside a word.

### Scene 6

Picture: `shots/scene-06.png`

> Off the plan: a moment lists the songs its story names, and the era's records from that year, because the data has no list of songs for each moment.

### Scene 7

Picture: `shots/scene-07.png`

> Step five. A thread's cards are spaced evenly, with the years between them written on the line, since a forty-year gap would push the next card off the row. Its map opens on the first song's neighbours. And the map page opens with its song already in the panel.

### Scene 8

Picture: `shots/scene-08.png`

> Off the plan: the tablet also hides the map's own Cards and Map button beside a thread's cards, the same leftover button this plan removes on a computer.

### Scene 9

Picture: `shots/scene-09.png`

> And the threads list shows each thread's covers from all its songs, because two threads start with old tunes that have no cover.

### Scene 10

Picture: `shots/scene-10.png`

> One question came up while building. On a computer, the Cards and Map button is gone, so the full map has no way to the thread cards. A: add a link, a thread from this song, to the map page. B: no link; open the song, then start a thread from there. I recommend A.

### Scene 11

Picture: `shots/scene-11.png`

> With A, the map page's header gets one link to a thread from its song.

### Scene 12

Picture: `shots/scene-12.png`

> With B, it stays as built: two clicks, through the song page.

### Scene 13

Picture: `shots/scene-13.png`

> Step six. Search shows three columns. And the desktop check fails on more than the plan listed: the phone's bottom bar or no header, and any arrow that moves nothing.

### Scene 14

Picture: `shots/scene-14.png`

> What ran: the data check, the build of fourteen hundred pages, the phone check and the new desktop check at two sizes, all passing. Not done: question four, and the hover label is checked only by hand.

### Scene 15

Picture: `shots/scene-15.png`

> The rest of the choices are on this list, twelve of them, one line each.

### Scene 16

Picture: `shots/scene-16.png`

> That's the site on a computer. Seeing it run, anything you'd change?
