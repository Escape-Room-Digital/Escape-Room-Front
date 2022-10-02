import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginMember from '../views/LoginMember.vue'
import PanelAdmin from '../views/PanelAdmin.vue'
import LandingPage from '../views/LandingPage.vue'
import TableRooms from '../views/TableRooms.vue'
import TableLogicTest from '../components/TableLogicTest.vue'
import TableCoderEditor from '../components/TableCoderEditor.vue'
import CodeEditorEdit from '../views/CodeEditorEdit.vue'
import CodeEditorCreate from '../views/CodeEditorCreate.vue'
import LogicTestEdit from '../views/LogicTestEdit.vue'
import LogicTestCreate from '../views/LogicTestCreate.vue'


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
      path: "/tablelistcandidate",
      name: "tablelistcandidate",
      component: () => import("../components/TableListCandidate.vue"),
  },
    {
      path: '/codeeditorcreate',
      name: 'codeeditorcreate',
      component: CodeEditorCreate
    },
    {
      path: '/logictestcreate',
      name: 'logictestcreate',
      component: LogicTestCreate
    },
    {
      path: "/codeeditoredit",
      name: "codeeditoredit",
      component: CodeEditorEdit,
      props: true
  },
  {
    path: "/logictestedit",
    name: "logictestedit",
    component: LogicTestEdit,
    props: true
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
