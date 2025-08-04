interface FormularioInterface {
  nome: string;
  idade: number;
  estaAtivo: boolean;
}

function FormularioState() {
  return (
    <>
      <h1>Formulário Simples </h1>
      <input type="text" />
      <div className="font-bold">oi</div>
    </>
  );
}

export default FormularioState;
