import { createRouter, createWebHistory } from 'vue-router'

import VirtualExpert from '../views/VirtualExpert'
import Search from '../views/Search'

const routes = [
  {
    path: '/VirtualExpert',
    name: 'VirtualExpert',
    component: VirtualExpert
  },
  {
    path: '/',
    name: 'Search',
    component: Search
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
