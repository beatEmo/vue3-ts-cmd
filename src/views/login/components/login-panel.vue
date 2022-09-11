<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" class="demo-tabs" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><CirclePlus /></el-icon>
            <!-- <el-icon><User style="margin-right: 8px" /></el-icon> -->
            <span>账号登录</span>
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><CirclePlus /></el-icon>
            <!-- <el-icon><Pointer style="margin-right: 8px" /></el-icon> -->
            <span>手机登录</span>
          </span>
        </template>
        <login-phone ref="phoneRef"></login-phone>
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
    // 定义属性
    const isAccountChecked = ref(true)
    // 账号登录模块
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()
    const currentTab = ref('account')

    // 定义方法
    const handleLogin = () => {
      // 通过el-tab的属性来区分是账号登录还是验证码登录
      if (currentTab.value === 'account') {
        accountRef.value?.loginAction(isAccountChecked.value)
      } else {
        phoneRef.value?.loginAction()
      }
    }

    return { isAccountChecked, handleLogin, accountRef, phoneRef, currentTab }
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
  .custom-tabs-label {
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      margin-left: 5px;
    }
  }
}
</style>
