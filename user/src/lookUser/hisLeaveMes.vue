<template>
    <div style="margin:auto;height: 800px;text-align:center; background-image: url(https://static.zhihu.com/heifetz/assets/sign_bg.db29b0fb.png); background-repeat:repeat-y;">
    <div class="back" style="height: 800px">
  <el-container >
          <el-aside width="300px" style="padding:20px;"></el-aside>
          <el-main class="LeaveMesBack">
              <div class="table-wrapper">
                <template>
<el-table
    :data="LeaveMesList.slice((currentPage-1)*pagesize,currentPage*pagesize)" 
    style="width: 100%" v-loading = "loading">

     <el-table-column
        prop="ADDTIME"
        width="100px">
      </el-table-column>

     <el-table-column
       prop="ANNOUNCEMENTTITLE"
       label="重要通知"
       alian="center"
       width="100px">
      </el-table-column>

      <el-table-column >
        
            <template slot-scope="scope">
              <message :text="scope.row.ANNOUNCEMENTCONTENT"/>
            </template>
        
      </el-table-column>
            <el-table-column prop="ANNOUCEMENTID">
                      <template slot-scope="scope">
                          <el-popconfirm
                                title="确定公告删除吗？" @confirm="deleteAnn(scope)">
                                <el-button slot="reference" >删除</el-button>
                                </el-popconfirm>
            </template>
        
      </el-table-column>
              
  </el-table>
  </template>
    </div>
  <el-pagination
  background
  layout="total, prev, pager, next, jumper"
  @size-change="handleSizeChange"
  @current-change="handleCurrentChange"
  :current-page="currentPage"
  
  :page-size="pagesize"
  :total="AdList.length"
>
</el-pagination>

</el-main>
<el-aside width="300px" style="padding:20px;"></el-aside>
  </el-container>
  </div>
</div>
</template>

<script>
import Message from "../components/message.vue";
  export default {
    data() {
       
      return {
        
        IsVisible:false,
        currentPage:1,
        pagesize:5,
        LeaveMesList:[],
        loading:true,
        hisUserID:""
      }
    },
    components:{
      Message
    },
    mounted(){
        this.getLeaveMes('http://139.196.167.75:5000/api/Announcement');
        this.getUserIndetity();
    },
     methods: {
        handleSizeChange: function(val) {
            this.pagesize = val;
        },
        handleCurrentChange: function(currentPage) {
            this.currentPage = currentPage;
        },
        store:function(item){
        
        this.AdList=JSON.parse(item);
        for(var i=0;i<this.AdList.length;i++)
        {
            this.AdList[i].ADDTIME=this.AdList[i].ADDTIME.substring(0,10);
        }
        console.log(this.AdList);
        },
        //fetch
        async getLeaveMes(urlip){
          await fetch(urlip, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
          })
          .then(response => response.json())
          .then(data => this.store(data));
          this.loading=false;
          console.log("Geted");
        },
        getParams()
      {
        this.hisUserID=this.$route.params.hisUserID;
      }
    }
  } 
</script>

<style>
.table{
  margin: auto;
}
.LeaveMesBack
{
    background-color: white;
    border-radius: 20px;
     box-shadow: 10px 10px 5px #888888;
}
</style>