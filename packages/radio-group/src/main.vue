<template>
  <el-radio-group
    class="dc-radio-group"
    v-bind="$attrs"
    v-on="$listeners"
    :value="value"
  >
    <div v-if="options">
      <components
        v-for="(item, index) in genOptions"
        :is="getRadioTypeName"
        :label="item.value"
        v-bind="getRadioAttrs(item)"
        :key="index"
      >
        {{item.label}}
      </components>
    </div>
    <slot v-else></slot>
  </el-radio-group>
</template>

<script>
/**
 * @description 单选按钮群组，可通过options配置，也可以slot传入，一组单选框选择
 * @property {Array} options 单选按钮群组可通过options配置，也可slot插入，options优先级高于slot，配置项即是 el-radio中的属性，内部做了处理主要会生成 value和label两个属性，其他属性手动传入
 *    - [{value: 1, label: '上海', disabled: true}]
 *    - 直接一个数组 ['上海', '北京'], value和label都为数组中的值
 *    - ['上海', {value: 1, label: '上海'}, {value: 333}]
 * @property {String} mode 当dc-radio-group是通过options配置的方式时，有普通形式展示和按钮形式展示，默认不同单选形式，mode="radio"(默认)、mode="button"
 *
 * @example <dc-radio-group v-model="radio3" size="small">xxxx</dc-radio-group>
 */
export default {
  name: "dc-radio-group",
  props: {
    value: {
      default: undefined
    },
    // 配置项
    options: {
      type: Array
    },
    // 配置模式时展示的形式 radio、button（dc-radio、dc-radio-button）
    mode: {
      type: String,
      default: 'radio'
    }
  },
  computed: {
    // 展示形式
    getRadioTypeName() {
      return this.mode === 'button' ? 'el-radio-button' : 'el-radio'
    },
    // 生成一定有 [{value, label}] 字段的options
    genOptions() {
      return this.options.map(item => {
        if(typeof item !== 'object') {
          return {value: item, label: item}
        } else {
          return {...item, value: item.value, label: item.label ?? item.value}
        }
      })
    }
  },
  methods: {
    // 去除相关属性后
    getRadioAttrs(item) {
      return this.$dc.filterObject(item, ['label', 'value', 'v-model'])
    }
  }
}
</script>
