import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _215af01b = () => interopDefault(import('../pages/community/index.vue' /* webpackChunkName: "pages/community/index" */))
const _a7c8b13e = () => interopDefault(import('../pages/product/index.vue' /* webpackChunkName: "pages/product/index" */))
const _163f4596 = () => interopDefault(import('../pages/qna/index.vue' /* webpackChunkName: "pages/qna/index" */))
const _3150a1a7 = () => interopDefault(import('../pages/service/index.vue' /* webpackChunkName: "pages/service/index" */))
const _7356e374 = () => interopDefault(import('../pages/slottest/index.vue' /* webpackChunkName: "pages/slottest/index" */))
const _b1673c82 = () => interopDefault(import('../pages/community/axios.vue' /* webpackChunkName: "pages/community/axios" */))
const _12f18ba4 = () => interopDefault(import('../pages/community/promise.vue' /* webpackChunkName: "pages/community/promise" */))
const _386ab06b = () => interopDefault(import('../pages/qna/create/index.vue' /* webpackChunkName: "pages/qna/create/index" */))
const _637e0e09 = () => interopDefault(import('../pages/product/_id.vue' /* webpackChunkName: "pages/product/_id" */))
const _44613b81 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/community",
    component: _215af01b,
    name: "community"
  }, {
    path: "/product",
    component: _a7c8b13e,
    name: "product"
  }, {
    path: "/qna",
    component: _163f4596,
    name: "qna"
  }, {
    path: "/service",
    component: _3150a1a7,
    name: "service"
  }, {
    path: "/slottest",
    component: _7356e374,
    name: "slottest"
  }, {
    path: "/community/axios",
    component: _b1673c82,
    name: "community-axios"
  }, {
    path: "/community/promise",
    component: _12f18ba4,
    name: "community-promise"
  }, {
    path: "/qna/create",
    component: _386ab06b,
    name: "qna-create"
  }, {
    path: "/product/:id",
    component: _637e0e09,
    name: "product-id"
  }, {
    path: "/",
    component: _44613b81,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
