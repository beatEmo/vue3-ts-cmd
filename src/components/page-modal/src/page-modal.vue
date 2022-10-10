<template>
  <div class="page-modal">
    <el-dialog
      v-model="dialogVisible"
      title="新建用户"
      width="30%"
      center
      draggable
      destroy-on-close
    >
      <zy-form v-bind="modalConfig" v-model="formData"></zy-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import ZyForm from '@/base-ui/form'

export default defineComponent({
  props: {
    modalConfig: {
      type: Object,
      required: false
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    ZyForm
  },
  setup(props) {
    // 控制弹出框的显影
    const dialogVisible = ref(false)

    const formData = ref({})
    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (const item of props.modalConfig.formItems) {
          formData.value[`${item.field}`] = newValue[`${item.field}`]
        }
      }
    )

    return {
      dialogVisible,
      formData
    }
  }
})
</script>

<style scoped></style>
