// Search in the page (step 6): titles, albums, years and themes, forgiving of a typo or two.
type Row = { g: string; t: string; s: string; y: [number, number] | null; h: string; k: string };
const norm = (x: string) => x.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[’']/g, "").replace(/[^a-z0-9: ]+/g, " ").trim();

/** Edit distance where swapping two neighbouring letters counts as one edit ("stoen" → "stone" is 1). */
function lev(a: string, b: string): number {
  const m = a.length, n = b.length; if (!m) return n; if (!n) return m;
  const d: number[][] = Array.from({ length: m + 1 }, (_, i) => [i, ...Array(n).fill(0)]);
  for (let j = 0; j <= n; j++) d[0][j] = j;
  for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++) {
    d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
  }
  return d[m][n];
}
/** Lower is better; Infinity is no match. */
function score(q: string, r: Row): number {
  if (q.startsWith("theme:")) return r.k.includes(q) ? 0 : Infinity;
  if (/^\d{4}$/.test(q)) { const y = +q; return r.y && y >= r.y[0] && y <= r.y[1] ? (r.g === "Eras" ? 1 : 0) : Infinity; }
  const t = norm(r.t), hay = `${t} ${norm(r.s)}`;
  if (t === q) return 0;
  if (t.startsWith(q)) return 1;
  if (hay.includes(q)) return 2;
  const qw = q.split(" "), tw = hay.split(" ");
  let miss = 0;
  for (const w of qw) {
    // a word matches a title word it starts, or one a typo or two away (one for 4–5 letters, two from 6)
    const best = Math.min(...tw.map((x) => (x.startsWith(w) ? 0 : Math.min(lev(w, x), lev(w, x.slice(0, w.length))))));
    if (best > (w.length >= 6 ? 2 : w.length >= 4 ? 1 : 0)) return Infinity;
    miss += best;
  }
  return 3 + miss;
}
export function mountSearch(input: HTMLInputElement, out: HTMLElement, rows: Row[]) {
  const groups = ["Eras", "Moments", "Albums", "Songs"];
  const render = () => {
    const q = norm(input.value);
    const u = new URL(location.href);
    if (q) u.searchParams.set("q", input.value); else u.searchParams.delete("q");
    history.replaceState(history.state, "", u);
    if (!q) { out.innerHTML = `<p class="soft">Try a title, an album, a year like 1966, or theme:protest.</p>`; return; }
    const hits = rows.map((r) => ({ r, s: score(q, r) })).filter((x) => x.s < Infinity).sort((a, b) => a.s - b.s || (a.r.y?.[0] ?? 0) - (b.r.y?.[0] ?? 0));
    if (!hits.length) { out.innerHTML = `<p class="soft">Nothing for “${input.value}”.</p>`; return; }
    // the group holding the best match comes first ("blonde on blond" shows the album before an era)
    const order = [...groups].sort((a, b) => (hits.find((x) => x.r.g === a)?.s ?? Infinity) - (hits.find((x) => x.r.g === b)?.s ?? Infinity) || groups.indexOf(a) - groups.indexOf(b));
    out.innerHTML = order.map((g) => {
      const gs = hits.filter((x) => x.r.g === g).slice(0, 20);
      // each group in its own section: one column under another on a phone, three columns from 1100 px (search page CSS)
      return gs.length ? `<section class="grp g-${g.toLowerCase()}"><h2 class="section-title">${g}</h2><ul class="list">${gs.map(({ r }) =>
        `<li><a href="${r.h}"><span>${esc(r.t)}</span><span class="soft">${esc(r.s)}</span></a></li>`).join("")}</ul></section>` : "";
    }).join("");
  };
  input.addEventListener("input", render);
  render();
}
const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);
