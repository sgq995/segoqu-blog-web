module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat']
      },
      boxShadow: {
        'top-sm': '0 -1px 2px 0 rgba(0, 0, 0, 0.05)',
        'top': '0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 -1px 2px 0 rgba(0, 0, 0, 0.06)',
        'top-md': '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)',
        'top-lg': '0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 -4px 6px -2px rgba(0, 0, 0, 0.05)',
        
        'neumorphism-sm': '-1px -1px 2px 0 rgba(255, 255, 255, 0.95), 1px 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'neumorphism': '-1px -1px 3px 0 rgba(255, 255, 255, 0.99), -1px -1px 2px 0 rgba(255, 255, 255, 0.94), 1px 1px 3px 0 rgba(0, 0, 0, 0.1), 1px 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'neumorphism-md': '-4px -4px 12px 2px rgba(255, 255, 255, 0.99), -2px -2px 8px 0px rgba(255, 255, 255, 0.94), 4px 4px 12px 2px rgba(0, 0, 0, 0.1), 2px 2px 8px 0 rgba(0, 0, 0, 0.06)',
        'neumorphism-lg': '-10px -10px 15px -3px rgba(255, 255, 255, 0.99), -4px -4px 6px -2px rgba(255, 255, 255, 0.95), 10px 10px 15px -3px rgba(0, 0, 0, 0.1), 4px 4px 6px -2px rgba(0, 0, 0, 0.05)',

        'inner-neumorphism-sm': 'inset -1px -1px 2px 0 rgba(255, 255, 255, 0.95), inset 1px 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'inner-neumorphism': 'inset -1px -1px 3px 0 rgba(255, 255, 255, 0.99), inset -1px -1px 2px 0 rgba(255, 255, 255, 0.94), inset 1px 1px 3px 0 rgba(0, 0, 0, 0.1), inset 1px 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'inner-neumorphism-md': 'inset -4px -4px 12px 2px rgba(255, 255, 255, 0.99), inset -2px -2px 8px 0px rgba(255, 255, 255, 0.94), inset 4px 4px 12px 2px rgba(0, 0, 0, 0.1), inset 2px 2px 8px 0px rgba(0, 0, 0, 0.06)',
        'inner-neumorphism-lg': 'inset -10px -10px 15px -3px rgba(255, 255, 255, 0.99), inset -4px -4px 6px -2px rgba(255, 255, 255, 0.95), inset 10px 10px 15px -3px rgba(0, 0, 0, 0.1), inset 4px 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  variants: {
    extend: {
      textColor: ['visited'],
      boxShadow: ['active'],
    },
  },
  plugins: [],
}
