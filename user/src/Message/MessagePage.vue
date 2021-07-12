<template>
<div style="margin:auto;height:800px;text-align:center;background-image:url(https://static.zhihu.com/heifetz/assets/sign_bg.db29b0fb.png);background-repeat:repeat-y;">
<div class="back">
  <br>
<el-container style="height:800px">
  <el-aside width="300px" class="asid-rank" style="height:400px;">
  <br>
    <img src="..\assets\1.jpg" height="180px" width="180px" style="border-radius:50%"/>
    <p><b> {{UserName}} </b></p>
       <el-menu  :router="true" >
               <el-menu-item index="/CommentPage">评论</el-menu-item>
                <el-menu-item index="/ReplyPage">回复</el-menu-item>
                <el-menu-item index="/priMessage">私信</el-menu-item>
      </el-menu>
</el-aside>


    <el-main>

      <!--路由占位符-->
      <router-view></router-view>
    </el-main>
  </el-container>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
export default {
    methods: {
      toComment()
      {
        this.$router.push({path:'comment'})
      },
      toReply(){
        this.$router.push({path:'reply'})
      },
      toPri_messa(){
        this.$router.push({path:'pri_messa'})
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
.back{
   background: rgba(255,255,255,.7);  
        border-color: rgba(255,255,255,.8);  
        border-style: solid;  
        border-width: 2px;  
}
.asid-rank{
  background-color:  rgba(69, 169, 250, .568);
  background: #ffffffab;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
</style>

