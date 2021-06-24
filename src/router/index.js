import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/vuelos',
    name: 'Vuelos',
    component: () => import(/* webpackChunkName: "vuelos" */ '../views/Vuelos.vue')
  },
  {
    path: '/tickets',
    name: 'Tickets',
    component: () => import(/* webpackChunkName: "tickets" */ '../views/Tickets.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
