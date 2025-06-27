// interface Users {
//   id: number;
//   name: string;
//   role: "admin" | "user";
// }

// const users: Users[] = [
//   { id: 1, name: "Ryan", role: "admin" },
//   { id: 2, name: "Lara", role: "user" },
//   { id: 3, name: "Jose", role: "user" },
// ];

// function getUserType(users: Users[]): string[] {
//   const names: string[] = users.map((user: Users): string => user.name);
//   return names;
// }

// function getUser(users: Users[]): void {
//   const isAdmin = users.filter((user) => user.role === "admin");
//   const isUser = users.filter((user) => user.role === "user");
//   if (isAdmin.length > 0) {
//     isAdmin.forEach((admin) => {
//       console.log(`O usuário ${admin.name} é administrador`);
//     });
//   } else if (isUser.length > 0) {
//     isUser.forEach((user) => {
//       console.log(`O usuário ${user.name} não é administrador`);
//     });
//   }

//   // return users.filter((user) => user.role === "admin");
// }

// getUser(users);

// function somaNumber(number1: number, number2: number): number {
//   return number1 + number2;
// }

// console.log(somaNumber(3, 5));

// interface ProdutosType {
//   id: number;
//   nome: string;
//   preco: number;
//   disponivel: boolean;
// }

// const productsBio: ProdutosType[] = [
//   { id: 1, nome: "Perfume", preco: 100.0, disponivel: true },
//   { id: 1, nome: "Batom", preco: 50.0, disponivel: true },
//   { id: 1, nome: "Gloss", preco: 20.0, disponivel: false },
// ];

// function getProducts(productsBio: ProdutosType[]): string[] {
//   const getProductsTrue = productsBio
//     .filter((productsBio) => productsBio.disponivel === true)
//     .map((productsBio) => productsBio.nome);
//   return getProductsTrue;
// }
// console.log(getProducts(productsBio));

// let nomes: string | number;
// nomes = 20;
// console.log(nomes);

function formatarEntrada(input: string | number): string {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else {
    return input.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  }
}

console.log(formatarEntrada("Ryan"));
console.log(formatarEntrada(20));

// A função deve ter : string no retorno
// Dentro dela, use typeof para diferenciar
// Use .toUpperCase() com string
// Use .toLocaleString() com number

// 📌 Se for string:
// Usa .toUpperCase() e retorna
// 📌 Se for number:
// Usa .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) e retorna
// 🧩 E mais um detalhe:
// Você ainda não tipou o retorno da função — é importante colocar:
