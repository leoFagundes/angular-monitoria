var matriz1 = [
    [1, 2, 3],
    [4, 5, 6],
];
var matriz2 = [
    [7, 8],
    [9, 10],
    [11, 12],
];
var result = [];
for (var j = 0; j < matriz1.length; j++) {
    var aux = [];
    var sum1 = 0;
    var sum2 = 0;
    for (var k = 0; k < matriz1[j].length; k++) {
        sum1 += matriz1[j][k] * matriz2[k][j];
        if (j === 0) {
            sum2 += matriz1[j][k] * matriz2[k][j + 1];
        }
        else {
            sum2 += matriz1[j][k] * matriz2[k][j - 1];
        }
    }
    if (j === 0) {
        aux.push(sum1);
        aux.push(sum2);
    }
    else {
        aux.push(sum2);
        aux.push(sum1);
    }
    result.push(aux);
}
console.log(result);
