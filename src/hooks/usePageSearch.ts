import { ref } from 'vue'

import PageContent from '@/components/page-content'

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()

  const handleResetClick = (): void => {
    pageContentRef.value?.getPageData()
  }
  const handleQueryClick = (queryInfo: any): void => {
    pageContentRef.value?.getPageData(queryInfo)
  }

  return { pageContentRef, handleResetClick, handleQueryClick }
}
