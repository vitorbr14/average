import React from "react";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import BulletList from "@tiptap/extension-bullet-list";
import Blockquote from "@tiptap/extension-blockquote";
import { FaBold } from "react-icons/fa";
import { FaItalic } from "react-icons/fa";
import { FaHeading } from "react-icons/fa";
import { FaStrikethrough } from "react-icons/fa";
import { FaList } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa";
import { GoHorizontalRule } from "react-icons/go";
import { type Editor } from "@tiptap/react";

type Props = {
  editor: Editor | null;
};

const ArticleEditorButtons = ({ editor }: Props) => {
  if (!editor) {
    return null;
  }
  return (
    <div>
      <div className="buttons_tiptap ">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "is-active" : ""}
        >
          <FaBold />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is-active" : ""}
        >
          <FaItalic />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "is-active" : ""}
        >
          <FaStrikethrough />
        </button>

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive("heading", { level: 1 }) ? "is-active" : ""
          }
        >
          <FaHeading />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "is-active" : ""}
        >
          <FaList />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive("blockquote") ? "is-active" : ""}
        >
          <FaQuoteLeft />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          <GoHorizontalRule />
        </button>
      </div>
    </div>
  );
};

export default ArticleEditorButtons;
