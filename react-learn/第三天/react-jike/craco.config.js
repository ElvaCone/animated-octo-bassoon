const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const SriPlugin = require('webpack-subresource-integrity');

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        },
        configure: (webpackConfig) => {
            // 确保 devtool 配置为 source-map
            webpackConfig.devtool = 'source-map';

            // 添加 HtmlWebpackPlugin 插件
            webpackConfig.plugins.push(
                new HtmlWebpackPlugin({
                    template: path.resolve(__dirname, 'public/index.html'), // 替换为你的 HTML 模板路径
                })
            );

            // 添加 Subresource Integrity (SRI) 插件
            webpackConfig.output = {
                ...webpackConfig.output,
                crossOriginLoading: 'anonymous', // 必须设置此项以支持 SRI
            };

            webpackConfig.plugins.push(
                new SriPlugin({
                    hashFuncNames: ['sha256', 'sha384'], // 可以根据需要选择其他哈希函数
                    enabled: true,
                })
            );

            // 添加 BundleAnalyzerPlugin 插件
            if (process.env.ANALYZE) {
                webpackConfig.plugins.push(new BundleAnalyzerPlugin());
            }

            return webpackConfig;
        },
    },
};

