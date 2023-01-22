/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./modules/**/*.{js,ts,jsx,tsx,html,twig}",
    "./common/**/*.{js,ts,jsx,tsx,html,twig}",
    "./templates/**/*.{js,ts,jsx,tsx,html,twig}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}