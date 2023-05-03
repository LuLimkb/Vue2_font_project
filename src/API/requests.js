// 进行 axios 的二次封装
import axios from "axios";
// 引入 进度条nprogress
import nprogress from 'nprogress';
// 引入进度条的样式
import '../../node_modules/nprogress/nprogress.css'
// 引入store
import store from '@/store/index';

// 利用axios对象中的create方法，去创建一个axios实例
// requests 就是 axios，只是进行了配置
const requests = axios.create({
    // 配置对象
    // 基本路径：发送请求的时候路径中会出现（api）
    baseURL: '/api',
    // 配置请求超时时间
    timeout: 5000,
});

// 请求拦截器的配置：在发送请求前，请求拦截器可以检验到，可以在请求发出去之前做执行一些配置逻辑
requests.interceptors.request.use(config => {
    // config: 配置对象，对象里面的 headers 属性很重要
    // 在请求头添加临时身份：前提与后台商量好以后
    if (store.state.detail.uuid_token) {
        // 请求头添加一个字段userTempId
        config.headers.userTempId = store.state.detail.uuid_token
    }
    // 如果有token，在请求头中加入token发送给服务器获取对应token的用户信息
    if (store.state.user.token) {
        // config.headers.token 这里的token是请求头的一个属性，不能乱写，否则服务器无法识别token
        config.headers.token = store.state.user.token;
    }
    // 进度条开始：
    nprogress.start();
    return config;
},
    // 请求失败时返回错误信息
    error => {
        return Promise.reject(error)
    })

// 响应拦截器的配置：在接收到响应之后，在响应被处理之前进行一些操作
requests.interceptors.response.use(res => {
    // 成功的回调函数，服务器相应数据回来之后，响应拦截器可以检测到，并进行逻辑处理
    // 进度条结束
    nprogress.done();
    return res.data;
},
    error => {
        // 响应失败后的回调函数
        return Promise.reject(new Error('false')) // 
    })

export default requests;