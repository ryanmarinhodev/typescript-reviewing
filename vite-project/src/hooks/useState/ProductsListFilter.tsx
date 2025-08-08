import { useState } from "react";
import Select from "react-select";

interface ProductsListFilterInterface {
  id: number;
  nome: string;
  categoria: string;
  disponivel: boolean;
}

function ProdutosListFiltros() {
  const [products, setProducts] = useState<ProductsListFilterInterface[]>([
    { id: 1, nome: "Mouse Gamer", categoria: "Informática", disponivel: true },
    { id: 2, nome: "Pc Gamer", categoria: "Informática", disponivel: false },
    { id: 3, nome: "Headset", categoria: "Informática", disponivel: true },
    { id: 4, nome: "Controle", categoria: "Objeto", disponivel: false },
  ]);

  const [search, setSearch] = useState<string>("");
  const filterItems = products.filter((item) => {
    return item.nome.toLowerCase().includes(search.toLowerCase());
  });

  const categoriasUnicas = [
    ...new Set(
      products.map((e) => {
        return e.categoria;
      })
    ),
  ];

  const filtrarCategorias = categoriasUnicas.map((cat) => ({
    value: cat.toLocaleLowerCase,
    label: cat,
  }));

  // const [searchCategoryItem, setSearchCategoryItem] = useState("");
  // const handleCategory = products.filter((item) => {
  //   return item.categoria.toLowerCase().includes(searchCategoryItem);
  // });

  return (
    <>
      <div className="bg-amber-500">
        <h1>Lista de Produtos com Filtro</h1>
        <input
          type="text"
          className="bg-gray-700"
          placeholder="Buscar por nome"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex justify-around list-none  bg-red-700">
          {filterItems.map((item) => (
            <li key={item.id}>{item.nome}</li>
          ))}
          <div></div>
        </div>

        <Select
          options={filtrarCategorias}
          value={null}
          onChange={() => {}}
          placeholder="Selecione um produto"
        />
      </div>
    </>
  );
}

export default ProdutosListFiltros;
