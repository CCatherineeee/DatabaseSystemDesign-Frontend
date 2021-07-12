<template>

  <div id="app">
    <el-row>
  <div>
    <el-row >
      <el-col class="Header">
        <el-col :span="5"><div class="grid-content bg-purple">logo区(TBD)</div></el-col>
        <el-col :span="10" style="padding:10px">
          <div>
        <el-input  placeholder="请输入内容" style="width:60%;margin-right:10px;"></el-input>
        <el-button type="primary" icon="el-icon-search" @click="search()" style="height:80%;border-radius:5px;font-size:15px;">搜索</el-button>
          </div>
        </el-col>
    <el-menu mode="horizontal" :router = "true" background-color="#2e78c2" text-color="white" active-text-color="yellow" style="float:right">
      <el-menu-item index="/">首页</el-menu-item>
        <el-submenu index="2" >
                <template slot="title">消息</template>
                <el-menu-item index="/CommentPage">评论</el-menu-item>
                <el-menu-item index="/ReplyPage">回复</el-menu-item>
                <el-menu-item index="/priMessage">私信</el-menu-item>
        </el-submenu>
       <el-submenu index="top">
         <template #title>个人中心</template>
            <el-menu-item index="/Login">登录/注册</el-menu-item>
            <el-menu-item index="/activity">个人主页</el-menu-item>
            <el-menu-item index="Logout">注销</el-menu-item>
        </el-submenu>
    </el-menu>
    </el-col>
  </el-row>
  </div>
    </el-row>
      <router-view />
  </div>
  
</template>
<script>
export default {
  methods:{
     search:function() {
        this.$router.replace({path: '/SearchPage'});
      },
  }
}
</script>
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
  background-color: #2e78c2;

}

</style>
