'use strict'
const path = require('path');
const webpack = require('webpack');

function resolve (dir) {
    return path.join(__dirname, dir)
}

const port = process.env.port || process.env.npm_config_port || 9527
module.exports = {
    lintOnSave: true,
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: process.env.NODE_ENV === 'development',
    productionSourceMap: false,
    devServer: {
        port: port,
        open: true,
        overlay: {
          warnings: false,
          errors: true
        },
        proxy: {
          [process.env.VUE_APP_BASE_API]: {
            target: `http://127.0.0.1:${port}/mock`,
            changeOrigin: true,
            pathRewrite: {
              ['^' + process.env.VUE_APP_BASE_API]: ''
            }
          }
        }
      },
      configureWebpack: {
        plugins: [
           new webpack.ProvidePlugin({
            $:"jquery",
             jQuery:"jquery",
             "windows.jQuery":"jquery"
           })
         ]
     },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('api', resolve('src/api'))
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
            .set('layout', resolve('src/layout'))
            .set('vendor', resolve('src/vendor'))
        config.resolve.symlinks(true)
    },
    runtimeCompiler: true,
    
}