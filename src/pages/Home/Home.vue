<!--
 * @Author: LuLi 3436842252@qq.com
 * @Date: 2023-03-29 16:55:20
 * @LastEditors: LuLi 3436842252@qq.com
 * @LastEditTime: 2023-04-25 11:00:18
 * @FilePath: \app\src\pages\Home\Home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <!-- 注意：根节点只能有一个 -->
    <div>
        <!-- 三级联动全局组件，已经是全局组件了不需要引入就可以使用 -->
        <TypeNav></TypeNav>
        <ListContainer></ListContainer>
        <Recommend></Recommend>
        <Rank></Rank>
        <Like></Like>
        <!-- 自定义标签中可以使用 v-for -->
        <Floor v-for="floor in floorList" :key="floor.id" :list="floor"></Floor>
        <Brand></Brand>
    </div>
</template>

<script>
// 引入其余组件
import ListContainer from './ListContainer/index.vue'
import Recommend from './Recommend/index.vue'
import Rank from './Rank/index.vue'
import Like from './Like/index.vue'
import Floor from './Floor/index.vue'
import Brand from './Brand/index.vue'
import { mapState } from 'vuex'

export default {
    name: 'Home',
    components: {
        ListContainer,
        Recommend,
        Rank,
        Like,
        Floor,
        Brand
    },
    mounted() {
        // 派发actions,获取floor组件的数据
        this.$store.dispatch('getFloorList');
        
    },
    computed: {
        ...mapState({
            floorList: state => state.home.floorList
        })
    }
}
</script>

<style></style>