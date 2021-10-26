<template>
  <el-radio-button
    class="jw-radio-button"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </el-radio-button>
</template>

<script>
/**
 * @description el-radio-button 封装，用于 el-radio-group 中，单选按钮
 * @example <jw-radio-button label="上海"></jw-radio-button>
 */
export default {
  name: "jw-radio-button"
}
</script>
