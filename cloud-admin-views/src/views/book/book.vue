<template>
  <div>
    <el-table :data="tableData">
      <el-table-column prop="title"
                       label="书名"
      >
      </el-table-column>
      <el-table-column prop="img"
                       label="书籍头图"
      >
        <template slot-scope="data">
          <img :src="data.row.img" style="width: 50px;height: 50px">
        </template>
      </el-table-column>
      <el-table-column label="书籍排序" prop="index">
      </el-table-column>
      <el-table-column prop="author" label="作者">

      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handleEdit(scope.row._id)" >
            编辑
          </el-button>
          <el-button @click="deleteBook(scope.row._id)" type="danger" size="mini">
            删除图书
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination 
    background layout="prev,pager,next" 
    @current-change="pnChange" 
    :page-size=5
    :total="102">
    </el-pagination>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        tableData: [],
        count:0,
        page:1
      }
    },
    methods: {
      // async getData() {
      //   const res = await this.$axios.get('/book')
      //   this.tableData = res.data   
      //   console.log(res);
        
      // },
      getData(){
        this.$axios.get('/book',{pn:this.page,size:5}).then(res=>{
          this.tableData = res.data
        })
      },
      handleEdit(id) {
        this.$router.push({name: 'editBook', query: {id}})
      },
      pnChange(page) {
    this.page = page
        this.getData()
      },
        deleteBook(x){
      this.$confirm('此操作将永久删除该图书, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            this.$axios.delete(`/book/${x}`).then(res=>{
            
                if(res.code == 200){
                    this.$message.success('删除成功')
                    this.getData()
                }
            })
            
        }).catch(() => {
       
          this.$message({
           
            type: 'info',
            message: '已取消删除'
          });          
        });
  },
    },
    created() {
      this.getData()
    }
  }
</script>

<style scoped>
</style>