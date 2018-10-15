import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const components = {
  login:()=>import('@/views/login/login'),
  layout:()=>import('@/views/layout/layout'),
  index:()=>import('@/views/index/index'),
  users:()=>import('@/views/users/index'),
  upload:()=>import('@/views/testUploadDemo/index'),
  userEdit:()=>import('@/views/userEdit/userEdit'),
  addUser:()=>import('@/views/addUser/index'),
  swiper:()=>import('@/views/swiper/index'),
  addSwiperDemo: ()=>import('@/views/swiper/addSwiperDemo'),
  addBook: ()=>import('@/views/book/addBook'),
  book:()=>import('@/views/book/book'),
  editBook:()=>import('@/views/book/editBook')
}

export default new Router({
  routes: [
    {
      path: '/',
     redirect:'/login',
     
    },
    {
      path:'/login',
      component: components.login

    },
    {
      path: '/layout',
      component: components.layout,
      redirect:'layout/index',
      meta:{
        title:'首页'
      },
      children:[
        {
          path: 'index',
          component: components.index
        },
        {
          path: 'users',
          meta:{
            title:'用户管理'
          },
          component: components.users
        },
        {
          path: 'upload',
          meta:{
            title:'提交表单'
          },
          component: components.upload
        },
        {
          path:'userEdit',
          meta:{
            title:'修改个人信息'
          },
          component: components.userEdit
        },
        {
          path:'addUser',
          meta:{
            title:'添加管理员'
          },
          component: components.addUser
        },
        {
          path:'swiper',
          name:'swiper',
          meta:{
            title:'轮播图管理',
          },
          component: components.swiper
        },
        {
          path:'addSwiperDemo',
          name:'addSwiperDemo',
          meta:{
            title:'添加轮播图',
          },
          component: components.addSwiperDemo
        },
        {
          path:'editSwiperDemo',
          name:'editSwiperDemo',
          meta:{
            title:'编辑轮播图',
          },
          component: components.addSwiperDemo
        },
        {
          path:'addBook',
          name:'addBook',
          meta:{
            title:'添加图书',
          },
          component: components.addBook
        },
        {
          path:'book',
          name:'book',
          meta:{
            title:'图书',
          },
          component: components.book
        },
        {
          path:'editBook',
          name:'editBook',
          meta:{
            title:'修改图书',
          },
          component: components.editBook
        },
       
      ]
    }
  ]
})
