import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: () => import('@/views/home')
  },
  {
    path: '/form',
    component: () => import('@/demo/form/form5.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
