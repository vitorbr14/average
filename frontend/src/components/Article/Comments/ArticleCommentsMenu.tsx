import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { useArticleContext } from "../../../hooks/useArticleContext";

type ArticleCommentsMenuProps = {
  children: any;
};
const ArticleCommentsMenu = ({ children }: ArticleCommentsMenuProps) => {
  const ContextAuth = useContext(AuthContext);

  if (!ContextAuth) {
    throw new Error("Teste Contexto invalido");
  }

  const { handleComments, commentsOpen } = useArticleContext();
  return (
    <div
      onClick={handleComments}
      className={`fixed inset-0 flex justify-center items-center transition-colors  ${
        commentsOpen ? "visible bg-black/70 " : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${
          commentsOpen ? "w-96" : "w-0"
        } h-full  fixed left-0 top-0  overflow-scroll transition-all duration-100 ease-in-out inset-0 bg-gray-200`}
      >
        {children}
      </div>
    </div>
  );
};

export default ArticleCommentsMenu;
