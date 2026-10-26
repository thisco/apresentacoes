// Abas das nove pranchas executivas. Cada página declara <nav id="abas" data-atual="N">.
(function () {
  var pranchas = [
    ["index.html", "Contexto"],
    ["iniciativas.html", "Iniciativas das áreas"],
    ["pilares.html", "Pilares"],
    ["papeis.html", "Quem faz"],
    ["coding.html", "Desenvolvimento"],
    ["deploy.html", "Deploy"],
    ["governance.html", "Governança"],
    ["conhecimento.html", "Base de conhecimento"],
    ["produto.html", "Produto Plataforma Multinuvem"]
  ];
  var nav = document.getElementById("abas");
  if (!nav) return;
  var atual = +nav.getAttribute("data-atual");
  nav.className = "abas";
  nav.setAttribute("aria-label", "Pranchas");
  nav.innerHTML = pranchas.map(function (p, i) {
    return '<a href="' + p[0] + '"' + (i === atual ? ' aria-current="page"' : "") + ">" + p[1] + "</a>";
  }).join("") + '<a class="anexo" href="anexo/index.html">Material detalhado</a>';
  document.addEventListener("keydown", function (e) {
    if (e.target.closest && e.target.closest("input,textarea,[contenteditable]")) return;
    if (e.key === "ArrowRight" && atual < pranchas.length - 1) location.href = pranchas[atual + 1][0];
    if (e.key === "ArrowLeft" && atual > 0) location.href = pranchas[atual - 1][0];
  });
})();
