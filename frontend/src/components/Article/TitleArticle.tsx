import React from "react";
import AuthorArticle from "./AuthorArticle";
import ArticleContent from "./ArticleContent";

const TitleArticle = () => {
  return (
    <>
      <div className="pt-10">
        <div className="uppercase text-sm font-normal text-gray-500 pb-4">
          Category
        </div>
        <div>
          <h1 className="text-3xl font-bold pb-4">
            Stop Listening to Music, It Will Change Your Life Stop Listening to
            Music, It Will Change Your Life
          </h1>
          <h3 className="text-xl font-medium text-gray-400 pb-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis iste
            facilis laborum dicta laudantium in?
          </h3>
        </div>
        <div>
          <AuthorArticle />
        </div>
      </div>
    </>
  );
};

export default TitleArticle;
