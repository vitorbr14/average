import React from "react";
import { Link } from "react-router-dom";

const QuemSeguirUsuario = () => {
  return (
    <div className="hidden md:flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 md:w-3/4">
      <div className="w-12 h-12 bg-purple-200 rounded-full flex-shrink-0"></div>
      <div className="px-4">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
          John Doe
        </h3>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          mollitia.
        </p>
      </div>
      <button className="px-2 py-1 text-sm font-semibold leading-tight text-white transition-colors duration-200 transform bg-purple-600 rounded-md dark:bg-violet-600 hover:bg-purple-500 dark:hover:bg-violet-500 focus:outline-none focus:bg-purple-400 dark:focus:bg-violet-500">
        Seguir
      </button>
    </div>
  );
};

export default QuemSeguirUsuario;
