/* Yalnızca GitHub'ın herkese açık profil verileri; token gerekmez. */
(function () {
  var cfg = window.SITE;
  var status = document.getElementById("githubStatus");
  var stats = document.getElementById("githubStats");
  if (!cfg || !status || !stats) return;
  window.fetchSiteJSON("https://api.github.com/users/" + encodeURIComponent(cfg.githubUser))
    .then(function (profile) {
      if (!Number.isInteger(profile.public_repos) || !Number.isInteger(profile.followers)) throw new Error("Invalid profile");
      [[profile.public_repos, "açık depo"], [profile.followers, "takipçi"]].forEach(function (item) {
        var span = document.createElement("span");
        var count = document.createElement("strong");
        count.textContent = String(item[0]);
        span.appendChild(count);
        span.appendChild(document.createTextNode(item[1]));
        stats.appendChild(span);
      });
      stats.hidden = false;
      status.dataset.state = "live";
      status.textContent = "● GitHub’dan güncellendi";
    })
    .catch(function () {
      stats.hidden = true;
      status.dataset.state = "fallback";
      status.textContent = "Canlı veriye ulaşılamadı. Profilimi GitHub’da inceleyebilirsin.";
    });
})();
