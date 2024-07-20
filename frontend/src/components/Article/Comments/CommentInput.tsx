import React, { useContext, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";
import { useArticleContext } from "../../../hooks/useArticleContext";

type Inputs = {
  comment: string;
};

type CommentInputProps = {
  id: string;
  allComments: any;
  setAllComents: any;
};
export const CommentInput = ({
  id,

  setAllComents,
}: CommentInputProps) => {
  const ContextAuth = useContext(AuthContext);

  if (!ContextAuth) {
    throw new Error("Teste Contexto invalido");
  }

  const { username } = useArticleContext();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const commentObj = {
      comment: data.comment,
      articleId: id,
      userId: ContextAuth.currentUser.uid,
    };

    axios
      .post(import.meta.env.VITE_API_URL + "api/v1/comments/", commentObj, {
        headers: {
          "x-firebase-appcheck": `Bearer ${ContextAuth.currentUser?.accessToken}`,
        },
      })
      .then(function (response) {
        setAllComents((prevComments: any) => [...prevComments, response.data]);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

  return (
    <div>
      {ContextAuth.isLoggedIn ? (
        <>
          <div className="bg-white py-3">
            <div className="flex items-center">
              <div className="w-9 h-9 rounded-full bg-purple-800 mr-4 ml-4"></div>
              <div>
                <h1 className="text-gray-500">{}</h1>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <textarea
              className="w-full h-36 pl-3 py-3 focus:outline-none"
              placeholder="Escreva um comentário..."
              {...register("comment")}
            ></textarea>
            <button className="p-2 bg-purple-800 text-white rounded-xl ">
              Enviar
            </button>
          </form>
        </>
      ) : (
        <h1 className="font-semibold py-6">Faça login para comentar.</h1>
      )}
    </div>
  );
};
