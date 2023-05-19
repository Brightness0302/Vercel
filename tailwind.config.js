/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

// Custom color with css variable color in __theme_color.scss
function customColors(cssVar) {
  return ({ opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${cssVar}), ${opacityValue})`;
    }
    if (opacityVariable !== undefined) {
      return `rgba(var(${cssVar}), var(${opacityVariable}, 1))`;
    }
    return `rgb(var(${cssVar}))`;
  };
}

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "background":"white",
        "d-background":"black",
        "cornflowerblue":"cornflowerblue", 
        "aliceblue":"aliceblue", 
        "antiquewhite":"antiquewhite", 
        "beige":"beige",
        "wheat":"wheat",
        "thistle":"thistle",
        "cadetblue":"cadetblue",
        "slategrey":"slategrey",
        "white-1/2":"hsla(0,0%,100%,.7)",
        "black-1/2":"hsla(0,0%,20%,.7)",
        "light-brown":"#ff9900",
      },
      spacing: {
        '150': '38rem',
      },
      minWidth: {
        '56': '224px', 
      }, 
      maxWidth: {
        '8hr': '800px', //100*8
      }, 
      lineHeight: {
        '4nt': '76px', //19*4
      },
      fontSize: {
        '4nt': '76px', //19*4
      },
      blur: {
        light: '1px', 
        xs: '2px',
      },
    },
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '900',
    }
  },
  plugins: [],
}