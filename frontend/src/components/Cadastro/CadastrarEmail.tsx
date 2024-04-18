import React from "react";
import { Link } from "react-router-dom";

const CadastrarEmail = () => {
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
          <div className="md:py-14 py-8">
            <h1 className="text-sm md:text-sm  pb-9">Seu email</h1>
            <input className="border-b-1 border-black/50 text-center text-sm md:w-72 focus-visible:outline-none"></input>
          </div>
          <button className="bg-black text-white w-64 py-2 rounded-full mb-8 ">
            Continuar
          </button>
        </div>

        <Link to={"/"} className="text-purple-500 md:text-purple-700 mx-auto">
          Voltar para os outras opções
        </Link>
      </div>
    </>
  );
};

export default CadastrarEmail;
