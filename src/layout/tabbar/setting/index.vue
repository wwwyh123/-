<template>
  <div class="tabbar_right">
    <el-button type="primary" size="small" icon="Refresh" circle @click="changeRefresh"></el-button>
    <el-button type="primary" size="small" icon="FullScreen" circle  @click="IsFullScreen"></el-button>
    <el-button type="primary" size="small" icon="Setting" circle></el-button>
    <img :src="UserStore.avatar" alt="" style="width:28px;height:28px;border-radius:50%" >
    <!-- //下拉菜单 -->
    <el-dropdown class="dropdown">
    <span class="el-dropdown-link">
     {{ UserStore.username }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import useIsFoldStore from '../../../store/modules/IsFold'
import useUserStore from '../../../store/modules/user'
import {useRouter,useRoute} from 'vue-router'
let $router=useRouter()
let $route=useRoute()
//展示用户信息
let UserStore = useUserStore()
//刷新
let Setting = useIsFoldStore()
const changeRefresh=()=>{
  Setting.refresh=!Setting.refresh
}
//全屏
const IsFullScreen=()=>{
  let full = document.fullscreenElement
  //如果不是全屏
  if(full){
    document.exitFullscreen()
  }
  else {
    document.documentElement.requestFullscreen()
  }
}
//logout退出登录
const logout = async() =>{
  //1.向服务器发请求【退出登录接口
  //2.仓库中关于本次登录相关的数据清空
  //3.跳转到登录页面
  await UserStore.logout()
  $router.push({path:'/login',query:{redirect:$route.path}})
}
</script>
<script lang="ts">
export default {
  name: 'setting'
}
</script>
<style>

</style>