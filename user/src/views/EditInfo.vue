<template>

<el-row>

    <br>
    <el-row gutter= 6>
  <el-col :span= 10 offset = 2 ><div class="grid-content bg-purple-light">
      <el-form ref="form" :model="form" label-width="80px" >
    <el-form-item label="用户昵称">
        <el-input v-model="form.name"></el-input>
    </el-form-item>

  <el-form-item label="性别">
    <el-radio-group v-model="form.resource">
      <el-radio label="男"></el-radio>
      <el-radio label="女"></el-radio>
    </el-radio-group>
  </el-form-item>

  <el-form-item label="出生日期">
    <el-col :span= 11 >
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
  </el-form-item>

  <el-form-item label="我的邮箱">
    <el-input v-model="form.mail"></el-input>
  </el-form-item>

  <el-form-item label="我的电话">
    <el-input v-model="form.phone"></el-input>
  </el-form-item>

  <el-form-item label="简介">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="onSubmit">保存</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</div></el-col>
  <el-col :span= 8 >
      <img src="..\assets\1.jpg" height="180px" width="180px" style="border-radius:50%"/>
      <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
            multiple style="float:left;">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
 </el-col>
</el-row>
</el-row>

</template>



<script>
//import axios from 'axios'
//import func from 'vue-editor-bridge';
 export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit:function() {
        this.getInfo();
        //axios.post('https://139.196.167.75:5001/api/TodoItems',{Id:1,Name:"123",IsComplete: true});
        this.postData('https://175.27.240.116:5000/api/TodoItems');
        console.log('submit!');

      },
      getInfo:function()
      {
        console.log(this.form.name);
      },
      returnUser:function()
      {
          this.$router.replace({path: '/UserPage'});
      },
      postData:function(url)
      {
        const item = {
          Id:1,
          Name: "123",
          IsComplete: true};
        fetch(url, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
          });
          console.log("posted");
        }
        
      }
    
  }
</script>