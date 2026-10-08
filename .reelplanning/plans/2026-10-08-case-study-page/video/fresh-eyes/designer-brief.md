# Fresh eyes: the designer's brief · video

You are a designer looking at "video", a narrated video of 23 scenes, before anyone reviews it. For
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
# Fresh eyes: designer · round 1 · stamp 419d038f2ae0

- G1 · scene 4 · "the phrase or thing": what you saw, and which rule it breaks; why it matters
- G2 · scene 7 · …
```

One finding a line, numbered G1, G2 … in scene order, each starting with its scene. Put the phrase or
the thing on screen in double quotes. Write "- none" if you have nothing. Leave room under each line: the
author answers each one there. Do not answer or fix anything yourself.

## The video, scene by scene

### Scene 1 · part: Today

Picture: `shots/scene-01.png`

> Here's the case study page as it is. You said it doesn't explain anything. It tells reelplanning in general words, in cards, before it shows anything that happened, and its videos open in the review page.

### Scene 2

Picture: `shots/scene-02.png`

> Three things fall short. The order of events, which comment led to which video, has to be pieced together from four cards. A visitor gets the review page, with marks, comments and a finish button they can't use. And the record of what happened sits in four places: the transcript, the reviews, the commits and the plans.

### Scene 3

Picture: `shots/scene-03.png`

> So, three changes in five steps. One record of what happened, built from all four. Videos to watch, not review. And a page that tells it in order, with a check that every event has a source.

### Scene 4 · part: One record

Picture: `shots/scene-04.png`

> Step one. A script reads the transcript, every review and the project's commits, and writes one timeline. Each event keeps its time, the owner's own words, quoted exactly, its source, and what it led to. The first walkthrough review, for example, leads to the commit that gave each era its own look.

### Scene 5

Picture: `shots/scene-05.png`

> Question three, for step one: what does the timeline say of the agent's side? A: one line per event, from its commit message. B: also quote the agent's chat replies. C: only the owner's side. I recommend A.

### Scene 6

Picture: `shots/scene-06.png`

> With A, each build reads in a line, like each era its own art direction.

### Scene 7

Picture: `shots/scene-07.png`

> With B, every step also carries the agent's reply, which makes it much longer.

### Scene 8

Picture: `shots/scene-08.png`

> With C, what was built shows only as pictures.

### Scene 9 · part: Videos to watch

Picture: `shots/scene-09.png`

> Step two. A watch page plays one video at a time, chosen from a list named by what each video is. Under it, its chapters and questions jump there, and each question shows what the owner answered. There's no mark, no comment box, no finish.

### Scene 10

Picture: `shots/scene-10.png`

> Question one: how should a video play there? A: a rendered video file, in the browser's own player. B: reelplanning's player in a watch-only mode. C: the review player as it is, with better names. I recommend A, though rendering is slow on this machine, so I'd time one first.

### Scene 11

Picture: `shots/scene-11.png`

> With A, each video is a plain file that plays anywhere, with nothing to fill in.

### Scene 12

Picture: `shots/scene-12.png`

> With B, reelplanning itself changes first, and its player hides everything a reviewer uses.

### Scene 13

Picture: `shots/scene-13.png`

> With C, the review page stays, marks and all.

### Scene 14

Picture: `shots/scene-14.png`

> A quick check. On the watch page, you click question four of the desktop walkthrough. What happens?

### Scene 15 · part: A page in order

Picture: `shots/scene-15.png`

> Step three. The study page becomes a vertical timeline over three days. Each plan is a stretch, headed by the words that started it. Along it come the messages, the plans, each video with a still and a watch link, each review, and what changed after, with before and after pictures.

### Scene 16

Picture: `shots/scene-16.png`

> Question two: how much of the timeline is open at first? A: each plan's videos and reviews open, with small messages and details folded. B: everything open. C: only each plan's heading. I recommend A.

### Scene 17

Picture: `shots/scene-17.png`

> With A, about thirty events show, and the rest open in place.

### Scene 18

Picture: `shots/scene-18.png`

> With B, all of them show, and the plans get harder to see.

### Scene 19

Picture: `shots/scene-19.png`

> With C, the order of events stays hidden until you open a plan.

### Scene 20

Picture: `shots/scene-20.png`

> Step four. The page opens with one real loop instead of a diagram: the request, the plan video's first question, the owner's own answer, the first build, the words boring and stock, and the themed site. Each links down to its place on the timeline.

### Scene 21

Picture: `shots/scene-21.png`

> Step five. A check opens every page at phone and computer size, and fails on an error, a broken link, an event with no source, or a quote its source doesn't hold word for word.

### Scene 22

Picture: `shots/scene-22.png`

> Another quick check. Someone tidies a quote, writing don't where the owner wrote dont. What does the check do?

### Scene 23

Picture: `shots/scene-23.png`

> That's the plan. Draw on any step to leave a note, or approve it.
