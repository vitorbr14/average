import React from "react";
import FooterArticleItem from "./FooterArticleItem";

const ArticleContentFooter = () => {
  return (
    <div className="">
      <div>
        <div className="font-medium md:text-2xl text-xl py-8 text-center md:py-16">
          Veja mais artigos de John Doe
        </div>
        <div className="grid md:grid-cols-2 md:gap-10 md:w-full">
          <FooterArticleItem />
          <FooterArticleItem />
          <FooterArticleItem />
          <FooterArticleItem />
        </div>
      </div>
    </div>
  );
};

export default ArticleContentFooter;
