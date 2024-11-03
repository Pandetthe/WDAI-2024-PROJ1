/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
      animation: {
        'bg-move-dark': 'bg-move-dark 15s linear infinite',
        'bg-move-light': 'bg-move-light 15s linear infinite',
        'open-menu': 'open-menu 0.5s ease-in-out forwards', 
      },
      keyframes: {
        'bg-move-dark': {
          '0%': { transform: 'translate(0, 0)' },
          '20%': { transform: 'translate(calc(100vw), 0)' },
          '40%': { transform: 'translate(calc(100vw), calc(100vh))' },
          '60%': { transform: 'translate(calc(50vw), 0)' },
          '80%': { transform: 'translate(calc(10vw), calc(60vh))' },
          '100%': { transform: 'translate(0, 0)' }
        },
        'bg-move-light': {
          '0%': { transform: 'translate(0, 0)' },
          '20%': { transform: 'translate(calc(-50vw), calc(30vh))' },
          '40%': { transform: 'translate(calc(-100vw), 0)' },
          '60%': { transform: 'translate(calc(-100vw), calc(-60vh))' },
          '80%': { transform: 'translate(calc(-50vw), calc(-100vh))' },
          '100%': { transform: 'translate(0, 0)' },
        },
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
        },
      }
    },
  },
  plugins: [],
}

