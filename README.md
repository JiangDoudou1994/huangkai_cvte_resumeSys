#a
    ##1. express服务器和它请求返回的路径。

    ##2. 全局安装supervisor，并用它启动node服务。

    ##3. 做了简单的redux的配置。使用webpack打包，解析es6.
        
        安装webpack解析模块npm install babel-loader babel-core babel-preset-react babel-preset-es2015 --save-dev

        哇，踩了个雷。configuration.resolve.extensions[0] should not be empty. 这么简单的英文竟然没有看懂。

        踩雷，output:{publicPath}资源的路径，不是js文件，就是图片之类的路径。但是会影响html-webpack-plugin插件引入js的路径。html中src="/app.js"是当前项目绝对路径中的app.js。所以，用相对路径src='app.js'即可。

        webpack的module模块配置和plugin配置在官网上都有，非常的清楚。

            jsx解析的模块配置。options: {presets: []}里面是预处理的规则，同样是三方库，可以下载。
            babel-preset-es2015  &&  babel-preset-react

        呃，怎么说。

        对了，安装模块，要安装到--save-dev环境，不然开发环境是没有的。

        为什么？

    
#b
    ##1.  忽略bundle文件不上传= =,配置了个htmlwebpackplugin插件的模板，问题不大。
        配置个webpack-dev-server。webpack-dev-server配置成功，但是redux暂时不会用。换一个react组件先。

        启动express服务器，没有js文件。
            需要设置express静态文件位置。

        打包不能识别箭头函数？
            babel-preset-stage-1 预处理规则解决问题。

        打包文件过大，打包了module的依赖。怎么解决？

    ##2.  webpack-dev-server正常启动，--hot 热替换，会自动打包更新的模块。
        webpack-dev-server会自动帮我们根据webpack.config.js打包，并发布8080服务器。

        踩坑，因为HtmlWebpackPlugin生成的html会相对output.path路径引入output.filename。所以打包js的路径配置在output.filename中会更方便。

    ##3.  正常启动express服务器。
        继续踩坑，配置了一个'*'的路由，结果什么资源访问都会跑到这个路由。

        静态资源可以直接配置app.use(express.static(BUNDLE_PATH));
        也可以配置一个虚拟的路径，访问时加上这个虚拟路径，文档中有很清楚。

        Hot Module Replacement 实现--hot功能。
        
    ##4.  使用Hot Module Replacement，先装载webpack-dev-middleware，让自己自定义的server有webpack-dev-server的接口和功能。

        配置webpack-dev-middleware
        express服务器装载中间件，配置configuration。

        配置Hot Module Replacement
        webpack-dev-server有的功能都可以在配置文件中加载。
