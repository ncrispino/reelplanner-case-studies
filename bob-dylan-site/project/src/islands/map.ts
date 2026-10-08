// The connection map (step 5): every song a dot, every connection a line, laid out by d3-force around the song you
// opened. On a phone it opens on that song and its neighbours two connections out; drag to move, pinch to zoom.
// A press and release without moving is a plain click on the dot under it (the map takes the pointer only once it
// has moved more than 4 px), so a click or a tap opens the dot's song. The wheel scrolls the page; Ctrl or ⌘ + wheel
// (a trackpad pinch) and the + / − buttons zoom. On a computer's full map page (opts.selectable, from 1100 px) a click
// selects the dot instead and a double-click opens it.
import { forceSimulation, forceLink, forceManyBody, forceCenter, forceCollide } from "d3-force";

type Node = { id: string; title: string; by?: string | null; album?: string | null; year: number | null; era: string; x?: number; y?: number; fx?: number | null; fy?: number | null };
type Edge = { source: string | Node; target: string | Node; kind: string };
export type MapApi = { light: (id: string | null) => void; show: (id: string) => void; filter: (era: string | null) => void; select: (id: string | null) => void };
// near: open on the opened song's neighbourhood at every width (a phone always does)
type Opts = { selectable?: boolean; onSelect?: (id: string | null) => void; near?: boolean };

const DRAG_PX = 4;
const DESKTOP = "(min-width: 1100px)";

