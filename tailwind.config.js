/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-brown': '#a52a2a',
        'custom-green': '#7fffd4'
      },
    },
  },
  plugins: [],
}

