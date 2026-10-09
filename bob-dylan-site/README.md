# Bob Dylan, explored: a case study

**The full write-up, with pictures and the videos, is a page:**
https://ncrispino.github.io/reelplanner-case-studies/bob-dylan/ (its source: [docs/bob-dylan/index.html](../docs/bob-dylan/index.html)).
This file is the same story in plain text.

One person and one Claude Code session built an interactive site about Bob Dylan, planned and reviewed through
[reelplanner](https://github.com/ncrispino/reelplanner) (then called reelplanning): every plan became a narrated video
the owner watched and answered, and every build became a walkthrough video of what landed and the choices the agent
made on its own.

The study has a greenfield part (the first plan, from an empty folder) and a brownfield part (three more plans on the
working site), seven videos in all, each reviewed. It ran from 6 to 8 October 2026, over about 36 hours.

- **The site:** [docs/bob-dylan/site/](../docs/bob-dylan/site/) (on Pages:
  https://ncrispino.github.io/reelplanner-case-studies/bob-dylan/site/)
- **The seven videos, to watch:** https://ncrispino.github.io/reelplanner-case-studies/bob-dylan/watch/
- **The project as committed** (source, data, every plan, review and decision): [project/](project/)
- **The session transcript:** [transcript.zip](transcript.zip) (42 MB; inside, `transcript.jsonl`, 9,595 lines), the
  session as Claude Code recorded it, one JSON event a line, up to the end of the build: it stops before the owner's
  message asking to publish the study. The owner's email, their account's skills and connected accounts, and their
  organization's id are redacted.
- **Ran on:** Claude Opus 5.5 (`claude-opus-5-5`), Claude Code 2.1.291, `reelplanning` 0.2.0, HyperFrames 0.8.52.

The first request, in full: *"Build an interactive website about Bob Dylan … explore his life and music — the
different eras, the albums, the songs and how they connect — … more engaging than reading a Wikipedia article, and it
should work well on a phone. Start from scratch in this empty folder."* The owner chose reelplanner's whole pipeline:
answers recorded as decisions that later plans are checked against, every review kept, and a walkthrough after each
build.

## How each video was made

The same loop for every plan:

1. **The plan** is written into `.reelplanning/plans/<plan>/plan.md`: the problem, about six steps (each with its
   cases, interface, a worked example and a diagram), and the open questions with options and a recommendation.
   `reel check` holds it to the decisions already made.
2. **The plan video** is built from the plan with HyperFrames: a storyboard and script, narration (Kokoro,
   `am_michael` at 1.25×), one HTML frame per scene. Each open question is a scene that stops and asks.
3. **Fresh eyes:** two agents that never saw the conversation, a newcomer and a designer, look at every scene and
   write findings; each is answered (fixed, or kept with a reason) before the owner sees it.
4. **The review:** the owner watches it on the local review page, answers the questions, comments on scenes, and
   approves or asks for changes. `reel record` files the review and adds the answers to the decision log.
5. **The build**, then `walkthrough.md` (what landed, step by step, and a row for every choice the agent made alone),
   a **code check** by another fresh agent (the code against the plan and the decisions), and the **walkthrough
   video**: the real pages, shown from screenshots, stopping on the choices you would notice or could not easily undo.
6. **The walkthrough review:** accept or flag each choice, answer any question the build raised, comment. What it
   asks for is built, and the review is filed the same way.

## The progression

| | Plan | Kind | Plan video | Walkthrough video |
|---|---|---|---|---|
| 1 | The site (`2026-10-06-dylan-site`) | greenfield | 28 scenes, 6:17, reviewed twice | 11 scenes, 2:11, reviewed twice |
| 2 | Every track a page (`2026-10-07-every-song`) | brownfield | 22 scenes, 3:58 | 12 scenes, 2:11 |
| 3 | The site on a computer (`2026-10-07-desktop`) | brownfield | 32 scenes, 5:37 | 16 scenes, 3:03, reviewed twice |
| 4 | A fuller site (`2026-10-07-fuller`) | brownfield | none: approved in chat | 18 scenes, 3:52 |

114 decisions were recorded across the four plans (`project/.reelplanning/decisions.md`).

### 1. The site, from an empty folder

**Plan, first review: changes asked.** Five questions. The owner answered four (all 39 albums with 16 in full, the
real covers, threads plus a map, an embedded Spotify player) and wrote their own answer to the first, how to build it:
*"which can produce a sophisticated website that is graceful and visually appealing, while fully featured? can you
detail more visually the deferences?"* Comments asked for lyrics with a preview, *"we are going to want good per-era
themeing, as well as real images. else the cite is too plain, just procedural"*, the map on a phone as well, and YouTube clips beside
Spotify.

**Plan, second review: approved.** The revised plan asked again, with pictures: Astro with a page per song; photos
from Wikimedia Commons, free-licensed; a link to the lyrics and a preview in our words. One comment asked whether
lyrics could be shown with attribution; another, that the site could use other images and should still be *"completely visually full"*.

**Built:** an Astro site of about 630 static pages (about 800 after the walkthrough's changes; 1,415 by the end of
the study): eras on a timeline, albums, songs, moments, threads, a map of
connections, search, 26 Commons photos, and data, phone and later desktop checks.

**Walkthrough, first review: changes asked.** Question 4 (which YouTube clips) answered "official, plus well-known
unofficial ones". The comments were the sharpest of the study: *"the fonts and styling can be much better, more
individualistic; it's kind of boring and stock right now. each era should mean something and visually be represented
by that via the page. it shouldnt be standardized, it should evoke the creativity of bob dylan"*; on the threads and
map, *"visually this needs much enhancement, it is very basic and even ugly"*; on the four songs with no Spotify player,
*"for the 4 that werent found we must find a replacement for it; can't leave dry"*; why the connections were not fully
filled; why short lyric quotes were not allowed. After it: each era got its own art direction (its own typeface,
palette and texture), the threads and map were redesigned, connections went from 49 to 135 (the first writers had
worked one era at a time, so almost nothing crossed eras), Spotify players from 177 to all 181 album songs, YouTube
clips from 2 to 179, players load with the page, and album pages show the full track list.

**Walkthrough, second review: approved,** with one concern, whether the lyric excerpts were empty. That led to a
summary of every album song's words, in our own words (decision D-033: lyrics are summarised, not quoted).

### 2. Every track a page (brownfield)

The owner noticed tracks like "If You See Her, Say Hello" on the album pages had no page. **Plan: approved** (all 277
tracks get a page; another writer's song gets the same page). **Built:** every track of the 39 albums mapped to a song
(271 new songs), Spotify for all 452 album songs, official clips for 351, lyrics links for 421, 30 new connections.
**Walkthrough: approved,** with three asks, all built: credit each co-writer (21 songs), find a lyrics provider that is
not blocked (Lyrics.com, licensed through LyricFind, for 22 songs bobdylan.com lacks), and bring back the 1979 Saturday
Night Live clip.

### 3. The site on a computer (brownfield)

The owner: *"right now there is poor formatting … and functionality … as a lot was meant for a phone. we need to fill
in more and fix it so it looks great on a computer too."* Planned beside every-song and reviewed together.
**Plan: approved** (content up to 1200 px in two columns, one era per screen with scrolling between them, a map dot
selects its song). **Built:** map clicks that reach their dots, a header with search, eras across the whole window,
two-column pages, threads along the years, a desktop check. **Walkthrough, first review: changes asked.** Question 4,
raised during the build, answered A (a link from the map to a thread); one choice flagged (the album page's left column
not sticky); covers asked for on every thread; and *"some on the desktop feels kind of bare; we might need more
content. like the sides of the page are still kind of empty, and especially the biogrpahy pages with no other contents.
they should have links, photos, etc. … now i dont want it cluttered, i just want more informaiton, more visuals, more
interaction even."* That comment
became plan 4. **Second review: approved.**

### 4. A fuller site (brownfield)

Written from that comment and **approved in chat** with its recommended answers, so it has no plan video: a context
rail from 1440 px, links out to Wikipedia and MusicBrainz, about 250 words an era, 120 a moment, 150 an album.
**Built:** stories for 11 eras, 41 moments and 39 albums (written by parallel agents, every flagged fact checked), 38
more Commons photos (64 in all), each album's Spotify player and essay, track rows that open in place, the rail, links
out. Two questions came up during the build and went into the video. **Walkthrough: approved,** both questions answered
as recommended (the eras' bands on the home page too; a "Find Fallen Angels on Spotify" link where its player would be),
with two notes, both built: *"maybe every era should have something it links to, for consistency"* (each era now links
to its section of Wikipedia's Bob Dylan article), and, on the photos Commons could not supply, *"is there something
else we can put here? be creative but also consistent"* (a card drawn in the era's own look for each moment with no
photo, and the era's record covers for a gallery short of three).

## What the owner's feedback did

- **It set the bar for the look.** The first walkthrough's "boring and stock" comment turned a working but plain site
  into one with a theme per era. No plan had asked for that in those words; the walkthrough showed the real pages, and
  that is what drew it out.
- **It found what was missing.** A site built for a phone and stretched on a computer, and tracks with no page, came
  from the owner using the built site; pages that felt bare at the sides came from a comment on the desktop walkthrough.
  Each became the next plan.
- **It asked "are you sure?"** About lyric quotes, missing players, blocked lyrics providers and an unavailable clip,
  the owner pushed back on a limit the agent had accepted. Some limits held (lyrics are summarised, not quoted); most
  turned out to have a way round (other providers, other uploads, a drawn card in place of a photo).
- **Most choices were accepted as made.** Across the walkthroughs, most of the agent's own calls were accepted
  without comment; the ones flagged or rewritten are listed above.

## Folder layout

```
bob-dylan-site/
  README.md        this write-up
  transcript.zip        the session up to the end of the build, as Claude Code recorded it (the owner's email, account skills and connected accounts redacted)
  project/         the site's repository as committed (git archive of its last commit):
    src/ data/ tools/                the Astro site, its data and the scripts that fetch and check it
    .reelplanning/plans/<plan>/      plan.md, walkthrough.md, reviews/, code-check/, runs/,
                                     video/ and walkthrough-video/ (storyboard, script, frames; no voice)
    .reelplanning/decisions.md       the 114 decisions
docs/bob-dylan/
  site/            the built site, under its Pages path
  review/          the seven videos in the review player, voice included
```

Not here yet: side-by-side comparisons with plain-text and HTML plans, planned for later.
