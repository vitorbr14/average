import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { footer, topics } from "../../data/data";
import axios from "axios";

type categoryType = {
  value: number;
  label: string;
};
const DemoDescubra = () => {
  const [allCategories, setAllCategories] = useState<categoryType[]>();

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL + "api/v1/category")

      .then(function (response) {
        setAllCategories(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div className="pt-10">
      <h1 className="text-lg font-semibold">Explorem mais tópicos</h1>
      <div className="flex flex-wrap  md:w-3/4 mb-4">
        {allCategories &&
          allCategories.map((category: categoryType) => {
            return (
              <Link
                to={`/categories/${category.value}`}
                className="bg-purple-200 hover:bg-purple-400 text-black font-medium py-2 px-5 rounded-3xl text-sm m-1 transition-colors"
              >
                {category.label}
              </Link>
            );
          })}
      </div>
      <Link
        to="/"
        className="text-sm text-purple-800 hover:text-purple-600 font-semibold m-2  transition-colors"
      >
        Veja mais tópicos
      </Link>
    </div>
  );
};

export default DemoDescubra;
