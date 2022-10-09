import { createRouter, createWebHistory } from 'vue-router'
//views
import HomeView from '../views/HomeView.vue'
import LoginMember from '../views/LoginMember.vue'
import PanelAdmin from '../views/PanelAdmin.vue'
import LandingPage from '../views/LandingPage.vue'
import EscapeRoomGame from '../views/EscapeRoomGame.vue'
//components
import TableRooms from '../components/TableRooms.vue'
import TableLogicTest from '../components/TableLogicTest.vue'
import TableCoderEditor from '../components/TableCoderEditor.vue'
import CodeEditorEdit from '../components/CodeEditorEdit.vue'
import CodeEditorCreate from '../components/CodeEditorCreate.vue'
import LogicTestEdit from '../components/LogicTestEdit.vue'
import LogicTestCreate from '../components/LogicTestCreate.vue'
import CreateFormuserVue from '@/components/CreateFormuser.vue'
import TableListCandidate from '@/components/TableListCandidate.vue'
import  EscapeRoomCreate   from '../components/EscapeRoomCreate.vue'
import Post from '../views/Post.vue'


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
      path: '/landingpage',
      name: 'landingpage',
      component: LandingPage
    },

    {
      path: '/escaperoomgame',
      name: 'escaperoomgame',
      component: EscapeRoomGame
    },
    //components
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
      component: TableListCandidate
    },

    {
      path: '/userscreated',
      name: 'userscreated',
      component: CreateFormuserVue
    },

    {
      path: "/templateforms",
      name: "templateforms",
      component: () => import("../views/TemplateForms.vue"),
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
      path: "/escaperoomcreate",
      name: "escaperoomcreate",
      component: EscapeRoomCreate,
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
      path: '/post',
      name: 'post',
      component: Post
    },
    
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFoundView.vue"),
    },
  ]
})

export default router
