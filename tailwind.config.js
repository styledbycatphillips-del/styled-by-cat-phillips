   /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#1A1C1E',
        ivory: '#F8F5F0',
        stone: '#6B7280',
        silver: '#C7CBD1',
        // Signature Brand Palette - Sophisticated & Timeless
        signature: {
          black: '#000000',       // Authority & sophistication
          navy: '#222052',        // Trust & professionalism
          gray: '#B7B7B7',        // Balance & sophistication
          champagne: '#D2B68A',   // Luxury & warmth
          cream: '#EEE5D3',       // Elegance & approachability
        },
        // AMARE-inspired palette additions
        amare: {
          beige: '#F5F0E8',       // Warm approachable luxury
          brown: '#8B7355',       // Timeless elegance
        },
        // Enhanced grays for depth
        gray: {
          50: '#fafafa',
          100: '#f5f5f5', 
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#B7B7B7',         // Signature gray
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      },
      fontFamily: {
        // Elegant Typography Stack
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        script: ['Dancing Script', 'Brush Script MT', 'cursive'],
        display: ['var(--font-serif)', 'serif'],
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'elegant-float': 'elegantFloat 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        elegantFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backgroundImage: {
        'signature-gradient': 'linear-gradient(135deg, #000000 0%, #222052 100%)',
        'elegant-gradient': 'linear-gradient(135deg, #EEE5D3 0%, #D2B68A 100%)',
        'luxury-gradient': 'linear-gradient(135deg, #F5F0E8 0%, #8B7355 100%)',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
