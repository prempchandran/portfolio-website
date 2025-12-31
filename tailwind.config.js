/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Custom color palette matching Stitch design
      colors: {
        // Primary lime green accent
        'primary': {
          50: '#f7fee7',
          100: '#ecfccb',
          200: '#d9f99d',
          300: '#bef264',
          400: '#a3e635',
          500: '#84cc16',
          600: '#65a30d',
          700: '#4d7c0f',
          800: '#3f6212',
          900: '#365314',
          DEFAULT: '#bef264',
          hover: '#a3e635'
        },
        // Category accent colors
        'accent': {
          cyan: '#22d3ee',
          purple: '#c084fc',
          yellow: '#fbbf24',
          pink: '#f472b6',
          blue: '#60a5fa',
          green: '#4ade80'
        },
        // Background colors
        'background': {
          light: '#f1f5f9',
          dark: '#0B1120'
        },
        // Card colors
        'card': {
          light: '#ffffff',
          dark: '#151f32'
        },
        // Text colors
        'text': {
          light: '#334155',
          dark: '#e2e8f0'
        },
        'secondary': {
          light: '#64748b',
          dark: '#94a3b8'
        }
      },
      // Custom fonts
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'display': ['"Space Grotesk"', 'sans-serif'],
        'mono': ['monospace']
      },
      // Glassmorphism effects
      backdropBlur: {
        'xs': '2px',
        'glass': '12px'
      },
      // Custom animations
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s ease infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'bounce-bar': 'bounceBar 1s infinite'
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(190, 242, 100, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(190, 242, 100, 0.5)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        bounceBar: {
          '0%, 100%': { transform: 'scaleY(0.5)' },
          '50%': { transform: 'scaleY(1)' }
        }
      },
      // Custom box shadows
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-sm': '0 4px 16px 0 rgba(31, 38, 135, 0.2)',
        'card-hover': '0 10px 40px -10px rgba(0,0,0,0.5)',
        'primary': '0 10px 40px -10px rgba(190, 242, 100, 0.3)'
      },
      // Border radius
      borderRadius: {
        'glass': '16px',
        DEFAULT: '0.5rem'
      }
    },
  },
  plugins: [],
}
