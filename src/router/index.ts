//通过vue-router插件实现模板路由配置
// import component from "element-plus/es/components/tree-select/src/tree-select-option.mjs";
import { createRouter, createWebHashHistory } from "vue-router";
import { constantRoutes } from "./routes";
//创建路由器
export let router = createRouter({
  //路由模式
  history: createWebHashHistory(),
  routes: constantRoutes,
  scrollBehavior() {//滚动行为
    return {
      left: 0,
      top: 0
    }
  }
})
