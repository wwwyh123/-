<template>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component"  v-if="flag"></component>
      </transition>
    </router-view> 
</template>
<script setup lang="ts">
import useIsFoldStore from '../../store/modules/IsFold'
import {nextTick, watch,ref} from 'vue'
//获取用户信息
import { onMounted } from 'vue';
import useUserStore from '../../store/modules/user'
let userStore = useUserStore()
let Setting = useIsFoldStore()
//监听组件是否被销毁
let flag=ref(true)
//监视仓库内部的数据变化,点击刷新，则组件改变值
watch(()=>Setting.refresh,()=>{
  flag.value=false
  nextTick(()=>{
    flag.value=true
  })
})
//页面挂载完毕后向服务器发送请求
onMounted(()=>{
userStore.GetUserInfo()
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>