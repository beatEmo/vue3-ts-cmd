<template>
  <div class="page-content">
    <zy-table
      :userList="userList"
      :listCount="dataCount"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
    >
      <template #headerHandler>
        <el-button type="primary" v-if="isCreate" @click="handleNewClick">
          新建用户
        </el-button>
      </template>
      <!-- 状态 -->
      <template #enable="{ row }">
        <el-button size="small" :type="row.enable ? 'success' : 'danger'">
          {{ row.enable ? '启用' : '未启用' }}
        </el-button>
      </template>
      <template #status="{ row }">
        <el-button size="small" :type="row.status ? 'success' : 'danger'">
          {{ row.status ? '启用' : '未启用' }}
        </el-button>
      </template>
      <!-- 图片 -->
      <!-- <template #imgUrl="{ row }">
        <el-image
          style="width: 60px; height: 60px"
          :src="row.imgUrl"
          :preview-src-list="[row.imgUrl]"
          fit="cover"
          teleported
        />
      </template> -->
      <!-- 创建时间 -->
      <template #createAt="{ row }">
        {{ $filters.formatTime(row.createAt) }}
      </template>
      <!-- 更新时间 -->
      <template #updateAt="{ row }">
        {{ $filters.formatTime(row.createAt) }}
      </template>
      <!-- 处理操作事务 -->
      <template #handler="{ row }">
        <div class="handler-btns">
          <el-button
            icon="EditPen"
            type="text"
            size="small"
            v-if="isUpdate"
            @click="handleEditClick(row)"
          >
            编辑
          </el-button>
          <el-button
            v-if="isDelete"
            icon="DocumentDelete"
            type="text"
            size="small"
            @click="handleDeleteClick(row)"
          >
            删除
          </el-button>
        </div>
      </template>
      <!-- 处理其他多余插槽 -->
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="{ row }"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="row"></slot>
        </template>
      </template>
    </zy-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed } from 'vue'
import { useStore } from 'vuex'

import ZyTable from '@/base-ui/table'

import { usePermission } from '@/hooks/usePermission'

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
  setup(props, { emit }) {
    const store = useStore()

    // 0 获取操作的权限
    const isCreate = usePermission(props.pageName, 'create')
    const isUpdate = usePermission(props.pageName, 'update')
    const isDelete = usePermission(props.pageName, 'delete')
    const isQuery = usePermission(props.pageName, 'query')

    // 1 双向绑定pageInfo
    const pageInfo = ref({ currentPage: 1, pageSize: 10 })
    watch(pageInfo, () => getPageData())

    // 2 发送网络请求
    const getPageData = (queryInfo: any = {}) => {
      // 判断有没有查询权限
      if (!isQuery) return
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

    // 3 从vuex中获取数据
    const userList = computed(() =>
      store.getters['system/pageListData'](props.pageName)
    )
    const dataCount = computed(() =>
      store.getters['system/pageListCount'](props.pageName)
    )

    //  4 获取其他动态插槽
    const otherPropSlots = props.contentTableConfig?.propList?.filter(
      (item: any) => {
        if (item.slotName === 'status') return false
        if (item.slotName === 'createAt') return false
        if (item.slotName === 'updateAt') return false
        if (item.slotName === 'handler') return false
        return true
      }
    )

    // 5 删除功能更
    const handleDeleteClick = (data: any) => {
      store.dispatch('system/deletePageDataAction', {
        pageName: props.pageName,
        id: data.id
      })
    }

    // 新增功能
    const handleNewClick = () => {
      emit('newBtnClick')
    }
    // 修改功能
    const handleEditClick = (item: any) => {
      emit('editBtnClick', item)
    }

    return {
      userList,
      getPageData,
      dataCount,
      pageInfo,
      otherPropSlots,
      isCreate,
      isUpdate,
      isDelete,
      handleDeleteClick,
      handleNewClick,
      handleEditClick
    }
  }
})
</script>

<style lang="less" scoped>
.page-content {
  padding: 15px;
}
</style>
