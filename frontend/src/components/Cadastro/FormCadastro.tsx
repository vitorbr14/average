import React from "react";

export const FormCadastro = () => {
  return (
    <form className="flex flex-col w-12/12 py-20 ">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2"
        type="text"
        placeholder="Nome"
      ></input>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2"
        id="username"
        type="email"
        placeholder="Email"
      ></input>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2"
        type="password"
        placeholder="Senha"
      ></input>
    </form>
  );
};
