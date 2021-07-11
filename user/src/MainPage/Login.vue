<template>
  <div>
    <div id="nav" v-if="$route.meta.ifShow==true">
      <router-link to="/login" style="font-size:25px;">登录账户</router-link> |
      <router-link to="/register" style="font-size:25px;">注册账户</router-link>
    
    </div>
   
    <div class="login-sheet">

      <div>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="auto" class="demo-ruleForm">
          <el-form-item label="账户" prop="user" style="padding: auto;">
            <el-input type="text" placeholder="请输入账户ID" v-model="ruleForm.user" autocomplete="off" style="margin:0;"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass" style="padding: auto;">
            <el-input type="password" placeholder="请输入密码" v-model="ruleForm.password" autocomplete="off"></el-input>
          </el-form-item>
  <!--      <el-form-item label="年龄" prop="age">-->
  <!--        <el-input v-model.number="ruleForm.age"></el-input>-->
  <!--      </el-form-item>-->
          <div style="margin-top:40px;">
            <el-button type="primary" @click="submitLoginForm('ruleForm')">立即登录</el-button>
            <el-button>忘记密码</el-button>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import axios from 'axios'
  export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账户'));
      } else {
        if (this.ruleForm.password !== '') {
          this.$refs.ruleForm.validateField('password');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        user: '',
        password: '',
      },
      rules: {
        user: [
          { validator: validatePass, trigger: 'blur' }
        ],
        password: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        // age: [
        //   { validator: checkAge, trigger: 'blur' }
        // ]
      },
      isLogin:false
    };
  },
  methods: {
    submitLoginForm() {
      //this.$message.success("登录成功");
      //this.$router.push({path: "/"});
      //alert('登录成功')
      axios.get('/user.json')
      .then(res => {
        const data = res.data
        const users = []
        for(let key in data) {
          const getUser = data[key]
          users.push(getUser)
        }
        let result = users.filter((getUser) => {
          //console.log(getUser)
          return getUser.userID === this.ruleForm.user && getUser.password === this.ruleForm.password
        })
        console.log(result)
        if(result.length > 0) {
          this.$router.push({name:'BrowsePost'})
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
  }
</script>

<style>
  .el-form-item__label {
    /*background-color: red;*/
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
    font-weight: 550;
    padding: auto;
    font-size: 17px;
    border-radius: 7px;
  }


  element.style {
    margin: auto;
  }

  .demo-ruleForm {
    text-align: center;
    margin: 0 auto;
    padding-right: 20px;
    padding-left: 10px;
  }

  .login-sheet {
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
    height: 40%;
    margin: 0 auto;
    margin-top: 20px;
    padding: 6% 4%;
  }

  .el-form-item__content {
    padding: auto;
    margin: 0px;
    text-align: center;
  }

  #app {
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

  #nav {
    margin: 30px;
    padding: 20px;
  }

  #nav a {
    font-weight: bold;
    line-height: 35px;
    text-decoration: none;
    color: #2c3e50;
  }
  #nav a:hover{
    color: #318de2;
  }

  #nav a.router-link-exact-active {
    color: #2581d6;
    border-bottom:#2581d6 solid;
  }

  body {
    background-image: url(/assets/loginbg.png);
  }

</style>
