import { useEffect } from "react";

function Montar() {
  const handleHour = () => {
    const date = new Date();
    console.log(date.toLocaleTimeString());
  };

  useEffect(() => {
    console.log("Montou");
  }, []);

  return (
    <>
      <div>Montar</div>
      <div>Montar</div>
    </>
  );
}

export default Montar;
