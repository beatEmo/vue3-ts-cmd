<template>
  <div class="page-search">
    <div class="search">
      <zy-form v-bind="formConfig" v-model="formData">
        <template #header>
          <h1 class="header">高级检索</h1>
        </template>
        <template #footer>
          <div class="handle-btns">
            <el-button icon="">重置</el-button>
            <el-button type="primary" icon="">搜索</el-button>
          </div>
        </template>
      </zy-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ZyForm from '@/base-ui/form'

export default defineComponent({
  props: {
    formConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    ZyForm
  },
  setup() {
    // 这种做法违反了单项数据流
    // 首先这里使用v-model将数据绑给子组件 对于v-model的数据reactive是由bug的这里换成ref
    const formData = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
    return { formData }
  }
})
</script>

<style scoped>
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
