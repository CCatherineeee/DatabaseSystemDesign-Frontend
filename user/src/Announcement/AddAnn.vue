<template>
    <div style="margin:auto;height:800px;text-align:center; background-image:url(https://static.zhihu.com/heifetz/assets/sign_bg.db29b0fb.png); background-repeat:repeat;">
        <div class="back" style="height:800px">
        <el-container style="height:400px;padding:30px">
            <el-aside> </el-aside>
            <el-main class="AddBack Adshadow" style="padding:20px">
             
            <b style>发布公告</b>
            <el-row>
                <br>
                <el-input type="text" placeholder="请填写标题" v-model= "AdTitle"></el-input>
            </el-row>
            <br>
           
            <el-row>
                <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model= "AdContent"></el-input>
            </el-row>
            <el-row>
              <br>
                <el-button type="primary" class="shadow" style="float:left;background:white;color:#318de2" @click = "onSubmit()">发布公告</el-button>
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
        AdTitle:'',
        AdContent:'',
      }
  },

  methods:{

    async onSubmit()
    {
        const data=
        {
            ANNOUNCEMENTTITLE:this.AdTitle,
            ANNOUNCEMENTCONTENT:this.AdContent,
        };
        console.log(data);
        console.log(JSON.stringify(data));
      await fetch('http://139.196.167.75:5000/api/Announcement', {
            method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .catch(error => {console.log(error)});
          this.$router.replace({path:'/Ann'});
            //location.reload();
          this.$message("发布成功");
        }
    }

  }

</script>

<style>
.AddBack{
   background: rgba(87, 167, 199, 0.363);
    border-radius: 20px;
    border-width: 2px; 
}
.Adshadow{
   box-shadow: 10px 10px 5px #888888;
}
.back{
   background: rgba(255,255,255,.7);  
    border-style: solid;  
    border-width: 2px;  
}
</style>