/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0192FE',
        label: '#0292FF',
        secondary: '#2E3135'
        // 'primary': '#0192FE',
        // 'secondary': '#2E3135'
      }
    },
  },
  plugins: [],
}

