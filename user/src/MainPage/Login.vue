<template>
  <div class="app">
    <div id="nav" >
      <router-link to="/Login" style="font-size:25px;">登录账户</router-link> |
      <router-link to="/Register" style="font-size:25px;">注册账户</router-link>
    </div>
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
          <div style="margin-top:40px;">
            <el-button type="primary" @click="submitLoginForm('ruleForm')">立即登录</el-button>
            <el-button>忘记密码</el-button>
          </div>
        </el-form>
        {{mess}}
      </div>
    </div>
  </div>
</template>

<script>
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
      ruleForm: {},
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
      isLogin:false,
      number:0,
      mess:0
    };
  },
  methods: {
    store(res)
    {
      var get=[]
      get=JSON.parse(res);
      console.log(JSON.parse(res));
      this.mess=get[0].NUM;
    },
    test(item)
    {
      console.log(item)
    },
    async submitLoginForm() {
      const formData = {
          userID: this.ruleForm.user,
          Password: this.ruleForm.password,
        };
        await fetch('http://139.196.167.75:5000/api/TodoItems', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
          .then(res => res.json())
          .then(res => this.store(res))
          .catch(error => console.log('error is', error));
          if(this.mess > 0)
                {
                  this.$message("登录成功")
                  }
                else
                {
                  alert("登录失败");}
              }
            //this.$router.push({name:'Login'})
            
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
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
    height: 200px;
    margin: 0 auto;
    margin-top: 20px;
    padding: 6% 4%;
  }

  .el-form-item__content {
    padding: auto;
    margin: 0px;
    text-align: center;
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
