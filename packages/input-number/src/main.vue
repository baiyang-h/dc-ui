<template>
  <el-input-number
    :class="['jw-input-number', wrapAlign]"
    :style="wrapStyle"
    ref="inputNumber"
    v-bind="$attrs"
    v-on="$listeners"
  >
  </el-input-number>
</template>

<script>
/**
 * @description InputNumber 计数器
 * @property {String} align 表单内部文本位置，left居左、center居中、right居右，默认居中
 * @property {String | Number} width input-number的长度，可以是 100、'100'、100px、100%
 * @example <jw-input-number v-model="num" :min="1" :max="10" label="描述文字" :controls="false" align="left" @change="handleChange"></jw-input-number>
 */
export default {
  name: "jw-input-number",
  props: {
    // 表单内容文本位置
    align: {
      type: String,
      default: 'center',   // left、center、right
    },
    width: [String, Number],
  },
  computed: {
    wrapAlign() {
      let name = ''
      if(this.align === 'left') {
        return 'jw-input-number-l'
      } else if(this.align === 'right') {
        return 'jw-input-number-r'
      }
      return name
    },
    wrapStyle() {
      const style = {};
      if(this.width) style.width = this.$jw.addUnit(this.width)
      return style
    }
  }
}
</script>

<style>
.jw-input-number-l .el-input__inner {
  text-align: left;
}
.jw-input-number-r .el-input__inner {
  text-align: right;
}
</style>
