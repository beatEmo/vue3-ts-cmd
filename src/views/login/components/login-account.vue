<template>
  <div class="login-account">
    <el-form
      ref="formRef"
      :model="formData"
      status-icon
      :rules="rules"
      label-width="60px"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="formData.name" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="formData.password"
          type="password"
          autocomplete="off"
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { rules } from '../config/account-config'
export default defineComponent({
  setup() {
    const formRef = ref<FormInstance>()

    const formData = reactive({
      name: '',
      password: ''
    })

    const loginAction = () => {
      formRef.value?.validate((valid) => {
        if (valid) {
          console.log('登录')
        }
      })
    }

    return { formData, formRef, rules, loginAction }
  }
})
</script>

<style lang="less" scoped></style>
