const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const { container } = require('webpack');


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@routes': path.resolve(__dirname, 'src/routes/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@icons': path.resolve(__dirname, 'src/assets/icons/'),
            '@logos': path.resolve(__dirname, 'src/assets/logos/'),
            
           // '@hooks': path.resolve(__dirname, 'src/hooks/')
        }
    },
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.html$/,
            use: [
                {
                    loader: 'html-loader'
                }
            ]
        },
        {
            test: /\.(css|scss)$/i,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader",
            ],
        },
        {
            test: /\.(png|jp(e*)g|svg|gif)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: 'Images/[hash]-[name].[ext]',
                    },
                },
            ],
        },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
    devServer:{
        historyApiFallback: true,
        static: path.join(__dirname, 'dist'),
            compress: true,
            port: 3005,
    }  
}