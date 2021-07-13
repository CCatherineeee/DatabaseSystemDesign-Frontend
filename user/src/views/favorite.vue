
<template>

<el-row>
  <el-col :span="4" v-for="(o, index) in 4" :key="o" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px' }">
      
      <div style="padding: 14px;">
        <span></span>
        <h4>帖子名</h4>
        <p>主楼内容</p>
        <div class="bottom clearfix">
          <el-button type="text" class="button">打开帖子</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>

</template>

<script>
export default {
    data()
  {
    return{
      UserID:'',
      FavoriteList:[],
    }
  },
  mounted()
  {
    this.setUserID();
    this.getFavorite(this.UserID);
  },
  methods:{
    test:function()
    {
      console.log("ok");
    }, 
    setUserID()
    {
      var storeID = localStorage.getItem("userID");
      this.UserID = storeID;
    },
    storeFavorite(respons)
    {
      this.FavoriteList = JSON.parse(respons);
      console.log(this.ActiveList);
    },
    async getFavorite(params)
    {
      var url='http://139.196.167.75:5000/api/GetStar'+'/'+params;
      await fetch(url, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          //body: JSON.stringify(UpdateData)
        })
        .then(respons => respons.json())
        .then(respons => this.storeActive(respons));
    },
    openPost(POSTID)
    {
      console.log(POSTID);
    }
  }
  
}
</script>