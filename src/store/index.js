import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user
  },
  getters: {
    roles: state => state.user.roles,
    hasRoles: state => state.user.roles && state.user.roles.length > 0
  }
})
