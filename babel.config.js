// const AutoImport = require('unplugin-auto-import/webpack')
// const Components = require('unplugin-vue-components/webpack')
// const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'element-plus',
        customStyleName: (name) => {
          return `element-plus/theme-chalk/${name}.css`
        }
      }
    ]
  ],
  // plugins: [
  //   AutoImport({
  //     resolvers: [ElementPlusResolver()]
  //   }),
  //   Components({
  //     resolvers: [ElementPlusResolver()]
  //   })
  // ],
  presets: ['@vue/cli-plugin-babel/preset']
}
