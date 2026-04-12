import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Biography from '../components/Biography.vue'
import Research from '../components/Research.vue'
import Academic from '../components/Academic.vue'
import Grants from '../components/Grants.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/biography',
    name: 'Biography',
    component: Biography
  },
  {
    path: '/research',
    name: 'Research',
    component: Research
  },
  {
    path: '/academic',
    name: 'Academic',
    component: Academic
  },
  {
    path: '/grants',
    name: 'Grants',
    component: Grants
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
