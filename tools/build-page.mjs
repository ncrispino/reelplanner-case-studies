#!/usr/bin/env node
// The case-study template (plan 2026-10-08-case-study-page, steps 2–4). From a study folder's study.json, timeline.json
// and the watch page's videos.json, it writes the study's two pages under docs/<slug>/:
//   index.html        the case study: a title, the site at a few stages, a short summary with the first prompt to copy,
//                     then the timeline (each plan's videos and reviews open, the rest collapsed, D-003), how the reviews
//                     worked, and an appendix of commands and files
//   watch/index.html  the videos, in a read-only viewer (HyperFrames' player), with their chapters and the owner's answers
// Both use docs/assets/case-study.css and docs/assets/theme.js (the light/dark toggle).
//
//   node tools/build-page.mjs bob-dylan-site
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from "node:fs";
import { join, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";

const dir = process.argv[2];
if (!dir) { console.error("usage: node tools/build-page.mjs <study-folder>"); process.exit(2); }
const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const S = JSON.parse(readFileSync(join(dir, "study.json"), "utf8"));
const T = JSON.parse(readFileSync(join(dir, "timeline.json"), "utf8"));
const OUT = join(ROOT, "docs", S.slug);
const { videos } = JSON.parse(readFileSync(join(OUT, "watch/videos.json"), "utf8"));
const FOLDER = basename(dir.replace(/\/$/, ""));
const GH = `https://github.com/ncrispino/reelplanner-case-studies/blob/main/${FOLDER}/`;
const TREE = `https://github.com/ncrispino/reelplanner-case-studies/tree/main/${FOLDER}`;
// the project's record folder: .reelplanner/, or .reelplanning/ in a study made before the tool's rename
const REC = existsSync(join(dir, "project/.reelplanner")) ? ".reelplanner" : ".reelplanning";
const TOOL = REC === ".reelplanner" ? "reelplanner" : "reelplanning";   // the command, as the study ran it
const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const E = T.events, byId = Object.fromEntries(E.map((e) => [e.id, e]));
const plans = Object.fromEntries(S.plans.map((p, i) => [p.id, { ...p, n: i + 1 }]));
const vid = Object.fromEntries(videos.map((v) => [v.slug, v]));
const still = Object.fromEntries(S.videos.map((v) => [v.slug, v.still]));
const anchor = (e) => `ev-${e.id.replace(/[^a-z0-9-]/gi, "-")}`;
const clock = (iso) => iso.slice(11, 16);
const mmss = (t) => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, "0")}`;
const DAYS = S.days, PICTURES = S.pictures ?? {};
const cmd = (text, cap) => `<div class="cmd">${cap ? `<span class="cap">${esc(cap)}</span>` : ""}<pre>${esc(text)}</pre><button type="button" class="copy">Copy</button></div>`;
const asPrompt = (words) => `claude${S.ranWith?.model ? ` --model ${S.ranWith.model}` : ""} "${words}"`;
const n = (k) => E.filter((e) => e.kind === k).length;
const COMMITS = readFileSync(join(dir, "commits.txt"), "utf8").split("\n");
const hashOf = (e) => e.source.startsWith("commit:") ? e.source.slice(7) : null;
const said = (e) => (hashOf(e) && S.plainCommits?.[hashOf(e)]) ?? e.title;
const commitLink = (e) => { const h = hashOf(e); if (!h) return esc(e.source); const i = COMMITS.findIndex((l) => l.startsWith(h));
  return `<a class="commit" href="${GH}commits.txt${i >= 0 ? `#L${i + 1}` : ""}" title="${esc(e.title)}">commit ${esc(h)}</a>`; };

// --- the head and the top bar, shared by both pages
const head = (title, desc, up) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<script src="${up}assets/theme.js"></script>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400;1,6..72,400&display=swap">
<link rel="stylesheet" href="${up}assets/case-study.css">`;
const bar = (here, home) => `<header class="top"><div class="in"><span class="crumbs"><a href="${home}../">reelplanner case studies</a><span aria-hidden="true">›</span><a class="name" href="${home}">${esc(S.title)}</a></span>
  <nav aria-label="This case study"><a href="${home}"${here === "study" ? ' aria-current="page"' : ""}>Write-up</a><a href="${home}watch/"${here === "watch" ? ' aria-current="page"' : ""}><span class="long">Watch the ${videos.length} videos</span><span class="short">Videos</span></a><a href="${home}site/" title="The site this study built, as it was at the end"><span class="long">The finished site</span><span class="short">Site</span> ↗</a></nav>
  <button type="button" class="theme" aria-label="Switch theme">☾</button></div></header>`;
