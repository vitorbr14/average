import React from "react";
import { useArticleContext } from "../../../hooks/useArticleContext";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

import ReactTimeAgo from "react-time-ago";
type allCommentsProps = {
  id: String;
  commentary: String;
  userId: String;
  name: string;
  createdAt: any;
};

TimeAgo.addDefaultLocale(en);

const Comment = ({
  commentary,

  name,
  createdAt,
}: allCommentsProps) => {
  const { article } = useArticleContext();
  return (
    <div className="py-4">
      <div>
        <div className="flex">
          <div className="w-9 h-9 rounded-full bg-purple-800 mr-4 ml-4"></div>
          <div>
            <h1 className="font-semibold text-sm">{name}</h1>
            <h1 className="font- text-sm text-gray-600">
              <ReactTimeAgo date={createdAt} locale="en-US" />
            </h1>
          </div>
        </div>
        <div className="w-5/5 m-auto pb-4 pt-2 ">
          <p className="text-base text-gray-600">{commentary}</p>
        </div>
      </div>

      <div className="divider"></div>
    </div>
  );
};

export default Comment;
