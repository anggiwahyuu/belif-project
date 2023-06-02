import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: "A Better Life With Belif"
    }
  },

  {
    path: '/tentangkami',
    name: 'tentangkami',
    component: () => import("../views/TentangKamiView.vue"),
    meta: {
      title: "A Better Life With Belif | Tentang Kami"
    }
  },

  {
    path: '/literasi',
    name: 'literasi',
    component: () => import("../views/LiterasiView.vue"),
    meta: {
      title: "A Better Life With Belif | Literasi"
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
