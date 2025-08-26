import { useEffect, useState } from "react";

interface PainelNotificacoesInterface {
  id: number;
  titulo: string;
  tipo: "sistema" | "comentario" | "mencao";
  lida: boolean;
}

function PainelNotificacoes() {
  const [status, setStatus] = useState(false);
  const [notificacoes, setNotificacoes] = useState<
    PainelNotificacoesInterface[]
  >([]);

  //Notificações
  function handleNotification(
    titulo: string,
    tipo: "sistema" | "comentario" | "mencao"
  ): PainelNotificacoesInterface {
    return {
      id: Math.random(),
      titulo: titulo,
      tipo: tipo,
      lida: false,
    };
  }

  useEffect(() => {
    if (status === true) {
      const intervalId = setInterval(() => {
        const novaMensagem = handleNotification(
          "Titulo da primeira mensagem",
          "sistema"
        );
        setNotificacoes((prev) => [...prev, novaMensagem]);
        console.log("O usuário está on-line");
      }, 5000);

      return () => clearInterval(intervalId);
    } else {
      console.log("Usuário offline");
    }
  }, [status]);

  function readOneNotification(id: number) {
    setNotificacoes((prev) => {
      return prev.map((n) => (n.id === id ? { ...n, lida: true } : n));
    });
  }

  function readAllNotification() {
    setNotificacoes((prev) => {
      return prev.map((n) => (n.id ? { ...n, lida: true } : n));
    });
  }

  return (
    <div>
      <h1>Painel notificiações</h1>
      <button onClick={() => setStatus((prev) => !prev)}>Mudar status</button>
      <button
        onClick={() => readAllNotification()}
        style={{ visibility: status ? "visible" : "hidden" }}
      >
        Ler todas notificações
      </button>

      <ul>
        {notificacoes.map((item) => (
          <li key={item.id}>
            [{item.tipo}] {item.titulo} {""}
            {item.lida ? "Lida" : "- Não lida"} {""}
            <button onClick={() => readOneNotification(item.id)}>
              Confirmar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PainelNotificacoes;
