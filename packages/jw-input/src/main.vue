<template>
  <div class="jw-input" :style="[wrapStyle]">
    <div class="jw-input-content" v-if="type === 'service'">
      <service-input
        :value="value"
        :options="options"
        v-bind="$attrs"
        v-on="$listeners"
      >
        <template v-for="key in Object.keys($slots)" :slot="key">
          <slot :name="key"></slot>
        </template>
        <template v-slot="{ item }">
          <slot :item="item"></slot>
        </template>
      </service-input>
    </div>
    <div class="jw-input-content" v-else>
      <el-input
          ref="input"
          v-bind="$attrs"
          v-on="filterListeners"
          :type="type"
          :value="value"
          @input="input"
          @change="change"
      >
        <template v-for="key in Object.keys($slots)" :slot="key">
          <slot :name="key"></slot>
        </template>
      </el-input>
    </div>
  </div>
</template>

<script>
import { isRegExp } from '@/utils/function/type'
import serviceInput from './serviceInput'

/**
 * @description
 *
 * @property {String}
 * @event {Function}
 *
 * @example
 */
export default {
  name: "jw-input",
  components: {
    serviceInput
  },
  emits: ['input'],
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text',  // 常规以下几种类型：text、number、textarea
    },
    width: [String, Number],
    height: [String, Number],
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
      return this.$jw.filterObject(this.$listeners, 'input')
    },
    wrapStyle() {
      const style = {};
      // 通过调用addUnit()方法，如果有单位，如百分比、px单位等，直接返回，如果是纯粹的数值，则加上px单位
      style.width = this.$jw.addUnit(this.width)
      return style
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
