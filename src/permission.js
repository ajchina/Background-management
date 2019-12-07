import router from './router'
import store from './store'

const whiteList = ['/login']


router.beforeEach(async (to, from, next) => {
    const hasToken = store.state.user.token;
    if (hasToken) {
        if (to.path === '/login') {
            next({ path: '/' })
        } else {
            /* next() */
            //用户的角色来动态的添加路由
            if (store.getters.hasRoles) {
                next() // 继续即可
            } else {
                try {
                    const { roles } = await store.dispatch(`user/getInfo`)
                    console.log(roles)
                    next()
                } catch (error) {
                    await store.dispatch(`user/resetToken`)
                    next(`/login?redirect=${to.path}`)
                    alert(error || '未知错误')
                }
                
                // 动态路由生成

            }
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            // 白名单中路由放过
            next()
        } else {
            // 重定向至登录页
            console.log('重定向了啊')
            next(`/login?redirect=${to.path}`)
        }
    }
})