module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: {
          light: '#202024',
          DEFAULT: '#121214',
          dark: '#009eeb',
        },
        purple: {
          light: '#ff7ce5',
          DEFAULT: '#8257e6',
          dark: '#ff16d1',
          hover: '#9466ff',
        },        
        gray: {
          light: '#ff7ce5',
          DEFAULT: '#e1e1e6',
          dark: '#ff16d1',
          title: '#e1e1e6',
          text: '#a8a8b3',
        },
        text: {
          light: '#ff7ce5',
          DEFAULT: '#a8a8b3',
          dark: '#ff16d1',
        },
        green: {
          darkest: '#1f2d3d',
          dark: '#3c4858',
          DEFAULT: '#04d361',
          light: '#e0e6ed',
          lightest: '#f9fafc',
        }
      }      
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
