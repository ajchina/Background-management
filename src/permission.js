import router from './router'

const whiteList = ['/login']

const hasToken = localStorage.getItem('token')

router.beforeEach((to, from, next) => {
    if(hasToken) {
        if(to.path === '/login') {
            next({ path: '/' })
        } else {
            next()
        }
    } else {
        if(whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            // 重定向到登录页
            next(`/login?redirect=${to.path}`)
        }
    }
})