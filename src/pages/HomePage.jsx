/* eslint-disable react-hooks/rules-of-hooks */
import { useAuth } from "../context/auth.context";
import { Link } from "react-router-dom";

function HomePage() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="bg-slate-300 h-screen w-screen flex px-0 mx-0 justify-between max-sm:justify-center">
      <div className="flex flex-col justify-center sm:w-1/3 max-sm:mt-24 max-sm:p-3 max-sm:w-[85%] max-sm:bg-[#ffffff74] max-sm:backdrop-blur-sm px-10 max-sm:absolute">
        <h1 className="text-5xl max-lg:text-3xl font-semibold mb-2">
          Bienvenido
        </h1>

        <p className="w-full max-lg:text-sm">
          ADPM Tasks es un servicio simple para crear tareas, completamente
          gratuito y facil de utilizar
        </p>

        {isAuthenticated ? (
          <Link
            to={"/tasks"}
            className="text-center text-xl max-lg:text-sm max-sm:self-center mt-16 px-3 py-1 w-[60%] text-gray-300 bg-indigo-700 hover:bg-indigo-800 rounded-lg"
          >
            Comenzar
          </Link>
        ) : (
          <Link
            to={"/register"}
            className="text-center text-xl max-lg:text-sm max-sm:self-center mt-16 px-3 py-1 w-[60%] text-gray-300 bg-indigo-700 hover:bg-indigo-800 rounded-lg"
          >
            Comenzar
          </Link>
        )}
      </div>
      <div className="fondo max-sm:w-full sm:w-2/3 h-full"></div>
    </div>
  );
}

export default HomePage;
