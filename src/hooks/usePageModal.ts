import { ref } from 'vue'

import PageModal from '@/components/page-modal'

export function usePageModal() {
  // 处理 新增 修改 功能
  const pageModalRef = ref<InstanceType<typeof PageModal>>(null)
  const defaultInfo = ref({})

  const handleNewData = () => {
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
  }
  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    // console.log(defaultInfo, 'data')
  }
  return { pageModalRef, handleNewData, handleEditData, defaultInfo }
}
