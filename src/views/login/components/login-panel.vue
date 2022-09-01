<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" class="demo-tabs" stretch>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon
              ><User style="width: 1em; height: 1em; margin-right: 8px"
            /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon
              ><Pointer style="width: 1em; height: 1em; margin-right: 8px"
            /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <login-phone></login-phone>
      </el-tab-pane>
    </el-tabs>
    <section class="login-check">
      <el-checkbox v-model="isAccountChecked" label="记住密码" size="large" />
      <el-link type="primary">忘记密码</el-link>
    </section>
    <el-button class="login-btn" type="primary" @click="handleLogin">
      登录
    </el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'
export default defineComponent({
  name: 'LoginPanel',
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    const isAccountChecked = ref(true)
    // 账号登录模块
    const accountRef = ref<InstanceType<typeof LoginAccount>>()

    const handleLogin = () => {
      accountRef.value?.loginAction()
    }

    return { isAccountChecked, handleLogin, accountRef }
  }
})
</script>

<style lang="less" scoped>
.login-panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 150px;
  .demo-tabs {
    width: 400px;
  }
  .login-check {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .login-btn {
    width: 100%;
    height: 40px;
  }
}
</style>
