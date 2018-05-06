
const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
    entry: './src/index.js',
    output:{
        filename: 'main.js',
        path: path.join(__dirname, 'dist'),
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({use:'css-loader', fallback:'style-loader', }),
                //use: 'css-loader',
            },
        ]
    },
    plugins:[
        new ExtractTextPlugin('main.css'),
    ]
};

module.exports = config;
