import type { IForm } from '@/base-ui/form'

export const formConfig: IForm = {
  labelWidth: '90px',
  itemLayout: {
    padding: '10px 30px'
  },
  formItems: [
    {
      field: 'id',
      type: 'input',
      label: 'id',
      placeholder: '请输入id'
    },
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      rules: [],
      placeholder: '请输入用户名'
    },
    {
      field: 'password',
      type: 'password',
      label: '密码',
      placeholder: '请输入密码'
    },
    {
      field: 'sport',
      type: 'select',
      label: '喜欢的运动',
      placeholder: '请输入喜欢的运动',
      options: [
        { title: '篮球', value: 'basketball' },
        { title: '足球', value: 'football' }
      ]
    },
    {
      field: 'createTime',
      type: 'datepicker',
      label: '创建时间',
      placeholder: '请选则创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '开始时间',
        type: 'daterange'
      }
    }
  ]
}
