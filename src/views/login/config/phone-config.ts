// 是手机登录 检验规则
export const rules = {
  mobile: [
    { required: true, message: '手机是必传项', trigger: 'blur' },
    {
      pattern:
        /^1((34[0-8])|(8\d{2})|(([35][0-35-9]|4[579]|66|7[35678]|9[1389])\d{1}))\d{7}$/,
      message: '请输入正确的手机号',
      trigger: 'blur'
    }
  ],
  verifCode: [
    { required: true, message: '验证码是必传项', trigger: 'blur' },
    {
      pattern: /^[0-9]{6}$/,
      message: '请输入正确的验证码',
      trigger: 'blur'
    }
  ]
}
