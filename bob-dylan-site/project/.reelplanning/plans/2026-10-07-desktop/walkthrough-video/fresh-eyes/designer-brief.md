# Fresh eyes: the designer's brief · walkthrough-video

You are a designer looking at "walkthrough-video", a narrated video of 16 scenes, before anyone reviews it. For
each scene you get a picture of it at rest (its last moment, as the review page shows it: the player's chips,
captions and a detail's glyph included) and what the narration says over it. Look at every picture, at the size it is.

**This is a rebuild: look only at what it changed.** Scenes 9, 11 of the 16 are new or changed since
the last build, and those are what you look at. Scenes 8, 10, 12 are here for context only,
the scene just before or after a changed one: they have not changed and had their look, so list nothing on them. The
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
# Fresh eyes: designer · round 1 · stamp a9e1f178072d

- G1 · scene 4 · "the phrase or thing": what you saw, and which rule it breaks; why it matters
- G2 · scene 7 · …
```

One finding a line, numbered G1, G2 … in scene order, each starting with its scene (only scenes 9, 11). Put the phrase or
the thing on screen in double quotes. Write "- none" if you have nothing. Leave room under each line: the
author answers each one there. Do not answer or fix anything yourself.

## The video, scene by scene

### Scene 8 · context only: it did not change, list nothing on it

Picture: `shots/scene-08.png`

> Off the plan: the tablet also hides the map's own Cards and Map button beside a thread's cards, the same leftover button this plan removes on a computer.

### Scene 9 · look at this one

Picture: `shots/scene-09.png`

> And the threads list shows each thread's covers from all its songs; an old tune, or another artist's version, shows the cover of the Dylan song it leads to.

### Scene 10 · context only: it did not change, list nothing on it

Picture: `shots/scene-10.png`

> One question came up while building. On a computer, the Cards and Map button is gone, so the full map has no way to the thread cards. A: add a link, a thread from this song, to the map page. B: no link; open the song, then start a thread from there. I recommend A.

### Scene 11 · look at this one

Picture: `shots/scene-11.png`

> With A, the map page's header gets one link to a thread from its song.

### Scene 12 · context only: it did not change, list nothing on it

Picture: `shots/scene-12.png`

> With B, it stays as built: two clicks, through the song page.
