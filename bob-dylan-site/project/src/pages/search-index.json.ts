// The search index, built once: every era, moment, album and song with the words search matches on.
import { eras, moments, albums, songs, albumById, url, yearsLabel } from "../lib/data";
export function GET() {
  const rows = [
    ...eras.map((e) => ({ g: "Eras", t: e.title, s: yearsLabel(e), y: [e.years[0], e.years[1] ?? 2100], h: url.era(e.id), k: "" })),
    ...moments.map((m) => ({ g: "Moments", t: m.title, s: String(m.year), y: [m.year, m.year], h: url.moment(m.id), k: m.text })),
    ...albums.map((a) => ({ g: "Albums", t: a.title, s: String(a.year), y: [a.year, a.year], h: url.album(a.id), k: "" })),
    ...songs.map((s) => ({ g: "Songs", t: s.title, s: [s.by && s.by !== "Bob Dylan" ? s.by : s.album ? albumById.get(s.album)?.title : "", s.year ?? ""].filter(Boolean).join(" · "),
      y: s.year ? [s.year, s.year] : null, h: url.song(s.id), k: s.themes.map((t) => `theme:${t}`).join(" ") })),
  ];
  return new Response(JSON.stringify(rows), { headers: { "Content-Type": "application/json" } });
}
