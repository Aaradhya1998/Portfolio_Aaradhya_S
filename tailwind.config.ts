import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#050816',
        'surface-900': '#0f1220',
        'surface-800': '#14182b'
      },
      boxShadow: {
        soft: '0 25px 60px rgba(7, 16, 39, 0.35)',
        glow: '0 0 40px rgba(111, 173, 255, 0.16)'
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top left, rgba(79, 70, 229, 0.14), transparent 35%), radial-gradient(circle at bottom right, rgba(14, 165, 233, 0.1), transparent 25%)'
      }
    }
  },
  plugins: []
};

export default config;
