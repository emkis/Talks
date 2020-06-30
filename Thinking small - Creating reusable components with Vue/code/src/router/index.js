import Vue from 'vue'
import VueRouter from 'vue-router'

import Demonstration from '@/pages/Demonstration'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Demonstration',
    component: Demonstration,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
