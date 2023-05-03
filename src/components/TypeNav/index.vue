<!--
 * @Author: LuLi 3436842252@qq.com
 * @Date: 2023-03-31 16:20:29
 * @LastEditors: LuLi 3436842252@qq.com
 * @LastEditTime: 2023-04-14 12:36:11
 * @FilePath: \app\src\pages\Home\TypeNav\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="type-nav">
        <div class="container">
            <!-- 事件委派 -->
            <div @mouseleave="leaveIdex" @click="goSearch">
                <h2 class="all" @mouseenter="enterShow">全部商品分类</h2>
                <!-- 三级联动 -->
                <!-- Vue.js中使用过度动画 -->
                <transition name="sort">
                    <div class="sort" v-show="show">
                        <!-- 利用编程式导航和事件委托实现路由的跳转和参数传递 -->
                        <div class="all-sort-list2">
                            <!-- 一级分类 -->
                            <div class="item bo" v-for="(c1, index) in categoryList" :key="c1.categoryId">
                                <h3 @mouseenter="changeIndex(index)" :class="{ curretbg: currentIndex == index }">
                                    <a :data-categoryName="c1.categoryName" :data-category1Id="c1.categoryId">{{
                                        c1.categoryName }}</a>
                                </h3>
                                <!-- 二级分类 -->
                                <div class="item-list clearfix"
                                    :style="{ display: currentIndex == index ? 'block' : 'none' }">
                                    <div class="subitem" v-for="(c2, index) in c1.categoryChild" :key="c2.categoryId">
                                        <dl class="fore">
                                            <dt>
                                                <a :data-categoryName="c2.categoryName" :data-category2Id="c2.categoryId">
                                                    {{
                                                        c2.categoryName }}</a>
                                            </dt>
                                            <!-- 三级分类 -->
                                            <dd>
                                                <em v-for="(c3, index) in c2.categoryChild" :key="c3.categoryId">
                                                    <a :data-categoryName="c3.categoryName"
                                                        :data-category3Id="c3.categoryId">{{ c3.categoryName }}</a>
                                                </em>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
            <nav class="nav">
                <a href="###">服装城</a>
                <a href="###">美妆馆</a>
                <a href="###">尚品汇超市</a>
                <a href="###">全球购</a>
                <a href="###">闪购</a>
                <a href="###">团购</a>
                <a href="###">有趣</a>
                <a href="###">秒杀</a>
            </nav>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
// 引入全部的lodash功能函数
// import _ from 'lodash';
// 按需引入
import throttle from 'lodash/throttle';

export default {
    name: 'TypeNav',
    data() {
        return {
            currentIndex: -1,
            show: true
        }
    },
    mounted() {
        // 进入Search组件中进行挂载阶段时，对三级分类进行隐藏
        if (this.$route.path !== '/home') {
            this.show = false;
        }
    },
    computed: {
        ...mapState({ // 对象形式
            // 右侧为一个函数，当使用这个计算属性的时候，右侧函数会立即执行一次
            // 输入一个state参数，即为大仓库中的数据
            categoryList: state => state.home.categoryList
        })
    },
    methods: {
        // 鼠标进入事件的回调：修改响应式数据 currentIndex 
        changeIndex: throttle(function (index) { // 解决以下问题使用节流方法
            // index :鼠标移到某一个一级分类的元素的索引值
            // 正常情况下（用户慢慢操作）：鼠标进入每一个一级分类都会触发鼠标进入事件
            // 非正常情况（用户操作过快）：用户操作过快浏览器反应不过来，导致只有部分事件被触发，若事件回调函数中有大量业务逻辑，则会出现卡顿问题
            this.currentIndex = index;
        }, 50),

        enterShow() {
            this.show = true;
        },

        // 鼠标离开事件回调：修改响应式数据 currentIndex 
        leaveIdex() {
            this.currentIndex = -1;
            // 此处设置判断只有进入到Search 组件中时才会执行
            if (this.$route.path != '/home') {
                this.show = false;
            }
        },
        // 三级分类中点击事件回调函数———— 事件委托实现
        goSearch(event) {
            // 最好的解决办法：事件委派 + 编程式导航
            // 事件委派：将所有子节点的事件委派给父节点
            // 目标：点击 a 标签的时候才会进行路由跳转，那怎么才能实现点击 a 标签是才会触发事件回调，以及确定了是 a 标签之后如何区分一级、二级、三级分类

            // 解决问题一：通过给 a 标签添加自定义属性 data-categoryName，通过判断是否存在自定义属性来确定是否是 a 标签
            let element = event.target; // 获取当前触发事件的目标节点
            // 节点中有 dataset 属性，可以获取到节点中的自定义属性以及属性值
            // 对象解构！
            let { categoryname, category1id, category2id, category3id } = element.dataset;
            // 如果标签带有自定义属性categoryname，则一定是a 标签
            if (categoryname) {
                // 整理跳转的参数
                var location = {
                    name: 'search',
                    query: { categoryName: categoryname }
                };

                // 三级分类
                if (category1id) {
                    location.query.category1Id = category1id;
                }
                else if (category2id) {
                    location.query.category2Id = category2id;

                }
                else {
                    location.query.category3Id = category3id;

                }
                // 判断：如果路由跳转时，带有params参数就一起传递
                if (this.$route.params.keyword) {
                    location = {
                        name: 'search',
                        query: { categoryName: categoryname },
                        params: this.$route.params
                    };
                }
                this.$router.push(location);

            }
        }
    }
}
</script>

