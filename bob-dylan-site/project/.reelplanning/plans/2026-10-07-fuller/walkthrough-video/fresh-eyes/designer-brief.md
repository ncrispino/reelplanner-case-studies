# Fresh eyes: the designer's brief · walkthrough-video

You are a designer looking at "walkthrough-video", a narrated video of 18 scenes, before anyone reviews it. For
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
# Fresh eyes: designer · round 1 · stamp f0c6dc2b2512

- G1 · scene 4 · "the phrase or thing": what you saw, and which rule it breaks; why it matters
- G2 · scene 7 · …
```

One finding a line, numbered G1, G2 … in scene order, each starting with its scene. Put the phrase or
the thing on screen in double quotes. Write "- none" if you have nothing. Leave room under each line: the
author answers each one there. Do not answer or fix anything yourself.

## The video, scene by scene

### Scene 1 · part: What landed

Picture: `shots/scene-01.png`

> The site has more on every page now. Each era tells its story beside a gallery of photographs, most moments have a page with a picture of their own, and every album has its player, an essay, and a track list that opens in place. Wide windows get a rail at the side, and pages link out to Wikipedia and MusicBrainz.

### Scene 2

Picture: `shots/scene-02.png`

> Step one. Every era now has three short sections, of about eighty words each: what happened, the music, and what it led to. Each moment has about a hundred and twenty words, and each album an essay of about a hundred and fifty. None of it quotes a lyric, and the data check holds each text to its length.

### Scene 3

Picture: `shots/scene-03.png`

> Step two. Thirty-eight more photographs from Wikimedia Commons, sixty-four in all. Two choices: a moment's photo belongs to its moment, and only tops up an era's gallery when the gallery has fewer than three. And many moment photos show the place, not the event, like Big Pink for the basement sessions; the caption says so.

### Scene 4

Picture: `shots/scene-04.png`

> Step three. Under every era's full screen come its bands: the story and gallery, records and moments, songs to start with, and threads. Five choices. Every era gets them, the home page too. The records and moments band shows only on a computer. A moment with no clip or photo shows the era's photograph, labelled. The gallery is a grid, with each credit when a photo opens. And an era lists at most six threads.

### Scene 5

Picture: `shots/scene-05.png`

> That first choice is question five. A: the bands stay on the home page too, so scrolling down from any era opens its story. B: they show only at an era's own address, and the home page keeps the spreads alone. I recommend A.

### Scene 6

Picture: `shots/scene-06.png`

> With A, the home page stays as built: a long page, with every era's story under it.

### Scene 7

Picture: `shots/scene-07.png`

> With B, the home page loses the bands, and there are two timelines to keep.

### Scene 8 · part: Albums and songs

Picture: `shots/scene-08.png`

> Step four. An album page has the cover and its Spotify player on the left, and the essay and track list on the right. Three choices: under the tracks, six connections that lead off the album, not all of them; a song's In threads band also lists the thread made from that song; and Fallen Angels has no player, because MusicBrainz lists no Spotify album for it.

### Scene 9

Picture: `shots/scene-09.png`

> Off the plan: the Also in this era row is gone, because the previous and next album, with their covers, show the same era just below.

### Scene 10

Picture: `shots/scene-10.png`

> Fallen Angels is question four. A: nothing takes the player's place, and its songs keep their own players. B: one line, Find Fallen Angels on Spotify, that opens a Spotify search for it. I recommend B.

### Scene 11

Picture: `shots/scene-11.png`

> With A, the album page stays as built.

### Scene 12

Picture: `shots/scene-12.png`

> With B, one link sits where the player would be.

### Scene 13 · part: Wide windows and links out

Picture: `shots/scene-13.png`

> Step five. From fourteen hundred and forty pixels, a rail sits at the right of album, song and moment pages: the era, a bar for each era with this one lit, and quick links. The content lines up with the header, so at fourteen forty it is nine hundred and eighty-four pixels wide, and the full twelve hundred from about nineteen hundred.

### Scene 14

Picture: `shots/scene-14.png`

> Step six. Read on, with Wikipedia and MusicBrainz, ends each page. Eras are not in MusicBrainz, so seven eras got a Wikipedia article picked by hand, and four have none. And songs that are not on his albums get no links.

### Scene 15

Picture: `shots/scene-15.png`

> And eight gaps the photo search could not fill: Back to the Roots has two photographs, and seven moments have no photo or clip. The desktop check names them and does not fail on them; any new gap fails.

### Scene 16

Picture: `shots/scene-16.png`

> What ran: the data check, the build, the phone check, and the desktop check at two sizes, all passing; and a code check by a fresh agent, whose six findings are answered. Not done: questions four and five, the eight gaps, and checking every sentence of the new writing.

### Scene 17

Picture: `shots/scene-17.png`

> The rest of the choices are on this list, nine of them, one line each.

### Scene 18

Picture: `shots/scene-18.png`

> That's the fuller site. Seeing it run, anything you'd change?
