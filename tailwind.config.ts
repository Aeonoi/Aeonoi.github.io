import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        catppuccin_rosewater: "#f4dbd6",
        catppuccin_flamingo: "#f0c6c6",
        catppuccin_pink: "#f5bde6",
        catppuccin_mauve: "#c6a0f6",
        catppuccin_red: "#ed8796",
        catppuccin_yellow: "#eed49f",
        catppuccin_green: "#a6da95",
        catppuccin_blue: "#8aadf4",
        catppuccin_lavender: "#b7bdf8",
      },
    },
  },
  plugins: [],
};
export default config;
