<template>
  <el-rate
    class="dc-rate"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </el-rate>
</template>

<script>
/**
 * @description Rate 评分
 */
export default {
  name: "dc-rate"
}
</script>
