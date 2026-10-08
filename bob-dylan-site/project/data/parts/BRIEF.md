# Dataset brief (for content workers)

You write one part of the site's dataset: a JSON file `data/parts/<part>.json`. A merge script combines the parts.
Accuracy matters more than volume: write only facts you are sure of. If unsure of a detail, leave it out.

## The eleven eras (fixed ids, titles, years)
hibbing "Duluth and Hibbing" 1941–1960 · village "Greenwich Village" 1961–1964 · electric "Going Electric" 1965–1966 ·
basement "Basement and Country" 1967–1970 · tracks "Blood on the Tracks" 1973–1978 · gospel "Gospel" 1979–1981 ·
eighties "The '80s" 1983–1990 · roots "Back to the Roots" 1992–1993 · renaissance "Late Renaissance" 1997–2012 ·
standards "The Standards" 2015–2017 · rough "Rough and Rowdy" 2020–

## The 39 studio albums (fixed ids; ★ = landmark, written in full)
village: bob-dylan (1962), freewheelin ★ (1963), times-they-are-a-changin ★ (1964), another-side (1964)
electric: bringing-it-all-back-home ★ (1965), highway-61-revisited ★ (1965), blonde-on-blonde ★ (1966)
basement: john-wesley-harding ★ (1967), nashville-skyline ★ (1969), self-portrait (1970), new-morning (1970)
tracks: pat-garrett (1973), dylan-1973 (1973), planet-waves (1974), blood-on-the-tracks ★ (1975), the-basement-tapes (1975), desire ★ (1976), street-legal (1978)
gospel: slow-train-coming ★ (1979), saved (1980), shot-of-love (1981)
eighties: infidels ★ (1983), empire-burlesque (1985), knocked-out-loaded (1986), down-in-the-groove (1988), oh-mercy ★ (1989), under-the-red-sky (1990)
roots: good-as-i-been-to-you (1992), world-gone-wrong (1993)
renaissance: time-out-of-mind ★ (1997), love-and-theft ★ (2001), modern-times ★ (2006), together-through-life (2009), christmas-in-the-heart (2009), tempest (2012)
standards: shadows-in-the-night (2015), fallen-angels (2016), triplicate (2017)
rough: rough-and-rowdy-ways ★ (2020)

Landmark albums get 6–8 songs each and a full "why" (2–3 sentences). Other albums get 2–3 songs and a 1–2 sentence "why".

## The file
```json
{
  "eras": [{ "id": "village", "title": "Greenwich Village", "years": [1961, 1964], "theme": "village",
             "summary": "two sentences", "albums": ["bob-dylan", "..."], "moments": ["..."], "photos": [] }],
  "moments": [{ "id": "newport-1965", "year": 1965, "title": "Newport Folk Festival: plays electric",
                "text": "one or two sentences", "era": "electric", "youtube": null }],
  "albums": [{ "id": "freewheelin", "title": "The Freewheelin' Bob Dylan", "year": 1963, "era": "village",
               "why": "…", "songs": ["blowin-in-the-wind", "..."], "landmark": true, "cover": null }],
  "songs": [{ "id": "blowin-in-the-wind", "title": "Blowin' in the Wind", "year": 1963, "album": "freewheelin",
              "by": null, "note": "one sentence, a fact about the song", "themes": ["protest"],
              "spotify": null, "youtube": null, "lyrics": "https://www.bobdylan.com/songs/blowin-wind/",
              "preview": "one sentence in our own words on what the song says (no quoted lyric)", "excerpt": null }],
  "links": [{ "from": "blowin-in-the-wind", "to": "no-more-auction-block", "kind": "borrowed-tune",
              "why": "one sentence" }]
}
```

Rules:
- **ids**: lowercase, words joined by `-`, apostrophes dropped: "Blowin' in the Wind" → `blowin-in-the-wind`. Album ids exactly as listed above.
- **Each album's `songs`** list in track order, each song a record in `songs` with `album` set. Every era lists its albums and moments.
- **2–4 moments per era** (dated life events that are not records: births, moves, concerts, accidents, awards, tours). The hibbing era has moments only.
- **themes**: only from: protest, love, loss, the road, faith, death, America, time, freedom, war.
- **lyrics**: the song's official page on bobdylan.com. Check each URL with `curl -s -o /dev/null -w "%{http_code}" -A "dylan-site-build/0.1" <url>`; keep it only on 200, else `null`. Slugs often drop short words (blowin-wind); try the obvious slug, and one variant, then give up.
- **preview**: one sentence in our own words, no quoted lyric.
- **excerpt**: always `null`. Do not write any lyric words anywhere in the file.
- **links** (connections): kinds `borrowed-tune` (he took the melody), `answer` (one song replies to another), `rewrite` (he rewrote it later), `covered-by` (another artist's famous cover), `re-recorded` (his own later version), `same-theme`. Link only to songs that are in YOUR file. A song by someone else that a link needs (a traditional tune, a famous cover) is a song record too: `"album": null, "by": "traditional"` or `"by": "Jimi Hendrix"`, with its `year`, a `note`, themes, and the rest null. Aim for about one link per landmark song where a real connection exists. Each `why` is one sentence of real fact.
- `spotify`, `youtube`, `cover`, `photos`: leave `null` / `[]`; other steps fill them.
- Validate your file parses (`python3 -c "import json;json.load(open('<file>'))"`).

## How to work (important)
- Track lists come from `data/sources/musicbrainz.json` (key = album id): take song titles EXACTLY from there, in that order;
  do not recall track lists from memory. Pick the songs for each album from it.
- Keep every note, why and preview SHORT (one plain sentence) and in your own words. Never reproduce encyclopedia
  text, liner notes or lyrics. Facts only, phrased freshly.
- Build the file with a small Python script in your own scratchpad folder that appends records a few at a time
  and writes the JSON at the end; do not print the whole dataset in your replies.
