import React, { createContext, useState, useContext, useEffect } from "react";

import axios from "axios";

// Define o tipo para o Contexto
interface ArticleContextType {
  article: any;
  getArticle: any;
  getUserInfos: any;
  userDetails: any;
  handleComments: any;
  commentsOpen: any;
  allComments: any;
  setAllComents: any;
  getCommentsFromArticle: any;
  allArticlesFromUser: any;
  getAllArticlesFromUser: any;
  getAllArticlesFromUserShuffled: any;
  allArticlesFromUserShuffled: any;
  getUserName: any;
  username: any;
}

interface ArticleType {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  users: UserArticleRelation[];
  category: Category[];
}

interface UserArticleRelation {
  userId: string;
  articleId: string;
}

interface Category {
  id: number;
  name: string;
}

export type ArticleComment = {
  commentId: string;
  createdAt: string;
  name: string;
  commentary: string;
  userId: string;
};

// Cria o Contexto
export const ArticleContext = createContext<ArticleContextType | null>(null);

interface ArticleContextProviderType {
  children: React.ReactNode;
}

export interface Iarticle {
  content: string;
  createdAt: string;
  id: string;
  title: string;
  preview: string;
}

// Cria o Provedor do Contexto
export const ArticleContextProvider: React.FC<ArticleContextProviderType> = ({
  children,
}) => {
  const [article, setArticle] = useState<ArticleType>();
  const [userDetails, setUserDetails] = useState<any>();
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [allComments, setAllComents] = useState<ArticleComment[] | null>([]);
  const [allArticlesFromUser, setallArticlesFromUser] = useState<Iarticle[]>();
  const [allArticlesFromUserShuffled, setallArticlesFromUserShuffled] =
    useState<Iarticle[]>();

  const [username, setusername] = useState<string | null>();

  const getArticle = (id: string) => {
    axios
      .get(import.meta.env.VITE_API_URL + `api/v1/article/${id}/`)
      .then(function (response) {
        setArticle(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        // aqui temos acesso ao erro, quando alguma coisa inesperada acontece:
        console.log(error);
      });
  };

  const getUserInfos = (id: string) => {
    axios
      .get(import.meta.env.VITE_API_URL + `api/v1/auth/userinfo/${id}`)
      .then((response) => {
        setUserDetails(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar o usuário:", error);
      });
  };

  const getUserName = (id: string) => {
    axios
      .get(import.meta.env.VITE_API_URL + `api/v1/getcomments/getuser/${id}`)
      .then((response) => {
        setusername(response.data.name);
      })
      .catch((error) => {
        console.error("Erro ao buscar o usuário:", error);
      });
  };

  const handleComments = () => {
    setCommentsOpen(!commentsOpen);
  };

  const getCommentsFromArticle = (id: string) => {
    axios
      .get(import.meta.env.VITE_API_URL + `api/v1/getcomments/${id}/`)
      .then((response) => {
        setAllComents(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar comentários:", error);
      });
  };

  const getAllArticlesFromUser = (id: string) => {
    axios
      .get(import.meta.env.VITE_API_URL + `api/v1/articlessuggestion/${id}`)
      .then((response) => {
        setallArticlesFromUser(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar artigos:", error);
      });
  };

  const getAllArticlesFromUserShuffled = (id: string) => {
    axios
      .get(
        import.meta.env.VITE_API_URL +
          `api/v1/articlessuggestion/shuffled/${id}`
      )
      .then((response) => {
        setallArticlesFromUserShuffled(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar artigos:", error);
      });
  };
  return (
    <ArticleContext.Provider
      value={{
        article,
        getArticle,
        getUserInfos,
        userDetails,
        commentsOpen,
        handleComments,
        allComments,
        setAllComents,
        getCommentsFromArticle,
        allArticlesFromUser,
        getAllArticlesFromUser,
        allArticlesFromUserShuffled,
        getAllArticlesFromUserShuffled,
        getUserName,
        username,
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
};
