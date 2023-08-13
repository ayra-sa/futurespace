/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 'primary': '#0192FE'
        primary: '#0192FE',
        label: '#0292FF',
        primaryText: '#000',
        secondaryText: '#2E3135'
      },
    },
  },
  plugins: [],
}

