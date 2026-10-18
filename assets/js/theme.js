(function () {
  var root = document.documentElement;
  var btn = document.getElementById("themeBtn");
  if (!btn) return;
  btn.setAttribute("aria-pressed", String(root.getAttribute("data-theme") === "dark"));
  btn.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    btn.setAttribute("aria-pressed", String(next === "dark"));
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
})();
