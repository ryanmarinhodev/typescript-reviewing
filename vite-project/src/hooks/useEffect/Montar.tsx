import { useEffect, useState } from "react";

// interface MontarInterface {
//   event: string
// }

function Montar() {
  const [save, setSave] = useState("");
  const [lastSaved, setLastSaved] = useState();
  console.log(lastSaved);

  useEffect(() => {
    const breakTimeOut = setTimeout(() => {
      console.log("Salvamento automático:");
      console.log(`Dados Atual: ${save}`);
    }, 800);

    return () => {
      clearTimeout(breakTimeOut);
    };
  }, [save]);

  return (
    <div>
      <input
        type="text"
        placeholder="Título"
        className="bg-blue-700"
        onChange={(e) => setSave(e.target.value)}
      />
      <h2>{`Ultimos dados salvos:`}</h2>
      <h3>oi</h3>
    </div>
  );
}

export default Montar;

//Mostrar os últimos dados em tela
