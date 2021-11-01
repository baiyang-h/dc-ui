<template>
  <el-color-picker
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </el-color-picker>
</template>

<script>
/**
 * @description ColorPicker 颜色选择器
 */
export default {
  name: "dc-color-picker"
}
</script>
