<template>
        <label class="upload-wrap">
            <i class="el-icon-plus"></i>
            <input type="file" style="display: none" @change="upload"> 
        </label>
</template>

<script>
import axios from 'axios'

export default {
    name:'upload-com',
    data(){
        return{
            token:'',
            imgUrl:''
        }
    },
    methods:{
        getToken(){
            axios.get('http://upload.yaojunrong.com/getToken').then(res=>{
                this.token = res.data.data
            })
        },
        upload(event){
            let file = event.target.files[0]
            let formData = new FormData()
            formData.append('file',file,file.name)
            formData.append('token',this.token)

               axios.post('https://upload-z1.qiniup.com',formData,{
                headers:{
                    'Content-Type':'multipart/form-data',
                    // 'Content-Type':'application/x-www-form-urlencoded',
                    // 'Content-Type':'application/json'
                }
            }).then(res=>{
                this.$emit('success', res.data.url)
            })
        }
    },
    created(){
        this.getToken()
    }
}
</script>

<style scoped lang="scss">
.upload-wrap{
    display: block;
    position: relative;
    width: 100px;
    height: 100px;
    border: 1px solid #e8e8e8;
    border-radius: 6px;
    cursor: pointer;
    .el-icon-plus{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%)
    }
}
</style>
