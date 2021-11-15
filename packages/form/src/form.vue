<template>
  <el-form
    class="dc-form"
    ref="form"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-if="config.length">
      <el-form-item
        v-for="item in config"
        v-bind="$dc.filterObject(item, ['attrs', 'listeners'])"
        :key="item.key"
        :label="item.label || ''"
        :prop="item.key"
      >
        <components
          :is="control[item.type]"
          v-bind="item.attrs"
          v-on="item.listeners"
          v-model="form[item.key]"
        >
          <slot></slot>
        </components>
      </el-form-item>
    </template>
    <slot v-else></slot>
  </el-form>
</template>

<script>
/**
 * @description From
 * @property { Array } config 配置项
 */
import control from "../control";
export default {
  name: "dc-form",
  props: {
    config: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      form: {},
      control
    }
  },
  methods: {
    // 对整个表单进行校验的方法
    validate(callback) {
      return this.$refs['form'].validate(callback)
    },
    // 对部分表单字段进行校验的方法
    validateField(...args) {
      return this.$refs['form'].validateField(...args)
    },
    // 对整个表单进行重置
    resetFields(...args) {
      return this.$refs['form'].resetFields(...args)
    },
    // 移除表单项的校验结果
    clearValidate(...args) {
      return this.$refs['form'].clearValidate(...args)
    },
  }
}
</script>
