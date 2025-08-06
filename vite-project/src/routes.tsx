import { Route, Routes } from "react-router-dom";
import Home from "./HomePage";
import FormularioState from "./hooks/useState/useStateForm";
import ListaTarefas from "./hooks/useState/ListaTarefas";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="252" element={<Home />}>
          <Route path="useState" element={<ListaTarefas />} />
          <Route path="useStateForm" element={<FormularioState />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
