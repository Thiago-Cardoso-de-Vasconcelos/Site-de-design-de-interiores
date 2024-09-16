import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '0',
          sm: '2rem',
          lg: '4rem',
          xl: '6rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
};
export default config;
