/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    'fontFamily': {
      'sans': ['Rubik', 'sans-serif'],
    },
    extend: {
      colors: {
        'but': '#0B132A',
        'redish': '#F53855',
        'bluish': '#0B132A',
        'darkblue': '#4F5665',
        'backColor': '#F6F6F6',
      },
      gridTemplateColumns: {
        // Simple 5 column grid
        '5': 'repeat(5, minmax(15%, 20%))',
      },
    },
  },
  plugins: [],
}

// 