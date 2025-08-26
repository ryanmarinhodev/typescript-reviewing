import { useEffect, useState } from "react";

function AutoSave() {
  const [save, setSave] = useState("");
  const [lastSaved, setLastSaved] = useState<string>("");
  const lastSavedLabel = lastSaved ? lastSaved : "-";

  useEffect(() => {
    const breakTimeOut = setTimeout(() => {
      console.log(`Dados Atual: ${save}`);
      console.log("Dados salvos ultimos:", lastSaved);
      console.log("Salvamento automático");
      setLastSaved(new Date().toLocaleTimeString());
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
        className="bg-blue-300 text-black"
        onChange={(e) => setSave(e.target.value)}
      />
      <h2>Ultimos dados salvo:</h2>
      <h3>{lastSavedLabel}</h3>
    </div>
  );
}

export default AutoSave;
