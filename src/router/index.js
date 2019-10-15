import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)
import Layout from '@/layout/index'

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


