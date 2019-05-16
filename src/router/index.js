import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/Home'
import ClassMate from '@/page/home/ClassMate'
import TalentPage from '@/page/home/TalentPage'
import TeacherPage from '@/page/home/TeacherPage'
import NewsPage from '@/page/home/NewsPage'
import caseMessage from '@/page/home/caseMessage'
import about from '@/page/home/about'
import casePage from '@/page/home/casePage'
import newsDetails from '@/page/home/newsDetails'
import teacherDetails from '@/page/home/teacherDetails'
import mapping from './meta'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      meta: mapping.home
    },
    {
      path: '/classmate',
      name:'classmate',
      component: ClassMate,
      meta: mapping.news
    },
    {
      path: '/talent',
      name:'talent',
      component: TalentPage,
      meta: mapping.talent
    },
    {
      path: '/business',
      name:'/business',
      component: TeacherPage,
      meta: mapping.business
    },
    {
      path: '/news/:id',
      name:'newlist',
      component: NewsPage,
    },
    {
      path: '/news',
      name:'news',
      component: NewsPage,
      meta: mapping.news
    },
    {
      path:'/casedo',
      name:'casedo',
      component:caseMessage,
      meta: mapping.casedo
    },
    {
      path:'/about',
      name:'about',
      component:about,
      meta: mapping.about
    },
    {
      path:'/casePage/:id',
      name:'casePage',
      component:casePage,
      props: true
    },
    {
      path:'/newsDetails/:id',
      name:'newsDetails',
      component:newsDetails,
      props: true
    },
    {
      path:'/newsDetails/:id',
      name:'remen',
      component:newsDetails,
      props: true
    },
    {
      path:'/teacher/:id',
      name:'teacher',
      component:teacherDetails,
      props: true
    }
  ]
})