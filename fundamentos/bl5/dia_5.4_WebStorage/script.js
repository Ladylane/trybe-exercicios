window.onload = function () {
  let selectCoresBg = document.getElementById("coresBg");
  let corpo = document.querySelector("body");
  selectCoresBg.addEventListener("change", function () {
    corpo.style.backgroundColor = selectCoresBg.value;
    localStorage.setItem("background", selectCoresBg.value);
  });

  let selectCoresFonte = document.getElementById("corFonte");
  let paragrafo = document.querySelector("p");
  selectCoresFonte.addEventListener("change", function () {
    paragrafo.style.color = selectCoresFonte.value;
    localStorage.setItem("fonte", selectCoresFonte.value);
  });

  let selectTamanhoFonte = document.querySelector("#tamanhoFonte");
  selectTamanhoFonte.addEventListener("change", function () {
    paragrafo.style.fontSize = selectTamanhoFonte.value;
    localStorage.setItem("tamanho da fonte", selectTamanhoFonte.value);
  });

  let espacoLinhas = document.querySelector("#espacoEntreLinhas");
  espacoLinhas.addEventListener("change", function () {
    paragrafo.style.lineHeight = espacoLinhas.value;
    localStorage.setItem("espaco entre linhas", espacoLinhas.value);
  });

  let fonte = document.querySelector("#tipoDaFonte");
  fonte.addEventListener("change", function () {
    paragrafo.style.fontFamily = fonte.value;
    localStorage.setItem("tipo da fonte", fonte.value);
  });

  // Local Storage
  let salvarPlanoDeFundo = localStorage.getItem("background");
  let salvarCorFonte = localStorage.getItem("fonte");
  let salvarTamanhoFonte = localStorage.getItem("tamanho da fonte");
  let espacoEntreLinhas = localStorage.getItem("espaco entre linhas");
  let tipoDaFonte = localStorage.getItem("tipo da fonte");

  corpo.style.backgroundColor = salvarPlanoDeFundo;
  paragrafo.style.color = salvarCorFonte;
  paragrafo.style.fontSize = salvarTamanhoFonte;
  paragrafo.style.lineHeight = espacoEntreLinhas;
  paragrafo.style.fontFamily = tipoDaFonte;
};
