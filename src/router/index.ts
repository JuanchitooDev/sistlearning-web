import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Mantenimiento from '../components/Mantenimiento.vue'
import CertificadoDetail from '../components/CertificadoDetail.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/certificado/:codigo',
    name: 'certificado-detail',
    component: CertificadoDetail
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
  history: createWebHistory('/web'),
  routes
})

export default router
