/*
 * @Author: LuLi 3436842252@qq.com
 * @Date: 2023-04-01 16:11:17
 * @LastEditors: LuLi 3436842252@qq.com
 * @LastEditTime: 2023-04-26 15:45:46
 * @FilePath: \app\src\API\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 当前模块进行API的统一管理
import requests from "./requests";
import mockRequests from "./mockAjax";


// 三级联动的接口： /api/product/getBaseCategoryList  方式：get 

// 发送请求: axios发请求返回的结果是 Promise对象
export const reqCategoryList = () => {
    return requests({
        method: 'get',
        url: '/product/getBaseCategoryList',
    })
}
// 获取banner（Home首页轮播图）
export const reqBannerList = () => {
    return mockRequests({
        method: 'get',
        url: '/banner',
    })
}
// 获取floor
export const reqFloorList = () => {
    return mockRequests({
        method: 'get',
        url: '/floor',
    })
}
// 获取搜索模块的数据：地址/api/list， 请求方式post, 需要参数：params
export const reqGetSearchInfo = (params) => {
    return requests({
        method: 'post',
        url: '/list',
        data: params
    })
}
// 获取产品详情信息：地址/api/item/{goodId} 请求方式：get
export const reqGetGoodsInfo = (goodId) => {
    return requests({
        method: 'get',
        url: `/item/${goodId}`
    })
}
// 加入购物车，向服务器发请求传产品信息以及购买数量给服务器：地址/api/cart/addToCart/{ skuId }/{ skuNum } 请求方式：post
export const reqAddUpdateShopCar = (skuId, skuNum) => {
    return requests({
        method: 'post',
        url: `/cart/addToCart/${skuId}/${skuNum}`
    })
};
// 获取购物车列表，地址：/api/cart/cartList method：get
export const reqShopCartList = () => {
    return requests({
        method: 'get',
        url: '/cart/cartList'
    })
}
// 删除购物车中的产品 地址：/api/cart/deleteCart/{skuId} 方法：delete
export const reqDeleteCart = (skuId) => {
    return requests({
        method: 'delete',
        url: `/cart/deleteCart/${skuId}`
    })
}
// 切换商品选中状态 地址：/api/cart/checkCart/{skuId}/{isChecked} 方法：get
export const reqCheckedById = (skuId, isChecked) => {
    return requests({
        method: 'get',
        url: `/cart/checkCart/${skuId}/${isChecked}`
    })
}
// 注册页面获取验证码 地址：/api/user/passport/sendCode/{phone} 方法：get
export const reqGetCode = (phone) => requests({
    method: 'get',
    url: `/user/passport/sendCode/${phone}`
})
// 完成注册 地址：/api/user/passport/register 方法：post data={phone, code, password}
export const reqFinishRegister = (data) => requests({
    method: 'post',
    url: '/user/passport/register',
    data
})
// 进行登录 地址：/api/user/passport/login 方法：post
export const reqUserLogin = (data) => requests({
    method: 'post',
    url: '/user/passport/login',
    data
})
// 通过token向服务器获取相应用户的信息 地址：/api/user/passport/auth/getUserInfo 方法：get
export const reqUserInfo = () => requests({
    method: 'get',
    url: '/user/passport/auth/getUserInfo'
})
// 退出登录 地址：/api/user/passport/logout 方法 get
export const reqLogout = () => requests({
    method: 'get',
    url: '/user/passport/logout'
})
// 获取=用户地址信息 地址：/api/user/userAddress/auth/findUserAddressList 方法：get
export const reqGetUserAddress = () => requests({
    method: 'get',
    url: '/user/userAddress/auth/findUserAddressList'
})
// 获取交易商品清单 地址：/api/order/auth/trade 方法：get
export const reqOrderInfo = () => requests({
    method: 'get',
    url: '/order/auth/trade'
})
// 提交订单： 地址：/api/order/auth/submitOrder?tradeNo={tradeNo} 方法：post
export const reqSubmitOrder = (tradeNo, data) => requests({
    method: 'post',
    url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
    data
})
// 获取订单支付信息 地址：/api/payment/weixin/createNative/{orderId} 方法：get
export const reqPayInfo = (orderId) => requests({
    method: 'get',
    url: `/payment/weixin/createNative/${orderId}`
})
// 获取订单支付状态 地址：/api/payment/weixin/queryPayStatus/{orderId} 方法：get
export const reqPayStatus = (orderId) => requests({
    method: 'get',
    url: `/payment/weixin/queryPayStatus/${orderId}`
})
// 获取个人订单列表 地址：/api/order/auth/{page}/{limit} 方法：get
export const reqMyOrderList = (page, limit) => requests({
    method: 'get',
    url: `/order/auth/${page}/${limit}`
})