import { Route, Routes } from "react-router-dom";
import Home from "./HomePage";
import FormularioState from "./hooks/useState/useStateForm";
import ListaTarefas from "./hooks/useState/ListaTarefas";
import ProdutosListFiltros from "./hooks/useState/ProductsListFilter";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="lista-tarefas" element={<ListaTarefas />} />
          <Route path="formulario" element={<FormularioState />} />
          <Route path="produtos" element={<ProdutosListFiltros />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
