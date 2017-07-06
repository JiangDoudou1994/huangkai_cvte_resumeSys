##a
    1. express服务器和它请求返回的路径。

    2. 全局安装supervisor，并用它启动node服务。

    3. 做了简单的redux的配置。使用webpack打包，解析es6.
        
        安装webpack解析模块npm install babel-loader babel-core babel-preset-react babel-preset-es2015 --save-dev

        哇，踩了个雷。configuration.resolve.extensions[0] should not be empty. 这么简单的英文竟然没有看懂。

        webpack的module模块配置和plugin配置在官网上都有，非常的清楚。

            jsx解析的模块配置。options: {presets: []}里面是预处理的规则，同样是三方库，可以下载。
            babel-preset-es2015  &&  babel-preset-react

        呃，怎么说。

        对了，安装模块，要安装到--save-dev环境，不然开发环境是没有的。

        为什么？

    