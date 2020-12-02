const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env = {}) => {
    const devMode = env.DEV;

    return {
        mode: devMode ? 'development' : 'production',
        entry: {
            app: ['@babel/polyfill', './src/index.jsx']
        },
        plugins: [
            ...(!devMode ? [new CleanWebpackPlugin()] : []),
            ...(!devMode ? [new CopyPlugin([{ from: './remote', to: 'remote' }])] : []),
            new MiniCssExtractPlugin({
                filename: devMode ? '[name].css' : 'resources/[name]-[contenthash].css',
                chunkFilename: devMode ? '[name].css' : 'resources/[name]-[contenthash].css'
            }),
            new HtmlWebpackPlugin({
                template: 'public/index.html'
            })
        ],
        output: {
            path: path.resolve(__dirname, 'dist'),
            publicPath: '',
            filename: '[name]-[contenthash].js',
            chunkFilename: '[name]-[contenthash].js'
        },
        optimization: {
            runtimeChunk: 'single',
            moduleIds: 'hashed',
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all'
                    },
                    styles: {
                        test: /\.css$/,
                        name: 'styles',
                        chunks: 'all',
                        enforce: true
                    }
                }
            }
        },
        performance: {
            maxEntrypointSize: 400000,
            maxAssetSize: 600000
        },
        ...(devMode && {
            devtool: 'source-map',
            devServer: {
                open: false,
                historyApiFallback: true,
                contentBase: './',
                port: '1002'
            }
        }),
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    resolve: {
                        extensions: ['.js', '.jsx']
                    },
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env', '@babel/preset-react'],
                                plugins: [
                                    '@babel/plugin-proposal-class-properties',
                                    '@babel/plugin-transform-runtime',
                                    '@babel/plugin-syntax-dynamic-import',
                                    '@babel/plugin-transform-react-jsx',
                                    '@babel/plugin-transform-react-jsx-source'
                                ]
                            }
                        },
                        {
                            loader: 'eslint-loader'
                        }
                    ]
                }
            ]
        }
    };
};
