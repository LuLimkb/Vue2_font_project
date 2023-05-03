/*
 * @Author: LuLi 3436842252@qq.com
 * @Date: 2023-04-27 20:50:40
 * @LastEditors: LuLi 3436842252@qq.com
 * @LastEditTime: 2023-04-28 08:57:21
 * @FilePath: \app\src\plugins\myPlugins.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// Vue插件一定暴露一个对象
let myPlugins = {};
// Vue的自定义插件配置
myPlugins.install = function (Vue, options) {
    // 全局指令
    Vue.directive(options.name, (element, p) => {
        // 内容改为大写
        element.innerHTML = p.value.toUpperCase();

    })
}

export default myPlugins;