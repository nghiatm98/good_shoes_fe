/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto'],
        gilroy: ['Gilroy']
      },
      screens: {
        sx: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '1.5xl': '1440px',
        '2xl': '1536px',
        '3xl': '1920px'
      },
      zIndex: {
        0: '0',
        1: '1',
        min: '-1',
        max: '999'
      },
      container: {
        screens: {
          '1.5xl': '1240px',
          '3xl': '1680px'
        },
        padding: '0rem',
        center: true
      },
      colors: {
        _494: '#494851',
        _969: '#969696',
        _f0c: '#F0C417',
        _ACA: '#ACACAC',
        _073: '#073ADE',
        _808: '#808080',
        _079: '##0791dec4',
        _000_3: '#0000004d',
        _000_9: '#000000e6',
        _000_6: '#00000099',
        _d9d: '#d9d9d9',
        _f0f: '#f0f0f0',
        _e8e: '#e8e8e8',
        _f5f: '#f5f5f5',
        _a8a: '#a8a8a8',
        _128: '#128a09',
        _e5e: "#e5e5e5",
      },
      fontSize: {
        _10: '10px',
        _12: '12px',
        _14: '14px',
        _16: '16px',
        _18: '18px',
        _20: '20px',
        _24: '24px',
        _28: '28px',
        _32: '32px',
        _36: '36px',
        _40: '40px',
        _48: '48px',
        _60: '60px',
        _64: '64px',
        _90: '90px',
      },
      spacing: {
        18: '18px',
        22: '22px',
        37: '37px',
        50: '50px'
      },
      boxShadow: {
        card: '0px 4px 4px 0px rgba(0, 0, 0, 0.15)',
        box: '0px 0px 150px 16px rgba(0, 0, 0, 0.20)'
      },
      backgroundColor: {
        select: ''
      }
    }
  },
  plugins: []
}
