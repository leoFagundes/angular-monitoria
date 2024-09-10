let weekdays: string[] = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];

// fazendo de formas diferentes
let diasDaSemana: string[] = ["Domingo"].concat(weekdays);
diasDaSemana.push("Sábado");

console.log(`Dias da semana: ${diasDaSemana}`);
console.log(`Novos dias úteis: ${weekdays}`);
