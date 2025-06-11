import { BubbleMenu as TiptapBubbleMenu, Editor } from "@tiptap/react";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaStrikethrough,
  FaCode,
  FaLink,
} from "react-icons/fa";
import { useState } from "react";

interface BubbleMenuProps {
  editor: Editor;
}

// BubbleMenu component
export const BubbleMenu = ({ editor }: BubbleMenuProps) => {
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");

  const addLink = () => {
    if (linkUrl) {
      editor.chain().focus().setLink({ href: linkUrl }).run();
      setLinkUrl("");
      setShowLinkInput(false);
    }
  };

  const removeLink = () => {
    editor.chain().focus().unsetLink().run();
  };

  const BubbleButton = ({
    onClick,
    isActive = false,
    children,
    title,
  }: {
    onClick: () => void;
    isActive?: boolean;
    children: React.ReactNode;
    title: string;
  }) => (
    <button
      onClick={onClick}
      title={title}
      className={`p-2 rounded-md transition-all duration-200 ${
        isActive
          ? "bg-brand-primary text-white"
          : "bg-white/90 dark:bg-gray-800/90 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
      } hover:shadow-md transform hover:scale-105`}
    >
      {children}
    </button>
  );

  return (
    <TiptapBubbleMenu
      editor={editor}
      tippyOptions={{ duration: 100 }}
      className="flex items-center gap-1 p-2 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-lg shadow-xl border border-gray-200/50 dark:border-gray-700/50"
    >
      {showLinkInput ? (
        <div className="flex items-center gap-2">
          <input
            type="url"
            placeholder="Enter URL..."
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addLink();
              } else if (e.key === "Escape") {
                setShowLinkInput(false);
                setLinkUrl("");
              }
            }}
            className="px-2 py-1 text-sm border rounded focus:outline-none focus:border-brand-primary bg-white dark:bg-gray-700 dark:border-gray-600"
            autoFocus
          />
          <button
            onClick={addLink}
            className="px-2 py-1 text-xs bg-brand-primary text-white rounded hover:bg-brand-secondary"
          >
            Add
          </button>
          <button
            onClick={() => {
              setShowLinkInput(false);
              setLinkUrl("");
            }}
            className="px-2 py-1 text-xs bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      ) : (
        <>
          <BubbleButton
            onClick={() => editor.chain().focus().toggleBold().run()}
            isActive={editor.isActive("bold")}
            title="Bold"
          >
            <FaBold />
          </BubbleButton>

          <BubbleButton
            onClick={() => editor.chain().focus().toggleItalic().run()}
            isActive={editor.isActive("italic")}
            title="Italic"
          >
            <FaItalic />
          </BubbleButton>

          <BubbleButton
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            isActive={editor.isActive("underline")}
            title="Underline"
          >
            <FaUnderline />
          </BubbleButton>

          <BubbleButton
            onClick={() => editor.chain().focus().toggleStrike().run()}
            isActive={editor.isActive("strike")}
            title="Strikethrough"
          >
            <FaStrikethrough />
          </BubbleButton>

          <BubbleButton
            onClick={() => editor.chain().focus().toggleCode().run()}
            isActive={editor.isActive("code")}
            title="Inline Code"
          >
            <FaCode />
          </BubbleButton>

          <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1" />

          {editor.isActive("link") ? (
            <BubbleButton onClick={removeLink} title="Remove Link">
              <span className="text-red-500">
                <FaLink />
              </span>
            </BubbleButton>
          ) : (
            <BubbleButton
              onClick={() => setShowLinkInput(true)}
              title="Add Link"
            >
              <FaLink />
            </BubbleButton>
          )}
        </>
      )}
    </TiptapBubbleMenu>
  );
};
