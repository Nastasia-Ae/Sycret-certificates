const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'build.js',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
            },
            {
              test: /\.css$/,
              use: [
                "style-loader",
                {
                  loader: "css-loader",
                  options: {
                    modules: {
                      mode: "local",
                      localIdentName: "[name]__[local]--[hash:base64:5]",
                    },
                  },
                },
              ],
            },
            {
              test: /\.(jpg|png|svg|gif)$/,
              use: ["file-loader"],
            },
        ]
    },

}