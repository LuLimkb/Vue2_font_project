/*
 * @Author: LuLi 3436842252@qq.com
 * @Date: 2023-03-27 16:38:44
 * @LastEditors: LuLi 3436842252@qq.com
 * @LastEditTime: 2023-04-08 22:18:44
 * @FilePath: \app\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭eslint工具
  lintOnSave: false,
  // 代理服务器的配置：解决跨域问题
  devServer: {
    port: '8080', // 设置端口号,监听的目标端口号
    proxy: {
      '/api': {
        target: 'http://gmall-h5-api.atguigu.cn', //API服务器的地址
        ws: true, // 是否代理WebSocket请求
        changeOrigin: true, // 是否跨域，虚拟的站点需要更管origin
        /* pathRewrite: {
          '^/api'是一个正则表达式，表示要匹配请求的url中，全部'http://localhost:8081/api' 转接为 http://localhost:8081/
          '^/api': '',
        } */
      }
    },
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    resolve: {
      fallback: { path: require.resolve("path-browserify") },
    },
  },
})
