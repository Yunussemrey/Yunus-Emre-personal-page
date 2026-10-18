/* İsteklerin yükleniyor durumunda takılmasını engeller. Kimlik bilgisi taşımaz. */
window.fetchSiteJSON = function (url) {
  var controller = new AbortController();
  var timer = setTimeout(function () { controller.abort(); }, 8000);
  return fetch(url, { signal: controller.signal, credentials: "omit" })
    .then(function (response) {
      if (!response.ok) throw new Error("HTTP " + response.status);
      return response.json();
    }).finally(function () { clearTimeout(timer); });
};
