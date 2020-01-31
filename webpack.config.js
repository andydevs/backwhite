/**
 * Backwhite
 *
 * Backwhite style available as a module
 *
 * Author:  Anshul Kharbanda
 * Created: 7 - 15 - 2018
 */
const path = require('path');

// Export webpack configuration
module.exports = {
    mode: 'none',
    devtool: 'source-map',
    entry: './js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/js/'),
        filename: 'backwhite.js'
    },
    module: {
        rules: [
            {
                test: /\.js?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}