<template>
  <el-checkbox-button
    class="jw-checkbox-button"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </el-checkbox-button>
</template>

<script>
/**
 * @description 复选框按钮，在组内部使用
 * @example <jw-checkbox-button v-model="checked">备选项</jw-checkbox-button>
 */
export default {
  name: "jw-checkbox-button"
}
</script>
