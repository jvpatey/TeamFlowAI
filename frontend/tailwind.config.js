/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        onyx: "#393E41",
        outerSpace: "#4F5D65",
        timberwolf: "#e3e1de",
        platinum: "#E7E5DF",
        keppel: "#44BBA4",
        keppelLight: "#78cebd",
        zomp: "#3ba590",
        brunswickGreen: "#1b4b41",
        saffron: "#E7BB41",

        darkBg: "#1a1a1a",
        darkCard: "#2a2a2a",
        accent: {
          blue: "#3b82f6",
          green: "#10b981",
          purple: "#8b5cf6",
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#44BBA4",
          secondary: "#E7BB41",
          accent: "#3b82f6",
          neutral: "#393E41",
          "base-100": "#2a2a2a",
          "base-200": "#1a1a1a",
          "base-300": "#4F5D65",
          info: "#3b82f6",
          success: "#10b981",
          warning: "#E7BB41",
          error: "#ef4444",
        },
      },
      "light",
    ],
    darkTheme: "dark",
  },
};
