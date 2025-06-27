// function getFunction(dados: string | number): string {
//   if (typeof dados === "string") {
//     return dados.toLocaleUpperCase();
//   } else {
//     return dados.toLocaleString("pt-BR", {
//       style: "currency",
//       currency: "BRL",
//     });
//   }
// }

// console.log(getFunction("Ryana Marinha"));
// console.log(getFunction("20"));

function classificarEntrar(valor: string | number | boolean): string {
  if (typeof valor === "string") {
    return valor.toUpperCase();
  } else if (typeof valor === "number") {
    return `número recebido: ${valor}`;
  } else {
    return valor ? "Valor booleano: verdadeiro" : "Valor booleano: falso";
  }
}

console.log(classificarEntrar("ryan"));
console.log(classificarEntrar(20));
console.log(classificarEntrar(true));
