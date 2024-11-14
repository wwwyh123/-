//路由鉴权：项目当中路由能不能被访问的权限设置
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { router } from './src/router'

//获取用户相关的小仓库内部token数据
import pinia from './src/store/index'
import useUserStore from './src/store/modules/user';
let userStore = useUserStore(pinia)
//取消进度条右侧加载的小圈
Nprogress.configure({ showSpinner: false });

//全局守卫
router.beforeEach(async (to, from, next) => {
  Nprogress.start();
  //获取token 判断用户是否登录
  let token = userStore.token
  let username = userStore.username
  //用户已登录
  if (token) {
    //如果用户已登录则无法返回登录页面
    if (to.path == '/login') {
      next({ path: '/' })
    } else {//如果是其他页面
      //如果有用户信息
      if (username) {
        //放行
        next()
      } else {//如果没有用户信息就去获取
        try {
          await userStore.GetUserInfo()
          next()
        } catch (error) {
          //token过期
          //用户手动修改了本地存储
          await userStore.logout();
          next({ path: '/login', query: { redirect: to.path } })
        }
      }
    }
  } else {//用户未登录
    //如果要到登录页面那么直接放行
    if (to.path == '/login') {
      next()
    } else {//如果到其他页面，无法放行，将要去的路径变成参数，登录成功后直接跳转该页面
      next({ path: '/login', query: { redirect: to.path } })
    }
  }
  // next()//放行函数
})
//全局后置守卫
router.afterEach((to, from) => {
  Nprogress.done()
})
//路由鉴权问题
//用户未登录只能访问login
//登陆成功，不能访问login
