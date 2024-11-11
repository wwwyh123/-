<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout_slider">
      <Logo></Logo>
       <el-scrollbar class="scrollbar">
  <!-- 菜单组件 -->
        <el-menu background-color="#001529" text-color="white">
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>  
    </div> 
    <!-- 顶部导航 -->
     <div class="layout_tabbar"></div>
     <!-- 内容展示区 -->
    <div class="layout_main">
      <p style="height:10000000px">1111</p>123
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import useUserStore from '../store/modules/user';
let userStore = useUserStore()
</script>

<style lang="scss">
$base-menu-width: 260px;
//菜单栏颜色
$base-menu-color: #001529;
$base-tabbar-height: 100px;
.layout_container{
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  .layout_slider{
    width: $base-menu-width;
    height: 100vh;
    background: $base-menu-color;
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
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    background-color: pink;
  }
  .layout_main{
    position: absolute;
    top: $base-tabbar-height;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    background-color: green;
    padding:20px;
    overflow: auto;
  }
}

</style>