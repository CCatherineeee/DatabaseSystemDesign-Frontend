<template>
<div  style="margin:auto;height: 800px;text-align:center; background-image: url(https://static.zhihu.com/heifetz/assets/sign_bg.db29b0fb.png); background-repeat:repeat-y;">
    <div class="back" style="height:800px">


  <el-container style="padding:20px" >
 
      <el-container class="SearchShadow">
     <el-table
     :data="tableData" 
    stripe
    fit>
      <el-table-column
        prop="name"
        label="搜索用户结果">
      </el-table-column>
    </el-table>
    </el-container>

      <el-container >
       <el-table
     :data="tableData" 
    stripe
    fit>
      <el-table-column
        prop="name"
        label="搜索帖子结果">
      </el-table-column>
    </el-table>

      </el-container>
          <el-container >

             <el-table
     :data="tableData" 
    stripe
    fit>
      <el-table-column
        prop="name"
        label="搜索贴吧结果">
      </el-table-column>
    </el-table>
            </el-container>
  </el-container>



    </div>
</div>
</template>

<script>
  export default {
    data() {
     
      return {
        barData:[
          {
            postTitle:"hello",
            postTime:"123",
            postUser:"123",
            BarImgUrl:require('..\\assets\\1.jpg')
            

          },
                    {
            postTitle:"hello",
            postTime:"123",
            postUser:"123",
            BarImgUrl:require('..\\assets\\1.jpg')

          },
                    {
            postTitle:"hello",
            postTime:"123",
            postUser:"123",
            BarImgUrl:require('..\\assets\\1.jpg')

          },
                    {
            postTitle:"hello",
            postTime:"123",
            postUser:"123",
            BarImgUrl:require('..\\assets\\2.jpg')

          },
        ]
      }
    }
  };
</script>

<style>

.Searchshadow{
   box-shadow: 5px 5px 5px #888888;
}
.back{
   background: rgba(255,255,255,.7);  
        border-color: rgba(255,255,255,.8);  
        border-style: solid;  
        border-width: 2px;  
}
</style>