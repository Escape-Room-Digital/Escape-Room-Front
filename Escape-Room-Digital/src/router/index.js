import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginMember from '../views/LoginMember.vue'
import PanelAdmin from '../views/PanelAdmin.vue'
import LandingPage from '../views/LandingPage.vue'
import TableRooms from '../views/TableRooms.vue'
import TableLogicTest from '../views/TableLogicTest.vue'


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
    {
      path: '/tablerooms',
      name: 'tablerooms',
      component: TableRooms
    },
    {
      path: '/tablelogictest',
      name: 'tablelogictest',
      component: TableLogicTest
    },
    {
      path: '/landingpage',
      name: 'landingpage',
      component: LandingPage
    },
  ]
})

export default router
