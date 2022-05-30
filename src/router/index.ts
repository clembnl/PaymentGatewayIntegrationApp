import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Success from '../views/Success.vue'
import ErrorPage from '../views/ErrorPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/success',
    name: 'Success',
    component: Success
  },
  {
    path: '/error',
    name: 'error',
    component: ErrorPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
