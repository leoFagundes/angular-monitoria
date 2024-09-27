const nome: string | null = window.prompt("Qual seu nome?");
const idade: string | null = window.prompt("E a sua idade?");

const mainElement: HTMLElement = document.getElementsByTagName(
  "main"
)[0] as HTMLElement;

const pElement1: HTMLElement = mainElement.appendChild(
  document.createElement("p")
);
const pElement2: HTMLElement = mainElement.appendChild(
  document.createElement("p")
);

pElement1.textContent = `Nome: ${nome}`;
pElement2.textContent = `Idade: ${idade}`;
