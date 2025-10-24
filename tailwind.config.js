/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}",
    "./config/**/*.{ts,tsx,js,jsx}",
    "./lib/**/*.{ts,tsx,js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0a",
        ivory: "#f8f8f4",
        stone: "#6b7280",
        navy: "#0f172a",
        signature: {
          cream: "var(--signature-cream)",
          black: "#0B0B0B",
          gray: "#6E6E6E",
          champagne: "var(--signature-champagne)",
          navy: "var(--signature-navy)",
        },
      },
      fontFamily: {
        head: ["var(--font-head)", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        serif: ["var(--font-head)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        'tighter-2': '-0.02em',
        'wide-2': '0.08em',
      },
      boxShadow: {
        card: '0 6px 30px -12px rgba(0,0,0,0.20)',
      },
      borderRadius: {
        '2xl': '1rem',
      },
    },
  },
  darkMode: "class",
  plugins: [],
}
