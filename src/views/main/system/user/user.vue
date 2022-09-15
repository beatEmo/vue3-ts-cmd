<template>
  <div class="user">
    <div class="search">
      <zy-form v-bind="formConfig" />
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ZyForm from '@/base-ui/form'

import { formConfig } from './config/search.config'

export default defineComponent({
  name: 'users',
  components: {
    ZyForm
  },
  setup() {
    return { formConfig }
  }
})
</script>

<style scoped></style>
