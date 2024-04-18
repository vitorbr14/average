import React, { useState } from "react";
import { footer, headerMenuData, loginWays } from "../../data/data";
import { Link } from "react-router-dom";
import ModalCadastro from "../Cadastro/ModalCadastro";
import BtnCadastro from "../Cadastro/BtnCadastro";
import { FormCadastro } from "../Cadastro/FormCadastro";
import logo from "./logo.png";
import CadastrarEmail from "../Cadastro/CadastrarEmail";

type menuitens = {
  label: string;
  link: string;
};
const DemoHeader = () => {
  const [open, setOpen] = useState(false);

  const handleClickModal = () => {
    setOpen(!open);
    // document.body.style.overflowY = "hidden";
  };
  return (
    <>
      <ModalCadastro open={open} handleClickModal={handleClickModal}>
        {/* <h1 className="text-2xl">Se junte ao Avarege!</h1> */}
        <div className="w-full md:w-3/5 ">
          <CadastrarEmail />
        </div>
        {/* <h1 className="md:text-xl text-base text-center">
          Já tem uma conta?
          <Link to={"/"} className="text-purple-600">
            faça login
          </Link>
          <div
            className="text-center md:w-4/5 w-full m-auto"
            style={{ lineHeight: ".8em" }}
          >
            <span className="text-xs text-gray-400">
              Clique em 'Inscrever-se' para concordar com os Termos de Serviço
              do Medium e reconhecer que a Política de Privacidade do Average se
              aplica a você.
            </span>
          </div>
        </h1> */}
      </ModalCadastro>

      <div className="bg-purple-800 h-20 flex items-center ">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            {/* <h1 className="text-4xl font-semibold flex items-center text-white">
              Ava rege
            </h1> */}
            <img src={logo} alt="" className="w-20" />
          </div>
          <div className="flex">
            <ul className="md:flex gap-6 pr-6 items-center hidden">
              {headerMenuData.map((menuitens: menuitens) => {
                return (
                  <li className="font-medium text-white">
                    <Link to={menuitens.link}> {menuitens.label}</Link>
                  </li>
                );
              })}
            </ul>

            <button
              className="bg-black p-3 rounded-full text-white"
              onClick={() => setOpen(true)}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoHeader;
