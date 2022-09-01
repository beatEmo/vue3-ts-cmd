// form 检验规则
export const rules = {
  name: [
    { required: true, message: '账号是必传项', trigger: 'blur' },
    {
      pattern: /^[a-zA-Z0-9]{6,10}$/,
      message: '用户是6-10位的字母或数字',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '密码是必传项', trigger: 'blur' },
    {
      pattern: /^[0-9]{3,}$/,
      message: '用户是3位以上的数字',
      trigger: 'blur'
    }
  ]
}
