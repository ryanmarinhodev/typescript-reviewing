enum PrioridadeEnum {
  Alta = "alta",
  Media = "média",
  Baixa = "baixa",
}

interface PrioridadeProps {
  id: number;
  nome: string;
  prioridade: PrioridadeEnum;
}

const listasDePrioridades: PrioridadeProps[] = [
  { id: 1, nome: "Programar", prioridade: PrioridadeEnum.Alta },
  { id: 2, nome: "Jogar", prioridade: PrioridadeEnum.Baixa },
  { id: 3, nome: "Treinar", prioridade: PrioridadeEnum.Media },
];

function PrioridadeFunction(priority: PrioridadeProps[]) {
  return priority.filter((item) => item.prioridade === PrioridadeEnum.Alta);
}

console.log(PrioridadeFunction(listasDePrioridades));

enum CategoriaLivroEnum {
  Romance = "romance",
  Tecnologia = "tecnologia",
  Autoajuda = "auto ajuda",
}

interface LivroProps {
  id: number;
  name: string;
  categoria: CategoriaLivroEnum;
}

const listaDeLivros: LivroProps[] = [
  { id: 1, name: "A prova de fogo", categoria: CategoriaLivroEnum.Romance },
  { id: 2, name: "Código limpo", categoria: CategoriaLivroEnum.Tecnologia },
  {
    id: 3,
    name: "O poder do hábito",
    categoria: CategoriaLivroEnum.Autoajuda,
  },
];

function LivrosFunction(livros: LivroProps[]): LivroProps[] {
  return livros.filter(
    (book) => book.categoria === CategoriaLivroEnum.Tecnologia
  );
}

console.log(LivrosFunction(listaDeLivros));
