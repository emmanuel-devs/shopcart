import type { Config } from "tailwindcss";
const config: Config = { content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"], theme: { extend: { colors: { forest: "#0d3b26", orange: "#ff8957" }, fontFamily: { sans: ["Arial", "Helvetica", "sans-serif"] } } }, plugins: [] };
export default config;
