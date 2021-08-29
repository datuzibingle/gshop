# gshop

> A Vue.js project

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



##使用的技术

vue 、vue-router路由、vuex、mint-ui组件库、vue-lazyload懒加载、滑动库vue-scroller,better-scroll,swiper、日期处理库moment,date-fns

##项目构建

webpack,vue-cli,eslint

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

2.index.html文件中引入初始化文件
```angular2html
<!-- 引入初始化样式   -->
<link rel="stylesheet" href="/static/css/reset.css">
```
2.引入vue-router
```angular2html
npm install vue-router --save
```
3.用postman测试服务器
4.接口函数
5.git进行版本控制
  git init
  git add *
