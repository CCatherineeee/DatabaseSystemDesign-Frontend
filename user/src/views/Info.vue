<template>
<el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="个人昵称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>

  <el-form-item label="出生年月">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
  </el-form-item>
  
</el-form>
</template>
<script>
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
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>