const copyScript = `for (const b of document.querySelectorAll(".copy")) b.addEventListener("click", async () => {
    const pre = b.closest(".cmd").querySelector("pre");
    try { await navigator.clipboard.writeText(pre.textContent); b.textContent = "Copied"; b.classList.add("done"); }
    catch { const r = document.createRange(); r.selectNodeContents(pre); const s = getSelection(); s.removeAllRanges(); s.addRange(r); b.textContent = "Selected"; }
    setTimeout(() => { b.textContent = "Copy"; b.classList.remove("done"); }, 1600);
  });`;

// --- a video rebuilt after a review: its first version was not kept, and the card that plays sits at the rebuild
const VERSIONS = S.versions ?? {};                                   // video slug → the event that built the version kept
const finalFor = Object.fromEntries(Object.entries(VERSIONS).map(([slug, id]) => [id, slug]));
const vcard = (v) => `<a class="vid" href="watch/?v=${v.slug}"><img src="img/${still[v.slug]}.jpg" alt="A scene from the ${esc(v.title)}" loading="lazy">
      <span><b>${esc(v.kind === "plan" ? "Plan video" : "Walkthrough")} · ${esc(v.planTitle)}</b><span>${v.scenes} scenes · ${v.lengthLabel}${v.questions.length ? ` · ${v.questions.length} question${v.questions.length > 1 ? "s" : ""} for the owner` : ""}</span><em>Watch it →</em></span></a>`;

