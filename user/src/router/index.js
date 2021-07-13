import Vue from 'vue'
import VueRouter from 'vue-router'
import UserPage from '../views/UserPage.vue'
import EditInfo from '../views/EditInfo.vue'
import UserZoon from '../views/UserZoon.vue'
import CommentPage from '../Message/comment.vue'
import ReplyPage from '../Message/reply.vue'
import priMessage from '../Message/priMessa.vue'
import MessagePage from '../Message/MessagePage.vue'
import Home from '../MainPage/Home.vue'
import SearchPage from '../MainPage/Search.vue'
import BarPage from '../MainPage/bar.vue'
import Login from '../MainPage/Login.vue'
import Register from '../MainPage/Register.vue'
import redirct from '../views/redirct.vue'
import AddAn from '../Announcement/AddAnn.vue'
import Ann from '../Announcement/Ann.vue'
import hisUserPage from '../lookUser/hisUserZoon.vue'
import hisLeaveMes from '../lookUser/hisLeaveMes.vue'
import creatBar from '../MainPage/createBar.vue'
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
      {path:'/favorite',component:()=>import('../views/favorite.vue')},
      {path:'/fans',component:()=>import('../views/fans.vue')},
      ]},
      {path:'/EditInfo',component:EditInfo}
    ]
  },
  {
    path:'/',
    name:'Home',
    component:Home,
  },
  {
    path:'/AddAn',
    name:'AddAn',
    component:AddAn,
  },
  {
    path:'/SearchPage',
    name:'SearchPage',
    component:SearchPage,
  },
  {
    path:'/MessagePage',
    name:'MessagePage',
    component:MessagePage,
    children:[
      {path:'/CommentPage',component:CommentPage},
      {path:'/MessagePage',component:MessagePage},
      {path:'/ReplyPage',component:ReplyPage},
      {path:'/priMessage',component:priMessage},
      
    ]
  },
  {
    path:'/creatBar',
    name:'creatBar',
    component:creatBar,
  },
  {
    path:'/hisUserPage',
    name:'hisUserPage',
    component:hisUserPage,
    children:[
      
    ]
  },  
  {
    path:'/hisLeaveMes',
    name:'hisLeaveMes',
    component:hisLeaveMes},
  {
    path:'/BarPage',
    name:'BarPage',
    component:BarPage
  },  
  {
    path:'/Login',
    name:'Login',
    component:Login,
  },  
  {
    path:'/Register',
    name:'Register',
    component:Register,
  },
  {
    path:'/redirct',
    name:'redirct',
    component:redirct,
  },
  {
    path:'/Ann',
    name:'Ann',
    component:Ann,
  },

]

const router = new VueRouter({
  routes
})

export default router

