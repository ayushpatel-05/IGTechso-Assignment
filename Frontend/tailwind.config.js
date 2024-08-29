/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hebo: ['Hebo', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        '15px': '15px',
        '85px': '85px',
      },
      lineHeight: {
        '30px': '30px',
        '100': '100px',
      },
    },
  },
  plugins: [],
}

