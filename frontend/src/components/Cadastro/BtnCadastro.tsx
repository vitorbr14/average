import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
type BtnCadastroProps = {
  label: string;
  icon: any;
};
const BtnCadastro = ({ label, icon }: BtnCadastroProps) => {
  return (
    <Link
      to={"/"}
      className="border-2 border-gray-400 py-3  rounded-full flex md:w-96 w-auto flex justify-evenly items-center my-4"
    >
      <div className="mr-3 text-center bg-red-200">
        <FaFacebook />
      </div>
      <div className="md:text-base text-sm">Se cadastre com {label}</div>
    </Link>
  );
};

export default BtnCadastro;
