/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f4f5ef',
          100: '#e8eade',
          200: '#d4d7c2',
          300: '#c0c4a6',
          400: '#b0b490',
          500: '#a0a47a',
          600: '#888b60',
          700: '#6e7049',
          800: '#545636',
          900: '#3a3c24',
        },
        forest: {
          50: '#eef4ee',
          100: '#d4e6d5',
          200: '#a9cca9',
          300: '#7eb27f',
          400: '#539855',
          500: '#2d5c30',
          600: '#264f28',
          700: '#1e4121',
          800: '#173319',
          900: '#0f2511',
        },
        cream: {
          50: '#fdfcf8',
          100: '#f8f6ef',
          200: '#f0ecde',
          300: '#e5dfca',
          400: '#d8d0b4',
          500: '#c8be9a',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
