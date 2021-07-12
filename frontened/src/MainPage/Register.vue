<template>
  <div class="app">
    <div id="nav" >
      <router-link to="/Login" style="font-size:25px;">登录账户</router-link> |
      <router-link to="/Register" style="font-size:25px;">注册账户</router-link>
    </div>
    <div class="register-sheet">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="auto" class="demo-ruleForm">
        <el-form-item label="设置ID" prop="userID" style="padding: auto;">
          <el-input type="text" placeholder="请设置账户ID, 一旦设置则不可修改！" v-model="ruleForm.userID" autocomplete="off" style="margin:0;"></el-input>
        </el-form-item>
        <el-form-item label="设置昵称" prop="userName" style="padding: auto;">
          <el-input type="text" placeholder="请设置账户昵称" v-model="ruleForm.userName" autocomplete="off" style="margin:0;"></el-input>
        </el-form-item>
        <el-form-item label="输入密码" prop="pass" style="padding: auto;">
          <el-input type="password" placeholder="请输入密码" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass" style="padding: auto;">
          <el-input type="password" placeholder="请再次输入密码" v-model="ruleForm.confirmPassword" autocomplete="off"></el-input>
        </el-form-item>
        <!--
        <el-form-item label="年龄" prop="age">
          <el-date-picker type="date" placeholder="请选择出生日期"></el-date-picker>
        </el-form-item>
        -->
        <div class="submitButton" style="margin-top:40px;">
          <el-button type="primary" @click="submitRegisterForm()">立即注册</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
    var validatePass = (rule, value, callback) => {
      if (this.ruleForm.password === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.password !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (this.ruleForm.password !== this.ruleForm.confirmPassword) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      ruleForm:{},
      rules: {
        
        pass: [
        { validator: validatePass, trigger: 'blur' }
        ],       
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {

    submitRegisterForm() {
      console.log(this.ruleForm.userID)
      if(this.ruleForm.password !== this.ruleForm.confirmPassword) {
        alert('两次输入密码不一致,请重新输入！');
        this.ruleForm.resetForm;
      }
      else if(this.ruleForm.userID==='' || this.ruleForm.userName==='') {
        alert('请输入ID和昵称');
      }
      else {
        const formData = {
          userID: this.ruleForm.userID,
          userName: this.ruleForm.userName,
          password: this.ruleForm.password
        };
         fetch('http://139.196.167.75:5000/api/TodoItems', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
          .then(
            res => {
              if(res.ok){console.log(res)}
              else
              {
                alert("注册失败");
              }
              }
            //this.$router.push({name:'Login'})
            )
            .catch(error => console.log('error is', error));//跳转到登录页面

      }
    },

    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
  }
</script>

<style>
  .el-form-item__label {
    color: black;
    font-weight: 500;
    font-size: 15px;
    padding: auto;
    margin: auto;
    width: auto;
    text-align: center;
  }

  .el-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    padding: auto;
    font-size: 17px;
    border-radius: 7px;
}

  .submitButton {
    margin: auto;
    text-align: center;
  }

  .demo-ruleForm {
    text-align: center;
    margin: 0 auto;
    padding-right: 20px;
    padding-left: 10px;
  }

  .register-sheet {
    text-align: center;
    background: #e5e9f2;
    /*position: absolute;*/
    left: 50%;
    top: 50%;
    border-radius: 5px;
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    background-color:rgba(217, 254, 255, 0.6);
    border-radius: 30px;
    width: 30%;
    height: 38%;
    margin: 0 auto;
    margin-top: 20px;
    padding: 6% 4%;
  }

  .el-form-item__content {
    padding: auto;
    margin: 0px;
    text-align: center;
  }
  .el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 330px;
}
  .app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    text-align: center;
    color: #2c3e50;
    width: 1440px;
    height: 850px;
    background-image: url(https://static.zhihu.com/heifetz/assets/sign_bg.db29b0fb.png);
    background-repeat: repeat-y;
  }
</style>
