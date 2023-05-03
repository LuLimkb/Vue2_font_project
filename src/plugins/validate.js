/*
 * @Author: LuLi 3436842252@qq.com
 * @Date: 2023-04-28 09:28:37
 * @LastEditors: LuLi 3436842252@qq.com
 * @LastEditTime: 2023-04-28 09:40:34
 * @FilePath: \app\src\plugins\validate.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// vee-validate插件：表单验证区域
import Vue from "vue";
import VeeValidate from "vee-validate";
// 中文提示信息
import zh_CN from "vee-validate/dist/locale/zh_CN";
Vue.use(VeeValidate);

// 表单验证
VeeValidate.Validator.localize('zh_CN', {
    messages: {
        ...zh_CN.messages,
        is: (field) => `${field}必须和密码相同` // 修改内置规则的message，让确认密码与密码相同
    },
    attributes: {
        phone: '手机号',
        code: '验证码',
        password: '密码',
        password1: '确认密码',
        isCheck:'协议'
    }
})
