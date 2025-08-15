import { useEffect, useState } from "react";

function TituloDinamico() {
  const [counter, setCount] = useState(0);

  const counterFunction = (action: string) => {
    if (action === "decremento" && counter > 0) {
      setCount(counter - 1);
    }

    if (action === "incremento") {
      setCount(counter + 1);
    }
  };

  useEffect(() => {
    console.log("O valor foi para:", counter);
    document.title = `${counter}`;
  }, [counter]);

  return (
    <div>
      <h1>Titulo dinamico</h1>
      <p>{counter}</p>
      <button onClick={() => counterFunction("decremento")}>-</button>
      <button onClick={() => counterFunction("incremento")}>+</button>
    </div>
  );
}

export default TituloDinamico;
