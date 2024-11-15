<template>
<el-card>
  <el-button type="primary" icon="Plus" @click="addLogo">添加品牌</el-button>
  <!-- 表格组件，展示已有的平台数据 -->
   <el-table border style="margin:10px 0" :data="messageArr">
    <el-table-column label="序号" width="80px" align="center" type="index" />
    <el-table-column prop="tmName" label="品牌名称"/>
    <el-table-column label="品牌LOGO">
      <template #default="{row}">
      <img :src="row.logoUrl" alt="" style="width: 100px; height: 100px;">
    </template>
    </el-table-column>
    <el-table-column label="品牌操作">
      <el-button icon="Edit" @click="editLogo"></el-button>
      <el-button icon="Delete"></el-button>
    </el-table-column>
   </el-table>
     <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="limit"
      :page-sizes="[3,5,7,9]"
      layout="total, sizes, prev, pager, next, jumper,->,total"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="getHasTrademark"
    ></el-pagination>
</el-card>
<!-- 对话框 -->
  <el-dialog
    v-model="dialogVisible"
    title="添加品牌"
    width="900" height="800">
    <el-form style="width: 80%">
      <el-form-item label="品牌名称" label-width="100px" label-position="right">
        <el-input placeholder="请输入品牌名称"></el-input>
      </el-form-item>
      <el-form-item label="品牌LOGO" label-width="100px"  label-position="right">
        <el-upload
    class="avatar-uploader"
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload"
  >
    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
    <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
  </el-upload>
      </el-form-item>
    </el-form>
    <template #footer>
      <div>
        <el-button @click="cancel">取消</el-button>
        <el-button type="primary" @click="confirm">确认</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import type { Records, TradeMarkResponseData } from '../../../api/product/trademark/type'
//引入  页面挂载时数据渲染
import { onMounted } from 'vue';
//动态绑定分页器的数据
import {ref} from 'vue'
//当前页码
let currentPage=ref<number>(1);
//每页显示多少条数据
let limit=ref<number>(4);
//总数
let total=ref<number>(0)
//每一页商品信息数据数组
let messageArr=ref<Records>([])
//-------------------------------------------------------------------------
//引入获取数据的方法
import {reqHasTrademark} from '../../../api/product/trademark/index'
//封装成一个函数，在任何情况下直接调本函数即可，无需传参
const  getHasTrademark=async()=>{
  let result:TradeMarkResponseData =await reqHasTrademark(currentPage.value,limit.value)
  if(result.code==200){//请求成功
    console.log(result)
    total.value=result.data.total
    messageArr.value=result.data.records
  }
}
//分页器页码发生变化时,再次发请求获得数据
//对于当前页码发生变化自定义事件,组件pagination父组件回传了数据(当前的页码)
// const handleCurrentChange = ()=>{
//   getHasTrademark()
// }
//下拉菜单发生变化时
const handleSizeChange = ()=>{
  getHasTrademark()
}
//------------------------------------------------------------------------------------
//页面挂载时获取数据
onMounted(()=>{
  currentPage.value=1
  getHasTrademark()
})
//对话框
let dialogVisible=ref(false)
//添加品牌
const addLogo=()=>{
  dialogVisible.value = true
}
//编辑品牌
const editLogo=()=>{
  dialogVisible.value = true
}
//对话框取消
const cancel=()=>{
  dialogVisible.value = false
}
//对话框确认
const confirm=()=>{
  dialogVisible.value = false
}
</script>

<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>