<template>
  <div class="page-content">
    <zy-table
      :userList="userList"
      :listCount="dataCount"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
    >
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
import { defineComponent, ref, watch, computed } from 'vue'
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
    },
    pageName: {
      type: String,
      required: true
    }
  },
  emits: ['newBtnClick', 'editBtnClick'],
  setup(props) {
    const store = useStore()

    // 从vuex中获取数据
    const userList = computed(() =>
      store.getters['system/pageListData'](props.pageName)
    )
    const dataCount = computed(() =>
      store.getters['system/pageListCount'](props.pageName)
    )

    // 双向绑定pageInfo
    const pageInfo = ref({ currentPage: 1, pageSize: 10 })
    watch(pageInfo, () => getPageData())

    // 发送网络请求
    const getPageData = (queryInfo: any = {}) => {
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }
    getPageData()

    return {
      userList,
      getPageData,
      dataCount,
      pageInfo
    }
  }
})
</script>

<style lang="less" scoped>
.page-content {
  padding: 15px;
}
</style>
