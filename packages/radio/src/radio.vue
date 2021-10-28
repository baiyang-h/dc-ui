<template>
  <el-radio
    class="dc-radio"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </el-radio>
</template>

<script>
/**
 * @description el-radio 的封装，单选框
 * @example <dc-radio v-model="radio" label="1">备选项</dc-radio>
 */
export default {
  name: "dc-radio",
}
</script>
