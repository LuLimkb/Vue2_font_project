// 配置路由：

// 引入
import Vue from "vue";
import VueRouter from "vue-router";

// 使用插件
Vue.use(VueRouter);

// 引入路由组件
// 在Vue项目中，@符号通常被用作路径别名，指向src目录，需要注意的是，使用@符号路径别名需要先在配置文件中设置别名
import Home from '@/pages/Home/Home.vue'
import Search from '@/pages/Search/Search.vue'
import Login from '@/pages/Login/Login.vue'
import Register from '@/pages/Register/Register.vue'

// 防止编程式导航时重复点击路由发生报错，声明式导航没有这个问题
/* 解决 Vue 重复点击相同路由，出现 Uncaught (in promise) NavigationDuplicated: Avoided redundant navigation 问题 .
报错内容：
Uncaught(in promise) NavigationDuplicated: Avoided redundant navigation to current location: "/home". */
const VueRouterPush = VueRouter.prototype.push // 先把VueRouter原型对象上的push，先保存一份
VueRouter.prototype.push = function push(to) { // 开始重写原型对象上的push
    return VueRouterPush.call(this, to).catch(err => err)
}
const VueRouterReplace = VueRouter.prototype.replace // 先把VueRouter原型对象上的replace，先保存一份
VueRouter.prototype.replace = function replace(to) { // 开始重写原型对象上的replace
    return VueRouterReplace.call(this, to).catch(err => err)
}
// 配置路由：
export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
            // 路由元信息 meta
            meta: { show: true }
        },
        {
            name:'search',
            path: '/search/:keyword?', // .../:keyword占位符和冒号绑定keyword传递params参数,问号？表示params参数可传可不传
            component: Search,
            // 路由元信息 meta
            meta: { show: true }
        },
        {
            path: '/login',
            component: Login,
            // 路由元信息 meta
            meta: { show: false }
        },
        {
            path: '/register',
            component: Register,
            // 路由元信息 meta
            meta: { show: false }
        },
        // 重定向，在项目运行起来的时候以及刷新的时候，访问redirect属性里的路径('/home')，立马定位到首页
        {
            path: '*',
            redirect: '/home'
        }
    ]
})

