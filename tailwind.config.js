export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        'cal-vh':'calc(100vh - 60px)'
      },
      colors:{
        customBlack:'#030F1D'
      }
    },
  },
  plugins: [],
}