const path = require('path')
const HTMLwebpack = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtract = require('mini-css-extract-plugin')

const   dev = process.env.NODE_ENV === 'development',
        prod = !dev

module.exports = {
    entry: [ '@babel/polyfill', path.resolve(__dirname, './src/index.jsx') ] ,
    output: {
        filename: '[name][contenthash].js',
        path: path.resolve(__dirname , 'dist')
    },
    devServer: {
        hot: true,
    },
    plugins:[
        new HTMLwebpack({
            template: './src/index.html',
            inject: 'body',
            minify: {
                collapseWhitespace: prod
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtract({
            filename: '[name][contenthash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                  dev ? 'style-loader' : MiniCssExtract.loader,
                  'css-loader',
                  'sass-loader',
                ],
              },
            {
                test: /\.(jpg|png|jpeg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/preset-react', '@babel/preset-env']
                    }
                },
            },
            {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            },
        ]
    }
}