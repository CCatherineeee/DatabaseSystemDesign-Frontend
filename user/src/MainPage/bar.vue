
<template>
<div style="margin:auto;height: auto;text-align:center; background-image: url(http://pic1.win4000.com/wallpaper/2017-10-12/59df06d7c561f.jpg); background-repeat:repeat;">
    <div class="hidScroller">


  <el-container >
          <el-aside width="200px" style="padding:20px;" >
          <el-container style="background:white;">
            <el-main>

              <p><b>贴吧介绍</b></p>
              <div>
              <el-col :span="10">
                <img :src="barImgUrl" height="120px" width="120px" />

              </el-col>
              </div>
              <div>
               <b>{{barTitle}}</b>
                <p>{{barIntrd}}</p>
              </div>
            </el-main>
            </el-container>

      </el-aside>

      <el-main  style="border-radius:25px;">
        <div style="padding:20px;border-radius:25px;"  class="back"  >
        <el-row>
          <b>帖子浏览</b>
               <el-row v-for="(barItem,index) in barData" :key="index">
                       <el-divider></el-divider>
                 <el-col :span="4" style="float:left">
                   <p >{{barItem.postTime}} </p>
                
                   </el-col>
                 <el-col :span="4"><p class="postTitle" style="float:left"> {{barItem.postTitle}} </p>
                   </el-col>
                 <el-col :span="4"><p class="postUser" style="float:left"> {{barItem.postUser}} </p></el-col>
                  
                </el-row>
                
        </el-row>
        </div>
        <div>
        <br>
        <el-divider></el-divider>
        </div>
         <el-container  class="back" style="padding:20px;border-radius:25px;" >
           <el-main>
            <b style="float:left">发帖</b>
            <div>
            <el-row>
                <el-input placeholder="请填写标题" v-model="enter" size="media" clearable> </el-input>
            </el-row>
            <br>
            </div>
            <div>
            <el-row>
                <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea">  </el-input>
            </el-row>
            <el-row>
              <br>
                <el-button type="primary" style="float:left" @click="onSubmit">发表</el-button>
            </el-row>
            </div>
           </el-main>
          </el-container>
      </el-main>
                <el-aside width="200px" style="padding:20px;" >
          <el-container class="asid-rank">
            <el-main>

              <p><b>贴吧排行</b></p>

              <el-col :span="10">
                <el-row v-for="(barItem,index) in bar" :key="index">
                  <span>
                    <el-button type="text" @click="toBar(barItem.router)">{{index+1}} {{barItem.BarTitle}}</el-button>
                  </span>
                </el-row>
              </el-col>
            </el-main>
            </el-container>

      </el-aside>
  </el-container>



    </div>
</div>
</template>

<script>
  export default {
    data() {
     
      return {
        barData:[
          {
            postTitle:"hello",
            postTime:"123",
            postUser:"123",
            BarImgUrl:require('..\\assets\\1.jpg')
            

          },
                    {
            postTitle:"hello",
            postTime:"123",
            postUser:"123",
            BarImgUrl:require('..\\assets\\1.jpg')

          },
                    {
            postTitle:"hello",
            postTime:"123",
            postUser:"123",
            BarImgUrl:require('..\\assets\\1.jpg')

          },
                    {
            postTitle:"hello",
            postTime:"123",
            postUser:"123",
            BarImgUrl:require('..\\assets\\2.jpg')

          },
        ],
        barTitle:"hello",
        barIntro:"",
        barImgUrl:require('..\\assets\\1.jpg')
      }
    }
  };
</script>

<style>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
      border-radius: 20px;

    
  }

  .el-aside {
    color: #333;
  }
/*最外层透明*/
.el-table, .el-table__expanded-cell{
  background:  #ffffff;

}
/* 表格内背景颜色 */
.el-table th,
.el-table tr,
.el-table td {
      background: hsl(0, 0%, 100%);
}
.mainback{
     background: #40a0ff7c;
        border-color: #40a0ff7c; 
        border-style: solid;  
        border-width: 2px;  
}
.postTitle
{
    font-size:20px;
    cursor:pointer;
    font-weight:bold;
}
.postUser
{
    font-size:5px;
    cursor:pointer;
    font-weight:bold;
}
.bar-header{
   border-color: rgba(255, 255, 255, 0.829);
  background-color: rgba(255, 255, 255, 0.925);
  border-radius: 20px;
    border-style: solid;  
    border-width: 2px;  
  height: 280px;
}
</style>
