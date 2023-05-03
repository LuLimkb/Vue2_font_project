/*
 * @Author: LuLi 3436842252@qq.com
 * @Date: 2023-03-27 16:38:44
 * @LastEditors: LuLi 3436842252@qq.com
 * @LastEditTime: 2023-04-26 16:04:05
 * @FilePath: \app\babel.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
