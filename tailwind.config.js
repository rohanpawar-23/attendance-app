/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode toggling via class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ---------- Animations ----------
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'rotate-in': 'rotateIn 0.5s ease-in-out',
        'progress-fill': 'progressFill 1s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        rotateIn: {
          '0%': { transform: 'rotate(-5deg) translateY(20px)', opacity: '0' },
          '100%': { transform: 'rotate(0deg) translateY(0)', opacity: '1' },
        },
        progressFill: {
          '0%': { width: '0%' },
          // Dynamically set progress fill (88/90 in this case)
          '100%': { width: `${(88 / 90) * 100}%` },
        },
      },

      // ---------- Box Shadows ----------
      boxShadow: {
        'neumorphic-raised': '10px 10px 20px #d9d9e2, -10px -10px 20px #ffffff',
        'neumorphic-modern': '12px 12px 24px #d1d5db, -12px -12px 24px #ffffff',
        'neumorphic-pressed': 'inset 6px 6px 12px #d1d5db, inset -6px -6px 12px #ffffff',
        'neumorphic-modern-dark': '15px 15px 30px #2d3748, -15px -15px 30px #4a5568',
        'sticky-shadow': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
        'glow': '0 0 10px rgba(45, 212, 191, 0.5)',
      },

      // ---------- Custom Colors ----------
      colors: {
        'custom-teal': '#2DD4BF', // Accent teal color
        'dark-bg': '#1A202C',     // General dark background
        'dark-card': '#2D3748',   // Card background for dark mode
        'dark-text': '#E2E8F0',   // Light text for dark mode
      },

      // ---------- Background Images ----------
      backgroundImage: {
        'parallax-bg': "url('/assets/dark-grid.png')",        // Replace with actual dark mode grid image
        'parallax-bg-light': "url('/assets/light-grid.png')", // Replace with actual light mode grid image
      },

      // ---------- Typography ----------
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              fontSize: '2.75rem',
              fontWeight: '700',
              color: theme('colors.gray.900'),
            },
            h2: {
              fontSize: '2.25rem',
              fontWeight: '600',
              color: theme('colors.gray.800'),
            },
            p: {
              fontSize: '1.125rem',
              lineHeight: '1.6',
              color: theme('colors.gray.700'),
            },
          },
        },
        dark: {
          css: {
            h1: { color: theme('colors.dark-text') },
            h2: { color: theme('colors.dark-text') },
            p: { color: theme('colors.dark-text') },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Provides elegant default typography
  ],
};
