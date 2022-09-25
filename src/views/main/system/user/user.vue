<template>
  <div class="user">
    <page-search :formConfig="formConfig" />
    <div class="content">
      <zy-table
        :userList="userList"
        v-bind="tableConfig"
        :showIndexColumn="showIndexColumn"
        :showSelectColumn="showSelectColumn"
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
    const tableConfig = {
      title: '用户管理系统',
      propList: [
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
        },
        {
          label: '操作',
          slotName: 'handler',
          minWidth: '170'
        }
      ]
    }
    const showIndexColumn = true
    const showSelectColumn = true

    return {
      formConfig,
      userList,
      userCount,
      tableConfig,
      showIndexColumn,
      showSelectColumn
    }
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
