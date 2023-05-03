import { reqGetGoodsInfo, reqAddUpdateShopCar } from "@/API/index";
// 封装游客身份模块UUID
import {getUUID} from '@/utils/uuid_token';
const actions = {
    async getGoodInfo({ commit }, goodId) {
        let result = await reqGetGoodsInfo(goodId);
        if (result.code == 200) {
            commit('GETGOODINFO', result.data)
        }
    },
    // 将产品添加到购物车中
    async addUpdateShopCar({ commit }, { skuId, skuNum }) {
        /* 加入购物车返回的结果，加入购物车后发请求，将前台的参数带给服务器，服务器写入数据成功，并没有返回其他的数据，只是返回了请求状态码，代表请求的状态，因为服务器没有返回其他的数据，因此不需要继续下面的三连环， */
        let result = await reqAddUpdateShopCar(skuId, skuNum);
        // 加入购物车成功
        if (result.code == 200) {
            return 'ok'
        } else {
            // 加入购物车失败
            return Promise.reject(new Error('false'));
        }
    }
}
const mutations = {
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo
    }
}
const state = {
    goodInfo: {},
    // 游客临时身份
    uuid_token:getUUID()
}
const getters = {
    // 路径导航简化的数据
    categoryView(state) {
        return state.goodInfo.categoryView || {}
    },
    // 产品简化的数据
    skuInfo(state) {
        return state.goodInfo.skuInfo || {}
    },
    // 产品售卖属性的简化数据
    spuSaleAttrList(state) {
        return state.goodInfo.spuSaleAttrList || []
    }
}
export default {
    actions,
    mutations,
    state,
    getters
}