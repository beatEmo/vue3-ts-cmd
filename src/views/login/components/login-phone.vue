<template>
  <div class="login-phone">
    <el-form
      ref="formRef"
      :model="formData"
      status-icon
      :rules="rules"
      label-width="60px"
    >
      <el-form-item label="账号" prop="mobile">
        <el-input v-model="formData.mobile" type="text" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" prop="verifCode">
        <div class="btn">
          <el-input
            v-model="formData.verifCode"
            type="text"
            autocomplete="off"
          />
          <el-button type="primary" size="small">发送验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import { useStore } from 'vuex'
import { rules } from '../config/phone-config'
import type { FormInstance } from 'element-plus'

export default defineComponent({
  setup() {
    const store = useStore()
    const formRef = ref<FormInstance>()
    const formData = reactive({
      mobile: '',
      verifCode: ''
    })

    const loginAction = () => {
      formRef.value?.validate((valid) => {
        if (valid) {
          // 验证通过
          store.dispatch('login/phoneLoginAction', { ...formData })
          // console.log('登录')
        }
      })
    }

    return { formRef, rules, formData, loginAction }
  }
})
</script>

<style lang="less" scoped>
.login-phone {
  .btn {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
