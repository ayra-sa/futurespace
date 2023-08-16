/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#0192FE',
        label: '#0292FF',
        primaryText: '#000',
        secondaryText: '#2E3135',
        cta: '#F0F6FF',
        secondary: '#2E3135',
        switch: '#C9E8FF',
        onCheck: '#5FBE5',
        nonCheck: '#E2E2E2'
      },
    },
  },
  plugins: [],
};