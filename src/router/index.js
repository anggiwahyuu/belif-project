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
  },

  {
    path: '/psikolog',
    name: 'psikolog',
    component: () => import("../views/TimPsikologView.vue"),
    meta: {
      title: "A Better Life With Belif | Tim Psikolog"
    }
  },

  {
    path: '/detailpsikolog/:id',
    name: 'detail',
    component: () => import("../views/DetailPsikologView.vue"),
    meta: {
      title: "A Better Life With Belif | Detail Psikolog"
    }
  },

  {
    path: '/login',
    name: 'login',
    component: () => import("../views/LoginView.vue"),
    meta: {
      title: "Login"
    }
  },

  {
    path: '/register',
    name: 'register',
    component: () => import("../views/RegisterView.vue"),
    meta: {
      title: "Register"
    }
  },

  {
    path: '/daftar-konsultasi-online/:id',
    name: 'daftar-online',
    component: () => import("../views/KonsultasiOnlineFormView.vue"),
    meta: {
      title: "Register"
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
