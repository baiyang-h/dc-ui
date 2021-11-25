<template>
  <dc-form
    ref="form"
    class="dc-search"
    v-bind="$attrs"
    :value="value"
    :config="config"
    :showBtn="showBtn"
    :okText="okText"
    :cancelText="cancelText"
    @input="input"
    @submit="submit"
    @reset="reset"
  >
    <template v-for="key in Object.keys($slots)" :slot="key">
      <slot :name="key"></slot>
    </template>
  </dc-form>
</template>

<script>
export default {
  name: 'dc-search',
  props: {
    value: {
      type: Object,
      default: () => ({})
    },
    config: {
      type: Array,
      default: () => ([])
    },
    // 底部按钮显示与否
    showBtn: {
      type: Boolean,
      default: true
    },
    // 底部确认按钮文字
    okText: {
      type: String,
      default: '查询'
    },
    // 底部取消按钮文字
    cancelText: {
      type: String,
      default: '重置'
    },
  },
  methods: {
    input(value) {
      this.$emit('input', value)
    },
    submit(values) {
      this.$emit('search', values)
    },
    reset(values) {
      this.$emit('reset', values)
    }
  }
}
</script>
