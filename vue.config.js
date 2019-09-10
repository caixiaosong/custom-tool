const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}



const PUBLIC_PATH = process.env.NODE_ENV === 'production'
  ? '/'
  : '/'

module.exports = {
  // 项目部署基础
  // 默认情况下，我们假设你的应用将被部署在域的根目录下,
  // 例如：https://www.my-app.com/
  // 默认：'/'
  // 如果您的应用程序部署在子路径中，则需要在这指定子路径
  // 例如：https://www.foobar.com/my-app/
  // 需要将它改为'/my-app/'
  // iview-admin线上演示打包路径： https://file.iviewui.com/admin-dist/
  publicPath: PUBLIC_PATH,
  // 如果你不需要使用eslint，把lintOnSave设为false即可
  lintOnSave: false,
  // 设为false打包时不生成.map文件
  productionSourceMap: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))

    //参数 prefix 设置为 true 后，所有 iView 组件标签名都可以使用前缀 i-
    //所以 prefix: false 则是关闭前缀i-
    //非 template/render 模式下，任然需要 i-
    config.module.rule("iview-loader").test(/\.vue$/).use('iview-loader').loader("iview-loader").options({ prefix: false }).end()
    config.module.rule("less-loader").test(/\.less$/).use('less-loader').loader("less-loader").end()
  },

}