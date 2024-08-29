/*
Exercício 2
*/
var upperLimit = 50;
for (var number = 2; number <= upperLimit; number++) {
    var contador = 0;
    for (var i = 1; i <= number; i++) {
        if (number % i === 0) {
            contador++;
        }
    }
    if (contador === 2) {
        console.log(number);
    }
}
