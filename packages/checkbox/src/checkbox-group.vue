<template>
  <el-checkbox-group
    class="jw-checkbox-group"
    v-bind="$attrs"
    v-on="$listeners"
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
  </el-checkbox-group>
</template>

<script>
/**
 * @description 复选框群组，可通过options配置，也可以slot传入，一组复选框选择
 * @property {Array} options 复选框按钮群组可通过options配置，也可slot插入，options优先级高于slot，配置项即是 el-checkbox 中的属性，内部做了处理主要会生成 value和label两个属性，其他属性手动传入
 *    - [{value: 1, label: '上海', disabled: true}]
 *    - 直接一个数组 ['上海', '北京'], value和label都为数组中的值
 *    - ['上海', {value: 1, label: '上海'}, {value: 333}]
 * @property {String} mode 当jw-checkbox-group是通过options配置的方式时，有普通形式展示和按钮形式展示，默认不同单选形式，mode="checkbox"(默认)、mode="button"
 *
 * @example <jw-checkbox-group v-model="radio3" size="small" :options="options"></jw-checkbox-group>
 */
export default {
  name: "jw-checkbox-group",
  props: {
    // 配置项
    options: {
      type: Array
    },
    // 配置模式时展示的形式 checkbox、button（jw-checkbox、jw-checkbox-button）
    mode: {
      type: String,
      default: 'checkbox'
    }
  },
  computed: {
    // 展示形式
    getRadioTypeName() {
      return this.mode === 'button' ? 'jw-checkbox-button' : 'jw-checkbox'
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
      return this.$jw.filterObject(item, ['label', 'value', 'v-model'])
    }
  }
}
</script>
