<template>
  <div class="zy-form">
    <header class="header">
      <slot name="header"></slot>
    </header>
    <el-form :label-width="labelWidth" ref="formD">
      <el-row>
        <template v-for="item of formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              :label="item.label"
              :rules="item.rules"
              :style="itemStyle"
            >
              <!-- input -->
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-model="formData[`${item.field}`]"
                />
              </template>
              <!-- select -->
              <template v-else-if="item.type === 'select'">
                <el-select
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  :placeholder="item.placeholder"
                  v-model="formData[`${item.field}`]"
                >
                  <el-option
                    v-for="option of item.options"
                    :label="option.title"
                    :key="option.value"
                    :value="option.value"
                  >
                    {{ option.title }}
                  </el-option>
                </el-select>
              </template>
              <!-- datepicker -->
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  v-model="formData[`${item.field}`]"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <footer class="footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch, computed } from 'vue'
import type { IFormItem } from '../types'
export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => {
        return []
      }
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: '10px 40px' })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const formData = ref({ ...props.modelValue })

    watch(
      () => props.modelValue,
      (newValue) => {
        formData.value = { ...newValue }
      }
    )
    watch(formData, (newValue) => emit('update:modelValue', newValue), {
      deep: true
    })

    return { formData }
  }
})
</script>

<style lang="less" scoped>
.zy-form {
  padding-top: 22px;
  .form-item {
    padding: 5px 30px;
  }
}
</style>
