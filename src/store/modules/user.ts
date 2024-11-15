//创建用户相关的小仓库
import { defineStore } from 'pinia'
//
import { reqLogin, reqUserInfo, reqLogout } from '../../api/user'
import type { loginFormData, loginResponseData } from '../../api/user/type'
import type { UserState } from './types/type'
//引入关于本地存储token的方法
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '../../utils/token'
//引入路由组件
import { constantRoutes } from '../../router/routes'
//创建用户小仓库
let useUserStore = defineStore('User', {
  //小仓库，存储数据的地方
  state: (): UserState => {
    return {
      token: GET_TOKEN(),
      menuRoutes: constantRoutes,
      username: '',
      avatar: ''
    }
  },
  //异步|逻辑的地方
  actions: {
    //用户登录的方法
    async userLogin(data: loginFormData) {
      let result: loginResponseData = await reqLogin(data)
      //登陆成功200
      if (result.code == 200) {
        console.log(result)
        this.token = (result.data as string)
        SET_TOKEN(result.data as string)
        // localStorage.setItem("TOKEN", (result.data.token as string))//存储到本地
        return 'ok'
      } else {//失败201 
        return Promise.reject(new Error(result.data))
      }
    },
    //获取用户信息
    async GetUserInfo() {
      // let result: userResponseData = await reqUserInfo()
      let result: any = await reqUserInfo()
      if (result.code == 200) {
        // this.token = result.data.token
        this.avatar = result.data.avatar
        this.username = result.data.name
      } else {
        return Promise.reject(new Error(result.message))
      }
    },
    //退出登录
    async logout() {
      //退出登录成功
      let result = await reqLogout()
      if (result.code == 200) {
        this.token = '',
          this.username = '',
          this.avatar = '',
          REMOVE_TOKEN()
        return 'ok'
      } else {
        return Promise.reject(new Error(result.message))
      }
    }
  },
  getters: {

  }
})
//对外暴露获取小仓库的方法
export default useUserStore
