<template>
  <el-slider
    class="dc-slider"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </el-slider>
</template>

<script>
/**
 * @description Slider 滑块
 */
export default {
  name: "dc-slider"
}
</script>
