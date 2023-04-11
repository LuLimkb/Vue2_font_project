/*
 * @Author: LuLi 3436842252@qq.com
 * @Date: 2023-04-01 20:12:44
 * @LastEditors: LuLi 3436842252@qq.com
 * @LastEditTime: 2023-04-11 17:24:10
 * @FilePath: \app\src\store\home\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// Vuex 中的 home模块
// 引入API请求方法
import { reqCategoryList, reqBannerList, reqFloorList } from '@/API/index'
// actions ：处理业务逻辑，处理异步
const actions = {
    // 商品分类请求数据
    async CategoryList({ commit }) {
        let result = await reqCategoryList();
        if (result.code == 200) {
            commit('CATEGORYLIST', result.data);
        }
    },
    // 获取首页轮播图数据
    async getBannerList({ commit }) {
        let result = await reqBannerList();
        if (result.code == 200) {
            commit('BANNERLIST', result.data);
        }
    },
    // 获取floor数据
    async getFloorList({ commit }) {
        let result = await reqFloorList();
        if (result.code == 200) {
            commit('GETFLOORLIST', result.data)
        }
    }
}

// mutations: 处理数据state，修改state的唯一手段
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },
    BANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
    GETFLOORLIST(state, floorList){
        state.floorList = floorList;
    }
}

// state: 管理库存储数据的地方
const state = {
    // 注意：state中数据默认初始化的数据类型不能乱写，服务器返回什么类型，就初始化成什么类型
    categoryList: [],
    bannerList: [],
    floorList:[]
}

// getters : 理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
const getters = {}

export default {
    actions,
    mutations,
    state,
    getters
}