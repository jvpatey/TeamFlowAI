import { Editor } from "@tiptap/react";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaStrikethrough,
  FaCode,
  FaLink,
  FaListUl,
  FaListOl,
  FaQuoteLeft,
  FaImage,
  FaTable,
  FaTasks,
  FaUndo,
  FaRedo,
  FaHeading,
} from "react-icons/fa";
import { useState } from "react";

interface EditorToolbarProps {
  editor: Editor;
}

// EditorToolbar component
export const EditorToolbar = ({ editor }: EditorToolbarProps) => {
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");

  const addLink = () => {
    if (linkUrl) {
      editor.chain().focus().setLink({ href: linkUrl }).run();
      setLinkUrl("");
      setShowLinkInput(false);
    }
  };

  const addImage = () => {
    const url = window.prompt("Enter image URL:");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const addTable = () => {
    editor
      .chain()
      .focus()
      .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
      .run();
  };

  const ToolbarButton = ({
    onClick,
    isActive = false,
    disabled = false,
    children,
    title,
  }: {
    onClick: () => void;
    isActive?: boolean;
    disabled?: boolean;
    children: React.ReactNode;
    title: string;
  }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={`p-2 rounded-md transition-all duration-200 ${
        isActive
          ? "bg-brand-primary text-white shadow-md"
          : "bg-white/50 dark:bg-gray-700/50 hover:bg-white/70 dark:hover:bg-gray-700/70 text-gray-700 dark:text-gray-300"
      } ${
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "hover:shadow-md transform hover:scale-105"
      }`}
    >
      {children}
    </button>
  );

  return (
    <div className="flex flex-wrap items-center gap-2 p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-lg border-2 border-gray-200/30 dark:border-gray-700/30 mb-4">
      {/* Text Formatting */}
      <div className="flex items-center gap-1 border-r border-gray-300/50 dark:border-gray-600/50 pr-2">
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBold().run()}
          isActive={editor.isActive("bold")}
          title="Bold"
        >
          <FaBold />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleItalic().run()}
          isActive={editor.isActive("italic")}
          title="Italic"
        >
          <FaItalic />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          isActive={editor.isActive("underline")}
          title="Underline"
        >
          <FaUnderline />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleStrike().run()}
          isActive={editor.isActive("strike")}
          title="Strikethrough"
        >
          <FaStrikethrough />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleCode().run()}
          isActive={editor.isActive("code")}
          title="Inline Code"
        >
          <FaCode />
        </ToolbarButton>
      </div>

      {/* Headings */}
      <div className="flex items-center gap-1 border-r border-gray-300/50 dark:border-gray-600/50 pr-2">
        <ToolbarButton
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          isActive={editor.isActive("heading", { level: 1 })}
          title="Heading 1"
        >
          <span className="flex items-center gap-1">
            <FaHeading />
            <span className="text-xs">1</span>
          </span>
        </ToolbarButton>

        <ToolbarButton
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          isActive={editor.isActive("heading", { level: 2 })}
          title="Heading 2"
        >
          <span className="flex items-center gap-1">
            <FaHeading />
            <span className="text-xs">2</span>
          </span>
        </ToolbarButton>

        <ToolbarButton
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          isActive={editor.isActive("heading", { level: 3 })}
          title="Heading 3"
        >
          <span className="flex items-center gap-1">
            <FaHeading />
            <span className="text-xs">3</span>
          </span>
        </ToolbarButton>
      </div>

      {/* Lists and Blocks */}
      <div className="flex items-center gap-1 border-r border-gray-300/50 dark:border-gray-600/50 pr-2">
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          isActive={editor.isActive("bulletList")}
          title="Bullet List"
        >
          <FaListUl />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          isActive={editor.isActive("orderedList")}
          title="Numbered List"
        >
          <FaListOl />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleTaskList().run()}
          isActive={editor.isActive("taskList")}
          title="Task List"
        >
          <FaTasks />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          isActive={editor.isActive("blockquote")}
          title="Quote"
        >
          <FaQuoteLeft />
        </ToolbarButton>
      </div>

      {/* Media and Links */}
      <div className="flex items-center gap-1 border-r border-gray-300/50 dark:border-gray-600/50 pr-2">
        <div className="relative">
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
                className="px-2 py-1 text-sm border rounded focus:outline-none focus:border-brand-primary"
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
            <ToolbarButton
              onClick={() => setShowLinkInput(true)}
              isActive={editor.isActive("link")}
              title="Add Link"
            >
              <FaLink />
            </ToolbarButton>
          )}
        </div>

        <ToolbarButton onClick={addImage} title="Add Image">
          <FaImage />
        </ToolbarButton>

        <ToolbarButton onClick={addTable} title="Add Table">
          <FaTable />
        </ToolbarButton>
      </div>

      {/* History */}
      <div className="flex items-center gap-1">
        <ToolbarButton
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          title="Undo"
        >
          <FaUndo />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          title="Redo"
        >
          <FaRedo />
        </ToolbarButton>
      </div>
    </div>
  );
};
