<template>
  <el-select
    class="jw-select"
    v-bind="$attrs"
    v-on="$listeners"
    :style="[wrapStyle]"
  >
    <div v-if="options">
      <template
        v-for="group in options"
      >
        <el-option-group
          v-if="group.options && group.options.length"
          v-bind="group"
          :label="group.label"
          :key="group.label"
        >
          <el-option
            v-for="item in group.options"
            v-bind="item"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-option-group>
        <el-option
          v-else
          v-bind="group"
          :label="group.label"
          :value="group.value"
          :key="group.label"
        >
        </el-option>
      </template>
    </div>
    <slot v-else></slot>
  </el-select>
</template>

<script>
/**
 * @description el-select 选择框封装，增加了可配置方式，通过options配置
 * @property {Array}  options 可配置方式，不使用插槽的模式，直接通过可配置的方式传入，需要有 value、label 属性
 * @property {String | Number} width select的长度，可以是 100、'100'、100px、100%
 * @example <el-select v-model="value" :options="options" @change="change">
 */
export default {
  name: "jw-select",
  props: {
    // {value, label, 其他option属性}
    options: {
      type: Array,
      default: () => []
    },
    width: [String, Number],
  },
  computed: {
    wrapStyle() {
      const style = {};
      // 通过调用addUnit()方法，如果有单位，如百分比、px单位等，直接返回，如果是纯粹的数值，则加上px单位
      style.width = this.$jw.addUnit(this.width)
      return style
    }
  }
}
</script>
