# Writing the new songs (plan 2026-10-07-every-song, step 1)

You write the text for one batch of songs on a Bob Dylan website: every album track now gets its own page. Each
song's page shows a note, its themes, a one-sentence preview and a summary, beside its player and a link to its words.

## Input

`batch-N.json` (your N is in your task): a list of songs, each with `id`, `title`, `album` (the album's title),
`year`, `albumWhy` (a sentence on the album, for context) and, for some, `takes` (the track titles that are takes of it).

## What to write, for each song

- **note**: one sentence of fact about the song, 10–30 words: who wrote it and when (for a song he did not write),
  where it sits on the album, how it was recorded, a well-known version. Only a fact you are sure of. If you know
  nothing certain beyond its album, say what kind of song it is and where it sits ("A short country waltz near the
  end of Self Portrait.") rather than guess.
- **themes**: 1–3 from exactly this list: protest, love, loss, the road, faith, death, America, time, freedom, war.
- **preview**: one sentence in our own words on what the song says, 8–25 words. For an instrumental, what the music
  does.
- **summary**: 3–4 sentences, 45–90 words: what it is about (its situation, who speaks to whom), how it unfolds (its
  shape, a refrain, its tone), and optionally one sentence on its sound if you are sure of it. For a song by another
  writer, what the song is about and what Dylan's recording does with it. For an instrumental, describe the music.
- **by**: `"The Band"` only for a track Dylan does not perform on (some Basement Tapes tracks, such as "Katie's Been
  Gone"); otherwise `null`.
- **wordsBy**: for a song whose words Dylan did not write, who did: `"Hoagy Carmichael and Mitchell Parish"`,
  `"traditional"` for a folk song with no known author, `"Robbie Robertson"`. `null` for his own songs and for
  instrumentals. If you are not sure who wrote it, `null`.

## Hard rules

- **Never quote the lyrics, not even a short phrase**, and never walk through them line by line. Describe a song from
  outside, as a critic would to someone who has never heard it. Do not try to recall the words at all. The only
  quotation marks allowed are around a song or album title.
- No chart positions, sales, session dates or musicians' names unless you are certain.
- When unsure, leave it out: a plainer true sentence beats a vivid wrong one.

## Output

Write a small Python script in a scratch folder of your own that writes `text-N.json` beside your batch file:
`{ "<song id>": { "note": "…", "themes": ["…"], "preview": "…", "summary": "…", "by": null, "wordsBy": null }, … }`,
with every id in your batch and nothing else. Write it in two halves if you like (run the script after each), so a
stopped run keeps what it wrote. Then check: every id present, summary 45–90 words, preview and note one sentence,
themes from the list, no quotation marks except around titles. Reply with the count, and any song you skipped and why.
