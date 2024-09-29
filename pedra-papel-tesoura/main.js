// Declarações
var jogadas = ["Tesoura", "Pedra", "Papel", "Tesoura", "Pedra"];
var vitoria = 0;
var derrota = 0;
var emapte = 0;
var resulJogo = document.getElementById("resultado");
var statusElement = document.getElementById("status");
var pedraButton = document.getElementById("pedra");
var papelButton = document.getElementById("papel");
var tesouraButton = document.getElementById("tesoura");
var maoRight = document.getElementById("mao-right");
var maoLeft = document.getElementById("mao-left");
var monitor1 = document.getElementById("monitor1");
var monitor2 = document.getElementById("monitor2");
// Algoritmo
pedraButton.addEventListener("click", function () {
  shake(1);
});
papelButton.addEventListener("click", function () {
  shake(2);
});
tesouraButton.addEventListener("click", function () {
  shake(3);
});

function shake(escolha) {
  maoRight.classList.add("shake");
  maoLeft.classList.add("shake");
  setTimeout(() => {
    jogar(escolha);
    maoRight.classList.remove("shake");
    maoLeft.classList.remove("shake");
  }, 1000);
}

function jogar(escolha) {
  var compMove = Math.floor(Math.random() * 3 + 1); // 1, 2, 3

  monitor2.classList.remove("monitor2-fala");
  monitor1.classList.remove("monitor1-fala");

  maoRight.classList.remove("mao-pedra-right");
  maoRight.classList.remove("mao-papel-right");
  maoRight.classList.remove("mao-tesoura-right");

  maoLeft.classList.remove("mao-pedra-left");
  maoLeft.classList.remove("mao-papel-left");
  maoLeft.classList.remove("mao-tesoura-left");

  maoRight.classList.add(`mao-${jogadas[escolha].toLowerCase()}-right`);
  maoLeft.classList.add(`mao-${jogadas[compMove].toLowerCase()}-left`);

  if (jogadas[escolha + 1] === jogadas[compMove]) {
    derrota++;
    monitor2.classList.add("monitor2-fala");
  } else if (jogadas[escolha - 1] === jogadas[compMove]) {
    vitoria++;
    monitor1.classList.add("monitor1-fala");
  } else {
    emapte++;
  }
  var resultado = `${jogadas[escolha]} X ${jogadas[compMove]}`;

  resulJogo.textContent = resultado;
  var status = "Vit\u00F3rias = "
    .concat(vitoria, " Derrotas = ")
    .concat(derrota, " Empates = ")
    .concat(emapte);
  statusElement.textContent = status;
}
