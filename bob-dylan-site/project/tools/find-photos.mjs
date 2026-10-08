// Photos for eras and moments from Wikimedia Commons (D-006: free-licensed, each with its licence and author).
//
//   node tools/find-photos.mjs search <dir> [target…]   search Commons for each target's queries; writes
//                                                       <dir>/candidates.json and a small preview of each hit to
//                                                       review by eye (nothing in the site changes)
//   node tools/find-photos.mjs                          for each photo in PICKS (the ones kept after looking at them):
//                                                       read its licence and author from Commons again, download it at
//                                                       most 2000 px wide into src/assets/photos/, and append it to
//                                                       data/photos.json (photos already there are left alone)
//
// A photo is used only when its licence is free (public domain, CC0, CC BY, CC BY-SA) and its author is known.
// Requests carry a plain User-Agent and nothing else, one about every second (five for a full-size file), and wait
// out a 429's Retry-After.
import { writeFileSync, readFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const API = "https://commons.wikimedia.org/w/api.php";
const UA = "dylan-site-build/0.1";
const PAUSE = 1000;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function get(url, as = "json") {
  for (let tries = 0; tries < 4; tries++) {
    const res = await fetch(url, { headers: { "User-Agent": UA } });
    await sleep(PAUSE);
    if (res.ok) return as === "json" ? res.json() : Buffer.from(await res.arrayBuffer());
    if (res.status !== 429 && res.status < 500) throw new Error(`${res.status} ${url}`);
    // upload.wikimedia.org answers 429 with a Retry-After (often 600 s) when files come too fast: wait it out
    const wait = Number(res.headers.get("retry-after")) || 10 * (tries + 1);
    if (as !== "json") console.log(`  (${res.status}; waiting ${Math.min(wait, 900)} s)`);
    await sleep(Math.min(wait, 900) * 1000 + 1000);
  }
  throw new Error(`gave up: ${url}`);
}
const api = (params) => get(`${API}?${new URLSearchParams({ format: "json", formatversion: "2", ...params })}`);

// ---- licence and author ------------------------------------------------------------------------------------------
const text = (html = "") => html.replace(/<[^>]*>/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#0?39;/g, "'")
  .replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
const FREE = /^(public domain|pd\b.*|cc0( 1\.0)?|cc by(-sa)? \d(\.\d)?( [a-z-]+)?)$/i;
export function licenceOf(meta) {
  const l = text(meta?.LicenseShortName?.value);
  return FREE.test(l) ? (/^pd\b|^public domain/i.test(l) ? "Public domain" : l) : null;
}
const NOBODY = /^(unknown|unknown author|anonymous|author unknown|not stated|see (file )?description|n\/a)?$/i;
export function authorOf(meta) {
  let a = text(meta?.Artist?.value);
  a = a.replace(/^(photo(graph)?( by)?|by)\s*:?\s*/i, "").replace(/\s*\(\s*(talk|contribs?)\s*\)\s*$/i, "").trim();
  if (a.length > 80) a = a.slice(0, 80).replace(/\s+\S*$/, "") + "…";
  return NOBODY.test(a) || /\b(unknown|anonymous)\b/i.test(a) ? null : a;
}
async function info(titles, width) {
  const r = await api({ action: "query", titles: titles.join("|"), prop: "imageinfo", iiprop: "url|size|mime|extmetadata", iiurlwidth: String(width) });
  return (r.query?.pages || []).filter((p) => p.imageinfo);
}

// ---- what to look for ----------------------------------------------------------------------------------------------
// era:<id> targets want Dylan in that era first, then its places and people; moment:<id> targets want the event,
// its place or its people.
export const QUERIES = {
  "era:hibbing": ["Hibbing High School", "Bob Dylan boyhood home Hibbing", "Hibbing Minnesota 1950s", "Duluth Bob Dylan birthplace", "Dinkytown Minneapolis", "Bob Dylan 1959"],
  "era:village": ["Bob Dylan 1963", "Bob Dylan Joan Baez 1963", "Gerdes Folk City", "Cafe Wha Greenwich Village", "Woody Guthrie", "Dave Van Ronk", "Bob Dylan 1964"],
  "era:electric": ["Bob Dylan 1965", "Bob Dylan 1966", "Bob Dylan Kristiansand 1966", "Mike Bloomfield", "Al Kooper 1960s", "Robbie Robertson 1960s"],
  "era:basement": ["Big Pink West Saugerties", "Bob Dylan 1969", "Bob Dylan 1970", "The Band 1969", "Bob Dylan Johnny Cash", "Woodstock New York 1960s"],
  "era:tracks": ["Bob Dylan 1975", "Bob Dylan 1978", "Bob Dylan 1974", "Bob Dylan The Band 1974", "Joan Baez 1975", "Bob Dylan Feyenoord 1978"],
  "era:gospel": ["Bob Dylan 1979", "Bob Dylan 1980", "Bob Dylan 1981", "Bob Dylan 1981 concert", "Muscle Shoals Sound Studio", "Warfield Theatre San Francisco"],
  "era:eighties": ["Bob Dylan 1985", "Bob Dylan 1986 Tom Petty", "Bob Dylan 1987", "Bob Dylan 1989", "Bob Dylan 1990"],
  "era:roots": ["Bob Dylan 1992", "Bob Dylan 1993", "Bob Dylan Clinton 1993", "Madison Square Garden 1990s"],
  "era:renaissance": ["Bob Dylan 2001", "Bob Dylan 2006", "Bob Dylan 2009", "Bob Dylan 2010 concert", "Bob Dylan 2011", "Bob Dylan 2012"],
  "era:standards": ["Bob Dylan 2015", "Bob Dylan 2016", "Bob Dylan 2017", "Bob Dylan Nobel"],
  "era:rough": ["Bob Dylan 2019", "Bob Dylan 2022", "Bob Dylan 2023", "Bob Dylan 2024", "Bob Dylan 2025"],

  // Commons sorts photos of Dylan by year; a search for "Bob Dylan 1985" mostly finds other things
  "dylan:hibbing": ["Category:Boyhood home of Bob Dylan in Hibbing, Minnesota", "Category:Boyhood home of Bob Dylan in Duluth, Minnesota"],
  "dylan:village": ["Category:Bob Dylan in 1963"],
  "dylan:electric": ["Category:Bob Dylan in 1965", "Category:Bob Dylan in 1966"],
  "dylan:basement": ["Category:Big Pink", "Category:The Concert for Bangladesh"],
  "dylan:tracks": ["Category:Bob Dylan in 1974", "Category:Bob Dylan in 1975", "Category:Bob Dylan in 1976", "Category:Bob Dylan in 1978"],
  "dylan:gospel": ["Category:Bob Dylan in 1980", "Category:Bob Dylan in 1981"],
  "dylan:eighties": ["Category:Bob Dylan in 1984", "Category:Traveling Wilburys", "Category:Live Aid"],
  "dylan:roots": ["Category:Bob Dylan in 1991"],
  "dylan:renaissance": ["Category:Bob Dylan in 1996", "Category:Bob Dylan in 1998", "Category:Bob Dylan in 2003", "Category:Bob Dylan in 2005",
    "Category:Bob Dylan in 2006", "Category:Bob Dylan in 2007", "Category:Bob Dylan in 2008", "Category:Bob Dylan in 2009",
    "Category:Bob Dylan in 2010", "Category:Bob Dylan in 2011", "Category:Bob Dylan in 2012"],
  "dylan:standards": ["Category:Bob Dylan in 2015", "Category:Bob Dylan in 2016", "Category:Bob Dylan in 2017"],
  "dylan:rough": ["Category:Bob Dylan in 2019", "Category:Bob Dylan in 2021", "Category:Bob Dylan in 2022", "Category:Bob Dylan in 2024"],

  "moment:born-in-duluth": ["Bob Dylan birthplace Duluth", "Bob Dylan Duluth house"],
  "moment:move-to-hibbing": ["Bob Dylan house Hibbing", "Hibbing Minnesota"],
  "moment:hibbing-high-graduation": ["Hibbing High School"],
  "moment:university-of-minnesota": ["Dinkytown", "Bob Dylan Dinkytown", "University of Minnesota 1950s"],
  "moment:arrives-in-new-york": ["Woody Guthrie", "Greystone Park Psychiatric Hospital", "Cafe Wha"],
  "moment:shelton-review": ["Gerdes Folk City", "Columbia Records 1960s"],
  "moment:newport-1963": ["Newport Folk Festival 1963", "Bob Dylan Newport 1963"],
  "moment:march-on-washington": ["Bob Dylan March on Washington", "Joan Baez Bob Dylan March on Washington", "March on Washington 1963 Lincoln Memorial"],
  "moment:dont-look-back-tour-1965": ["Bob Dylan 1965 London", "Royal Albert Hall 1960s", "Dont Look Back"],
  "moment:newport-1965": ["Newport Folk Festival 1965", "Bob Dylan Newport 1965", "Freebody Park Newport"],
  "moment:marries-sara-lownds": ["Sara Lownds", "Sara Dylan"],
  "moment:motorcycle-accident": ["Woodstock New York", "Bob Dylan Triumph motorcycle"],
  "moment:judas-manchester-1966": ["Free Trade Hall Manchester", "Lesser Free Trade Hall"],
  "moment:basement-sessions": ["Big Pink West Saugerties", "Big Pink house"],
  "moment:isle-of-wight-1969": ["Isle of Wight Festival 1969", "Bob Dylan Isle of Wight"],
  "moment:princeton-doctorate": ["Princeton University 1970", "Princeton University Nassau Hall"],
  "moment:pat-garrett-film-1973": ["Pat Garrett and Billy the Kid", "Kris Kristofferson 1970s", "Durango Mexico film"],
  "moment:tour-1974": ["Bob Dylan 1974", "Bob Dylan The Band 1974 Chicago", "The Band 1974"],
  "moment:rolling-thunder-revue-1975": ["Rolling Thunder Revue", "Bob Dylan 1975", "Bob Dylan Joan Baez 1975"],
  "moment:world-tour-1978": ["Bob Dylan 1978", "Bob Dylan Feyenoord 1978", "Bob Dylan Blackbushe"],
  "moment:snl-1979": ["Saturday Night Live Studio 8H", "Bob Dylan 1979"],
  "moment:warfield-gospel-shows-1979": ["Warfield Theatre San Francisco", "Warfield Theater"],
  "moment:grammy-1980": ["Grammy Awards 1980", "Shrine Auditorium"],
  "moment:musical-retrospective-1980": ["Bob Dylan 1980", "Bob Dylan Toronto 1980"],
  "moment:live-aid-1985": ["Live Aid JFK Stadium", "Live Aid 1985 Philadelphia", "Bob Dylan Live Aid"],
  "moment:hall-of-fame-1988": ["Rock and Roll Hall of Fame 1988", "Waldorf Astoria 1980s"],
  "moment:never-ending-tour-begins": ["Bob Dylan 1988", "Concord Pavilion"],
  "moment:traveling-wilburys-1988": ["Traveling Wilburys", "George Harrison 1987", "Roy Orbison 1988", "Jeff Lynne Tom Petty 1980s"],
  "moment:bobfest-1992": ["Bob Dylan 30th Anniversary Concert", "Madison Square Garden 1992", "Bob Dylan 1992"],
  "moment:clinton-inaugural-1993": ["Clinton inaugural 1993 Lincoln Memorial", "Bob Dylan Clinton inauguration", "An American Reunion 1993"],
  "moment:grammy-album-of-the-year-1998": ["Grammy Awards 1998", "Bob Dylan 1998", "Radio City Music Hall 1998"],
  "moment:oscar-things-have-changed": ["Bob Dylan Oscar", "Academy Award Bob Dylan", "Bob Dylan 2001"],
  "moment:chronicles-volume-one": ["Chronicles Volume One", "Bob Dylan 2004"],
  "moment:presidential-medal-of-freedom": ["Bob Dylan Presidential Medal of Freedom", "Obama Bob Dylan 2012"],
  "moment:musicares-2015": ["MusiCares Person of the Year 2015", "Bob Dylan MusiCares"],
  "moment:nobel-prize-2016": ["Bob Dylan Nobel Prize", "Nobel Prize 2016 Stockholm", "Swedish Academy"],
  "moment:nobel-lecture-2017": ["Bob Dylan Nobel lecture", "Swedish Academy Börshuset", "Nobel Prize medal literature"],
  "moment:murder-most-foul-release": ["Dealey Plaza", "Bob Dylan 2020"],
  "moment:catalog-sale-2020": ["Universal Music Group headquarters", "Bob Dylan 2019"],
  "moment:shadow-kingdom-2021": ["Shadow Kingdom Bob Dylan", "Bob Dylan 2021"],
  "moment:philosophy-of-modern-song": ["The Philosophy of Modern Song", "Bob Dylan 2022"],
  // a second pass: the venues the first pass missed
  "venue:shelton-review": ["Category:Gerdes Folk City", "11 West 4th Street Greenwich Village"],
  "venue:newport-1963": ["Newport Folk Festival", "Category:Newport Folk Festival"],
  "venue:dont-look-back-tour-1965": ["Royal Albert Hall exterior", "Category:Exterior of the Royal Albert Hall"],
  "venue:snl-1979": ["30 Rockefeller Plaza", "Category:Studio 8H"],
  "venue:hall-of-fame-1988": ["Waldorf Astoria New York Park Avenue"],
  "venue:bobfest-1992": ["Madison Square Garden exterior", "Category:Madison Square Garden (1968)"],
  "venue:grammy-album-of-the-year-1998": ["Radio City Music Hall", "Category:Radio City Music Hall"],
  "venue:oscar-things-have-changed": ["Shrine Auditorium Academy Awards 2001", "73rd Academy Awards"],
  "venue:musicares-2015": ["Los Angeles Convention Center"],
};

async function search(dir, only) {
  mkdirSync(join(dir, "previews"), { recursive: true });
  const outFile = join(dir, "candidates.json");
  const out = existsSync(outFile) ? JSON.parse(readFileSync(outFile, "utf8")) : {};
  for (const [target, queries] of Object.entries(QUERIES)) {
    if (only.length && !only.includes(target)) continue;
    if (out[target]) continue;
    const seen = new Map();
    for (const q of queries) {
      // "Category:…" lists that category's files; anything else is a full-text search of file pages
      const from = q.startsWith("Category:") ? { generator: "categorymembers", gcmtitle: q, gcmtype: "file", gcmlimit: "40" }
        : { generator: "search", gsrsearch: `${q} filetype:bitmap`, gsrnamespace: "6", gsrlimit: "10" };
      const r = await api({ action: "query", ...from, prop: "imageinfo", iiprop: "url|size|mime|extmetadata", iiurlwidth: "360" });
      for (const p of r.query?.pages || []) {
        const ii = p.imageinfo?.[0], m = ii?.extmetadata;
        if (!ii || seen.has(p.title) || !/jpeg|png/.test(ii.mime)) continue;
        const licence = licenceOf(m), author = authorOf(m);
        if (!licence || !author) continue; // never used, so never looked at
        seen.set(p.title, { title: p.title, query: q, licence, author, width: ii.width, height: ii.height,
          date: text(m?.DateTimeOriginal?.value).slice(0, 40), description: text(m?.ImageDescription?.value).slice(0, 300), thumb: ii.thumburl });
      }
    }
    const list = [...seen.values()];
    for (const [i, c] of list.entries()) {
      c.preview = `${target.replace(":", "-")}-${i}.jpg`;
      const file = join(dir, "previews", c.preview);
      if (!existsSync(file)) {
        try { writeFileSync(file, await get(c.thumb, "buffer")); } catch (e) { c.preview = null; console.log(`  (no preview: ${e.message.slice(0, 90)})`); }
      }
    }
    out[target] = list;
    writeFileSync(outFile, JSON.stringify(out, null, 2));
    console.log(`${target}: ${list.length} free, credited candidates`);
  }
}

// ---- the photos kept, after looking at each one --------------------------------------------------------------------
// [id, Commons file title, era, kind, caption, year, moment id or null]
export const PICKS = [
  // Duluth and Hibbing
  ["hibbing-dylan-drive-2022", "File:Bob Dylan Drive street sign in Hibbing, Minnesota.jpg", "hibbing", "place", "Bob Dylan Drive, the street sign in Hibbing, 2022", 2022],
  ["hibbing-duluth-home-2016", "File:Boyhood home of Bob Dylan in Duluth, Minnesota.jpg", "hibbing", "place", "The house in Duluth where Robert Zimmerman lived as a small child, 2016", 2016, "born-in-duluth"],
  ["hibbing-downtown-2020", "File:Hibbing Minnesota - Fall Colors.jpg", "hibbing", "place", "Downtown Hibbing, the iron-range town his family moved to in 1947 (photo 2020)", 2020, "move-to-hibbing"],
  ["hibbing-high-school-2009", "File:Hibbing High School.jpg", "hibbing", "place", "Hibbing High School, where he played rock and roll at talent shows and graduated in 1959 (photo 2009)", 2009, "hibbing-high-graduation"],
  ["hibbing-dinkytown-2006", "File:Varsitydinkytown.jpg", "hibbing", "place", "The Varsity Theater in Dinkytown, the Minneapolis neighbourhood by the university where he played coffeehouses (photo 2006)", 2006, "university-of-minnesota"],
  // Greenwich Village
  ["village-cafe-wha-2019", "File:Cafe Wha? (48072765862).jpg", "village", "place", "Cafe Wha? on MacDougal Street, Greenwich Village, one of the first clubs he played in New York (photo 2019)", 2019],
  ["village-van-ronk-1968", "File:Dave Van Ronk.jpg", "village", "place", "Dave Van Ronk, the Village folk singer who befriended and housed the young Dylan, at the Philadelphia Folk Festival, 1968", 1968],
  ["village-woody-guthrie-1943", "File:Woody Guthrie.jpg", "village", "place", "Woody Guthrie, his hero, whom he visited in hospital soon after reaching New York (photo 1943)", 1943, "arrives-in-new-york"],
  // Going Electric
  ["electric-press-conference-1965", "File:Zagone Dylan Press Conf.jpg", "electric", "dylan", "At the KQED press conference in San Francisco, December 1965", 1965],
  ["electric-bloomfield-1969", "File:Mike Bloomfield ad 1969 cropped.jpg", "electric", "place", "Mike Bloomfield, the guitarist on Highway 61 Revisited and at Newport 1965, in a 1969 Columbia advertisement", 1969],
  ["electric-royal-albert-hall-2016", "File:London Royal Albert Hall-20130715-RM-175050.jpg", "electric", "place", "The Royal Albert Hall, London, where the 1965 tour filmed for Dont Look Back ended (photo 2016)", 2016, "dont-look-back-tour-1965"],
  ["electric-newport-stratocaster", "File:Bob Dylan's Fender Stratocaster (1964) in 3 tone sunburst, played when Dylan Goes Electric at Newport Folk Festival on July 25, 1965. Lost ca.1965, rediscovered in 2012 - Play It Loud. MET (2019-05-13 19.42.45 by Eden, Janine and Jim).jpg", "electric", "place", "The Fender Stratocaster he played at Newport on 25 July 1965, shown at the Metropolitan Museum of Art in 2019", 2019, "newport-1965"],
  ["electric-free-trade-hall-2008", "File:The Free Trade Hall, Manchester.jpg", "electric", "place", "The Free Trade Hall, Manchester, where a listener shouted \"Judas!\" in May 1966; only the front survives (photo 2008)", 2008, "judas-manchester-1966"],
  // Basement and Country
  ["basement-the-band-1969", "File:The Band (1969).jpg", "basement", "place", "The Band, the Hawks of the basement tapes, in a Capitol Records photograph, 1969", 1969],
  ["basement-big-pink-2006", "File:The Big Pink (crop).jpg", "basement", "place", "Big Pink, West Saugerties, New York, in whose basement he and the Hawks recorded in 1967 (photo 2006)", 2006, "basement-sessions"],
  ["basement-nassau-hall-2012", "File:Nassau Hall Princeton.JPG", "basement", "place", "Nassau Hall, Princeton University, which gave him an honorary doctorate in June 1970 (photo 2012)", 2012, "princeton-doctorate"],
  // Blood on the Tracks
  ["tracks-band-1974", "File:Dylan and The Band.jpg", "tracks", "dylan", "With The Band on the 1974 tour, 2 February 1974", 1974],
  ["tracks-hard-rain-1976", "File:Bob Dylan Hard Rain 1976.jpg", "tracks", "dylan", "In Hard Rain, the NBC special filmed on the Rolling Thunder Revue's 1976 leg", 1976],
  // Gospel
  ["gospel-toronto-stage-1980", "File:Bob Dylan in Toronto1.jpg", "gospel", "dylan", "On the gospel tour, Massey Hall, Toronto, 18 April 1980", 1980],
  ["gospel-muscle-shoals-2007", "File:Muscle Shoals Sound - New Location.jpg", "gospel", "place", "Muscle Shoals Sound Studio, Sheffield, Alabama, where Slow Train Coming was recorded in 1979 (photo 2007)", 2007],
  ["gospel-30-rock-2024", "File:30 Rockefeller Plaza viewed from 5th Avenue, August 29, 2024.jpg", "gospel", "place", "30 Rockefeller Plaza, New York, home of Saturday Night Live's Studio 8H (photo 2024)", 2024, "snl-1979"],
  ["gospel-warfield-2008", "File:San Francisco Warfield.jpg", "gospel", "place", "The Warfield, San Francisco, where the gospel tour opened in November 1979 (photo 2008)", 2008, "warfield-gospel-shows-1979"],
  ["gospel-shrine-auditorium-2004", "File:Shrine Auditorium.jpg", "gospel", "place", "The Shrine Auditorium, Los Angeles, where the 1980 Grammy Awards were held (photo 2004)", 2004, "grammy-1980"],
  // The '80s
  ["eighties-live-aid-1985", "File:Live Aid at JFK Stadium, Philadelphia, PA.jpg", "eighties", "place", "The Live Aid stage at JFK Stadium, Philadelphia, 13 July 1985", 1985, "live-aid-1985"],
  ["eighties-waldorf-astoria-2013", "File:Waldorf-Astoria Park Avenue Entrance.jpg", "eighties", "place", "The Waldorf-Astoria, New York, where the Rock and Roll Hall of Fame inducted him in January 1988 (photo 2013)", 2013, "hall-of-fame-1988"],
  ["eighties-concord-pavilion-2008", "File:Sleep Train Pavilion.jpg", "eighties", "place", "The Concord Pavilion, California, where the Never Ending Tour began on 7 June 1988 (photo 2008, under a sponsor's name)", 2008, "never-ending-tour-begins"],
  ["eighties-roy-orbison-1976", "File:Roy Orbison.jpg", "eighties", "place", "Roy Orbison, his fellow Traveling Wilbury, on stage in Cincinnati, 1976", 1976, "traveling-wilburys-1988"],
  // Back to the Roots
  ["roots-madison-square-garden-2011", "File:Madison Square Garden 2011.jpg", "roots", "place", "Madison Square Garden, New York, scene of the October 1992 30th anniversary concert (photo 2011)", 2011, "bobfest-1992"],
  // Late Renaissance
  ["renaissance-bologna-2005", "File:Bob Dylan Bologna Nov 05 concert.jpg", "renaissance", "dylan", "In concert in Bologna, November 2005", 2005],
  ["renaissance-white-house-2010", "File:Bob Dylan sings “The Times They Are A-Changin’” in the East Room of the White House, 2010.jpg", "renaissance", "dylan", "Singing \"The Times They Are a-Changin'\" in the East Room of the White House, 9 February 2010", 2010],
  ["renaissance-finsbury-park-2011", "File:Bob Dylan Finsbury Park London 2011.jpg", "renaissance", "dylan", "Finsbury Park, London, 18 June 2011", 2011],
  ["renaissance-radio-city-2021", "File:Radio City Music Hall (51395756913).jpg", "renaissance", "place", "Radio City Music Hall, New York, where Time Out of Mind won Album of the Year in February 1998 (photo 2021)", 2021, "grammy-album-of-the-year-1998"],
  ["renaissance-medal-of-freedom-2012", "File:President Barack Obama presents American musician Bob Dylan with a Medal of Freedom.jpg", "renaissance", "dylan", "President Obama presents him with the Presidential Medal of Freedom, the White House, 29 May 2012", 2012, "presidential-medal-of-freedom"],
  // The Standards
  ["standards-la-convention-center-2008", "File:Los Angeles Convention Center.JPG", "standards", "place", "The Los Angeles Convention Center, where MusiCares honoured him in February 2015 (photo 2008)", 2008, "musicares-2015"],
  ["standards-nobel-announcement-2016", "File:Sara Danius 2016-10-13 (02min00s).jpg", "standards", "place", "Sara Danius of the Swedish Academy announces that he has won the Nobel Prize in Literature, Stockholm, 13 October 2016", 2016, "nobel-prize-2016"],
  ["standards-borshuset-2015", "File:Börshuset January 2015.jpg", "standards", "place", "Börshuset, Stockholm, the Swedish Academy's home, to which his Nobel lecture was sent in June 2017 (photo 2015)", 2015, "nobel-lecture-2017"],
  // Rough and Rowdy
  ["rough-dealey-plaza-2003", "File:Dealey Plaza 2003.jpg", "rough", "place", "Dealey Plaza, Dallas, where President Kennedy was shot, the scene of \"Murder Most Foul\" (photo 2003)", 2003, "murder-most-foul-release"],
  ["rough-umpg-2012", "File:Universalmusicpublishinggroup.jpg", "rough", "place", "Universal Music Publishing Group's offices in Santa Monica; the company bought his song catalogue in December 2020 (photo 2012)", 2012, "catalog-sale-2020"],
];

// photos already in data/photos.json that are a moment's own photograph: [photo id, moment id]
export const TAGS = [
  ["village-march-on-washington", "march-on-washington"],
  ["basement-isle-of-wight-crowd-1969", "isle-of-wight-1969"],
  ["tracks-chicago-1974", "tour-1974"],
  ["tracks-ginsberg-1975", "rolling-thunder-revue-1975"],
  ["tracks-rotterdam-1978", "world-tour-1978"],
  ["roots-american-reunion-1993", "clinton-inaugural-1993"],
];

async function write() {
  const photosFile = new URL("../data/photos.json", import.meta.url);
  const photos = JSON.parse(readFileSync(photosFile, "utf8"));
  for (const [id, moment] of TAGS) {
    const p = photos.find((x) => x.id === id);
    if (p && !p.moment) p.moment = moment;
  }
  writeFileSync(photosFile, JSON.stringify(photos, null, 2) + "\n");
  const have = new Set(photos.map((p) => p.id));
  const todo = PICKS.filter(([id]) => !have.has(id));
  for (let i = 0; i < todo.length; i += 20) {
    const batch = todo.slice(i, i + 20);
    // Commons rounds a thumbnail width up to its next standard size (2000 would come back 3840 wide), so ask for
    // 1920, the largest standard size under 2000
    const pages = await info(batch.map((b) => b[1]), 1920);
    for (const [id, title, era, kind, caption, year, moment] of batch) {
      const page = pages.find((p) => p.title === title.replace(/_/g, " "));
      const ii = page?.imageinfo?.[0];
      const licence = licenceOf(ii?.extmetadata), photographer = authorOf(ii?.extmetadata);
      if (!ii || !licence || !photographer) { console.log(`✗ ${id}: ${!ii ? "not found" : !licence ? "licence not free" : "no author"} (${title})`); continue; }
      const url = ii.width > 2000 ? ii.thumburl : ii.url;
      if (ii.width > 2000 && !(ii.thumbwidth <= 2000)) { console.log(`✗ ${id}: no download under 2000 px (${ii.thumbwidth})`); continue; }
      const ext = /png/.test(ii.mime) && ii.width <= 2000 ? "png" : "jpg";
      const file = `${id}.${ext}`;
      writeFileSync(new URL(`../src/assets/photos/${file}`, import.meta.url), await get(url, "buffer"));
      await sleep(4000); // files are rate-limited harder than the API
      const photo = { id, file, era, kind, caption, year, photographer, licence, source: `https://commons.wikimedia.org/wiki/${title.replace(/ /g, "_")}` };
      if (moment) photo.moment = moment;
      photos.push(photo);
      writeFileSync(photosFile, JSON.stringify(photos, null, 2) + "\n");
      console.log(`✓ ${id}  ${licence}  ${photographer}`);
    }
  }
  console.log(`${photos.length} photos in data/photos.json`);
}

if (process.argv[2] === "search") {
  if (!process.argv[3]) throw new Error("usage: node tools/find-photos.mjs search <dir> [target…]");
  await search(process.argv[3], process.argv.slice(4));
} else await write();
