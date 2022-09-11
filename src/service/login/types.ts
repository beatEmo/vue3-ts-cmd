export interface IAccount {
  name: string
  password: string
}

// 登录接口返回  data的类型
export interface ILoginResult {
  id: number
  name: string
  token: string
}

// 登录接口返回的数据类型
export interface IDataType<T = any> {
  code: number
  data: T
}
