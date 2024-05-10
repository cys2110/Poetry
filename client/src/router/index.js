import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthorView from '@/views/AuthorView.vue'
import PoemView from '@/views/PoemView.vue'
import SearchView from '@/views/SearchView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/authors/:name',
      name: 'author',
      component: AuthorView,
      props: true
    },
    {
      path: '/authors/:name/:title',
      name: 'poem',
      component: PoemView,
      props: true
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    }
  ]
})

export default router
