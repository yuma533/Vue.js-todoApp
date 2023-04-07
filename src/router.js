import { createRouter, createWebHistory } from 'vue-router'
import todoView from './View/todoView.vue'

const routes = [
  {
    path: '/todoview',
    name: 'todoView',
    component: todoView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router