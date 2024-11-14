<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout_slider">
       <!-- :class="{fold:IsFold.IsFold?true:false}" -->
      <Logo></Logo>
       <el-scrollbar class="scrollbar">
        <!-- 菜单组件 -->
        <el-menu background-color="#001529" text-color="white" :collapse="IsFold.IsFold">
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>  
    </div>
    <!-- 顶部导航 -->
     <div class="layout_tabbar" :class="{fold:IsFold.IsFold?true:false}">
      <Tabbar></Tabbar>
     </div>
     <!-- 内容展示区 -->
    <div class="layout_main" :class="{fold:IsFold.IsFold?true:false}">
      <Main></Main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Tabbar from './tabbar/index.vue'
import Main from './main/index.vue'
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import useUserStore from '../store/modules/user';
let userStore = useUserStore()
import useIsFoldStore from '../store/modules/IsFold';
let IsFold = useIsFoldStore()
</script>

<style lang="scss">
$base-menu-min-width: 50px;
$base-menu-width: 260px;
//菜单栏颜色
$base-menu-color: #001529;
$base-tabbar-height: 50px;
.layout_container{
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  .layout_slider{
    width: $base-menu-width;
    height: 100vh;
    background: $base-menu-color;
    transition: all .3s;
    
    .scrollbar{
      height: calc(100vh - 50px);
      .el-menu{
        border-right:none;
      }
      .scrollbar-demo-item {
        height: 50px;
        margin: 10px;
        text-align: center;
        border-radius: 4px;
        color: white;
      }
  }
  }
  .layout_tabbar{
    position: fixed;
    top: 0;
    left: $base-menu-width;
    width: calc(100vw - $base-menu-width);
    height: $base-tabbar-height;
     transition: all .3s;
    &.fold{
      left: $base-menu-min-width;
    }
  }
  .layout_main{
    position: absolute;
    top: $base-tabbar-height;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    background-color: skyblue;
    padding:20px;
    overflow: auto;
    transition: all .3s;
    &.fold{
      width: calc(100% - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
}

</style>