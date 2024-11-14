import { defineStore } from "pinia";
//创建小仓库
let useIsFoldStore = defineStore('IsFoldStore', {
  state: () => ({
    IsFold: false,
    refresh: false
  }),
  getters: {

  },
  actions: {

  }
})
export default useIsFoldStore