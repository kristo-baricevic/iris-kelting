/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '30px 300px 20px rgba(0, 0, 0, 1)',
      },
    },
  },
  plugins: [],
}

