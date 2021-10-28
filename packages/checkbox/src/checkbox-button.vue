<template>
  <el-checkbox-button
    class="dc-checkbox-button"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </el-checkbox-button>
</template>

<script>
/**
 * @description 复选框按钮，在组内部使用
 * @example <dc-checkbox-button v-model="checked">备选项</dc-checkbox-button>
 */
export default {
  name: "dc-checkbox-button"
}
</script>
