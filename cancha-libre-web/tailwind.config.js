/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Podés agregar verdes futboleros personalizados acá
        "cancha-green": "#22c55e",
      }
    },
  },
  plugins: [],
}