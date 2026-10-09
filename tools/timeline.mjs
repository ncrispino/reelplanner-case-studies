#!/usr/bin/env node
// The timeline of a case study (plan 2026-10-08-case-study-page, step 1): one event per thing that happened, from the
// session transcript (the owner's messages), each plan's reviews, and the project's commits; each event keeps its time,
// its kind, the owner's own words quoted exactly, its source, and the event it led to.
//
//   node tools/timeline.mjs bob-dylan-site      # reads bob-dylan-site/study.json; writes bob-dylan-site/timeline.json
//
// Kinds: asked (a message the owner typed), plan (a plan written), video (a video made or revised), review (a review sent
// from the review page), build (code that landed), change (a commit that follows a review). What the agent did is one
// line per event, its commit's subject (D-001); the agent's chat replies stay in the transcript.
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join } from "node:path";

const dir = process.argv[2];
if (!dir) { console.error("usage: node tools/timeline.mjs <study-folder>"); process.exit(2); }
// the project's record folder: .reelplanner/, or .reelplanning/ in a study made before the tool's rename
const REC = existsSync(join(dir, "project/.reelplanner")) ? ".reelplanner" : ".reelplanning";
const plansDir = join(dir, "project", REC, "plans");

// --- what is particular to this study: its study.json (its plans, the messages that started them, its videos)
const study = JSON.parse(readFileSync(join(dir, "study.json"), "utf8"));
const PLANS = study.plans.map((p) => ({ ...p, match: new RegExp(p.match, "i") }));   // in the order the owner asked for them
const STARTS = study.starts;              // the owner's messages that started a plan, by their opening words
const APPROVES = study.approves ?? [];    // the owner's messages that approved a plan in chat
const END = study.end;                    // optional: the study ends with this message; by default it ends where the transcript does
const VIDEOS = {};                        // each plan's plan video and walkthrough, as the watch page names them
for (const v of study.videos) (VIDEOS[v.plan] ??= {})[v.sub === "video" ? "plan" : "walkthrough"] = v.slug;

const events = [];
const add = (e) => { events.push({ id: `${e.kind}-${e.at}`, words: null, plan: null, video: null, ledTo: null, small: false, ...e }); };
// the plan a commit is about: the one named first in its subject
const planOf = (text) => PLANS.map((p) => ({ p, i: text.search(p.match) })).filter((x) => x.i >= 0).sort((a, b) => a.i - b.i)[0]?.p.id ?? null;
const at = (iso) => new Date(iso).toISOString().slice(0, 16);   // UTC, to the minute

// --- 1. the owner's messages, from the transcript (one JSON event a line)
const lines = execFileSync("unzip", ["-p", join(dir, "transcript.zip"), "transcript.jsonl"], { maxBuffer: 1 << 30 }).toString("utf8").split("\n");
let ended = false;
lines.forEach((l, i) => {
  if (ended || !l.trim()) return;
  const e = JSON.parse(l);
  if (e.type !== "user" || e.isMeta || e.isSidechain) return;
  const c = e.message?.content;
  if (Array.isArray(c) && c.some((x) => x.type === "tool_result")) return;
  const text = (Array.isArray(c) ? c.filter((x) => x.type === "text").map((x) => x.text).join(" ") : c || "").trim();
  if (!text || /^<(system-reminder|task-notification|command-|local-command|bash-)/.test(text) || text.startsWith("This session is being continued")) return;
  const prev = events.filter((x) => x.kind === "asked").at(-1);
  const same = (a, b) => a.replace(/[?.!\s]+$/, "") === b.replace(/[?.!\s]+$/, "");
  if (prev && same(prev.words, text)) return;   // a message sent twice
  const starts = STARTS.find(([w]) => text.startsWith(w)), approves = APPROVES.find(([w]) => text.startsWith(w));
  add({ kind: "asked", at: at(e.timestamp), words: text, source: `transcript:${i + 1}`, plan: starts?.[1] ?? approves?.[1] ?? null,
        starts: !!starts, approves: !!approves, small: !starts && !approves && text.length < 80 });
  if (END && text.startsWith(END)) ended = true;
});

