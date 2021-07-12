<template>

<el-row>
<el-table
      :data="respos"
      style="width: 100%">
      <el-table-column
        prop="USERID"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="USERNAME"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="PASSWORD"
        label="地址">
      </el-table-column>
    </el-table>
    <el-button @click="onSubmit()">123</el-button>
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
        },
        respos:[],
      }
    },
    methods: {
      onSubmit:function() {
        //this.getInfo();
        //axios.post('https://139.196.167.75:5001/api/TodoItems',{Id:1,Name:"123",IsComplete: true});
        this.postData('http://139.196.167.75:5000/api/TodoItems');
        console.log('submit!');

      },
      store:function(item)
      {
        this.respos=JSON.parse(item);
      },
      returnUser:function()
      {
          this.$router.replace({path: '/UserPage'});
      },
      async postData(url)
      {
       await fetch(url, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
          })
          .then(response => response.json())
          .then(data => this.store(data));
          console.log("Geted");
          console.log(this.respos);
        }
        
      }
    
  }
</script>