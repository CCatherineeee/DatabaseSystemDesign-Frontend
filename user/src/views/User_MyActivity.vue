<template>

<el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="200px">
    <img src="..\assets\1.jpg" height="100px" style="border-radius:50%"/>


    <el-menu :default-active="this.$route.path">

      <el-menu-item index="User">

      <span slot="title" @click="toInfo()">MY INFORMATION</span>
    </el-menu-item>

      <el-menu-item index="/activity" >

        <span slot="title" @click="toActivity()">MY ACTIVITY</span>
      </el-menu-item>
      <el-menu-item index="2">
        <span slot="title" @click="toFollow()"> My FOLLOW</span>
      </el-menu-item>
      <el-menu-item index="3">

        <span slot="title" @click="toViewhistory()">MY VIEW HISTORY</span>
        
      </el-menu-item> 
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


