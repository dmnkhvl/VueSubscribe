/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "vue-green": "#00dc82",
        "vue-dark-green": '#011e26',
      },
    },
  },
  plugins: [],
};
