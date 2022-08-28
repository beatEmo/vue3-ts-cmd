const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true
  // configureWebpack: {
  //   plugins: [
  //     AutoImport({
  //       resolvers: [ElementPlusResolver()]
  //     }),
  //     Components({
  //       resolvers: [ElementPlusResolver()]
  //     })
  //   ]
  // }
})
