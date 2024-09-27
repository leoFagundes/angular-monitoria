var nome = window.prompt("Qual seu nome?");
var idade = window.prompt("E a sua idade?");
var mainElement = document.getElementsByTagName("main")[0];
var pElement1 = mainElement.appendChild(document.createElement("p"));
var pElement2 = mainElement.appendChild(document.createElement("p"));
pElement1.textContent = "Nome: ".concat(nome);
pElement2.textContent = "Idade: ".concat(idade);
