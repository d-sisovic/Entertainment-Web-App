/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "red-c": "#FC4747",
        "dark-blue-c": "#10141E",
        "greyish-blue-c": "#5A698F",
        "semi-dark-blue-c": "#161D2F",
        "white-c": "#FFFFFF"
      },
      fontFamily: {
        "outfit-l": ['Outfit-Light', 'sans-serif'],
        "outfit-m": ['Outfit-Medium', 'sans-serif']
      }
    },
    screens: {
      "mobile": "23.4375em",
      "tablet": "48em",
      "desktop": "90em"
    },
    fontFamily: {
      'sans': ['Outfit-Light', 'sans-serif'],
      'serif': ['Outfit-Light', 'sans-serif'],
      'mono': ['Outfit-Light', 'sans-serif']
    }
  },
  plugins: [],
}

