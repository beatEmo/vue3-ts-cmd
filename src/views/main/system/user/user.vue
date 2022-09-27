<template>
  <div class="user">
    <page-search :formConfig="formConfig" />
    <div class="content">
      <page-content :contentTableConfig="contentTableConfig"></page-content>
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
    // const store = useStore()

    // store.dispatch('system/getPageListAction', {
    //   pageUrl: 'users/list',
    //   queryInfo: {
    //     offset: 0,
    //     size: 10
    //   }
    // })

    // const userList = computed(() => store.state.system.userList)
    // const userCount = computed(() => store.state.system.userCount)
    // const tableConfig = {
    //   title: '用户管理系统',
    //   propList: [
    //     { prop: 'name', label: '用户名', minWidth: '100', slotName: 'name' },
    //     {
    //       prop: 'realname',
    //       label: '真实姓名',
    //       minWidth: '100',
    //       slotName: 'realname'
    //     },
    //     {
    //       prop: 'cellphone',
    //       label: '手机号码',
    //       minWidth: '100',
    //       slotName: 'cellphone'
    //     },
    //     { prop: 'enable', label: '状态', minWidth: '100', slotName: 'enable' },
    //     {
    //       prop: 'createAt',
    //       label: '创建时间',
    //       minWidth: '250',
    //       slotName: 'createAt'
    //     },
    //     {
    //       prop: 'updateAt',
    //       label: '更新时间',
    //       minWidth: '250',
    //       slotName: 'updateAt'
    //     },
    //     {
    //       label: '操作',
    //       slotName: 'handler',
    //       minWidth: '170'
    //     }
    //   ]
    // }
    // const showIndexColumn = true
    // const showSelectColumn = true

    return {
      formConfig,
      // userList,
      // userCount,
      // tableConfig,
      // showIndexColumn,
      // showSelectColumn,
      contentTableConfig
    }
  }
})
</script>

<style lang="less" scoped></style>
