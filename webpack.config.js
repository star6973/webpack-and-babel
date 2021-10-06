const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
    //* 개발환경
    mode: 'development',

    //* 애플리케이션 시작 경로
    entry: './src/index.js',

    //* 번들된 파일 경로
    output: {
        publicPath: '/dist/',
    },

    resolve: {
        modules: ['node_modules'],
        fallback: {
            fs: false,
            net: false,
            tls: false,
        },
        extensions: ['.ts', '.tsx', '.js', '.css', '.scss'],
    },

    module: {
        rules: [
            {
                //* 바벨 관련 loader, .js/.jsx 확장자도 번들
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        configFile: path.resolve(
                            __dirname,
                            '.babelrc.client.js'
                        ),
                    },
                },
            },
            {
                //* html loader
                test: /\.html$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true,
                        },
                    },
                ],
            },
            {
                //* ccss loader
                test: /\.(scss|sass|css)$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                //* url loader
                test: /\.(png|jp(e*)g)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8000,
                            name: 'images/[hash]-[name].[ext]',
                        },
                    },
                ],
            },
            {
                //* file loader
                test: /\.svg$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },

    externals: {
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react',
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom',
        },
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'css/style.css',
        }),
        new NodePolyfillPlugin(),
    ],

    // 개발 서버 설정
    devServer: {
        host: 'localhost',
        port: port,
        open: true, // open page when start
    },
};
