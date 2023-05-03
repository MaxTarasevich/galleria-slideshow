/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      darkGrey: '#7D7D7D',
      grey: '#E5E5E5',
      lightGrey: '#F3F3F3',
      white: '#FFFFFF',
    },
    fontSize: {
      display: [
        '12.5rem',
        {
          lineHeight: '0.75',
          fontWeight: '700',
        },
      ],
      'heading-1': [
        '3.5rem',
        {
          lineHeight: '1.14',
          fontWeight: '700',
        },
      ],
      'heading-2': [
        '1.5rem',
        {
          lineHeight: '1.2',
          fontWeight: '700',
        },
      ],
      'heading-3': [
        '1.125rem',
        {
          lineHeight: '0.8',
          fontWeight: '700',
        },
      ],
      'subhead-1': [
        '0.94rem',
        {
          lineHeight: '0.79',
          fontWeight: '400',
        },
      ],
      'subhead-2': [
        '0.81rem',
        {
          lineHeight: '1.23',
          fontWeight: '400',
        },
      ],
      'link-1': [
        '0.75rem',
        {
          lineHeight: '0.8',
          letterSpacing: '2.57px',
          fontWeight: '700',
        },
      ],
      'link-2': [
        '0.56rem',
        {
          lineHeight: '0.8',
          letterSpacing: '1.93px',
          fontWeight: '700',
        },
      ],
      body: [
        '0.875rem',
        {
          lineHeight: '2',
          fontWeight: '700',
        },
      ],
    },
    extend: {
      fontFamily: {
        Libre: ['Libre Baskerville', 'serif'],
      },
      screens: {
        desktop: '1400px',
      },
    },
  },
  plugins: [],
}
