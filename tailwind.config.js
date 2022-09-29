/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./site/templates/*.php",
    "./site/snippets/*.php",
    "./site/snippets/blocks/*.php",
    "./public/*.php",
  ],
  theme: {
    extend: {
      screens: {
        'xxs': [
          { 'raw': '(min-width: 340px) and (max-width: 379px)' },
        ],
        'xs': [
          { 'raw': '(min-width: 380px) and (max-width: 639px)' },
        ]
      }, 
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
