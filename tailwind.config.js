const {
 iconsPlugin,
  getIconCollections
} = require("@egoist/tailwindcss-icons")

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playwrite: ['"Playwrite DE Grund"', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
    },

  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(['weui', 'tabler'])
    })
  ],
}

