// ruanyifeng  脚手架
var webpack = require('webpack');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin'); // 自动打开浏览器插件
var ExtractTextPlugin = require('extract-text-webpack-plugin'); // 抽取CSS文件插件

module.exports = {
  // 配置服务器
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: './app',
        port: 8080
    },
    // 配置入口
    entry: {
        pages: __dirname +'/app/src/router.jsx',
        vendors:['react','react-dom','react-router','reflux']  //第三方库和框架
    },
    output: {
        // path: 'dist',  // 不写居然也没事，由于有服务器，生成不了静态文件，这也是一个坑
        publicPath: 'dist',
        filename: 'js/bundle.js',
    },
    module: {
        loaders:[
            { test: /\.js[x]?$/, include: path.resolve(__dirname, 'app'), exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') },
            { test: /\.less$/, loader: ExtractTextPlugin.extract('css!less') },
            { test: /\.(png|jpg)$/, loader: 'url?limit=8192&name=img/[name].[ext]' },
            { test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/, loader: 'url' },
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    // 插件
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'js/vendors.js'),
        new ExtractTextPlugin("css/bundle.css"),
        
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin({ url: 'http://localhost:8080/login' })
    ]
};
