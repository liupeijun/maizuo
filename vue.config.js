module.exports = {
  lintOnSave: false,
  // 选项...
  productionSourceMap: false,
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    },
    proxy: {
      '/ajax': {
        target: 'http://m.maoyan.com',
        changeOrigin: true
      },
      '/api': {
        target: 'aaaaaa'
      }
    }
  }
}
