/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
        display: ['Orbitron', 'sans-serif'], // <--- NEW FONT DEFINITION (already present)
      },

      // --- Background Images ---
      backgroundImage: {
        'stars': "url('/src/assets/stars-bg.jpg')",
        'main-window': "url('/src/assets/main-window.png')",
        'earth': "url('/src/assets/earth.png')", // Add the Earth image (already present)
        // CSS-only dot grid pattern (from previous discussion)
        'dot-grid': `radial-gradient(circle, #ffffff 1px, transparent 1px),
                     radial-gradient(circle, #ffffff 1px, transparent 1px)`,
      },
      // Configuration for the CSS-only dot grid pattern
      backgroundSize: {
        'dot-spacing': '40px 40px', // Adjust this value to control dot density/spacing
      },
      backgroundPosition: {
        'dot-offset': '0 0, 20px 20px', // Half of dot-spacing for staggered grid
      },

      // --- Custom Animations ---
      animation: {
        // Existing animations from your provided config
        aurora: 'aurora 10s linear infinite',
        'orbit-3d': 'orbit-3d 30s linear infinite',
        'earth-rotate': 'earth-rotate 40s linear infinite',
        'satellite-image-spin': 'satellite-image-spin 20s linear infinite',

        // Animations from previous discussions (for page/element entrance, pulsing, flickering)
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-in-scale-up': 'fadeInScaleUp 1s ease-out forwards',
        'fade-in-bottom': 'fadeInFromBottom 0.8s ease-out forwards',
        'pulse-blue-border': 'pulseBorderBlue 2s infinite ease-in-out',
        'flicker-slow': 'flickerText 5s infinite step-end',
        'pan-bg': 'panBackground 60s linear infinite alternate',
      },

      // --- Custom Keyframe Definitions ---
      keyframes: {
        // Existing keyframes from your provided config
        aurora: {
          '0%': { 'background-position': '0% 50%' },
          '100%': { 'background-position': '200% 50%' },
        },
        'orbit-3d': {
          from: { transform: 'rotateX(65deg) rotateZ(0deg)' },
          to: { transform: 'rotateX(65deg) rotateZ(360deg)' },
        },
        'earth-rotate': {
          '0%': { 'background-position': '0% center' },
          '100%': { 'background-position': '100% center' },
        },
        'satellite-image-spin': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },

        // Keyframes from previous discussions (for page/element entrance, pulsing, flickering)
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInScaleUp: {
            '0%': { opacity: '0', transform: 'translateY(20px) scale(0.98)' },
            '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        fadeInFromBottom: {
            '0%': { opacity: '0', transform: 'translateY(10px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseBorderBlue: {
            '0%, 100%': { boxShadow: '0 0 0px rgba(0, 191, 255, 0.4)' },
            '50%': { boxShadow: '0 0 15px rgba(0, 191, 255, 0.8)' },
        },
        flickerText: {
            '0%, 19.9%, 22%, 24.9%, 26%, 28.9%, 31%, 100%': { opacity: '1', textShadow: '0 0 5px rgba(255,255,255,0.5)' },
            '20%, 25%, 29%, 30%': { opacity: '0.8', textShadow: 'none' },
        },
        panBackground: { // For the CSS-only dot grid
            '0%': { backgroundPosition: '0% 0%, 20px 20px' },
            '100%': { backgroundPosition: '40px 40px, 60px 60px' },
        },
      },

      // --- Custom Shadows for Glow Effects ---
      boxShadow: {
        'subtle-glow': '0 0 10px rgba(255,255,255,0.1), 0 0 20px rgba(255,255,255,0.05)',
        'intense-glow': '0 0 15px rgba(0, 191, 255, 0.6), 0 0 30px rgba(0, 191, 255, 0.4)',
        'earth-glow': '0 0 30px rgba(0, 100, 255, 0.7), inset 0 0 20px rgba(0, 50, 200, 0.5)',
        // inner-glow from previous discussions
        'inner-glow': 'inset 0 0 10px rgba(77, 182, 172, 0.4)',
      }
    },
  },
  plugins: [],
};