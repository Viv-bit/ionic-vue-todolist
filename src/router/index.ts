import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'
import Todolist from '../views/Todolist.vue'
import Addtodo from '../components/Addtodo.vue'

const routes: Array<RouteRecordRaw> = [
 
 
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/todolist',
    component: () => import('../views/Todolist.vue')
  },
  {
    path: '/addtodo',
    component: () => import('../components/Addtodo.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
