<!--
 * @Author: LuLi 3436842252@qq.com
 * @Date: 2023-03-27 19:59:06
 * @LastEditors: LuLi 3436842252@qq.com
 * @LastEditTime: 2023-04-25 11:13:52
 * @FilePath: \project-SPH\app\src\components\Header.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <header class="header">
        <!-- 头部的第一行 -->
        <div class="top">
            <div class="container">
                <div class="loginList">
                    <p>尚品汇欢迎您！</p>
                    <!-- 未登录时 -->
                    <p v-if="!userName">
                        <span>请</span>
                        <!-- 声明式路由导航 -->
                        <router-link to="/login">登录</router-link>
                        <router-link class="register" to="/register">免费注册</router-link>
                    </p>
                    <!-- 登录后 -->
                    <p v-else>
                        <a>{{ userName }}</a>
                        <a class="register" @click="logout">退出登录</a>
                    </p>
                </div>
                <div class="typeList">
                    <router-link to="/center/myOrder">我的订单</router-link>
                    <router-link to="/shopCart">我的购物车</router-link>
                    <a href="###">我的尚品汇</a>
                    <a href="###">尚品汇会员</a>
                    <a href="###">企业采购</a>
                    <a href="###">关注尚品汇</a>
                    <a href="###">合作招商</a>
                    <a href="###">商家后台</a>
                </div>
            </div>
        </div>
        <!--头部第二行 搜索区域-->
        <div class="bottom">
            <h1 class="logoArea">
                <router-link class="logo" to="/home">
                    <img src="./images/logo.png" alt="">
                </router-link>
            </h1>
            <div class="searchArea">
                <form action="###" class="searchForm">
                    <input type="text" id="autocomplete" class="input-error input-xxlarge" v-model="keyword" />
                    <!-- 此处要进行编程式导航 -->
                    <button class="sui-btn btn-xlarge btn-danger" type="button" @click="goSearch">搜索</button>
                </form>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            keyword: ''
        }
    },
    mounted() {
        // 通过全局事件总线清除关键字
        this.$bus.$on('clear', () => {
            this.keyword = '';
        })
    },
    methods: {
        // 搜索按钮的回调函数，点击后向搜索路由Search跳转
        goSearch() {
            // 调用$router的API
            // 参数传递：方法一：字符串形式
            // this.$router.push('/search/' + this.keyword + '?k=' + this.keyword.toUpperCase());
            // 方法二：模板字符串
            // ${} 的作用是可以方便地将变量、表达式和函数调用的值插入到(模板)字符串中，提高了字符串的可读性和可维护性
            // this.$router.push(`/search/${this.keyword}?k=${this.keyword.toUpperCase()}`)
            // 方法三：对象形式
            // 如果有query参数也一起传递
            if (this.$route.query) {
                let location = {
                    name: 'search',
                    params: {
                        keyword: this.keyword || undefined
                    },
                    query: this.$route.query
                }
                this.$router.push(location)
            }
        },
        //  退出登录
        async logout() {
            try {
                await this.$store.dispatch('userLogout');
                this.$router.push('/home');
            } catch (error) {
                alert(error.message)
            }
        }
    },
    computed: {
        // 用户名：
        userName() {
            return this.$store.state.user.userInfo.name
        }
    }
}
</script>

<style lang="css" scoped>
.header>.top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;
}

.header>.top .container {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
}

.header>.top .container .loginList {
    float: left;
}

.header>.top .container .loginList p {
    float: left;
    margin-right: 10px;
}

.header>.top .container .loginList p .register {
    border-left: 1px solid #b3aeae;
    padding: 0 5px;
    margin-left: 5px;
}

.header>.top .container .typeList {
    float: right;
}

.header>.top .container .typeList a {
    padding: 0 10px;
}

.header>.top .container .typeList a+a {
    border-left: 1px solid #b3aeae;
}

.header>.bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
}

.header>.bottom .logoArea {
    float: left;
}

.header>.bottom .logoArea .logo img {
    width: 175px;
    margin: 25px 45px;
}

.header>.bottom .searchArea {
    float: right;
    margin-top: 35px;
}

.header>.bottom .searchArea .searchForm {
    overflow: hidden;
}

.header>.bottom .searchArea .searchForm input {
    box-sizing: border-box;
    width: 490px;
    height: 32px;
    padding: 0px 4px;
    border: 2px solid #ea4a36;
    float: left;
}

.header>.bottom .searchArea .searchForm input:focus {
    outline: none;
}

.header>.bottom .searchArea .searchForm button {
    height: 32px;
    width: 68px;
    background-color: #ea4a36;
    border: none;
    color: #fff;
    float: left;
    cursor: pointer;
}

.header>.bottom .searchArea .searchForm button:focus {
    outline: none;
}
</style>