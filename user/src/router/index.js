import Vue from 'vue'
import VueRouter from 'vue-router'
import UserPage from '../views/UserPage.vue'
import EditInfo from '../views/EditInfo.vue'
import UserZoon from '../views/UserZoon.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/UserZoon',
    name:'UserZoon',
    component:UserZoon,
    children:[
      {path:'/UserPage',component:UserPage,children:[
        {path:'/activity',component:()=>import('../views/activity.vue')},
      {path:'/follow',component:()=>import('../views/follow.vue')},
      {path:'/history',component:()=>import('../views/history.vue')},
      {path:'/message',component:()=>import('../views/message.vue')},
      {path:'/favorite',component:()=>import('../views/favorite.vue')},
      ]},
      {path:'/EditInfo',component:EditInfo}
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router

