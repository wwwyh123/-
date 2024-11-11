//创建用户相关的小仓库
import { defineStore } from 'pinia'
import { reqLogin } from '../../api/user'
import type { loginForm, loginResponseData } from '../../api/user/type'
import type { UserState } from './types/type'
//引入路由组件
import { constantRoutes } from '../../router/routes'
//创建用户小仓库
let useUserStore = defineStore('User', {
  //小仓库，存储数据的地方
  state: (): UserState => {
    return {
      token: localStorage.getItem("TOKEN"),
      menuRoutes: constantRoutes
    }
  },
  //异步|逻辑的地方
  actions: {
    async userLogin(data: loginForm) {
      //用户登录的方法
      let result: loginResponseData = await reqLogin(data)
      console.log(result)
      //登陆成功200
      if (result.code == 200) {
        this.token = (result.data.token as string)
        localStorage.setItem("TOKEN", (result.data.token as string))
        return 'ok'
      } else {//失败201 
        return Promise.reject(new Error(result.data.message))
      }

    }
  },
  getters: {

  }
})
//对外暴露获取小仓库的方法
export default useUserStore