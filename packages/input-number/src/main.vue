<template>
  <div class="jw-input-number jw-inline-block" :class="wrapAlign">
    <el-input-number
      ref="inputNumber"
      v-bind="$attrs"
      v-on="$listeners"
    >
    </el-input-number>
  </div>
</template>

<script>
/**
 * @description InputNumber 计数器
 * @property {String} align 表单内部文本位置，left居左、center居中、right居右，默认居中
 * @example <jw-input-number v-model="num" :min="1" :max="10" label="描述文字" :controls="false" align="left" @change="handleChange"></jw-input-number>
 */
export default {
  name: "jw-input-number",
  props: {
    // 表单内容文本位置
    align: {
      type: String,
      default: 'center',   // left、center、right
    }
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
    }
  }
}
</script>

<style>
.jw-input-number-l .el-input-number .el-input__inner {
  text-align: left;
}
.jw-input-number-r .el-input-number .el-input__inner {
  text-align: right;
}
</style>
