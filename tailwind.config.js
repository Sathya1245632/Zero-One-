/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Archivo"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', '"Archivo"', 'system-ui', 'sans-serif'],
        wordmark: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        studio: {
          bg: '#06070A',
          'bg-1': '#0B0D13',
          'surface-1': '#10131C',
          'surface-2': '#161A26',
          'surface-3': '#1E2434',
          ink: '#F8FAFC',
          muted: '#94A3B8',
          light: '#F8FAFC',
          'light-card': '#FFFFFF',
          'light-ink': '#0F172A',
          'light-muted': '#475569',
          red: '#FF334B',
          'red-deep': '#BE123C',
          'red-dot': '#FF4D63',
          orange: '#F97316',
          cyan: '#06B6D4',
        },
      },
    },
  },
  plugins: [],
};
