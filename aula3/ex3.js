/*
Exercício 3
*/
var numero = 7;
var soma = 0;
for (var i = 1; i <= numero; i++) {
    if (i % 2 !== 0) {
        soma += i;
    }
}
console.log(soma);
