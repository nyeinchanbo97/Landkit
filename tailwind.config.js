/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "*.{js,html}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          '50%': { left: '100%',
          margin: '0 -25px 0 25px'},    
        },
        slide: {
          '100%': {
            top: '-120px'
          }
        },
        slide1: {
          '100%': {
            top: '-90px'
          }
        }
      },
    },
  },
  plugins: [],
}

