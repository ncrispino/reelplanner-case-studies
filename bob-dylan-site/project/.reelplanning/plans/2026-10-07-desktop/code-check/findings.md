# Code check: 2026-10-07-desktop

## Steps
- Step 1 — ✓ carried by `src/islands/map.ts` (pointer taken only past DRAG_PX = 4, hit ring r 14, Ctrl/⌘ wheel zoom around the pointer, + / − buttons, hover label that lights the dot's lines), `src/components/MapView.astro` (zoom buttons, hover label, touch / mouse hint), `tools/check-phone.mjs` (tap and press on a dot of /map/masters-of-war/ must open its song)
- Step 2 — ✓ carried by `src/layouts/Shell.astro` (sticky header with brand, Eras / Threads / Map / About, GET search form, "/" focuses it), `src/styles/site.css` (phone / tablet 768–1099 with 48 px margins / desktop from 1100, `--page-max: 1200px`, `.wide` two columns with a 320–380 px side, `.measure`, tab bar hidden from 1100)
- Step 3 — ✓ carried by `src/components/Timeline.astro` (eras stacked with `scroll-snap-type: y mandatory`, ‹ › buttons, ← → on the page, a full-width timeline with names, address follows the era), `src/components/EraSpread.astro` (photo the left half, story, album row and moments the right; dimming crossfade), `src/components/PhotoPanel.astro` (widths up to 2000 px), `src/pages/index.astro`, `src/pages/era/[id].astro` (`full`)
- Step 4 — ✓ carried by `src/pages/song/[id].astro` (sticky left column with cover, note, themes, players; words, two-across connections and the small map on the right; previous / next under both), `src/components/Words.astro`, `src/components/MapView.astro` (mode "small"), `src/components/Cover.astro` (`grow` srcset), `src/pages/album/[id].astro` (cover up to 480 px with why it matters, track list right, "Also in this era"), `src/pages/moment/[id].astro` (clip or era photo left, story and tied songs right)
- Step 5 — ✓ carried by `src/components/ThreadCards.astro` (row along a line of years, four across, ‹ ›, hover lights the dot, toggle gone, map under at 520 px), `src/components/MapView.astro` + `src/components/MapPanel.astro` + `src/pages/map-panel.json.ts` (map page fills the window with a side panel, legend filter), `src/islands/map.ts` (select on click, open on double-click, `filter`, `show`), `src/pages/threads/index.astro` (three across with covers), `src/pages/map/[id].astro`, `src/pages/map/index.astro`
- Step 6 — ✓ carried by `src/pages/search/index.astro` + `src/islands/search.ts` (three columns: Eras and Moments, Albums, Songs), `src/pages/about.astro` (two columns), `tools/check-desktop.mjs` (12 views × 1440 × 900 and 1100 × 800, screenshots in checks/desktop/, fails on sideways scroll, a showing toggle, era background, content under 60 %, a dot that neither opens nor selects, errors), `package.json` (`npm test` ends with the desktop check)

## Decisions
- D-001 — ✓ holds: `src/styles/site.css:79` and the `.wide` wrappers in `src/pages/*/[id].astro` (every page stays an Astro page; the wide layout is CSS on the same markup and islands; the only new route is the static `src/pages/map-panel.json.ts`)
- D-003 — ✓ holds: `src/pages/album/[id].astro` (the real cover via `Cover size="l"`, up to 480 px), `src/components/Cover.astro` (drawn cover still underneath, `onerror` removes a failed image)
- D-005 — ✓ holds: `src/pages/song/[id].astro` (`<Player spotify=…>` in the left `.col.side.sticky` column)
- D-006 — ✓ holds: `src/components/PhotoPanel.astro:14` (same photos, widths 480 / 800 / 1200 / 2000 capped at the original); `src/components/EraSpread.astro` stretches the photo, collage or poster across the left half, so no era is left text-only
- D-007 — ✓ holds: `src/components/Words.astro` (preview, summary and lyrics link), shown in the song page's right column from 1100 px
- D-034 — ✓ holds: `src/pages/song/[id].astro` builds the two-column page for every song; `src/pages/album/[id].astro` links every row through `data/sources/track-map.json`
- D-035 — ✓ holds: `src/components/Words.astro` (the "Words by …" / "A traditional song" line in the same words card, same page layout)
- D-036 — ✓ holds: `src/styles/site.css` (`--page-max: 1200px`, `.page` max-width 1200 + 96 px padding, `.wide` main + side column)
- D-037 — ✓ holds: `src/components/Timeline.astro` (`html:has(.timeline)` gets `scroll-snap-type: y mandatory`), `src/components/EraSpread.astro` (each era one screen tall with `scroll-snap-stop: always`, text crossfade)
- D-038 — ✓ holds: `src/islands/map.ts` (click on a selectable map from 1100 px calls `select`, double-click opens), `src/components/MapView.astro` (`fillPanel`), `src/components/MapPanel.astro` ("Open the song ›")
- D-009 — ✓ holds: `src/styles/site.css` keeps the tab bar at the top from 768 px; from 1100 px the header replaces it, as step 2 asks
- D-010 — ✓ holds: `src/components/PhotoPanel.astro` still picks a `dylan` photo first from `photos.json`; only the image widths and `sizes` changed
- D-011 — ✓ holds: `src/components/Words.astro` (lyrics link keeps `target="_blank"`)
- D-012 — ✓ holds: `src/pages/song/[id].astro` (the `.pn` previous / next nav, now under both columns)
- D-013 — ✓ holds: `data/threads.json` still one thread per theme plus the two named ones; the 22 changed lines add songs (every-song's extension), each with a one-sentence why
- D-014 — ✓ holds: `src/islands/search.ts` only wraps each group in a `<section>`; typo matching untouched, and the theme chips in `src/pages/song/[id].astro` still link `theme:<name>`
- D-029 — ✓ holds as changed by D-034: `src/pages/album/[id].astro` still shows the full numbered MusicBrainz list; since every row now links, the "its story ›" mark becomes "›" and the count line goes, as D-034 (every row links) implies
- D-030 — ✓ holds: `tools/fetch-spotify.mjs` still matches by title; it adds the song's takes and three hand-typed alternative spellings (`ALIAS`), not hand-typed ids

## Unexplained
- `src/pages/song/[id].astro` — ✗ adds "Takes on the album: …" and "Also on <album>: …" lines under the themes (from `track-map.json`, with `takes` added to the Song type in `src/lib/data.ts`); no step, decision or autonomy row of this plan covers them, they come from the every-song plan riding in commit 1b32857. Suggest: autonomy row "the song page also carries every-song's takes / also-on lines, built in this commit", or point to that plan's step.
- `src/pages/map-panel.json.ts` — ✗ the map panel's data is a separate built JSON fetched on first click (and its preview falls back to the song's note when it has none), rather than data embedded in the page; no row names this data shape. Suggest: autonomy row "panel rows fetched from /map-panel.json on first select, preview falling back to the note, instead of inlined in each map page".
