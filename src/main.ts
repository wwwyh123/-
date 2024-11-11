import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/dist/index.css'
import '@/styles/index.scss'
const icon = new Image();
const app = createApp(App)
// app.use(ElementPlus)
document.body.appendChild(icon);
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
//测试代码
// import axios from 'axios'
// axios({
//   url: '/api/user/info',
//   method: 'get',//请求方式
//   data: {
//     username: 'admin',
//     password: '111111',
//     token: 'Admin Token',
//   }
// })
//引入路由
import { router } from "./router"
app.use(router)
//引入仓库
import pinia from './store';
app.use(pinia)
app.use(ElementPlus, {
  locale: zhCn,
})
app.mount('#app')
