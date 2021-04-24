const path = require('path');

const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    plugins:[
      new htmlWebpackPlugin({
        // template:'src/index.html',
        title: ''
      })
    ]
}