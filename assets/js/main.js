(function () {
  // Yıl
  var y = document.getElementById("year"); if (y) y.textContent = new Date().getFullYear();

  // Mobil menü
  var menuBtn = document.getElementById("menuBtn"), nav = document.getElementById("nav");
  menuBtn.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") { nav.classList.remove("is-open"); menuBtn.setAttribute("aria-expanded", "false"); }
  });

  // Hangi bölümdeysek menüde işaretle
  var links = {};
  Array.prototype.forEach.call(nav.querySelectorAll("a"), function (a) { links[a.getAttribute("href").slice(1)] = a; });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      Object.keys(links).forEach(function (k) { links[k].classList.toggle("is-active", k === en.target.id); });
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  Object.keys(links).forEach(function (id) { var s = document.getElementById(id); if (s) io.observe(s); });

  // CV dosyası yoksa butonu gizle
  var cv = document.getElementById("cvBtn");
  if (cv && location.protocol.indexOf("http") === 0) {
    fetch(cv.getAttribute("href"), { method: "HEAD" }).then(function (r) { cv.hidden = !r.ok; }).catch(function () { cv.hidden = true; });
  }
})();
