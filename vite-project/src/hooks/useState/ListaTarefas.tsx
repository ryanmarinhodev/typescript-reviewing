import { useState } from "react";

interface listaDeTarefasInterface {
  id: number;
  titulo: string;
  concluida: boolean;
}

function ListaTarefas() {
  const [tarefa, setTarefa] = useState<listaDeTarefasInterface[]>([]);
  const [input, setInput] = useState<string>("");

  const createTask = () => {
    if (input === "") {
      alert("Preencha todos os dados");
    }

    const novaTarefa = {
      id: Date.now(),
      titulo: input,
      concluida: false,
    };

    setTarefa((prev) => [...prev, novaTarefa]);
    setInput("");
  };

  const removeTask = () => {
    setTarefa([]);
  };

  const concluirTarefa = (id: number) => {
    setTarefa((prev) =>
      prev.map((td) => (td.id === id ? { ...td, concluida: true } : td))
    );
  };

  return (
    <>
      <div className="w-full h-full bg-blue-950">
        <div>
          <input
            type="text"
            className="bg-cyan-600 text-black"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={createTask}>Adicionar</button>
        </div>
        <div>
          <div>
            {tarefa.map((td) => (
              <span key={td.id}>
                {`${td.titulo}`}{" "}
                {td.concluida ? "(Tarefa Concluida)" : "(Tarefa Pendente)"}
                <button onClick={() => concluirTarefa(td.id)}>
                  Concluir Tarefa
                </button>
              </span>
            ))}
          </div>
          <button onClick={removeTask}>Limpar Tarefa</button>
        </div>
      </div>
    </>
  );
}

// ESTILIZAR O RETURN

export default ListaTarefas;
