/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Core brand colors
        brand: {
          primary: "#44BBA4", // keppel - main brand color
          secondary: "#78cebd", // keppelLight - lighter brand accent
          dark: "#393E41", // onyx - dark theme primary
          light: "#E7E5DF", // platinum - light theme primary
          muted: "#4F5D65", // outerSpace - muted accent
          text: "#e3e1de", // timberwolf - light text on dark
        },

        // Feature colors
        feature: {
          // Task Board / Planning
          blue: {
            100: "#dbeafe",
            400: "#60a5fa",
            500: "#3b82f6",
            600: "#2563eb",
            900: "#1e3a8a",
          },
          // Success / Completed
          green: {
            100: "#dcfce7",
            400: "#4ade80",
            500: "#22c55e",
            600: "#16a34a",
            900: "#14532d",
          },
          // Meetings / Documents
          purple: {
            100: "#f3e8ff",
            400: "#c084fc",
            500: "#a855f7",
            600: "#9333ea",
            900: "#581c87",
          },
          // Alerts / Warnings
          red: {
            100: "#fecaca",
            400: "#f87171",
            500: "#ef4444",
            600: "#dc2626",
            900: "#7f1d1d",
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
          primary: "#44BBA4", // brand-primary
          secondary: "#9333ea", // feature-purple-600
          accent: "#3b82f6", // feature-blue-500
          neutral: "#393E41", // brand-dark
          "base-100": "#1f2937", // gray-800
          "base-200": "#111827", // gray-900
          "base-300": "#4F5D65", // brand-muted
          info: "#3b82f6", // feature-blue-500
          success: "#22c55e", // feature-green-500
          warning: "#f59e0b", // amber-500
          error: "#ef4444", // feature-red-500
        },
      },
      "light",
    ],
    darkTheme: "dark",
  },
};
