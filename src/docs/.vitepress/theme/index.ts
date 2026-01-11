// .vitepress/theme/index.ts

import DefaultTheme from "vitepress/theme"
import googleAnalytics from 'vitepress-plugin-google-analytics'

export default {
  ...DefaultTheme,
  enhanceApp: (ctx) => {
    googleAnalytics({
      id: 'G-7RYFSET4H7', // Replace with your GoogleAnalytics ID, which should start with the 'G-'
    })
  }
}