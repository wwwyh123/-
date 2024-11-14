<template>
  <div class="tabbar" :class="{fold:IsFold.IsFold?true:false}">
    <bread></bread>
    <setting></setting>
  </div>
</template>
<script lang="ts" setup>
import bread from './bread/index.vue'
import setting from './setting/index.vue'
import useIsFoldStore from '../../store/modules/IsFold';
let IsFold = useIsFoldStore()
</script>
<script lang="ts">
export default {
  name:'tabbar'
}
</script>
<style lang="scss">
$base-menu-min-width: 50px;
.tabbar{
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  transition: all .3s;
  background-color: #fff;
  &.fold{
    width: calc(100vw - $base-menu-min-width);
  }
  .tabbar_left{
  height: 100%;
  font-size: 20px;
  .expand{
    margin: 15px 5px;
    float: left;
  }
  .change{
    margin-left: 5px;
    line-height: 50px;
    float: left;
  }
}
  .tabbar_right{
    margin-top: 15px;
    padding: 0 5px;
    img{
      margin: 0 5px;
      margin-left: 10px;
    }
    .dropdown{
      margin: 5px 5px;

    }
  }
}

</style>