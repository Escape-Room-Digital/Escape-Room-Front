import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginMember from '../views/LoginMember.vue'
import PanelAdmin from '../views/PanelAdmin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/loginmember',
      name: 'loginmember',
      component: LoginMember
    },
    {
      path: '/paneladmin',
      name: 'paneladmin',
      component: PanelAdmin
    },
  ]
})

export default router
