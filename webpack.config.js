const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, "./src/index.jsx"), 
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "bundle.js", 
    },
    resolve: {
        extensions: ['.jsx', '.js']
    },
    devtool:'eval-source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            }
        ]
    }
}
