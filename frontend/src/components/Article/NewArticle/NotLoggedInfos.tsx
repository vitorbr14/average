import React from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { FaRegComments } from "react-icons/fa";
import { useArticleContext } from "../../../hooks/useArticleContext";

type notLoggedProps = {
  likes: number;
};
const NotLoggedInfos = ({ likes }: notLoggedProps) => {
  const { article, getUserName, username, handleComments, allComments } =
    useArticleContext();

  return (
    <>
      <div className="cursor-pointer flex items-center mr-5">
        <MdFavoriteBorder className="text-2xl text-purple-500" />
        <span className="text-sm text-gray-500 ml-2">{likes}</span>
      </div>
      <div className="flex items-center " onClick={handleComments}>
        <FaRegComments className="text-2xl text-purple-500" />
        <span className="text-sm text-gray-500 ml-2">{allComments.length}</span>
      </div>
    </>
  );
};

export default NotLoggedInfos;
