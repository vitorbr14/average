import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { useState } from "react";
import { ArticleInterface } from "../../pages/Article/Article";
import Blockquote from "@tiptap/extension-blockquote";
import BulletList from "@tiptap/extension-bullet-list";
import Heading from "@tiptap/extension-heading";
import { useArticleContext } from "../../hooks/useArticleContext";

const ArticleContent = () => {
  const { article } = useArticleContext();
  const [editable, setEditable] = useState(false);
  const editor = useEditor({
    editable,
    content: article.content,
    extensions: [
      StarterKit.configure({}),

      Heading.configure({
        HTMLAttributes: {
          class: "text-2xl font-bold",
          levels: [1],
        },
      }),

      BulletList.configure({
        HTMLAttributes: {
          class: "list", // Adicione suas classes Tailwind CSS aqui
          itemTypeName: "listItem",
          keepMarks: true,
        },
      }),
      Blockquote.configure({
        HTMLAttributes: {
          class: "blockQuoute",
        },
      }),
    ],
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="py-10">
      <EditorContent editor={editor} />
    </div>
  );
};

export default ArticleContent;
