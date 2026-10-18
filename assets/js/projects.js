/* GitHub projelerini API'den çeker, dile göre filtreler. API çalışmazsa config.js'teki liste gösterilir. */
(function () {
  var cfg = window.SITE;
  var list = document.getElementById("repos");
  var filters = document.getElementById("filters");
  var moreBtn = document.getElementById("moreBtn");
  if (!cfg || !list) return;

  var COLORS = { Java: "#b07219", Kotlin: "#A97BFF", JavaScript: "#f1e05a", HTML: "#e34c26", CSS: "#563d7c", Dart: "#00B4AB", Python: "#3572A5", "C#": "#178600", PHP: "#4F5D95" };
  var repos = [], activeLang = "Tümü", expanded = false;

  function title(name) { return name.replace(/[-_]+/g, " ").replace(/\s+$/, "").replace(/([a-zçğıöşü])([A-Z])/g, "$1 $2"); }
  function el(tag, cls, text) { var n = document.createElement(tag); if (cls) n.className = cls; if (text) n.textContent = text; return n; }

  function normalize(r) {
    var fb = cfg.fallback[r.name] || {};
    return {
      name: r.name,
      url: r.html_url || ("https://github.com/" + cfg.githubUser + "/" + r.name),
      desc: r.description || fb.desc || "",
      lang: r.language || fb.lang || "",
      stars: r.stargazers_count || 0,
      pushed: r.pushed_at ? new Date(r.pushed_at).getFullYear() : null,
      pinnedIndex: cfg.pinned.indexOf(r.name)
    };
  }

  function sortRepos(a, b) {
    var ap = a.pinnedIndex > -1, bp = b.pinnedIndex > -1;
    if (ap && bp) return a.pinnedIndex - b.pinnedIndex;
    if (ap) return -1;
    if (bp) return 1;
    return (b.pushed || 0) - (a.pushed || 0) || b.stars - a.stars;
  }

  function render() {
    var shown = repos.filter(function (r) { return activeLang === "Tümü" || r.lang === activeLang; });
    var limit = expanded || activeLang !== "Tümü" ? shown.length : cfg.visibleCount;
    list.innerHTML = "";
    if (!shown.length) { list.appendChild(el("li", "repos__state", "Bu dilde gösterilecek proje yok.")); }

    shown.slice(0, limit).forEach(function (r) {
      var li = el("li");
      var a = el("a", "repo" + (r.pinnedIndex > -1 ? " is-pinned" : ""));
      a.href = r.url; a.target = "_blank"; a.rel = "noopener";
      a.appendChild(el("span", "repo__name", title(r.name)));
      if (r.desc) a.appendChild(el("p", "repo__desc", r.desc));
      var meta = el("span", "repo__meta");
      if (r.lang) {
        var l = el("span", "lang"); var dot = el("i"); dot.style.setProperty("--c", COLORS[r.lang] || "");
        l.appendChild(dot); l.appendChild(document.createTextNode(r.lang)); meta.appendChild(l);
      }
      if (r.pushed) meta.appendChild(el("span", "", "Son güncelleme " + r.pushed));
      if (r.stars) meta.appendChild(el("span", "", r.stars + " yıldız"));
      a.appendChild(meta); li.appendChild(a); list.appendChild(li);
    });

    moreBtn.hidden = activeLang !== "Tümü" || shown.length <= cfg.visibleCount;
    moreBtn.textContent = expanded ? "Daha az göster" : "Hepsini göster (" + shown.length + ")";
  }

  function buildFilters() {
    var langs = ["Tümü"];
    repos.forEach(function (r) { if (r.lang && langs.indexOf(r.lang) < 0) langs.push(r.lang); });
    filters.innerHTML = "";
    langs.forEach(function (lang) {
      var b = el("button", "", lang); b.type = "button";
      b.setAttribute("aria-pressed", String(lang === activeLang));
      b.addEventListener("click", function () {
        activeLang = lang;
        Array.prototype.forEach.call(filters.children, function (c) { c.setAttribute("aria-pressed", String(c === b)); });
        render();
      });
      filters.appendChild(b);
    });
  }

  function useFallback() {
    repos = cfg.pinned.map(function (n) { return normalize({ name: n }); });
    buildFilters(); render();
  }

  moreBtn.addEventListener("click", function () { expanded = !expanded; render(); });

  fetch("https://api.github.com/users/" + cfg.githubUser + "/repos?per_page=100&sort=pushed")
    .then(function (res) { if (!res.ok) throw new Error(res.status); return res.json(); })
    .then(function (data) {
      repos = data.filter(function (r) { return !r.fork; }).map(normalize).sort(sortRepos);
      if (!repos.length) return useFallback();
      buildFilters(); render();
    })
    .catch(useFallback);
})();
