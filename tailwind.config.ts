import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#4F46E5',
      },
        fontFamily: {
        staatliches: ["var(--font-staatliches)"],
        geist: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
        carme: ["var(--font-carme)"],
        honk: ["var(--font-honk)"],
        silkscreen: ["var(--font-silkscreen)"],
        jersey10: ["var(--font-jersey10)"],
        sankofa: ["var(--font-sankofa)"],
        cc: ["var(--font-cc)"],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
export default config;
