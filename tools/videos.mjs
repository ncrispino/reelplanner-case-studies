#!/usr/bin/env node
// The watch page's list of videos (plan 2026-10-08-case-study-page, step 2): for each video, its title, plan, length,
// chapters and questions with their times, and what the owner answered at each, from the video's own STORYBOARD.md and
// assembled timeline (index.html) and the plan's reviews.
//
//   node tools/videos.mjs bob-dylan-site     # reads its study.json; writes docs/<slug>/watch/videos.json
import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const [dir] = process.argv.slice(2);
if (!dir) { console.error("usage: node tools/videos.mjs <study-folder>"); process.exit(2); }
const study = JSON.parse(readFileSync(join(dir, "study.json"), "utf8"));
const out = join(dirname(fileURLToPath(import.meta.url)), "..", "docs", study.slug, "watch");
// the project's record folder: .reelplanner/, or .reelplanning/ in a study made before the tool's rename
const REC = existsSync(join(dir, "project/.reelplanner")) ? ".reelplanner" : ".reelplanning";
const plans = join(dir, "project", REC, "plans");
const planTitle = Object.fromEntries(study.plans.map((p) => [p.id, p.title]));
const LIST = study.videos.map((v) => [v.slug, v.plan, v.sub, planTitle[v.plan]]);
const mmss = (t) => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, "0")}`;

const videos = LIST.map(([slug, plan, sub, planTitle]) => {
  const v = join(plans, plan, sub);
  const idx = readFileSync(join(v, "index.html"), "utf8");
  // each scene's start and length in the assembled video
  const scenes = [...idx.matchAll(/<div[^>]*?data-composition-src="compositions\/frames\/([^"]+)\.html"[^>]*>/g)].map((m) => {
    const tag = m[0];
    return { src: m[1], start: +(tag.match(/data-start="([\d.]+)"/)?.[1] ?? 0), dur: +(tag.match(/data-duration="([\d.]+)"/)?.[1] ?? 0) };
  });
  const length = Math.max(...scenes.map((s) => s.start + s.dur));
  // the storyboard's frames, in order: their chapters and questions
  const sb = readFileSync(join(v, "STORYBOARD.md"), "utf8");
  const frames = sb.split(/\n(?=## Frame \d+)/).filter((b) => b.startsWith("## Frame")).map((b) => {
    const tag = (k) => b.match(new RegExp(`^- ${k}: (.*)$`, "m"))?.[1]?.trim() ?? null;
    return { n: +b.match(/## Frame (\d+)/)[1], title: b.match(/## Frame \d+ — (.*)/)?.[1] ?? "", chapter: tag("chapter_start"),
             decision: tag("decision"), question: tag("question"), src: (tag("src") || "").replace(/^compositions\/frames\/|\.html$/g, "") };
  });
  const at = (f) => scenes.find((s) => s.src === f.src)?.start ?? scenes[f.n - 1]?.start ?? 0;
  // what the owner answered: the latest review of this kind with that question
  const kind = sub === "video" ? "plan" : "walkthrough";
  const rd = join(plans, plan, "reviews");
  const reviews = existsSync(rd) ? readdirSync(rd).filter((f) => f.startsWith(kind) && f.endsWith(".json")).sort().map((f) => JSON.parse(readFileSync(join(rd, f), "utf8"))) : [];
  const answerOf = (id, question) => {
    for (const d of reviews.slice().reverse()) {
      const x = ((d.review ?? d).decisions ?? []).find((y) => y.id === id && (!question || !y.question || y.question === question));
      if (x) return { answer: x.label, own: !!x.own };
    }
    return null;
  };
  // chapters: the storyboard's; a walkthrough, which has one or two, also gets one per step it stops on
  let chapters = frames.filter((f) => f.chapter).map((f) => ({ t: +at(f).toFixed(2), title: f.chapter }));
  if (chapters.length < 3) chapters = frames.filter((f) => f.chapter || /^(Step \d|Off-plan|Question|What ran|The rest|The gaps)/i.test(f.title))
    .map((f) => ({ t: +at(f).toFixed(2), title: f.chapter && !/^Step/.test(f.title) ? f.chapter : f.title.replace(/\s+·\s+/, " · ") }))
    .filter((c, i, all) => i === 0 || c.title.split(" · ")[0] !== all[i - 1].title.split(" · ")[0] || /Question|Off-plan/.test(c.title));
  const questions = frames.filter((f) => f.decision).map((f) => ({ t: +at(f).toFixed(2), id: f.decision, question: f.question, ...answerOf(f.decision, f.question) }));
  const title = `${sub === "video" ? "Plan video" : "Walkthrough"} · ${planTitle}`;
  return { slug, plan, kind, title, planTitle, scenes: scenes.length, length: +length.toFixed(2), lengthLabel: mmss(length), src: `../review/${plan}${sub === "video" ? "" : "--walkthrough"}/index.html`, chapters, questions };
});
mkdirSync(out, { recursive: true });
writeFileSync(join(out, "videos.json"), JSON.stringify({ videos }, null, 1) + "\n");
for (const v of videos) console.log(`✓ ${v.slug}: ${v.scenes} scenes, ${v.lengthLabel}, ${v.chapters.length} chapters, ${v.questions.length} questions (${v.questions.filter((q) => q.answer).length} answered)`);
