var feijoada = function (ingredientes) {
    return "A feijoada com: ".concat(ingredientes, " est\u00E1 pronta");
};
var adicionarIngrediente = function (ingredientes) {
    return ingredientes.join(", ");
};
console.log(feijoada(adicionarIngrediente(["Feijão", "Arroz", "Laranja"])));
