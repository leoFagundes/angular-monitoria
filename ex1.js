/*
Exercício 1
*/
for (var number = 0; number < 200; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log("".concat(number, " \u00E9 divis\u00EDvel por 3 e por 5"));
    }
    else if (number % 3 === 0) {
        console.log("".concat(number, " divis\u00EDvel por 3"));
    }
    else if (number % 5 === 0) {
        console.log("".concat(number, " divis\u00EDvel por 5"));
    }
    else {
        console.log("".concat(number, " n\u00E3o \u00E9 divis\u00EDvel nem por 3 nem por 5"));
    }
}
