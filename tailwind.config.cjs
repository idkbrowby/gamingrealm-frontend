/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  dark:"class",
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors:{
        'primary':'#2F4454',
        'secondary':'#2E151B',
        'tertiary':'#1C3334',
        'accents':'#DA7B93',
        'highlights':'#376E6F',
      }
    },
  },
  plugins: [],
}
