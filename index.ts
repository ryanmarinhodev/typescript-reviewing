let Age: number = 5;

//tipos básicos
const firstName: string = "Ryan";
const isValid: boolean = true;
let idk: any = 5;

const listaId: number[] = [1, 2, 3, 4, 5];
const booleans: boolean[] = [true, false, true, false];
const strings: string[] = ["Ryan", "Lara"];

//tupla
const person: [number, string] = [10, "Ryan"];

//lista de tuplas
const people: [number, string][] = [
  [1, "Ryan"],
  [2, "Lara"],
];

//Enum

//Type Assertions
const produtcsName: any = "boné";

let itemId = <string>produtcsName;

console.log(Age);
