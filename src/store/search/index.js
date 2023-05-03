/*
 * @Author: LuLi 3436842252@qq.com
 * @Date: 2023-04-01 20:14:10
 * @LastEditors: LuLi 3436842252@qq.com
 * @LastEditTime: 2023-04-13 19:58:18
 * @FilePath: \app\src\store\search\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// Vuex 中的 search 模块
import { reqGetSearchInfo } from "@/API/index";
// actions ：处理业务逻辑，处理异步
const actions = {
    // 获取Search模块数据
    async getSearchList({ commit }, params = {}) {
        // 当前这个reqGetSearchInfo函数在调用获取服务器数据的时候，至少传递一个参数（空对象）
        // params形参：是当用户派发actions的时候，第二个参数传递过来的，至少使用空对象{}
        let result = await reqGetSearchInfo(params);
        if (result.code == 200) {
            commit('GETSEARCHLIST', result.data)
        }
    }
}

// mutations: 处理数据state，修改state的唯一手段
const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList;
    }
}

// state: 管理库存储数据的地方
const state = {
    searchList: {},
}

// getters : 理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
const getters = {
    // 此处的形参state，是当前仓库的state，并非大仓库中的state
    attrsList(state) {
        return state.searchList.attrsList
    },
    goodsList(state) {
        return state.searchList.goodsList
    },
    trademarkList(state) {
        return state.searchList.trademarkList
    }
}

export default {
    actions,
    mutations,
    state,
    getters
}