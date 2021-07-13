<template>
<div>
<el-menu  class="el-menu-demo" mode="horizontal" :router = "true">
      <el-menu-item index="activity">我的发帖</el-menu-item>
      <el-menu-item index="history">我的评论</el-menu-item>
       <el-menu-item index="favorite">我的收藏</el-menu-item>
       <el-menu-item index="follow">我的关注</el-menu-item>
       <el-menu-item index="fans">我的粉丝</el-menu-item>
    </el-menu>
    <br>
    
     <transition name="slide-fade">
      <!--路由占位符-->
      <router-view></router-view>
      </transition>
</div>

</template>