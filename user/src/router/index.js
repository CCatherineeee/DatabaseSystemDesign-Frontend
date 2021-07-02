import Vue from 'vue'
import VueRouter from 'vue-router'
import UserPage from '../views/User_MyActivity.vue'
Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'UserPage',
    component:UserPage,
    children:[
    //redirect:'/User_MyActivity.vue',
      {path:'/activity',component:()=>import('../views/activity.vue')},
     {path:'/follow',component:()=>import('../views/follow.vue')},
      {path:'/info',component:()=>import('../views/Info.vue')},
      {path:'/history',component:()=>import('../views/history.vue')},
    ]
  },
  {
    path: '/redirct', // 重定向路由
    // component: () => import('@/views/layout/components/Sidebar/redirect'), hidden: true
    //component: Layout,
    //hidden: true,
      component: () => import('@/views/redirct.vue')
}
]

const router = new VueRouter({
  routes
})

export default router
