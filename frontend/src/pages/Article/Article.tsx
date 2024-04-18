import React from "react";
import TopbarGeneral from "../../components/General/TopbarGeneral";
import TitleArticle from "../../components/Article/TitleArticle";
import ArticleContentFooter from "../../components/Article/ArticleContentFooter";
import ArticleContent from "../../components/Article/ArticleContent";

const Article = () => {
  return (
    <>
      <TopbarGeneral />
      <div className="container-article h-auto pb-40">
        <TitleArticle />

        <div>{/* <ArticleContent /> */}</div>
      </div>
      <div className=" bg-gray-100  ">
        <div className="container-article">
          <ArticleContentFooter />
        </div>
      </div>
    </>
  );
};

export default Article;
