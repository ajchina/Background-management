import router from './router'

const whiteList = ['/login']


router.beforeEach((to, from, next) => {
    const hasToken = localStorage.getItem('token')
    if (hasToken) {
        if (to.path === '/login') {
            next({ path: '/' })
        } else {
            next()
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