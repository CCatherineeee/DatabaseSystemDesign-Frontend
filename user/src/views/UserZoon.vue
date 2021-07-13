<template>

<div>
   
<div>
<el-container  style="height: 500px; border: 1px solid #eee">
<el-aside width="300px" class="asid">
  <br>
    <img src="..\assets\1.jpg" height="180px" width="180px" style="border-radius:50%"/>
    <p><b> {{UserName}} </b></p>
    <el-menu   :router="true" :default-active="$path='/UserPage'" :collapse-transition="true">
      <el-menu-item index="/activity" >我的主页</el-menu-item>
      <el-menu-item index="EditInfo">修改个人资料</el-menu-item>
      </el-menu>
</el-aside>
<el-main>

  <div>
      <transition name="slide-fade">
      <!--路由占位符-->
      <router-view></router-view>
      </transition>
  </div>
</el-main>
</el-container>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
export default {
  mounted(){
   this.setUserName();
  },
    methods: {
    EditInfo:function()
    {
      this.$router.replace({path: '/EditInfo'})
    },
     setUserName()
    {
      var storeID = localStorage.getItem("userID");
      this.UserName = storeID;
    }
    },
    
  data()
  {
    return{
      UserName:""
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

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .4s ease;
}
.slide-fade-leave-active {
  transition: all 0s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.background{
    width:100%;  
    height:100%;  /**宽高100%是为了图片铺满屏幕 */
    z-index:-1;
    position: absolute;
}
 
.front{
    z-index:1;
    position: absolute;
}
.asid{
  box-shadow: 1px 1px 9px #e4e4e4
}
</style>

