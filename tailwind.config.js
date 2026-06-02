/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Editorial paper-and-ink palette
        paper: '#F4F2EC',
        'paper-dim': '#ECEAE2',
        ink: '#16140F',
        'ink-soft': '#3A352C',
        muted: '#6E685C',
        line: '#D8D3C6',
        accent: '#C8442A',
        'accent-dark': '#A8341E',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
      maxWidth: {
        page: '78rem',
      },
    },
  },
  plugins: [],
}
