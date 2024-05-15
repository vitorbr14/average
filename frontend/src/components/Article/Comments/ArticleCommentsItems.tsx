import React, { useContext, useEffect, useState } from "react";
import { CommentInput } from "./CommentInput";
import Comment from "./Comment";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
import { useArticleContext } from "../../../hooks/useArticleContext";
import { ArticleComment } from "../../../context/ArticleContext";

type ArticleCommentsItemsProps = {
  id: any;
};

const ArticleCommentsItems = ({ id }: ArticleCommentsItemsProps) => {
  const ContextAuth = useContext(AuthContext);

  if (!ContextAuth) {
    throw new Error("Teste Contexto invalido");
  }

  const { allComments, setAllComents, getCommentsFromArticle } =
    useArticleContext();
  useEffect(() => {
    getCommentsFromArticle(id);
  }, []);

  return (
    <div className="p-5">
      <div>
        <h1 className="text-2xl font-semibold pb-6">
          Comentários: {allComments?.length}
        </h1>
      </div>
      <CommentInput
        id={id}
        allComments={allComments}
        setAllComents={setAllComents}
      />
      {/* 
     
    
  
      */}

      {allComments ? (
        allComments.map((comment: ArticleComment) => {
          return (
            <Comment
              id={comment.commentId}
              commentary={comment.commentary}
              userId={comment.userId}
              name={comment.name}
              createdAt={comment.createdAt}
            />
          );
        })
      ) : (
        <h1>Nenhum comentário</h1>
      )}
    </div>
  );
};

export default ArticleCommentsItems;
