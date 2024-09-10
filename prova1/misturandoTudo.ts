type PreencherArraysProps = (finalNumber: number) => {
  numerosImpares: number[];
  multiplosTres: number[];
};

const preencherArrays: PreencherArraysProps = (finalNumber) => {
  let numerosImpares: number[] = [];
  let multiplosTres: number[] = [];

  for (let index: number = 1; index < finalNumber; index++) {
    if (index % 2 !== 0) {
      numerosImpares.push(index);
    }

    if (index % 3 === 0) {
      multiplosTres.push(index);
    }
  }

  return { numerosImpares, multiplosTres };
};

const { numerosImpares, multiplosTres } = preencherArrays(14);

console.log(numerosImpares);
console.log(multiplosTres);
