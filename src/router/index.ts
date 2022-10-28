import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TeamView from '../views/TeamView.vue'
import ScheduleView from '../views/ScheduleView.vue'
import NewsView from '../views/NewsView.vue'
import StatsView from '../views/StatsView.vue'
import ContactView from '../views/ContactView.vue'
import PlayerView from '@/views/PlayerView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/team',
    name: 'taem',
    component: TeamView
  },
  {
    path: '/schedule',
    name: 'schedule',
    component: ScheduleView
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView
  },
  {
    path: '/stats',
    name: 'stats',
    component: StatsView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/player',
    name: 'player',
    component: PlayerView
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
