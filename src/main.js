/*
入口js
(eslint在File中setting搜索然后设置成disable)

三种css预编译器：less,sass,stylus
安装stylus依赖包：stylus用来将stylus代码转成css代码 ，stylus-loader让webpack理解stylus
* */

import Vue from "vue"
import App from "./App.vue"
import router from "./router/index.js"

new Vue({
  el:"#app",
  render: h => h(App),
  router
})
