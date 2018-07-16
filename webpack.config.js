/**
 * Backwhite
 *
 * Backwhite style available as a module
 *
 * Author:  Anshul Kharbanda
 * Created: 7 - 15 - 2018
 */
const path = require('path')

// Build path
const BUILD_PATH = path.resolve(__dirname, 'dist')

// Export module
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'backwhite.js',
        path: BUILD_PATH
    },
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    devServer: {
        contentBase: BUILD_PATH
    }
}
