/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        textprim: 'var(--text-color-prim)',
        textsec: 'var(--text-color-sec)',
        bordercol: 'var(--border-color)',
      },
      screens: {
        'xs' : '480px',
      },
    },
  },
  plugins: [],
}

