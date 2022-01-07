function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}
createDaysOfTheWeek();

// Escreva seu código abaixo.
// Dias do Mês
const dias = document.querySelector("#days");
function diasCalendario() {
  const dezDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  for (let i in dezDaysList) {
    const criaLi = document.createElement("li");
    if (dezDaysList[i] === 24 || dezDaysList[i] === 31) {
      criaLi.className = "day holiday";
      criaLi.innerText = dezDaysList[i];
      dias.appendChild(criaLi);
    } else if (
      dezDaysList[i] === 4 ||
      dezDaysList[i] === 11 ||
      dezDaysList[i] === 18
    ) {
      criaLi.className = "day friday";
      criaLi.innerText = dezDaysList[i];
      dias.appendChild(criaLi);
    } else if (dezDaysList[i] === 25) {
      criaLi.className = "day holiday friday";
      criaLi.innerText = dezDaysList[i];
      dias.appendChild(criaLi);
    } else {
      criaLi.className = "day";
      criaLi.innerText = dezDaysList[i];
      dias.appendChild(criaLi);
    }
  }
}
diasCalendario();

// Botao
const pai = document.querySelector(".buttons-container");
function criarBotao(string, idParametro) {
  const botao = document.createElement("button");
  botao.innerHTML = string;
  botao.id = idParametro;
  pai.appendChild(botao);
}
criarBotao("Feriados", "btn-holiday");
criarBotao("Sexta-feira", "btn-friday");

// Evento clique botao e seleciona feriados
const corDeFundo = "rgb(238,238,238)";
const novaCor = "yellow";
const feriadosLi = document.querySelectorAll(".holiday");
let botaoFeriado = document.querySelector("#btn-holiday");
botaoFeriado.addEventListener("click", function () {
  for (let i = 0; i < feriadosLi.length; i += 1) {
    if (feriadosLi[i].style.backgroundColor === novaCor) {
      feriadosLi[i].style.backgroundColor = corDeFundo;
    } else {
      feriadosLi[i].style.backgroundColor = novaCor;
    }
  }
});
// Evento clique botao e seleciona sextas-feiras
const botaoSexta = document.querySelector("#btn-friday");
const todasSextas = document.querySelectorAll(".friday");
botaoSexta.addEventListener("click", function () {
  for (let index = 0; index < todasSextas.length; index += 1) {
    if (todasSextas[index].style.backgroundColor === novaCor) {
      todasSextas[index].style.backgroundColor = corDeFundo;
    } else {
      todasSextas[index].style.backgroundColor = novaCor;
    }
  }
});

// 6.Evento mouseover / mouseout
const diasMes = document.querySelectorAll(".day");
function zoom(event) {
  event.target.style.fontSize = "30px";
}
function zoom2(event) {
  event.target.style.fontSize = "20px";
}
for (let j = 0; j < diasMes.length; j += 1) {
  diasMes[j].addEventListener("mouseover", zoom);
  diasMes[j].addEventListener("mouseout", zoom2);
}
// 7. Crição de tarefa na agenda com a tag span, filha de uma div
let tarefa = document.createElement("span");
let paiTarefa = document.querySelector(".my-tasks");
function addTarefa(estudar) {
  paiTarefa.appendChild(tarefa);
  tarefa.innerText = estudar;
}
addTarefa("Estudar lógica de programação");

let legenda = document.createElement("div");
legenda.className = "task";
