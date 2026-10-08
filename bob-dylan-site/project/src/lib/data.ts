// The dataset, loaded once at build time. Every page reads from here.
import erasJson from "../../data/eras.json";
import momentsJson from "../../data/moments.json";
import albumsJson from "../../data/albums.json";
import songsJson from "../../data/songs.json";
import linksJson from "../../data/links.json";
import threadsJson from "../../data/threads.json";
import photosJson from "../../data/photos.json";

/** Links out (plan 2026-10-07-fuller, step 6): Wikipedia and MusicBrainz, where MusicBrainz lists them. */
export type Out = { wikipedia?: string | null; musicbrainz?: string | null; more?: { label: string; href: string }[] | null };
/** An era's longer story (plan 2026-10-07-fuller, step 1): three short sections. */
export type EraStory = { happened?: string | null; music?: string | null; ledTo?: string | null };
export type Era = { id: string; title: string; years: [number, number | null]; theme: string; summary: string; albums: string[]; moments: string[]; photos: string[]; story?: EraStory | null; out?: Out | null };
export type Moment = { id: string; year: number; title: string; text: string; era: string; youtube: string | null; long?: string | null };
export type Album = { id: string; title: string; year: number; era: string; why: string; songs: string[]; landmark: boolean; cover: string | null; essay?: string | null; spotifyAlbum?: string | null; out?: Out | null };
export type Excerpt = { lines: string[]; credit: string };
export type Song = { id: string; title: string; year: number | null; album: string | null; by: string | null; note: string; themes: string[]; spotify: string | null; youtube: string | null; lyrics: string | null; preview: string | null; summary: string | null; wordsBy?: string | null; takes?: string[]; excerpt: Excerpt | null; out?: Out | null };
export type Link = { from: string; to: string; kind: string; why: string };
export type Thread = { id: string; title: string; intro: string; steps: { song: string; why: string }[] };
export type Photo = { id: string; file: string; era: string; kind: "dylan" | "place"; caption: string; year: number; photographer: string; licence: string; source: string; moment?: string | null };

/** What the context rail (src/components/Rail.astro) is told about a page. */
export type RailProps = { era: Era; album?: Album | null; song?: Song | null; year?: number | null; here?: "album" | "song" | "moment" };

export const eras = erasJson as Era[];
export const moments = momentsJson as Moment[];
export const albums = albumsJson as Album[];
export const songs = songsJson as Song[];
export const links = linksJson as Link[];
export const threads = threadsJson as Thread[];
export const photos = photosJson as Photo[];

const byId = <T extends { id: string }>(rows: T[]) => new Map(rows.map((r) => [r.id, r]));
export const eraById = byId(eras);
export const momentById = byId(moments);
export const albumById = byId(albums);
export const songById = byId(songs);
export const threadById = byId(threads);
export const photoById = byId(photos);

/** The era a song belongs to: its album's era, else the era its year falls in. */
export function eraOfSong(s: Song): Era {
  if (s.album) return eraById.get(albumById.get(s.album)!.era)!;
  // someone else's song wears the era of the Dylan song it connects to
  const l = links.find((l) => (l.to === s.id || l.from === s.id));
  const other = l && songById.get(l.to === s.id ? l.from : l.to);
  if (other?.album) return eraById.get(albumById.get(other.album)!.era)!;
  return eraOfYear(s.year);
}
export function eraOfYear(year: number | null): Era {
  if (year == null) return eras[0];
  return eras.find((e) => year >= e.years[0] && (e.years[1] == null || year <= e.years[1]))
    ?? [...eras].reverse().find((e) => year >= e.years[0]) ?? eras[0];
}

