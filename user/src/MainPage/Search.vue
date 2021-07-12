<template>
  <div class="search-container" style="margin:auto;height: 3000px;text-align:center; background-image: url(https://static.zhihu.com/heifetz/assets/sign_bg.db29b0fb.png); background-repeat:repeat-y;">
		
    <div id="search-nav" style="width:100%;text-align:center;">
      <div class="switchSearch">
				<router-link to="/login" style="font-size:20px;">综合搜索</router-link> 
			</div>
			<div class="switchSearch">
				<router-link to="/login" style="font-size:20px;">搜索贴吧</router-link> 
			</div>
			|
			<div class="switchSearch">
				<router-link to="/register" style="font-size:20px;">搜索贴子</router-link>
			</div>
			|
			<div class="switchSearch">
				<router-link to="/register" style="font-size:20px;">搜索用户</router-link>
			</div>
    </div>

  <div style="margin:1% auto; text-align:center; background-color: transparent; height:98.5%; width:90%;">
    <el-container style="height:90%">
      <el-main class="search-main" style="margin-right:20px;background-color:rgba(255, 255, 255, 0.6);">
        <br>
        <br>
        <br>
        
        搜索结果在这里
      </el-main>

      <el-aside class="search-side" style="height:900px;background-color:rgba(255, 255, 255, 0.6);width=10%;margin:0 2%;margin-left:0;">
        <br>
        <br>
        <br>
        搜索发现
      </el-aside>
    </el-container>
  </div>

  </div>
</template>

<script>
// import axios from 'axios'
//import axios from 'axios'
  export default {
    name: "login",
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
      },
      isLogin:false
    };
  },
  methods: {
    
  }
  }
</script>

<style>
  .switchSearch {
    background-color:transparent;
    margin: 0;
    padding: 0px;
    width:20%;
    height:33px;
    display:inline-block;
  }
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

  #search-nav {
    margin: 10px;
    padding: 10px;
    font-size: 20px;
  }

  #search-nav a {
    font-weight: bold;
    line-height: 35px;
    text-decoration: none;
    color: #2c3e50;
  }
  #search-nav a:hover{
    color: #318de2;
  }

  #search-nav a.router-link-exact-active {
    color: #2581d6;
    border-bottom:#2581d6 solid;
  }

  body {
    background-image: url(/assets/loginbg.png);
  }

</style>
