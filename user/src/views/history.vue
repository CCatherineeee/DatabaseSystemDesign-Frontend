<template>

<el-scrollbar >
<el-row>
  <el-col :span="4"  v-for="(o, index) in 10" :key="o" :offset="index % 4 > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px' }">
      
      <div style="padding: 14px;">
        <span></span>
        <h4>帖子名</h4>
        <p>主楼内容</p>
        <div class="bottom clearfix">
          <el-button type="text" class="button">打开帖子</el-button>
        </div>
      </div>
    </el-card>
    <br>
  </el-col>
</el-row>
</el-scrollbar>

</template>