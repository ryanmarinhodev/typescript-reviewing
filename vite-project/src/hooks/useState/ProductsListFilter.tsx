import { useState } from "react";
import Select from "react-select";

interface ProductsListFilterInterface {
  id: number;
  nome: string;
  categoria: string;
  disponivel: boolean;
}

interface Valores {
  value: string;
  label: string;
}

function ProdutosListFiltros() {
  const [products] = useState<ProductsListFilterInterface[]>([
    { id: 1, nome: "Mouse Gamer", categoria: "Informática", disponivel: true },
    { id: 2, nome: "Pc Gamer", categoria: "Informática", disponivel: false },
    { id: 3, nome: "Headset", categoria: "Informática", disponivel: true },
    { id: 4, nome: "Controle", categoria: "Objeto", disponivel: false },
  ]);

  const [search, setSearch] = useState<string>("");
  const [selectedCategory, setselectedCategory] = useState<Valores | null>(
    null
  );

  const categoriasUnicas = [
    ...new Set(
      products.map((e) => {
        return e.categoria;
      })
    ),
  ];

  const categorias = categoriasUnicas.map((cat) => ({
    value: cat,
    label: cat,
  }));

  const filterItems = products.filter((item) => {
    const s = search.trim().toLowerCase();
    const matchNome = s === "" || item.nome.toLowerCase().includes(s);
    const matchCategoria =
      !selectedCategory || item.categoria === selectedCategory.value;

    return matchNome && matchCategoria;
  });

  return (
    <>
      <div className="bg-amber-500">
        <h1>Lista de Produtos com Filtro</h1>
        <input
          type="text"
          className="bg-gray-700 m-3.5"
          placeholder="Buscar por nome"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Select
          options={categorias}
          value={selectedCategory}
          onChange={(item) => setselectedCategory(item)}
          placeholder="Filtre por categoria:"
          isClearable
        />
        <ul className="mt-3">
          {filterItems.length === 0 ? (
            <li>Nenhum produto foi encontrado</li>
          ) : (
            filterItems.map((p) => <li key={p.id}>{p.nome}</li>)
          )}
        </ul>
      </div>
    </>
  );
}

export default ProdutosListFiltros;
