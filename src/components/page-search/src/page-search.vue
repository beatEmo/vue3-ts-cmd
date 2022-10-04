<template>
  <div class="page-search">
    <div class="search">
      <zy-form v-bind="formConfig" v-model="formData" ref="myform">
        <template #header>
          <h1 class="header">高级检索</h1>
        </template>
        <template #footer>
          <div class="handle-btns">
            <el-button icon="Refresh" @click="handleResetClick">重置</el-button>
            <el-button type="primary" icon="" @click="btnSearch">
              搜索
            </el-button>
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
  setup(props) {
    // 双向绑定的属性应该是由配置文件的field来决定
    const formItems = props.formConfig?.formItems ?? []
    const fromOriginData: any = {}
    for (const item of formItems) {
      fromOriginData[item.field] = ''
    }
    // 这种做法违反了单项数据流
    // 首先这里使用v-model将数据绑给子组件 对于v-model的数据reactive是由bug的这里换成ref
    const formData = ref(fromOriginData)
    const myform = ref<any>()

    const btnSearch = () => {
      myform.value?.myValidate()
      console.log(myform.value)
    }
    const handleResetClick = () => {
      formData.value = fromOriginData
    }

    return { formData, myform, btnSearch, handleResetClick }
  }
})
</script>

<style scoped>
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
