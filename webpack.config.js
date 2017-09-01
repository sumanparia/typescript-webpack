const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

let config = {
    entry: {
        "main": ["./src/index.ts"],
        "vendor": ['./src/vendor.ts'],
        "polyfills": ["./src/polyfills.browser.ts"]
    },
    output: {
        filename: "[name].js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loaders: [
                    'awesome-typescript-loader',
                    'angular2-template-loader'
                ],
                exclude: [/\.(spec|e2e)\.ts$/]
            }, {
                test: /\.html$/,
                loader: 'html-loader'
        
            }, {
                test: /\.scss$/,
                include: path.resolve(__dirname, "src"),
                use: [
                    'raw-loader',
                    'sass-loader'
                ]
            }
        ]
    },

    devServer: {
        contentBase: __dirname + "/dist",
        port: 9000
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor']
        }),
        new CopyWebpackPlugin([
            { from: 'favicon.ico' }
        ])
    ]
};

module.exports = function () {
    return config;
};