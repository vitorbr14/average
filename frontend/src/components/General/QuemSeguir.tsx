import React from "react";
import QuemSeguirUsuario from "./QuemSeguirUsuario";

const QuemSeguir = () => {
  return (
    <>
      <div className="py-8 hidden md:inline-block">
        <div>
          <h1 className="text-lg text-gray-500 ml-2">Quem seguir</h1>
        </div>
        <div>
          <QuemSeguirUsuario />
          <QuemSeguirUsuario />
          <QuemSeguirUsuario />
          <QuemSeguirUsuario />
        </div>
      </div>
    </>
  );
};

export default QuemSeguir;
