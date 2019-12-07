const state = {
    token: localStorage.getItem('token'),
    // 用户权限信息
    roles: []
}
const mutations = {
    SET_TOKEN: (state, data) => {
        state.token = data
    },
    SET_ROLES: (state, data) => {
        state.roles = data
    }
}
const actions = {
    login({ commit }, userInfo) {
        const { username } = userInfo;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (username === "admin" || username === "jerry") {
                    commit("SET_TOKEN", username);
                    localStorage.setItem('token', username);
                    resolve();
                } else {
                    reject("用户名、密码错误");
                }
            }, 1000)
        })
    },
    getInfo({ commit, state }) {
        return new Promise( (resolve) => {
            setTimeout(() => {
                const roles = state.token === 'admin' ? ['admin'] : ['editor']
                commit('SET_ROLES', roles)
                resolve({roles})
            },1000)
        })
    },
    resetToken({ commit }) {
        return new Promise(resolve => {
            commit('SET_TOKEN', '')
            commit('SET_ROLES', [])
            localStorage.removeItem('token')
            resolve();
        })
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}