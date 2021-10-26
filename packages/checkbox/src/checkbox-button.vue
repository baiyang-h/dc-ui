<template>
  <el-checkbox-button
      class="jw-checkbox-button"
      v-bind="$attrs"
      v-on="$listeners"
  >
    <slot></slot>
  </el-checkbox-button>
</template>

<script>
export default {
  name: "jw-checkbox-button"
}
</script>

<style scoped>

</style>
