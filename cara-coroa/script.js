var adivinha;
var resultado;
function calculaMovimento() {
    var compMovimento = Math.random();
    if (compMovimento <= 1 / 2) {
        adivinha = "Cara";
    }
    else {
        adivinha = "Coroa";
    }
}
function jogar(escolha) {
    calculaMovimento();
    if (adivinha === "Cara") {
        if (escolha === "Cara") {
            resultado = "Voce ganhou";
        }
        else if (escolha === "Coroa") {
            resultado === "Você perdeu";
        }
    }
    else if (adivinha === "Coroa") {
        if (escolha === "Coroa") {
            resultado = "Você ganhou";
        }
        else if (escolha === "Cara") {
            resultado = "Você perdeu";
        }
    }
    window.alert("O computador escolheu ".concat(adivinha, " e voc\u00EA escolheu ").concat(escolha, ". ").concat(resultado));
}
jogar(window.prompt("Cara ou Coroa?\n Adivinhe o resultado!", "Cara ou Coroa"));
