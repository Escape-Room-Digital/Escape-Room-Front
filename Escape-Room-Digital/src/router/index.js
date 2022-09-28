import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginMember from '../views/LoginMember.vue'
import PanelAdmin from '../views/PanelAdmin.vue'
import LandingPage from '../views/LandingPage.vue'
import TableRooms from '../views/TableRooms.vue'
import TableLogicTest from '../views/TableLogicTest.vue'
import TableCoderEditor from '../views/TableCoderEditor.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
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
      path: '/tablecodereditor',
      name: 'tablecodereditor',
      component: TableCoderEditor
    },
    {
      path: '/landingpage',
      name: 'landingpage',
      component: LandingPage
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFoundView.vue"),
  },
  ]
})

export default router
