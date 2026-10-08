# Fresh eyes: the designer's brief · walkthrough-video

You are a designer looking at "walkthrough-video", a narrated video of 22 scenes, before anyone reviews it. For
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
# Fresh eyes: designer · round 1 · stamp cd4a6fa38d05

- G1 · scene 4 · "the phrase or thing": what you saw, and which rule it breaks; why it matters
- G2 · scene 7 · …
```

One finding a line, numbered G1, G2 … in scene order, each starting with its scene. Put the phrase or
the thing on screen in double quotes. Write "- none" if you have nothing. Leave room under each line: the
author answers each one there. Do not answer or fix anything yourself.

## The video, scene by scene

### Scene 1 · part: What was built

Picture: `shots/scene-01.png`

> Here is the site, built from the plan you approved, on a phone. Eleven eras, thirty-nine albums, two hundred and sixteen songs. Each era opens on a free photo of Dylan from those years, or, where there is none, a photo of the place or event.

### Scene 2

Picture: `shots/scene-02.png`

> Step one: every era, album and song is a real page at its own address. Tap a cover on the Going Electric panel, and it grows into the album page's header.

### Scene 3

Picture: `shots/scene-03.png`

> Two choices here you'd notice. A mistyped address lands on the 404 page, which sends you to search with the address's words, instead of showing results on the 404 page itself. And from seven hundred sixty-eight pixels wide, the bar moves to the top of the screen; on a phone it stays at the bottom.

### Scene 4

Picture: `shots/scene-04.png`

> Step two, the dataset. Track lists come from MusicBrainz, covers from the Cover Art Archive, photos from Wikimedia Commons. The data check passes with these counts, and in a scratch copy broken by hand, it names a connection to a song that does not exist, and a photo with no licence.

### Scene 5

Picture: `shots/scene-05.png`

> Two choices on the data. There are forty-nine connections, each one a fact the writers were sure of, instead of the hundred and forty the plan guessed. And each photo names its era and kind, instead of each era listing its photos.

### Scene 6

Picture: `shots/scene-06.png`

> And one off-plan change. The plan allowed two credited lines of lyrics on a song page. When the AI tried to write them, a content filter stopped it, so no excerpt is written. The song page shows the preview in our words and the link, and the field is there for lines added by hand.

### Scene 7

Picture: `shots/scene-07.png`

> A quick check, a question to see whether the build does what you expect. Wikimedia Commons has no free photo of Dylan from nineteen sixty-seven to nineteen seventy. What does the Basement and Country panel open on?

### Scene 8

Picture: `shots/scene-08.png`

> Step three: each era in its own look. Greenwich Village, Going Electric, Gospel, the Late Renaissance.

### Scene 9

Picture: `shots/scene-09.png`

> Here is Basement and Country, opening on the Isle of Wight festival in nineteen sixty-nine, where he headlined. One choice: the themes use fonts already on the phone, so nothing downloads, instead of a web font for each era. The look varies a little from phone to phone.

### Scene 10

Picture: `shots/scene-10.png`

> Step four, the album and song pages: Blonde on Blonde's songs, and Like a Rolling Stone, with its note, its themes, and its connections.

### Scene 11

Picture: `shots/scene-11.png`

> Three choices on these pages. The lyrics link opens in a new tab, so you keep your place. A song page steps to the album's previous and next song. And an album lists the dataset's songs headed Selected songs, seven of fourteen, so the list doesn't pass for the whole album.

### Scene 12

Picture: `shots/scene-12.png`

> Step five: a thread as cards, and the map on a phone, opened on the song you were on. On a laptop, the two sit side by side.

### Scene 13

Picture: `shots/scene-13.png`

> One choice here: the twelve threads are built from the dataset's themes and connections, each card's sentence the song's own note, instead of twelve threads written card by card.

### Scene 14

Picture: `shots/scene-14.png`

> Step six. Search finds Like a Rolling Stone from a typo, and the Spotify and YouTube players load only after a tap.

### Scene 15

Picture: `shots/scene-15.png`

> Three choices in step six. Spotify ids come from Spotify's own album pages, kept only when the title matches, a hundred and seventy-seven of a hundred and eighty-one songs. Only two clips, both from Bob Dylan's official channel. And search forgives a typo or two, one edit in a short word, two in a long one.

### Scene 16

Picture: `shots/scene-16.png`

> Step six reached five choices of my own, so its biggest comes back to you as a question. Which songs and moments get a YouTube clip? A: official uploads only, what is there now. B: well-known unofficial ones too, like Newport in nineteen sixty-five, though those are often taken down. C: no clips at all. I recommend A. Which songs and moments should get a YouTube clip?

### Scene 17

Picture: `shots/scene-17.png`

> With A, the two official clips stay, and nothing breaks.

### Scene 18

Picture: `shots/scene-18.png`

> With B, Newport and Manchester join, and the clips need watching for ones taken down.

### Scene 19

Picture: `shots/scene-19.png`

> With C, both clips go, and every song keeps its Spotify player.

### Scene 20

Picture: `shots/scene-20.png`

> What ran: the data check, the build, the phone check, and the search runs, all passing. A code check, a second AI that read the code against the plan, found ten things; each is fixed or logged. Not done: lyric excerpts, hosting, the real covers inside the checks, and more connections.

### Scene 21

Picture: `shots/scene-21.png`

> The rest of the choices, one line each. Flag any you'd have made the other way.

### Scene 22

Picture: `shots/scene-22.png`

> That's what was built. Seeing it run, anything you'd change?
