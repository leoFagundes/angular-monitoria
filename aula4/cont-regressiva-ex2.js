var number = 5;
function contagemregressiva(initialNumber) {
    if (initialNumber == 0) {
        console.log("FIM!");
        return;
    }
    console.log(initialNumber);
    contagemregressiva(initialNumber - 1);
}
contagemregressiva(number);
