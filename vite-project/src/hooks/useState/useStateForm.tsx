import { useState } from "react";

interface FomularioInterface {
  name: string;
  idade: number;
  isActiveType: boolean;
}

function FormularioState() {
  const [form, setForm] = useState<FomularioInterface>({
    name: "",
    idade: 0,
    isActiveType: true,
  });

  const [saveMessage, setSavedMessage] = useState("");

  const handleSave = () => {
    setSavedMessage("Dados salvo com sucesso");
    console.log(form);
  };

  return (
    <>
      <h1>Formulário Simples</h1>
      <div>
        Nome:
        <div className="bg-amber-600">
          <input
            type="text"
            className="bg-teal-600"
            onChange={(e) =>
              setForm((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <div>{form.name}</div>
        </div>
      </div>
      <div>
        <span>Idade</span>
        <div className="bg-amber-600">
          <input
            type="number"
            className="bg-teal-600"
            onChange={(e) =>
              setForm((prev) => ({ ...prev, idade: e.target.valueAsNumber }))
            }
          />
          <div>{`${form.idade} anos`}</div>
        </div>
        <span>Selecione:</span>
        <input
          type="checkbox"
          onChange={(e) =>
            setForm((prev) => ({ ...prev, isActiveType: e.target.checked }))
          }
        />
        <div>{form.isActiveType ? "Está ativo" : "Não está ativo"}</div>
      </div>
      <button onClick={handleSave}>Salvar</button>
      {saveMessage && <p>{saveMessage}</p>}
    </>
  );
}

export default FormularioState;
