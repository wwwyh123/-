//品牌管理的接口
import requests from "../../../utils/request";
import type { TradeMarkResponseData, TradeMark } from './type'
//品牌管理的接口地址
enum API {
  //获取已有品牌接口
  TRADEMARK_URL = "/admin/product/baseTrademark/",
  //添加品牌
  ADDTRADEMARK_URL = "/admin/product/baseTrademark/save",
  //修改已有品牌
  UPDATETRADEMARK_URL = '/admin/product/baseTrademark/update',
  //删除已有品牌
  DELETE_URL = '/admin/product/baseTrademark/remove/',
}
//获取已有品牌接口的方法
export const reqHasTrademark = (page: number, limit: number) =>
  requests.get<any, TradeMarkResponseData>(API.TRADEMARK_URL + `${page}/${limit}`)

//page: 获取第几页
//Limit:获取几个已有品牌的数据














