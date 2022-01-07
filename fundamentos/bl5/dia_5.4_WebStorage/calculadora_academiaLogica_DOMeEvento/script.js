let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let addButton = document.querySelector(".btn:nth-of-type(1)");
let subButton = document.querySelector(".btn:nth-of-type(2)");
let divButton = document.querySelector(".btn:nth-of-type(3)");
let multButton = document.querySelector(".btn:nth-of-type(4)");
let resultado = document.getElementById("pResultado");
let buttons = document.querySelectorAll(".btn");

addButton.addEventListener("click", function () {
  let resultSoma = parseInt(input1.value) + parseInt(input2.value);
  resultado.innerText = ""; // limpar o p
  resultado.innerText = resultSoma; // Coloco o novo resultado que é o da soma
});

subButton.addEventListener("click", function () {
  let resultSub = parseInt(input1.value) - parseInt(input2.value);
  resultado.innerText = ""; // limpar o p
  resultado.innerText = resultSub; // Coloco o novo resultado que é o da sub
});

function changeColor(event) {
  event.target.style.backgroundColor = "red";
}

for (index = 0; index < buttons.length; index += 1) {
  buttons[index].addEventListener("mouseover", changeColor);
}
