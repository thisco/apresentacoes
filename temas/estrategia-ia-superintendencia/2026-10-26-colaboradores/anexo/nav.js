// Anexo: a versão detalhada (v0.1). Navegação comum às cinco pranchas do anexo. Cada página declara <nav id="nav" data-atual="NN">.
(function () {
  var pranchas = [
    ["00", "index.html", "Conceito"],
    ["01", "papeis.html", "Papéis"],
    ["02", "coding.html", "Coding"],
    ["03", "deploy.html", "Deploy"],
    ["04", "governance.html", "Governance"]
  ];
  var nav = document.getElementById("nav");
  if (!nav) return;
  var atual = nav.getAttribute("data-atual");
  nav.className = "nav";
  nav.setAttribute("aria-label", "Pranchas");
  var html = pranchas.map(function (p) {
    var cur = p[0] === atual ? ' aria-current="page"' : "";
    return '<a href="' + p[1] + '"' + cur + "><b>" + p[0] + "</b> " + p[2] + "</a>";
  }).join("");
  nav.innerHTML = html + '<a class="origem" href="../index.html">Anexo detalhado · voltar à versão executiva</a>';
  // setas do teclado passam de prancha
  var i = pranchas.findIndex(function (p) { return p[0] === atual; });
  document.addEventListener("keydown", function (e) {
    if (e.target.closest && e.target.closest("input,textarea,[contenteditable]")) return;
    if (e.key === "ArrowRight" && i < pranchas.length - 1) location.href = pranchas[i + 1][1];
    if (e.key === "ArrowLeft" && i > 0) location.href = pranchas[i - 1][1];
  });
})();