// --- 2. the reviews, from each plan's reviews/
for (const p of PLANS) {
  const rd = join(plansDir, p.id, "reviews");
  if (!existsSync(rd)) continue;
  for (const f of readdirSync(rd).filter((x) => x.endsWith(".json")).sort()) {
    const d = JSON.parse(readFileSync(join(rd, f), "utf8")); const r = d.review ?? d;
    const kind = f.startsWith("walkthrough") ? "walkthrough" : "plan";
    const comments = (r.annotations ?? []).filter((a) => a.comment && !/^Approved in chat/.test(a.comment))
      .map((a) => ({ scene: a.frame?.title ?? null, words: a.comment, t: typeof a.t === "number" ? +a.t.toFixed(1) : null }))
      .concat((r.decisions ?? []).filter((x) => x.note).map((x) => ({ scene: `Question ${x.id.slice(1)} · ${x.question ?? ""}`.trim(), words: x.note, t: typeof x.t === "number" ? +x.t.toFixed(1) : null })))
      .concat((r.quizzes ?? []).filter((x) => x.note).map((x) => ({ scene: `Quick check ${x.id.slice(1)}`, words: x.note })));
    const answers = (r.decisions ?? []).map((x) => ({ q: x.id, question: x.question ?? null, answer: x.own ? x.label : x.label, own: !!x.own }));
    const flags = (r.autonomy ?? []).filter((x) => x.verdict === "flag" || x.verdict === "own").map((x) => ({ call: x.id, verdict: x.verdict, words: x.own ?? null }));
    const inChat = !(r.watch?.durationSeconds);
    const t = f.match(/(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})Z/);   // the review's time, from its file name
    add({ kind: "review", at: at(`${t[1]}-${t[2]}-${t[3]}T${t[4]}:${t[5]}:${t[6]}Z`), plan: p.id, of: kind,
          verdict: d.verdict ?? r.verdict, comments, answers, flags, inChat,
          words: inChat ? null : comments[0]?.words ?? null,
          source: `project/${REC}/plans/${p.id}/reviews/${f}`,
          video: inChat ? null : VIDEOS[p.id][kind] });
  }
}

// --- 3. the project's commits
for (const row of readFileSync(join(dir, "commits.txt"), "utf8").split("\n").filter(Boolean)) {
  const [hash, iso, subject] = row.split("\t");
  const plan = planOf(subject);
  let kind = "build";
  if (/\bvideos?\b/i.test(subject) && !/approved/i.test(subject)) kind = "video";
  else if (/^plans?\b|^plan:/i.test(subject) && !/approved/i.test(subject)) kind = "plan";
  else if (/review|approved|fresh-eyes|code-check fixes|code checks/i.test(subject)) kind = "change";
  const vkind = /walkthrough/i.test(subject) ? "walkthrough" : "plan";
  const plans = PLANS.filter((p) => p.match.test(subject)).map((p) => p.id);
  // a commit that made two plans' videos is one event for each
  for (const pl of kind === "video" && plans.length > 1 ? plans : [plan])
    add({ kind, at: at(iso), plan: pl, plans, title: subject, source: `commit:${hash}`,
          video: kind === "video" && pl ? VIDEOS[pl]?.[vkind] ?? null : null });
}

// --- order, then what led to what: a plan's starting message → its plan; a review → the next commit of that plan
events.sort((a, b) => a.at.localeCompare(b.at) || ["asked", "review", "plan", "video", "build", "change"].indexOf(a.kind) - ["asked", "review", "plan", "video", "build", "change"].indexOf(b.kind));
for (const e of events) {
  const after = events.filter((x) => x.at >= e.at && x !== e);
  if (e.kind === "asked" && e.starts) e.ledTo = after.find((x) => x.kind === "plan" && (x.plans ?? [x.plan]).includes(e.plan))?.id ?? null;
  if (e.kind === "asked" && e.approves) e.ledTo = after.find((x) => x.kind === "review" && x.plan === e.plan)?.id ?? null;
  if (e.kind === "review" && e.verdict !== "approve") e.ledTo = after.find((x) => (x.kind === "change" || x.kind === "plan" || x.kind === "build") && x.plan === e.plan)?.id ?? null;
  if (e.kind === "review" && e.verdict === "approve" && e.comments.length) e.ledTo = after.find((x) => x.kind !== "asked" && x.kind !== "review" && x.plan === e.plan)?.id ?? null;
}
// a plan started by a comment on another plan's review (study.json "startedByReview")
const sb = study.startedByReview;
if (sb) {
  const planEv = events.find((x) => x.kind === "plan" && x.plan === sb.plan);
  const rev = events.find((x) => x.kind === "review" && x.plan === sb.review && x.comments.some((c) => c.words.includes(sb.comment)));
  if (planEv && rev) { rev.ledTo = planEv.id; rev.startsPlan = sb.plan; }
}
// ids unique
const seen = {};
for (const e of events) { seen[e.id] = (seen[e.id] ?? 0) + 1; if (seen[e.id] > 1) e.id += `-${seen[e.id]}`; }

const out = { study: dir, plans: PLANS.map(({ match, ...p }) => p), events };
writeFileSync(join(dir, "timeline.json"), JSON.stringify(out, null, 1) + "\n");
const n = (k) => events.filter((e) => e.kind === k).length;
console.log(`✓ ${events.length} events: ${n("asked")} asked, ${n("plan")} plans, ${n("video")} videos, ${n("review")} reviews, ${n("build")} builds, ${n("change")} changes → ${join(dir, "timeline.json")}`);
