/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: 'var(--color-navy)',
        teal: 'var(--color-teal)',
        coral: 'var(--color-coral)',
        gray: 'var(--color-gray)',
        cloud: 'var(--color-cloud)',
      },
      fontFamily: {
        montserrat: ['var(--font-heading)'],
        inter: ['var(--font-body)'],
      },
    },
  },
  plugins: [],
};