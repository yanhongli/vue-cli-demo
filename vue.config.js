module.exports = {
    publicPath: '/163h5/',
    // outputDir: 'dist/163h5',
    // assetsDir: './163h5',
    devServer: {
        proxy: {
            '/user/': {
                target: 'https://e.163.com',
                changeOrigin: true,
                secure: false, 
                pathRewrite: {

                }
            }
        }
    },
    chainWebpack: config => {
        config.plugin('html').tap(args => {
            args[0].title = '爱学习'
            return args
        })
    }
}