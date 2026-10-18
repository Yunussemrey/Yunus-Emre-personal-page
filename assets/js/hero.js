/* Hero: plakayı "okutma" animasyonu. Rastgele karakterler soldan sağa gerçek plakaya dönüşür. */
(function () {
  var plate = document.getElementById("plate");
  var chars = document.getElementById("plateChars");
  var readout = document.getElementById("readout");
  if (!plate || !chars) return;

  var TARGET = "34 YE 001";
  var POOL = "ABCDEFGHJKLMNPRSTUVYZ0123456789";
  var DONE_TEXT = "Plaka okundu: Yunus Emre, yazılım ve bilgi işlem.";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var running = false;

  function rand() { return POOL.charAt(Math.floor(Math.random() * POOL.length)); }

  function scan() {
    if (running) return;
    if (reduce) { chars.textContent = TARGET; readout.textContent = DONE_TEXT; return; }
    running = true;
    readout.textContent = "Plaka okunuyor…";
    plate.classList.remove("is-scanning");
    void plate.offsetWidth; // animasyonu yeniden başlat
    plate.classList.add("is-scanning");

    var duration = 1300, start = performance.now();
    (function frame(now) {
      var p = Math.min((now - start) / duration, 1);
      var resolved = Math.floor(p * TARGET.length);
      var out = "";
      for (var i = 0; i < TARGET.length; i++) {
        var c = TARGET.charAt(i);
        out += (c === " " || i < resolved) ? c : rand();
      }
      chars.textContent = out;
      if (p < 1) { requestAnimationFrame(frame); }
      else {
        chars.textContent = TARGET;
        readout.textContent = DONE_TEXT;
        plate.classList.remove("is-scanning");
        running = false;
      }
    })(start);
  }

  plate.addEventListener("click", scan);
  window.addEventListener("load", function () { setTimeout(scan, 350); });
})();
