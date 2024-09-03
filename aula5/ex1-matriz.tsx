let list: number[][] = [];
let auxList: number[] = [];

for (let i: number = 1; i < 10; i++) {
  auxList.push(i);

  if (auxList.length === 3) {
    list.push(auxList);
    auxList = [];
  }
}

console.log(list);
