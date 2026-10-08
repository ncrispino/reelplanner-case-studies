# Bob Dylan, explored

An interactive site about Bob Dylan's life and music: the eras, the albums, the songs and how they connect. Built with
Astro as static pages, for phones first and wide screens too.

## Run it

```
npm install
npm run build
npm run preview -- --port 8005     # then open http://localhost:8005
```

`npm run dev` serves it with live reload instead.

**Open it at `localhost`, not `127.0.0.1`.** Music-label clips on YouTube (most official videos, such as Newport 1965)
refuse to play inside a page whose address is a bare IP number: they show "This video is unavailable". At
`http://localhost:8005`, or on any real domain, they play. Clips that aren't from a label (the Nobel lecture, for one)
play either way.

## Checks

```
npm test                 # the data check, the build, the phone check, the desktop check
npm run check:data       # the dataset: ids, links, lengths, quotes only of titles
npm run check:phone      # 12 views at 375 × 812, a tap on a map dot
npm run check:desktop    # 24 views at 1440 × 900 and 1100 × 800
npm run check:clips      # the YouTube clips still answer
```

## Data

The site is built from `data/*.json`, which `node tools/merge-data.mjs` writes from `data/parts/` and the fetched
sources in `data/sources/` (covers, Spotify, YouTube, lyrics links, photos, stories, links out). The `tools/find-*.mjs`
scripts fetch the sources again; each keeps what it found before.

Plans, reviews and decisions are in `.reelplanning/`.
