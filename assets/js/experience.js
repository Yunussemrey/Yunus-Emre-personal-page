/* Kayıtlı CV verisi veya kullanıcının yetkili senkronizasyon servisinin JSON çıktısı. */
(function () {
  var cfg = window.SITE;
  var list = document.getElementById("experienceList");
  var status = document.getElementById("experienceStatus");
  if (!cfg || !list || !status) return;
  function node(tag, className, text) {
    var element = document.createElement(tag);
    if (className) element.className = className;
    if (text) element.textContent = text;
    return element;
  }
  window.fetchSiteJSON(cfg.experienceFeed || "assets/data/experience.json")
    .then(function (data) {
      if (!data || !Array.isArray(data.positions) || !data.positions.length) throw new Error("Empty experience");
      var fragment = document.createDocumentFragment();
      data.positions.forEach(function (position) {
        if (typeof position.company !== "string" || !position.company.trim() || typeof position.role !== "string" || !position.role.trim()) throw new Error("Invalid experience");
        var item = node("li");
        item.appendChild(node("div", "timeline__when", typeof position.period === "string" ? position.period : ""));
        var body = node("div", "timeline__body");
        body.appendChild(node("h3", "", position.company));
        body.appendChild(node("p", "role", position.role));
        if (Array.isArray(position.details)) {
          var details = node("ul");
          position.details.filter(function (detail) { return typeof detail === "string"; }).forEach(function (detail) {
            details.appendChild(node("li", "", detail));
          });
          body.appendChild(details);
        }
        item.appendChild(body);
        fragment.appendChild(item);
      });
      list.replaceChildren(fragment);
      status.textContent = cfg.experienceFeedMode === "synced" ? "Deneyim kaynağından güncellendi" : "Kayıtlı CV bilgileri · LinkedIn profilim yukarıda";
    })
    .catch(function () {
      status.textContent = "Kayıtlı deneyim gösteriliyor. Güncel bilgiler için LinkedIn profilim.";
    });
})();
