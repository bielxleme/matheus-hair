/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Editorial Luxury Palette
        champagne: {
          50: '#fdf8f3',
          100: '#faf0e6',
          200: '#f5e1cc',
          300: '#ebccab',
          400: '#dfb387',
          500: '#d4a072',
          600: '#c48a5e',
          700: '#a86f4a',
          800: '#8c583e',
          900: '#734834',
          950: '#3d2219',
        },
        'editorial-black': {
          50: '#f5f5f5',
          100: '#e8e8e8',
          200: '#d1d1d1',
          300: '#a8a8a8',
          400: '#808080',
          500: '#666666',
          600: '#525252',
          700: '#404040',
          800: '#2d2d2d',
          900: '#1a1a1a',
          950: '#0d0d0d',
        },
        'off-white': {
          50: '#fefefe',
          100: '#fafafa',
          200: '#f5f5f5',
          300: '#eeeeee',
          400: '#e0e0e0',
          500: '#d4d4d4',
        },
        'chrome-silver': {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['DM Sans', 'Inter', 'system-ui', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-down': 'slideDown 0.8s ease-out forwards',
        'slide-left': 'slideLeft 0.8s ease-out forwards',
        'slide-right': 'slideRight 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'rotate-in': 'rotateIn 0.8s ease-out forwards',
        'text-reveal': 'textReveal 1s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        rotateIn: {
          '0%': { opacity: '0', transform: 'rotate(-5deg) scale(0.9)' },
          '100%': { opacity: '1', transform: 'rotate(0) scale(1)' },
        },
        textReveal: {
          '0%': { opacity: '0', transform: 'translateY(100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 160, 114, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 160, 114, 0.5)' },
        },
      },
      backgroundImage: {
        'gradient-champagne': 'linear-gradient(135deg, #d4a072 0%, #c48a5e 50%, #a86f4a 100%)',
        'gradient-champagne-light': 'linear-gradient(135deg, #fdf8f3 0%, #f5e1cc 50%, #ebccab 100%)',
        'gradient-editorial': 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #404040 100%)',
        'gradient-silver': 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)',
        'shimmer-gradient': 'linear-gradient(90deg, transparent, rgba(212, 160, 114, 0.4), transparent)',
      },
      boxShadow: {
        'champagne': '0 10px 40px -10px rgba(212, 160, 114, 0.3)',
        'champagne-lg': '0 20px 60px -15px rgba(212, 160, 114, 0.4)',
        'editorial': '0 10px 40px -10px rgba(0, 0, 0, 0.3)',
        'editorial-lg': '0 20px 60px -15px rgba(0, 0, 0, 0.4)',
        'inner-champagne': 'inset 0 2px 10px rgba(212, 160, 114, 0.2)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'ease-out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },
  },
  plugins: [],
}