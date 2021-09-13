
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 1. 项目开发准备
    项目描述：前后端分离的外卖应用，使用模块化，组件化，工程化
    使用的技术：vue全家桶，前后台交互用ajax，模拟数据
      vue 、vue-router路由、vuex、mint-ui组件库、vue-lazyload懒加载、滑动库vue-scroller,
      better-scroll,swiper、日期处理库moment,date-fns
    API接口：url,请求方式，请求参数格式，响应数据格式
    你能从此项目中学到什么?：开发方式，插件库

## 2. 开启项目开发
    使用脚手架创建项目 vue-cli2
    安装所有依赖/指定依赖  vue-router
    开发环境运行  npm run dev
    生产环境打包与发布  npm run build  npm run build --report

## 3. 搭建项目整体界面结构
    stylus的理解和使用
        结构化, 变量, 函数/minxin(混合)
    vue-router的理解和使用:实现局部刷新
        router-view/router-link/keep-alive
        $router: 路由器对象, 包含一些操作路由的功能函数, 来实现编程式导航(跳转路由)
        $route: 当前路由对象, 一些当前路由信息数据的容器, path/meta/query/params
    项目路由拆分
    底部导航组件: FooterGuide
    导航路由组件: Msite/Search/Order/Profile

## 4. 抽取组件
    头部组件: HeaderTop, 通过slot来实现组件通信标签结构
    商家列表组件: ShopList

## 5. 登陆路由组件
     静态组件
     FooterGuide的显示/隐藏: 通过路由的meta

## 6. 后台项目
    启动后台项目: 理解前后台分离
    测试后台接口: 使用postman
    修正接口文档

## 7. 前后台交互
    ajax请求库: axios
    ajax请求函数封装: axios + promise
    接口请求函数封装: 每个后台接口







##css预编译器

stylus，需要
```angular2html
npm i stylus stylus-loader --save-dev
```



#开始开发项目

1.vue-cli用来搭建项目(基于vue + webpack + es6)
vue-cli2
```
npm install -g vue-cli
vue create 项目名
cd 项目名
npm install
npm run dev
```


## 遇到的问题
1.stylus，需要
```angular2html
npm i stylus stylus-loader --save-dev
```
2.axios请求数据文件
3.用postman测试服务器
4.接口函数
5.git进行版本控制
  git init
  git add *
6.url中query参数和params参数的区别()
  query方式在地址栏会出现参数和参数名，params只会出现路径
7.actions中接收参数的疑惑：{commit,state}
  原来是content,里面包含commit,state
8.mutations文件中引入时不起作用
  例如：引入 RECEIVE_ADDRESS = 'receive_address'
      RECEIVE_ADDRESS(){}调用方法却失败,
      原因是要加 [],RECEIVE_ADDRESS是变量
9....mapState(['address'])获取数据取不到，...mapActions(['getAddress'])
 传入数据，但是MSite数组中先获取数据，所以那时为空，mounted生命周期中调用
 this.getAddress()以便于获取数据
10.swiper要在有数据后才载入，watch监视数据变化载入swiper都早了，
使用this.$nextTick()
11.解析时，vue中数据为undefined不报错,例a.b（两层结构为空不报错）,
  但是三层报错:a.b.c  undefined.c
12.平时用this.xxx添加属性都有反应，但是后面添加的就不能被监测到，
  要用Vue.set,
13.点击子组件出现父组件的效果，原来是加为冒泡了


