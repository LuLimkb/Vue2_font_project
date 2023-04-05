// 当前模块进行API的统一管理
import requests from "./requests";
// 三级联动的接口： /api/product/getBaseCategoryList  方式：get 

// 发送请求: axios发请求返回的结果是 Promise对象
export const reqCategoryList = () => {
    return requests({
        method: 'get',
        url: '/product/getBaseCategoryList',
    })
}