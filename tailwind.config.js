/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      "home-desktop": "url(/image/HomeBg.jpg)",
      "home-mobile": "url(/image/HomeMobile.jpg)",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '5rem',
      },
    },
    fontFamily:{
      "CormorantGaramond": "CormorantGaramond",
      "CormorantGaramondItalic": "CormorantGaramond Italic",
    }
    },
  },
  plugins: [],
}
