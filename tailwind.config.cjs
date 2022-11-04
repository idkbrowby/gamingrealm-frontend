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
        'lprimary':'#7D6167',
        'lsecondary':'#FFCFD2',
        'laccents':'#F7FFDD',
        'lhighlights':'#D0E3CC',
        'dprimary':'#011627',
        'dsecondary':'#b0b7bf',
        'daccents':'#222e50',
        'dhighlights':'#7c0b2b'
      }
    },
  },
  plugins: [],
}
