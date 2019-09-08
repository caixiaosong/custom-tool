module.exports = {
  chainWebpack: config => {
    //参数 prefix 设置为 true 后，所有 iView 组件标签名都可以使用前缀 i-
    //所以 prefix: false 则是关闭前缀i-
    //非 template/render 模式下，任然需要 i-
    config.module.rule("iview-loader").test(/\.vue$/).use('iview-loader').loader("iview-loader").options({ prefix: false }).end()
  },
}