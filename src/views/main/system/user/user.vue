<template>
  <div class="user">
    <page-search :formConfig="formConfig" />
    <div class="content">
      <zy-table :userList="userList" :propList="propList">
        <template #enable="{ row }">
          {{ row.enable ? '启用' : '未启用' }}
        </template>
      </zy-table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import pageSearch from '@/components/page-search'
import ZyTable from '@/base-ui/table'
import { formConfig } from './config/search.config'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'users',
  components: {
    pageSearch,
    ZyTable
  },
  setup() {
    const store = useStore()

    store.dispatch('system/getPageListAction', {
      pageUrl: 'users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    const userList = computed(() => store.state.system.userList)
    const userCount = computed(() => store.state.system.userCount)
    const propList = [
      { prop: 'name', label: '用户名', minWidth: '100', slotName: 'name' },
      {
        prop: 'realname',
        label: '真实姓名',
        minWidth: '100',
        slotName: 'realname'
      },
      {
        prop: 'cellphone',
        label: '手机号码',
        minWidth: '100',
        slotName: 'cellphone'
      },
      { prop: 'enable', label: '状态', minWidth: '100', slotName: 'enable' },
      {
        prop: 'createAt',
        label: '创建时间',
        minWidth: '250',
        slotName: 'createAt'
      },
      {
        prop: 'updateAt',
        label: '更新时间',
        minWidth: '250',
        slotName: 'updateAt'
      }
    ]

    return { formConfig, userList, userCount, propList }
  }
})
</script>

<style lang="less" scoped>
.user {
  .content {
    padding: 20px;
    border-top: 20px solid #f5f5f5;
  }
}
</style>
