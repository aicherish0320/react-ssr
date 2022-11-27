const path = require('path')
const nodeExternals = require('webpack-node-externals')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  target: 'node', // 告诉 webpack 打包的 node 环境的文件
  entry: './src/server/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js'
  },
  externals: [nodeExternals()]
})
