/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', 'src/**/*.jsx'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        md: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem'
      }
    },
    extend: {
      colors: {
        'primary': '#01f38d',
        'secondary': '#003128',
        'text-color': '#d1ffeb',
        'text-color-alt': '#0b1926',
        'title-color': '#e8fff5',
        'menu-border': '#006400'
      },
      boxShadow: {
        'regular': '2px_2px_10px_10px_rgba(0,0,0,0.2)'
      }
    },
  },
  plugins: [],
}