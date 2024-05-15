import React, { useState } from "react";
import { footer, headerMenuData, loginWays } from "../../data/data";
import { Link } from "react-router-dom";
import ModalCadastro from "../Cadastro/ModalCadastro";
import BtnCadastro from "../Cadastro/BtnCadastro";
import { FormCadastro } from "../Cadastro/FormCadastro";
import logo from "./logo.png";
import CadastrarEmail from "../Cadastro/CadastrarEmail";
import GoogleButton from "react-google-button";
import { signInWithGooglePopup } from "../firebase/firebaseConfig";
import ModalLogin from "../Cadastro/ModalLogin";
import LoginForm from "../Cadastro/LoginForm";

type menuitens = {
  label: string;
  link: string;
};
const DemoHeader = () => {
  const [open, setOpen] = useState(false);
  const [openModalLogin, setOpenModalLogin] = useState(false);
  const handleClickModal = () => {
    setOpen(!open);
  };
  const handleClickModalLogin = () => {
    setOpenModalLogin(!openModalLogin);
  };

  return (
    <>
      <ModalCadastro open={open} handleClickModal={handleClickModal}>
        <div className="w-full md:w-3/5 flex justify-center ">
          <CadastrarEmail />
        </div>
      </ModalCadastro>

      <ModalLogin
        handleClickModalLogin={handleClickModalLogin}
        openModalLogin={openModalLogin}
      >
        <div className="w-full md:w-3/5 flex justify-center text-center flex-col">
          <LoginForm />
        </div>
      </ModalLogin>

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
              className="bg-black p-3 mr-2 rounded-full text-white"
              onClick={() => setOpenModalLogin(true)}
            >
              Login
            </button>
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
