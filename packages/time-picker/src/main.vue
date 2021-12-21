<template>
  <el-time-picker
    class="dc-time-picker"
    ref="timePicker"
    v-bind="$attrs"
    v-on="$listeners"
    :style="[wrapStyle]"
    :value="value"
  >
    <slot></slot>
  </el-time-picker>
</template>

<script>
/**
 * @description TimePicker 时间选择器
 * @property {String | Number} width 输入框长度，可以是 100、100px、100%、auto
 * @example <dc-time-picker v-model="value"></dc-time-picker>
 */
export default {
  name: "dc-time-picker",
  props: {
    value: {
      default: undefined
    },
    width: [String, Number],
  },
  computed: {
    wrapStyle() {
      const style = {};
      // 通过调用addUnit()方法，如果有单位，如百分比、px单位等，直接返回，如果是纯粹的数值，则加上px单位
      if(this.width) style.width = this.$dc.addUnit(this.width)
      return style
    }
  }
}
</script>
