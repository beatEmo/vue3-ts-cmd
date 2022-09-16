<template>
  <div class="user">
    <page-search :formConfig="formConfig" />
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pageSearch from '@/components/page-search'
import { formConfig } from './config/search.config'

export default defineComponent({
  name: 'users',
  components: {
    pageSearch
  },
  setup() {
    return { formConfig }
  }
})
</script>

<style lang="less" scoped></style>
