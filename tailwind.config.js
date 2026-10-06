/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8AA624',
          50: '#F5F8EC',
          100: '#E9EFCF',
          200: '#D5E3A5',
          300: '#BDD579',
          400: '#A4C447',
          500: '#8AA624',
          600: '#738C1C',
          700: '#5A6F16',
          800: '#425211',
          900: '#2C370B',
        },
        sage: {
          DEFAULT: '#DBE4C9',
          light: '#EEF3E4',
          dark: '#C3D0AB',
        },
        ivory: {
          DEFAULT: '#FFFFF0',
          light: '#FFFFFB',
          dark: '#F7F7E6',
        },
        tangerine: {
          DEFAULT: '#FEA405',
          50: '#FFF8EB',
          100: '#FEF0CE',
          200: '#FEDF9B',
          300: '#FDCD67',
          400: '#FCB936',
          500: '#FEA405',
          600: '#E69302',
          700: '#BF7802',
          800: '#945B03',
          900: '#6E4202',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(138, 166, 36, 0.08)',
        'glass-hover': '0 12px 40px 0 rgba(138, 166, 36, 0.15)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
