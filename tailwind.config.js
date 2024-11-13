/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        primaryDark: 'var(--primary-dark-color)',
        secondary: 'var(--secondary-color)',
        tertiary: 'var(--tertiary-color)',
        white: 'var(--white-color)'
      }
    },
  },
  plugins: [],
}

