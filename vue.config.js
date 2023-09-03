const { defineConfig } = require('@vue/cli-service')
const publicPath = process.env.NODE_ENV === 'production' ? '/brain/' : '/'

module.exports = defineConfig({
  publicPath: publicPath,
  pwa: {
  name: 'Brain',
  //  themeColor: '#4DBA87',
  //  msTileColor: '#000000',
  appleMobileWebAppCapable: 'yes',
  appleMobileWebAppStatusBarStyle: 'black',
  manifestOptions: {
    share_target: {
      action: publicPath,
      method: "GET",
      enctype: "application/x-www-form-urlencoded",
      params: {
        title: "title",
        text: "text",
        url: "url"
      }
    },
  }
},

  transpileDependencies: true,
})
