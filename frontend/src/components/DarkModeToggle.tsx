import { useDarkMode } from "../context/DarkModeProvider";
import { FaMoon, FaSun } from "react-icons/fa";

// DarkModeToggle component
export function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <button
      onClick={toggleDarkMode}
      className="p-1.5 sm:p-2 rounded-full bg-transparent hover:bg-brand-primary/20 dark:hover:bg-brand-primary/30 text-brand-dark dark:text-brand-text transition-all duration-300 hover:text-brand-primary dark:hover:text-brand-primary hover:scale-110 border border-transparent hover:border-brand-primary/40"
      aria-label="Toggle dark mode"
      type="button"
    >
      <div className="w-4 h-4 sm:w-5 sm:h-5">
        {darkMode ? <FaSun size="100%" /> : <FaMoon size="100%" />}
      </div>
    </button>
  );
}
