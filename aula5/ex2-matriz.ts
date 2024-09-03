let matriz: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let sum: number = 0;

for (let i: number = 0; i < matriz.length; i++) {
  sum += matriz[i].reduce((result, current) => result + current, 0);
}

console.log(sum);
