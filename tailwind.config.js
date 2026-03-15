/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0e6ff',
          100: '#d1b3ff',
          200: '#b380ff',
          300: '#944dff',
          400: '#7c26ff',
          500: '#6b00ff',
          600: '#5500cc',
          700: '#400099',
          800: '#2a0066',
          900: '#150033',
        },
        neon: {
          purple: '#a855f7',
          blue: '#3b82f6',
          cyan: '#06b6d4',
          pink: '#ec4899',
        },
        dark: {
          50: '#1e1e2e',
          100: '#181825',
          200: '#11111b',
          300: '#0a0a14',
          400: '#050510',
          500: '#020208',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'neon-purple': '0 0 20px rgba(168, 85, 247, 0.4), 0 0 60px rgba(168, 85, 247, 0.15)',
        'neon-blue': '0 0 20px rgba(59, 130, 246, 0.4), 0 0 60px rgba(59, 130, 246, 0.15)',
        'neon-cyan': '0 0 20px rgba(6, 182, 212, 0.4), 0 0 60px rgba(6, 182, 212, 0.15)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.36)',
        'glass-lg': '0 16px 48px rgba(0, 0, 0, 0.4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'neon-gradient': 'linear-gradient(135deg, #a855f7, #3b82f6, #06b6d4)',
        'neon-gradient-reverse': 'linear-gradient(315deg, #a855f7, #3b82f6, #06b6d4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'gradient': 'gradient 8s ease infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(59, 130, 246, 0.5), 0 0 80px rgba(6, 182, 212, 0.2)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
