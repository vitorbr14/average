import React from "react";
import { BsPlusLg } from "react-icons/bs";
const FeedMenu = () => {
  return (
    <>
      <div className="flex py-4">
        <div>
          <BsPlusLg className="text-3xl text-gray-400" />
        </div>
        <div className="flex justify-evenly w-full items-center text-gray-500">
          <div>
            <h1 className="text-base md:text-base">Seguindo</h1>
          </div>
          <div>
            <h1 className="text-base md:text-base">For you</h1>
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </>
  );
};

export default FeedMenu;
