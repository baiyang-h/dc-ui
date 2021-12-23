import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: () => import('@/views/home'),
    children: [
      {
        path: 'aa',
        name: 'aa',
        component: () => import('@/views/home/a.vue'),
        children: [
          {
            path: 'bb',
            name: 'bb',
            component: () => import('@/views/home/b.vue')
          },
          {
            path: 'cc',
            name: 'cc',
            component: () => import('@/views/home/c.vue')
          }
        ]
      }
    ]
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
