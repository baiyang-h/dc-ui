<template>
  <el-date-picker
    class="dc-date-picker"
    ref="datePicker"
    v-bind="$attrs"
    v-on="$listeners"
    :type="type"
    :style="[wrapStyle]"
    :placeholder="placeholder"
    :start-placeholder="startPlaceholder"
    :end-placeholder="endPlaceholder"
    :value="value"
  >
    <slot></slot>
  </el-date-picker>
</template>

<script>
/**
 * @description DatePicker 日期时间选择器
 * @property {String | Number} width 输入框长度，可以是 100、100px、100%、auto
 * @property {String} type 类型，默认date
 * @property {String} type 时间控件类型 year/month/date/dates/ week/datetime/datetimerange/ daterange/monthrange
 * @example <dc-date-picker v-model="value"></dc-date-picker>
 */
export default {
  name: "dc-date-picker",
  props: {
    value: {
      default: undefined
    },
    width: [String, Number],
    type: {
      type: String,
      default: 'date'
    },
    placeholder: {
      type: String,
      default: '选择日期时间'
    },
    startPlaceholder: {
      type: String,
      default: '开始日期'
    },
    endPlaceholder: {
      type: String,
      default: '结束日期'
    }
  },
  computed: {
    wrapStyle() {
      const style = {};
      // 通过调用addUnit()方法，如果有单位，如百分比、px单位等，直接返回，如果是纯粹的数值，则加上px单位
      if(this.width) style.width = this.$dc.addUnit(this.width)
      return style
    }
  },
}
</script>

<style scoped>

</style>
