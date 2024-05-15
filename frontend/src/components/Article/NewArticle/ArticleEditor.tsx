import React, { useContext, useRef, useState } from "react";
import {
  EditorProvider,
  FloatingMenu,
  BubbleMenu,
  useEditor,
  EditorContent,
  useCurrentEditor,
} from "@tiptap/react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Tiptap from "./Tiptap";
import ArticleEditorButtons from "./ArticleEditorButtons";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";
import ConfirmArticleModal from "./ConfirmArticleModal";
import SetCategories from "./SetCategories";
import { set } from "firebase/database";
import Spinner from "../../General/Spinner";

const content = "";
export type Inputs = {
  title: string;
  content: string;
  categoryId: number;
  Select: any;
  preview: string;
};

const ArticleEditor = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const ContextAuth = useContext(AuthContext);

  if (!ContextAuth) {
    throw new Error("Teste Contexto invalido");
  }

  const { currentUser } = ContextAuth;

  const handleClickModal = () => {
    setOpen(!open);
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data.title);
    const newObj = {
      title: data.title,
      content: data.content,
      category: data.Select.value,
      preview: data.preview,
    };

    console.log(newObj);
    axios
      .post("http://localhost:5656/api/v1/articles/", newObj, {
        headers: {
          "x-firebase-appcheck": `Bearer ${currentUser?.accessToken}`,
        },
      })
      .then(function (response) {
        if (response) {
          setLoading(true);
          navigate(`/article/${response.data.id}`);
        }
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

  const content = "<p>Comece a escrever...</p>";

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="w-full  py-4 drop-shadow-md placeholder:pl-5"
          placeholder="Título"
          {...register("title")}
        />

        <input
          className="w-full  py-4 drop-shadow-md placeholder:pl-5 my-4"
          placeholder="Pequeno resumo"
          {...register("preview")}
        />
        <Controller
          control={control}
          rules={{
            required: "Campo obrigatório",
          }}
          name="content"
          render={({ field }) => (
            <Tiptap
              errors={errors}
              onChange={field.onChange} // send value to hook form
              content={content}
            />
          )}
        />

        {loading ? (
          <Spinner />
        ) : (
          <button
            className="text-sm bg-purple-800 hover:bg-purple-600 transition-all text-white p-2 rounded-full my-5"
            type="button"
            onClick={handleClickModal}
          >
            Publicar
          </button>
        )}

        <>
          <ConfirmArticleModal open={open} handleClickModal={handleClickModal}>
            <SetCategories register={register} control={control} />
          </ConfirmArticleModal>
        </>
      </form>
    </div>
  );
};

export default ArticleEditor;
