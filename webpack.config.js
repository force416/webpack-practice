var path = require('path');

module.exports = {
    entry: "./js/index.js",
    output: {
        path: __dirname + "/dist",
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.css$/, loader: 'style-loader!css-loader'
            }
        ]
    },
    devtool: 'source-map'
}