// --- one event of the timeline
function eventHtml(e, first) {
  // the event that built the version kept of a rebuilt video
  if (finalFor[e.id]) {
    const v = vid[finalFor[e.id]];
    return `<article class="ev video" id="${anchor(e)}" data-kind="${e.kind}" data-source="${esc(e.source)}" data-plan="${esc(e.plan ?? "")}" data-day="${e.at.slice(0, 10)}"><time>${clock(e.at)}</time><div>
      <p class="who">The agent rebuilds the ${v.kind === "plan" ? "plan video" : "walkthrough video"} · version 2, the one you can watch</p>
      ${vcard(v)}
      <p class="meta">${esc(said(e))} · ${commitLink(e)}</p></div></article>`;
  }
  const t = `<time>${clock(e.at)}</time>`;
  const attrs = `id="${anchor(e)}" data-kind="${e.kind}" data-source="${esc(e.source)}" data-plan="${esc(e.plan ?? "")}" data-day="${e.at.slice(0, 10)}"`;
  if (e.kind === "asked") {
    return `<article class="ev asked${e.starts ? " starts" : ""}" ${attrs}>${t}<div>
      <p class="who">${e.starts ? "The owner asks for a plan" : e.approves ? "The owner approves the plan in chat" : "The owner writes"}</p><blockquote>${esc(e.words)}</blockquote>
</div></article>`;
  }
  if (e.kind === "plan") {
    return `<article class="ev plan" ${attrs}>${t}<div><p class="who">The agent writes the plan</p><p>${esc(said(e))}</p>
      <p class="meta"><a href="${GH}project/${REC}/plans/${e.plan}/plan.md">plan.md</a> · ${commitLink(e)}</p></div></article>`;
  }
  if (e.kind === "video" && first) {
    const v = vid[e.video], kept = VERSIONS[v.slug] && byId[VERSIONS[v.slug]];
    if (kept) return `<article class="ev video old" ${attrs}>${t}<div><p class="who">The agent makes the ${v.kind === "plan" ? "plan video" : "walkthrough video"} · version 1</p>
      <p class="gone">This first version was not kept. The video you can watch is version 2, rebuilt at ${clock(kept.at)} after the owner's review. <a href="#${anchor(kept)}">Go to version 2 ↓</a></p>
      <p class="meta">${esc(said(e))} · ${commitLink(e)}</p></div></article>`;
    return `<article class="ev video" ${attrs}>${t}<div><p class="who">The agent makes the ${v.kind === "plan" ? "plan video" : "walkthrough video"}</p>
      ${vcard(v)}
      <p class="meta">${esc(said(e))} · ${commitLink(e)}</p></div></article>`;
  }
  if (e.kind === "review") {
    const v = e.video ? vid[e.video] : null;
    // a comment's moment links into the video only when that video was not rebuilt after the review (its times moved)
    const rebuilt = E.some((x) => x.kind === "video" && x.video === e.video && x.at > e.at);
    const what = e.of === "plan" ? "plan" : "walkthrough";
    const verdict = e.inChat ? `The owner approves the plan <span class="v ok">in chat</span>` : e.verdict === "approve" ? `The owner reviews the ${what} and <span class="v ok">approves it</span>` : `The owner reviews the ${what} and <span class="v chg">asks for changes</span>`;
    const own = new Set((e.answers ?? []).filter((a) => a.own).map((a) => a.answer));
    const answers = (e.answers ?? []).map((a) => `<li><span class="q">Question ${esc(a.q.slice(1))}${a.question ? ` · ${esc(a.question)}` : ""}</span><span><b>${esc(a.answer)}</b>${a.own ? ` <i>(typed answer, not one of the options)</i>` : ""}</span></li>`).join("");
    const comments = (e.comments ?? []).filter((c) => !own.has(c.words)).map((c) => `<li>${c.scene ? `<span class="on">On “${esc(c.scene)}”${v && !rebuilt && c.t != null ? `<a class="at" href="watch/?v=${v.slug}#t=${c.t}">▶ ${mmss(c.t)}</a>` : ""}</span>` : ""}<q>${esc(c.words)}</q></li>`).join("");
    const flags = (e.flags ?? []).filter((f) => f.verdict === "flag").map(() => `<li><span class="on">Flagged one of the agent's choices for another look</span></li>`).join("");
    const led = e.ledTo && byId[e.ledTo];
    return `<article class="ev review" ${attrs}>${t}<div>
      <p class="who">${verdict}</p>
      ${answers ? `<ul class="answers">${answers}</ul>${e.of === "walkthrough" ? `<p class="note">A walkthrough's questions continue the plan's numbering.</p>` : ""}` : ""}${comments || flags ? `<ul class="comments">${comments}${flags}</ul>` : ""}
      <p class="meta">${v ? (VERSIONS[v.slug] && byId[VERSIONS[v.slug]] && byId[VERSIONS[v.slug]].at > e.at ? `This review was of version 1, which was not kept; <a href="watch/?v=${v.slug}">watch version 2</a> · ` : `<a href="watch/?v=${v.slug}">Watch the video</a> · `) : ""}${led ? `<a href="#${anchor(led)}">What it led to ↓</a> · ` : ""}<a href="${GH}${e.source}">review file (JSON)</a></p></div></article>`;
  }
  const pics = PICTURES[e.id] ?? [];
  return `<article class="ev ${e.kind}" ${attrs}>${t}<div>${pics.length ? `<p class="who">${e.kind === "change" ? "What changed" : "What was built"}</p>` : ""}<p>${esc(said(e))} <span class="meta">${commitLink(e)}</span></p>
    ${pics.length ? `<div class="pics">${pics.map(([src, cap, k]) => `<figure class="${k}"><img src="img/${src}.jpg" alt="${esc(cap)}" loading="lazy"><figcaption>${esc(cap)}</figcaption></figure>`).join("")}</div>` : ""}</div></article>`;
}

