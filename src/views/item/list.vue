
  <template>
    <el-table
      :data="tableData"
      style="width: 80%;flex: none;">
      <el-table-column
        prop="_id"
        label="id值">
      </el-table-column>
      <el-table-column
        prop="name"
        label="物品名">
      </el-table-column>
      <el-table-column
        prop="icon"
        label="图标">
        <template slot-scope="scope">
	           <img :src='scope.row.icon'>
	      </template>
      </el-table-column>
      <el-table-column
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="$router.push({path:`/items/edit/${scope.row._id}`})" type="text" size="small">编辑</el-button>
        <el-button @click="deleteCategory(scope.row._id)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
  </template>

<script>
  export default {
    methods: {
      handleClick(row) {
        console.log(row);
      },
      async getData(){
      	let res=await this.$http.get("/rest/items",{page:1,size:20})
      	this.tableData=res.data
      },
      deleteCategory(id){
	      	this.$confirm('是否删除该分类, 是否继续?', '提示', {
	          confirmButtonText: '确定',
	          cancelButtonText: '取消',
	          type: 'warning',
	          center: true
	        }).then(async () => {
		        let res=await this.$http.delete(`/rest/items/${id}`)
		      	this.getData()
		        this.$message({
		            type: 'success',
		            message: '删除成功!'
		        });
	        }).catch(() => {
	        	
	        })
      }
    },
    created(){
    	this.getData()
    },
    data() {
      return {
        tableData: []
      }
    }
  }
</script>