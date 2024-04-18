import React, { useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { FaRegComments } from "react-icons/fa";
import { Link } from "react-router-dom";
import ArticleComments from "./ArticleComments";

const AuthorArticle = () => {
  const [favorite, setFavorite] = useState(false);
  return (
    <>
      <Link to={"/"} className="flex py-2">
        <div>
          <div className="h-12 w-12 rounded-full bg-purple-700 mr-4"></div>
        </div>
        <div className="flex flex-col ">
          <div className="flex">
            <h1 className="text-base font-bold mr-4">John Doe</h1>
            <button className="text-sm italic text-purple-800 hover:text-purple-600">
              seguir
            </button>
          </div>
          <div className="text-sm text-gray-400 flex">
            <h4>5 min de leitura • 5 dias atrás</h4>
          </div>
        </div>
      </Link>
      <div className="divider py-2"></div>
      <div className="flex py-3">
        <div
          className="cursor-pointer flex items-center mr-5 "
          onClick={() => setFavorite(!favorite)}
        >
          {favorite ? (
            <MdFavorite className="text-2xl text-purple-500" />
          ) : (
            <MdFavoriteBorder className="text-2xl text-purple-500" />
          )}
          <span className="text-sm text-gray-500 ml-2">1405</span>
        </div>
        <div className="flex items-center">
          <FaRegComments className="text-2xl text-purple-500" />
          <span className="text-sm text-gray-500 ml-2">76</span>
        </div>
      </div>
      <div className="divider"></div>
    </>
  );
};

export default AuthorArticle;
