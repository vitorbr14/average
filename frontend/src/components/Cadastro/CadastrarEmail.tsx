import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";
import { useForm, SubmitHandler } from "react-hook-form";
import { AuthContext } from "../../context/AuthContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import Spinner from "../General/Spinner";

type Inputs = {
  email: string;
  password: string;
  name: string;
};
const CadastrarEmail = () => {
  const { registerLoading, singUpGoogle, authError } = useAuthContext();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    const result = await singUpGoogle(
      auth,

      data.email,
      data.password,
      data.name
    );
    if (result) {
      navigate("/home");
      console.log("Cadastrado!");
    }
  };

  return (
    <>
      <div className="text-center">
        <div className=" md:w-3/5 md:mx-auto">
          <h1 className="text-xl md:text-2xl pb-8">
            Cadastre-se com seu email
          </h1>
          <p className="text-sm">
            Informe o endereço de e-mail associado à sua conta e enviaremos um
            link mágico para a sua caixa de entrada.
          </p>
          <form action="" onSubmit={handleSubmit(onSubmit)} className="py-12">
            <div className="pb-4 ">
              <h1 className="text-sm md:text-sm  ">Seu Nome</h1>
              <input
                className="border-b-1 border-black/50 text-center text-sm md:w-72 focus-visible:outline-none"
                {...register("name", { required: true })}
              />
            </div>

            <div className="pb-4 ">
              <h1 className="text-sm md:text-sm  ">Seu email</h1>
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

            {registerLoading ? (
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
        </div>

        <Link to={"/"} className="text-purple-500 md:text-purple-700 mx-auto">
          Voltar para os outras opções
        </Link>
      </div>
    </>
  );
};

export default CadastrarEmail;
