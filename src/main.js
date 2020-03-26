import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import NProgress from 'nprogress'
import GL_Component from 'components/globalcomponents';
// 引入全局提示组件
import Tips from '@/plugins/Tips';
import '@/styles/style.less'
import '@/styles/index.less'

import * as filters from './filters' // 全局过滤器

import './permission'
Vue.config.productionTip = false
Vue.use(GL_Component)
Vue.use(Tips);

// 注册全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

//当路由进入前
router.beforeEach((to, from, next) => {
  // 每次切换页面时，调用进度条
  NProgress.start();
  // 这个一定要加，没有next()页面不会跳转的。
  next();
});
//当路由进入后：关闭进度条
router.afterEach(() => {
  // 在即将进入新的页面组件前，关闭掉进度条
  NProgress.done()
})


NProgress.configure({
  minimum: 0.0,
  easing: 'ease',
  speed: 1000,
  showSpinner: false
})