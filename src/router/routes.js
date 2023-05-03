/*
 * @Author: LuLi 3436842252@qq.com
 * @Date: 2023-04-22 09:58:42
 * @LastEditors: LuLi 3436842252@qq.com
 * @LastEditTime: 2023-04-28 10:30:42
 * @FilePath: \app\src\router\routes.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 引入一级路由组件
// 在Vue项目中，@符号通常被用作路径别名，指向src目录，需要注意的是，使用@符号路径别名需要先在配置文件中设置别名
import Home from '@/pages/Home/Home.vue'
import Search from '@/pages/Search/Search.vue'
import Login from '@/pages/Login/index.vue'
import Register from '@/pages/Register/index.vue'
import Detail from "@/pages/Detail/index.vue";
import AddCartSuccess from "@/pages/AddCartSuccess/index.vue";
import ShopCart from "@/pages/ShopCart/index.vue";
import Trade from "@/pages/Trade/index.vue"
import Pay from "@/pages/Pay/index.vue"
import PaySuccess from "@/pages/PaySuccess/index.vue";
import Center from '@/pages/Center/index.vue'
// 引入二级路由组件
import MyOrder from "@/pages/Center/MyOrder/index.vue";
import GroupOrder from "@/pages/Center/GroupOrder/index.vue";

export default [
    // 路由懒加载，访问该路由时才会调用该路由组件，更高效
    {
        path: '/home',
        component: () => import('@/pages/Home/Home.vue'),
        // 路由元信息 meta
        meta: { show: true }
    },
    {
        name: 'search',
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
    {
        path: '/detail/:goodId',
        component: Detail,
        meta: { show: true }
    },
    {
        name: 'AddCartSuccess',
        path: '/addCartSuccess',
        component: AddCartSuccess,
        meta: { show: false }
    },
    {
        name: 'ShopCart',
        path: '/shopCart',
        component: ShopCart,
        meta: { show: false }
    },
    {
        name: 'Trade',
        path: '/trade',
        component: Trade,
        meta: { show: false },
        // 路由独享守卫
        beforeEnter(to, from, next) {
            if (from.path == '/shopCart') {
                next();
            } else {
                // 从哪来回哪去
                next(false);
            }
        },
    },
    {
        name: 'Pay',
        path: '/pay',
        component: Pay,
        meta: { show: false },
        // 路由独享守卫
        beforeEnter(to, from, next) {
            if (from.path == '/trade') {
                next();
            } else {
                // 从哪来回哪去
                next(false);
            }
        },
    },
    {
        name: 'PaySuccess',
        path: '/paySuccess',
        component: PaySuccess
    },
    {
        name: 'Center',
        path: '/center',
        component: Center,
        // 二级路由组件
        children: [
            {
                path: 'myOrder',
                component: MyOrder
            },
            {
                path: 'groupOrder',
                component: GroupOrder
            },
            {
                path: '/center',
                redirect: '/center/myOrder'
            },
        ]
    },
    // 重定向，在项目运行起来的时候以及刷新的时候，访问redirect属性里的路径('/home')，立马定位到首页
    {
        path: '*',
        redirect: '/home'
    }
]