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

// Union types
// function classificarEntrar(valor: string | number | boolean): string {
//   if (typeof valor === "string") {
//     return valor.toUpperCase();
//   } else if (typeof valor === "number") {
//     return `número recebido: ${valor}`;
//   } else {
//     return valor ? "Valor booleano: verdadeiro" : "Valor booleano: falso";
//   }
// }

// console.log(classificarEntrar("ryan"));
// console.log(classificarEntrar(20));
// console.log(classificarEntrar(true));

// Enuns
// enum Idiomas {
//   Portugues,
//   Frances,
//   Espanhol,
//   Ingles,
// }
// console.log(Idiomas.Ingles);

// enum Tarefas {
//   Jogar = "Play",
//   Cozinhar = "Comida",
//   Limpar = "Banheiro",
// }
// console.log(Tarefas["Limpar"]);

enum StatusTarefas {
  Pendente = "pendente",
  Andamento = "andamento",
  Concluida = "concluida",
}

interface TarefasType {
  id: number;
  titulo: string;
  status: StatusTarefas;
}

const tarefas: TarefasType[] = [
  { id: 1, titulo: "limpar banheiro", status: StatusTarefas.Pendente },
  { id: 2, titulo: "limpar quarto", status: StatusTarefas.Concluida },
  { id: 3, titulo: "limpar sala", status: StatusTarefas.Andamento },
  { id: 4, titulo: "limpar cozinha", status: StatusTarefas.Pendente },
  { id: 4, titulo: "lavar roupas", status: StatusTarefas.Concluida },
];

// function filtrarTarefasPorStatus(tarefas: TarefasType[],status: StatusTarefas): TarefasType[] {
//   return tarefas.filter((t) => t.status === status);
// }

// const concluidas = filtrarTarefasPorStatus(tarefas, StatusTarefas.Concluida);
// console.table(concluidas);

// function contarTarefaPorStatus(tarefas: TarefasType[], status: StatusTarefas): number {
//   return tarefas.filter((t) => t.status === status).length;
// }

// const quantidadeTarefas = contarTarefaPorStatus(tarefas,);
console.log("Quantidade de tarefa:", tarefas.length);
