<!--
<Header></Header> @Date: 2023-03-27 16:38:44
 * @LastEditors: LuLi 3436842252@qq.com
 * @LastEditTime: 2023-04-08 20:52:30
 * @FilePath: \app\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <Header></Header>
    <!-- 路由组件出口展示的地方 -->
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header/Header.vue';
import Footer from './components/Footer/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted() {
    // 挂载阶段，通知Vuex发出请求，获取数据，将数据存储于仓库中,写在App组件中，就只需要发一次请求将数据存储到Vuex中，因为App就挂载一次
    this.$store.dispatch('CategoryList') // 字符串中的内容是actions部分中的目标函数
  }
}
</script>

<style></style>