/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        play: ["IBM Plex Mono", " monospace"],
      },
      screens: {
        'xsm': {'max': '640px'},
         // => @media (min-width: 360px) { ... }
      }
    },
  },
  plugins: [],
}
