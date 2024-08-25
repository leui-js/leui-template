import type { App } from 'vue'

import { setupLayouts } from 'virtual:generated-layouts'
import type { RouteRecordRaw } from 'vue-router/auto'
// eslint-disable-next-line import/no-unresolved
import { createRouter, createWebHistory } from 'vue-router/auto'
import { isUserLoggedIn } from '@/plugins/1.router/oa-login'

function recursiveLayouts(route: RouteRecordRaw): RouteRecordRaw {
  if (route.children) {
    for (let i = 0; i < route.children.length; i++)
      route.children[i] = recursiveLayouts(route.children[i])

    return route
  }

  return setupLayouts([route])[0]
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to) {
    if (to.hash)
      return { el: to.hash, behavior: 'smooth', top: 60 }

    return { top: 0 }
  },
  extendRoutes: pages => [
    ...[...pages].map(route => recursiveLayouts(route)),
  ],
})

/**
 * Docs: https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards
 * 检查是否 *.oa.fenqile.com
 */
if (location.hostname.endsWith('.oa.fenqile.com')) {
  // 检查是否登录
  router.beforeEach(async (to, from, next) => {
    if (await isUserLoggedIn())
      next()
    else
      next({ name: 'Login' })
  })
}

export { router }

export default function (app: App) {
  app.use(router)
}
