import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/layout/index'


Vue.use(Router)

//通用路由表 
export const constantRouterMap = [
  {
    path: '/',
    component: Layout
  },
]

export default new Router({
  mode: 'history',
  routes: constantRouterMap
});


