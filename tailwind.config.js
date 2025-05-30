/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['var(--font-orbitron)'],
        poppins: ['var(--font-poppins)'],
      },
      colors: {
        neon: {
          blue: '#00f3ff',
          purple: '#bc13fe',
        },
      },
    },
  },
  plugins: [],
}