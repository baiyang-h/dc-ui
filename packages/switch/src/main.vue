<template>
  <el-switch
    class="dc-switch"
    ref="switch"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </el-switch>

</template>

<script>
/**
 * @description Switch 开关
 */
export default {
  name: "dc-switch"
}
</script>
