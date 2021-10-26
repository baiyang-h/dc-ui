<template>
  <el-option
    class="jw-option"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </el-option>
</template>

<script>
/**
 * @description el-option 封装，用于 el-select 中
 * @example <jw-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
 */
export default {
  name: "jw-option"
}
</script>
