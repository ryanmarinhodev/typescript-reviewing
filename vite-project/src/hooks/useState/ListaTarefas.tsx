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
    console.log(novaTarefa);
  };

  const removeTask = () => {
    setInput("");
  };

  return (
    <>
      <div className="w-full h-full bg-blue-950 flex flex-col">
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
          {tarefa.map((td) => (
            <span key={td.id}>
              {`${td.titulo}`}{" "}
              {td.concluida ? "(Tarefa Concluida)" : "(Tarefa Pendente)"}
            </span>
          ))}
          <button onClick={removeTask}></button>
        </div>
      </div>
    </>
  );
}

export default ListaTarefas;
