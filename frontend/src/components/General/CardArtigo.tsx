import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
const CardArtigo = () => {
  const [favorite, setFavorite] = useState(false);
  return (
    <div className="grid grid-cols-6 py-4  md:w-4/5 w-full">
      <div className="md:col-span-4 col-span-4">
        <Link to={"/"} className="flex  items-center">
          <div className="h-6 w-6 bg-purple-700 rounded-full"></div>
          <div className="ml-4 text-lg">John Doe</div>
        </Link>

        <div className="py-3">
          <h1 className=" text-base md:text-lg font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </h1>
          <p className="text-sm text-gray-500 hidden md:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            reiciendis vitae eius non at facere iste ea repellat.
          </p>
        </div>
        <div className="text-gray-600 text-sm  flex justify-between">
          <div className="">
            <span>14/05, 2024 - </span>
            <span>3 minutos - </span>
            <span className="py-2 px-5  bg-purple-200 rounded-3xl text-xs m-1 hidden md:inline">
              Tech
            </span>
          </div>

          <div
            className="cursor-pointer "
            onClick={() => setFavorite(!favorite)}
          >
            {favorite ? (
              <MdFavorite className="text-2xl text-purple-500" />
            ) : (
              <MdFavoriteBorder className="text-2xl" />
            )}
          </div>
        </div>
      </div>

      <div className="md:col-span-2   col-span-2 flex justify-end">
        <div
          className="w-4/5 h-full"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </div>
  );
};

export default CardArtigo;
