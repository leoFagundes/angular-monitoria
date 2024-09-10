function procurandoNemo(matriz: number[][]): number {
  let maiorElemento = matriz[0][0]; // Inicializa com o primeiro elemento da matriz
  for (let i: number = 0; i < matriz.length; i++) {
    for (let j: number = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] > maiorElemento) {
        maiorElemento = matriz[i][j];
      }
    }
  }

  return maiorElemento;
}

console.log(
  procurandoNemo([
    [17, 22, 13],
    [4, 5, 6],
    [70, 8, 69],
  ])
); // 70
