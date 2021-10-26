<template>
  <el-checkbox
    v-bind="$attrs"
    v-on="$listeners"
    class="jw-checkbox"
  >
    <slot></slot>
  </el-checkbox>
</template>

<script>
export default {
  name: "jw-checkbox"
}
</script>

<style scoped>

</style>
