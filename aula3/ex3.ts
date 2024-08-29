/*
Exercício 3
*/

let numero: number = 7;
let soma: number = 0;

for (let i = 1; i <= numero; i++) {
  if (i % 2 !== 0) {
    soma += i;
  }
}

console.log(soma);
