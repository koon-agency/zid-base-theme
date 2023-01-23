/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./theme/modules/**/*.{js,ts,jsx,tsx,html,twig}",
    "./theme/common/**/*.{js,ts,jsx,tsx,html,twig}",
    "./theme/templates/**/*.{js,ts,jsx,tsx,html,twig}",
    "./theme/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}