/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Montserrat
        'montserrat-<uniquifier>': ['Montserrat', 'system-ui'],
        // IBM Plex Mono
        'plex-mono': ['IBM Plex Mono', 'system-ui'],
      },
      fontWeight: {
        // Montserrat
        '<weight>': '<weight>', // Replace <weight> with values like 100, 400, 700, etc.
        // IBM Plex Mono
        'thin': 100,
        'extralight': 200,
        'light': 300,
        'regular': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
      },
      fontStyle: {
        'italic': 'italic',
        'normal': 'normal',
      },
    },
  },
  plugins: [],
}
