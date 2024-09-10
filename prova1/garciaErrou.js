function contarLetras(texto, letra) {
    var contagem = 0;
    for (var i = 0; i < texto.length; i++) {
        if (texto[i] === letra) {
            contagem++;
        }
    }
    return "A string " + texto + " tem " + contagem + " letras" + " " + letra;
}
console.log(contarLetras("Banana", "a")); // "Banana tem 3 letras 'a"
