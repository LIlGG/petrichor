import router from './router'
import store from './store'
import getPageTitle from '@/utils/get-page-title'
router.beforeEach(async(to, from, next) => {
  // 设置页面标题
  document.title = getPageTitle(to.meta.title)
  const isRouter = store.getters.isRouter;
  console.log(isRouter)
  // 确保从没设置过router
  if(!isRouter) {
    const accessRoutes = await store.dispatch('router/generateRoutes');
    router.addRoutes(accessRoutes);
  }
  next()
})

