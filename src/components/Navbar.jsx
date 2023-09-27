import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth.context";
import { FaCircleUser } from "react-icons/fa6";
import { CgFileAdd, CgLogOut } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();

  const [visible, setVisible] = useState(false);

  return (
    <nav className="flex justify-between items-center my-3 px-5 h-[55px] w-[90vw] bg-[#28364f] text-slate-100 rounded-lg fixed top-0 right-1/2 translate-x-[50%] z-50">
      <div>
        <Link to={"/"}>
          <h1 className="font-bold sm:text-2xl max-sm:text-md">ADPM Tasks</h1>
        </Link>
      </div>

      {isAuthenticated ? (
        <div className="flex gap-x-16">
          <div className="flex gap-x-5 lg:text-xl md:text-md sm:text-sm"></div>

          <button
            className="md:hidden"
            onClick={() => setVisible(true)}
            onBlurCapture={() =>
              setTimeout(() => {
                setVisible(false);
              }, 10)
            }
          >
            <GiHamburgerMenu />
          </button>

          {visible && (
            <div className="absolute top-[50px] right-0 bg-[#28364f] w-[140px] text-sm">
              <Link
                to={"/add-task"}
                className="flex items-center gap-1 hover:bg-[#394b69] px-3 py-2"
              >
                {" "}
                <CgFileAdd />
                Crear tarea
              </Link>

              <Link
                to={"/tasks"}
                className="flex items-center gap-1 hover:bg-[#394b69] px-3 py-2"
              >
                <FaCircleUser /> {user.username}
              </Link>

              <Link
                to={"/"}
                onClick={() => {
                  logout();
                }}
                className="flex items-center gap-1 hover:bg-[#394b69] px-3 py-2"
              >
                <CgLogOut />
                Cerrar sesión
              </Link>
            </div>
          )}

          <div className="flex gap-5 max-md:hidden">
            <Link
              to={"/tasks"}
              className="lg:text-2xl md:text-xl sm:text-sm font-semibold hover:text-slate-400 px-2 py-1 flex items-center gap-2 capitalize"
            >
              <>
                <FaCircleUser />
              </>
              {user.username}
            </Link>
            <Link
              to={"/add-task"}
              className="flex items-center gap-2 lg:text-xl hover:text-slate-400 bg-indigo-700 hover:bg-indigo-800 px-2 py-1 rounded-lg"
            >
              <CgFileAdd />
              Nueva tarea
            </Link>
            <Link
              className="flex items-center gap-2 lg:text-md hover:text-slate-400 bg-red-600 hover:bg-red-700 rounded-lg px-2 py-1"
              to={"/"}
              onClick={() => {
                logout();
              }}
            >
              {" "}
              Cerrar sesión
              <div className="text-2xl">
                <CgLogOut />
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex gap-5">
          <Link
            to={"/login"}
            className="sm:text-xl max-sm:text-md 2xl:text-2xl hover:text-slate-400 bg-[#4f5eb1] hover:bg-[#375280] rounded-lg px-3 py-1"
          >
            Iniciar sesión
          </Link>
          <Link
            to={"/register"}
            className="sm:text-xl max-sm:text-md 2xl:text-2xl hover:text-slate-400 bg-[#554aa7] hover:bg-[#3d3776] rounded-lg px-3 py-1"
          >
            Registrarse
          </Link>
        </div>
      )}
    </nav>
  );
}
