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
    path: '/layanan/parenting',
    name: 'layanan-parenting',
    component: () => import("../views/layanan/parenting/LayananParentingView.vue"),
    meta: {
      title: "A Better Life With Belif | Layanan"
    }
  },

  {
    path: '/layanan/parenting/artikel',
    name: 'layanan-parenting-artikel',
    component: () => import("../views/layanan/parenting/ArtikelParentingView.vue"),
    meta: {
      title: "A Better Life With Belif | Layanan"
    }
  },

  {
    path: '/layanan/parenting/modul',
    name: 'layanan-parenting-modul',
    component: () => import("../views/layanan/parenting/ModulParentingView.vue"),
    meta: {
      title: "A Better Life With Belif | Layanan"
    }
  },

  {
    path: '/layanan/parenting/workshop',
    name: 'layanan-parenting-workshop',
    component: () => import("../views/layanan/parenting/WorkshopParentingView.vue"),
    meta: {
      title: "A Better Life With Belif | Layanan"
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
      title: "Daftar Konsultasi"
    }
  },

  {
    path: '/checkout/:id',
    name: 'checkout',
    component: () => import("../views/CheckoutView.vue"),
    meta: {
      title: "Checkout"
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      console.log("From: ", from)
      console.log("To: ", to)
      console.log("Saved Position: ", savedPosition)
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
  }
})

export default router
