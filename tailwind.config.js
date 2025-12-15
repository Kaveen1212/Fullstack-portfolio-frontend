/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-yellow': '#c8ff00',
      },
      keyframes: {
        // Enhanced diagonal slide-in animation for desktop nav links (incline effect)
        slideInDiagonal: {
          '0%': {
            opacity: '0',
            transform: 'translate(-30px, -15px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate(0, 0)',
          },
        },
        // Fade in from left (for logo)
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        // Fade in from right (for store button)
        fadeInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        // Underline grow animation (left to right)
        underlineGrow: {
          '0%': {
            width: '0%',
            opacity: '0',
          },
          '100%': {
            width: '100%',
            opacity: '1',
          },
        },
        // Mobile menu slide-in with fade (staggered)
        slideInMobile: {
          '0%': {
            opacity: '0',
            transform: 'translateX(40px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        // Fade and slide up for mobile bottom section
        fadeSlideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        // Backdrop fade-in
        backdropFadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0.8',
          },
        },
        // Panel slide from right
        panelSlideIn: {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        jump: {
          '0%': { top: '150px' },
          '30%': { top: '130px' },
          '50%': { top: '80px' },
          '80%': { top: '130px' },
          '100%': { top: '150px' },
        },
        block: {
          '0%': { left: '580px' },
          '100%': { left: '-5px' },
        },
        // SVG line drawing animation
        drawLine: {
          '0%': {
            strokeDashoffset: '433.208',
          },
          '100%': {
            strokeDashoffset: '0',
          },
        },
      },
      screens: {
        'tablet': '768px',
        'laptop': '1280px',
        'desktop': '1440px',
      },
      animation: {
        jump: 'jump 0.3s linear',
        block: 'block 1s infinite linear',
        slideInDiagonal: 'slideInDiagonal 0.7s cubic-bezier(0.25, 1, 0.5, 1) forwards',
        fadeInLeft: 'fadeInLeft 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
        fadeInRight: 'fadeInRight 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
        underlineGrow: 'underlineGrow 0.4s cubic-bezier(0.25, 1, 0.5, 1) forwards',
        slideInMobile: 'slideInMobile 0.5s cubic-bezier(0.25, 1, 0.5, 1) forwards',
        fadeSlideUp: 'fadeSlideUp 0.6s cubic-bezier(0.25, 1, 0.5, 1) forwards',
        backdropFadeIn: 'backdropFadeIn 0.4s ease-out forwards',
        panelSlideIn: 'panelSlideIn 0.5s cubic-bezier(0.25, 1, 0.5, 1) forwards',
        drawLine: 'drawLine 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.25, 1, 0.5, 1)',
      },
      fontFamily: {
        'mona': ['"Mona Sans Variable"', '"Mona Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'brier': ['Brier', 'sans-serif'],
        'orbitron': ['Orbitron', 'sans-serif'],
        'playfair': ['"Playfair Display"', 'serif'],
        'garamond': ['"EB Garamond"', 'serif'],
        'grotesk': ['"Host Grotesk"', 'sans-serif'],
        'baskerville': ['"Libre Baskerville"', 'serif'],
        'mona-sans': ['Mona-Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