// --- the timeline: days, plan stretches, open events, collapsed runs (D-003)
const seenVideo = new Set();
const firsts = new Map(E.map((e) => [e.id, e.kind === "video" && e.video && !seenVideo.has(e.video) && (seenVideo.add(e.video), true)]));
const isOpen = (e) => finalFor[e.id] || e.kind === "plan" || e.kind === "review" || (e.kind === "asked" && !e.small) || firsts.get(e.id) || PICTURES[e.id];
const kindName = (e) => e.kind === "asked" ? "chat message" : e.kind === "video" ? "video fix" : e.kind === "change" ? "follow-up commit" : "build commit";
let html = "", day = null, plan = null, fold = [];
const groupOf = {}; for (const g of S.together ?? []) for (const id of g) groupOf[id] = g;
const flush = () => {
  if (!fold.length) return;
  const counts = {}; for (const e of fold) counts[kindName(e)] = (counts[kindName(e)] ?? 0) + 1;
  html += `<details class="fold"><summary>${Object.entries(counts).map(([k, c]) => `${c} ${k}${c > 1 ? "s" : ""}`).join(", ")}</summary>${fold.map((e) => eventHtml(e, false)).join("")}</details>`;
  fold = [];
};
for (const e of E) {
  const d = e.at.slice(0, 10);
  if (d !== day) { flush(); day = d; html += `<h3 class="day" id="day-${d}">${esc(DAYS[d] ?? d)}</h3>`; }
  const p = e.kind === "asked" && e.starts ? e.plan : e.kind === "review" && e.startsPlan ? e.startsPlan : null;
  if (p && p !== plan && !(groupOf[p] && groupOf[p].includes(plan))) {
    flush(); plan = p;
    const g = groupOf[p];
    html += g
      ? `<div class="stretch" id="plan-${g[0]}" data-plan="${p}"><span id="plan-${g[1]}"></span><span class="label">Plans ${g.map((x) => plans[x].n).join(" and ")} · ${esc(plans[p].kind)}</span><h3>${g.map((x) => esc(plans[x].title)).join(", and ")}</h3>${S.togetherNote ? `<p>${esc(S.togetherNote)}</p>` : ""}</div>`
      : `<div class="stretch" id="plan-${p}" data-plan="${p}"><span class="label">Plan ${plans[p].n} · ${esc(plans[p].kind)}</span><h3>${esc(plans[p].title)}</h3></div>`;
  } else if (p) plan = p;
  if (isOpen(e)) { flush(); html += eventHtml(e, firsts.get(e.id)); } else fold.push(e);
}
flush();

// --- the strip at the top: the site at a few stages, each linking to the event that made it
const stages = (S.stages ?? []).map((st, i) => `<button type="button" class="shot ${st.kind}" data-i="${i}" data-src="img/${st.img}.jpg" data-caption="${esc(st.caption)}" data-href="#${byId[st.event] ? anchor(byId[st.event]) : "timeline"}" aria-label="See larger: ${esc(st.caption)}"><span class="pic"><img src="img/${st.img}.jpg" alt="${esc(st.caption)}" loading="eager">${st.badge ? `<span class="badge">+ ${esc(st.badge)}</span>` : ""}</span><span>${esc(st.caption)}</span></button>`).join("");
const first = E.find((e) => e.kind === "asked")?.words ?? "";

