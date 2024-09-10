let p1: number[] = [2, 6]; // xa, ya
let p2: number[] = [-4, 8]; // xb, yb

type CalculaDistanciaProps = (p1: number[], p2: number[]) => number;

const calculaDistancia: CalculaDistanciaProps = (p1, p2) => {
  let distancia: number = Math.sqrt(
    Math.pow(p2[0] - p1[0], 2) + Math.pow(p2[1] - p1[1], 2)
  );

  return distancia;
};

console.log(calculaDistancia(p1, p2));
