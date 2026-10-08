// Title matching for album tracks, shared by tools/add-tracks.mjs and the data check.
export const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[’'"]/g, "")
  .replace(/&/g, "and").replace(/[^a-z0-9]+/g, " ").trim();
// looser: slashes as spaces, anything in brackets dropped, 4th as fourth (MusicBrainz and the dataset spell some
// titles differently: "Crash on the Levee (Down in the Flood)", "4th Time Around")
export const loose = (s) => norm(s.replace(/\//g, " ").replace(/\([^)]*\)/g, "")).replace(/\b4th\b/g, "fourth");
// "Like a Rolling Stone (live)" → "Like a Rolling Stone"; null when the title is not marked live
export const liveBase = (s) => { const m = s.match(/^(.*?)\s*\((?:[^)]*\b)?live\b[^)]*\)\s*$/i); return m ? m[1] : null; };
// "Billy 4" → "billy", "Alberta #2" → "alberta"; null when the title does not end in a take number
export const takeBase = (s) => { const m = s.match(/^(.*?\S)\s+#?(\d{1,2})$/); return m && !/[&#]/.test(m[1]) ? norm(m[1]) : null; };
