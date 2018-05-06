
const path = require('path');

var config = {
    entry: './src/index.js',
    output:{
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: ['css-loader'],
            },
        ]
    }
};

module.exports = config;
