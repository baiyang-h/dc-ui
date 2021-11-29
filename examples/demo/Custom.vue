<template>
  <div>
    <el-input :value="value" @input="input"></el-input>
    我是自定义
  </div>
</template>

<script>
export default {
  name: "Custom",
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    input(v) {
      this.$emit('input', v)
    }
  }
}
</script>

<style scoped>

</style>
