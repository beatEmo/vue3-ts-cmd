const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: './build',
  // 修改打包资源的加载路径
  devServer: {
    // 用于开发环境
    host: 'localhost',
    port: 8080,
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  publicPath: './',
  configureWebpack: {
    //   plugins: [
    //     AutoImport({
    //       resolvers: [ElementPlusResolver()]
    //     }),
    //     Components({
    //       resolvers: [ElementPlusResolver()]
    //     })
    //   ]
  }
})
