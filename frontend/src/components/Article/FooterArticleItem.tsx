import React from "react";
import { Link } from "react-router-dom";

const FooterArticleItem = () => {
  return (
    <>
      <Link to={"/"} className="md:col-span-1  md:h-96 h-auto mb-12 rounded-sm">
        <div className="bg-gradient-to-tr from-purple-600 to-fuchsia-500 md:h-2/5 h-32"></div>
        <div className="md:pt-8 pt-4">
          <h3 className="text-gray-700 text-sm">John Doe</h3>
          <h1 className="text-xl font-bold pb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </h1>
          <p className="text-sm text-gray7600 pb-3 font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            quibusdam?
          </p>
        </div>
        <div>
          <span className="text-xs text-gray-700">
            7 minutos de leitura - 14 de Maio, 2004
          </span>
        </div>
      </Link>
    </>
  );
};

export default FooterArticleItem;
