let adivinha: string;
let resultado: string;

function calculaMovimento(): void {
  const compMovimento: number = Math.random();

  if (compMovimento <= 1 / 2) {
    adivinha = "Cara";
  } else {
    adivinha = "Coroa";
  }
}

function jogar(escolha: string) {
  calculaMovimento();

  if (adivinha === "Cara") {
    if (escolha === "Cara") {
      resultado = "Voce ganhou";
    } else if (escolha === "Coroa") {
      resultado === "Você perdeu";
    }
  } else if (adivinha === "Coroa") {
    if (escolha === "Coroa") {
      resultado = "Você ganhou";
    } else if (escolha === "Cara") {
      resultado = "Você perdeu";
    }
  }

  window.alert(
    `O computador escolheu ${adivinha} e você escolheu ${escolha}. ${resultado}`
  );
}

jogar(
  window.prompt(
    "Cara ou Coroa?\n Adivinhe o resultado!",
    "Cara ou Coroa"
  ) as string
);
