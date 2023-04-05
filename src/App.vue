<!--
<Header></Header> @Date: 2023-03-27 16:38:44
 * @LastEditors: LuLi 3436842252@qq.com
 * @LastEditTime: 2023-03-29 17:26:53
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
  }
}
</script>

<style></style>