const page = `${head(`${S.title} · a reelplanner case study`, S.dek, "../")}
</head>
<body>
${bar("study", "./")}
<div class="lead page">
  <header class="dochead">
    <p class="label">${esc(S.label)}</p>
    <h1>${esc(S.heading ?? S.title)}</h1>
    <p class="dek">${esc(S.dek)}</p>
  </header>
  ${stages ? `<p class="strip-label">${esc(S.stripLabel ?? "The site as it changed.")}</p><figure class="strip" aria-label="The site at ${S.stages.length} stages">${stages}</figure>
  <dialog class="viewer" id="viewer" aria-label="The site, larger" tabindex="-1" autofocus>
    <div class="vbar"><span class="vcount" id="vcount"></span><span class="vcap" id="vcap"></span><a class="vgo" id="vgo" href="#timeline">See this in the timeline ↓</a><button type="button" class="vx" data-close aria-label="Close">×</button></div>
    <div class="vbody"><button type="button" class="vnav" data-d="-1" aria-label="The stage before">‹</button><img id="vimg" alt=""><button type="button" class="vnav" data-d="1" aria-label="The stage after">›</button></div>
  </dialog>` : ""}
</div>
<div class="doc page">
<nav class="toc" aria-label="Contents">
  <span class="label">Contents</span>
  <ol>
    <li><a href="#summary">Summary</a></li>
    <li><a href="#timeline">1 · Timeline</a>
      <ol class="plans">${S.plans.filter((p) => !groupOf[p.id] || groupOf[p.id][0] === p.id).map((p) => groupOf[p.id]
        ? `<li><a href="#plan-${p.id}" data-plan="${groupOf[p.id].join(" ")}">Plans ${groupOf[p.id].map((x) => plans[x].n).join(" and ")} · ${groupOf[p.id].map((x) => esc(plans[x].title)).join(", and ")}</a></li>`
        : `<li><a href="#plan-${p.id}" data-plan="${p.id}">Plan ${plans[p.id].n} · ${esc(p.title)}</a></li>`).join("")}</ol></li>
    <li><a href="#reviews">2 · How the reviews worked</a></li>
    <li><a href="#appendix">Appendix</a></li>
  </ol>
  <p class="where"><span id="now-day">${esc(DAYS[E[0].at.slice(0, 10)] ?? "")}</span><br><span id="now-plan">${esc(S.plans[0].title)}</span></p>
</nav>
<main>
  <section id="summary" class="brief">
    ${(S.summary ?? []).map((p) => `<p>${p}</p>`).join("\n    ")}
    <div class="repro"><p>To try it yourself, install reelplanner, then give the owner's first prompt in an empty folder${/\breelplanning\b/.test(first) ? " (it says reelplanning, the tool's name then)" : ""}:</p>
      ${cmd(`mkdir ${S.project} && cd ${S.project} && git init\n${asPrompt(first)}`)}
      ${S.ranWith ? `<p class="ranwith">The study ran on ${[S.ranWith.modelName && `${esc(S.ranWith.modelName)} (<code>${esc(S.ranWith.model)}</code>)`, S.ranWith.claudeCode && `Claude Code ${esc(S.ranWith.claudeCode)}`, S.ranWith.reelplanner && `<code>reelplanner</code> ${esc(S.ranWith.reelplanner)}`, S.ranWith.reelplanning && `<code>reelplanning</code> ${esc(S.ranWith.reelplanning)}`, S.ranWith.hyperframes && `HyperFrames ${esc(S.ranWith.hyperframes)}`].filter(Boolean).join(", ")}.</p>` : ""}
      <details class="more"><summary>Install reelplanner first</summary>
        <p>macOS or Linux, Node 22.20 or later, Python 3.10 or later; about 1.3 GB in all.</p>
        <p>The narration voice runs on your machine. On a slow machine, use a hosted voice instead (about $0.03 a minute of narration): write these two lines before setup, which checks the voice it will use.</p>
        ${cmd(`mkdir -p ~/.reelplanner && printf 'REELPLANNER_TTS=openrouter\\nOPENROUTER_API_KEY=sk-or-…\\n' >> ~/.reelplanner/.env`, "Optional: the hosted voice")}
        ${cmd(`npm i -g github:ncrispino/reelplanner\nreelplanner setup\nnpx skills add "$(npm root -g)/reelplanner" --skill plan-to-video -g`, "Install")}
        <p>Installed it before as reelplanning, its name until October 2026? Run <code>npm rm -g reelplanning</code> first: npm will not install over its commands.</p>
        <p>When each video opens, answer its questions, add any comments, then send the review. Each later plan below starts with the owner's message; give it to Claude Code the same way.</p>
      </details></div>
  </section>

  <section id="timeline">
    <h2>1 · Timeline</h2>
    <p>Taken from the session transcript, the review files and the project's commits. The owner's words are quoted exactly, typos included. Minor steps are collapsed. Times are UTC.</p>
    <div class="tl">${html}</div>
  </section>

  <section id="reviews">
    <h2>2 · How the reviews worked</h2>
    <dl class="facts-list">${(S.facts ?? []).map(([t, d]) => `<dt>${esc(t)}</dt><dd>${d}</dd>`).join("")}</dl>
  </section>

  <section id="appendix">
    <h2>Appendix</h2>
    <details class="more"><summary>The commands, in the order they ran</summary>
      ${REC === ".reelplanning" ? `<p>They ran as <code>reelplanning</code>, the tool's name then. Today the command is <code>reelplanner</code> (the old name still runs), and a new project's record is <code>.reelplanner/</code>.</p>` : ""}
      ${cmd(`${TOOL} reel new-plan . <name> --plan plan.md\n${TOOL} reel check ${REC}/plans/<plan>`, "Write a plan and check it against earlier decisions")}
      ${cmd(`${TOOL} narrate <video>\n${TOOL} check-terms <video>\n${TOOL} build <video>`, "Write the narration, check it, build the video")}
      ${cmd(`${TOOL} fresh-eyes <video>\n${TOOL} fresh-eyes <video> --prompt newcomer\n${TOOL} fresh-eyes <video> --prompt designer`, "Outside review: the prompts for two agents that never saw the chat")}
      ${cmd(`${TOOL} review <video> --port 8006 --detach\n${TOOL} review --wait\n${TOOL} reel record ${REC}/plans/<plan> ${REC}/inbox/<review>.json`, "Open the review page, wait for the review, file it")}
      ${cmd(`${TOOL} code-check ${REC}/plans/<plan> --base <ref>\n${TOOL} reel check ${REC}/plans/<plan> --base <ref>\n${TOOL} reel audit ${REC}/plans/<plan>`, "After a build: the code check and the walkthrough's checks")}
    </details>
    <details class="more"><summary>Where everything is kept</summary>
<div class="tree"><a href="${TREE}">${esc(FOLDER)}/</a>
  <a href="${GH}transcript.zip">transcript.zip</a>        the session up to the end of the build, as Claude Code recorded it (the owner's email, account skills and connected accounts redacted)
  <a href="${GH}timeline.json">timeline.json</a>         this timeline, as data
  <a href="${GH}study.json">study.json</a>            what this page says about the study, beyond the timeline
  <a href="${GH}commits.txt">commits.txt</a>           the project's commits, one a line
  <a href="${TREE}/project">project/</a>              the project as committed: source, data, plans, reviews, decisions
docs/${esc(S.slug)}/
  <a href="watch/">watch/</a>                the videos, to watch
  <a href="site/">site/</a>                 the built site</div>
    </details>
  </section>
</main>
</div>
<footer><div class="page doc-foot">A case study of <a href="https://github.com/ncrispino/reelplanner">reelplanner</a>.${S.credits ? " " + esc(S.credits) : " The site's photographs are from Wikimedia Commons under their own licences; album covers come from the Cover Art Archive."}</div></footer>
<script>
  ${copyScript}
  // the strip's pictures, larger: ‹ › or ← → between stages, Esc or × to close
  const viewer = document.getElementById("viewer");
  if (viewer) {
    const shots = [...document.querySelectorAll(".strip .shot")]; let at = 0;
    const show = (i) => { at = (i + shots.length) % shots.length; const s = shots[at];
      document.getElementById("vimg").src = s.dataset.src; document.getElementById("vimg").alt = s.dataset.caption;
      document.getElementById("vcap").textContent = s.dataset.caption; document.getElementById("vcount").textContent = (at + 1) + " of " + shots.length;
      document.getElementById("vgo").setAttribute("href", s.dataset.href); };
    shots.forEach((s, i) => s.addEventListener("click", () => { show(i); viewer.showModal(); viewer.focus(); }));
    viewer.addEventListener("click", (e) => { const b = e.target.closest("[data-d]"); if (b) show(at + +b.dataset.d); else if (e.target.closest("[data-close]") || e.target === viewer) viewer.close(); });
    document.getElementById("vgo").addEventListener("click", () => viewer.close());
    viewer.addEventListener("keydown", (e) => { if (e.key === "ArrowRight") show(at + 1); if (e.key === "ArrowLeft") show(at - 1); });
  }
  // a link into a collapsed run opens it
  const openTo = () => { const t = location.hash ? document.querySelector(location.hash) : null; const d = t && t.closest("details"); if (d) { d.open = true; t.scrollIntoView(); } };
  window.addEventListener("hashchange", openTo); openTo();
  // the contents: the day and the plan of the event at the top of the window
  const DAYS = ${JSON.stringify(DAYS)}, PLANS = ${JSON.stringify(Object.fromEntries(S.plans.map((p) => [p.id, groupOf[p.id] ? groupOf[p.id].map((x) => plans[x].title).join(", and ") : p.title])))};
  const dayEl = document.getElementById("now-day"), planEl = document.getElementById("now-plan"), links = [...document.querySelectorAll(".toc a[data-plan]")];
  const marks = [...document.querySelectorAll(".tl .ev, .tl .stretch")];
  let cur = null;
  const update = () => {
    // only what is on the page: an event folded inside a closed run reports a position it is not shown at
    let at = null; for (const m of marks) { if (m.closest("details:not([open])")) continue; if (m.getBoundingClientRect().top < 160) at = m; else break; }
    if (!at || at === cur) return; cur = at;
    let i = marks.indexOf(at), p = null, d = null;
    for (let j = i; j >= 0 && (!p || !d); j--) { p = p || marks[j].dataset.plan || null; d = d || marks[j].dataset.day || null; }
    if (d && DAYS[d]) dayEl.textContent = DAYS[d];
    if (p && PLANS[p]) planEl.textContent = PLANS[p];
    for (const a of links) a.classList.toggle("on", a.dataset.plan.split(" ").includes(p));
  };
  addEventListener("scroll", update, { passive: true }); addEventListener("hashchange", () => setTimeout(update, 60)); addEventListener("load", () => setTimeout(update, 60)); update();
</script>
</body>
</html>
`;

