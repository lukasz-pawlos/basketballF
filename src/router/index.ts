import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TeamView from '../views/TeamView.vue'
import ScheduleView from '../views/ScheduleView.vue'
import NewsView from '../views/NewsView.vue'
import StatsView from '../views/StatsView.vue'
import ContactView from '../views/ContactView.vue'
import PlayerView from '@/views/PlayerView.vue'
import AdminPanelView from "@/views/AdminPanelView.vue";
import AdminPlayersPanelView from "@/views/AdminPlayersPanelView.vue";
import AdminCoachesPanelView from "@/views/AdminCoachesPanelView.vue";
import AdminMatchesPanelView from "@/views/AdminMatchesPanelView.vue";
import AdminTeamsPanelView from "@/views/AdminTeamsPanelView.vue";

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
    component: PlayerView,
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminPanelView,
    children: [
      {
        path: '/admin/players',
        name: 'admin-players',
        component: AdminPlayersPanelView,
      },
      {
        path: '/admin/coaches',
        name: 'admin-coaches',
        component: AdminCoachesPanelView,
      },
      {
        path: '/admin/teams',
        name: 'admin-teams',
        component: AdminTeamsPanelView,
      },
      {
        path: '/admin/matches',
        name: 'admin-matches',
        component: AdminMatchesPanelView,
      }
    ]
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
