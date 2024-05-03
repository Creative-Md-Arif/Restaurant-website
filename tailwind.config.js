/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        shadowprimary: '0 35px 0 0 rgba(0, 0, 0, 0.3)',
      },
      colors: {
        primary: '#CC3333',
        secondary: "#2A435D",
        bg: "#FFF8EE",
      },
    },
    container: {
      center: true,
    },
    fontFamily:{
      primary:[ "Roboto", "sans-serif"],
      secondary:["Cormorant Upright","sans-serif"],
      opensans: ["Open Sans", "sans-serif"]
    },


  },
  plugins: [],
}