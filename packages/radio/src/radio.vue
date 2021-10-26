<template>
  <el-radio
    v-bind="$attrs"
    v-on="$listeners"
    class="jw-radio"
  >
    <slot></slot>
  </el-radio>
</template>

<script>
/**
 * @description el-radio 的封装，单选框
 * @example <jw-radio v-model="radio" label="1">备选项</jw-radio>
 */
export default {
  name: "jw-radio",
}
</script>
