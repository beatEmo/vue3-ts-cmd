<template>
  <div class="user">
    <page-search
      :formConfig="formConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    />
    <div class="content">
      <page-content
        ref="pageContentRef"
        :contentTableConfig="contentTableConfig"
        pageName="users"
        @new-btn-click="handleNewData"
        @edit-btn-click="handleEditData"
      ></page-content>
      <page-modal
        ref="pageModalRef"
        :defaultInfo="defaultInfo"
        :modalConfig="modalConfig"
      ></page-modal>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { formConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'

export default defineComponent({
  name: 'users',
  components: {
    pageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const { pageContentRef, handleResetClick, handleQueryClick } =
      usePageSearch()

    const { pageModalRef, handleNewData, handleEditData, defaultInfo } =
      usePageModal()

    return {
      pageModalRef,
      pageContentRef,
      formConfig,
      modalConfig,
      contentTableConfig,
      handleQueryClick,
      handleResetClick,
      handleNewData,
      handleEditData,
      defaultInfo
    }
  }
})
</script>

<style lang="less" scoped></style>
