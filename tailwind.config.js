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
        display: ['Orbitron', 'sans-serif'], // <--- NEW FONT DEFINITION
      },
      // --- Background Images ---
      backgroundImage: {
      'stars': "url('/src/assets/stars-bg.jpg')",
'main-window': "url('/src/assets/main-window.png')",
// Add the Earth image
'earth': "url('/src/assets/earth.png')",
      },

      // --- Custom Animations ---
      animation: {
        aurora: 'aurora 10s linear infinite',
        'orbit-3d': 'orbit-3d 30s linear infinite', // Controls the satellite's orbit around Earth
        'earth-rotate': 'earth-rotate 40s linear infinite', // Controls the Earth's self-rotation
        'satellite-image-spin': 'satellite-image-spin 20s linear infinite', // Controls the satellite image's self-rotation
      },

      // --- Custom Keyframe Definitions ---
      keyframes: {
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
      },

      // --- Custom Shadows for Glow Effects ---
      boxShadow: {
        'subtle-glow': '0 0 10px rgba(255,255,255,0.1), 0 0 20px rgba(255,255,255,0.05)',
        'intense-glow': '0 0 15px rgba(0, 191, 255, 0.6), 0 0 30px rgba(0, 191, 255, 0.4)',
        'earth-glow': '0 0 30px rgba(0, 100, 255, 0.7), inset 0 0 20px rgba(0, 50, 200, 0.5)',
      }
    },
  },
  plugins: [],
};