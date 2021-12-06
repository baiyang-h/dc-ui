<template>
  <div class="form-item-text" v-bind="$attrs" v-on="$listeners">{{ value }}</div>
</template>

<script>
/**
 * 就只是一个文本而已
 */
export default {
  name: "dc-form-item-text",
  props: {
    value: String
  }
}
</script>

<style scoped lang="scss">
.form-item-text {
  color: #606266;
}
</style>
