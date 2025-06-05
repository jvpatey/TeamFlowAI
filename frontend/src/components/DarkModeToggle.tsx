import { useDarkMode } from "../context/DarkModeProvider";
import { FaMoon, FaSun } from "react-icons/fa";

// DarkModeToggle component
export function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-transparent hover:bg-keppel/20 dark:hover:bg-keppel/30 text-onyx dark:text-timberwolf transition-all duration-300 hover:text-keppel dark:hover:text-keppel hover:scale-110 border border-transparent hover:border-keppel/40"
      aria-label="Toggle dark mode"
      type="button"
    >
      {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  );
}
