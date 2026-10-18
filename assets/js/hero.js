/* Fotoğrafta hafif fare hareketi; azaltılmış hareket tercihine saygı duyar. */
(function () {
  var portrait = document.getElementById("portrait");
  var motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var pointer = window.matchMedia("(pointer: fine)");
  if (!portrait) return;
  function reset() {
    portrait.style.removeProperty("--portrait-x");
    portrait.style.removeProperty("--portrait-y");
  }
  portrait.addEventListener("pointermove", function (event) {
    if (motion.matches || !pointer.matches) return;
    var box = portrait.getBoundingClientRect();
    portrait.style.setProperty("--portrait-x", ((event.clientX - box.left) / box.width - .5) * 10 + "px");
    portrait.style.setProperty("--portrait-y", ((event.clientY - box.top) / box.height - .5) * 8 + "px");
  });
  portrait.addEventListener("pointerleave", reset);
  motion.addEventListener("change", reset);
})();
