function descricao(elemento) {
  document.getElementsByTagName(elemento)[1].innerText = "Aprendizado na Trybe";
}
descricao("p");

function alterarCor(cor) {
  document.getElementsByClassName(cor)[0].style.backgroundColor =
    "rgb(76,164,109";
}
alterarCor("main-content");

function alterarCorCentro(corCentro) {
  document.getElementsByClassName(corCentro)[0].style.backgroundColor = "white";
}
alterarCorCentro("center-content");

function arrumaTitulo(titulo) {
  document.getElementsByClassName(titulo)[0].innerText =
    "Exercício 5.1 - Java Script";
}
arrumaTitulo("title");

function colocarEmMaiusculo(paragrafo) {
  const recebe = document.getElementsByTagName(paragrafo);
  for (let i = 0; i < recebe.length; i += 1) {
    recebe[i].style.textTransform = "uppercase";
  }
}
colocarEmMaiusculo("p");

function apresentar(conteudo) {
  let cont = document.getElementsByTagName(conteudo);
  for (let i = 0; i < cont.length; i += 1) {
    console.log(cont[i]);
  }
}
apresentar("p");
console.log(document.getElementsByTagName("p")[0]);
console.log(document.getElementsByTagName("p")[1]);
console.log(document.getElementsByTagName("p")[2]);
