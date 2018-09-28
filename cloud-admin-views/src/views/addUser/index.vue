<template>
    <div class="add-user">
         <h2>添加管理员</h2>
        <div class="form-wrap">
        <el-form :model="formData" size="small" label-width="80px" label-position="left">
            <el-form-item label="用户名">
                <el-input v-model="formData.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="formData.password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码">
                <el-input v-model="formData.checkPassword"></el-input>
            </el-form-item>
            <el-form-item label="昵称">
                <el-input v-model="formData.nickname" ></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
                <el-input v-model="formData.email" ></el-input>
            </el-form-item>
            <el-form-item label="用户头像">
                <upload-img v-model="formData.avatar" style="float: left;"></upload-img>
            </el-form-item>
            <el-form-item label="个性签名">
                <el-input  type="textarea" v-model="formData.desc" ></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" size="small" @click="submitData">
                    确认添加
                </el-button>
            </el-form-item>
        </el-form>  
        </div>
    </div>
</template>

<script>
import uploadImg from '@/components/upload-com' 

export default {
  name: "index",
    components:{
      uploadImg
  },
  data() {
    return {
      formData: {
        username: "",
        password:'',
        nickname: "",
        email: "",
        desc: "",
        avatar: "",
        checkPassword:'',
      }
    };
  },
  methods:{
      submitData() {
          if(this.formData.password != this.formData.checkPassword){
              this.$message.error('两次输入的密码不一致')
          }else{
               this.$axios.post('/user',this.formData).then(res=>{
                   if (res.code == 200){
                       this.$message.success(res.msg)
                   }
               })
          }
         
      }
  }
};
</script>

<style scoped>
.form-wrap{
    width: 600px;
    margin-top: 20px;
}
</style>
