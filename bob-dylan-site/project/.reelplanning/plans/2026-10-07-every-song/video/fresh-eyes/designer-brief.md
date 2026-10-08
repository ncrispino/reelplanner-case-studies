# Fresh eyes: the designer's brief · video

You are a designer looking at "video", a narrated video of 22 scenes, before anyone reviews it. For
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
# Fresh eyes: designer · round 2 · stamp 4f65ad3e7552

- G1 · scene 4 · "the phrase or thing": what you saw, and which rule it breaks; why it matters
- G2 · scene 7 · …
```

One finding a line, numbered G1, G2 … in scene order, each starting with its scene. Put the phrase or
the thing on screen in double quotes. Write "- none" if you have nothing. Leave room under each line: the
author answers each one there. Do not answer or fix anything yourself.

## The video, scene by scene

### Scene 1 · part: Dead rows

Picture: `shots/scene-01.png`

> Blood on the Tracks has ten tracks, and seven of them have a page. "You're a Big Girl Now", "Meet Me in the Morning" and "If You See Her, Say Hello" are rows with nothing behind them. Across all thirty-nine albums, two hundred and seventy-seven tracks are like that.

### Scene 2

Picture: `shots/scene-02.png`

> About a hundred and fifty are his own songs. About a hundred and ten are other writers' songs he recorded: standards, carols, folk and blues. About eight are The Band without him, on The Basement Tapes. And about ten are instrumentals and alternate takes.

### Scene 3

Picture: `shots/scene-03.png`

> This falls short of what you chose. You picked all thirty-nine albums, sixteen in full. The sixteen are not in full: each has seven or eight songs written, so fifty-four of their tracks have no page. That should have been flagged when it happened.

### Scene 4

Picture: `shots/scene-04.png`

> Two changes, in four steps. First, every track becomes a song, with its writing, its player and its links. Then every track becomes part of the site: connections, threads, album pages, search and the map, with a check that fails if a track ever loses its page.

### Scene 5 · part: Every track a song

Picture: `shots/scene-05.png`

> Step one. A new script reads each album's track list and writes a record for every track that has no song yet. Then writers add each song's note, themes, preview and summary, in our own words, never quoting the lyrics, just as the hundred and eighty-one were written.

### Scene 6

Picture: `shots/scene-06.png`

> Some tracks need care. On Pat Garrett, "Billy 4" and "Billy 7" join "Billy 1", which already has a page, as its takes. A live take of a song that already has a page links to that page. And a Band track says The Band, not Dylan.

### Scene 7

Picture: `shots/scene-07.png`

> Question one: which tracks get a page? A: the fifty-four missing from the sixteen landmarks, about a hundred and twenty new pages. B: all two hundred and seventy-seven, about six hundred. C: none. I recommend B.

### Scene 8

Picture: `shots/scene-08.png`

> With A, Blood on the Tracks is complete, and Triplicate keeps its twenty-seven empty rows.

### Scene 9

Picture: `shots/scene-09.png`

> With B, every row of every album opens a page.

### Scene 10

Picture: `shots/scene-10.png`

> With C, "If You See Her, Say Hello" stays a row with nothing behind it.

### Scene 11

Picture: `shots/scene-11.png`

> Question two: how much is written for a song by another writer? A: the same page as his own songs. B: a shorter page, the note and the player. C: no page, just the writer's name on the row. I recommend A.

### Scene 12

Picture: `shots/scene-12.png`

> With A, "Stardust" gets a note naming Hoagy Carmichael, a summary, and its player.

### Scene 13

Picture: `shots/scene-13.png`

> With B, "Stardust" gets one sentence and the player.

### Scene 14

Picture: `shots/scene-14.png`

> With C, "Stardust" is a name in Triplicate's track list, and not a link.

### Scene 15

Picture: `shots/scene-15.png`

> A quick check, a question to see whether the plan does what you expect. This one's on step one. On Self Portrait, you click "She Belongs to Me (live)". Its song had no page before this plan. Where do you land?

### Scene 16 · part: Links and connections

Picture: `shots/scene-16.png`

> Step two. The same three fetchers that found today's links run again for the new songs: Spotify, YouTube's official clips, and the lyrics on bobdylan.com. That site lists songs he wrote, so another writer's song shows who wrote its words instead of a lyrics link.

### Scene 17

Picture: `shots/scene-17.png`

> Step three. A pass across the whole catalogue links the new songs to others, and only when it is sure. "If You See Her, Say Hello" joins "You're Gonna Make Me Lonesome When You Go", two songs about a love that has ended. Many standards will have no connection at all.

### Scene 18

Picture: `shots/scene-18.png`

> A quick check on step two. You open "Stardust". What is where the lyrics link would be?

### Scene 19 · part: Part of the site

Picture: `shots/scene-19.png`

> Step four. On an album page every row becomes a link, so the "its story" marks go. Search finds every track, and the map gains their dots. The site grows from eight hundred and two pages to about fourteen hundred. And the data check fails on any album track with no song.

### Scene 20

Picture: `shots/scene-20.png`

> A quick check on step three. "Christmas Island", on Christmas in the Heart, has nothing the writers are sure ties it to another song. What is on its page?

### Scene 21

Picture: `shots/scene-21.png`

> And one on step four. A track is added to an album's list later, with no song. What happens the next time the checks run?

### Scene 22

Picture: `shots/scene-22.png`

> That's the plan: every track a song, and every song part of the site. Two questions: which tracks, and how much for other writers' songs.
