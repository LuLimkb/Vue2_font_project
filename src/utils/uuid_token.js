/*
 * @Author: LuLi 3436842252@qq.com
 * @Date: 2023-04-23 19:09:11
 * @LastEditors: LuLi 3436842252@qq.com
 * @LastEditTime: 2023-04-23 19:13:02
 * @FilePath: \app\src\utils\uuid_token.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { v4 as uuidv4 } from 'uuid';
// 生成一个随机字符串，且每次执行不能发生变化，游客身份永久存储
export const getUUID = () => {
    // 先从本地存储中获取UUID，（也就是看一下本地存储中是否有UUID）
    let uuid_token = localStorage.getItem('UUIDTOKEN');
    // 如果没有
    if (!uuid_token) {
        // 生成游客临时身份
        uuid_token = uuidv4();
        // 存储到本地存储中一次
        localStorage.setItem('UUIDTOKEN', uuid_token)
    }
    return uuid_token
}