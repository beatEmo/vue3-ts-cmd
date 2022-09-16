<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="handleFoldClick">
      <Fold v-if="!isFold" />
      <Expand v-else />
    </el-icon>
    <div class="content">
      <div>
        <zy-breadcrumb :breadcrumbs="breadcrumbs" />
      </div>
      <div>
        <user-info />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import userInfo from './user-info.vue'
import ZyBreadcrumb, { IBreadcrumb } from '@/base-ui/breadcrumb'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'
import { pathMapBreadcrumb } from '@/utils/map-menus'

export default defineComponent({
  components: {
    userInfo,
    ZyBreadcrumb
  },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const store = useStore()
    const route = useRoute()
    const isFold = ref(false)

    // 面包屑
    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus
      const currentPath = route.path
      return pathMapBreadcrumb(userMenus, currentPath)
    })

    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    return { isFold, breadcrumbs, handleFoldClick }
  }
})
</script>

<style lang="less" scoped>
.nav-header {
  display: flex;
  width: 100%;
  .fold-menu {
    font-size: 25px;
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
