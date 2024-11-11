// import { RouteRecordRaw } from "vue-router"
//定义小仓库数据state类型
interface Routes {
  path: string;
  redirect: string;
  name: string;
  meta?: {
    key: string;
  };
  children?: Routes[]; // 明确指定 children 为 Routes 类型的数组
}
export interface UserState {
  token: string | null
  menuRoutes: Routes[]
}