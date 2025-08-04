import { useState } from "react";

function FormularioState() {
  const [name, setName] = useState<string>("");
  const [idade, setIdade] = useState<number | undefined>(0);
  const [active, setActive] = useState<boolean>(false);
  return (
    <>
      <h1>Formulário Simples </h1>
      <div>
        Nome:
        <div className="bg-amber-600">
          <input
            type="text"
            className="bg-teal-600"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div>{name}</div>
        </div>
      </div>
      <div>
        <span>Idade:</span>
        <div className="bg-amber-500">
          <input
            type="number"
            value={idade}
            onChange={(e) => setIdade(Number(e.target.value))}
            className="bg-teal-600"
          />
          <div>{`${idade} anos`}</div>
        </div>
      </div>

      <div>
        <span>Está ativo?</span>
        <div className="bg-amber-500">
          <div className="bg-teal-600">
            <input
              type="checkbox"
              onChange={(e) => setActive(Boolean(e.target.checked))}
            />
            <div>{active ? "Sim" : "Não"}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormularioState;
