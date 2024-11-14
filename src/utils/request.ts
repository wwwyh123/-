//进行axios二次封装：使用请求与响应拦截器
import axios from 'axios'
import { ElMessage } from 'element-plus';
import useUserStore from '../store/modules/user';
let requests = axios.create({
  //基础路径
  baseURL: import.meta.env.VITE_APP_BASE_API,

  timeout: 5000//超时时间设置
});
//第二步，给axios添加请求和响应拦截器
requests.interceptors.request.use((config) => {
  //config,有headers请求头属性，给服务器携带公共参数
  let userStore = useUserStore()
  if (userStore.token) {
    config.headers.token = userStore.token
  }
  //返回配置对象
  return config
})
//第三步：相应拦截器
requests.interceptors.response.use((response) => {
  //成功的回调
  //简化数据
  return response.data
}, (error) => {
  //失败的回调
  //定义一个变量，存储网络错误信息
  let msg = '';
  let status = error.response.status;
  switch (status) {
    case 401:
      msg = "token过期";
      break;
    case 403:
      msg = '无权访问';
      break;
    case 404:
      msg = "请求地址错误";
      break;
    case 500:
      msg = "服务器出现问题";
      break;
    default:
      msg = "无网络";

  }
  ElMessage({
    type: 'error',
    message: msg
  })
  return Promise.reject(error);
})
export default requests;