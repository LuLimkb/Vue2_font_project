/*
 * @Author: LuLi 3436842252@qq.com
 * @Date: 2023-03-27 16:38:44
 * @LastEditors: LuLi 3436842252@qq.com
 * @LastEditTime: 2023-04-01 16:40:20
 * @FilePath: \app\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import App from './App.vue'
// 引入三级联动组件 ———— 全局组件
import TypeNav from '@/components/TypeNav/index.vue'
// 引入路由
import router from '@/router/router.js';
// 引入Vuex管理库
import store from './store/index';

// 注册全局组件 TypeNav
Vue.component('TypeNav', TypeNav)

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  // 注册路由：key：value键值对简写：kv一致省略v的写法
  // 注册之后，非路由|路由组件身上都有$route  $router属性
  router,
  // 注册Vuex : 所有组件实例身上会增加一个 $store 属性，通过这个属性以及其中的方法调用使用Vuex管理库
  store
}).$mount('#app')

