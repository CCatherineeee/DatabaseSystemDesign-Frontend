<template>
    <div style="margin:auto;height:800px;text-align:center; background-image:url(https://static.zhihu.com/heifetz/assets/sign_bg.db29b0fb.png); background-repeat:repeat;">
        <div class="back" style="height:800px">
        <el-container style="height:400px;padding:30px">
            <el-aside> </el-aside>
            <el-main class="createBarBack createBarshadow" style="padding:20px">
             
            <b style>创建贴吧</b>
            <el-row>
                <br>
                <el-input type="text" placeholder="请填写贴吧名" v-model= "barTitle"></el-input>
            </el-row>
            <br>
           
            <el-row>
                <el-input type="textarea" :rows="2" placeholder="请输入贴吧介绍" v-model= "barSummary"></el-input>
            </el-row>
            <el-row>
              <br>
                <el-button type="primary" class="shadow" style="float:left;background:white;color:#318de2" @click = "onSubmit()">创建贴吧</el-button>
            </el-row>
           </el-main>
            <el-aside> </el-aside>
        </el-container>
        </div>
  </div>

  
</template>

<script>

export default {
  data() {
      return {
        barTitle:'',
        barSummary:'',
      }
  },

  methods:{
      async onSubmit()
      {
          
      }
     
    }

  }

</script>

<style>
.createBarBack{
   background: rgba(87, 167, 199, 0.363);
    border-radius: 20px;
    border-width: 2px; 
}
.createBarshadow{
   box-shadow: 10px 10px 5px #888888;
}
.back{
   background: rgba(255,255,255,.7);  
    border-style: solid;  
    border-width: 2px;  
}
</style>