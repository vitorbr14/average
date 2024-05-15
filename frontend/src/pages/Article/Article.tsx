import React, { useContext, useEffect, useState } from "react";
import TopbarGeneral from "../../components/General/TopbarGeneral";
import TitleArticle from "../../components/Article/TitleArticle";
import ArticleContentFooter from "../../components/Article/ArticleContentFooter";
import ArticleContent from "../../components/Article/ArticleContent";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import ArticleCommentsMenu from "../../components/Article/Comments/ArticleCommentsMenu";
import ArticleCommentsItems from "../../components/Article/Comments/ArticleCommentsItems";
import { ArticleContext } from "../../context/ArticleContext";
import { useArticleContext } from "../../hooks/useArticleContext";

export interface ArticleInterface {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  users: UserInterface[];
  category: any;
}

export interface UserInterface {
  userId: string;
  articleId: string;
}

const Article = () => {
  let { id } = useParams();

  const { article, getArticle, commentsOpen, handleComments } =
    useArticleContext();

  useEffect(() => {
    getArticle(id);
  }, []);

  return (
    <>
      <TopbarGeneral />
      <button onClick={() => console.log(article)}>Testar contexto</button>
      {/* <h1>{ContextAuth.currentUser?.email}</h1> */}
      <div className="container-article h-auto pb-40">
        {article && <TitleArticle />}

        <div>{article && <ArticleContent />}</div>
      </div>
      <div className=" bg-gray-100  ">
        <div className="container-article">
          <ArticleContentFooter />
        </div>
      </div>
      <ArticleCommentsMenu>
        <ArticleCommentsItems id={id} />
      </ArticleCommentsMenu>
      Menu
    </>
  );
};

export default Article;
