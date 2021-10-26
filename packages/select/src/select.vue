<template>
  <div class="jw-select jw-inline-block">
    <el-select
      v-bind="$attrs"
      v-on="$listeners"
    >
      <slot></slot>
    </el-select>
  </div>
</template>

<script>
export default {
  name: "jw-select",
  props: {

  },
  mounted() {
    console.log(this.$attrs)
  }
}
</script>

<style scoped>

</style>
