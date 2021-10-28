<template>
  <el-option-group
    class="dc-option-group"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </el-option-group>
</template>

<script>
/**
 * @description el-option-group 封装，用于 el-select 中
 */
export default {
  name: "dc-option-group"
}
</script>
