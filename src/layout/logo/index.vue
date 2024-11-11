<template>
  <div class="container">
    <img src="../../assets/images/logo.png" alt="">
    <span>硅谷甄选运营平台</span>
  </div>
</template>
<script setup lang="ts">

</script>
<style lang="scss" scoped>
.container{
  display: flex;
  width: 100%;
  height: 50px;  
  align-items: center;
  // background-color: e:\fighting\甄选\vue3_admin_template\vue3_admin_template\public\logo.pngpurple;
  img{
    flex: 1;
    width: 40px;
    height: 40px;
    // border: 1px solid black;
    margin:0 10px;
  }
  span{
    flex: 4;
    font-size: 20px;
    color: white;
  }
}
</style>