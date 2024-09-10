function procurandoNemo(matriz) {
    var maiorElemento = matriz[0][0]; // Inicializa com o primeiro elemento da matriz
    for (var i = 0; i < matriz.length; i++) {
        for (var j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] > maiorElemento) {
                maiorElemento = matriz[i][j];
            }
        }
    }
    return maiorElemento;
}
console.log(procurandoNemo([
    [17, 22, 13],
    [4, 555, 6],
    [70, 8, 69],
])); // 70
