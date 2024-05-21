import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewsList from '../views/NewsList.vue'
import NewsDetail from '../views/NewsDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/news/',
      name: 'newsList',
      component: NewsList
    },
    {
      path: '/news/:id',
      name: 'newsDetail',
      component: NewsDetail
    }
  ]
})

export default router
