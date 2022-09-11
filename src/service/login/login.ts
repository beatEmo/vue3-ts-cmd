import zyRequest from '../index'
import { IAccount, IDataType, ILoginResult } from './types'

// 搞一个枚举数据 以便后面改api
enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role' // 用法 role/1/menu
}

// 更具前面封装的接口 post要传一个数据类型
export function accountLoginRequest(account: IAccount) {
  return zyRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

// 请求用户信息
export function requestUserInfoById(id: number) {
  return zyRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  })
}

// 请i求用户权限菜单
export function requestUserMenusById(id: number) {
  return zyRequest.get<IDataType>({
    url: `${LoginAPI.UserMenus}/` + id + '/menu',
    showLoading: false
  })
}
