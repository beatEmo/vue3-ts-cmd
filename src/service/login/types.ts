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
