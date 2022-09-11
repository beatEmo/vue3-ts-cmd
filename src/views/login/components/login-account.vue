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
        <el-input v-model="formData.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="formData.password"
          type="password"
          autocomplete="off"
          show-password
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import type { FormInstance } from 'element-plus'
import { rules } from '../config/account-config'
import localCache from '@/utils/cache'

export default defineComponent({
  setup() {
    const formRef = ref<FormInstance>()
    const store = useStore()
    const formData = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    })

    const loginAction = (isAccountChecked: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          // 验证通过
          if (isAccountChecked) {
            // 1.判断是否需要记住密码
            // 给密码做本地缓存
            localCache.setCache('name', formData.name)
            localCache.setCache('password', formData.password)
          } else {
            // 不记住密码就将缓存中的账号密码删除
            localCache.deleteCache('name')
            localCache.deleteCache('password')
          }

          // 2.开始进行登录
          store.dispatch('login/accountLoginAction', { ...formData })
          // console.log('登录')
        }
      })
    }

    return { formData, formRef, rules, loginAction }
  }
})
</script>

<style lang="less" scoped></style>
