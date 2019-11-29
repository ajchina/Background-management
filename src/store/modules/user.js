const state = {
    token: localStorage.getItem('token')
}
const mutations = {
    SET_TOKEN: (state, data) => {
        state.token = data
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

    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}