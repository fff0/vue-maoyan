// 配置文件

module.exports = {
  // 选项
  devServer: {
    // 正向代理的配置
    proxy: {
      '/maoyan': {
      target: 'http://m.maoyan.com/',
      pathRewrite: {
        '^/maoyan': ''
      }
    }
}
  }
}
