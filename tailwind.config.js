export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui'],
      },
      colors: {
        white: {
          DEFAULT: '#F5F5F5',
          real: '#FFFFFF',
        },
        black: {
          DEFAULT: '#080708',
          real: '#000000',
        },
        violet: '#541388',
        rose: '#e5b7ba',
      },
      keyframes: {
        appear: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        appear: 'appear 1s ease-in-out',
      },
    },
  },
  plugins: [],
}
