<template>
    <div class="container">
    <img src="../../assets/images/logo.png" alt="">
    <span >硅谷甄选运营平台</span>
  </div>
</template>
<script setup lang="ts">
// import useIsFoldStore from '../../store/modules/IsFold';
// let IsFold=useIsFoldStore()
</script>
<style lang="scss" scoped>
.container{
  width: 100%;
  height: 50px;  
  overflow: hidden;
  img{
    float: left;
    top: 10px;
    left: 10px;
    width: 30px;
    height: 30px;
    margin:10px 10px;
  }
  span{
    line-height: 50px;
    font-size: 20px;
    color: white;
  }
}
</style>