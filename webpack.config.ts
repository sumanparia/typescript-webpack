import * as webpack from 'webpack';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as CleanWebpackPlugin from 'clean-webpack-plugin';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';

const path = require('path');
const bootstrapCSS = new ExtractTextPlugin('bootstrap.css');
const config: webpack.Configuration = {
    entry: {
        "main": ["./src/index.ts"],
        "vendor": ["./vendor/jquery/3.2.1/jquery.min.js"],
        'bootstrap' : './vendor/bootstrap/4.0.0/scss/bootstrap.scss'
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
                use: [
                    'awesome-typescript-loader'
                ]
            }, {
                test: /\.scss$/,
                exclude: path.resolve(__dirname, "src"),
                use: bootstrapCSS.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }, {
                test: /\.scss$/,
                exclude: path.resolve(__dirname, "vendor"),
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
        }),
        bootstrapCSS
    ]
};

export default config;