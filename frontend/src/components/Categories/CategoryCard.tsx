import React from "react";
import { AllArticle } from "../../pages/Categories/Categories";
import { Link } from "react-router-dom";
interface CategoryCardProps {
  article: AllArticle;
}

const CategoryCard = ({ article }: CategoryCardProps) => {
  return (
    <Link to={`/article/${article.id}`}>
      <div className="relative flex flex-col mb-6 mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl md:w-96 w-full m-auto">
        <div className="relative h-56 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
            alt="card-image"
          />
        </div>
        <div className="p-6">
          <h5 className="block mb-2 font-sans text-base antialiased  leading-snug tracking-normal text-blue-gray-900">
            John Doe
          </h5>
          <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {article.title}
          </h5>
          <p className="block  text-base antialiased font-base leading-relaxed text-inherit">
            {article.preview}
          </p>
        </div>
        <div className="p-6 pt-0 text-sm text-gray-500">
          <span>10 min read </span> - <span>4 dias atrás</span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
