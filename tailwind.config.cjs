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
      gridRow: {
        /*
        'span-50': 'span 50 / span 50',
        'span-52': 'span 52 / span 52',
        'span-56': 'span 56 / span 56',
        'span-57': 'span 57 / span 57',
        'span-66': 'span 66 / span 66',
        'span-68': 'span 68 / span 68',
        'span-80': 'span 80 / span 80',
        'span-84': 'span 84 / span 84',
        'span-86': 'span 86 / span 86',
        'span-100': 'span 100 / span 100',
        'span-105': 'span 105 / span 105',
        */
        'span-50': 'span 58 / span 58',
        'span-52': 'span 60 / span 60',
        'span-56': 'span 64 / span 64',
        'span-57': 'span 65 / span 65',
        'span-66': 'span 74 / span 74',
        'span-68': 'span 76 / span 76',
        'span-80': 'span 88 / span 88',
        'span-84': 'span 92 / span 92',
        'span-86': 'span 94 / span 94',
        'span-100': 'span 108 / span 108',
        'span-105': 'span 113 / span 113',
      },
    },
  },
  plugins: [],
}
