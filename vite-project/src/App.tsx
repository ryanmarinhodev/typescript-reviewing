import "./App.css";
import ListaTarefas from "./hooks/useState/ListaTarefas";
import FormularioState from "./hooks/useState/useStateForm";

function App() {
  return (
    <div>
      <FormularioState />
      <ListaTarefas />
    </div>
  );
}

export default App;
