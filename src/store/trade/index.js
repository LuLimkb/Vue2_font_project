import { reqGetUserAddress, reqOrderInfo } from "@/API/index";
const actions = {
    // 获取用户地址
    async userAddress({ commit }) {
        let result = await reqGetUserAddress();
        if (result.code == 200) {
            commit('USERADDRESS', result.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('false'))
        }
    },
    // 获取交易清单
    async orderInfo({ commit }) {
        let result = await reqOrderInfo();
        if (result.code == 200) {
            commit('ORDERINFO', result.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('false'))
        }
    }
}
const mutations = {
    USERADDRESS(state, data) {
        state.address = data
    },
    ORDERINFO(state, data) {
        state.orderInfo = data
    }
}
const state = {
    address: [],
    orderInfo: {}
}
const getters = {

}
export default {
    actions,
    mutations,
    state,
    getters
}