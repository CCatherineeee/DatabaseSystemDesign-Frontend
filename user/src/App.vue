<template>

  <div id="app">
    <el-row>
  <div style="float:right;">
    <el-menu :default-active="main" class="el-menu-demo" mode="horizontal" @select="handleSelect" router="true">
      <el-menu-item index="main">首页</el-menu-item>
      <el-menu-item index="posted">帖子</el-menu-item>
       <el-submenu index="top">
         <template #title>个人中心</template>
          <el-menu-item index="top-1">登录</el-menu-item>
          <el-menu-item index="/UserPage">个人资料</el-menu-item>
          <el-menu-item index="top-3">注销</el-menu-item>
        </el-submenu>
    </el-menu>
  </div>
    </el-row>
      <router-view/>
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
</style>
