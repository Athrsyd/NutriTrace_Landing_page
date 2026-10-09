/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors (#0D9488 Teal)
        primary: {
          DEFAULT: '#0D9488',
          variant: '#0F766E',
          50: '#F0FDFA',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
          800: '#115E59',
          900: '#134E4A',
          950: '#042F2E',
        },
        'primary-variant': '#0F766E',
        'on-primary': '#FFFFFF',

        // Secondary (#14B8A6)
        secondary: {
          DEFAULT: '#14B8A6',
          50: '#F0FDFA',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
          800: '#115E59',
          900: '#134E4A',
        },
        'on-secondary': '#1E293B',

        // Tertiary & Accent (#F59E0B Amber)
        tertiary: {
          DEFAULT: '#F59E0B',
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        'on-tertiary': '#1E293B',

        accent: {
          DEFAULT: '#F59E0B',
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },

        // Container (#CCFBF1)
        container: {
          DEFAULT: '#CCFBF1',
          light: '#F0FDFA',
          dark: '#99F6E4',
        },
        'on-container': '#1E293B',

        // Background & Surfaces
        background: '#F8FAFC',
        surface: '#FFFFFF',
        'on-background': '#1E293B',
        'on-surface': '#1E293B',

        // Grays & Neutrals
        gray_text: '#64748B',
        gray_light: '#E2E8F0',
        'gray-text': '#64748B',
        'gray-light': '#E2E8F0',

        // Aliases for seamless design compatibility
        sage: {
          DEFAULT: '#CCFBF1',
          light: '#F0FDFA',
          dark: '#99F6E4',
        },
        tangerine: {
          DEFAULT: '#F59E0B',
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        ivory: {
          DEFAULT: '#F8FAFC',
          light: '#FFFFFF',
          dark: '#F1F5F9',
        },
      },
      borderRadius: {
        'brand': '20px',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(13, 148, 136, 0.08)',
        'glass-hover': '0 12px 40px 0 rgba(13, 148, 136, 0.16)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'brand': '0 10px 25px -5px rgba(13, 148, 136, 0.35)',
        'accent': '0 10px 25px -5px rgba(245, 158, 11, 0.35)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'brand-gradient': 'linear-gradient(135deg, #134E4A 0%, #115E59 50%, #0F766E 100%)',
        'brand-gradient-reverse': 'linear-gradient(315deg, #0F766E 0%, #115E59 50%, #134E4A 100%)',
      }
    },
  },
  plugins: [],
}
