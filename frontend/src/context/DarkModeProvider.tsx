import React, { createContext, useContext, useEffect, useState } from "react";

// Define the props for the DarkModeProvider component
interface DarkModeContextProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

// Define the DarkModeContext
const DarkModeContext = createContext<DarkModeContextProps | undefined>(
  undefined
);

// Define the DarkModeProvider component
export function DarkModeProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      // Default to dark mode
      return (
        localStorage.getItem("theme") !== "light" &&
        (localStorage.getItem("theme") === "dark" ||
          !localStorage.getItem("theme"))
      );
    }
    return true;
  });

  // Define the useEffect hook to update the dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Define the toggleDarkMode function to toggle the dark mode
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  // Define the return statement for the DarkModeProvider component
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

// Define the useDarkMode function to use the DarkModeContext
export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (!context)
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  return context;
}
