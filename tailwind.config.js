/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'tapage-periglacial': '#e3eadb',
        'tapage-cod': '#060606',
        'tapage-bitter': '#7f8078',
        'tapage-storm': '#5d5e59',
        'tapage-fuscous': '#444442',
        'tapage-tuatara': '#2f2f2c',
        'tapage-xanadu': '#747674',
        'tapage-stack': '#848c83',
        'tapage-mineshaft': '#3c3c3c',
        'tapage-tuatara-dark': '#242421',
      },
      fontFamily: {
        'aura': ['Aura Regular', 'serif'],
        'alga': ['Alga Regular', 'sans-serif'],
        'sans': ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
