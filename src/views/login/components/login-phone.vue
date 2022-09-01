<template>
  <div class="login-phone">
    <el-form
      ref="ruleFormRef"
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
          <el-button type="primary" size="small" round>发送验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { rules } from '../config/phone-config'
export default defineComponent({
  setup() {
    const formData = reactive({
      mobile: '',
      verifCode: ''
    })

    return { rules, formData }
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
