/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#1e1e1e"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        appear: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      },
      animation: {
        'fadeIn': 'appear 300ms ease-in-out',
        'fadeInSlow': 'appear 1s ease-in-out',
      }
    },
  },
  plugins: [],
}
