import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView/HomeView.vue'
import RequestsView from '../views/RequestsView/RequestsView.vue'
import IngredientsView from '../views/IngredientsView/IngredientsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/requests',
      name: 'Requests',
      component: RequestsView
    },
    {
      path: '/ingredients',
      name: 'Ingredients',
      component: IngredientsView
    }
  ]
})

export default router
