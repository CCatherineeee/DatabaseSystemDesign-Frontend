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
      label="粉丝">
    </el-table-column>
  </el-table>

</template>


<script>
  export default {
    data() {
      return {
        tableData: [{
          
          userid: '2016-05-02',
          name: '王小虎',
          fans: '0'
        }, {
         
          userid: '2016-05-04',
          name: '王小虎',
          fans: '0'
        }, {
           
          userid: '2016-05-01',
          name: '王小虎',
          fans: '0'
        }, {
         
          userid: '2016-05-03',
          name: '王小虎',
          fans: '0'
        }]
      }
    }
  }
</script>