<template>
  <div class="user">
    <page-search :formConfig="formConfig" />
    <div class="content">
      <page-content
        :contentTableConfig="contentTableConfig"
        pageName="users"
      ></page-content>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pageSearch from '@/components/page-search'
import pageContent from '@/components/page-content'

import { formConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

export default defineComponent({
  name: 'users',
  components: {
    pageSearch,
    pageContent
  },
  setup() {
    return {
      formConfig,
      contentTableConfig
    }
  }
})
</script>

<style lang="less" scoped></style>
