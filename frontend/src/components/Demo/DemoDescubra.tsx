import React from "react";
import { Link } from "react-router-dom";
import { footer, topics } from "../../data/data";

const DemoDescubra = () => {
  return (
    <div className="pt-10">
      <h1 className="text-lg font-semibold">Explorem mais tópicos</h1>
      <div className="flex flex-wrap  md:w-3/4 mb-4">
        {topics.map((topic: any) => {
          return (
            <Link
              to={"/"}
              className="bg-purple-200 hover:bg-purple-400 text-black font-medium py-2 px-5 rounded-3xl text-sm m-1 transition-colors"
            >
              {topic}
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
