var matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
var sum = 0;
for (var i = 0; i < matriz.length; i++) {
    sum += matriz[i].reduce(function (result, current) { return result + current; }, 0);
}
console.log(sum);
