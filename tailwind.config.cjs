/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: {
          900: '#FAFAFA',
          700: '#E4E5F1',
          500:'#CACDE8'
        },
        gray: {
          900: '#161722',
          700: '#25273C'
        },
        zinc: {
          500: '#777A92',
          600: '#9394A5',
          700: '#484B6A',
          800: '#4D5066',
          900: '#393A4C',
          /*
          Check Background '#57DDFF': '#C058F3'
          Bright Blue:
          */
        },
        blue: {
          500: '#3A7BFD'
        },
        // light:{
        //   VeryLightGray: '#FAFAFA',
        //   VeryLightGrayishBlue: '#D2D3DB',
        //   LightGrayishBlue: '#CACDE8',
        //   VeryDarkGrayishBlue: '#484B6A',
        //   VeryDarkGrayishBlueDarkGrayishBlue: '#9394A5',
        // },
        initial:{
          500: 'rgb(87,221,255)'
        },
        end: {
          500: 'rgb(192,88,243)'
        }
      },
      backgroundImage: {
        mobile: {
          'dark': "url('./src/assets/bg-mobile-dark.jpg')",
          'light': "url('./src/assets/bg-mobile-light.jpg')"
        },
        desktop: {
          'dark': "url('./src/assets/bg-desktop-dark.jpg')",
          'light': "url('./src/assets/bg-desktop-light.jpg')",
        }
      }
    },
  },
  plugins: [],
}
