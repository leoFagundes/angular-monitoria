var p1 = [2, 6]; // xa, ya
var p2 = [-4, 8]; // xb, yb
var calculaDistancia = function (p1, p2) {
    var distancia = Math.sqrt(Math.pow(p2[0] - p1[0], 2) + Math.pow(p2[1] - p1[1], 2));
    return distancia;
};
console.log(calculaDistancia(p1, p2));
