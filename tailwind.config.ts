import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    spacing: {
      0: '0', // 0
      1: '1px', // 1px
      2: '0.125rem', // 2px
      3: '0.1875rem', // 3px
      4: '0.25rem', // 4px
      6: '0.3125rem', // 6px
      8: '0.5rem', // 8px
      10: '0.625rem', // 10px
      12: '0.75rem', // 12px
      14: '0.875rem', // 14px
      16: '1rem', // 16px
      18: '1.125rem', // 18px
      20: '1.25rem', // 20px
      24: '1.5rem', // 24px
      28: '1.75rem', // 28px
      32: '2rem', // 32px
      40: '2.5rem', // 40px
      48: '3rem', // 48px
      56: '3.5rem', // 56px
      64: '4rem', // 64px
      72: '4.5rem', // 72px
      80: '5rem', // 80px
      96: '6rem', // 96px
      120: '7.5rem', // 120px
    },
  },
  plugins: [],
};
export default config;
