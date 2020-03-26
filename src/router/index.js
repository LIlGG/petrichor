import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)


//通用路由表 
export const constantRoutes = [
    {
        path: '/',
        component: () => import('@/page/page'),
        meta: {
            title: ' 首页',
            span: 'faa-parent animated-hover',
            icon: 'fa fa-fort-awesome faa-horizontal',
            showBack: true,
        },
    },
    {
        path: '/404',
        component: () => import('@/page/404'),
        hidden: true,
        meta: {
            title: '404',
        }
    },
    { 
        path: '/:year(\\d+)/:month(\\d+)?/:day(\\d+)?/:article?',
        hidden: true,
        component: () => import('@/page/page')
    },
    { path: '*', redirect: '/404'}
]

// 异步加载的路由表
export const asyncRoutes = [
    {
        path: '/archives',
        component: () => import('@/page/page'),
        name: 'archives',
        meta: {
            title: ' 归档',
            span: 'faa-parent animated-hover',
            icon: 'fa fa-archive faa-shake',
        },
        children: [
            {
                path: 'hacking',
                component: () => import('@/page/page'),
                name: 'hacking',
                meta: {
                    title: ' 极客',
                    icon: 'fa fa-terminal',
                },
            },
            {
                path: 'article',
                component: () => import('@/page/page'),
                name: 'article',
                meta: {
                    title: ' 文章',
                    icon: 'fa fa-file-text-o',
                },
            },
            {
                path: 'review',
                component: () => import('@/page/page'),
                name: 'review',
                meta: {
                    title: ' 影评',
                    icon: 'fa fa-quote-right',
                },
            },
            {
                path: 'thingking',
                component: () => import('@/page/page'),
                name: 'thingking',
                meta: {
                    title: ' 随想',
                    icon: 'fa fa-commenting-o',
                },
            },
            {
                path: 'top',
                component: () => import('@/page/page'),
                name: 'top',
                meta: {
                    title: ' 笔记',
                    icon: 'fa fa-commenting-o',
                },
            }
        ]
    },
    {
        path: '/list',
        component: () => import('@/page/page'),
        name: 'list',
        meta: {
            title: ' 清单',
            span: 'faa-parent animated-hover',
            icon: 'fa fa-list-ul faa-vertical',
        },
        nopath: true,
        children: [
            {
                path: 'book-list',
                component: () => import('@/page/page'),
                name: 'booklist',
                meta: {
                    title: ' 书单',
                    icon: 'fa fa-th-list faa-bounce',
                },
            },
            {
                path: 'bangumi',
                component: () => import('@/page/page'),
                name: 'bangumi',
                meta: {
                    title: ' 番组',
                    icon: 'fa fa-film faa-vertical',
                },
            },
            {
                path: 'music',
                component: () => import('@/page/page'),
                name: 'music',
                meta: {
                    title: ' 歌单',
                    icon: 'fa fa-headphones',
                },
            }
        ]
    }
]

const createRouter = () => new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher
}

export default router


