/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Inria Serif', 'serif'],
      },
      screens: {
        'xs': '360px',  // Adding a new custom breakpoint at 450px
      }
    },
  },
  plugins: [],
}

