<template>

<el-row>

    <br>
    <el-row :gutter="6">
  <el-col :span="10" :offset="2"><div class="grid-content bg-purple-light">
      <el-form ref="form" :model="UserInfo" label-width="80px"  v-loading="loading">
    <el-form-item label="用户昵称" prop="NICKNAME"> 
        <el-input v-model= "UserInfo.NICKNAME" ></el-input>
    </el-form-item>

    <el-form-item label="性别" prop="GENDER">
      <el-select v-model = "UserInfo.GENDER" style="float:left;">
         <el-option label="男" :value= 1 ></el-option>
         <el-option label="女" :value= 0 ></el-option>
      </el-select>
    </el-form-item>

  

    <el-form-item label="居住地" prop="LOCATION">
     <el-input v-model = "UserInfo.LOCATION"></el-input>
    </el-form-item>

  <el-form-item label = "我的电话" prop="TELEPHONE">
    <el-input v-model = "UserInfo.TELEPHONE"></el-input>
  </el-form-item>

  <el-form-item label="简介" prop="SIGNATURE">
    <el-input type="textarea" v-model = "UserInfo.SIGNATURE"></el-input>
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="onSubmit(UserID)">保存</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</div></el-col>
  
</el-row>
</el-row>

</template>



<script>
//import axios from 'axios'
//import func from 'vue-editor-bridge';
 export default {
   mounted(){
     this.setUserID();
     this.getInfo(this.UserID);
     
   },
    data() {
      return {
        UserID:"",
        UserInfo:{},
        loading:true
      }
    },
    methods: {
      checkPhone()
      {
        if(this.UserInfo.TELEPHONE.length != 11)
        {
          this.$message("请输入正确手机号！");
          return false;
        }
        return true;
      },
      async onSubmit(params) {
        if(!this.checkPhone())
          return;
        const UpdateData =
        {
          USERID : this.UserInfo.USERID,
          NICKNAME : this.UserInfo.NICKNAME,
          PASSWORD : this.UserInfo.PASSWORD,
          GENDER : this.UserInfo.GENDER,
          LOCATION : this.UserInfo.LOCATION,
          SIGNATURE : this.UserInfo.SIGNATURE,
          TELEPHONE : this.UserInfo.TELEPHONE,
          IDENTITY:1
        };
        console.log(UpdateData);
        var url='http://139.196.167.75:5000/api/PersonalInformation' + '/' + params;
        
        await fetch(url, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(UpdateData)
        });
        console.log('submit!');

      },
      setUserID()
    {
      var storeID = localStorage.getItem("userID");
      this.UserID = storeID;
    },
    store(res)
    {
      
      console.log(res);
      this.UserInfo=JSON.parse(res)[0];
      
      console.log(JSON.parse(res));
    },
    async getInfo(params) {
      var url='http://139.196.167.75:5000/api/SignIn'+'/'+params;
      console.log(url);
      await fetch(url, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          //body: JSON.stringify(formData)
        })
          .then(res => res.json())
          .then(res => this.store(res))
          .catch(error => console.log('error is', error));
          this.loading=false;
          }
    },
      returnUser:function()
      { 
          this.$router.replace({path: '/UserPage'})
      }
    }
  
</script>