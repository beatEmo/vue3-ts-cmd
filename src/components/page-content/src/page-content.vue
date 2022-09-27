<template>
  <div class="page-content">
    <zy-table :userList="userList" v-bind="contentTableConfig">
      <template #headerHandler>
        <el-button type="primary">新建用户</el-button>
      </template>
      <!-- 状态 -->
      <template #enable="{ row }">
        <el-button size="small" :type="row.enable ? 'success' : 'danger'">
          {{ row.enable ? '启用' : '未启用' }}
        </el-button>
      </template>
      <!-- 创建时间 -->
      <template #createAt="{ row }">
        {{ $filters.formatTime(row.createAt) }}
      </template>
      <!-- 更新时间 -->
      <template #updateAt="{ row }">
        {{ $filters.formatTime(row.createAt) }}
      </template>
      <template #handler>
        <div class="handler-btns">
          <el-button icon="EditPen" type="text" size="small">修改</el-button>
          <el-button icon="DocumentDelete" type="text" size="small">
            删除
          </el-button>
        </div>
      </template>
    </zy-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ComputedRef } from 'vue'
import { useStore } from 'vuex'

import ZyTable from '@/base-ui/table'

export default defineComponent({
  name: 'PageContent',
  components: {
    ZyTable
  },
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    }
  },
  emits: ['newBtnClick', 'editBtnClick'],
  setup() {
    const store = useStore()

    store.dispatch('system/getPageListAction', {
      pageUrl: 'users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    const userList: ComputedRef<any[]> = computed(
      () => store.state.system.userList
    )
    // const userCount = computed(() => store.state.system.userCount)

    return {
      userList
    }
  }
})
</script>

<style lang="less" scoped>
.page-content {
  padding: 15px;
}
</style>
