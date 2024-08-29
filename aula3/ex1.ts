/*
Exercício 1
*/

for (let number: number = 0; number < 200; number++) {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log(`${number} é divisível por 3 e por 5`);
  } else if (number % 3 === 0) {
    console.log(`${number} divisível por 3`);
  } else if (number % 5 === 0) {
    console.log(`${number} divisível por 5`);
  } else {
    console.log(`${number} não é divisível nem por 3 nem por 5`);
  }
}
