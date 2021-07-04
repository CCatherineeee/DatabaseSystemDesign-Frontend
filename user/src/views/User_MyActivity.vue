<template>

<el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="200px">
    <img src="..\assets\1.jpg" height="100px" style="border-radius:50%"/>


    <el-menu :default-active="info" router="true">

      <el-menu-item index="info">
        MY INFORMATION
      </el-menu-item>

      <el-menu-item index="message">MY MESSAGE</el-menu-item>

      <el-menu-item index="favorite">MY FAVORITE</el-menu-item>

      <el-menu-item index="activity" >MY ACTIVITY</el-menu-item>

      <el-menu-item index="follow">My FOLLOW</el-menu-item>

      <el-menu-item index="history">MY VIEW HISTORY</el-menu-item> 

    </el-menu>
  </el-aside>

    <el-main>

      <!--路由占位符-->
      <router-view></router-view>
    </el-main>
</el-container>

</template>

<script>
// @ is an alias to /src
export default {
    methods: {
      toActivity()
      {
        this.$router.push({path:'activity'})
      },
      toFollow(){
        this.$router.push({path:'follow'})
      },
      toInfo(){
        this.$router.push({path:'Info'})
      },
      toViewhistory(){
        this.$router.push({path:'history'})
      },
      toMessage(){
        this.$router.push({path:'message'})
      },
      toFavorite(){
        this.$router.push({path:'favorite'})
      }
  }
}
</script>

<style>

.el-header{
  background-color: #a7cdff;
    color: #333;
    text-align: center;
    line-height: 60px;
}

</style>

