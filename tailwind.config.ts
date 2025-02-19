import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        expand: {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'center', backgroundColor: 'transparent' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'center', backgroundColor: '#3490dc' },
        },
      },
      animation: {
        expand: 'expand 0.5s ease-out',
      },
      screens:{
        'xs':{'max':'580px'},
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
