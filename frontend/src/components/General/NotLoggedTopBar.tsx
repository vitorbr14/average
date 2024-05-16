import React from "react";
import { IoIosSearch } from "react-icons/io";
import { TfiPencilAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";

const NotLoggedTopBar = () => {
  return (
    <>
      <div className="container-lg mx-auto py-4">
        <header className="flex justify-between">
          <div className="flex items-center">
            <div className="relative text-gray-600 focus-within:text-gray-400 hidden md:inline">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2"></span>
            </div>
          </div>

          <div className="flex items-center md:w-1/5 w-2/4 justify-evenly">
            <Link to={"/"} className="">
              <IoIosSearch className="text-2xl text-gray-600 pr-1 inline md:hidden" />
            </Link>

            <Link to={"/demo"} className="flex ">
              <h1 className="text-base text-gray-600 hidden md:inline">
                Login
              </h1>
            </Link>

            <Link to={"/demo"} className="flex ">
              <h1 className="text-base text-gray-600 hidden md:inline">
                Cadastro
              </h1>
            </Link>
          </div>
        </header>
      </div>
      <div className="divider"></div>
    </>
  );
};

export default NotLoggedTopBar;
