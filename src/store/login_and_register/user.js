import { reqFinishRegister, reqGetCode, reqUserLogin, reqUserInfo, reqLogout } from "@/API/index";
import { setToken, getToken, removeToken } from "@/utils/token";

const actions = {
    // 通过用户输入的电话号码获取验证码（正常情况是服务器直接将验证码发给用户手机，不需要前端处理）
    async getCode({ commit }, phone) {
        let result = await reqGetCode(phone);
        if (result.code == 200) {
            commit('GETCODE', result.data)
        } else {
            return Promise.reject(new Error('false'))
        }
    },
    // 完成注册
    async finishRegister({ commit }, data) {
        let result = await reqFinishRegister(data);
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('false'))
        }
    },
    // 进行登录
    async userLogin({ commit }, data) {
        let result = await reqUserLogin(data);
        // 服务器下发token，用户唯一的标识，将来经常通过带token找服务器要用户信息进行展示
        if (result.code == 200) {
            // 本地存储中存储token
            setToken(result.data.token)
            commit('USERLOGIN', result.data.token)
            return "Ok"
        } else {
            return Promise.reject(new Error('false'));
        }
    },
    // 通过token获取用户信息
    async getUserInfo({ commit }) {
        let result = await reqUserInfo();
        if (result.code == 200) {
            commit('GETUSERINFO', result.data)
            return 'OK'
        } else {
            return Promise.reject(new Error('false'))
        }
    },
    // 退出登录
    async userLogout ({commit}) {
        let result = await reqLogout();
        if (result.code == 200) {
            commit('USERLOGOUT');
            return 'ok'
        } else {
            return Promise.reject(new Error('false'))
        }
    }
}

const mutations = {
    GETCODE(state, data) {
        state.code = data
    },
    USERLOGIN(state, token) {
        state.token = token;
    },
    GETUSERINFO(state, data) {
        state.userInfo = data;
    },
    // 退出登录，消除本地数据
    USERLOGOUT(state) {
        state.token = '';
        state.userInfo = '';
        removeToken();
    }
}

const state = {
    code: '',
    // 本地存储中有token时传，没有的时候就是空串
    token: getToken('TOKEN'),
    userInfo: {}
}

const getters = {

}

export default {
    actions,
    mutations,
    state,
    getters
}