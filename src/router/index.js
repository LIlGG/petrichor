import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)
import Layout from '@/layout/index'

//通用路由表 
export const constantRoutes = [
  {
    path: '/',
    component: Layout,
  },
  {
    path: '/404',
  }
]

// 异步加载的路由表
export const asyncRoutes = [
    {
        path: '/archives',
        component: Layout,
        name: 'archives',
        title: '归档',
        children: [
            {
                path: 'hacking',
                component: () => import ('layout/index'),
                name: 'hacking',
                title: '极客'
            },
            {
                path: 'article',
                component: () => import ('layout/index'),
                name: 'article',
                title: '文章'
            }
        ]
    },
    { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher
}

export default router


