<template>
  <el-radio-button
    class="dc-radio-button"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </el-radio-button>
</template>

<script>
/**
 * @description el-radio-button 封装，用于 el-radio-group 中，单选按钮
 * @example <dc-radio-button label="上海"></dc-radio-button>
 */
export default {
  name: "dc-radio-button"
}
</script>
