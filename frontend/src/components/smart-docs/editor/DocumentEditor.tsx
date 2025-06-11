import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import CharacterCount from "@tiptap/extension-character-count";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableHeader from "@tiptap/extension-table-header";
import TableCell from "@tiptap/extension-table-cell";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import Underline from "@tiptap/extension-underline";
import { EditorToolbar } from "./EditorToolbar";
import { BubbleMenu } from "./BubbleMenu";

// interface for the DocumentEditor component
interface DocumentEditorProps {
  content?: string;
  onUpdate?: (content: string) => void;
  placeholder?: string;
  editable?: boolean;
  className?: string;
}

// DocumentEditor component
export const DocumentEditor = ({
  content = "",
  onUpdate,
  placeholder = 'Start writing or type "/" for commands...',
  editable = true,
  className = "",
}: DocumentEditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),
      Placeholder.configure({
        placeholder,
      }),
      CharacterCount.configure({
        limit: 10000,
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class:
            "text-brand-primary hover:text-brand-secondary underline cursor-pointer",
        },
      }),
      Image.configure({
        HTMLAttributes: {
          class: "max-w-full h-auto rounded-lg shadow-md",
        },
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      Underline,
    ],
    content,
    editable,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onUpdate?.(html);
    },
    editorProps: {
      attributes: {
        class: "prose prose-lg dark:prose-invert max-w-none focus:outline-none",
      },
    },
  });

  if (!editor) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="loading loading-spinner loading-lg text-brand-primary"></div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {/* Toolbar */}
      <EditorToolbar editor={editor} />

      {/* Bubble Menu for text selection */}
      <BubbleMenu editor={editor} />

      {/* Editor Content */}
      <div className="relative">
        <EditorContent
          editor={editor}
          className="min-h-[400px] p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md rounded-lg border-2 border-gray-200/30 dark:border-gray-700/30 focus-within:border-brand-primary/50 transition-all duration-300"
        />

        {/* Character Count */}
        <div className="absolute bottom-2 right-4 text-xs text-gray-500 dark:text-gray-400">
          {editor.storage.characterCount.characters()}/
          {
            editor.extensionManager.extensions.find(
              (ext) => ext.name === "characterCount"
            )?.options.limit
          }{" "}
          characters
        </div>
      </div>
    </div>
  );
};
