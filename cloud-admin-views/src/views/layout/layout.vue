<template>
    <div class="layout">
        <div class="header ml-200">
            <h1 class="title">
                云书后台操作系统
            </h1>
        </div>
        <div class="side-bar">
<el-menu :router="true"  background-color="#545c64" text-color="#fff">
      <el-menu-item index="/login">登录页</el-menu-item>
       <el-menu-item index="/layout/index">首页</el-menu-item>
      <el-submenu index="1">
        <template slot="title">
         用户
        </template>
        <el-menu-item-group>
          <el-menu-item index="/layout/userEdit">修改个人信息</el-menu-item>
          <el-menu-item index="/layout/addUser">添加管理员</el-menu-item>
          <el-menu-item index="/layout/users">用户管理页</el-menu-item>
        </el-menu-item-group>
        
       
      </el-submenu>

        <el-submenu index="2">
             <template slot="title">
         轮播图
        </template>
         <el-menu-item-group>
        <el-menu-item index="/layout/swiper">轮播图管理</el-menu-item>
        <el-menu-item index="/layout/addSwiperDemo">添加轮播图</el-menu-item>
         </el-menu-item-group>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          图书
        </template>
        <el-menu-item-group>
          <el-menu-item index="/layout/addBook">添加图书</el-menu-item>
        <el-menu-item index="/layout/book"> 图书管理</el-menu-item>
         </el-menu-item-group>
      </el-submenu>
        
</el-menu>
        </div>
        <div class="main-content ml-200">
            <router-view></router-view>
        </div>
    </div>
    
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.layout {
  .title {
    text-align: center;
    font-weight: 400;
    line-height: 60px;
    height: 60px;
    border-bottom: 1px solid #f1f1f1;
    font-size: 20px;
  }
  .ml-200 {
    margin-left: 200px;
  }
  .side-bar {
    position: fixed;
    width: 200px;
    top: 0;
    bottom: 0;
    left: 0;
    border-right: 1px solid #f1f1f1;
    overflow: hidden;
    padding-top: 80px;
    background: #545c64;

    /deep/ {
      .el-menu {
        border-right: none;
      }
    }
  }
  .main-content {
    padding: 15px;
  }
}
</style>
