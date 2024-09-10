let matriz1: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

let matriz2: number[][] = [
  [7, 8],
  [9, 10],
  [11, 12],
];

let result: number[][] = [];

for (let j: number = 0; j < matriz1.length; j++) {
  let aux: number[] = [];
  let sum1: number = 0;
  let sum2: number = 0;
  for (let k: number = 0; k < matriz1[j].length; k++) {
    sum1 += matriz1[j][k] * matriz2[k][j];

    if (j === 0) {
      sum2 += matriz1[j][k] * matriz2[k][j + 1];
    } else {
      sum2 += matriz1[j][k] * matriz2[k][j - 1];
    }
  }

  if (j === 0) {
    aux.push(sum1);
    aux.push(sum2);
  } else {
    aux.push(sum2);
    aux.push(sum1);
  }

  result.push(aux);
}

console.log(result);
