<!--
 * @Author: LuLi 3436842252@qq.com
 * @Date: 2023-04-16 15:56:32
 * @LastEditors: LuLi 3436842252@qq.com
 * @LastEditTime: 2023-04-21 22:30:45
 * @FilePath: \app\src\components\pagination\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <!-- 全局组件：分页器 -->
    <div class="pagination">
        <button :disabled="pageNo == 1" @click="$emit('getPageNo', pageNo - 1)" @mouseenter="createActive($event)"
            @mouseleave="removeActive($event)">上一页</button>
        <button v-if="start_endNum.start > 1" @click="$emit('getPageNo', 1)" :class="{ active: pageNo == 1 }">1</button>
        <button v-if="start_endNum.start > 2">···</button>
        <!-- 中间连续部分 -->
        <template v-for="page in start_endNum.end">
            <button v-if="page >= start_endNum.start" :key="page" @click="$emit('getPageNo', page)"
                :class="{ active: pageNo == page }">{{ page }}</button>
        </template>

        <button v-if="start_endNum.end < totalPage - 1">···</button>
        <button v-if="start_endNum.end < totalPage" @click="$emit('getPageNo', totalPage)"
            :class="{ active: pageNo == totalPage }">{{ totalPage }}</button>

        <button :disabled="pageNo == totalPage" @click="$emit('getPageNo', pageNo + 1)" @mouseenter="createActive($event)"
            @mouseleave="removeActive($event)">下一页</button>

        <button style="margin-left: 30px">共 {{ total }} 条</button>
    </div>
</template>

<script>
export default {
    name: 'Pagination',
    props: ['pageNo', 'pageSize', 'total', 'continues'],
    computed: {
        // 总页数
        totalPage() {
            return Math.ceil(this.total / this.pageSize);
        },
        // 连续页面计算：
        start_endNum() {
            const { continues, pageNo, totalPage } = this;
            let start = 0;
            let end = 0;
            if (continues > totalPage) {
                start = 1;
                end = totalPage
            } else {
                // 在奇数个连续页中，以当前页为中间页进行划分，计算出连续页部分的开头页和结尾页
                start = pageNo - parseInt(continues / 2) // parseInt可以向下取整
                end = pageNo + parseInt(continues / 2)
                // 修正bug
                if (start < 1) {
                    start = 1;
                    end = continues;
                }
                if (end > totalPage) {
                    end = totalPage;
                    start = totalPage - continues + 1;
                }
            }
            return { start, end };
        }
    },
    methods: {
        createActive(e) {
            e.currentTarget.className = 'active'
        },
        removeActive(e) {
            e.currentTarget.className = ''
        }

    }
}
</script>

<style lang="less" scoped>
.pagination {
    text-align: center;

    button {
        margin: 0 5px;
        background-color: #f4f4f5;
        color: #606266;
        outline: none;
        border-radius: 2px;
        padding: 0 4px;
        vertical-align: top;
        display: inline-block;
        font-size: 13px;
        min-width: 35.5px;
        height: 28px;
        line-height: 28px;
        cursor: pointer;
        box-sizing: border-box;
        text-align: center;
        border: 0;

        &[disabled] {
            color: #c0c4cc;
            cursor: not-allowed;
        }

        &.active {
            cursor: not-allowed;
            background-color: #409eff;
            color: #fff;
        }
    }
}
</style>
