import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FFFDF5',
          dark: '#FFF5E0',
        },
        maroon: {
          DEFAULT: '#6B1818',
          dark: '#4A1010',
          light: '#8B2424',
          50: '#FDF5F5',
          100: '#FBDEDE',
          200: '#F5BABA',
        },
        saffron: {
          DEFAULT: '#C98D3E',
          dark: '#9E6A1E',
          light: '#E8A84E',
          50: '#FFF8ED',
          100: '#FDF0D5',
          200: '#F8D99A',
        },
        gold: {
          DEFAULT: '#D4AF37',
          dark: '#B8960C',
          light: '#E8C860',
        },
        // Festive palette additions
        magenta: {
          DEFAULT: '#C42B7E',
          dark: '#9B2063',
          light: '#E0549A',
        },
        cobalt: {
          DEFAULT: '#1B4FBF',
          dark: '#143B96',
          light: '#3367D6',
        },
      },
      fontFamily: {
        serif: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-text)', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'warm-gradient': 'linear-gradient(135deg, #FFFDF5 0%, #FFF5E0 50%, #FDF0D5 100%)',
        'hero-gradient': 'linear-gradient(180deg, rgba(107,24,24,0.85) 0%, rgba(74,16,16,0.75) 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
