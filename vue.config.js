const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: process.env.NODE_ENV === "production" ? "/VizUncertainty_ErrorBars/" : "/",
  productionSourceMap: false,
  parallel: false,
  publicPath: ''
})
