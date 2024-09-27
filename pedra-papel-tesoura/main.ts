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

// Algoritmo

pedraButton.addEventListener("click", () => {
  jogar(1);
});

papelButton.addEventListener("click", () => {
  jogar(2);
});

tesouraButton.addEventListener("click", () => {
  jogar(3);
});

function jogar(escolha) {
  const compMove = Math.floor(Math.random() * 3 + 1); // 1, 2, 3

  if (jogadas[escolha + 1] === jogadas[compMove]) {
    derrota++;
  } else if (jogadas[escolha - 1] === jogadas[compMove]) {
    vitoria++;
  } else {
    emapte++;
  }

  const resultado = `Seu Movimento = ${jogadas[escolha]} | ${jogadas[compMove]} = Movimento Computador`;

  resulJogo.textContent = resultado;

  const status = `Vitórias = ${vitoria} Derrotas = ${derrota} Empates = ${emapte}`;
  statusElement.textContent = status;
}
