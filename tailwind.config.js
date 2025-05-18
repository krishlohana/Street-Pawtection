/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6FFFA',
          100: '#B2F5EA',
          200: '#81E6D9',
          300: '#4FD1C5',
          400: '#38B2AC',
          500: '#319795',
          600: '#2C7A7B',
          700: '#285E61',
          800: '#234E52',
          900: '#1D4044',
          950: '#0D3030',
        },
        secondary: {
          50: '#FFFAF0',
          100: '#FEEBC8',
          200: '#FBD38D',
          300: '#F6AD55',
          400: '#ED8936',
          500: '#DD6B20',
          600: '#C05621',
          700: '#9C4221',
          800: '#7B341E',
          900: '#652B19',
          950: '#4F2210',
        },
        success: {
          50: '#F0FFF4',
          500: '#48BB78',
          700: '#276749',
        },
        warning: {
          50: '#FFFBEB',
          500: '#ECC94B',
          700: '#975A16',
        },
        error: {
          50: '#FFF5F5',
          500: '#F56565',
          700: '#C53030',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')",
      },
    },
  },
  plugins: [],
};