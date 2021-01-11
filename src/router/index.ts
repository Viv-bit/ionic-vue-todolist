import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'
import Todolist from '../views/Todolist.vue'
import Addtodo from '../components/Addtodo.vue'

const routes: Array<RouteRecordRaw> = [
 
 
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    redirect: '/todolist'
  },
  {
    path: '/todolist',
    name: 'Todolist',
    component: Todolist
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
