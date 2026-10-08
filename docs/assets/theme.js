// The light/dark toggle for the case-study pages: the viewer's choice is kept in localStorage and set as data-theme on
// <html> before the page paints; with no choice the system's setting rules. The button shows what a press switches to.
(function () {
  var KEY = "rp-case-study-theme", root = document.documentElement;
  var stored = null; try { stored = localStorage.getItem(KEY); } catch (e) {}
  if (stored === "light" || stored === "dark") root.setAttribute("data-theme", stored);
  var dark = function () { var t = root.getAttribute("data-theme"); return t ? t === "dark" : matchMedia("(prefers-color-scheme: dark)").matches; };
  var label = function (b) { var d = dark(); b.textContent = d ? "☀" : "☾"; b.setAttribute("aria-label", d ? "Switch to light" : "Switch to dark"); b.title = b.getAttribute("aria-label"); };
  document.addEventListener("DOMContentLoaded", function () {
    var b = document.querySelector(".theme"); if (!b) return; label(b);
    b.addEventListener("click", function () { var next = dark() ? "light" : "dark"; root.setAttribute("data-theme", next); try { localStorage.setItem(KEY, next); } catch (e) {} label(b); });
  });
})();
