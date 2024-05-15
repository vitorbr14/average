import React, { useRef, useState } from "react";
import {
  EditorProvider,
  FloatingMenu,
  BubbleMenu,
  useEditor,
  EditorContent,
  useCurrentEditor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import BulletList from "@tiptap/extension-bullet-list";
import Blockquote from "@tiptap/extension-blockquote";
import ArticleEditorButtons from "./ArticleEditorButtons";

const Tiptap = ({
  content,
  onChange,
  errors,
}: {
  content: string;
  onChange: any;
  errors: any;
}) => {
  const editor = useEditor({
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
    content,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: "tiptapEditor",
      },
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <>
      <ArticleEditorButtons editor={editor} />
      <EditorContent editor={editor} />
      <p className="text-red-500 font-semibold py-5">
        {errors.content?.message}
      </p>
    </>
  );
};

export default Tiptap;
