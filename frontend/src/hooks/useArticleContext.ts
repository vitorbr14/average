import { useContext } from "react";
import { ArticleContext } from "../context/ArticleContext";

export function useArticleContext() {
  const context = useContext(ArticleContext);
  if (!context) {
    throw new Error(
      "useArticleContext deve ser usado dentro de um ArticleContextProvider"
    );
  }
  return context;
}
