// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { aliases, fa } from 'vuetify/iconsets/fa'
import { mdi } from 'vuetify/iconsets/mdi'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  theme: {
    themes: {
      light: {
        primary: '#EEEEEE', // Custom primary color
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c',
      },
    },
  },
  breakpoint: {
    thresholds: {
      xs: 340, // Custom breakpoint for xs
      sm: 540, // Custom breakpoint for sm
      md: 800, // Custom breakpoint for md
      lg: 1280, // Custom breakpoint for lg
      xl: 1920, // Custom breakpoint for xl
    },
    scrollBarWidth: 10, // optional
  },

  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
      mdi
    },
  },
})