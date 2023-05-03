/*
 * @Author: LuLi 3436842252@qq.com
 * @Date: 2023-03-29 17:04:55
 * @LastEditors: LuLi 3436842252@qq.com
 * @LastEditTime: 2023-04-27 17:14:35
 * @FilePath: \app\src\router\router.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 配置路由：

// 引入
import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index";

// 使用插件
Vue.use(VueRouter);

import routes from "./routes";

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
let router = new VueRouter({
    routes,
    // Vue的滚动行为
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return { y: 0 }
    },

})

// 全局路由守卫：前置、解析、后置
// 任意路由间跳转前都会触发
router.beforeEach(async (to, from, next) => { // 前置:在路由跳转之前进行判断
    // to：可以获取到要跳转到的目标路由（路由跳转后的终点路由）的信息
    // from：可以获取到开始路由(路由跳转的起点路由)的信息
    // next：放行函数， next()放行  next(path)放行到指定路由  后面学习：next(false) next(error)
    let token = store.state.user.token;
    let name = store.state.user.userInfo.name;
    // 用户已经登录
    if (token) {
        // 已经登录了还想去登录界面，阻止路由跳转，回到首页
        if (to.path == '/login' || to.path == '/register') {
            alert('请先退出登录后再进行操作！')
            next('/')
        } else { // 登录后，去的不是login登录界面，而是去其他页面【home|search|detail|shopcart】
            if (name) { // 已有用户信息，就跳转
                next()
            } else { // 没有用户信息，就派发actions获取用户信息后再跳转
                try {
                    // 派发actions，通过token获取用户信息
                    await store.dispatch('getUserInfo');
                    next();
                } catch (error) { // token失效的情况，获取不到用户信息，就要重新登陆
                    // 要再派发actions消除本地数据后再跳转，也就是退出登录后再跳转
                    await store.dispatch('userLogout');
                    next('/login');
                }
            }
        }
    } else { // 用户未登录的情况 不能去结算交易、支付、个人中心相关界面，去其他界面就放行
        let toPath = to.path;
        if (toPath.indexOf('/pay') != -1 || toPath.indexOf('/center') != -1 || toPath.indexOf('/trade') != -1) {
            // 登录后通过query参数直接跳到想去的界面，也就是进入登录界面前的界面
            next('/login?redirect=' + toPath)
        } else {
            next()
        }
    }
})

export default router;

