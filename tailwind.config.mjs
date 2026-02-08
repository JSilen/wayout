/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1200px',
      },
    },
    extend: {
      maxWidth: {
        '8xl': '1441px',
      },
      screens: {
        'nav': '1024px',
      },
      colors: {
        'keltainen': '#ffe401',
        'musta': '#0d0d0d',
        'musta2': '#212124',
        'valkoinen': '#f0f0f0',
        'info': '#2f80ed',
        'success': '#27ae60',
        'warning': '#e2b93b',
        'error': '#eb5757',
        'black1': '#000000',
        'black2': '#1d1d1d',
        'black3': '#282828',
        'white': '#ffffff',
        'gray1': '#333333',
        'gray2': '#4f4f4f',
        'gray3': '#828282',
        'gray4': '#bdbdbd',
        'gray5': '#e0e0e0',
      },
      fontFamily: {
        'heading': ['Montserrat', 'sans-serif'],
        'body': ['Source Sans 3', 'sans-serif'],
      },
      fontSize: {
        // === Desktop ===

        'h1-d': ['5.25rem', { lineHeight: '84px' }],
        'h2-d': ['2.75rem', { lineHeight: '46.2px' }],
        'h3-d': ['2rem', { lineHeight: '38.4px' }],
        'h4-d': ['1.5rem', { lineHeight: '31.2px' }],
        'h5-d': ['1.25rem', { lineHeight: '28px' }],
        'h6-d': ['1.125rem', { lineHeight: '22px' }],

        // Source Sans 3 (Body)

        'body-large-bold-d': ['1.25rem', { lineHeight: '28px' }],
        'body-large-d': ['1.25rem', { lineHeight: '28px' }],
        'body-medium-bold-d': ['1.125rem', { lineHeight: '22px' }],
        'body-medium-d': ['1.125rem', { lineHeight: '22px' }],
        'body-normal-d': ['1rem', { lineHeight: '24px' }],
        'body-small-bold-d': ['0.875rem', { lineHeight: '21px' }],
        'body-small-d': ['0.875rem', { lineHeight: '21px' }],

        // === Mobile ===

        'h1-m': ['3rem', { lineHeight: '48px' }],
        'h2-m': ['2rem', { lineHeight: '38.4px' }],
        'h3-m': ['1.5rem', { lineHeight: '28.8px' }],
        'h4-m': ['1.25rem', { lineHeight: '26px' }],
        'h5-m': ['1.125rem', { lineHeight: '24px' }],
        'h6-m': ['1rem', { lineHeight: '20px' }],

        // Source Sans 3 (Body)

        'body-large-bold-m': ['1.25rem', { lineHeight: '28px' }],
        'body-large-m': ['1.25rem', { lineHeight: '28px' }],
        'body-medium-bold-m': ['1.125rem', { lineHeight: '25px' }],
        'body-medium-m': ['1.125rem', { lineHeight: '25px' }],
        'body-normal-m': ['1rem', { lineHeight: '22px' }],
        'body-small-bold-m': ['0.875rem', { lineHeight: '19px' }],
        'body-small-m': ['0.875rem', { lineHeight: '19px' }],
      },

      spacing: {
        // === Mobiili ===
        's-1-m': '0.5rem',    // 8px
        's-2-m': '0.5rem',    // 8px
        's-3-m': '1.125rem',  // 18px
        's-4-m': '1.5rem',    // 24px
        's-5-m': '1.875rem',  // 30px
        's-6-m': '2.625rem',  // 42px
        's-7-m': '3.375rem',  // 54px
        's-8-m': '3.75rem',   // 60px
        's-9-m': '4.5rem',    // 72px
        's-10-m': '5.625rem', // 90px
        // === Desktop ===
        's-1-d': '0.5rem',    // 8px
        's-2-d': '1rem',      // 16px
        's-3-d': '1.5rem',    // 24px
        's-4-d': '2rem',      // 32px
        's-5-d': '2.5rem',    // 40px
        's-6-d': '3.5rem',    // 56px
        's-7-d': '4.5rem',    // 72px
        's-8-d': '5rem',      // 80px
        's-9-d': '6rem',      // 96px
        's-10-d': '7.5rem',   // 120px
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}