/*
Exercício 2
*/

let upperLimit: number = 50;

for (let number: number = 2; number <= upperLimit; number++) {
  let contador: number = 0;

  for (let i: number = 1; i <= number; i++) {
    if (number % i === 0) {
      contador++;
    }
  }

  if (contador === 2) {
    console.log(number);
  }
}
