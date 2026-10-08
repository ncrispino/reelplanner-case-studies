# Decisions

Append-only ledger. `reel record` adds entries from a plan review; a plan that changes one adds a superseding entry and says why. `reel check` enforces this.

| id | date | plan | step | question | chosen | status |
|---|---|---|---|---|---|---|
| D-001 | 2026-10-08 | 2026-10-08-case-study-page | 1 | What does the timeline say of the agent's side? | **One line per event, from its commit message** | active |
| D-002 | 2026-10-08 | 2026-10-08-case-study-page | 2 | How should a video play on the watch page? | **i guess the rendered video file is fine to start but the watch only might be useful too** (not the recommendation) | active |
| D-003 | 2026-10-08 | 2026-10-08-case-study-page | 3 | How much of the timeline is open at first? | **Each plan's videos and reviews open; the rest folded** | active |

### D-001 — What does the timeline say of the agent's side?

- **Chosen:** One line per event, from its commit message — Short; the agent's reasoning stays in the transcript.
- **Not chosen:** Also quote the agent's chat replies (Much longer; the replies are long.); Only the owner's side (What was built shows only as pictures.)
- **Where:** 2026-10-08-case-study-page, step 1 (The timeline, from the transcript, the reviews and the commits (question 1)); components: study, study-page, timeline
- **Status:** active

### D-002 — How should a video play on the watch page?

- **Chosen:** i guess the rendered video file is fine to start but the watch only might be useful too
- **Not chosen:** A rendered video file, in the browser's own player (Plays anywhere; rendering here is slow, so one is timed first.); reelplanning's player in a watch-only mode (A change to reelplanning itself first.); The review player as it is, with better names (The marking-up stays.)
- **Where:** 2026-10-08-case-study-page, step 2 (A watch-only viewer for the videos (question 2)); components: timeline
- **Status:** active

### D-003 — How much of the timeline is open at first?

- **Chosen:** Each plan's videos and reviews open; the rest folded — About 30 of some 70 events show; one click opens a fold.
- **Not chosen:** Everything open (A long page; the plans are harder to see.); Only each plan's heading (The order stays hidden until a plan is opened.)
- **Where:** 2026-10-08-case-study-page, step 3 (The study page, told as a timeline (question 3)); components: study, study-page, timeline
- **Status:** active
