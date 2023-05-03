/*
 * @Author: LuLi 3436842252@qq.com
 * @Date: 2023-04-25 12:17:15
 * @LastEditors: LuLi 3436842252@qq.com
 * @LastEditTime: 2023-04-25 12:41:50
 * @FilePath: \app\src\utils\token.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 分装本地存储对token的存储和获取
export const setToken = (token) => {
    localStorage.setItem('TOKEN', token)
}

export const getToken = () => localStorage.getItem('TOKEN')

export const removeToken = () => {
    localStorage.removeItem('TOKEN')
}
