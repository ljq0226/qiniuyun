import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '840px',
      lg: '1250px',
      xl: '1440px',
    },
    extend: {
      colors: {

      },
    },
  },
  plugins: [],
}
export default config
