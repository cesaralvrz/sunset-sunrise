/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,vue}",
  ],
  theme: {
    extend: {
      colors: {
        "tgtg": "#347d73",
        "tgtg-secondary": "#FDF3A7",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
}

