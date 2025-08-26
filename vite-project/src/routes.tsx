import { Route, Routes } from "react-router-dom";
import Home from "./HomePage";
import FormularioState from "./hooks/useState/useStateForm";
import ListaTarefas from "./hooks/useState/ListaTarefas";
import ProdutosListFiltros from "./hooks/useState/ProductsListFilter";
import TituloDinamico from "./hooks/useEffect/TituloDinamico";
import AutoSave from "./hooks/useEffect/AutoSave";
import PainelNotificacoes from "./hooks/useEffect/PainelNotificacoes";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="lista-tarefas" element={<ListaTarefas />} />
          <Route path="formulario" element={<FormularioState />} />
          <Route path="produtos" element={<ProdutosListFiltros />} />
          <Route path="titulos-dinamicos" element={<TituloDinamico />} />
          <Route path="montar" element={<AutoSave />} />
          <Route path="painel-notificacoes" element={<PainelNotificacoes />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
