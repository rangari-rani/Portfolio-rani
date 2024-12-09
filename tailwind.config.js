/** @type {import('tailwindcss').Config} */

export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
  
    extend: {
      scrollBehavior: ['responsive'],
      gridTemplateColumns:{
        'auto': 'repeat(auto-fit,minmax(200px, 1fr))'
      },
      colors:{
        lightHover: '#fcf4ff',
        darkHover:'#2a004a',
        darkTheme: '#11001F'
      },
      boxShadow:{
        'black':'4px 4px 0 #000',
        'white':'4px 4px 0 #fff',
      }
    },
  },
 
  plugins: [],
}