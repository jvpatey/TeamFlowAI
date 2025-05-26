import { useDarkMode } from "../context/DarkModeProvider";
import { FaMoon, FaSun } from "react-icons/fa";

// DarkModeToggle component
export function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-gray-200 dark:bg-onyx text-onyx dark:text-timberwolf shadow hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors hover:text-keppel dark:hover:text-keppel"
      aria-label="Toggle dark mode"
      type="button"
    >
      {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  );
}
