/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Core brand colors - still in use
        onyx: "#393E41",
        outerSpace: "#4F5D65",
        timberwolf: "#e3e1de",
        platinum: "#E7E5DF",
        keppel: "#44BBA4",
        keppelLight: "#78cebd",

        // Feature theme colors - organized by usage
        theme: {
          blue: {
            light: "#dbeafe", // blue-100
            dark: "#1e3a8a", // blue-900
            main: "#2563eb", // blue-600
            hover: "#3b82f6", // blue-500
            soft: "#60a5fa", // blue-400
          },
          green: {
            light: "#dcfce7", // green-100
            dark: "#14532d", // green-900
            main: "#16a34a", // green-600
            hover: "#22c55e", // green-500
            soft: "#4ade80", // green-400
          },
          purple: {
            light: "#f3e8ff", // purple-100
            dark: "#581c87", // purple-900
            main: "#9333ea", // purple-600
            hover: "#a855f7", // purple-500
            soft: "#c084fc", // purple-400
          },
          red: {
            light: "#fecaca", // red-100
            dark: "#7f1d1d", // red-900
            main: "#dc2626", // red-600
            hover: "#ef4444", // red-500
            soft: "#f87171", // red-400
          },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#44BBA4", // keppel
          secondary: "#9333ea", // purple-600
          accent: "#3b82f6", // blue-500
          neutral: "#393E41", // onyx
          "base-100": "#1f2937", // gray-800
          "base-200": "#111827", // gray-900
          "base-300": "#4F5D65", // outerSpace
          info: "#3b82f6", // blue-500
          success: "#22c55e", // green-500
          warning: "#f59e0b", // amber-500
          error: "#ef4444", // red-500
        },
      },
      "light",
    ],
    darkTheme: "dark",
  },
};