<style scoped>
.type-nav {
    border-bottom: 2px solid #e1251b;
}

.type-nav .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;
}

.type-nav .container .all {
    width: 210px;
    height: 45px;
    background-color: #e1251b;
    line-height: 45px;
    text-align: center;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
}

.type-nav .container .nav a {
    height: 45px;
    margin: 0 22px;
    line-height: 45px;
    font-size: 16px;
    color: #333;
}

.type-nav .container .sort {
    left: 0;
    top: 45px;
    width: 210px;
    height: 510px;
    position: absolute;
    background: #fafafa;
    z-index: 999;
}

/* 过渡动画的样式 */
/* 动画开始状态 */
.sort-enter {
    height: 0px;
}

/* 动画结束状态 */
.sort-enter-to {
    height: 510px;
}

/* 定义动画事件，速率 */
.sort-enter-active {
    transition: all 0.5s linear;
}

/* 离开动画 */
.sort-leave {
    height: 510px;
}

/* 动画结束状态 */
.sort-leave-to {
    height: 0px;
}

/* 定义动画事件，速率 */
.sort-leave-active {
    transition: all 0.5s linear;
}

.type-nav .container .sort .all-sort-list2 .item h3 {
    line-height: 30px;
    font-size: 14px;
    font-weight: 400;
    overflow: hidden;
    padding: 0 20px;
    margin: 0;
}

.type-nav .container .sort .all-sort-list2 .item .curretbg {
    background-color: skyblue;
}

.type-nav .container .sort .all-sort-list2 .item h3 a {
    color: #333;
}

.type-nav .container .sort .all-sort-list2 .item .item-list {
    display: none;
    position: absolute;
    width: 734px;
    min-height: 460px;
    background: #f7f7f7;
    left: 210px;
    border: 1px solid #ddd;
    top: 0;
    z-index: 9999 !important;
}

.type-nav .container .sort .all-sort-list2 .item .item-list .subitem {
    float: left;
    width: 650px;
    padding: 0 4px 0 8px;
}

.type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl {
    border-top: 1px solid #eee;
    padding: 6px 0;
    overflow: hidden;
    zoom: 1;
}

.type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl.fore {
    border-top: 0;
}

.type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl dt {
    float: left;
    width: 54px;
    line-height: 22px;
    text-align: right;
    padding: 3px 6px 0 0;
    font-weight: 700;
}

.type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl dd {
    float: left;
    width: 415px;
    padding: 3px 0 0;
    overflow: hidden;
}

.type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl dd em {
    float: left;
    height: 14px;
    line-height: 14px;
    padding: 0 8px;
    margin-top: 5px;
    border-left: 1px solid #ccc;
}

/* 通过js实现 */
/* .type-nav .container .sort .all-sort-list2 .item:hover .item-list {
    display: block;
} */
</style>

