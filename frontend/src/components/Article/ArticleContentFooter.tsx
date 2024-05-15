import React, { useEffect, useState } from "react";
import FooterArticleItem from "./FooterArticleItem";
import { useArticleContext } from "../../hooks/useArticleContext";
import { ArticleContext, Iarticle } from "../../context/ArticleContext";
import { Link, useParams } from "react-router-dom";

const ArticleContentFooter = () => {
  const { id } = useParams();
  const {
    article,
    getAllArticlesFromUserShuffled,
    allArticlesFromUserShuffled,
    username,
  } = useArticleContext();

  useEffect(() => {
    if (article) {
      getAllArticlesFromUserShuffled(article.users[0].userId);
    }
  }, [article]);

  return (
    <div className="">
      <div>
        <div className="font-medium md:text-2xl text-xl py-8 text-center md:py-16">
          Veja mais artigos de {username}
        </div>
        <div className="grid md:grid-cols-2 md:gap-10 md:w-full">
          {allArticlesFromUserShuffled &&
            allArticlesFromUserShuffled
              .slice(0, 4)
              .map((shuffledItem: Iarticle) => {
                return <FooterArticleItem shuffledItem={shuffledItem} />;
              })}
        </div>
      </div>
    </div>
  );
};

export default ArticleContentFooter;
