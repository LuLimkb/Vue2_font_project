/*
 * @Author: LuLi 3436842252@qq.com
 * @Date: 2023-04-23 16:51:54
 * @LastEditors: LuLi 3436842252@qq.com
 * @LastEditTime: 2023-04-24 16:48:46
 * @FilePath: \app\src\store\shopcart\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { reqShopCartList, reqDeleteCart, reqCheckedById } from "@/API/index.js";


const actions = {
    // 获取购物车列表
    async getShopcartList({ commit }) {
        let result = await reqShopCartList();
        if (result.code == 200) {
            commit('GETSHOPCARTLIST', result.data)
        }
    },
    // 删除购物车中的产品
    async deleteCart({ commit }, skuId) {
        let result = await reqDeleteCart(skuId)
        if (result.code == 200) {
            return 'OK'
        } else {
            return Promise.reject(new Error('false'))
        }
    },
    // 切换一个商品选中状态
    async changeCheckedById({ commit }, { skuId, isChecked }) {
        let result = await reqCheckedById(skuId, isChecked);
        if (result.code == 200) {
            return 'OK'
        } else {
            return Promise.reject(new Error('false'))
        }
    },
    // 删除已选中的产品
    deleteAllCheckedById({ dispatch, getters }) {
        // context:小仓库【commit（提交到mutations修改state） state（当前仓库数据） getters（简化当前仓库中的数据） dispatch（派发actions）
        // 获取购物车中的全部商品：数组
        let PromiseAll = [];
        getters.shopcartList.cartInfoList.forEach(item => {
            let promises = item.isChecked == 1 ? dispatch('deleteCart', item.skuId) : '';
            // 将每一个返回的Promise数据添加到数组PromiseAll
            PromiseAll.push(promises);
        });
        // Promise.all(Array)：Array是数组，只有Array中的所有Promise成功，返回的结果才会成功
        // Array中只要有一个Promise失败，返回的结果就是失败
        return Promise.all(PromiseAll)

    },
    // 全选
    updateAllChecked({ dispatch, getters }, isChecked) {
        let PromiseAll = [];
        getters.shopcartList.cartInfoList.forEach(item => {
            let promise = dispatch('changeCheckedById', { skuId: item.skuId, isChecked });
            PromiseAll.push(promise)
        });
        return Promise.all(PromiseAll);
    }
}
const mutations = {
    GETSHOPCARTLIST(state, shopcartList) {
        state.shopcartList = shopcartList
    }
}
const state = {
    shopcartList: []
}
const getters = {
    shopcartList() {
        return state.shopcartList[0] || [];
    }
}
export default {
    actions,
    mutations,
    state,
    getters
}