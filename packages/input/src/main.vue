<template>
  <service-input
    v-if="type === 'service'"
    class="dc-input"
    ref="input"
    :style="[wrapStyle]"
    :value="value"
    :options="options"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-for="key in Object.keys($slots)" :slot="key">
      <slot :name="key"></slot>
    </template>
    <template v-slot="slotProps">
      <slot v-bind="slotProps"></slot>
    </template>
  </service-input>
  <el-input
    v-else
    ref="input"
    class="dc-input-service"
    :style="[wrapStyle]"
    v-bind="$attrs"
    v-on="filterListeners"
    :type="wrapType"
    :value="value"
    @input="input"
    @change="change"
  >
    <template v-for="key in Object.keys($slots)" :slot="key">
      <slot :name="key"></slot>
    </template>
    <template v-slot="slotProps">
      <slot v-bind="slotProps"></slot>
    </template>
  </el-input>
</template>

<script>
import serviceInput from './serviceInput'
const isRegExp = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'RegExp'
}
/**
 * @description input 输入框
 *
 * @property {String} value 输入值
 * @property {String} type 类型，有 text、number、textarea、service（其中number时，只能输入数字、service为带提示的输入框）
 * @property {String | Number} width 输入框长度，可以是 100、100px、100%、auto
 * @property {RegExp} reg 正则表达式，输入框在 change 事件时，进行判断，如果不匹配则置为空
 * @property {Array} options 使用与 type=service 详见service-input组件内部说明
 *
 * @slot 可传入插槽
 *
 * @event {Function} input v-model语法糖
 *
 * @example <dc-input v-model="text" width="800" />
 */
export default {
  name: "dc-input",
  components: {
    serviceInput
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text',  // 常规以下几种类型：text、number、textarea、service
    },
    width: [String, Number],
    reg: {
      validator(value) {
        if(!isRegExp(value)) console.error('reg需是一个正则')
        return isRegExp(value)
      }
    },
    // 这是当 type=service 时，模糊查询时，表单默认初始显示的下拉框
    options: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    // 父组件传入的所有事件，但是去除input
    filterListeners() {
      return this.$dc.filterObject(this.$listeners, 'input')
    },
    wrapStyle() {
      const style = {};
      // 通过调用addUnit()方法，如果有单位，如百分比、px单位等，直接返回，如果是纯粹的数值，则加上px单位
      if(this.width) style.width = this.$dc.addUnit(this.width)
      return style
    },
    wrapType() {
      // 考虑到原生 type=number 的影响，所以不使用原生
      return this.type === 'number' ? 'text' : this.type
    }
  },
  methods: {
    input(value) {
      // 类型是 number，只能输入数字
      if(this.type === 'number') {
        value = value.replace(/\D/g, '')
      }
      this.$emit('input', value)
    },
    change(value) {
      // 如果设置了 reg，根据正则规则 change 事件触发的时候判断
      if(isRegExp(this.reg)) {
        this.$emit('input', this.reg.test(value) ? value : '')
      }
    }
  },
}
</script>
