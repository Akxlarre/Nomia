/** @type {import('tailwindcss').Config} */
const daisyui = require('daisyui');

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-light': 'linear-gradient(135deg, oklch(98% 0.02 40) 0%, oklch(95% 0.03 280) 100%)',
        'hero-dark':  'linear-gradient(135deg, oklch(10% 0.10 280) 0%, oklch(20% 0.08 250) 100%)',
      },
    }
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["nomialight", "nomiadark"],
  },
};
  