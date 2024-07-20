import axios from "axios";
import React, { useEffect, useState } from "react";

type categoriesType = {
  value: number;
  label: string;
};
const CategoriesMenu = () => {
  const [allCategories, setAllCategories] = useState<categoriesType[]>();
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
    <div>
      <div className="flex items-center md:w-9/12 bg-yellow-200 flex-wrap m-auto">
        {allCategories &&
          allCategories.map((category: categoriesType) => {
            return (
              <div className="bg-purple-200 hover:bg-purple-400 text-black font-medium py-2 px-5 rounded-3xl text-sm m-1 transition-colors">
                {category.label}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CategoriesMenu;
