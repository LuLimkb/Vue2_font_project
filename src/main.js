/*
 * @Author: LuLi 3436842252@qq.com
 * @Date: 2023-03-27 16:38:44
 * @LastEditors: LuLi 3436842252@qq.com
 * @LastEditTime: 2023-04-27 20:59:03
 * @FilePath: \app\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue';
import App from './App.vue'
// 引入三级联动组件 ———— 全局组件
import TypeNav from '@/components/TypeNav/index.vue'
// 引入轮播图组件 ———— 全局组件
import Carousel from "@/components/Carousel/index.vue";
// 引入路由
import router from '@/router/router.js';
// 引入Vuex管理库
import store from './store/index';
// 引入mockServe.js模拟数据
import mockServe from './mock/mockServe';
// 引入swiper样式
import 'swiper/css/swiper.css';
// 引入分页器———— 全局组件
import Pagination from '@/components/pagination/index.vue'
// 统一接口API文件夹中的全部请求函数
// 统一引入
import *as API from '@/API/index'
// 按需引入element-ui
import { Button, MessageBox } from "element-ui";
// element-ui样式
import 'element-ui/lib/theme-chalk/index.css';
// 引入图片懒加载插件
import VueLazyload from 'vue-lazyload'
// 引入表单验证插件
import'@/plugins/myPlugins'


// 注册全局组件 TypeNav
Vue.component('TypeNav', TypeNav)
// 注册全局组件 Carousel
Vue.component('Carousel', Carousel)
// 注册全局组件 Pagination
Vue.component('Pagination', Pagination)
// 注册element-ui组件
Vue.component(Button.name, Button);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

// 注册图片懒加载插件
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: './assets/images/2.jfif',
  loading: './assets/images/1.jfif',
  attempt: 1
})

// 引入Vue的自定义插件
import myPlugins from './plugins/myPlugins';
// 注册Vue的自定义插件
Vue.use(myPlugins, {
  name: 'upper'
})
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  // 注册全局事件总线 $bus
  beforeCreate() {
    Vue.prototype.$bus = this
    // 类似于全局时间总线，在Vue的原型上加入API属性即可全局使用API中的接口函数
    // 不需要再通过Vuex发请求存储数据，直接在组件中发请求获取或者提交数据给服务器
    Vue.prototype.$API = API;
  },
  // 注册路由：key：value键值对简写：kv一致省略v的写法
  // 注册之后，非路由|路由组件身上都有$route  $router属性
  router,
  // 注册Vuex : 所有组件实例身上会增加一个 $store 属性，通过这个属性以及其中的方法调用使用Vuex管理库
  store
}).$mount('#app')

