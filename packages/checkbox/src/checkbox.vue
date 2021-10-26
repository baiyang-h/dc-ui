<template>
  <el-checkbox
    class="jw-checkbox"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </el-checkbox>
</template>

<script>
/**
 * @description 复选框
 * @example <jw-checkbox v-model="checked">备选项</jw-checkbox>
 */
export default {
  name: "jw-checkbox"
}
</script>
