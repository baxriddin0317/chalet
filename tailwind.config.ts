import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          "title": "#394553",
          "black": "#1A222C",
          "blue": "#4a86cc",
          "gray": "#5d5d5d",
          "secondary": "#F5F8FA"
        }
      },
      fontFamily: {
        'montserat': ['Montserrat', 'sans-serif']
      },
      maxWidth: {
        'main': "1160px"
      },
      backgroundImage: {
        'hero-gradient': "linear-gradient(180deg, #111111 50%, #F2295B00 100%)"
      },
      fontSize: {
        'h1': ['64px', '1em'],
        'h2': ['40px', '64px']
      },
      spacing: {
        '19': "75px"
      }
    },
  },
  plugins: [],
}
export default config
