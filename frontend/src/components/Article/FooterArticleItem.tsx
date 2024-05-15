import React from "react";
import { Link } from "react-router-dom";
import { Iarticle } from "../../context/ArticleContext";
import { readingTime } from "reading-time-estimator";
type FooterArticleItemProps = {
  shuffledItem: Iarticle;
};
const FooterArticleItem = ({ shuffledItem }: FooterArticleItemProps) => {
  const time = readingTime(shuffledItem.content, 238, "pt-br");
  return (
    <>
      <Link
        reloadDocument
        to={`/article/${shuffledItem.id}`}
        className="md:col-span-1  md:h-80 h-auto mb-12 rounded-sm"
      >
        <div className="bg-gradient-to-tr from-purple-600 to-fuchsia-500 md:h-2/5 h-32"></div>
        <div className="md:pt-8 pt-4">
          <h1 className="text-xl font-bold pb-3">{shuffledItem.title}</h1>
          <p className="text-sm text-gray7600 pb-3 font-normal">
            {shuffledItem.preview}
          </p>
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-gray-700">{time.text} </span>
          <span className="text-xs text-gray-700">14 de Maio, 2004</span>
        </div>
      </Link>
    </>
  );
};

export default FooterArticleItem;
