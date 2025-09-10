/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gobikey-purple': '#4B2C7C',
        'gobikey-yellow': '#FFD700',
        'gobikey-orange': '#FF8C00',
        'gobikey-gray': '#F5F5F5',
        'gobikey-dark': '#1F2937',
        'hero-purple': '#270949',
        'active-yellow': '#FFED03',
        'service-gray': '#F3F5FA',
        'service-blue': '#37517E',
        'process-blue': '#3C5F80',
        'icon-blue': '#56B2E4',
      },
      fontFamily: {
        'open-sans': ['"Open Sans"', 'sans-serif'],
        'jost': ['"Jost"', 'sans-serif'],
      },
      animation: {
        'whatsappRipple': 'whatsappRipple 0.5s infinite',
        'whatsappShake': 'whatsappShake 0.5s infinite',
        'whatsappPulse': 'whatsappPulse 1.5s infinite',
      },
      keyframes: {
        whatsappRipple: {
          '0%': { transform: 'scale(0.8)', opacity: '0.4' },
          '10%': { transform: 'scale(1.1)', opacity: '0.6' },
          '20%': { transform: 'scale(0.9)', opacity: '0.3' },
          '30%': { transform: 'scale(1.3)', opacity: '0.5' },
          '40%': { transform: 'scale(1.0)', opacity: '0.2' },
          '50%': { transform: 'scale(1.6)', opacity: '0.4' },
          '60%': { transform: 'scale(1.2)', opacity: '0.1' },
          '70%': { transform: 'scale(1.8)', opacity: '0.3' },
          '80%': { transform: 'scale(1.4)', opacity: '0.1' },
          '90%': { transform: 'scale(2.2)', opacity: '0.2' },
          '100%': { transform: 'scale(2.5)', opacity: '0' },
        },
        whatsappShake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-2px)' },
          '75%': { transform: 'translateX(2px)' },
        },
        whatsappPulse: {
          '0%': { 
            transform: 'scale(0.9)',
            boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.7)'
          },
          '70%': { 
            transform: 'scale(1.10)',
            boxShadow: '0 0 0 20px rgba(37, 211, 102, 0)'
          },
          '100%': { 
            transform: 'scale(0.9)',
            boxShadow: '0 0 0 0 rgba(37, 211, 102, 0)'
          },
        },
      },
    },
  },
  plugins: [],
}
