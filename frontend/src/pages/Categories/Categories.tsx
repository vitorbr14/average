import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import CategoryTitle from "../../components/Categories/CategoryTitle";
import CategoryCard from "../../components/Categories/CategoryCard";
import axios from "axios";

export interface AllArticlesType {
  name: string;
  AllArticles: AllArticle[];
}

export interface AllArticle {
  id: string;
  title: string;
  content: string;
  preview: string;
  createdAt: Date;
}

const Categories = () => {
  const [allArticles, setAllArticles] = useState<AllArticlesType>();
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5656/api/v1/articlessuggestion/category/${id}`)
      .then(function (response) {
        setAllArticles(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="container mx-auto h-screen">
      <div className="py-28">
        {" "}
        {allArticles && (
          <CategoryTitle
            name={allArticles?.name}
            total={allArticles.AllArticles.length}
          />
        )}
      </div>

      <div className="grid md:grid-cols-3 gap-1 grid-cols-1 justify-center ">
        {allArticles &&
          allArticles.AllArticles.map((article: AllArticle) => {
            return <CategoryCard article={article} />;
          })}
      </div>
    </div>
  );
};

export default Categories;
