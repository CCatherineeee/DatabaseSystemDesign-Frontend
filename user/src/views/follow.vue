<template>

<el-table
    v-loading="loading"
    :data="tableData"
    style="width: 100%">

    <el-table-column
      prop="userid"
      label="用户号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="昵称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="fans"
      label="粉丝"
      width="180">

    </el-table-column>
    <el-table-column>
      <template >
        <el-button type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>

</template>


<script>
//import axios from 'axios'
  export default {
    mounted:{
      GetData:function()
      {
        //axios.post('https://139.196.167.75:5001/api/TodoItems',{name:"hello"});
      }
    },
    methods:{
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
    },
    data() {

      return {
        tableData: []
      }
    }
    
    
  }
</script>