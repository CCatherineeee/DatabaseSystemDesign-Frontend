<template>

<el-row>
  <el-col :span="4" v-for="(item, index) in ActiveList" :key="index" :offset="index % 4 > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px' }">
      
      <div style="padding: 14px;">
        <span></span>
        <h4>{{item.POSTTITLE}}</h4>
        <p>{{item.CONTENT}}</p>
        <div class="bottom clearfix">
          <el-button type="text" class="button" @click="openPost(item.POSTID)">打开帖子</el-button>
          <el-popconfirm title="这是一段内容确定删除吗？">
          <el-button type="text" slot="reference">删除</el-button>
        </el-popconfirm>

  
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>

</template>

<script>
//import func from 'vue-editor-bridge'
export default {
  data()
  {
    return{
      UserID:'',
      ActiveList:[],
    }
  },
  mounted()
  {
    this.setUserID();
    this.getActive(this.UserID);
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
    storeActive(respons)
    {
      this.ActiveList = JSON.parse(respons);
      console.log(this.ActiveList);
    },
    async getActive(params)
    {
      var url='http://139.196.167.75:5000/api/GetTieziB'+'/'+params;
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