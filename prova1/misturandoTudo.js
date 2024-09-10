var preencherArrays = function (finalNumber) {
    var numerosImpares = [];
    var multiplosTres = [];
    for (var index = 1; index < finalNumber; index++) {
        if (index % 2 !== 0) {
            numerosImpares.push(index);
        }
        if (index % 3 === 0) {
            multiplosTres.push(index);
        }
    }
    return { numerosImpares: numerosImpares, multiplosTres: multiplosTres };
};
var _a = preencherArrays(14), numerosImpares = _a.numerosImpares, multiplosTres = _a.multiplosTres;
console.log(numerosImpares);
console.log(multiplosTres);
