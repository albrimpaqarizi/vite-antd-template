module.exports = {
  prefix: 'tw-',
  content: ['./src/**/*.{jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
