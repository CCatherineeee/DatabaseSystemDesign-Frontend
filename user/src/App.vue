<template>

  <div id="app">
    <el-row>
  <div>
    <el-row >
      <el-col class="Header">
    <el-menu mode="horizontal" :router = "true" background-color="black" text-color="white" active-text-color="yellow" style="float:right">
      <el-menu-item index="main">首页</el-menu-item>
      <el-menu-item index="posted">帖子</el-menu-item>
       <el-submenu index="top">
         <template #title>个人中心</template>
          <el-menu-item index="top-1">登录</el-menu-item>
          <el-menu-item index="/UserZoon">个人主页</el-menu-item>
          <el-menu-item index="top-3">注销</el-menu-item>
        </el-submenu>
    </el-menu>
    </el-col>
  </el-row>
  </div>
    </el-row>
      <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.Header{
  background-color: black;

}

</style>
