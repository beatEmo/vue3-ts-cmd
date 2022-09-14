<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="handleFoldClick">
      <Fold v-if="!isFold" />
      <Expand v-else />
    </el-icon>
    <i class="fold-menu el-icon-s-fold" @click="handleFoldClick"></i>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)

    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    return { isFold, handleFoldClick }
  }
})
</script>

<style lang="less" scoped>
.nav-header {
  .fold-menu {
    font-size: 25px;
    cursor: pointer;
  }
}
</style>
