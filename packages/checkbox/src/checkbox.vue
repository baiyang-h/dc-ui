<template>
  <el-checkbox
    class="dc-checkbox"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </el-checkbox>
</template>

<script>
/**
 * @description 复选框
 * @example <dc-checkbox v-model="checked">备选项</dc-checkbox>
 */
export default {
  name: "dc-checkbox"
}
</script>
