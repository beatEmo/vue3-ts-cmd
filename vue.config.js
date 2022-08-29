const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: './build',
  // 修改打包资源的加载路径
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
