import { Link, Outlet } from "react-router-dom";
import { paths } from "./paths";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-950 to-black text-white px-6 py-10">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Exercícios de React
        </h1>
        <p className="text-lg text-gray-300 mb-10">Exercícios de useState:</p>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <Link
            to={paths.LISTA_TAREFAS}
            className="bg-blue-800 hover:bg-blue-700 rounded-xl p-6 transition transform hover:-translate-y-1 shadow-md"
          >
            <h2 className="text-xl font-semibold mb-2">useState</h2>
            <p className="text-gray-300 text-sm">
              Lista de tarefas usando useState
            </p>
          </Link>

          <Link
            to={paths.FORMULARIO}
            className="bg-blue-800 hover:bg-blue-700 rounded-xl p-6 transition transform hover:-translate-y-1 shadow-md"
          >
            <h2 className="text-xl font-semibold mb-2">useState Form</h2>
            <p className="text-gray-300 text-sm">
              Formulário controlado com useState
            </p>
          </Link>
          <Link
            to={paths.PRODUTOS}
            className="bg-blue-800 hover:bg-blue-700 rounded-xl p-6 transition transform hover:-translate-y-1 shadow-md"
          >
            <h2 className="text-xl font-semibold mb-2">Produtos</h2>
            <p className="text-gray-300 text-sm">
              Produtos controlado com useState
            </p>
          </Link>
        </div>
      </div>

      <div className="mt-12">
        <p>Exercícios de useEffect:</p>
        <div className="max-w-5xl mx-auto text-center">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-7">
            <Link
              to={paths.TITULOS_DINAMICOS}
              className="bg-blue-800 hover:bg-blue-700 rounded-xl p-6 transition transform hover:-translate-y-1 shadow-md"
            >
              <h2 className="text-xl font-semibold mb-2">UseEffect</h2>
              <p className="text-gray-300 text-sm">
                Título da página dinâmico com useEffect
              </p>
            </Link>
            <Link
              to={paths.MONTAR}
              className="bg-blue-800 hover:bg-blue-700 rounded-xl p-6 transition transform hover:-translate-y-1 shadow-md"
            >
              <h2 className="text-xl font-semibold mb-2">UseEffect</h2>
              <p className="text-gray-300 text-sm">
                Dados salvos automáticamente com useEffect (olhar console)
              </p>
            </Link>
            <Link
              to={paths.PAINEL_NOTIFICACOES}
              className="bg-blue-800 hover:bg-blue-700 rounded-xl p-6 transition transform hover:-translate-y-1 shadow-md"
            >
              <h2 className="text-xl font-semibold mb-2">UseEffect</h2>
              <p className="text-gray-300 text-sm">
                Painel de Notificações (Olhar Console)
              </p>
            </Link>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
