<template>
  <el-form-item
    class="dc-form-item"
    ref="formItem"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </el-form-item>
</template>

<script>
/**
 * @description form-item
 */
export default {
  name: "dc-form-item",
  methods: {
    // 对该表单项进行重置，将其值重置为初始值并移除校验结果
    resetField() {
      this.$refs['formItem'].resetField()
    },
    // 移除该表单项的校验结果
    clearValidate() {
      this.$refs['formItem'].clearValidate()
    }
  }
}
</script>
