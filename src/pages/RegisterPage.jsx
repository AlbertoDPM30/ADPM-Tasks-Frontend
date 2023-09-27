/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import {
  InputStyle,
  ButtonStyle,
  H1Style,
  ContainerStyle,
  FormStyle,
  ReqMsg,
} from "../components/Login.styles";
import { useAuth } from "../context/auth.context";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, FormErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tasks");
    }
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    await signup(values);
  });

  return (
    <div className={ContainerStyle}>
      <form onSubmit={onSubmit} className={FormStyle}>
        <h1 className={H1Style}>Registrate</h1>
        <input
          className={InputStyle}
          placeholder="Nombre de usuario"
          type="text"
          {...register("username", { required: true })}
        />
        {errors.username && (
          <p className="text-red-500 mb-2 -mt-3 w-80">
            El nombre de usuario es requerido
          </p>
        )}

        <input
          className={InputStyle}
          placeholder="Correo electrónico"
          type="email"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <p className="text-red-500 mb-2 -mt-3 w-80">El Email es requerido</p>
        )}

        <input
          className={InputStyle}
          placeholder="Contraseña"
          type="password"
          {...register("password", { required: true, minLength: 8 })}
        />
        {errors.password && (
          <p className="text-red-500 mb-2 -mt-3 w-80">
            La contraseña no es válida, la contraseña debe tener al menos 8
            caracteres
          </p>
        )}

        {FormErrors.map((error, i) => (
          <div className="bg-red-500 text-white p-2 text-center" key={i}>
            {error}
          </div>
        ))}

        <button className={ButtonStyle} type="submit">
          Registrarse
        </button>

        <p className={ReqMsg}>
          ¿Ya tienes una cuenta?...{" "}
          <Link className="text-slate-100" to={"/login"}>
            Inicia sesión
          </Link>
        </p>
      </form>
    </div>
  );
}

export default RegisterPage;
