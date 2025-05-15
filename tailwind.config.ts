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
    './src/page-templates/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-grey': '#54585b',
        'medium-grey': '#898685',
        'mild-grey': '#9b9b99',
        'light-grey': '#a7a8a8',
        'very-light-grey-alt': '#cccccc',
        'very-light-grey': '#d9d9d9',
	      'dark-blue-alt': '#1764b8', //(mag blue mixed with tailwind blue 800 ish) 
        'dark-blue': '#1472bb', //(previous mag blue)
	      'medium-blue-alt': '#1d64cd', //(darker mix with tailwind blue 700ish ) 
	      'medium-blue': '#0e72c8', //(updated mag blue) 
        'mild-blue-alt': '#0773d6', //(slightly lighter version of medium blue good for blue-600 replacement)
        'mild-blue': '#0173e3', //(homepage hero blue) 
        'light-blue': '#2398ff', //(previous medium blue, pretty light)
        'very-light-blue': '#2bc0f8',
      },
      fontFamily: {
        sans: ['var(--font-open-sans)', 'var(--font-noto-sans)', 'var(--font-lato)', 'var(--font-roboto)', 'sans-serif'],
        kohinoor: ['Kohinoor Latin', 'sans-serif'],
      },
      fontWeight: {
        light: '300',  // This maps to 'Book'
        normal: '600', // This maps to 'Demi'
        bold: '700',   // This keeps 'Bold' as is
      },
    },
  },
  plugins: [],
}

export default config

