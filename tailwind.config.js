/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          gold: '#CAB38A',
          dark: '#232017',
          teal: '#008382',
          amber: '#CAB38A', // Mapping legacy amber to new gold for immediate consistency
        },
        tiev: {
          gold: '#CAB38A',
          dark: '#232017',
          teal: '#008382',
        }
      },
      animation: {
        'beam': 'beam 3s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
        'spin-slow-reverse': 'spin 15s linear infinite reverse',
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'flicker': 'candle-flicker 4s infinite ease-in-out',
        'float': 'float 6s ease-in-out infinite',
        'sonar': 'sonar-wave 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'border-spin': 'border-spin 2.5s linear infinite',
        'shimmer': 'shimmer 4s linear infinite',
      },
      keyframes: {
        beam: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        'candle-flicker': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '25%': { transform: 'scale(1.02)', opacity: '0.9' },
          '50%': { transform: 'scale(0.98)', opacity: '0.8' },
          '75%': { transform: 'scale(1.01)', opacity: '0.95' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'sonar-wave': {
          '0%': { r: '10px', opacity: '0.8', strokeWidth: '1px' },
          '100%': { r: '80px', opacity: '0', strokeWidth: '0px' },
        },
        'border-spin': {
          'to': { '--gradient-angle': '360deg' },
        },
        shimmer: {
          'to': { transform: 'translate(-50%, -50%) rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