// --- the watch page: the read-only viewer
const watch = `${head(`The videos · ${S.title}`, `The videos of the ${S.title} case study, to watch, with their chapters and the owner's answers.`, "../../")}
<!-- HyperFrames' own player (MIT, assets/hyperframes-player.LICENSE): it plays a reviewed video's scenes with their voice and
     captions, and nothing else; the review page's marks, comments and answers are reelplanner's layer, left out here -->
<script src="../../assets/hyperframes-player.js"></script>
</head>
<body>
${bar("watch", "../")}
<main class="page"><div class="watch">
  <nav class="vlist" aria-label="The videos" id="list"></nav>
  <div class="stage">
    <span class="label" id="kicker"></span>
    <h1 id="title">Loading…</h1>
    <p class="sub" id="meta"></p>
    <div class="screen"><hyperframes-player id="p" controls width="1920" height="1080"></hyperframes-player></div>
    <div class="marks" id="marks"></div>
    ${S.videoNote ? `<p class="note">${esc(S.videoNote)}</p>` : ""}
    <p class="note">This is the video the owner reviewed, without the pauses. Where the review stopped at a question, this version plays
    the scenes for every option in turn. The list shows what the owner picked.</p>
  </div>
</div></main>
<script>
(async () => {
  const { videos } = await (await fetch("videos.json")).json();
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const mmss = (t) => \`\${Math.floor(t / 60)}:\${String(Math.floor(t % 60)).padStart(2, "0")}\`;
  const player = $("p");
  // the list, by plan; a plan approved in chat has no plan video
  const plans = [...new Map(videos.map((x) => [x.plan, x.planTitle])).entries()];
  $("list").innerHTML = plans.map(([plan, title], i) => {
    const vs = videos.filter((x) => x.plan === plan);
    return \`<section><span class="label">Plan \${i + 1}</span><p class="pt">\${esc(title)}</p>\` +
      (vs.some((x) => x.kind === "plan") ? "" : \`<div class="none">Approved in chat: no plan video</div>\`) +
      vs.map((x) => \`<a href="?v=\${x.slug}" data-v="\${x.slug}"><span>\${x.kind === "plan" ? "Plan video" : "Walkthrough"}</span><small>\${x.lengthLabel}</small></a>\`).join("") + \`</section>\`;
  }).join("");
  let cur = null, pendingSeek = null;
  const open = (slug, t, push) => {
    cur = videos.find((x) => x.slug === slug) || videos[0];
    document.title = \`\${cur.title} · ${esc(S.title)}\`;
    $("kicker").textContent = \`Plan \${plans.findIndex(([p]) => p === cur.plan) + 1} · \${cur.planTitle}\`;
    $("title").textContent = cur.kind === "plan" ? "Plan video" : "Walkthrough";
    $("meta").textContent = \`\${cur.scenes} scenes · \${cur.lengthLabel}\` + (cur.questions.length ? \` · \${cur.questions.length} question\${cur.questions.length > 1 ? "s" : ""} for the owner\` : "");
    for (const a of $("list").querySelectorAll("a")) a.setAttribute("aria-current", a.dataset.v === cur.slug ? "true" : "false");
    const rows = [...cur.chapters.map((c) => ({ ...c, q: false })), ...cur.questions.map((q) => ({ ...q, q: true }))].sort((a, b) => a.t - b.t);
    $("marks").innerHTML = rows.map((r) => r.q
      ? \`<button class="mark q" data-t="\${r.t}"><time>\${mmss(r.t)}</time><span><b>Question \${esc(r.id.slice(1))} · \${esc(r.question || "")}</b>\` +
        (r.answer ? \`<span class="ans">\${esc(r.answer)}\${r.own ? " (typed answer)" : ""}</span>\` : "") + \`</span></button>\`
      : \`<button class="mark" data-t="\${r.t}"><time>\${mmss(r.t)}</time><span>\${esc(r.title)}</span></button>\`).join("") +
      (cur.kind !== "plan" && cur.questions.length ? \`<p class="note">A walkthrough's questions continue the plan's numbering.</p>\` : "");
    pendingSeek = t || null;
    player.setAttribute("src", cur.src);
    if (push) history.pushState({}, "", \`?v=\${cur.slug}\`);
  };
  player.addEventListener("ready", () => { if (pendingSeek) { player.seek(pendingSeek); pendingSeek = null; } });
  $("list").addEventListener("click", (e) => { const a = e.target.closest("a[data-v]"); if (!a) return; e.preventDefault(); open(a.dataset.v, 0, true); });
  $("marks").addEventListener("click", (e) => { const b = e.target.closest(".mark"); if (!b) return; player.seek(+b.dataset.t + 0.6); player.play(); });
  player.addEventListener("timeupdate", (e) => {
    const t = e.detail?.currentTime ?? player.currentTime; let last = null;
    for (const b of $("marks").querySelectorAll(".mark")) { b.classList.remove("now"); if (+b.dataset.t <= t + 0.1) last = b; }
    last?.classList.add("now");
  });
  addEventListener("popstate", () => open(new URLSearchParams(location.search).get("v"), 0, false));
  const hash = location.hash.match(/t=([\\d.]+)/);
  open(new URLSearchParams(location.search).get("v"), hash ? +hash[1] : 0, false);
})();
</script>
</body>
</html>
`;
// --- the front page: every study in the repo (a folder with a study.json), newest first
// GitHub's mark, for links that go to a repo
const GH_ICON = `<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>`;
const studies = readdirSync(ROOT).filter((d) => existsSync(join(ROOT, d, "study.json"))).map((d) => JSON.parse(readFileSync(join(ROOT, d, "study.json"), "utf8")))
  .sort((a, b) => Object.keys(b.days)[0].localeCompare(Object.keys(a.days)[0]));
const front = `${head("reelplanner case studies", "Real projects planned and reviewed through reelplanner, each with its videos, its reviews and its session transcript.", "")}
</head>
<body>
<header class="top"><div class="in"><span class="crumbs"><a class="name" href="./">reelplanner case studies</a></span>
  <nav aria-label="Links"><a class="gh" href="https://github.com/ncrispino/reelplanner" title="reelplanner on GitHub: what it is and how to install it">${GH_ICON}<span class="long">Install reelplanner</span><span class="short">Install</span></a><a class="gh" href="https://github.com/ncrispino/reelplanner-case-studies" title="This site's own repo on GitHub: every study's videos, transcript and project files">${GH_ICON}<span class="long">Case studies repo</span><span class="short">Repo</span></a></nav>
  <button type="button" class="theme" aria-label="Switch theme">☾</button></div></header>
<main class="page"><div class="front">
  <p class="label">Case studies</p>
  <h1>reelplanner, used on real projects</h1>
  <p class="dek"><a href="https://github.com/ncrispino/reelplanner">reelplanner</a> (called reelplanning until October 2026) turns a coding agent's plan into a short narrated video that stops at each open question, so you review the plan by watching it.
  Each study here follows one project from its first prompt to its last review: what the owner asked, the videos they watched, what they said, and what changed.</p>
  <ul class="studies">${studies.map((st) => `<li><a href="${st.slug}/">${st.card ? `<img src="${st.slug}/img/${st.card}.jpg" alt="" loading="lazy">` : ""}<span class="t"><span class="l">${esc(st.label)}</span><b>${esc(st.heading ?? st.title)}</b><span>${esc(st.blurb ?? st.dek)}</span><em>Read the case study →</em></span></a></li>`).join("")}</ul>
</div></main>
<footer><div class="page">More studies will be added here as they are written. How a study is made: <a href="https://github.com/ncrispino/reelplanner-case-studies/blob/main/TEMPLATE.md">TEMPLATE.md</a>.</div></footer>
</body>
</html>
`;
writeFileSync(join(ROOT, "docs/index.html"), front);

mkdirSync(join(OUT, "watch"), { recursive: true });
writeFileSync(join(OUT, "index.html"), page);
writeFileSync(join(OUT, "watch/index.html"), watch);
console.log(`✓ docs/${S.slug}/index.html: ${E.length} events in ${new Set(E.map((e) => e.at.slice(0, 10))).size} days, ${S.plans.length} plans, ${videos.length} videos, ${n("review")} reviews · docs/${S.slug}/watch/index.html`);
