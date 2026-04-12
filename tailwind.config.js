/** @type {import('tailwindcss').Config} */
export default {
   darkMode: 'class', 
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        bg: {
          DEFAULT: '#07090d',
          2: '#0b0f14',
          surface: '#111820',
        },
        accent: {
          DEFAULT: '#00e5a0',
          2: '#00aaff',
          dim: 'rgba(0,229,160,0.08)',
        },
        border: 'rgba(255,255,255,0.07)',
        text: {
          DEFAULT: '#e8edf3',
          muted: '#6b7a8d',
          dim: '#3d4a58',
        },
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'scroll-line': 'scrollLine 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        scrollLine: {
          '0%, 100%': { opacity: '1', transform: 'scaleY(1)', transformOrigin: 'top' },
          '50%': { opacity: '0.3', transform: 'scaleY(0.5)', transformOrigin: 'top' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(0,229,160,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,160,0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
    },
  },
  plugins: [],
}