export function mountMap(el: HTMLElement, data: { nodes: Node[]; edges: Edge[] }, focus: string | null, base = "/", opts: Opts = {}): MapApi {
  const wide = matchMedia("(min-width: 768px)").matches;
  // the neighbourhood: the song, its neighbours, and theirs. Every song is laid out; on a phone the map opens zoomed
  // in on this neighbourhood, labels only it, and dragging brings the rest into view.
  const near = new Set<string>();
  if (focus) {
    near.add(focus);
    for (let d = 0; d < 2; d++) {
      for (const e of data.edges) {
        const s = e.source as string, t = e.target as string;
        if (near.has(s) && !near.has(t)) near.add(t); else if (near.has(t) && !near.has(s)) near.add(s);
      }
    }
  }
  const nodes = data.nodes.map((n) => ({ ...n }));
  const edges = data.edges.map((e) => ({ ...e }));
  const W = el.clientWidth, H = el.clientHeight;
  const NS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", `${-W / 2} ${-H / 2} ${W} ${H}`);
  svg.setAttribute("role", "img");
  svg.setAttribute("aria-label", focus ? "Songs connected to this one" : "Every song and its connections");
  const g = document.createElementNS(NS, "g");
  svg.append(g); el.replaceChildren(svg);
  const f = nodes.find((n) => n.id === focus);
  if (f) { f.fx = 0; f.fy = 0; }
  const sim = forceSimulation(nodes as any)
    .force("link", forceLink(edges as any).id((d: any) => d.id).distance(70))
    .force("charge", forceManyBody().strength(-160))
    .force("center", forceCenter(0, 0))
    .force("collide", forceCollide(26))
    .stop();
  for (let i = 0; i < 300; i++) sim.tick();
  const label = (n: Node) => wide || !focus || near.has(n.id);
  const allX = nodes.map((n) => n.x ?? 0), midX = (Math.max(...allX) + Math.min(...allX)) / 2;
  const lines = new Map<string, SVGLineElement[]>();
  for (const e of edges as any[]) {
    const l = document.createElementNS(NS, "line");
    l.setAttribute("x1", e.source.x); l.setAttribute("y1", e.source.y); l.setAttribute("x2", e.target.x); l.setAttribute("y2", e.target.y);
    const hot = focus && (e.source.id === focus || e.target.id === focus);
    l.setAttribute("class", `edge ${e.kind}${hot ? " near" : ""}`); g.append(l);
    for (const id of [e.source.id, e.target.id]) lines.set(id, [...(lines.get(id) ?? []), l]);
  }
  const dots = new Map<string, SVGAElement>();
  const byId = new Map(nodes.map((n) => [n.id, n]));
  for (const n of nodes) {
    const a = document.createElementNS(NS, "a");
    a.setAttribute("href", `${base}song/${n.id}/`);
    a.dataset.id = n.id; a.dataset.ne = n.era; // not data-era: that would dress the label in the era's fonts
    a.setAttribute("aria-label", `${n.title}${n.by ? `, ${n.by}` : ""}${n.year ? `, ${n.year}` : ""}`);
    dots.set(n.id, a);
    // an invisible ring around the dot, 28 map units across, so a finger or a mouse finds it easily
    const hit = document.createElementNS(NS, "circle");
    hit.setAttribute("cx", String(n.x)); hit.setAttribute("cy", String(n.y)); hit.setAttribute("r", "14"); hit.setAttribute("class", "hit");
    a.append(hit);
    const c = document.createElementNS(NS, "circle");
    c.setAttribute("cx", String(n.x)); c.setAttribute("cy", String(n.y)); c.setAttribute("r", n.id === focus ? "11" : "7");
    c.setAttribute("class", n.id === focus ? "dot focus" : near.size && !near.has(n.id) ? "dot far" : "dot"); c.setAttribute("data-era", n.era);
    if (n.id === focus) {
      // the opened song: a soft halo and a slow dashed ring around its dot
      for (const [cls, r] of [["halo", "24"], ["ring", "17"]]) {
        const h = document.createElementNS(NS, "circle");
        h.setAttribute("cx", String(n.x)); h.setAttribute("cy", String(n.y)); h.setAttribute("r", r);
        h.setAttribute("class", cls); h.setAttribute("data-era", n.era); a.append(h);
      }
    }
    a.append(c);
    if (label(n)) {
      const tx = document.createElementNS(NS, "text");
      // labels on the right half sit to the left of their dot, so none runs off the edge
      const right = (n.x ?? 0) > (focus && !wide ? 0 : midX);
      if (n.id === focus) {
        // the opened song's label sits centred above its dot
        tx.setAttribute("x", String(n.x ?? 0)); tx.setAttribute("y", String((n.y ?? 0) - 28)); tx.setAttribute("text-anchor", "middle");
        tx.setAttribute("class", "focus");
      } else {
        tx.setAttribute("x", String((n.x ?? 0) + (right ? -12 : 12))); tx.setAttribute("y", String((n.y ?? 0) + 4));
        if (right) tx.setAttribute("text-anchor", "end");
      }
      // another artist's recording is labelled with the artist, so it never repeats the original's title
      tx.textContent = n.by && n.by !== "traditional" ? n.by : n.title;
      tx.dataset.x = String(n.x ?? 0);
      tx.dataset.d = String(Math.hypot((n.x ?? 0) - (f?.x ?? 0), (n.y ?? 0) - (f?.y ?? 0)));
      if (n.id === focus) tx.dataset.d = "-1";
      a.append(tx);
    }
    g.append(a);
  }
  let k = 1, tx = 0, ty = 0;
  // labels keep a readable size on screen as the map zooms out (CSS divides their size by --lk)
  // a label that would overlap one nearer the opened song is hidden; zooming in brings it back
  const texts = [...g.querySelectorAll<SVGTextElement>("text")].sort((a, b) => +a.dataset.d! - +b.dataset.d!);
  let clutterTimer = 0;
  const declutter = () => {
    const kept: DOMRect[] = [];
    // the visible chart (its frame may be narrower than the drawing)
    const box = (svg.closest(".map") as HTMLElement ?? svg).getBoundingClientRect();
    const pad = 6;
    for (const el of texts) {
      el.style.display = "";
      if (el.dataset.anchor === undefined) el.dataset.anchor = el.getAttribute("text-anchor") ?? "start", el.dataset.lx = el.getAttribute("x") ?? "";
      el.setAttribute("text-anchor", el.dataset.anchor); el.setAttribute("x", el.dataset.lx!);
      let r = el.getBoundingClientRect();
      // a label running off an edge moves to the other side of its dot
      if (!el.classList.contains("focus") && (r.left < box.left + pad || r.right > box.right - pad)) {
        const toRight = r.left < box.left + pad;
        el.setAttribute("text-anchor", toRight ? "start" : "end");
        el.setAttribute("x", String(+el.dataset.x! + (toRight ? 12 : -12)));
        r = el.getBoundingClientRect();
        // still cut off (its dot sits at the edge): hide it until a drag brings it in
        if (r.left < box.left + pad || r.right > box.right - pad) { el.style.display = "none"; continue; }
      }
      const hit = kept.some((o) => r.left < o.right + 2 && r.right > o.left - 2 && r.top < o.bottom && r.bottom > o.top);
      if (hit) el.style.display = "none"; else kept.push(r);
    }
  };
  const apply = () => {
    g.setAttribute("transform", `translate(${tx},${ty}) scale(${k})`); svg.style.setProperty("--lk", k.toFixed(3));
    clearTimeout(clutterTimer); clutterTimer = window.setTimeout(declutter, 60);
  };
  const onFocus = !!focus && (!wide || !!opts.near);
  const fitTo = nodes.filter((n) => (onFocus ? near.has(n.id) : true));
  const xs = fitTo.map((n) => n.x ?? 0), ys = fitTo.map((n) => n.y ?? 0);
  const bw = Math.max(80, Math.max(...xs) - Math.min(...xs) + 140), bh = Math.max(80, Math.max(...ys) - Math.min(...ys) + 60);
  k = Math.min(2.2, Math.max(0.3, Math.min(W / bw, H / bh)));
  const cx = onFocus ? 0 : (Math.max(...xs) + Math.min(...xs)) / 2, cy = onFocus ? 0 : (Math.max(...ys) + Math.min(...ys)) / 2;
  tx = -cx * k; ty = -cy * k; apply();

  /** Zoom by a factor around a point given in the svg's own coordinates (0, 0 is the middle). */
  const zoom = (factor: number, px = 0, py = 0) => {
    const nk = Math.min(4, Math.max(0.3, k * factor));
    tx = px - (px - tx) * (nk / k); ty = py - (py - ty) * (nk / k); k = nk; apply();
  };
  const toSvg = (clientX: number, clientY: number) => {
    const r = svg.getBoundingClientRect();
    return { x: (clientX - r.left - r.width / 2) * (W / r.width), y: (clientY - r.top - r.height / 2) * (H / r.height) };
  };

  // drag to move, pinch to zoom; nothing is taken until the pointer has moved more than 4 px
  const pts = new Map<number, { x: number; y: number; sx: number; sy: number }>();
  let lastDist = 0, moved = false, dragging = false;
  svg.addEventListener("dragstart", (e) => e.preventDefault());
  svg.addEventListener("pointerdown", (e) => {
    if (e.button !== 0) return;
    pts.set(e.pointerId, { x: e.clientX, y: e.clientY, sx: e.clientX, sy: e.clientY });
    if (pts.size === 1) { moved = false; dragging = false; }
  });
  svg.addEventListener("pointermove", (e) => {
    const p = pts.get(e.pointerId); if (!p) return;
    if (pts.size === 1) {
      if (!dragging && Math.hypot(e.clientX - p.sx, e.clientY - p.sy) > DRAG_PX) {
        dragging = moved = true;
        try { svg.setPointerCapture(e.pointerId); } catch { /* the pointer is gone */ }
        svg.classList.add("dragging");
      }
      if (dragging) { tx += (e.clientX - p.x) * (W / svg.getBoundingClientRect().width); ty += (e.clientY - p.y) * (H / svg.getBoundingClientRect().height); }
    }
    p.x = e.clientX; p.y = e.clientY;
    if (pts.size === 2) {
      moved = true;
      for (const id of pts.keys()) { try { svg.setPointerCapture(id); } catch { /* gone */ } }
      const [a, b] = [...pts.values()]; const d = Math.hypot(a.x - b.x, a.y - b.y);
      if (lastDist) k = Math.min(4, Math.max(0.3, k * d / lastDist)); lastDist = d;
    }
    if (dragging || pts.size === 2) apply();
  });
  const up = (e: PointerEvent) => {
    pts.delete(e.pointerId); if (pts.size < 2) lastDist = 0;
    if (!pts.size) { dragging = false; svg.classList.remove("dragging"); }
  };
  svg.addEventListener("pointerup", up); svg.addEventListener("pointercancel", up);

  // a click: after a drag, nothing; on a computer's full map page, select the dot; anywhere else, the link opens
  let selected: string | null = null;
  const selectable = () => !!opts.selectable && matchMedia(DESKTOP).matches;
  svg.addEventListener("click", (e) => {
    if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; return; }
    if (!selectable()) return;
    const a = (e.target as Element).closest<SVGAElement>("a[data-id]");
    e.preventDefault(); e.stopPropagation();
    select(a ? a.dataset.id! : null);
  }, true);
  svg.addEventListener("dblclick", (e) => {
    const a = (e.target as Element).closest<SVGAElement>("a[data-id]");
    if (a && selectable()) location.assign(a.getAttribute("href")!);
  });

  // the wheel scrolls the page; with Ctrl or ⌘ (a trackpad pinch sends ctrlKey) it zooms around the pointer
  svg.addEventListener("wheel", (e) => {
    if (!e.ctrlKey && !e.metaKey) return;
    e.preventDefault();
    const p = toSvg(e.clientX, e.clientY);
    zoom(Math.exp(-e.deltaY * (e.deltaMode === 1 ? 0.05 : 0.0025)), p.x, p.y);
  }, { passive: false });
  const chart = el.closest(".chart");
  chart?.querySelector(".zoom-in")?.addEventListener("click", () => zoom(1.25));
  chart?.querySelector(".zoom-out")?.addEventListener("click", () => zoom(0.8));

  // hovering a dot (a mouse, not a finger) names it beside the dot and lights its lines
  const tip = chart?.querySelector<HTMLElement>(".hover");
  const light = (id: string | null) => {
    g.querySelectorAll(".edge.lit").forEach((l) => l.classList.remove("lit"));
    g.querySelectorAll("a.lit").forEach((a) => a.classList.remove("lit"));
    if (!id) return;
    for (const l of lines.get(id) ?? []) l.classList.add("lit");
    dots.get(id)?.classList.add("lit");
  };
  if (tip && matchMedia("(hover: hover) and (pointer: fine)").matches) {
    g.addEventListener("pointerover", (e) => {
      if (dragging) return;
      const a = (e.target as Element).closest<SVGAElement>("a[data-id]"); if (!a) return;
      const n = byId.get(a.dataset.id!)!;
      tip.textContent = [n.title, n.by || n.album, n.year].filter(Boolean).join(" · ");
      const d = a.querySelector(".dot")!.getBoundingClientRect(), box = chart!.getBoundingClientRect();
      const x = d.right - box.left + 8, y = d.top + d.height / 2 - box.top;
      tip.style.left = `${Math.min(x, box.width - 12)}px`; tip.style.top = `${y}px`;
      tip.classList.toggle("flip", x > box.width * 0.62);
      tip.style.setProperty("--dw", `${d.width + 16}px`);
      tip.hidden = false;
      light(n.id);
    });
    g.addEventListener("pointerout", (e) => {
      const to = (e.relatedTarget as Element | null)?.closest?.("a[data-id]");
      if (to && g.contains(to)) return;
      tip.hidden = true; light(selected);
    });
  }

  const select = (id: string | null) => {
    selected = id;
    g.querySelectorAll("a.sel").forEach((a) => a.classList.remove("sel"));
    if (id) dots.get(id)?.classList.add("sel");
    light(id);
    opts.onSelect?.(id);
  };
  // light a dot and, if it is out of view, glide the map until it is in the middle (a thread's card hovered)
  let glide = 0;
  const show = (id: string) => {
    light(id);
    const n = byId.get(id); if (!n) return;
    const sx = (n.x ?? 0) * k + tx, sy = (n.y ?? 0) * k + ty;
    if (Math.abs(sx) < W / 2 - 60 && Math.abs(sy) < H / 2 - 40) return;
    const from = { tx, ty }, to = { tx: -(n.x ?? 0) * k, ty: -(n.y ?? 0) * k }, t0 = performance.now();
    const dur = matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 450;
    cancelAnimationFrame(glide);
    const frame = (t: number) => {
      const p = dur ? Math.min(1, (t - t0) / dur) : 1, e = 1 - (1 - p) ** 3;
      tx = from.tx + (to.tx - from.tx) * e; ty = from.ty + (to.ty - from.ty) * e; apply();
      if (p < 1) glide = requestAnimationFrame(frame);
    };
    glide = requestAnimationFrame(frame);
  };
  const filter = (era: string | null) => {
    svg.classList.toggle("filtered", !!era);
    for (const a of dots.values()) a.classList.toggle("dim", !!era && a.dataset.ne !== era);
  };
  return { light, show, filter, select };
}
