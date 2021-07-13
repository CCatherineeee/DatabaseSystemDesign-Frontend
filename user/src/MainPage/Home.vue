<template>
    <div style="margin:auto;height: auto;text-align:center; background-image: url(https://static.zhihu.com/heifetz/assets/sign_bg.db29b0fb.png); background-repeat:repeat;">
    <div class="back">
      <br>
     
     <el-container class="header">
       <el-main class="header" style="overflow-x:hidden;">
         <el-row :gutter= '2'>
           <el-col :span= "15">
        <el-carousel height="200px" type="card" >
          <el-carousel-item v-for="(item,index) in hotbar" :key="index" class="shadow">

          <img :src = "item.viewRouter" height="100%" @click="toBar()"/>
          </el-carousel-item>
        </el-carousel>
        </el-col>
        <el-col :span="8" style="float:right;" height="300px">   
          <b>公告栏</b>
          <br>
      
          <div v-for="(AdItem,index) in AdList" :key="index" >
           <div v-if= isShow(index)>
              <el-row class="shadow" style="height:40px">
                    <el-button type="text" @click= "dialogClick(AdList[index])" id="index"> {{AdItem.Title}} </el-button>           
                    <el-dialog :title="Title" :visible.sync = "dialogVisible">
                        <p>{{Content}}</p>
                    </el-dialog>
              </el-row>
             </div>
          </div>
            <el-button type="text" style="float:right"> 更多 </el-button>        
        </el-col>
         </el-row>
        </el-main>
     </el-container>
     
     <div class=".el-scrollbar__wrap">
       <br>
     <el-container>

    <el-container style="height:500px;float:left">
      
      <el-aside width="250px" class="left">
          <el-container class="asid-rank">
            <el-main>

              <p><b>贴吧排行</b></p>

              <el-col >
                <el-row v-for="(barItem,index) in bar" :key="index">
                  <span>
                    <el-button type="text" @click="toBar(barItem.router)">{{index+1}} {{barItem.BarTitle}}</el-button>
                  </span>
                </el-row>
              </el-col>
            </el-main>
            </el-container>
                <el-divider></el-divider>

      </el-aside>
    </el-container>
      <el-scrollbar style="height:100%;">
        <el-scrollbar>
           <div class="flex-content">
      <el-main style="width:auto;">
        <el-row>
        <div style="float:left;">
        <b>推荐贴吧</b>
        </div>
        <div style="float:right;font-size:2px" class="barTitle">
          <b>更多</b>
        </div>
        </el-row> 
        <br>
        <el-container style="width:auto">

        <el-row>
        <el-container >
          <el-row  v-for="(item,index) in bar" :key="index">
            <el-container class="block" style="width:460px;height:190px;">
              <el-aside style="width:160px">
                <br>
              <img :src="item.BarIconUrl"  style="border-radius:20px;float:right;"  height="150px" width="150px" />
      
              </el-aside>
              <el-main style="float:left;">
                <el-row>
                  <p  class="barTitle" @click="toBar('/follow')">{{item.BarTitle}}</p>
                </el-row>
                <el-row>
                <i class="el-icon-chat-square">{{item.BarFans}}</i>
                <i class="el-icon-user">{{item.BarHot}}</i>
                </el-row>
              </el-main>
            </el-container>
          </el-row>
        
        </el-container>
        </el-row>
        </el-container>
        <br>
        <div v-if = checkLogin()>
        <el-row>
        <div style="float:left;">
        <b>您的关注</b>
        </div>
        <div style="float:right;font-size:2px" class="barTitle">
          <b>更多</b>
        </div>
        </el-row>
        <br>
      <el-row>
        <el-container>
          <el-row  v-for="(item,index) in bar" :key="index">
            <el-container class="block" style="width:460px;height:190px;">
              <el-aside style="width:160px">
                <br>
              <img :src="item.BarIconUrl"  style="border-radius:20px;float:right;"  height="150px" width="150px" />
      
              </el-aside>
              <el-main style="float:left;">
                <el-row>
                  <p  class="barTitle" @click="toBar('/follow')">{{item.BarTitle}}</p>
                </el-row>
                <el-row>
                <i class="el-icon-chat-square">{{item.BarFans}}</i>
                <i class="el-icon-user">{{item.BarHot}}</i>
                </el-row>
              </el-main>
            </el-container>
          </el-row>
        </el-container>
      </el-row>
        </div>
      </el-main>
      </div>
      </el-scrollbar>
      
      </el-scrollbar>
      
     </el-container>
    
     </div>
    </div>
  </div>

  
</template>

<script>
export default {
  data() {
      return {
        dialogVisible : false,
        Title : " ",
        Content : " ",
        IsLogin: true,
        circleUrl:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
       
        bar: [{
          router:'/activity',
            BarTitle:"hello",
            BarFans:123,
            BarHot:123,
            BarIconUrl:require('..\\assets\\1.jpg')
            },
            {
          router:'/activity',
            BarTitle:"hello",
            BarFans:123,
            BarHot:123,
            BarIconUrl:require('..\\assets\\1.jpg')
            },
            
            
          ],
        hotbar:[{
          viewRouter: require('..\\assets\\4.jpg'),
        },
        {
          viewRouter : require('..\\assets\\2.jpg'),
        },
        {
          viewRouter : require('..\\assets\\3.webp'),
        }],
        AdList:[],
      }
  },
  mounted(){
    this.getAd('http://139.196.167.75:5000/api/Announcement');

  },
  methods:{
    toBar:function()
    {
      this.$router.replace({path:'/BarPage'});
    },
    test:function(data)
    {
      console.log(data);
    },
    dialogClick:function(AdItem)
    {
      this.dialogVisible=true;
      this.Title=AdItem.ANNOUNCEMENTTITLE;
      this.Content=AdItem.ANNOUNCEMENTCONTENT;
      console.log(this.dialogVisible);
    },
    isShow:function(index){
      return this.AdList.length-index > 4 ? false: true;
      },
    checkLogin:function()
    {
      return this.IsLogin;
    },
    store:function(item)
    {
        this.AdList=JSON.parse(item);
        console.log(this.AdList);
    },
    async getAd(url)
    {
      await fetch(url, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
          })
          .then(response => response.json())
          .then(data => this.store(data));
          console.log("Geted");

        }
    }

  }

</script>

<style>
.back{
   background: rgba(255,255,255,.7);  
        border-color: rgba(255,255,255,.8);  
        border-style: solid;  
        border-width: 2px;  
}
.header{
   border-color: rgba(255, 255, 255, 0.288);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
    border-style: solid;  
    border-width: 2px;  
  height: 280px;
}
.smallHeader{
  background-color: #2c84db80;
  
}
.asid-rank{
  background-color:  rgba(69, 169, 250, .7);
  background: #ffffffab;
  border-radius:25px;
  height: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)

}
.shadow{
   box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
.left{
    background-color:  rgba(255, 255, 255, 0.4);
}
.inline-input{
  width: 800px;
  
}
.block
{
  height: 200px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
   background-color:  rgba(255, 255, 255, 0.4);

}
.barTitle
{
    font-size:40px;
    cursor:pointer;
    font-weight:bold;
}
.barTitle:hover
{
  color:rgba(4, 121, 255, 0.568);
}
.el-scrollbar__wrap {
    overflow-x: hidden;
    overflow-y: hidden;
    
}
</style>