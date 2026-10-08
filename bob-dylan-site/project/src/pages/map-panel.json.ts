// What the map page's side panel shows for a selected dot (step 5, D-038), built once and fetched by /map/ on a computer:
// each connected song's title, who and when, its era, cover, preview (D-007, in our words) and connections.
import { songs, links, albumById, eraOfSong, connectionsOf, coverUrl, url } from "../lib/data";
export function GET() {
  const connected = new Set(links.flatMap((l) => [l.from, l.to]));
  const rows = Object.fromEntries(songs.filter((s) => connected.has(s.id)).map((s) => {
    const album = s.album ? albumById.get(s.album) : null;
    const era = eraOfSong(s);
    return [s.id, {
      t: s.title, by: s.by && s.by !== "Bob Dylan" ? s.by : null, album: album?.title ?? null, year: s.year,
      era: era.id, eraTitle: era.title, cover: album ? coverUrl(album, 250) : null, coverEra: album?.era ?? era.id,
      preview: s.preview ?? s.note, h: url.song(s.id),
      conns: connectionsOf(s.id).map((c) => ({ w: c.words, id: c.other.id, t: c.other.title, by: c.other.by && c.other.by !== "Bob Dylan" ? c.other.by : null })),
    }];
  }));
  return new Response(JSON.stringify(rows), { headers: { "Content-Type": "application/json" } });
}
