import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Mantenimiento from '../components/Mantenimiento.vue'
import CertificadoDetail from '../components/CertificadoDetail.vue'

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  {
    path: '/certificado/:codigo',
    name: 'certificado-detail',
    component: CertificadoDetail,
    // meta: {layout: 'no-sidebar'}
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: Mantenimiento,
    props: {
      mensaje: {
        titulo: 'Página no encontrada',
        descripcion: 'La página que buscas no existe. Verifica la URL o vuelve al inicio'
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
