function echo<G>(valor: G): G {
  return valor;
}
const nome = "Ryan";
const idade = 22;
const obj = { nome: "Ryan" };
const boolean = true;

const mergeObjetcts = <T, U>(obj1: T, obj2: U) => {
  return { ...obj1, ...obj2 };
};
const user = mergeObjetcts({ nome: "Ryan" }, { idade: 22 });

// -----------------------------------------------------------------------

const listaGenerics = [
  { usuarios: "Ryan", tarefas: 2, produtos: 2 },
  { usuarios: "Lara", tarefas: 1, produtos: 5 },
  { usuarios: "Isaac", tarefas: 3, produtos: 5 },
];

const buscarProduto = <T>(
  listaGenerics: T[],
  chave: keyof T,
  valor: T[typeof chave]
) => {
  return listaGenerics.find((item) => item[chave] === valor);
};

const resultado = buscarProduto(listaGenerics, "usuarios", "Ryan");

console.log(resultado);
