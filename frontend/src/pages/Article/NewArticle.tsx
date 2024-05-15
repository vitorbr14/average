import React from "react";
import ArticleEditor from "../../components/Article/NewArticle/ArticleEditor";

const NewArticle = () => {
  return (
    <div>
      <div className="container-article h-auto pb-40 ">
        <div className="flex justify-between items-center mt-6">
          <div>
            <h1 className="text-gray-500 text-sm">Novo Artigo</h1>
          </div>

          <div></div>
        </div>
        <ArticleEditor />
      </div>
    </div>
  );
};

export default NewArticle;
