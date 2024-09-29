// Declarações

const jogadas = ["Tesoura", "Pedra", "Papel", "Tesoura", "Pedra"];

let vitoria: number = 0;
let derrota: number = 0;
let emapte: number = 0;

const resulJogo = document.getElementById("resultado") as HTMLElement;
const statusElement = document.getElementById("status") as HTMLElement;

const pedraButton = document.getElementById("pedra") as HTMLElement;
const papelButton = document.getElementById("papel") as HTMLElement;
const tesouraButton = document.getElementById("tesoura") as HTMLElement;
const maoRight = document.getElementById("mao-right") as HTMLElement;
const maoLeft = document.getElementById("mao-left") as HTMLElement;
const monitor1 = document.getElementById("monitor1") as HTMLElement;
const monitor2 = document.getElementById("monitor2") as HTMLElement;

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
  const compMove = Math.floor(Math.random() * 3 + 1); // 1, 2, 3

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

  const resultado = `${jogadas[escolha]} X ${jogadas[compMove]}`;

  resulJogo.textContent = resultado;

  const status = `Vitórias = ${vitoria} Derrotas = ${derrota} Empates = ${emapte}`;
  statusElement.textContent = status;
}
