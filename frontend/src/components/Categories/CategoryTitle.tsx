import React from "react";
interface CategoryTypeProps {
  name: string;
  total: number;
}
const CategoryTitle = ({ name, total }: CategoryTypeProps) => {
  return (
    <div className="flex justify-center">
      <div className="text-center">
        <h1 className="md:text-5xl text-3xl  font-semibold py-6 ">{name}</h1>
        <h6 className="text-lg text-gray-500">{total} História contadas</h6>
      </div>
    </div>
  );
};

export default CategoryTitle;
