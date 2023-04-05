/*
 * @Author: LuLi 3436842252@qq.com
 * @Date: 2023-04-01 19:45:38
 * @LastEditors: LuLi 3436842252@qq.com
 * @LastEditTime: 2023-04-01 20:16:46
 * @FilePath: \app\src\store\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

// 在总仓库store中引入以下的各个模块进行统一管理
import home from './home/index'
import search from './search/index'

// 对外暴露Store类的一个实例
export default new Vuex.Store({
    // 注册以上引入的各个模块
    modules: {
        home,
        search
    }
})