// 引入mockjs插件
import Mock from 'mockjs';
// 把JSON数据引入进来
// webpack默认暴露：图片、JSON数据格式，所以.json文件不需要对外暴露
import banner from './banner.json'
import floor from './floor.json'

// mock数据：第一个参数请求地址，第二个参数请求数据
Mock.mock("/mock/banner", {code:200, data:banner})
Mock.mock("/mock/floor", {code:200, data:floor})