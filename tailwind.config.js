/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      night: '#0B071D',
      dark: '#0B0C1E',
      grey: '#BDBBD7',
      silver: '#333333',
      pearl: '#cacaca',
      soft: '#f4f4f4',
      light: '#f9f9f9',
      soc: {
        facebook: '#2d609b',
        instagram: '#df0042',
        linkedin: '#2f7cb8',
        twitter: '#00c3f3',
        whatsapp: '#5bbe54',
        youtube: '#ff0000',
        tiktok: '#000000',
        zoom: '#3b9bff'
      },
      primary: {
        10: '#DCDBE4',
        20: '#6C6A7C',
        50: '#BDBBD7',
        100: '#6240F5',
        200: '#4E31CE',
        300: '#34237C'
      },
      green: '#40F5D4',
      blue: {
        100: '#4FABF8',
        200: '#3010BA'
      }
    },
    extend: {
      screens: {
        'lg': '1080px',
        '2xl': '1440px',
        '3xl': '1700px'
      },
      lineHeight: {
        tight: '1.2',
        snug: '1.3',
        reduced: '1.35'
      },
      fontSize: {
        '7xl': '4.7rem',
        '6xl': '4rem',
        '5xl': '3rem',
        '4xl': '2.25rem',
        '3xl': '1.875rem',
        '2xl': '1.5rem',
        'xl': '1.25rem',
        'lg': '1.125rem'
      },
      backgroundImage: {
        facebook: 'url(./../images/icons/social/facebook.svg)',
        instagram: 'url(./../images/icons/social/instagram.svg)',
        linkedin: 'url(./../images/icons/social/linkedin.svg)',
        twitter: 'url(./../images/icons/social/twitter.svg)',
        whatsapp: 'url(./../images/icons/social/whatsapp.svg)',
        youtube: 'url(./../images/icons/social/youtube.svg)',
        tiktok: 'url(./../images/icons/social/tiktok.svg)',
        zoom: 'url(./../images/icons/social/zoom.svg)',
        spacetop: 'linear-gradient(to top, #0B0C1E 35%, transparent 100%)',
        spacebottom: 'linear-gradient(to bottom, #0B0C1E 45%, transparent 100%)'
      },
      content: {
        empty: "''"
      },
      dropShadow: {
        step: '0px 40px 40px rgba(0, 0, 0, 0.25)',
        sector: '24px 21px 11px rgba(0, 0, 0, 0.69)'
      },
      transitionProperty: {
        lang: 'max-height, padding-top, padding-bottom'
      },
      animation: {
        moon: 'spin 90s linear infinite reverse'
      },
      blur: {
        '4xl': '100px'
      }
    }
  },
  plugins: [],
}
