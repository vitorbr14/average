import React, { useContext } from "react";
import AuthorArticle from "./AuthorArticle";
import ArticleContent from "./ArticleContent";
import { ArticleInterface, UserInterface } from "../../pages/Article/Article";
import { ArticleContext } from "../../context/ArticleContext";

const TitleArticle = () => {
  const ContextArticle = useContext(ArticleContext);

  if (!ContextArticle) {
    throw new Error("Teste Contexto invalido");
  }

  const { article } = ContextArticle;

  return (
    <>
      <div className="pt-10">
        <div className="uppercase text-sm font-normal text-gray-500 pb-4 italic">
          {article.category[0].name}
        </div>

        <div>
          <h1 className="text-3xl font-bold pb-4">{article.title}</h1>
          <h3 className="text-xl font-medium text-gray-400 pb-6">
            {article.preview}
          </h3>
        </div>
        <div>
          {" "}
          <AuthorArticle />
        </div>
      </div>
    </>
  );
};

export default TitleArticle;
