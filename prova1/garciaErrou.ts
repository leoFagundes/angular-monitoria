function contarLetras(texto: string, letra: string): string {
  let contagem: number = 0;
  for (let i: number = 0; i < texto.length; i++) {
    if (texto[i] === letra) {
      contagem++;
    }
  }
  return "A string " + texto + " tem " + contagem + " letras" + " " + letra;
}

console.log(contarLetras("Banana", "a")); // "Banana tem 3 letras 'a"
