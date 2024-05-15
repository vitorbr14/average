import React from "react";
import logo from "../Demo/logo.png";
import { LuPenSquare } from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";
import { TfiPencilAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { useAuthContext } from "../../hooks/useAuthContext";

const TopbarGeneral = () => {
  const { currentUser } = useAuthContext();
  return (
    <>
      <div className="container-lg mx-auto">
        <header className="flex justify-between">
          <div className="flex items-center">
            <img src={logo} alt="" className="w-20" />
            <div className="relative text-gray-600 focus-within:text-gray-400 hidden md:inline">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="submit"
                  className="p-1 focus:outline-none focus:shadow-outline"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
              </span>
              <input
                type="search"
                className="py-3 text-sm text-black bg-gray-100 rounded-full pl-10 focus:outline-none  focus:text-gray-900 px-10"
                placeholder="Search"
              />
            </div>
          </div>

          <div className="flex items-center md:w-1/5 w-2/4 justify-evenly">
            <Link to={"/"} className="">
              <IoIosSearch className="text-2xl text-gray-600 pr-1 inline md:hidden" />
            </Link>

            <Link to={"/article/new"} className="flex ">
              <TfiPencilAlt className="text-2xl text-gray-600 pr-1" />
              <h1 className="text-base text-gray-600 hidden md:inline">
                Escreva
              </h1>
            </Link>

            <div>
              <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
            </div>
          </div>
        </header>
      </div>
      <div className="divider"></div>
    </>
  );
};

export default TopbarGeneral;
