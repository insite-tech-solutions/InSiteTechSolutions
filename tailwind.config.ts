// import type { Config } from "tailwindcss";
// 
// const config: Config = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;

// tailwind.config.ts

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-grey': '#54585b',
        'medium-grey': '#898685',
        'mild-grey': '#9b9b99',
        'light-grey': '#a7a8a8',
        'very-light-grey': '#d9d9d9',
        'dark-blue': '#1472bb',
        'medium-blue': '#2398ff',
        'light-blue': '#2bc0f8',
      },
      fontFamily: {
        sans: ['var(--font-open-sans)', 'var(--font-noto-sans)', 'var(--font-lato)', 'var(--font-roboto)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config

