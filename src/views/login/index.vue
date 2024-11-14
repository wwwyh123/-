<template>
  <div class="Login-container">
    <el-row>
    <el-col :span="12" :xs="0"></el-col>
    <el-col :span="12" :xs="24">
      <el-form class="form" :rules="rules" :model="loginForm" ref="loginForms">
        <h1>Hello</h1>
        <h2>欢迎来到硅谷甄选</h2>
        <el-form-item prop="username">
          <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" :show-password=true  :prefix-icon="Unlock" v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="login_btn" type="primary" @click="login" :loading="IsSuccess">登录</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
  </div>
</template>

<script setup lang="ts">
import {User,Unlock} from '@element-plus/icons-vue'
import {reactive,ref} from 'vue'
import useUserStore from '../../store/modules/user'
import {useRouter,useRoute} from "vue-router"
import { ElNotification } from 'element-plus';
//获取路由器
let $router = useRouter()
let $route = useRoute()
let useStore = useUserStore()
let loginForm = reactive({username:'',password:''})
let IsSuccess = ref(false)
let loginForms=ref()
//登录按钮回调
const login = async ()=>{
  //开始加载
  //表单校验
  await loginForms.value.validate()
   IsSuccess.value=true
  //点击登录按钮后
  //通知仓库发登录请求
  //请求成功-》首页展示数据
  //请求失败-》弹出失败信息
  try{
    await useStore.userLogin(loginForm)
    //编程式导航 
    let redirect:any=$route.query.redirect
    $router.push({path:redirect||'/'})
    let message=getTime()
    ElNotification({
      type: 'success',
      message:`${message}好！`,
      title: '欢迎回来'
    })
    IsSuccess.value=false
  }catch(error){
    //登陆失败
    IsSuccess.value=false
    ElNotification({
      type: 'error',
      message: '登录失败',
    })
  }
}
//封装一个函数：获取一个结果，显示上午好
const getTime = () =>{
  let message = '';
  let hours = new Date().getHours();
  if(hours<=9){
    message='早上'
  }else if(hours<=12){
    message='上午'
  }else if(hours<=18){
    message='下午'
  }else {
    message='晚上'
  }
  return message
}
//表单校验规则
const rules = reactive({
  username: [
    { required: true, message: '请输入用户名', trigger: 'change' },
     { min: 3, max: 6, message: '用户名长度应为3~6个字符', trigger: 'change' },
  ],
  password:[
    {required: true,min: 6,message: '密码长度至少六位',trigger: 'change'}
  ]
})
//自定义表单校验

// const validatorUserName = (rule:any,value:any,callback: any)=>{
//   //rule:即为校验规则对象
//   //value:即为表单元素文本内容
//   //callback：函数如果符合条件callback放行通过
//   //如果不符合条件，callback方法注入错误提示信息
//   if(value.length>=5){//必须全是数字
//     callback()
//   }else {
//     callback(new Error('账号长度至少五位'))
//   }
// }
// const rules = reactive({
//   username: [
//     {validator:validatorUserName, trigger: 'change' },
//   ],
//   password:[
//     {required: true,min: 6,message: '密码长度至少六位',trigger: 'change'}
//   ]
// })

</script>

<style lang="scss">
.Login-container{
  width: 100%;
  height: 100vh;
  background: url(@/assets/images/background.jpg) no-repeat center/cover;
  .form{
  position: relative;
  width: 80%;
  top: 20vh;
  padding: 40px;
  background: url(@/assets/images/login_form.png) no-repeat center/cover;
  h1{
    color:white;
    font-size: 40px;
  }
  h2{
   color:white;
    font-size: 20px;
    margin: 20px 0;
  }
  .login_btn{
    width: 100%;
  }
  }
}

</style>