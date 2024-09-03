var list = [];
var auxList = [];
for (var i = 1; i < 10; i++) {
    auxList.push(i);
    if (auxList.length === 3) {
        list.push(auxList);
        auxList = [];
    }
}
console.log(list);
