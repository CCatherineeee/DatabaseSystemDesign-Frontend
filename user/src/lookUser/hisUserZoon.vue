<template>

<div>
   
<div v-if= "isShow()">
<el-container  style="height: 500px; border: 1px solid #eee">
<el-aside width="300px" class="asid">
  <br>
    <img src="..\assets\1.jpg" height="180px" width="180px" style="border-radius:50%"/>
    <p><b> {{UserInfo.NICKNAME}} </b></p>
    <p>个人简介： {{UserInfo.RELATIONSHIPTYPE}} </p>
      <el-menu   :default-active="$path='/UserPage'" :collapse-transition="true">
      <el-menu-item @click="gotoLeaveMess()">他的留言板</el-menu-item>
      <el-menu-item>他的个人资料</el-menu-item>
      </el-menu>
    <el-button @click="followUser()">关注</el-button>
    <el-button @click="unseeUser()">拉黑</el-button>
    <el-button @click="dialogFormVisible = true">添加留言</el-button>

        <el-dialog title="添加留言" :visible.sync="dialogFormVisible">
                <el-input v-model="mesContent" type="textarea" :rows="3"></el-input>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="leaveMess()">确 定</el-button>
          </div>
        </el-dialog>
</el-aside>
<el-main >
<el-row>

    <br>
    <el-row :gutter="6">
  <el-col :span="15" :offset="2"><div >
      <el-card :body-style="{ padding: '0px' }">
      <div style="padding: 14px;">
        <h4>个人资料</h4>
        <span></span>
        <el-row>
        <el-col :span="4">
          <div style="float:right">
        <h4>ID：</h4>
        <h4>昵称：</h4>
        <h4>性别：</h4>
        <h4>居住地：</h4>
        <h4>电话：</h4>
          </div>
        </el-col>
        <el-col :span="11">
        <h4>{{lookUserId}}</h4>
        <h4>{{UserInfo.NICKNAME}}</h4>
        <h4>{{UserInfo.GENDER}}</h4>
        <h4>{{UserInfo.LOCATION}}</h4>
        <h4>{{UserInfo.TELEPHONE}}</h4>
        </el-col>
        </el-row>
      </div>
    </el-card>
</div></el-col>
  
</el-row>
</el-row>
      
</el-main>
</el-container>
  </div>
  <div v-else>
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside>
      </el-aside>
    <el-card :body-style="{ padding: '0px' } " style="height: 500px;width:500px" >
      <br><br><br><br>
      <p>您已被拉黑</p>
    </el-card>
    </el-container>
  </div>
</div>

</template>

<script>
// @ is an alias to /src
export default {
  mounted(){
   this.setUserName();
   this.setLookUserName();
   this.getHisInfo();
  },
  data()
  {
    return{
      lookUserId:'',
      UserID:'',
      UserInfo:[],
      dialogFormVisible:false,
      mesContent:"",
      }
  },
    methods: {
    EditInfo:function()
    {
      this.$router.replace({path: '/EditInfo'})
    },
    setLookUserName()
    {
      this.lookUserId = this.$route.params.lookUserId;
      console.log(this.lookUserId);
    },
    setUserName()
    {
      this.UserID=localStorage.getItem("userID");
      console.log(this.UserID);
    },
    storeHisInfo(res)
    {
      console.log(JSON.parse(res)[0]);
      this.UserInfo=JSON.parse(res)[0];
    },
    async getHisInfo()
    {
      const data={
        PID:this.lookUserId,
        AID:this.UserID
      }
       var url='http://139.196.167.75:5000/api/UserRelation';
       await fetch(url, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(res => res.json())
          .then(res => this.storeHisInfo(res))
          .catch(error => console.log('error is', error));
          console.log("ok");
    },
    isShow:function()
    {
      if(this.UserInfo.RELATIONSHIPTYPE != 0 )
        return false;
      else
        return true;

    },
    //fetch
    async followUser()
    {
      const data={
        PID:this.lookUserId,
        AID:this.UserID
      }
       var url='http://139.196.167.75:5000/api/UserRelation';
       await fetch(url, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(res => res.json())
          .then(res => this.storeHisInfo(res))
          .catch(error => console.log('error is', error));
    },
    //fetch
    async leaveMess()
    {
      this.dialogFormVisible = false;
    },
    gotoLeaveMess()
    {
      this.$router.replace({path:'/hisLeaveMess',name:'hisLeaveMess',params:{hisUserID:this.lookUserId}})
    }
    },
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

