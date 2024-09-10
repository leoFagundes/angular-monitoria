let finalNumber: number = 1000;
let sum: number = 0;

for (let i: number = 1; i <= finalNumber; i++) {
  if ([2, 643, 188].includes(i)) {
    console.log(`${i} retirado da soma final!`);
    continue;
  }

  sum += i;
}

console.log(sum);
