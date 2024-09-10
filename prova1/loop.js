var finalNumber = 1000;
var sum = 0;
for (var i = 1; i <= finalNumber; i++) {
    if ([2, 643, 188].includes(i)) {
        console.log("".concat(i, " retirado da soma final!"));
        continue;
    }
    sum += i;
}
console.log(sum);
