
<template >
<el-table
    :data="tableData"
    height
    border
    style="width:100%;" class="commit-table">

    <el-table-column
      prop="date"
      label="时间"
      width="180px">
    </el-table-column>
    <el-table-column
      prop="name"
      label="昵称"
      width="180px">
    </el-table-column>
    <el-table-column
      prop="address"
      label="内容"
      width="400px">
    </el-table-column>
    <el-table-column
      label="操作">
      <template #default="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03-13:00',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    }
  }
</script>

<style>
.commit-table{
  background-color:  rgba(69, 169, 250, .2);
  background: rgba(255,255,255,.2);  
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

}
</style>