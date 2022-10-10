<template>
  <div class="menu">
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="menu"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageContent from '@/components/page-content'

import { contentTableConfig } from './config/content.config'

// import { usePageSearch } from '@/hooks/usePageSearch'

export default defineComponent({
  name: 'hy-menu',
  components: {
    PageContent
  },
  setup() {
    // const { pageContentRef, handleResetClick, handleQueryClick } =
    //   usePageSearch()

    return {
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