/** An era's photographs, Dylan first, then places and people; a moment's own photograph is not the era's. */
export const photosOfEra = (e: Era) => {
  const own = photos.filter((p) => p.era === e.id && !p.moment);
  // an era with fewer than three of its own is topped up with its moments' photographs, in their order
  const top = photos.filter((p) => p.era === e.id && p.moment).slice(0, Math.max(0, 3 - own.length));
  return [...own.filter((p) => p.kind === "dylan"), ...own.filter((p) => p.kind !== "dylan"), ...top];
};
export const photoOfMoment = (m: Moment) => photos.find((p) => p.moment === m.id) ?? null;
/** A photograph's credit line: caption, year, photographer, licence. */
export const creditOf = (p: Photo) => `${p.caption}${String(p.caption).includes(String(p.year)) ? "" : `, ${p.year}`} · ${p.photographer}`;
/** The links out that exist, in a fixed order. */
export const outLinks = (o?: Out | null) => {
  // an era's Wikipedia link is a section of the "Bob Dylan" article: named by the section ("Wikipedia: Bob Dylan, 1965–1969")
  const sec = o?.wikipedia?.match(/\/Bob_Dylan#(.+)$/);
  const wiki = sec ? `Wikipedia: Bob Dylan, ${decodeURIComponent(sec[1]).replace(/_/g, " ").split(":")[0].replace(/^Early life and education$/, "early life")}` : "Wikipedia";
  return [[wiki, o?.wikipedia], ["MusicBrainz", o?.musicbrainz], ...(o?.more ?? []).map((m) => [m.label, m.href])]
    .filter(([, h]) => !!h) as [string, string][];
};
/** How connected a song is: the number of its connections. */
const degree = new Map<string, number>();
export const degreeOf = (id: string) => {
  if (!degree.size) for (const l of links) { degree.set(l.from, (degree.get(l.from) ?? 0) + 1); degree.set(l.to, (degree.get(l.to) ?? 0) + 1); }
  return degree.get(id) ?? 0;
};
/** The curated threads a song is in. */
export const threadsOf = (id: string) => threads.filter((t) => t.steps.some((s) => s.song === id));

export const yearsLabel = (e: Era) => `${e.years[0]}–${e.years[1] ?? ""}`;

/** Connections of a song, in both directions, with the other song and the kind in plain words. */
const KIND_OUT: Record<string, string> = {
  "borrowed-tune": "Borrowed the tune of", answer: "Answers", rewrite: "He rewrote it as",
  "covered-by": "Covered by", "re-recorded": "Re-recorded as", "same-theme": "Same theme as",
};
const KIND_IN: Record<string, string> = {
  "borrowed-tune": "Lent its tune to", answer: "Answered by", rewrite: "Rewritten from",
  "covered-by": "A cover of", "re-recorded": "A new recording of", "same-theme": "Same theme as",
};
export function connectionsOf(id: string) {
  const out = links.filter((l) => l.from === id).map((l) => ({ words: KIND_OUT[l.kind] ?? l.kind, other: songById.get(l.to)!, why: l.why, kind: l.kind }));
  const inn = links.filter((l) => l.to === id).map((l) => ({ words: KIND_IN[l.kind] ?? l.kind, other: songById.get(l.from)!, why: l.why, kind: l.kind }));
  return [...out, ...inn].filter((c) => c.other);
}

/** A thread made from one song: its connections out to two steps, in time order, older first, at most ten. */
export function threadFrom(id: string): Song[] {
  const seen = new Set([id]);
  let frontier = [id];
  for (let depth = 0; depth < 2; depth++) {
    const next: string[] = [];
    for (const s of frontier) for (const c of connectionsOf(s)) if (!seen.has(c.other.id)) { seen.add(c.other.id); next.push(c.other.id); }
    frontier = next;
  }
  return [...seen].map((s) => songById.get(s)!).sort((a, b) => sortYear(a) - sortYear(b)).slice(0, 10);
}
/** A traditional song with no real date sorts first. */
export const sortYear = (s: Song) => (s.year == null || s.by === "traditional" ? -1 : s.year);

export const coverUrl = (a: Album, size: 250 | 500 = 500) =>
  a.cover ? `https://coverartarchive.org/release-group/${a.cover}/front-${size}` : null;

/** Every address goes through the site's base path (astro.config.mjs `base`), so the site can move under /dylan-site/. */
export const BASE = import.meta.env.BASE_URL.replace(/\/?$/, "/");
export const at = (path: string) => BASE + path.replace(/^\//, "");
export const url = {
  home: () => at("/"), era: (id: string) => at(`/era/${id}/`), album: (id: string) => at(`/album/${id}/`), song: (id: string) => at(`/song/${id}/`),
  moment: (id: string) => at(`/moment/${id}/`), thread: (id: string) => at(`/thread/${id}/`), threadFrom: (id: string) => at(`/thread/from/${id}/`),
  map: (id?: string) => at(id ? `/map/${id}/` : `/map/`), threads: () => at("/threads/"), search: (q?: string) => at(q ? `/search/?q=${encodeURIComponent(q)}` : "/search/"),
  about: () => at("/about/"),
};

/** A heading's size that keeps its longest word on one line at phone width (a 12-letter word in a condensed era face). */
export function titleSize(title: string, maxPx = 48): string {
  const longest = Math.max(...title.split(/\s+/).map((w) => w.length), 1);
  const vw = Math.min(9, 62 / longest);
  return `font-size:clamp(24px, ${vw.toFixed(2)}vw, ${maxPx}px)`;
}
