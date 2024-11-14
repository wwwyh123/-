<template>
  <div class="tabbar_left">
    <el-icon class="expand" @click="changeIcon">
      <component :is=" IsFold.IsFold ? 'Fold' :'Expand'"></component>
    </el-icon>
    <el-breadcrumb separator-icon="ArrowRight" class="change" > 

    <el-breadcrumb-item v-for="(item,index) in $route.matched" :key="index" v-show="item.meta.title" :to="item.path">
      <el-icon>
        <component :is="item.meta.icon"></component>
      </el-icon>
      {{ item.meta.title}}
    </el-breadcrumb-item>
  </el-breadcrumb>
</div>
</template>
<script setup lang="ts">
import useIsFoldStore from '../../../store/modules/IsFold'
import {useRoute} from 'vue-router'
let $route=useRoute()
let IsFold = useIsFoldStore()
const changeIcon = ()=>{
  IsFold.IsFold=!IsFold.IsFold
}
</script>
<script lang="ts">
export default {
  name: 'bread'
}
</script>
<style>

</style>