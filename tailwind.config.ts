/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        moisette: ['Moisette', 'sans-serif'],
        tthoves: ['TTHoves', 'sans-serif'],
        winnie: ['Winnie', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
