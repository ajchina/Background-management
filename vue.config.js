// common.js mode.js

const port = 7070
const title = 'vue框架搭建'
const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    publicPath: 'best-frame',
    devServer: {
        port
    },
    configureWebpack: {
        name: title
    },
    chainWebpack(config) {
        // svg规则配置，排除icons目录
        config.module.rule('svg')
            .exclude.add(resolve('src/icons'))
            .end();
        // 新增icons规则,设置svg-sprite-loader
        config.module.rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({ symbolId: 'icon-[name]' })
            .end()
    }
}