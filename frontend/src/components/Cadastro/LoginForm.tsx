import React, { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthContext";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import Spinner from "../General/Spinner";
type Inputs = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const navigate = useNavigate();
  const { Singin, authError, loginloading } = useAuthContext();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const login = await Singin(auth, data.email, data.password);

    if (login) {
      navigate("/home");
    }
  };

  return (
    <>
      <h1 className="text-3xl ">Entrar</h1>
      <form action="" onSubmit={handleSubmit(onSubmit)} className="py-12 ">
        <div className="wrapper py-4">
          <div className="pb-4">
            <h1 className="text-sm md:text-sm ">Seu email</h1>
            <input
              className="border-b-1 border-black/50 text-center text-sm md:w-72 focus-visible:outline-none"
              {...register("email", { required: true })}
            />
          </div>
          {errors.email && (
            <span className="text-red-500 text-sm font-semibold">
              Por favor, preencha o campo de email.
            </span>
          )}

          <div className="pb-4">
            <h1 className="text-sm md:text-sm  ">Sua senha</h1>
            <input
              className="border-b-1 border-black/50 text-center text-sm md:w-72 focus-visible:outline-none"
              type="password"
              {...register("password", { required: true })}
            />
          </div>
          {errors.password && (
            <span className="text-red-500 text-sm font-semibold">
              Por favor, preencha o campo de senha.
            </span>
          )}
        </div>

        {loginloading ? (
          <Spinner />
        ) : (
          <button
            type="submit"
            className="bg-black text-white w-64 py-2 rounded-full mb-8 pt-5 "
          >
            Continuar
          </button>
        )}
      </form>

      {authError && (
        <span className="text-red-500 text-sm font-semibold">
          {authError.error?.message}
        </span>
      )}
    </>
  );
};

export default LoginForm;
